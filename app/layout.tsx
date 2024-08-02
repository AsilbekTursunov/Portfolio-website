import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Asilbek Tursunov',
  description:
    'Asilbek Tursunov Portfolio, Portfolio Asilbek Tursunov, Asilbek Portfolio, Tursunov Portfolio',
  icons: {
    icon: ['/images/site-logo-2.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/site-logo.png' sizes='any' />
      </head>
      <body className={`${inter.className} overflow-x-hidden `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
