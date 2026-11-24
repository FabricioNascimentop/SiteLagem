'use client'

import Link from "next/link"
import styles from "./style.module.scss"

interface EditarClientProps {
  nomeUsuario: string
}

const areas = [
  {
    numero: "01",
    titulo: "Banner principal",
    descricao: "Gerencie os slides e imagens de destaque da página inicial.",
    href: "/editar/banner",
    acao: "Gerenciar banner",
  },
  {
    numero: "02",
    titulo: "Publicações",
    descricao: "Cadastre e atualize artigos, livros, teses e dissertações.",
    href: "/editar/publis",
    acao: "Gerenciar publicações",
  },
  {
    numero: "03",
    titulo: "Trabalhos",
    descricao: "Organize os projetos, painéis e dashboards do laboratório.",
    href: "/editar/trabalhos",
    acao: "Gerenciar trabalhos",
  },
  {
    numero: "04",
    titulo: "Notícias",
    descricao: "Publique notícias, eventos e outras divulgações institucionais.",
    href: "/editar/noticias",
    acao: "Gerenciar notícias",
  },
]

export default function EditarClient({ nomeUsuario }: EditarClientProps) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/" className={styles.voltar}>← Voltar ao site</Link>
        <span className={styles.identificacao}>LAGEM · ADMINISTRAÇÃO</span>
      </header>

      <section className={styles.conteudo}>
        <div className={styles.introducao}>
          <span className={styles.sobretitulo}>PAINEL DE CONTROLE</span>
          <h1>Área de administração</h1>
          <p className={styles.boasVindas}>Olá, {nomeUsuario}.</p>
          <p className={styles.explicacao}>
            Este é o painel de administração do LAGEM. Por aqui, você pode
            atualizar os conteúdos do site, adicionar novas informações e
            manter as publicações e divulgações sempre atualizadas.
          </p>
        </div>

        <div className={styles.cabecalhoAreas}>
          <h2>O que deseja administrar?</h2>
          <span>4 áreas disponíveis</span>
        </div>

        <div className={styles.grade}>
          {areas.map((area) => (
            <Link href={area.href} className={styles.card} key={area.numero}>
              <div className={styles.cardTopo}>
                <span className={styles.numero}>{area.numero}</span>
                <span className={styles.seta} aria-hidden="true">↗</span>
              </div>
              <h3>{area.titulo}</h3>
              <p>{area.descricao}</p>
              <span className={styles.acao}>{area.acao} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>

        <footer className={styles.rodape}>
          <span className={styles.indicador} />
          Área administrativa · LAGEM / UFPA
        </footer>
      </section>
    </main>
  )
}