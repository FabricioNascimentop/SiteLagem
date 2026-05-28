import styles from './style.module.scss'

const linksUteis = [
  { label: 'UFPA — Universidade Federal do Pará', href: 'https://www.ufpa.br' },
  { label: 'IBRAM — Instituto Brasileiro de Mineração', href: 'https://ibram.org.br' },
  { label: 'DNPM — Departamento Nacional de Produção Mineral', href: '#' },
  { label: 'ANM — Agência Nacional de Mineração', href: '#' },
  { label: 'Portal da Transparência', href: '#' },
  { label: 'SEMAS Pará', href: '#' },
]

const pagesLinks = [
  { label: 'Sobre o LAGEM', href: '#sobre' },
  { label: 'Pesquisas', href: '#pesquisas' },
  { label: 'Publicações', href: '#' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand + social */}
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <img src="/logo.png" alt="LAGEM Logo" className={styles.logo} />
            </div>
            <div className={styles.brandInfo}>
              <span className={styles.brandName}>LAGEM</span>
              <span className={styles.brandFull}>
                Laboratório de Estudos em Governança de Municípios Mineradores
              </span>
              <span className={styles.brandUfpa}>Universidade Federal do Pará</span>
            </div>

            {/* Social prompt */}
            <p className={styles.socialLabel}>Acompanhe nossas redes sociais</p>
            <div className={styles.socialLinks}>
              {/* Instagram */}
              <a href="#" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <img src="/vetorial/instagram.svg" alt="Instagram" width={22} height={22} />
              </a>
              {/* Facebook */}
              <a href="#" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <img src="/vetorial/facebook.svg" alt="Facebook" width={22} height={22} />
              </a>
              {/* LinkedIn */}
              <a href="#" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <img src="/vetorial/linkedin.svg" alt="LinkedIn" width={22} height={22} />
              </a>
              {/* YouTube */}
              <a href="#" className={styles.socialLink} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <img src="/vetorial/youtube.svg" alt="YouTube" width={22} height={22} />
              </a>
              {/* Twitter/X */}
              <a href="#" className={styles.socialLink} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <img src="/vetorial/twitter.svg" alt="Twitter" width={22} height={22} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className={styles.linksGrid}>
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Navegação</h4>
              <ul className={styles.linkList}>
                {pagesLinks.map(link => (
                  <li key={link.href + link.label}>
                    <a href={link.href} className={styles.footerLink}>
                      <span className={styles.linkDot} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Links Úteis</h4>
              <ul className={styles.linkList}>
                {linksUteis.map(link => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className={styles.linkDot} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Contato</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>ICSA — Campus Belém, UFPA<br/>Belém, Pará — Brasil</span>
                </div>
                <div className={styles.contactItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>lagem@ufpa.br</span>
                </div>
                <div className={styles.contactItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                  </svg>
                  <span>(91) 3201-7000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} LAGEM — Universidade Federal do Pará. Todos os direitos reservados.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Política de Privacidade</a>
            <span className={styles.bottomSep}>•</span>
            <a href="#" className={styles.bottomLink}>Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
