/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const prefixPath = isProd ? '/tomoron' : ''

const withExportImages = require('next-export-optimize-images')

const prefixpath = process.env.GITHUB_ACTIONS && isProd ? '' : prefixPath

module.exports = withExportImages({
  assetPrefix: prefixpath,
  reactStrictMode: true,
  swcMinify: true,
  basePath: prefixPath,
})
