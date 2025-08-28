import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
};

export default withMDX(config);
