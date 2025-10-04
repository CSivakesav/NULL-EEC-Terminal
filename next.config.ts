import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

// Check if we're deploying to GitHub Pages specifically
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
// Only use basePath for GitHub Pages, not for Vercel
const basePath = isGitHubPages ? '/NULL-EEC-Terminal' : '';

const nextConfig: NextConfig = {
  // Only use static export for GitHub Pages, not for Vercel
  ...(isGitHubPages && { output: 'export' }),
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Ensure proper webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
