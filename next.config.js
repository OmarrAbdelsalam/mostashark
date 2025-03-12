const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
      },
      {
        protocol: 'https',
        hostname: 'previews.dropbox.com',
      },
      {
        protocol: 'https',
        hostname: 'www.commondreams.org',
      },
      {
        protocol: 'https',
        hostname: 'images.skynewsarabia.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = withNextIntl(nextConfig);
