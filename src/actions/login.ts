'use server'

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
      throw new Error('Sua conta ainda não está ativa. Aguarde a aprovação da equipe.')
    }

    return {
      sucesso: true,
      mensagem: 'Credenciais corretas. A validação do login funcionou, mas a sessão de acesso ainda precisa ser implementada.',
    }
  } catch (error) {
    return {
      sucesso: false,
      mensagem: error instanceof Error
        ? error.message
        : 'Não foi possível realizar o login.',
    }
  }
}
