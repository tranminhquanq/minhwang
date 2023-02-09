/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
