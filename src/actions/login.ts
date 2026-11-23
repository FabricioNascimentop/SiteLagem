
'use server'

import { cookies } from 'next/headers'
import { criarToken } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface LoginTypes {
  email: string
  senha: string
}

export async function loginUsuario(dados: LoginTypes) {
  try {
    const email = dados.email.trim().toLowerCase()

    if (!email || !dados.senha) {
      throw new Error('Informe seu e-mail e sua senha.')
    }

    const usuario = await prisma.usuarios.findUnique({
      where: { email },
    })

    if (!usuario || usuario.senha !== dados.senha) {
      throw new Error('E-mail ou senha incorretos.')
    }

    if (!usuario.ativo) {
      throw new Error(
        'Sua conta ainda não está ativa. Aguarde a aprovação da equipe.'
      )
    }

    // Criar token
    const token = await criarToken(String(usuario.id))

    // Salvar cookie
    const cookieStore = await cookies()

    cookieStore.set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })

    return {
      sucesso: true,
      mensagem: 'Login realizado com sucesso!'
    }

  } catch (error) {
    return {
      sucesso: false,
      mensagem: error instanceof Error
        ? error.message
        : 'Não foi possível realizar o login.'
    }
  }
}
