"use client";

import Image from "next/image";
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
import { slides } from "@/data/herodata";

type slides = {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  bg: string;
};

type Props = {
  slidesProps: slides;
};

function HeroSlide({ slidesProps }: Props) {
  return (
    <div className={`swiper-slide ${styles.slide}`}>
      <div
        className={styles.slideBg}
        style={{ background: slidesProps.bg }}
        aria-hidden="true"
      >
        <div className={styles.bgPattern} />
        <div className={styles.bgOverlay} />

        <div className={styles.decorHex}>
          <svg viewBox="0 0 120 138" fill="none">
            <polygon
              points="60,3 117,33 117,105 60,135 3,105 3,33"
              stroke="#D98E32"
              strokeWidth="2"
              opacity="0.15"
            />
          </svg>
        </div>
      </div>

      <div className={styles.slideContent}>
        <div className={styles.slideText}>
          <h2 style={{color:"white"}}>{slidesProps.title}</h2>
          <p>{slidesProps.description}</p>
        </div>

        <Image
          src={slidesProps.image}
          alt={slidesProps.alt}
          width={600}
          height={600}
          sizes="(max-width: 768px) 90vw, 600px"
          priority={slidesProps.id === 1}
        />
      </div>
    </div>
  );
}




export default function HeroSlider() {
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slidesProps={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
