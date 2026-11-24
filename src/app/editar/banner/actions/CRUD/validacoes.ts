'use server'

/**
 * Valida e normaliza os campos recebidos do formulário de banners.
 * Mantém regras de entrada fora das operações de banco de dados.
 */
export function lerDadosBanner(formData: FormData) {
  const titulo = String(formData.get("titulo") ?? "").trim()
  const imagem_url = String(formData.get("imagem_url") ?? "").trim()
  const alt_text = String(formData.get("alt_text") ?? "").trim()
  const descricao = String(formData.get("descricao") ?? "").trim()
  const link_destino = String(formData.get("link_destino") ?? "").trim()
  const fonte = String(formData.get("fonte") ?? "").trim()
  const status = String(formData.get("status") ?? "RASCUNHO")
  const ordem = Number(formData.get("ordem") ?? 0)

  if (!titulo || !imagem_url) throw new Error("Informe pelo menos o título e a URL da imagem.")
  if (!["RASCUNHO", "PUBLICADO"].includes(status)) throw new Error("Status inválido.")
  if (!Number.isInteger(ordem) || ordem < 0) throw new Error("A ordem deve ser um número inteiro igual ou maior que zero.")

  // Aceita somente URLs HTTP/HTTPS; evita protocolos executáveis ou inválidos.
  try {
    const url = new URL(imagem_url)
    if (!["http:", "https:"].includes(url.protocol)) throw new Error()
  } catch {
    throw new Error("Informe uma URL HTTP ou HTTPS válida para a imagem.")
  }

  if (link_destino) {
    try {
      const url = new URL(link_destino)
      if (!["http:", "https:"].includes(url.protocol)) throw new Error()
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

/** Gera slug legível e acrescenta um sufixo para evitar colisões. */
export function criarSlugBanner(texto: string) {
  const base = texto.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

  return `${base || "banner"}-${Date.now()}`
}
