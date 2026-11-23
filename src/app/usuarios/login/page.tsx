'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'
import { loginUsuario } from '@/actions/login'

export default function LoginPage() {
  const [mensagem, setMensagem] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMensagem('')
    setCarregando(true)

    const formData = new FormData(event.currentTarget)

    const resultado = await loginUsuario({
      email: String(formData.get('email') ?? ''),
      senha: String(formData.get('senha') ?? ''),
    })

    setMensagem(resultado.mensagem)
    setCarregando(false)
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Link href="/" className={styles.backLink}>
          ← Voltar ao site
        </Link>

        <div className={styles.heading}>
          <span className={styles.eyebrow}>LAGEM · UFPA</span>
          <h1>Bem-vindo de volta</h1>
          <p>
            Entre com seu e-mail e senha para acessar sua conta e acompanhar
            suas atividades no Laboratório.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>E-mail</span>
            <input
              name="email"
              type="email"
              placeholder="voce@exemplo.com"
              autoComplete="email"
              required
            />
          </label>

          <label className={styles.field}>
            <span>Senha</span>
            <input
              name="senha"
              type="password"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              required
            />
          </label>

          <button
            className={styles.submitButton}
            type="submit"
            disabled={carregando}
          >
            {carregando ? 'Verificando...' : 'Entrar'}
          </button>

          {mensagem && (
            <p className={styles.feedback} role="status">
              {mensagem}
            </p>
          )}
        </form>

        <p className={styles.registerPrompt}>
          Ainda não possui cadastro?{' '}
          <Link href="/usuarios/cadastro">Criar conta</Link>
        </p>
      </section>
    </main>
  )
}
