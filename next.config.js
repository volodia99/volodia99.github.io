/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Find the repository name from GITHUB_REPOSITORY
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: 'export',  
  experimental: {
    appDir: false,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: isGithubActions, // Only set to true for GitHub Actions
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
    ],
  },
}

module.exports = nextConfig
