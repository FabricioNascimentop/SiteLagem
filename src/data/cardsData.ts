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
  tipo: string;
  resumo: string;
  href: string;
  tags: string[];
  srcImage: string;
}

type PropsDashboard = {
  id: number;
  srcImage: string;
  alt: string;
  titulo: string;
  descricao: string
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

export const Artigos: PropsArtigos[] = [
  {
    id: 1,
    titulo: 'Royalties Minerais e Desenvolvimento Local: Evidências dos Municípios Paraenses',
    autores: 'Silva, A. R.; Mendes, C. F.; Costa, R. P.',
    ano: '2025',
    tipo: 'Artigo',
    resumo: 'Este estudo analisa a relação entre os repasses de CFEM e indicadores socioeconômicos em municípios mineradores do Pará entre 2010 e 2024, identificando padrões de uso e eficácia dos recursos.',
    href: '#',
    tags: ['CFEM', 'Pará', 'Royalties', 'Desenvolvimento'],
    srcImage:'/artigos/teste.png'
  },
  {
    id: 2,
    titulo: 'Governança Fiscal em Municípios Dependentes da Mineração: Uma Análise Comparativa',
    autores: 'Oliveira, M. T.; Ferreira, J. S.',
    ano: '2025',
    tipo: 'Working Paper',
    resumo: 'Análise comparativa da capacidade de gestão fiscal em municípios com alta dependência de receitas minerais na Amazônia Legal, investigando riscos de volatilidade orçamentária.',
    href: '#',
    tags: ['Governança', 'Fiscal', 'Amazônia'],
    srcImage:'/artigos/teste.png',
  },
  {
    id: 3,
    titulo: 'Maldição dos Recursos Naturais: Evidências para os Municípios Mineradores Brasileiros',
    autores: 'Carvalho, L. A.; Lima, P. B.; Santos, G. M.',
    ano: '2024',
    tipo: 'Dissertação',
    resumo: 'Investigação empírica sobre a hipótese da maldição dos recursos naturais em escala municipal, com foco nos efeitos de longo prazo da extração mineral sobre o desenvolvimento humano.',
    href: '#',
    tags: ['Recursos Naturais', 'Desenvolvimento', 'Econometria'],
    srcImage:'/artigos/teste.png',
  },
  {
    id: 4,
    titulo: 'Transparência e Accountability na Gestão dos Royalties Minerais',
    autores: 'Pinheiro, R. C.; Gomes, A. B.',
    ano: '2024',
    tipo: 'Relatório',
    resumo: 'Avaliação dos mecanismos de transparência e controle social na gestão dos recursos provenientes da compensação financeira pela exploração mineral em estados amazônicos.',
    href: '#',
    tags: ['Transparência', 'Controle Social', 'Mineração'],
    srcImage:'/artigos/teste.png',
  },
  {
    id: 5,
    titulo: 'Índice de Dependência Mineral Municipal (IDMM): Proposta Metodológica',
    autores: 'Silva, A. R.; Ribeiro, T. M.; Alves, C. P.',
    ano: '2024',
    tipo: 'Nota Técnica',
    resumo: 'Proposta de novo índice para mensurar o grau de dependência econômica de municípios em relação às receitas oriundas da exploração de recursos minerais, com aplicação piloto no Pará.',
    href: '#',
    tags: ['Metodologia', 'Indicadores', 'IDMM'],
    srcImage:'/artigos/teste.png'
  },
]

export const Dashboards: PropsDashboard[] = [
  {
    id: 1,
    alt: 'dashboard de despesas orçamentárias por município lagem',
    descricao: 'descrição',
    srcImage:'/bi/despesas-orcamentarias.png',
    titulo:'despesas orçamentárias'
  }
]