/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['aceternity.com', 'images.unsplash.com', 'www.youtube.com', 'api.microlink.io', 'pin.it'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.mk.ru'
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com'
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io'
      },
      {
        protocol: 'https',
        hostname: 'pin.it'
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
