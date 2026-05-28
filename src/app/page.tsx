'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NossosTrabalhos from '@/components/nossos_trabalhos'
import Noticias from '@/components/noticias'
import SobreNos from '@/components/sobre_nos'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NossosTrabalhos />
      <Noticias />
      <SobreNos />
      <Footer />
    </main>
  )
}
