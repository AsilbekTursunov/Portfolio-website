/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['aceternity.com', 'images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

export default nextConfig
