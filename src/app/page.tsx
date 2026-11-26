import HomePageClient from './homepageClient'
import { prisma } from "@/lib/prisma"
import { getUsuarioLogado } from '@/lib/auth';

export default async function Home() {
  const [slides, artigos, dashboards] = await Promise.all([
    prisma.divulgacoes.findMany({
      where: { status: "PUBLICADO" },
      orderBy: [{ ordem: "asc" }, { id: "asc" }],
    }),
    prisma.publicacao.findMany({
      where: { status: "PUBLICADO" },
      orderBy: [{ ano: "desc" }, { id: "desc" }],
    }),
    prisma.dashboards.findMany({
      where: { status: "PUBLICADO" },
      orderBy: [{ ordem: "asc" }, { id: "asc" }],
    }),
  ]);

  console.log(slides)

  const tipos = ["Artigo", "Tcc", "Tese", "Dissertação", "Outro", "Matéria", "Livro"] as const;

  const usuario = await getUsuarioLogado()

  //componente não está pronto
  const artigosParaExibir = artigos.map((a) => ({
    id: a.id,
    titulo: a.titulo,
    autores: a.autores ? a.autores.split(",").map((nome) => nome.trim()) : [],
    ano: a.ano?.toString() ?? "",
    resumo: a.resumo ?? "",
    href: a.url_documento ?? "#",
    keywords: a.keywords,
    Tipo: tipos.find((tipo) => tipo.toLowerCase() === a.tipo_publicacao.toLowerCase()) ?? "Outro",
    srcDoc: a.url_documento ?? "",
  }));

  return (
    <HomePageClient dashboards={dashboards} publicacoes={artigosParaExibir} slides={slides} usuario={usuario}/>
  );
}
