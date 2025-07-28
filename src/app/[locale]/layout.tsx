import type { Metadata } from 'next'
import { Poppins, Lekton } from 'next/font/google'
import { ChildProps } from '@/types'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import './globals.css'
import { routing } from '@/src/i18n/routing'
import { notFound } from 'next/navigation'
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
		icon: ['/site-logo-2.png'],
	},
}

export interface Props extends ChildProps {
	params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	return (
		<html lang={locale} className='scroll-smooth'>
			<body className={`${lekton.className} overflow-x-hidden `}>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
