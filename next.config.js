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

// module.exports = nextConfig

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
