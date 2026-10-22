'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NossosTrabalhos from '@/components/nossos_trabalhos'
import Noticias from '@/components/noticias'
import SobreNos from '@/components/sobre_nos'
import Footer from '@/components/Footer'
import Publicacoes from '@/components/publicacoes'
import Paineis from '@/components/paineis'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Publicacoes/>
      <Paineis/>
      <Noticias />
      <SobreNos />
      <Footer />
    </main>
  )
}
