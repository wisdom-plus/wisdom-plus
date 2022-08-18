/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const prefixPath = isProd ? "/tomoron" : "";

const nextConfig = {
  assetPrefix: prefixPath,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
