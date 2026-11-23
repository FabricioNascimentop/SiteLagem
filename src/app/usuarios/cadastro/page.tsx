'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'
import { cadastrarUsuario } from '@/actions/cadastro'
import { CadastroTypes } from '@/types/backendTypes/cadastro'



export default function CadastroPage() {
  const [mensagem, setMensagem] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
   
    const formData = new FormData(event.currentTarget)

    const Data: CadastroTypes = {
    nome: String(formData.get('nome')),
    sobrenome: String(formData.get('sobrenome')),
    email: String(formData.get('email')),
    lattes_url: String(formData.get('lattes_url') ?? ''),
    senha: String(formData.get('senha')),
    confirmarSenha: String(formData.get('confirmarSenha')),
    resumo: String(formData.get('resumo') ?? '')
  }
    console.log(Data)

    const resultado = await cadastrarUsuario(Data)
    setMensagem(resultado.mensagem)
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Link href="/" className={styles.backLink}>
          ← Voltar ao site
        </Link>

        <div className={styles.heading}>
          <span className={styles.eyebrow}>LAGEM · UFPA</span>
          <h1>Faça parte da nossa comunidade</h1>
          <p>
            Cadastre seus dados para construir seu perfil de pesquisador no
            Laboratório de Estudos em Governança de Municípios Mineradores.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldsRow}>
            <label className={styles.field}>
              <span>Nome</span>
              <input name="nome" type="text" placeholder="Seu nome" autoComplete="given-name" required />
            </label>

            <label className={styles.field}>
              <span>Sobrenome <small>(opcional)</small></span>
              <input name="sobrenome" type="text" placeholder="Seu sobrenome" autoComplete="family-name" />
            </label>
          </div>

          <label className={styles.field}>
            <span>E-mail institucional ou pessoal</span>
            <input name="email" type="email" placeholder="voce@exemplo.com" autoComplete="email" required />
          </label>

          <label className={styles.field}>
            <span>Currículo Lattes <small>(opcional)</small></span>
            <input name="lattes_url" type="url" placeholder="https://lattes.cnpq.br/..." />
          </label>

          <label className={styles.field}>
            <span>Senha</span>
            <input
              name="senha"
              type="password"
              placeholder="Crie uma senha"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>

          <label className={styles.field}>
            <span>Confirmar senha</span>
            <input
              name="confirmarSenha"
              type="password"
              placeholder="Digite a senha novamente"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>

          <label className={styles.field}>
            <span>Apresentação <small>(opcional)</small></span>
            <textarea
              name="resumo"
              rows={3}
              placeholder="Conte brevemente sobre sua formação e interesses de pesquisa."
            />
          </label>

          <div className={styles.roleNotice}>
            <strong>Tipo de membro: Aluno</strong>
            <p>
              Novos cadastros entram como aluno. A equipe do LAGEM poderá
              atualizar o vínculo para professor ou colaborador.
            </p>
          </div>

          <button className={styles.submitButton} type="submit">
            Solicitar cadastro
          </button>

          {mensagem && <p className={styles.feedback} role="status">{mensagem}</p>}
        </form>

        <p className={styles.loginPrompt}>
          Já possui cadastro? <Link href="/usuarios/login">Entrar</Link>
        </p>
      </section>
    </main>
  )
}
