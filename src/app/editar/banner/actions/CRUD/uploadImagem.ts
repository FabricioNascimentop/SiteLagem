'use server'

import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { randomUUID } from "node:crypto"
import { getUsuarioLogado } from "@/lib/auth"

type UploadResult = { success: boolean; message: string; url?: string }

// Recebe e armazena a imagem no diretório público de banners.
export async function uploadBannerImagem(formData: FormData): Promise<UploadResult> {
  const usuario = await getUsuarioLogado()
  if (!usuario) return { success: false, message: "Sua sessão expirou. Entre novamente." }

  const arquivo = formData.get("arquivo")
  if (!(arquivo instanceof File)) return { success: false, message: "Selecione um arquivo de imagem." }

  const formatos: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/avif": "avif",
  }

  const extensao = formatos[arquivo.type]
  if (!extensao) return { success: false, message: "Formato inválido. Use JPG, PNG, WebP ou AVIF." }
  if (arquivo.size <= 0 || arquivo.size > 8 * 1024 * 1024) {
    return { success: false, message: "A imagem deve ter no máximo 8 MB." }
  }

  const nomeSolicitado = String(formData.get("nomeArquivo") ?? "").trim()
  const nomeSeguro = nomeSolicitado.replace(/[^a-zA-Z0-9_-]/g, "-").replace(/-+/g, "-").replace(/^[-_]|[-_]$/g, "").slice(0, 80)
  if (!nomeSeguro) return { success: false, message: "Informe um nome de arquivo válido." }

  try {
    const nomeArquivo = `${nomeSeguro || randomUUID()}.${extensao}`
    const diretorio = path.join(process.cwd(), "public", "hero")
    await mkdir(diretorio, { recursive: true })
    const destino = path.join(diretorio, nomeArquivo)
    await writeFile(destino, Buffer.from(await arquivo.arrayBuffer()))

    return { success: true, message: "Imagem enviada.", url: `/hero/${nomeArquivo}` }
  } catch {
    return { success: false, message: "Não foi possível armazenar a imagem." }
  }
}
