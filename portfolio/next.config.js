/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const prefixPath = isProd ? '/tomoron' : ''
const withExportImages = require('next-export-optimize-images')

const nextConfig = withExportImages({
  assetPrefix: prefixPath,
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
