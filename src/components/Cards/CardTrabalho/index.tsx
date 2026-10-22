import styles from "./style.module.scss";

interface CardArtigoProps {
    id?: number;
    titulo: string;
    autores: string;
    ano: string;
    Tipo: "Artigo" | "Tcc" | "Tese" | "Dissertação" | "Outro";
    resumo: string;
    href?: string;
    tags?: string[];
}

const estilosPorTipo: Record<CardArtigoProps["Tipo"], string> = {
    Artigo: styles.tipoArtigo,
    Tcc: styles.tipoTcc,
    Tese: styles.tipoTese,
    Dissertação: styles.tipoDissertacao,
    Outro: styles.tipoOutro,
};

export default function CardArtigo({
    titulo,
    autores,
    ano,
    Tipo,
    resumo,
    href = "#",
    tags = [],
}: CardArtigoProps) {
    const estiloTipo = estilosPorTipo[Tipo] ?? estilosPorTipo.Outro;

    return (
        <article className={`${styles.card} ${estiloTipo}`}>
            <div className={styles.typeTag}>
                {Tipo}
            </div>

            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.year}>{ano}</span>
                </div>

                <h3 className={styles.title}>
                    <a href={href}>{titulo}</a>
                </h3>

                <p className={styles.autores}>{autores}</p>

                <p className={styles.resumo}>{resumo}</p>

                {tags.length > 0 && (
                    <div className={styles.tags}>
                        {tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <a href={href} className={styles.cta}>
                <span>Acessar</span>

                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="16"
                    height="16"
                    aria-hidden="true"
                >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
            </a>
        </article>
    );
}