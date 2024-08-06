/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['aceternity.com', 'images.unsplash.com', 'www.youtube.com', 'api.microlink.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
