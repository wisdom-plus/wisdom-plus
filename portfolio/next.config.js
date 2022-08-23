/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const prefixPath = isProd ? '/tomoron' : ''

module.exports = {
  assetPrefix: prefixPath,
  reactStrictMode: true,
  swcMinify: true,
  basePath: prefixPath,
}
