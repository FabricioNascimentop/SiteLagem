import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'LAGEM — Laboratório de Estudos em Governança de Municípios Mineradores',
  description: 'Laboratório de pesquisa em economia da mineração da Universidade Federal do Pará',
  keywords: ['mineração', 'UFPA', 'pesquisa', 'economia', 'governança', 'municípios mineradores'],
  openGraph: {
    title: 'LAGEM — UFPA',
    description: 'Laboratório de Estudos em Governança de Municípios Mineradores',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
