"use client";

import { useState } from "react";
import styles from "./style.module.scss";

import { Artigos } from "@/data/cardsData";
import CardArtigo from "../Cards/CardTrabalho";

type TipoArtigo =
    | "Artigo"
    | "Tcc"
    | "Tese"
    | "Dissertação"
    | "Outro";

const tipos: TipoArtigo[] = [
    "Artigo",
    "Tcc",
    "Tese",
    "Dissertação",
    "Outro",
];

export default function Publicacoes() {
    const [tipoSelecionado, setTipoSelecionado] =
        useState<TipoArtigo | "Todos">("Todos");

    const [expandido, setExpandido] = useState(false);

    const quantidadeInicial = 6;

    // Filtra os artigos pelo tipo selecionado
    const artigosFiltrados = tipoSelecionado === "Todos"
        ? Artigos
        : Artigos.filter(
            (artigo) => artigo.Tipo === tipoSelecionado
        );

    const temMais = artigosFiltrados.length > quantidadeInicial;

    const artigosVisiveis = expandido
        ? artigosFiltrados
        : artigosFiltrados.slice(0, quantidadeInicial);

    // Trocar de categoria também recolhe a lista
    function selecionarTipo(tipo: TipoArtigo | "Todos") {
        setTipoSelecionado(tipo);
        setExpandido(false);
    }

    return (
        <section id="pesquisas" className={styles.section}>
            <h2>Nossas publicações</h2>

            <div className={styles.ContainerGrid}>

                {/* Seletor de tipos */}
                <div
                    className={styles.Filtros}
                    role="group"
                    aria-label="Filtrar publicações por tipo"
                >
                    <button
                        type="button"
                        className={`${styles.BtnFiltro} ${
                            tipoSelecionado === "Todos"
                                ? styles.BtnFiltroAtivo
                                : ""
                        }`}
                        onClick={() => selecionarTipo("Todos")}
                        aria-pressed={tipoSelecionado === "Todos"}
                    >
                        Todos
                    </button>

                    {tipos.map((tipo) => (
                        <button
                            key={tipo}
                            type="button"
                            className={`${styles.BtnFiltro} ${
                                tipoSelecionado === tipo
                                    ? styles.BtnFiltroAtivo
                                    : ""
                            }`}
                            onClick={() => selecionarTipo(tipo)}
                            aria-pressed={tipoSelecionado === tipo}
                        >
                            {tipo}
                        </button>
                    ))}
                </div>

                {/* Grid de publicações */}
                <div
                    id="grid-artigos"
                    className={`${styles.GridArtigos} ${
                        expandido ? styles.GridExpandido : ""
                    }`}
                >
                    {artigosVisiveis.map((artigo) => (
                        <CardArtigo
                            {...artigo}
                            key={artigo.id}
                        />
                    ))}
                </div>

                {/* Gradiente e botão de expansão */}
                {temMais && (
                    <div
                        className={`${styles.ExpandirGrid} ${
                            expandido
                                ? styles.ExpandirGridExpandido
                                : ""
                        }`}
                    >
                        <button
                            type="button"
                            className={styles.BtnExpandirGrid}
                            onClick={() =>
                                setExpandido((estado) => !estado)
                            }
                            aria-expanded={expandido}
                            aria-controls="grid-artigos"
                        >
                            <span aria-hidden="true">
                                {expandido ? "↑" : "↓"}
                            </span>

                            <span>
                                {expandido
                                    ? "Mostrar menos"
                                    : "Ver mais"}
                            </span>
                        </button>
                    </div>
                )}

                {/* Mensagem quando não existem resultados */}
                {artigosFiltrados.length === 0 && (
                    <p className={styles.SemResultados}>
                        Nenhuma publicação encontrada nesta categoria.
                    </p>
                )}

            </div>
        </section>
    );
}