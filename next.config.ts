/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/cola.games/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true, // GitHub Pages doesn't support dynamic image optimization.
  },
};

module.exports = nextConfig;
