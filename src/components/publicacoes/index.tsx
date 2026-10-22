'use client'
import styles from './style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Artigos } from '@/data/cardsData'
import CardArtigo from '../Cards/CardTrabalho'

export default function Publicacoes(){
    return(
        <section id="pesquisas" className={styles.section}>
            <h2>Nossas publicações</h2>

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
                {Artigos.map((artigo) => (
                <SwiperSlide key={artigo.id}>
                    <CardArtigo {...artigo} />
                </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}