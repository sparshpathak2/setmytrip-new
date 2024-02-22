// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  module.exports = withBundleAnalyzer({
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
  
  });
  
  
  const withVideos = require('next-videos')
  
  module.exports = withVideos()