import withPWA from 'next-pwa'
import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
})({
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'static.mk.ru' },
			{ protocol: 'https', hostname: 'aceternity.com' },
			{ protocol: 'https', hostname: 'images.unsplash.com' },
			{ protocol: 'https', hostname: 'www.youtube.com' },
			{ protocol: 'https', hostname: 'api.microlink.io' },
			{ protocol: 'https', hostname: 'pin.it' },
			{ protocol: 'https', hostname: 'i.pinimg.com' },
		],
	},

	eslint: { ignoreDuringBuilds: true },
})

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
