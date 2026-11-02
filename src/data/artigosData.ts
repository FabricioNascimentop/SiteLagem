type PropsArtigos = {
  id: number;
  titulo: string;
  autores: string[];
  ano: string;
  resumo: string;
  href: string;
  keywords: string[];
  Tipo: "Artigo" | "Tcc" | "Tese" | "Dissertação" | "Outro" | "Matéria" | "Livro";
  srcDoc: string
}
export const Artigos: PropsArtigos[] = [
  {
    id: 1,
    titulo: 'INTERESSES ECONÔMICOS E JUSTIÇA SOCIOAMBIENTAL: COMUNIDADES QUILOMBOLAS E O MERCADO DE CARBONO NA AMAZÔNIA',
    autores: ['Maria Amélia Enriquez','Célia Gadotti'],
    ano: '2025',
    resumo: "Este estudo contribui para o debate sobre sustentabilidade e justiça climática, enfatizando a importância de políticas públicas envolvendo comunidades tradicionais, como os quilombolas, quedesempenham papel fundamental na preservação da floresta Amazônica. O texto foca o dilemaentre os interesses econômicos de empresas privadas e a necessidade de proteção ambiental ejustiça social de comunidades vulneráveis, enumerando os desafios e as oportunidades para conciliar essa questão, incluindo breve análise comparativa com outros países amazônicos. A hipótese é que, embora os contratos de redução de emissões por desmatamento e degradação florestal (REDD+) ofereçam oportunidades econômicas, a efetiva implementação das políticas frequentemente falha na inclusão das comunidades. Os resultados revelam que as políticas públicas podem contribuir para equilibrar esses interesses que, em geral, são colidentes, todavia há problemas relevantes na efetiva adoção (recursos financeiros), na implementação (inclusão) e no acompanhamento (avaliação, monitoramento) dessas políticas que comprometem as garantias aos direitos dessas comunidades.",
    href: '#',
    keywords: ['quilombola', 'mercado de carbono', 'interesse econômico'],
    Tipo: "Artigo",
     srcDoc:'/artigos/INTERESSES ECONÔMICOS E JUSTIÇA SOCIOAMBIENTAL: COMUNIDADES QUILOMBOLAS E O MERCADO DE CARBONO NA AMAZÔNIA.pdf'
  },
  {
    id: 2,
    titulo:"Reserva financeira é menor entre as mulheres",
    autores:['THALINE SILVA'],
    ano:'2026',
    resumo:"Pesquisa da Serasa mostra que apenas 19% conseguem manter dinheiro guardado para imprevistos.",
    href:'#',
    keywords:['pesquisa, oliberal, endividamento, mulheres'],
    Tipo: 'Matéria',
    srcDoc:'/artigos/Reserva financeira é menor entre as mulheres.pdf'
  },
  {
    id: 3,
    titulo:'A renda da mineração: a economia política do subsolo brasileiro',
    ano:'2026',
    autores:['Giliad de Souza Silva', 'Charles Trocate'],
    href:'#',
    keywords:['mineração','renda','renda da terra','economia política'],
    resumo:'resumo',
    srcDoc:'/artigos/A renda da mineração: a economia política do subsolo brasileiro.pdf',
    Tipo:'Livro',
  }
]
