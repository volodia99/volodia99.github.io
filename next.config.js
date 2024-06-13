/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
//   experimental: {
//     appDir: false,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.dribbble.com',
//       },
//     ],
//   },
// }
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
