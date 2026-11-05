import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Noticias from '@/components/noticias'
import SobreNos from '@/components/sobre_nos'
import Footer from '@/components/Footer'
import Publicacoes from '@/components/publicacoes'
import Paineis from '@/components/paineis'

import {prisma} from "@/lib/prisma"

export default async function Home() {
  const slides = await prisma.divulgacoes.findMany({
    where: {
      status: "PUBLICADO",
    },
    orderBy: [
      { ordem: "asc" },
      { id: "asc" },
    ],
  });
  const artigos = await prisma.publicacao.findMany({})
  const tipos = ["Artigo", "Tcc", "Tese", "Dissertação", "Outro", "Matéria", "Livro"] as const;

  const artigosParaExibir = artigos.map((a) => ({
    id: a.id,
    titulo: a.titulo,
    autores: a.autores ? a.autores.split(",").map((nome) => nome.trim()) : [],
    ano: a.ano?.toString() ?? "",
    resumo: a.resumo ?? "",
    href: a.url_documento ?? "#",
    keywords: a.keywords,
    Tipo: tipos.find((tipo) => tipo.toLowerCase() === a.tipo_publicacao.toLowerCase()) ?? "Outro",
    srcDoc: a.url_documento ?? "",
  }));
  return (
    <main>
      <Navbar />
      <Hero slides={slides}/>
      <Publicacoes Artigos={artigosParaExibir}/>
      <Paineis/>
      <Noticias />
      <SobreNos />
      <Footer />
    </main>
  )
}
