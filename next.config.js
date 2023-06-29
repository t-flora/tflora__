/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'upload.wikimedia.org',
  //       port: '',
  //     }
  //   ]
  // }
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)