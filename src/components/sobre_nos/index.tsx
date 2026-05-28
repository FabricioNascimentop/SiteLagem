import styles from './style.module.scss'

// Inline SVG illustrations for the 3 info cards
const illustrations = [
  {
    id: 'pesquisa',
    label: 'Pesquisa de Excelência',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
    svg: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mining cart + chart icon illustration */}
        <circle cx="60" cy="50" r="44" fill="rgba(217,142,50,0.08)" stroke="rgba(217,142,50,0.2)" strokeWidth="1"/>
        {/* Mountains */}
        <polyline points="20,72 42,38 55,55 70,30 90,72" stroke="#D98E32" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
        {/* Mining cart */}
        <rect x="34" y="60" width="24" height="14" rx="2" stroke="#D98E32" strokeWidth="2" fill="none"/>
        <line x1="34" y1="65" x2="58" y2="65" stroke="#D98E32" strokeWidth="1.5"/>
        <circle cx="39" cy="76" r="3" stroke="#D98E32" strokeWidth="1.5" fill="none"/>
        <circle cx="53" cy="76" r="3" stroke="#D98E32" strokeWidth="1.5" fill="none"/>
        {/* Chart bars */}
        <rect x="68" y="54" width="6" height="16" rx="1" fill="#D98E32" opacity="0.6"/>
        <rect x="77" y="46" width="6" height="24" rx="1" fill="#D98E32" opacity="0.8"/>
        <rect x="86" y="38" width="6" height="32" rx="1" fill="#D98E32"/>
        {/* Person */}
        <circle cx="84" cy="32" r="4" stroke="#D98E32" strokeWidth="1.5" fill="none"/>
        <path d="M76 44 Q80 36 84 36 Q88 36 92 44" stroke="#D98E32" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'dados',
    label: 'Dados & Análises',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.',
    svg: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="50" r="44" fill="rgba(217,142,50,0.08)" stroke="rgba(217,142,50,0.2)" strokeWidth="1"/>
        {/* Hexagon grid pattern */}
        <polygon points="60,20 74,28 74,44 60,52 46,44 46,28" stroke="#D98E32" strokeWidth="2" fill="rgba(217,142,50,0.1)"/>
        <polygon points="74,44 88,52 88,68 74,76 60,68 60,52" stroke="#D98E32" strokeWidth="1.5" fill="rgba(217,142,50,0.06)" strokeDasharray="4 2"/>
        <polygon points="46,44 60,52 60,68 46,76 32,68 32,52" stroke="#D98E32" strokeWidth="1.5" fill="rgba(217,142,50,0.06)" strokeDasharray="4 2"/>
        {/* Data points */}
        <circle cx="60" cy="36" r="3" fill="#D98E32"/>
        <circle cx="74" cy="44" r="2" fill="#D98E32" opacity="0.6"/>
        <circle cx="46" cy="44" r="2" fill="#D98E32" opacity="0.6"/>
        {/* Lines connecting */}
        <line x1="60" y1="36" x2="74" y2="44" stroke="#D98E32" strokeWidth="1" opacity="0.5"/>
        <line x1="60" y1="36" x2="46" y2="44" stroke="#D98E32" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'politicas',
    label: 'Políticas Públicas',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    svg: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="50" r="44" fill="rgba(217,142,50,0.08)" stroke="rgba(217,142,50,0.2)" strokeWidth="1"/>
        {/* Building/Institution icon */}
        <rect x="32" y="55" width="56" height="26" rx="1" stroke="#D98E32" strokeWidth="2" fill="rgba(217,142,50,0.08)"/>
        <polygon points="60,28 88,55 32,55" stroke="#D98E32" strokeWidth="2" fill="rgba(217,142,50,0.12)" strokeLinejoin="round"/>
        {/* Columns */}
        <rect x="42" y="62" width="5" height="18" rx="1" fill="#D98E32" opacity="0.5"/>
        <rect x="52" y="62" width="5" height="18" rx="1" fill="#D98E32" opacity="0.5"/>
        <rect x="63" y="62" width="5" height="18" rx="1" fill="#D98E32" opacity="0.5"/>
        <rect x="73" y="62" width="5" height="18" rx="1" fill="#D98E32" opacity="0.5"/>
        {/* Star/symbol at top */}
        <circle cx="60" cy="42" r="5" stroke="#D98E32" strokeWidth="1.5" fill="rgba(217,142,50,0.2)"/>
        <circle cx="60" cy="42" r="2" fill="#D98E32"/>
      </svg>
    ),
  },
]

const estudanteLinks = [
  { label: 'Processo Seletivo', href: '#' },
  { label: 'Bolsas Disponíveis', href: '#' },
  { label: 'Projetos em Andamento', href: '#' },
  { label: 'Publicações dos Alunos', href: '#' },
]

export default function SobreNos() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        {/* Section eyebrow */}
        <div className={styles.eyebrowWrap}>
          <span className={styles.eyebrow}>O Laboratório</span>
          <h2 className={styles.sectionTitle}>O LAGEM</h2>
        </div>

        {/* 4-column grid */}
        <div className={styles.grid}>
          {illustrations.map(item => (
            <div key={item.id} className={styles.illustrationCard}>
              <div className={styles.svgWrap}>{item.svg}</div>
              <h3 className={styles.cardLabel}>{item.label}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}

          {/* Sobre os alunos card */}
          <aside className={styles.estudantesCard}>
            <div className={styles.estudantesTop}>
              <span className={styles.estudantesEyebrow}>Faça parte</span>
              <h3 className={styles.estudantesTitulo}>Sobre os Alunos</h3>
              <p className={styles.estudantesDesc}>
                O LAGEM acolhe estudantes de graduação, mestrado e doutorado em Economia e áreas
                afins, oferecendo ambiente de pesquisa colaborativo e bolsas de iniciação científica.
              </p>
            </div>

            <div className={styles.estudantesStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>12</span>
                <span className={styles.statLabel}>Pesquisadores</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>8</span>
                <span className={styles.statLabel}>Bolsistas</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>34</span>
                <span className={styles.statLabel}>Publicações</span>
              </div>
            </div>

            <nav className={styles.estudantesLinks}>
              {estudanteLinks.map(link => (
                <a key={link.href + link.label} href={link.href} className={styles.estudantesLink}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </section>
  )
}
