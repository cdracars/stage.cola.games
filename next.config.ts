import path from "path";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

interface WebpackConfig {
  cache: {
    type: string;
    buildDependencies: {
      config: string[];
    };
    cacheLocation: string;
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
  webpack: (config: WebpackConfig) => WebpackConfig;
}

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages static export
  basePath: isProd ? "/stage.cola.games" : "",
  assetPrefix: isProd ? "/stage.cola.games/" : "",
  trailingSlash: true, // Ensure all routes end with a slash
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  webpack: (config) => {
    // Enable filesystem caching with absolute cache location
    config.cache = {
      type: "filesystem",
      buildDependencies: {
        config: [path.resolve(__dirname, "next.config.ts")], // Absolute path to config
      },
      cacheLocation: path.resolve(process.cwd(), "node_modules/.cache/webpack"),
    };

    // Suppress caching-related warnings
    config.ignoreWarnings = [
      { message: /Caching failed for pack/ },
    ];

    config.output.publicPath = isProd
      ? '/stage.cola.games/_next/'
      : '/_next/';

    return config;
  },
};

module.exports = nextConfig;

