'use client'

import { useState, useTransition, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import type { divulgacoes } from "@/generated/prisma/client"
import { apagarBanner, criarBanner, editarBanner } from "./actions"
import styles from "./style.module.scss"

type Banner = divulgacoes

interface BannerEditProps {
  bannerInfo: Banner[]
}

export default function BannerEditClient({ bannerInfo }: BannerEditProps) {
  const router = useRouter()
  const [bannerSelecionado, setBannerSelecionado] = useState<Banner | null>(null)
  const [modalAberto, setModalAberto] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [isPending, startTransition] = useTransition()

  function abrirCriacao() {
    setFeedback("")
    setBannerSelecionado(null)
    setModalAberto(true)
  }

  function abrirEdicao(banner: Banner) {
    setFeedback("")
    setBannerSelecionado(banner)
    setModalAberto(true)
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
        setModalAberto(false)
        router.refresh()
      }
    })
  }

  function excluir(id: number) {
    const confirmado = window.confirm("Tem certeza que deseja excluir este banner? Essa ação não pode ser desfeita.")
    if (!confirmado) return

    startTransition(async () => {
      const resultado = await apagarBanner(id)
      setFeedback(resultado.message)
      if (resultado.success) router.refresh()
    })
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <a href="/editar" className={styles.voltar}>← Painel de administração</a>
        <span className={styles.identificacao}>LAGEM · ADMINISTRAÇÃO</span>
      </header>

      <section className={styles.conteudo}>
        <div className={styles.introducao}>
          <span className={styles.sobretitulo}>CONTEÚDO DA PÁGINA INICIAL</span>
          <h1>Banner principal</h1>
          <p>Gerencie os destaques exibidos no carrossel da página inicial. As alterações em banners publicados aparecem no site após salvar.</p>
        </div>

        <div className={styles.acoesTopo}>
          <div>
            <h2>Banners cadastrados</h2>
            <span>{bannerInfo.length} {bannerInfo.length === 1 ? "banner" : "banners"}</span>
          </div>
          <button type="button" className={styles.botaoPrimario} onClick={abrirCriacao}>
            + Adicionar banner
          </button>
        </div>

        {feedback && !modalAberto && <p className={styles.feedback} role="status">{feedback}</p>}

        {bannerInfo.length === 0 ? (
          <div className={styles.vazio}>
            <h3>Nenhum banner cadastrado</h3>
            <p>Adicione o primeiro destaque para ele aparecer nesta área.</p>
            <button type="button" className={styles.botaoPrimario} onClick={abrirCriacao}>Adicionar primeiro banner</button>
          </div>
        ) : (
          <div className={styles.grade}>
            {bannerInfo.map((banner) => (
              <article className={styles.card} key={banner.id}>
                <div
                  className={styles.imagem}
                  style={{ backgroundImage: `url("${banner.imagem_url}")` }}
                  role="img"
                  aria-label={banner.alt_text || banner.titulo}
                >
                  <span className={banner.status === "PUBLICADO" ? styles.publicado : styles.rascunho}>
                    {banner.status === "PUBLICADO" ? "Publicado" : "Rascunho"}
                  </span>
                  <span className={styles.ordem}>Ordem {banner.ordem}</span>
                </div>
                <div className={styles.cardConteudo}>
                  <h3>{banner.titulo}</h3>
                  <p>{banner.descricao || "Sem descrição cadastrada."}</p>
                  <div className={styles.cardAcoes}>
                    <button type="button" className={styles.botaoSecundario} onClick={() => abrirEdicao(banner)}>
                      Editar
                    </button>
                    <button type="button" className={styles.botaoExcluir} disabled={isPending} onClick={() => excluir(banner.id)}>
                      Excluir
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {modalAberto && (
        <div className={styles.overlay} role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget && !isPending) setModalAberto(false)
        }}>
          <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
            <div className={styles.modalTopo}>
              <div>
                <span className={styles.sobretitulo}>{bannerSelecionado ? "ATUALIZAÇÃO" : "NOVO CONTEÚDO"}</span>
                <h2 id="modal-titulo">{bannerSelecionado ? "Editar banner" : "Adicionar banner"}</h2>
              </div>
              <button type="button" className={styles.fechar} onClick={() => setModalAberto(false)} disabled={isPending} aria-label="Fechar">×</button>
            </div>

            <form key={bannerSelecionado?.id ?? "novo"} className={styles.formulario} onSubmit={salvar}>
              <label>
                Título *
                <input name="titulo" required maxLength={180} defaultValue={bannerSelecionado?.titulo ?? ""} placeholder="Título do destaque" />
              </label>

              <label>
                URL da imagem *
                <input name="imagem_url" type="url" required defaultValue={bannerSelecionado?.imagem_url ?? ""} placeholder="https://..." />
              </label>

              <label>
                Texto alternativo da imagem
                <input name="alt_text" maxLength={250} defaultValue={bannerSelecionado?.alt_text ?? ""} placeholder="Descreva a imagem para acessibilidade" />
              </label>

              <label>
                Descrição
                <textarea name="descricao" rows={3} maxLength={500} defaultValue={bannerSelecionado?.descricao ?? ""} placeholder="Texto exibido junto ao destaque" />
              </label>

              <div className={styles.linhaCampos}>
                <label>
                  Link de destino
                  <input name="link_destino" type="url" defaultValue={bannerSelecionado?.link_destino ?? ""} placeholder="https://..." />
                </label>
                <label>
                  Fonte / crédito
                  <input name="fonte" defaultValue={bannerSelecionado?.fonte ?? ""} placeholder="Origem da imagem" />
                </label>
              </div>

              <div className={styles.linhaCampos}>
                <label>
                  Ordem de exibição
                  <input name="ordem" type="number" min="0" step="1" defaultValue={bannerSelecionado?.ordem ?? 0} />
                </label>
                <label>
                  Status
                  <select name="status" defaultValue={bannerSelecionado?.status ?? "RASCUNHO"}>
                    <option value="RASCUNHO">Rascunho</option>
                    <option value="PUBLICADO">Publicado</option>
                  </select>
                </label>
              </div>

              {feedback && <p className={styles.erro} role="alert">{feedback}</p>}

              <div className={styles.formAcoes}>
                <button type="button" className={styles.botaoSecundario} onClick={() => setModalAberto(false)} disabled={isPending}>Cancelar</button>
                <button type="submit" className={styles.botaoPrimario} disabled={isPending}>
                  {isPending ? "Salvando..." : "Salvar banner"}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  )
}
