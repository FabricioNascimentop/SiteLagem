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

export const Artigos: PropsArtigos[] = [
  {
    id: 1,
    titulo: 'Royalties Minerais e Desenvolvimento Local: Evidências dos Municípios Paraenses',
    autores: 'Silva, A. R.; Mendes, C. F.; Costa, R. P.',
    ano: '2025',
    resumo: 'Este estudo analisa a relação entre os repasses de CFEM e indicadores socioeconômicos em municípios mineradores do Pará entre 2010 e 2024, identificando padrões de uso e eficácia dos recursos.',
    href: '#',
    tags: ['CFEM', 'Pará', 'Royalties', 'Desenvolvimento'],
    Tipo: "Artigo"
  },
  {
    id: 2,
    titulo: 'Governança Fiscal em Municípios Dependentes da Mineração: Uma Análise Comparativa',
    autores: 'Oliveira, M. T.; Ferreira, J. S.',
    ano: '2025',
    resumo: 'Análise comparativa da capacidade de gestão fiscal em municípios com alta dependência de receitas minerais na Amazônia Legal, investigando riscos de volatilidade orçamentária.',
    href: '#',
    tags: ['Governança', 'Fiscal', 'Amazônia'],
    Tipo: "Tcc"
  },
  {
    id: 3,
    titulo: 'Maldição dos Recursos Naturais: Evidências para os Municípios Mineradores Brasileiros',
    autores: 'Carvalho, L. A.; Lima, P. B.; Santos, G. M.',
    ano: '2024',
    resumo: 'Investigação empírica sobre a hipótese da maldição dos recursos naturais em escala municipal, com foco nos efeitos de longo prazo da extração mineral sobre o desenvolvimento humano.',
    href: '#',
    tags: ['Recursos Naturais', 'Desenvolvimento', 'Econometria'],
    Tipo: "Tcc"
  },
  {
    id: 4,
    titulo: 'Transparência e Accountability na Gestão dos Royalties Minerais',
    autores: 'Pinheiro, R. C.; Gomes, A. B.',
    ano: '2024',
    resumo: 'Avaliação dos mecanismos de transparência e controle social na gestão dos recursos provenientes da compensação financeira pela exploração mineral em estados amazônicos.',
    href: '#',
    tags: ['Transparência', 'Controle Social', 'Mineração'],
    Tipo: "Tese"
  },
  {
    id: 5,
    titulo: 'Índice de Dependência Mineral Municipal (IDMM): Proposta Metodológica',
    autores: 'Silva, A. R.; Ribeiro, T. M.; Alves, C. P.',
    ano: '2024',
    resumo: 'Proposta de novo índice para mensurar o grau de dependência econômica de municípios em relação às receitas oriundas da exploração de recursos minerais, com aplicação piloto no Pará.',
    href: '#',
    tags: ['Metodologia', 'Indicadores', 'IDMM'],
    Tipo: "Tese"
  },
  {
    id: 6,
    titulo: 'CFEM e Desigualdade Social: Uma Análise dos Municípios Mineradores do Pará',
    autores: 'Rodrigues, F. M.; Almeida, D. S.; Barros, L. C.',
    ano: '2025',
    resumo: 'O estudo investiga a relação entre os repasses da Compensação Financeira pela Exploração de Recursos Minerais (CFEM) e a evolução da desigualdade social nos municípios mineradores paraenses, considerando indicadores de renda, educação e acesso a serviços públicos.',
    href: '#',
    tags: ['CFEM', 'Desigualdade Social', 'Pará', 'Indicadores Sociais'],
    Tipo: "Dissertação"
  },
  {
    id: 7,
    titulo: 'Receitas Minerais e Qualidade do Gasto Público Municipal na Amazônia',
    autores: 'Martins, E. R.; Souza, V. P.',
    ano: '2025',
    resumo: 'A pesquisa examina como os municípios da Amazônia Legal alocam receitas provenientes da atividade mineral, avaliando a distribuição dos gastos públicos entre saúde, educação, infraestrutura e saneamento básico.',
    href: '#',
    tags: ['Gasto Público', 'Receitas Minerais', 'Amazônia', 'Orçamento'],
    Tipo: "Dissertação"
  },
  {
    id: 8,
    titulo: 'Volatilidade da CFEM e Sustentabilidade das Finanças Públicas Locais',
    autores: 'Pereira, H. L.; Nascimento, R. A.; Teixeira, M. F.',
    ano: '2025',
    resumo: 'O trabalho analisa os efeitos das oscilações nos preços das commodities minerais sobre a arrecadação da CFEM e a estabilidade fiscal dos municípios dependentes da mineração, discutindo estratégias de planejamento financeiro de longo prazo.',
    href: '#',
    tags: ['CFEM', 'Volatilidade Fiscal', 'Commodities', 'Sustentabilidade Fiscal'],
    Tipo: "Dissertação"
  },
  {
    id: 9,
    titulo: 'Mineração e Desenvolvimento Humano: Uma Avaliação dos Indicadores Municipais',
    autores: 'Azevedo, C. R.; Lopes, B. M.',
    ano: '2024',
    resumo: 'A pesquisa avalia se a expansão da atividade mineral e o aumento das receitas públicas associadas se refletem em melhorias nos indicadores de desenvolvimento humano, com ênfase na educação, saúde e renda da população local.',
    href: '#',
    tags: ['Desenvolvimento Humano', 'Mineração', 'IDH', 'Políticas Públicas'],
    Tipo: "Outro"
  },
  {
    id: 10,
    titulo: 'Planejamento Orçamentário e Aplicação da CFEM em Municípios Paraenses',
    autores: 'Monteiro, P. A.; Cardoso, N. G.; Freitas, J. L.',
    ano: '2024',
    resumo: 'O estudo examina a integração das receitas da CFEM aos instrumentos de planejamento municipal, incluindo o Plano Plurianual, a Lei de Diretrizes Orçamentárias e a Lei Orçamentária Anual, identificando desafios para a eficiência da gestão pública.',
    href: '#',
    tags: ['CFEM', 'Planejamento Orçamentário', 'Gestão Pública', 'Pará'],
    Tipo: "Artigo"
  },
  {
    id: 11,
    titulo: 'Dependência das Commodities Minerais e Resiliência Econômica Municipal',
    autores: 'Andrade, G. T.; Ribeiro, S. F.',
    ano: '2024',
    resumo: 'A investigação analisa a capacidade de adaptação econômica de municípios mineradores diante de choques nos mercados internacionais, considerando a diversificação produtiva, o emprego formal e a participação das receitas minerais na arrecadação municipal.',
    href: '#',
    tags: ['Commodities', 'Resiliência Econômica', 'Diversificação Produtiva', 'Mineração'],
    Tipo: "Artigo"
  },
  {
    id: 12,
    titulo: 'Controle Social e Participação Cidadã na Destinação dos Royalties Minerais',
    autores: 'Moraes, D. P.; Batista, R. L.; Campos, E. A.',
    ano: '2023',
    resumo: 'O artigo propõe analisar a participação da sociedade civil no acompanhamento da aplicação dos royalties minerais, considerando conselhos municipais, audiências públicas, portais da transparência e mecanismos de fiscalização social.',
    href: '#',
    tags: ['Controle Social', 'Royalties', 'Participação Cidadã', 'Transparência'],
    Tipo: "Dissertação"
  },
  {
    id: 13,
    titulo: 'Diversificação Econômica em Territórios de Forte Especialização Mineral',
    autores: 'Fernandes, M. C.; Oliveira, R. D.',
    ano: '2023',
    resumo: 'O estudo investiga alternativas para reduzir a dependência da mineração em economias municipais, discutindo políticas de incentivo à agricultura, ao turismo, aos serviços e à industrialização como estratégias de desenvolvimento territorial sustentável.',
    href: '#',
    tags: ['Diversificação Econômica', 'Desenvolvimento Territorial', 'Mineração', 'Sustentabilidade'],
    Tipo: "Artigo"
  },
  {
    id: 14,
    titulo: 'CFEM, Infraestrutura Urbana e Desigualdades Territoriais no Sudeste Paraense',
    autores: 'Costa, J. V.; Mendes, A. L.; Farias, P. H.',
    ano: '2023',
    resumo: 'A pesquisa explora a relação entre a arrecadação mineral e os investimentos em infraestrutura urbana no sudeste do Pará, avaliando possíveis diferenças territoriais no acesso ao saneamento, à mobilidade urbana, à habitação e aos equipamentos públicos.',
    href: '#',
    tags: ['CFEM', 'Infraestrutura Urbana', 'Sudeste Paraense', 'Desigualdades Territoriais'],
    Tipo: "Artigo"
  },
  {
    id: 15,
    titulo: 'Indicadores de Sustentabilidade Fiscal para Municípios Mineradores: Uma Abordagem Integrada',
    autores: 'Lima, F. G.; Santos, M. E.; Rocha, A. P.',
    ano: '2022',
    resumo: 'O trabalho apresenta uma abordagem integrada para avaliar a sustentabilidade fiscal de municípios mineradores, combinando indicadores de arrecadação própria, dependência de transferências, receitas minerais, despesas correntes e capacidade de investimento público.',
    href: '#',
    tags: ['Sustentabilidade Fiscal', 'Indicadores', 'Municípios Mineradores', 'Finanças Públicas'],
    Tipo: "Artigo"
  }
]

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