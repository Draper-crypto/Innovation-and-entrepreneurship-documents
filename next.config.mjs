import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: ['typescript', 'twoslash'],
  // 全局图片优化配置
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
  },
  
  // 性能优化设置
  experimental: {
    optimizeCss: true,
  },
  
  // 编译器优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (cfg, { dev }) => {
    // Use in-memory cache in development to avoid Windows FS rename issues
    if (dev) {
      cfg.cache = { type: 'memory' };
    }
    
    // 启用代码分割优化
    if (!dev) {
      cfg.optimization = {
        ...cfg.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      };
    }
    
    return cfg;
  },
};

export default withMDX(config);

// Disable Turbopack for better compatibility if issues arise
// module.exports = withMDX(config);