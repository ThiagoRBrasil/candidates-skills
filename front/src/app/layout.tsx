import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito_sans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Candidatos',
  description: 'Busque os candidatos com as melhores habilidades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={nunito_sans.className}>{children}</body>
    </html>
  )
}
