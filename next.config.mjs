import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: ['typescript', 'twoslash'],
  webpack: (cfg, { dev }) => {
    // Use in-memory cache in development to avoid Windows FS rename issues
    if (dev) {
      cfg.cache = { type: 'memory' };
    }
    return cfg;
  },
};

export default withMDX(config);

// Disable Turbopack for better compatibility if issues arise
// module.exports = withMDX(config);