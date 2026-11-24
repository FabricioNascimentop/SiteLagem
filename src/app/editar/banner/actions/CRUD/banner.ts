'use server'

import { revalidatePath } from "next/cache"
import { getUsuarioLogado } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { criarSlugBanner, lerDadosBanner } from "./validacoes"

type ActionResult = {
  success: boolean
  message: string
}

// Atualiza a Home e a tela administrativa após qualquer alteração.
function atualizarPaginas() {
  revalidatePath("/")
  revalidatePath("/editar/banner")
}

/** CREATE: cadastra um banner e registra o usuário responsável. */
export async function criarBanner(formData: FormData): Promise<ActionResult> {
  const usuario = await getUsuarioLogado()
  if (!usuario) return { success: false, message: "Sua sessão expirou. Entre novamente." }

  try {
    const dados = lerDadosBanner(formData)

    await prisma.divulgacoes.create({
      data: {
        ...dados,
        slug: criarSlugBanner(dados.titulo),
        usuario_responsavel_id: usuario.id,
        publicado_em: dados.status === "PUBLICADO" ? new Date() : null,
      },
    })

    atualizarPaginas()
    return { success: true, message: "Banner criado com sucesso." }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Não foi possível criar o banner.",
    }
  }
}

/** UPDATE: atualiza os campos e preserva a primeira data de publicação. */
export async function editarBanner(id: number, formData: FormData): Promise<ActionResult> {
  const usuario = await getUsuarioLogado()
  if (!usuario) return { success: false, message: "Sua sessão expirou. Entre novamente." }
  if (!Number.isInteger(id) || id <= 0) return { success: false, message: "Banner inválido." }

  try {
    const dados = lerDadosBanner(formData)
    const bannerAtual = await prisma.divulgacoes.findUnique({ where: { id } })
    if (!bannerAtual) return { success: false, message: "Banner não encontrado." }

    await prisma.divulgacoes.update({
      where: { id },
      data: {
        ...dados,
        publicado_em: dados.status === "PUBLICADO" ? bannerAtual.publicado_em ?? new Date() : null,
      },
    })

    atualizarPaginas()
    return { success: true, message: "Banner atualizado com sucesso." }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Não foi possível atualizar o banner.",
    }
  }
}

/** DELETE: remove o registro pelo ID. */
export async function apagarBanner(id: number): Promise<ActionResult> {
  const usuario = await getUsuarioLogado()
  if (!usuario) return { success: false, message: "Sua sessão expirou. Entre novamente." }
  if (!Number.isInteger(id) || id <= 0) return { success: false, message: "Banner inválido." }

  try {
    await prisma.divulgacoes.delete({ where: { id } })
    atualizarPaginas()
    return { success: true, message: "Banner excluído com sucesso." }
  } catch {
    return { success: false, message: "Não foi possível excluir o banner." }
  }
}
