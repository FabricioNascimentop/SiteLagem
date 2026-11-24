import Navbar from "@/components/home/Navbar";
import Hero from "../components/home/Hero";
import Publicacoes from "../components/home/Publicacoes";
import Paineis from "../components/home/Paineis";
import Noticias from "../components/home/Noticias";
import SobreNos from "../components/home/Sobre_nos";
import Footer from "@/components/Footer";
import type {usuarios} from "@/generated/prisma/client"

import { SlideHeroProps, Dashboard, PropsPublicacoes } from "@/types/home";

export default function HomepageClient({slides, publicacoes, dashboards, usuario}:{slides: SlideHeroProps[], publicacoes: PropsPublicacoes[], dashboards: Dashboard[], usuario: usuarios | null}){
    return(
        <main>
            <Navbar usuario={usuario}/>
            <Hero slides={slides}/>
            <Publicacoes Publicacoes={publicacoes}/>
            <Paineis dashboards={dashboards}/>
            <Noticias/>
            <SobreNos/>
            <Footer/>
        </main>
    )
}