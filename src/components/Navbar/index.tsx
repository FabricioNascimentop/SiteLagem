'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'

const navLinks = [
  { label: 'Início',       href: '#inicio' },
  { label: 'Sobre',        href: '#sobre' },
  { label: 'Pesquisas',    href: '#pesquisas' },
  { label: 'Notícias',     href: '#noticias' },
  { label: 'Equipe',       href: '#equipe' },
  { label: 'Contato',      href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.brand}>
          <div className={styles.logoWrap}>
            <Image src="/logo.png" alt="LAGEM logo" width={52} height={52} />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>LAGEM</span>
            <span className={styles.brandSub}>UFPA</span>
          </div>
        </a>

        <nav className={styles.nav}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className={styles.ctaBtn}>Contato</a>
        </nav>
      </div>
    </header>
  )
}
