export type TipoArtigo =
    | "Artigo"
    | "Tcc"
    | "Tese"
    | "Dissertação"
    | "Outro"
    | "Matéria"
    | "Livro";

export type PropsPublicacoes = {
    id: number;
    titulo: string;
    autores: string[];
    ano: string;
    resumo: string;
    href: string;
    keywords: string[];
    Tipo: TipoArtigo;
    srcDoc: string;
};

export type SlideHeroProps = {
  id: number;
  imagem_url: string | null;
  alt_text: string | null;
  titulo: string;
  descricao: string | null;
  link_destino: string | null;
};

export type Dashboard = {
  id: number;
  titulo: string;
  descricao: string | null;
  imagem_url: string | null;
  url_dashboard: string;
};