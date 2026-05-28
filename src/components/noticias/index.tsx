import CardNoticia from '@/components/CardNoticia'
import styles from './style.module.scss'

const noticias = [
  {
    id: 1,
    titulo: 'LAGEM publica estudo sobre CFEM e desenvolvimento municipal no Pará',
    data: '28/05/2026',
    img_path: '/images/noticia1.jpg',
    resumo: 'Pesquisa analisa o impacto das compensações financeiras pela exploração mineral nos indicadores de desenvolvimento socioeconômico dos municípios paraenses.',
    href: '#',
  },
  {
    id: 2,
    titulo: 'Novo relatório mapeia municipios mineradores da Amazônia',
    data: '21/05/2026',
    img_path: '/images/noticia2.jpg',
    resumo: 'Levantamento inédito identifica 48 municípios com alta dependência de receitas minerais, destacando vulnerabilidades fiscais e oportunidades de diversificação.',
    href: '#',
  },
  {
    id: 3,
    titulo: 'Pesquisadores do LAGEM participam de seminário internacional',
    data: '14/05/2026',
    img_path: '/images/noticia3.jpg',
    resumo: 'Equipe do laboratório apresentou resultados em evento promovido pela Universidade de São Paulo sobre economia dos recursos naturais na América Latina.',
    href: '#',
  },
]

const noticiaDestaque = {
  titulo: 'LAGEM firma parceria com Secretaria de Estado de Mineração do Pará',
  data: '28/05/2026',
  img_path: '/images/destaque.jpg',
  resumo: 'Acordo prevê desenvolvimento conjunto de ferramentas de transparência fiscal e indicadores de desempenho para os municípios mineradores da região, fortalecendo a capacidade técnica dos gestores públicos locais. A iniciativa representa um marco para a pesquisa aplicada no setor mineral amazônico.',
  href: '#',
}

export default function Noticias() {
  return (
    <section id="noticias" className={styles.section}>
      <div className={styles.container}>
        {/* Ticker */}
        <div className={styles.ticker}>
          <span className={styles.tickerLabel}>ÚLTIMAS NOTÍCIAS</span>
          <div className={styles.tickerTrack}>
            <span>
              Novo relatório LAGEM sobre receitas minerais disponível para download • Pesquisadores
              participam do Seminário Nacional de Economia Mineral • LAGEM integra rede de pesquisa
              da UFPA em parceria com IBRAM • Edital para bolsas de pesquisa aberto até 15/06/2026 •
            </span>
          </div>
        </div>

        {/* Section header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>Acompanhe</span>
            <h2 className={styles.title}>Notícias</h2>
          </div>
          <a href="#" className={styles.verTodas}>
            Ver todas as notícias
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {/* Cards list */}
          <div className={styles.cardsList}>
            {noticias.map(noticia => (
              <CardNoticia key={noticia.id} {...noticia} />
            ))}
          </div>

          {/* Notícia em destaque */}
          <aside className={styles.destaque}>
            <div className={styles.destaqueInner}>
              <span className={styles.destaqueLabel}>Em destaque</span>
              <div className={styles.destaqueImgWrap}>
                <img
                  src={noticiaDestaque.img_path}
                  alt={noticiaDestaque.titulo}
                  className={styles.destaqueImg}
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement
                    el.style.display = 'none'
                  }}
                />
                <div className={styles.destaqueImgFallback}>
                  <svg viewBox="0 0 80 80" fill="none" width="60" height="60">
                    <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                    <polygon points="40,16 64,28 64,52 40,64 16,52 16,28" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
              </div>
              <div className={styles.destaqueBody}>
                <time className={styles.destaqueDate}>{noticiaDestaque.data}</time>
                <h3 className={styles.destaqueTitulo}>
                  <a href={noticiaDestaque.href}>{noticiaDestaque.titulo}</a>
                </h3>
                <p className={styles.destaqueResumo}>{noticiaDestaque.resumo}</p>
                <a href={noticiaDestaque.href} className={styles.destaqueCta}>
                  Saiba mais
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
