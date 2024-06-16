/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  experimental: {
    appDir: false,
  },
  images: {
    unoptimized: true, // Only set to true for GitHub Actions
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
    ],
  },
};

module.exports = nextConfig
