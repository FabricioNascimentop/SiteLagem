"use client";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './style.module.scss'
import CardBI from '@/components/Cards/CardBI'

type Dashboard = {
  id: number;
  titulo: string;
  descricao: string | null;
  imagem_url: string | null;
  url_dashboard: string;
};

type PaineisProps = {
  dashboards: Dashboard[];
};

export default function Paineis({ dashboards }: PaineisProps) {
  if (dashboards.length === 0) return null;

  return (
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
  );
}
