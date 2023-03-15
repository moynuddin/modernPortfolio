/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "pbs.twimg.com"],
  },
  experimental: {
    nftTracing: true,
  },
};

module.exports = nextConfig;
