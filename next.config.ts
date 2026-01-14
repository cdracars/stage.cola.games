/** @type {import('next').NextConfig} */

interface WebpackConfig {
  cache: {
    type: string;
  };
  ignoreWarnings: {
    message: RegExp;
  }[];
  output: {
    publicPath: string;
  };
}

interface NextConfig {
  output: string;
  basePath: string;
  assetPrefix: string;
  trailingSlash: boolean;
  images: {
    unoptimized: boolean;
  };
  turbopack: Record<string, never>;
  webpack: (config: WebpackConfig) => WebpackConfig;
}

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages static export
  assetPrefix: "", // Required for GitHub Pages static export
  basePath: "", // Base path for static export
  trailingSlash: true, // Ensure all routes end with a slash
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  turbopack: {}, // Silence Next 16 Turbopack + webpack config warning
  webpack: (config) => {
    // Enable filesystem caching with absolute cache location
    config.cache = {
      type: "memory",
    };

    // Suppress caching-related warnings
    config.ignoreWarnings = [
      { message: /Caching failed for pack/ },
    ];

    return config;
  },
};

module.exports = nextConfig;
