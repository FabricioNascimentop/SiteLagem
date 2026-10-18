"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./style.module.scss";

interface TypePropsBI {
    id: number;
    titulo: string;
    descricao: string;
    srcImage: string;
    alt: string;
    link: string
}

export default function CardBI({
    id,
    titulo,
    descricao,
    srcImage,
    alt,
    link
}: TypePropsBI) {
    const [modalAberto, setModalAberto] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Garante que o portal só será renderizado no cliente (Next.js SSR safety)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Fecha o modal com ESC e bloqueia o scroll do fundo.
    useEffect(() => {
        if (!modalAberto) return;

        const fecharComEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setModalAberto(false);
            }
        };

        const overflowAnterior = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", fecharComEsc);

        return () => {
            document.body.style.overflow = overflowAnterior;
            window.removeEventListener("keydown", fecharComEsc);
        };
    }, [modalAberto]);

    return (
        <>
            <button
                type="button"
                className={styles.card}
                onClick={() => setModalAberto(true)}
                aria-haspopup="dialog"
                aria-expanded={modalAberto}
                aria-label={`Ver detalhes de ${titulo}`}
            >
                <span className={styles.imagemContainer}>
                    <Image
                        src={srcImage}
                        alt={alt}
                        width={900}
                        height={400}
                        sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                        className={styles.imagem}
                    />

                    <span className={styles.etiqueta}>
                        Power BI
                    </span>
                </span>

                <span className={styles.conteudo}>
                    <span className={styles.titulo}>
                        {titulo}
                    </span>

                    <span className={styles.descricao}>
                        {descricao}
                    </span>

                    <span className={styles.acao}>
                        Explorar projeto
                        <span className={styles.seta} aria-hidden="true">
                            ↗
                        </span>
                    </span>
                </span>
            </button>

            {/* Renderiza o modal via Portal diretamente no body para ignorar o overflow/transforms do Swiper */}
            {mounted && modalAberto && createPortal(
                <div className={styles.overlay}>
                    <section
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`titulo-modal-${id}`}
                    >
                        <button
                            type="button"
                            className={styles.fechar}
                            onClick={() => setModalAberto(false)}
                            aria-label="Fechar modal"
                        >
                            ×
                        </button>

                        {/* Imagem: 2/3 da altura da tela */}
                        <div className={styles.imagemModal}>
                            <Image
                                src={srcImage}
                                alt={alt}
                                width={1600}
                                height={900}
                                sizes="100vw"
                                className={styles.imagem}
                            />
                        </div>

                        {/* Texto: 1/3 da altura da tela */}
                        <div className={styles.conteudoModal}>
                            <span className={styles.subtitulo}>
                                PORTFÓLIO / POWER BI
                            </span>

                            <h2 id={`titulo-modal-${id}`}>
                                {titulo}
                            </h2>

                            <p>{descricao}</p>

                            <p>
                                Este painel apresenta uma análise visual dos
                                dados, permitindo explorar indicadores,
                                identificar tendências e comparar resultados
                                de maneira intuitiva.
                            </p>
                        </div>
                    </section>
                </div>,
                document.body
            )}
        </>
    );
}