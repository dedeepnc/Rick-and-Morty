/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'www.freepnglogos.com', 'rickandmortyapi.com'],
  },
};

module.exports = nextConfig;
