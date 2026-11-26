'use client'

import { useEffect, useState, useTransition, type FormEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import type { divulgacoes } from "@/generated/prisma/client"
import { apagarBanner, criarBanner, editarBanner } from "./actions/CRUD/banner"
import { uploadBannerImagem } from "./actions/CRUD/uploadImagem"
import styles from "./style.module.scss"

type Banner = divulgacoes

interface BannerEditProps {
  bannerInfo: Banner[]
}


export default function BannerEditClient({ bannerInfo }: BannerEditProps) {
  const router = useRouter()
  const [bannerSelecionado, setBannerSelecionado] = useState<Banner | null>(null)
  const [criando, setCriando] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [imagemUrl, setImagemUrl] = useState("")
  const [dimensoesImagem, setDimensoesImagem] = useState<string | null>(null)
  const [formatoImagem, setFormatoImagem] = useState("—")
  const [pesoImagem, setPesoImagem] = useState("—")
  const [uploadando, setUploadando] = useState(false)
  const [isPending, startTransition] = useTransition()

  // Obtém as dimensões reais da imagem pelo carregamento no navegador.
  useEffect(() => {
    setDimensoesImagem(null)
    setFormatoImagem("—")
    if (!imagemUrl.trim()) return

    let url: URL
    try {
      url = new URL(imagemUrl)
      if (!["http:", "https:"].includes(url.protocol)) throw new Error()
    } catch {
      setFormatoImagem("URL inválida")
      return
    }

    const extensao = url.pathname.match(/\.(avif|webp|png|jpe?g|gif|svg|bmp|tiff?)$/i)?.[1]
    setFormatoImagem(extensao ? extensao.toUpperCase() : "Não identificado")

    let ativo = true
    const imagem = new window.Image()
    imagem.onload = () => {
      if (ativo) setDimensoesImagem(`${imagem.naturalWidth} × ${imagem.naturalHeight} px`)
    }
    imagem.onerror = () => {
      if (ativo) setDimensoesImagem("Não foi possível carregar a imagem")
    }
    imagem.src = imagemUrl

    return () => { ativo = false }
  }, [imagemUrl])

  async function enviarImagem(arquivo: File) {   setUploadando(true);  setFeedback("");   setDimensoesImagem(`${arquivo.size ? "Calculando dimensões..." : "—"}`);    setFormatoImagem(arquivo.type.split("/")[1]?.toUpperCase() || "Não identificado");    setPesoImagem(arquivo.size < 1024 * 1024 ? `${(arquivo.size / 1024).toFixed(1)} KB` : `${(arquivo.size / 1024 / 1024).toFixed(2)} MB`);    const localPreview = URL.createObjectURL(arquivo);    const imagem = new window.Image();    imagem.onload = () => { setDimensoesImagem(`${imagem.naturalWidth} × ${imagem.naturalHeight} px`); URL.revokeObjectURL(localPreview) };   imagem.src = localPreview    ;try {const dados = new FormData();     dados.set("arquivo", arquivo);     const resultado = await uploadBannerImagem(dados);      if (!resultado.success || !resultado.url) { setFeedback(resultado.message); return }    setImagemUrl(resultado.url);      setFeedback("Imagem enviada. Salve o banner para registrar as alterações.")    } catch { setFeedback("Falha ao enviar a imagem.") }   finally { setUploadando(false) } }  function selecionarBanner(banner: Banner) {
    setBannerSelecionado(banner)
    setImagemUrl(banner.imagem_url ?? "")
    setCriando(false)
    setFeedback("")
  }

  function novoBanner() {
    setBannerSelecionado(null)
    setImagemUrl("")
    setCriando(true)
    setFeedback("")
  }


  function salvar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    startTransition(async () => {
      const resultado = bannerSelecionado
        ? await editarBanner(bannerSelecionado.id, formData)
        : await criarBanner(formData)

      setFeedback(resultado.message)

      if (resultado.success) {
        router.refresh()
        if (!bannerSelecionado) setCriando(false)
      }
    })
  }

  function excluir(id: number) {
    if (!window.confirm("Tem certeza que deseja excluir este banner? Essa ação não pode ser desfeita.")) return

    startTransition(async () => {
      const resultado = await apagarBanner(id)
      setFeedback(resultado.message)

      if (resultado.success) {
        if (bannerSelecionado?.id === id) {
          setBannerSelecionado(null)
          setCriando(false)
        }
        router.refresh()
      }
    })
  }

  const editorAtivo = criando || bannerSelecionado !== null
  const imagemUrlValida = /^https?:\/\/.+/i.test(imagemUrl)

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/editar" className={styles.voltar}>← Painel</Link>
        <div className={styles.headerTitulo}>
          <span>LAGEM</span>
          <i />
          <span>GERENCIAR BANNERS</span>
        </div>
        <span className={styles.contador}>{bannerInfo.length} {bannerInfo.length === 1 ? "banner" : "banners"}</span>
      </header>

      <section className={styles.workspace}>
        <aside className={styles.listaPainel}>
          <div className={styles.listaTopo}>
            <div>
              <span className={styles.sobretitulo}>PÁGINA INICIAL</span>
              <h1>Banners</h1>
              <p>Selecione um banner para editar.</p>
            </div>
            <button type="button" className={styles.novoBotao} onClick={novoBanner}>
              <span>+</span> Novo
            </button>
          </div>

          <div className={styles.listaCards}>
            {bannerInfo.length === 0 ? (
              <div className={styles.listaVazia}>
                <span>01</span>
                <p>Nenhum banner cadastrado.</p>
              </div>
            ) : (
              bannerInfo.map((banner, index) => (
                <article
                  key={banner.id}
                  className={`${styles.bannerItem} ${bannerSelecionado?.id === banner.id ? styles.bannerAtivo : ""}`}
                >
                  <button
                    type="button"
                    className={styles.bannerSelecionar}
                    onClick={() => selecionarBanner(banner)}
                    aria-pressed={bannerSelecionado?.id === banner.id}
                  >
                    <div className={styles.bannerThumb}>
                      <Image
                        src={banner.imagem_url || "/hero/placeholder.png"}
                        alt={banner.alt_text || banner.titulo}
                        fill
                        unoptimized
                        sizes="(max-width: 700px) 90vw, 30vw"
                      />
                      <span className={styles.thumbIndice}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className={styles.bannerResumo}>
                      <strong>{banner.titulo}</strong>
                      <span className={banner.status === "PUBLICADO" ? styles.statusPublicado : styles.statusRascunho}>
                        <i /> {banner.status === "PUBLICADO" ? "Publicado" : "Rascunho"}
                      </span>
                    </div>
                    <span className={styles.chevron}>›</span>
                  </button>
                  <button
                    type="button"
                    className={styles.excluirItem}
                    onClick={() => excluir(banner.id)}
                    disabled={isPending}
                    aria-label={`Excluir ${banner.titulo}`}
                    title="Excluir banner"
                  >
                    ×
                  </button>
                </article>
              ))
            )}
          </div>

          <div className={styles.listaRodape}>
            <span className={styles.pontoAtivo} />
            As alterações são refletidas na página inicial após salvar.
          </div>
        </aside>

        <section className={styles.editorPainel}>
          {!editorAtivo ? (
            <MockupEmBranco onCriarNovoBanner={novoBanner}/>
          ) : (
            <div className={styles.editorConteudo} key={bannerSelecionado?.id ?? "novo"}>
              <div className={styles.editorTopo}>
                <div>
                  <span className={styles.sobretitulo}>{criando ? "NOVO CONTEÚDO" : "EDITANDO CONTEÚDO"}</span>
                  <h2>{criando ? "Adicionar banner" : bannerSelecionado?.titulo}</h2>
                  <p>{criando ? "Preencha os campos para cadastrar um novo destaque." : "Atualize os campos e salve para publicar as alterações."}</p>
                </div>
                <span className={styles.editorTag}>{criando ? "NOVO" : `#${bannerSelecionado?.id}`}</span>
              </div>

              <form className={styles.formulario} onSubmit={salvar}>
                <div className={styles.campo}>
                  <label htmlFor="titulo">Título do banner <span>*</span></label>
                  <input id="titulo" name="titulo" required maxLength={180} defaultValue={bannerSelecionado?.titulo ?? ""} placeholder="Ex.: Desenvolvimento e pesquisa na Amazônia" />
                </div>

                <div className={styles.campo}>
                  <label htmlFor="imagem_url">Endereço da imagem <span>*</span></label>
                  <input id="imagem_url" name="imagem_url" type="text" required value={imagemUrl} onChange={(event) => setImagemUrl(event.target.value)} placeholder="https://..." />
                  <small>Informe uma URL pública de imagem. A prévia identifica as dimensões disponíveis.</small>
                  <div className={styles.imagemInfo}>
                    {imagemUrl && (
                      <div className={styles.imagemPreview}>
                        <Image src={imagemUrl} alt="Prévia da imagem do banner" fill unoptimized sizes="(max-width: 700px) 90vw, 420px" />
                      </div>
                    )}
                    <div className={styles.imagemMetadados}>
                      <div><span>Dimensões atuais</span><strong>{dimensoesImagem ?? (imagemUrl ? "Carregando..." : "Aguardando URL")}</strong></div>
                      <div><span>Formato identificado</span><strong>{formatoImagem}</strong></div>\n                      <div><span>Peso do arquivo</span><strong>{pesoImagem}</strong></div>
                      <div><span>Tamanho recomendado</span><strong>1920 × 1080 px (16:9)</strong></div>
                      <div><span>Formato recomendado</span><strong>WebP ou AVIF</strong></div>
                    </div>
                  </div>
                </div>

                <div className={styles.campo}>
                  <label htmlFor="alt_text">Texto alternativo</label>
                  <input id="alt_text" name="alt_text" maxLength={250} defaultValue={bannerSelecionado?.alt_text ?? ""} placeholder="Descrição da imagem para acessibilidade" />
                </div>

                <div className={styles.campo}>
                  <label htmlFor="descricao">Descrição</label>
                  <textarea id="descricao" name="descricao" rows={4} maxLength={500} defaultValue={bannerSelecionado?.descricao ?? ""} placeholder="Texto complementar do banner..." />
                </div>

                <div className={styles.duasColunas}>
                  <div className={styles.campo}>
                    <label htmlFor="link_destino">Link de destino</label>
                    <input id="link_destino" name="link_destino" type="text" defaultValue={bannerSelecionado?.link_destino ?? ""} placeholder="https://..." />
                  </div>
                  <div className={styles.campo}>
                    <label htmlFor="fonte">Crédito da imagem</label>
                    <input id="fonte" name="fonte" defaultValue={bannerSelecionado?.fonte ?? ""} placeholder="Fonte / autoria" />
                  </div>
                </div>

                <div className={styles.duasColunas}>
                  <div className={styles.campo}>
                    <label htmlFor="ordem">Ordem de exibição</label>
                    <input id="ordem" name="ordem" type="number" min="0" step="1" defaultValue={bannerSelecionado?.ordem ?? 0} />
                  </div>
                  <div className={styles.campo}>
                    <label htmlFor="status">Visibilidade</label>
                    <select id="status" name="status" defaultValue={bannerSelecionado?.status ?? "RASCUNHO"}>
                      <option value="RASCUNHO">Rascunho</option>
                      <option value="PUBLICADO">Publicado</option>
                    </select>
                  </div>
                </div>

                {feedback && <p className={styles.feedback} role="status">{feedback}</p>}

                <div className={styles.formRodape}>
                  <span><i /> Campos com * são obrigatórios</span>
                  <div>
                    <button type="button" className={styles.cancelarBotao} onClick={() => { setCriando(false); setBannerSelecionado(null); setImagemUrl(""); setFeedback("") }} disabled={isPending}>Cancelar</button>
                    <button type="submit" className={styles.botaoPrimario} disabled={isPending}>
                      {isPending ? "Salvando..." : uploadando ? "Enviando imagem..." : criando ? "Criar banner" : "Salvar alterações"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </section>
      </section>
    </main>
  )
}


function MockupEmBranco({onCriarNovoBanner}:{ onCriarNovoBanner: () => void }){
  return(
     <div className={styles.editorVazio}>
              <div className={styles.iconeVazio}>↗</div>
              <span className={styles.sobretitulo}>EDITOR DE CONTEÚDO</span>
              <h2>Escolha um banner</h2>
              <p>Selecione um item na lista ao lado para editar suas informações ou crie um novo banner.</p>
              <button type="button" className={styles.botaoPrimario} onClick={onCriarNovoBanner}>+ Criar novo banner</button>
      </div>
  )
}