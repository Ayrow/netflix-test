/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'i.ytimg.com'],
  },
};
