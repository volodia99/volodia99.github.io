// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',  
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

// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Find the repository name from GITHUB_REPOSITORY
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Since GitHub Pages does not support Next.js optimized images
  },
};
