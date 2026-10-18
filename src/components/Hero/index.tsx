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
import { slidesHeroData } from "@/data/cardsData";
import HeroCard from "../Cards/CardHero";


export default function Hero() {
  return (
    
    <section
      className={styles.hero}
      aria-label="Destaques"
    >
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
        loop
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
        {slidesHeroData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroCard {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
