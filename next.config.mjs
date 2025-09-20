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
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' }
    ],
  },

  // 性能优化设置
  experimental: {
    // 关闭 optimizeCss 以避免在 Windows 环境下偶发的 webpack-runtime chunk 缺失问题
    optimizeCss: false,
    // 针对大型依赖启用按需导入，降低编译和打包成本
    optimizePackageImports: ['lucide-react', '@tabler/icons-react', '@heroui/react'],
  },

  // 编译器优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (cfg, { dev }) => {
    // 开发环境使用内存缓存，规避 Windows 文件系统 rename 限制
    if (dev) {
      cfg.cache = { type: 'memory' };
    }

    // 生产环境优化代码分割
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