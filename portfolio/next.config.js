/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const prefixPath = isProd ? '/tomoron' : ''

const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages({
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
})
