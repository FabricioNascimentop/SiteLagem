import Navbar from '@/components/Navbar'
import Noticias from '@/components/noticias'
import SobreNos from '@/components/sobre_nos'
import Footer from '@/components/Footer'
import Publicacoes from '@/components/publicacoes'
import Paineis from '@/components/paineis'

import HeroCard from '@/components/Cards/CardHero'

import { prisma } from "@/lib/prisma"
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/home.module.scss";

import {
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default async function Home() {
  const [slides, artigos, dashboards] = await Promise.all([
    prisma.divulgacoes.findMany({
      where: { status: "PUBLICADO" },
      orderBy: [{ ordem: "asc" }, { id: "asc" }],
    }),
    prisma.publicacao.findMany({
      where: { status: "PUBLICADO" },
      orderBy: [{ ano: "desc" }, { id: "desc" }],
    }),
    prisma.dashboards.findMany({
      where: { status: "PUBLICADO" },
      orderBy: [{ ordem: "asc" }, { id: "asc" }],
    }),
  ]);

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
      <section className={styles.hero} aria-label="Destaques">
      <Swiper
        modules={[
          Autoplay,
          EffectFade,
          Keyboard,
          Navigation,
          Pagination,
          A11y,
        ]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop={slides.length > 1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{ enabled: true }}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroCard
              id={slide.id}
              srcImage={slide.imagem_url ?? "/hero/placeholder.png"}
              alt={slide.alt_text ?? slide.titulo}
              title={slide.titulo}
              description={slide.descricao ?? ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
      <Publicacoes Artigos={artigosParaExibir} />
      <Paineis dashboards={dashboards} />
      <Noticias />
      <SobreNos />
      <Footer />
    </main>
  );
}
