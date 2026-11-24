import { redirect } from "next/navigation"
import { getUsuarioLogado } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import BannerEditClient from "./bannerEditClient"

export default async function BannerEdit() {
  const usuario = await getUsuarioLogado()

  if (!usuario) {
    redirect("/usuarios/login")
  }

  const bannerInfo = await prisma.divulgacoes.findMany({
    orderBy: [{ ordem: "asc" }, { id: "asc" }],
  })

  return <BannerEditClient bannerInfo={bannerInfo} />
}
