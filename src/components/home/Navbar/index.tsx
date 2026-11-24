
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'
import type {usuarios} from "@/generated/prisma/client"


const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Pesquisas', href: '#pesquisas' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
]

interface NavbarProps {
  usuario: usuarios | null
}

export default function Navbar({ usuario }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [modalUsuarioOpen, setModalUsuarioOpen] = useState(false)

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
            <Image
              src="/lagemLogo.png"
              alt="LAGEM logo"
              width={52}
              height={52}
            />
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

          {usuario && (
            <span className={styles.navLink}>
              {usuario.nome}
            </span>
          )}

          {usuario && (
            <Link href="/editar" className={styles.btnEdit}>
              Editar
            </Link>
          )}

          <button
            type="button"
            className={styles.ctaBtn}
            onClick={() => setModalUsuarioOpen(true)}
          >
            Sou pesquisador
          </button>
        </nav>
      </div>

      {modalUsuarioOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalUsuarioOpen(false)}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitulo"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setModalUsuarioOpen(false)}
              aria-label="Fechar modal"
            >
              ×
            </button>

            <h2 id="modalTitulo">Área do pesquisador</h2>

            <p>
              Acesse sua conta ou cadastre-se para fazer parte do LAGEM.
            </p>

            <div className={styles.modalActions}>
              <Link href="/usuarios/cadastro" className={styles.modalPrimary}> Criar conta</Link>
               <Link href="/usuarios/login" className={styles.modalSecondary}> Logar </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
