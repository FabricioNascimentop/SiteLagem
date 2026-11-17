"use client";
import Navbar from '@/components/Navbar'
import Noticias from '@/components/noticias'
import SobreNos from '@/components/sobre_nos'
import Footer from '@/components/Footer'

import HeroCard from '@/components/Cards/CardHero'

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
import { useState } from 'react';



import {SlideHeroProps, PropsPublicacoes, TipoArtigo, Dashboard} from '../types/home'
import CardArtigo from '@/components/Cards/CardTrabalho';
import CardBI from '@/components/Cards/CardBI';



export default function Home({ slides, publicacoes, dashboards }: { slides: SlideHeroProps[], publicacoes: PropsPublicacoes[], dashboards: Dashboard[] }) {

    //código para publicações

    const tipos: TipoArtigo[] = [
        "Artigo", "Tcc", "Tese", "Dissertação", "Outro", "Matéria", "Livro"
    ];

    const [tipoSelecionado, setTipoSelecionado] = useState<TipoArtigo | "Todos">("Todos");
    const [expandido, setExpandido] = useState(false);
    const quantidadeInicial = 6;

    // Filtra os artigos pelo tipo selecionado
    const artigosFiltrados = tipoSelecionado === "Todos"
        ? publicacoes
        : publicacoes.filter(
            (artigo) => artigo.Tipo === tipoSelecionado
        );

    const temMais = artigosFiltrados.length > quantidadeInicial;

    const artigosVisiveis = expandido
        ? artigosFiltrados
        : artigosFiltrados.slice(0, quantidadeInicial);

    // Trocar de categoria também recolhe a lista
    function selecionarTipo(tipo: TipoArtigo | "Todos") {
        setTipoSelecionado(tipo);
        setExpandido(false);
    }

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


        <section id="pesquisas" className={styles.section}>
            <h2>Nossas publicações</h2>

            <div className={styles.ContainerGrid}>

                {/* Seletor de tipos */}
                <div
                    className={styles.Filtros}
                    role="group"
                    aria-label="Filtrar publicações por tipo"
                >
                    <button
                        type="button"
                        className={`${styles.BtnFiltro} ${
                            tipoSelecionado === "Todos"
                                ? styles.BtnFiltroAtivo
                                : ""
                        }`}
                        onClick={() => selecionarTipo("Todos")}
                        aria-pressed={tipoSelecionado === "Todos"}
                    >
                        Todos
                    </button>

                    {tipos.map((tipo) => (
                        <button
                            key={tipo}
                            type="button"
                            className={`${styles.BtnFiltro} ${
                                tipoSelecionado === tipo
                                    ? styles.BtnFiltroAtivo
                                    : ""
                            }`}
                            onClick={() => selecionarTipo(tipo)}
                            aria-pressed={tipoSelecionado === tipo}
                        >
                            {tipo}
                        </button>
                    ))}
                </div>

                {/* Grid de publicações */}
                <div
                    id="grid-artigos"
                    className={`${styles.GridArtigos} ${
                        expandido ? styles.GridExpandido : ""
                    }`}
                >
                    {artigosVisiveis.map((Publicacoes) => (
                        <CardArtigo {...Publicacoes} key={Publicacoes.id} />
                    ))}
                </div>

                {/* Gradiente e botão de expansão */}
                {temMais && (
                    <div
                        className={`${styles.ExpandirGrid} ${
                            expandido
                                ? styles.ExpandirGridExpandido
                                : ""
                        }`}
                    >
                        <button
                            type="button"
                            className={styles.BtnExpandirGrid}
                            onClick={() =>
                                setExpandido((estado) => !estado)
                            }
                            aria-expanded={expandido}
                            aria-controls="grid-artigos"
                        >
                            <span aria-hidden="true">
                                {expandido ? "↑" : "↓"}
                            </span>

                            <span>
                                {expandido
                                    ? "Mostrar menos"
                                    : "Ver mais"}
                            </span>
                        </button>
                    </div>
                )}

                {/* Mensagem quando não existem resultados */}
                {artigosFiltrados.length === 0 && (
                    <p className={styles.SemResultados}>
                        Nenhuma publicação encontrada nesta categoria.
                    </p>
                )}

            </div>
        </section>
        <section id="bis" className={styles.section}>
        <h2>Nossos Trabalhos</h2>

        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1.2}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            }}
        >
            {dashboards.map((dashboard) => (
            <SwiperSlide key={dashboard.id}>
                <CardBI
                id={dashboard.id}
                titulo={dashboard.titulo}
                descricao={dashboard.descricao ?? ""}
                srcImage={dashboard.imagem_url ?? ""}
                alt={dashboard.titulo}
                link={dashboard.url_dashboard}
                />
            </SwiperSlide>
            ))}
        </Swiper>
        </section>

            <Noticias />
            <SobreNos />
            <Footer />
        </main>
  );
}
