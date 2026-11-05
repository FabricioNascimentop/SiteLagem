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
  return (
    <main>
      <Navbar />
      <Hero slides={slides}/>
      <Publicacoes/>
      <Paineis/>
      <Noticias />
      <SobreNos />
      <Footer />
    </main>
  )
}
