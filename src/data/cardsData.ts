type PropSlidesHero = {
  id: number;
  srcImage: string;
  alt: string;
  title: string;
  description: string;
  bg: string;
};

type PropsArtigos = {
  id: number;
  titulo: string;
  autores: string;
  ano: string;
  resumo: string;
  href: string;
  tags: string[];
  Tipo: "Artigo" | "Tcc" | "Tese" | "Dissertação" | "Outro";
}

type PropsDashboard = {
  id: number;
  srcImage: string;
  alt: string;
  titulo: string;
  descricao: string;
  link: string;
}

export const slidesHeroData: PropSlidesHero[] = [
  {
    id: 1,
    srcImage: "/hero/1.png",
    alt: "fórum de governa pública e desenvolvimento sustentável imagem",
    title: "primeiro fórum estratégico de governança pública e desenvolvimento sustentável (primeiro dia)",
    description: "descrição mais detalhada",
    bg: "linear-gradient(135deg, #172554, #0f172a)",
  },
  {
    id: 2,
    srcImage: "/hero/2.png",
    alt: "oficina de qualificação imagem",
    title: "Oficina de qualificação: Princípios e diretrizes para o planejamento estratégico municipal",
    description: "descrição mais detalhada",
    bg: "linear-gradient(135deg, #422006, #1c1917)",
  },
  {
    id: 3,
    srcImage: "/hero/3.png",
    alt: "oficina de qualificação imagem",
    title: "Oficina de qualificação: Princípios e diretrizes para o planejamento estratégico municipal (segundo dia)",
    description: "descrição mais detalhada",
    bg: "linear-gradient(135deg, #422006, #1c1917)",
  },
];


export const Dashboards: PropsDashboard[] = [
  {
    id: 1,
    alt: 'dashboard de despesas orçamentárias por município lagem',
    descricao: 'descrição',
    srcImage:'/bi/despesas-orcamentarias.png',
    titulo:'despesas orçamentárias',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiMGI3ODBmOGYtMmU1NS00ZWJjLTg0MmEtZGM4NTY1YzNjYmRmIiwidCI6IjU0ZjNkZTEyLWI3NmUtNGYxOC1hZDE1LWY2OGRhNjcyYjAwMCIsImMiOjZ9',
  },
    {
    id: 2,
    alt: 'dashboard de despesas por função em cada município lagem',
    descricao: 'descrição',
    srcImage:'/bi/despesas-por-funcao.png',
    titulo:'despesas por função',
    link:'https://app.powerbi.com/view?r=eyJrIjoiNjkxNmRkOWEtNTY5OS00NGU4LTk4NTgtZjJiYzIxZDZjOTc1IiwidCI6IjU0ZjNkZTEyLWI3NmUtNGYxOC1hZDE1LWY2OGRhNjcyYjAwMCIsImMiOjZ9&pageName=pg0inicio0000000000'
  },
  {
    id: 3,
    alt: 'dashboard de meio ambiente e saneamento lagem',
    descricao: 'descrição',
    srcImage:'/bi/meio-ambiente-e-saneamento.png',
    titulo:'meio ambiente e saneamento',
    link:'https://app.powerbi.com/view?r=eyJrIjoiZjA2Yzc4NWEtZmY2My00MTNlLThhZmYtNmU4YjczYjZhYjA5IiwidCI6IjU0ZjNkZTEyLWI3NmUtNGYxOC1hZDE1LWY2OGRhNjcyYjAwMCIsImMiOjZ9&pageName=p01inicio'
  },
  {
    id: 4,
    alt: 'dashboard de receitas orçamentárias',
    descricao: 'descrição',
    srcImage:'/bi/receitas-orcamentarias.png',
    titulo:'receitas orçamentárias',
    link:'https://app.powerbi.com/view?r=eyJrIjoiODViNTc5YmQtYWY1Zi00MTU3LThmNWYtYjkzZGNkNTEyY2FjIiwidCI6IjU0ZjNkZTEyLWI3NmUtNGYxOC1hZDE1LWY2OGRhNjcyYjAwMCIsImMiOjZ9'
  },
  {
    id: 5,
    alt: 'dashboard de saúde e educação',
    descricao: 'descrição',
    srcImage:'/bi/saude-e-educacao.png',
    titulo:'saúde e educação',
    link:'https://app.powerbi.com/view?r=eyJrIjoiYzY4NDdlNGYtNzUwMS00N2Q1LWIzZGYtNmU1NjViMjlkOTBkIiwidCI6IjU0ZjNkZTEyLWI3NmUtNGYxOC1hZDE1LWY2OGRhNjcyYjAwMCIsImMiOjZ9&pageName=p01inicio'
  },
  {
    id:6,
    alt:'dashboard de uso da terra',
    descricao:'descrição',
    srcImage:'/bi/uso-da-terra.png',
    titulo:'uso da terra',
    link:'https://app.powerbi.com/view?r=eyJrIjoiMWEzOTI4NDctZWFhNi00YzhlLWEyZGQtYzAyMzI4NzJiMGY4IiwidCI6IjU0ZjNkZTEyLWI3NmUtNGYxOC1hZDE1LWY2OGRhNjcyYjAwMCIsImMiOjZ9&pageName=p01inicio'
  },
  {
    id:7,
    alt:'dashboard de população pib e CEFEM',
    descricao:'descrição',
    srcImage:'/bi/populacao-pib-cefem.png',
    titulo:'População, pib e CEFEM',
    link:'https://app.powerbi.com/view?r=eyJrIjoiNGRjNzZjMWMtOTNkZC00YWQzLThlNGItNzFkMmRiNDlmMjAwIiwidCI6IjU0ZjNkZTEyLWI3NmUtNGYxOC1hZDE1LWY2OGRhNjcyYjAwMCIsImMiOjZ9&pageName=p01inicio'
  },
  {
    id:8,
    alt:'dashboard de segurança pública',
    descricao:'descrição',
    srcImage:'/bi/seguranca-publica.png',
    titulo:'Segurança pública',
    link:'https://app.powerbi.com/view?r=eyJrIjoiYmU1M2IzZGItZGI5OS00OTQ0LWJhYTctMTU3OTcxZWRlODVjIiwidCI6IjU0ZjNkZTEyLWI3NmUtNGYxOC1hZDE1LWY2OGRhNjcyYjAwMCIsImMiOjZ9&pageName=p01inicio'
  }
]