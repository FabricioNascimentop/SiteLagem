import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Publicacoes from "./components/Publicacoes";
import Paineis from "./components/Paineis";
import Noticias from "./components/Noticias";
import SobreNos from "./components/Sobre_nos";
import Footer from "@/components/Footer";


import { SlideHeroProps, Dashboard, PropsPublicacoes } from "@/types/home";

export default function HomePage({slides, publicacoes, dashboards}:{slides: SlideHeroProps[], publicacoes: PropsPublicacoes[], dashboards: Dashboard[]}){
    return(
        <main>
            <Navbar/>
            <Hero slides={slides}/>
            <Publicacoes Publicacoes={publicacoes}/>
            <Paineis dashboards={dashboards}/>
            <Noticias/>
            <SobreNos/>
            <Footer/>
        </main>
    )
}