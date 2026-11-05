import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Noticias from '@/components/noticias'
import SobreNos from '@/components/sobre_nos'
import Footer from '@/components/Footer'
import Publicacoes from '@/components/publicacoes'
import Paineis from '@/components/paineis'
import Teste from '@/components/Hero/indexServer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Teste/>
      <Publicacoes/>
      <Paineis/>
      <Noticias />
      <SobreNos />
      <Footer />
    </main>
  )
}
