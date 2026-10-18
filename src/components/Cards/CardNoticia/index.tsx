import Image from 'next/image'
import styles from './style.module.scss'

interface CardNoticiaProps {
  titulo: string
  data: string
  img_path: string
  resumo: string
  href?: string
}

export default function CardNoticia({ titulo, data, img_path, resumo, href = '#' }: CardNoticiaProps) {
  return (
    <article className={styles.card}>
      <a href={href} className={styles.imageWrap}>
        <Image
          src={img_path}
          alt={titulo}
          width={400}
          height={220}
          className={styles.image}
        />
        <div className={styles.imageOverlay} />
      </a>
      <div className={styles.body}>
        <time className={styles.date}>
          <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
          {data}
        </time>
        <h3 className={styles.title}>
          <a href={href}>{titulo}</a>
        </h3>
        <p className={styles.resumo}>{resumo}</p>
        <a href={href} className={styles.leiaMais}>
          Leia mais
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </article>
  )
}
