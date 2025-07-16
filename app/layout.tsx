import type { Metadata } from 'next'
import { Poppins, Lekton } from 'next/font/google'
import './globals.css'
const inter = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})

const lekton = Lekton({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-lekton',
})

export const metadata: Metadata = {
	title: 'Asilbek Tursunov',
	description: ` Asilbek Tursunov — Frontend Developer / Dasturchi. React, Vue, Next.js texnologiyalarida yaratilgan portfolio va loyihalar bilan tanishing. Focused on quality, innovation, and modern web development. `,
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
			<body className={`${lekton.className} overflow-x-hidden `}>{children}</body>
		</html>
	)
}
