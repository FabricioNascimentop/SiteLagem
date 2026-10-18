import styles from './style.module.scss'
import Image from 'next/image';



type HeroSlidesProps = {
  id: number;
  srcImage: string;
  alt: string;
  title: string;
  description: string;
  bg: string;
};


export default function HeroCard({
  id,
  srcImage,
  alt,
  title,
  description,
  bg,
}: HeroSlidesProps) {
  return (
    <div
      className={styles.slide}
      style={{ background: bg }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.imageContainer}>
          <Image
            src={srcImage}
            alt={alt}
            width={750}
            height={500}
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 75vw, 750px"
            priority={id === 1}
            className={styles.image}
          />
        </div>


        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
}
