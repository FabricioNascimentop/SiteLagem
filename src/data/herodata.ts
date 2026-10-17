type Slide = {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  bg: string;
};

export const slides: Slide[] = [
  {
    id: 1,
    image: "/hero/1.png",
    alt: "fórum de governa pública e desenvolvimento sustentável imagem",
    title: "primeiro fórum estratégico de governança pública e desenvolvimento sustentável",
    description: "descrição mais detalhada",
    bg: "linear-gradient(135deg, #172554, #0f172a)",
  },
  {
    id: 2,
    image: "/hero/2.png",
    alt: "oficina de qualificação imagem",
    title: "Oficina de qualificação: Princípios e diretrizes para o planejamento estratégico municipal",
    description: "descrição mais detalhada",
    bg: "linear-gradient(135deg, #422006, #1c1917)",
  },
  {
    id: 3,
    image: "/hero/3.png",
    alt: "oficina de qualificação imagem",
    title: "Oficina de qualificação: Princípios e diretrizes para o planejamento estratégico municipal",
    description: "descrição mais detalhada",
    bg: "linear-gradient(135deg, #422006, #1c1917)",
  },
];