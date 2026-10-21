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
                <div className={styles.overlay} onClick={() => setModalAberto(false)}>
                    <section
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`titulo-modal-${id}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className={styles.fechar}
                            onClick={() => setModalAberto(false)}
                            aria-label="Fechar modal"
                        >
                            ×
                        </button>

                        <div className={styles.iframeModal}>
                            <iframe
                                src={link}
                                title={`Painel de BI: ${titulo}`}
                                className={styles.iframe}
                                allowFullScreen
                            />
                        </div>

                        <div className={styles.conteudoModal}>
                            <span className={styles.subtitulo}>
                                PORTFÓLIO / POWER BI
                            </span>

                            <h2 id={`titulo-modal-${id}`}>
                                {titulo}
                            </h2>

                            <p>{descricao}</p>

                            <p>
                                Explore os indicadores deste painel para conhecer
                                diferentes aspectos do tema. Os filtros e as
                                visualizações interativas ajudam a comparar
                                períodos, localidades e categorias. Navegue
                                pelas páginas do relatório para consultar os
                                detalhes, identificar tendências e descobrir
                                novas perspectivas.
                            </p>
                        </div>
                    </section>
                </div>,
                document.body
            )}
        </>
    );
}