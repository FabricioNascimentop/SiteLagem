
"use client";

import styles from "./style.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

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

import HeroCard from "../Cards/CardHero";

type SlideHeroProps = {
  id: number;
  imagem_url: string | null;
  alt_text: string | null;
  titulo: string;
  descricao: string | null;
  link_destino: string | null;
};

type HeroProps = {
  slides: SlideHeroProps[];
};

export default function Hero({ slides }: HeroProps) {
  if (slides.length === 0) {
    return null;
  }

  return (
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
  );
}
