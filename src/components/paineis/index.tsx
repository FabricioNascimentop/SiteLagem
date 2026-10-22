import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './style.module.scss'

import { Dashboards } from '@/data/cardsData'
import CardBI from '../Cards/CardBI'


export default function Paineis(){
    return(
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
                {Dashboards.map((dash) => (
                <SwiperSlide key={dash.id}>
                    <CardBI {...dash} />
                </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}