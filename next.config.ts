import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

// GitHub Pages deployment configuration
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? '/NULL-EEC-Terminal' : '';

const nextConfig: NextConfig = {
  output: 'export',
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
  // Disable server-side features for static export
  experimental: {
    esmExternals: false,
  },
  // Temporarily disable component tagger for static export
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),
  // turbopack: {
  //   rules: {
  //     "*.{jsx,tsx}": {
  //       loaders: [LOADER]
  //     }
  //   }
  // }
};

export default nextConfig;
