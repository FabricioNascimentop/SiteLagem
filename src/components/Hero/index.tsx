'use client'
import { useEffect, useRef } from 'react'
import styles from './style.module.scss'

// Swiper slides data
const slides = [
  {
    id: 1,
    title: 'Governança Mineral no Pará',
    subtitle: 'Pesquisa de excelência em municípios mineradores da Amazônia',
    bg: 'linear-gradient(135deg, #0C0D0C 0%, #402A10 60%, #0C0D0C 100%)',
    accent: 'Pesquisa & Inovação',
  },
  {
    id: 2,
    title: 'Dados que Transformam Políticas Públicas',
    subtitle: 'Análises econômicas rigorosas para o desenvolvimento regional sustentável',
    bg: 'linear-gradient(135deg, #1a1200 0%, #402A10 50%, #D98E32 100%)',
    accent: 'Análise Econômica',
  },
  {
    id: 3,
    title: 'Laboratório de Referência Nacional',
    subtitle: 'Conectando academia, setor público e sociedade através da ciência',
    bg: 'linear-gradient(135deg, #0C0D0C 0%, #1a0d00 60%, #402A10 100%)',
    accent: 'Impacto Social',
  },
  {
    id: 4,
    title: 'Mineração e Desenvolvimento Sustentável',
    subtitle: 'Estudos sobre royalties, CFEM e gestão de receitas minerais',
    bg: 'linear-gradient(135deg, #402A10 0%, #0C0D0C 60%, #1a1200 100%)',
    accent: 'Sustentabilidade',
  },
  {
    id: 5,
    title: 'Formando Pesquisadores de Alto Nível',
    subtitle: 'Mestrandos e doutorandos desenvolvendo conhecimento de ponta',
    bg: 'linear-gradient(135deg, #0C0D0C 0%, #402A10 40%, #D98E32 100%)',
    accent: 'Formação',
  },
]

export default function Hero() {
  const swiperElRef = useRef<any>(null)

  useEffect(() => {
    // Dynamically load Swiper
    const loadSwiper = async () => {
      const { Swiper, SwiperSlide } = await import('swiper/react')
      const {
        Navigation, Pagination, Keyboard, Autoplay, Parallax,
      } = await import('swiper/modules')
    }

    // Use vanilla Swiper for custom pagination
    import('swiper').then(({ default: Swiper }) => {
      import('swiper/modules').then(modules => {
        const { Navigation, Pagination, Keyboard, Autoplay, Parallax } = modules

        const swiper = new Swiper('.lagem-swiper', {
          modules: [Navigation, Pagination, Keyboard, Autoplay, Parallax],
          speed: 900,
          parallax: true,
          keyboard: { enabled: true },
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index: number, className: string) {
              return `<span class="${className} ${styles.hexBullet}" data-index="${index}">
                <svg viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="20,1 39,11.5 39,34.5 20,45 1,34.5 1,11.5"/>
                </svg>
              </span>`
            },
          },
        })

        // Autoplay progress bar
        const progressBar = document.querySelector(`.${styles.progressBar}`) as HTMLElement
        if (progressBar) {
          swiper.on('autoplayTimeLeft', (_s: any, _time: number, progress: number) => {
            progressBar.style.width = `${(1 - progress) * 100}%`
          })
        }
      })
    })

    return () => {
      const swiperEl = document.querySelector('.lagem-swiper') as any
      if (swiperEl && swiperEl.swiper) swiperEl.swiper.destroy()
    }
  }, [])

  return (
    <section id="inicio" className={styles.heroSection}>
      {/* Swiper container */}
      <div className={`swiper lagem-swiper ${styles.swiperContainer}`}>
        <div className="swiper-wrapper">
          {slides.map((slide, i) => (
            <div key={slide.id} className={`swiper-slide ${styles.slide}`}>
              {/* Parallax background */}
              <div
                className={styles.slideBg}
                data-swiper-parallax="-23%"
                style={{ background: slide.bg }}
              >
                <div className={styles.bgPattern} />
                <div className={styles.bgOverlay} />
                {/* Decorative hexagons */}
                <div className={styles.decorHex} data-swiper-parallax="-80">
                  <svg viewBox="0 0 120 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="60,3 117,33 117,105 60,135 3,105 3,33" stroke="#D98E32" strokeWidth="2" fill="none" opacity="0.15"/>
                  </svg>
                </div>
                <div className={styles.decorHex2} data-swiper-parallax="-50">
                  <svg viewBox="0 0 80 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="40,2 78,22 78,70 40,90 2,70 2,22" stroke="#D98E32" strokeWidth="1.5" fill="none" opacity="0.1"/>
                  </svg>
                </div>
              </div>

              {/* Slide content */}
              <div className={styles.slideContent}>
                <div className={styles.slideInner}>
                  <span
                    className={styles.badge}
                    data-swiper-parallax="-400"
                    data-swiper-parallax-opacity="0"
                  >
                    {slide.accent}
                  </span>
                  <h1
                    className={styles.slideTitle}
                    data-swiper-parallax="-300"
                    data-swiper-parallax-opacity="0"
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={styles.slideSubtitle}
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    {slide.subtitle}
                  </p>
                  <div
                    className={styles.slideCta}
                    data-swiper-parallax="-100"
                    data-swiper-parallax-opacity="0"
                  >
                    <a href="#pesquisas" className={styles.btnPrimary}>Conheça nossas pesquisas</a>
                    <a href="#sobre" className={styles.btnOutline}>Sobre o LAGEM</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className={`swiper-button-prev ${styles.navBtn} ${styles.navPrev}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </div>
        <div className={`swiper-button-next ${styles.navBtn} ${styles.navNext}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>

        {/* Custom hex pagination */}
        <div className={`swiper-pagination ${styles.hexPagination}`} />

        {/* Autoplay progress */}
        <div className={styles.progressTrack}>
          <div className={styles.progressBar} />
        </div>

        {/* Slide counter */}
        <div className={styles.slideCounter}>
          <span className={styles.counterCurrent}>01</span>
          <span className={styles.counterSep}>/</span>
          <span className={styles.counterTotal}>0{slides.length}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
