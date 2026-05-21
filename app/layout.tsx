import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Conceito Mármores & Granitos | Qualidade e Atendimento Personalizado',
  description:
    'Especialistas em mármores, granitos, quartzos e superfícies planejadas. Projetos sob medida para cozinhas, banheiros, escadas e revestimentos. Venâncio Aires — RS.',
  keywords:
    'mármores, granitos, quartzo, bancadas, banheiros, cozinhas, revestimentos, Venâncio Aires, Rio Grande do Sul',
  openGraph: {
    title: 'Conceito Mármores & Granitos',
    description: 'Qualidade que você procura com o atendimento personalizado que você merece.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable}`}>
      <body className="bg-white text-gray-800 font-sans antialiased">{children}</body>
    </html>
  )
}
