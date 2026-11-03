-- CreateEnum
CREATE TYPE "TipoArtigo" AS ENUM ('Artigo', 'Tcc', 'Tese', 'Dissertacao', 'Outro', 'Materia', 'Livro');

-- CreateTable
CREATE TABLE "Artigo" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autores" TEXT[],
    "ano" TEXT NOT NULL,
    "resumo" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "keywords" TEXT[],
    "Tipo" "TipoArtigo" NOT NULL,
    "srcDoc" TEXT NOT NULL,

    CONSTRAINT "Artigo_pkey" PRIMARY KEY ("id")
);
