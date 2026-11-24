'use server'

import { revalidatePath } from "next/cache"
import { getUsuarioLogado } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

type ActionResult = {
  success: boolean
  message: string
}

function criarSlug(texto: string) {
  const base = texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

  return `${base || "banner"}-${Date.now()}`
}

function lerDados(formData: FormData) {
  const titulo = String(formData.get("titulo") ?? "").trim()
  const imagem_url = String(formData.get("imagem_url") ?? "").trim()
  const alt_text = String(formData.get("alt_text") ?? "").trim()
  const descricao = String(formData.get("descricao") ?? "").trim()
  const link_destino = String(formData.get("link_destino") ?? "").trim()
  const fonte = String(formData.get("fonte") ?? "").trim()
  const status = String(formData.get("status") ?? "RASCUNHO")
  const ordem = Number(formData.get("ordem") ?? 0)

  if (!titulo || !imagem_url) {
    throw new Error("Informe pelo menos o título e a URL da imagem.")
  }

  if (!["RASCUNHO", "PUBLICADO"].includes(status)) {
    throw new Error("Status inválido.")
  }

  if (!Number.isInteger(ordem) || ordem < 0) {
    throw new Error("A ordem deve ser um número inteiro igual ou maior que zero.")
  }

  try {
    const imagemUrl = new URL(imagem_url)
    if (!["http:", "https:"].includes(imagemUrl.protocol)) throw new Error()
  } catch {
    throw new Error("Informe uma URL HTTP ou HTTPS válida para a imagem.")
  }

  if (link_destino) {
    try {
      const destinoUrl = new URL(link_destino)
      if (!["http:", "https:"].includes(destinoUrl.protocol)) throw new Error()
    } catch {
      throw new Error("O link de destino deve começar com http:// ou https://.")
    }
  }

  return {
    titulo,
    imagem_url,
    alt_text: alt_text || null,
    descricao: descricao || null,
    link_destino: link_destino || null,
    fonte: fonte || null,
    status,
    ordem,
  }
}

function atualizarPaginas() {
  revalidatePath("/")
  revalidatePath("/editar/banner")
}

export async function criarBanner(formData: FormData): Promise<ActionResult> {
  const usuario = await getUsuarioLogado()
  if (!usuario) return { success: false, message: "Sua sessão expirou. Entre novamente." }

  try {
    const dados = lerDados(formData)

    await prisma.divulgacoes.create({
      data: {
        ...dados,
        slug: criarSlug(dados.titulo),
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

export async function editarBanner(id: number, formData: FormData): Promise<ActionResult> {
  const usuario = await getUsuarioLogado()
  if (!usuario) return { success: false, message: "Sua sessão expirou. Entre novamente." }

  if (!Number.isInteger(id) || id <= 0) {
    return { success: false, message: "Banner inválido." }
  }

  try {
    const dados = lerDados(formData)
    const bannerAtual = await prisma.divulgacoes.findUnique({ where: { id } })

    if (!bannerAtual) return { success: false, message: "Banner não encontrado." }

    await prisma.divulgacoes.update({
      where: { id },
      data: {
        ...dados,
        publicado_em:
          dados.status === "PUBLICADO"
            ? bannerAtual.publicado_em ?? new Date()
            : null,
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

export async function apagarBanner(id: number): Promise<ActionResult> {
  const usuario = await getUsuarioLogado()
  if (!usuario) return { success: false, message: "Sua sessão expirou. Entre novamente." }

  if (!Number.isInteger(id) || id <= 0) {
    return { success: false, message: "Banner inválido." }
  }

  try {
    await prisma.divulgacoes.delete({ where: { id } })
    atualizarPaginas()
    return { success: true, message: "Banner excluído com sucesso." }
  } catch {
    return { success: false, message: "Não foi possível excluir o banner." }
  }
}
