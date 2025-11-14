import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CartProvider } from './providers'

export const metadata: Metadata = {
  title: 'PinkStore - Premium E-commerce',
  description: 'Shop beautiful products with our pink-themed storefront',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <CartProvider>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
