/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['demo.lion-themes.net', process.env.IMAGE, '45.119.86.109'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    CMS: process.env.CMS,
    IMAGE: process.env.IMAGE,
    PUBLIC_URL: process.env.PUBLIC_URL,
  },
  output: 'standalone',
};

module.exports = nextConfig;
