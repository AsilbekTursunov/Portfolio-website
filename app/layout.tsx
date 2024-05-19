import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
const inter = Fira_Code({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Asilbek Tursunov',
  description: 'Asilbek Tursunov Portfolio',
  icons: {
    icon: ['/favicon.ico?v=4'], 
     
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
      <link rel="icon" href="/site-logo.png" sizes="any" />
      </head>
      <body className={`${inter.className} overflow-x-hidden `} >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
