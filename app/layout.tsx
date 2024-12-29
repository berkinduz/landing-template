import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ContentProvider } from '@/contexts/ContentContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fitness Gym',
  description: 'Your ultimate fitness destination',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ContentProvider>
      </body>
    </html>
  )
}

