'use server'

import { prisma } from '@/lib/prisma'
import type { CadastroTypes } from '@/types/backendTypes/cadastro'

// VALIDAÇÃO
export async function validarCriarUsuario(dados: CadastroTypes) {

  if (!dados.nome || !dados.email || !dados.senha) {
    throw new Error('Preencha os campos obrigatórios.')
  }

  if (dados.senha !== dados.confirmarSenha) {
    throw new Error('As senhas não coincidem.')
  }

  const existente = await prisma.usuarios.findUnique({
    where: { email: dados.email }
  })

  if (existente) {
    throw new Error('Email já cadastrado.')
  }

  return true
}

// CADASTRO
export async function cadastrarUsuario(dados: CadastroTypes) {
  try {

    await validarCriarUsuario(dados)

    // Implementar hash da senha


    const slug = toSlug(`${dados.nome}-${dados.sobrenome}`)
  
    await prisma.usuarios.create({
      data: {
        nome: dados.nome,
        sobrenome: dados.sobrenome,
        tipo_membro: 'ALUNO',
        slug: slug,
        email: dados.email,
        ativo: false,
        lattes_url: dados.lattes_url,
        senha: dados.senha,
        resumo: dados.resumo
      }
    })

    return {
      sucesso: true,
      mensagem: 'Cadastro realizado com sucesso!'
    }

  } catch (error) {
    return {
      sucesso: false,
      mensagem: error instanceof Error
        ? error.message
        : 'Erro ao cadastrar usuário.'
    }
  }
}

function toSlug(text:string){
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')
}