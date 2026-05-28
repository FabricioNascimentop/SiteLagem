'use client'
import { useEffect } from 'react'
import CardTrabalho from '@/components/CardTrabalho'
import styles from './style.module.scss'

const trabalhos = [
  {
    id: 1,
    titulo: 'Royalties Minerais e Desenvolvimento Local: Evidências dos Municípios Paraenses',
    autores: 'Silva, A. R.; Mendes, C. F.; Costa, R. P.',
    ano: '2025',
    tipo: 'Artigo',
    resumo: 'Este estudo analisa a relação entre os repasses de CFEM e indicadores socioeconômicos em municípios mineradores do Pará entre 2010 e 2024, identificando padrões de uso e eficácia dos recursos.',
    href: '#',
    tags: ['CFEM', 'Pará', 'Royalties', 'Desenvolvimento'],
  },
  {
    id: 2,
    titulo: 'Governança Fiscal em Municípios Dependentes da Mineração: Uma Análise Comparativa',
    autores: 'Oliveira, M. T.; Ferreira, J. S.',
    ano: '2025',
    tipo: 'Working Paper',
    resumo: 'Análise comparativa da capacidade de gestão fiscal em municípios com alta dependência de receitas minerais na Amazônia Legal, investigando riscos de volatilidade orçamentária.',
    href: '#',
    tags: ['Governança', 'Fiscal', 'Amazônia'],
  },
  {
    id: 3,
    titulo: 'Maldição dos Recursos Naturais: Evidências para os Municípios Mineradores Brasileiros',
    autores: 'Carvalho, L. A.; Lima, P. B.; Santos, G. M.',
    ano: '2024',
    tipo: 'Dissertação',
    resumo: 'Investigação empírica sobre a hipótese da maldição dos recursos naturais em escala municipal, com foco nos efeitos de longo prazo da extração mineral sobre o desenvolvimento humano.',
    href: '#',
    tags: ['Recursos Naturais', 'Desenvolvimento', 'Econometria'],
  },
  {
    id: 4,
    titulo: 'Transparência e Accountability na Gestão dos Royalties Minerais',
    autores: 'Pinheiro, R. C.; Gomes, A. B.',
    ano: '2024',
    tipo: 'Relatório',
    resumo: 'Avaliação dos mecanismos de transparência e controle social na gestão dos recursos provenientes da compensação financeira pela exploração mineral em estados amazônicos.',
    href: '#',
    tags: ['Transparência', 'Controle Social', 'Mineração'],
  },
  {
    id: 5,
    titulo: 'Índice de Dependência Mineral Municipal (IDMM): Proposta Metodológica',
    autores: 'Silva, A. R.; Ribeiro, T. M.; Alves, C. P.',
    ano: '2024',
    tipo: 'Nota Técnica',
    resumo: 'Proposta de novo índice para mensurar o grau de dependência econômica de municípios em relação às receitas oriundas da exploração de recursos minerais, com aplicação piloto no Pará.',
    href: '#',
    tags: ['Metodologia', 'Indicadores', 'IDMM'],
  },
]

export default function NossosTrabalhos() {
  useEffect(() => {
    import('swiper').then(({ default: Swiper }) => {
      import('swiper/modules').then(({ Navigation, Pagination }) => {
        new Swiper('.trabalhos-swiper', {
          modules: [Navigation, Pagination],
          slidesPerView: 1.1,
          spaceBetween: 20,
          grabCursor: true,
          navigation: {
            nextEl: '.trabalhos-next',
            prevEl: '.trabalhos-prev',
          },
          pagination: {
            el: '.trabalhos-pagination',
            clickable: true,
          },
          breakpoints: {
            640: { slidesPerView: 1.8, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.1, spaceBetween: 24 },
            1280: { slidesPerView: 3.5, spaceBetween: 28 },
          },
        })
      })
    })
  }, [])

  return (
    <section id="pesquisas" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.eyebrow}>Produção Científica</span>
            <h2 className={styles.title}>Nossos Trabalhos</h2>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.navButtons}>
            <button className={`trabalhos-prev ${styles.navBtn}`} aria-label="Anterior">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button className={`trabalhos-next ${styles.navBtn}`} aria-label="Próximo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className={`swiper trabalhos-swiper ${styles.swiper}`}>
          <div className="swiper-wrapper">
            {trabalhos.map(t => (
              <div key={t.id} className="swiper-slide" style={{ height: 'auto' }}>
                <CardTrabalho {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className={`trabalhos-pagination ${styles.pagination}`} />
      </div>
    </section>
  )
}
