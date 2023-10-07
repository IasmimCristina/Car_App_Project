import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Central Carros',
  description: 'Pesquise os melhores carros do mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
