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
    // images: {
    //   domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
    // },
    images: {
      // domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
      domains: ['res.cloudinary.com'],
      // remotePatterns: [
      //   {
      //     protocol: 'https',
      //     hostname: 'assets.example.com',
      //     port: '',
      //     pathname: '/account123/**',
      //   },
      // ],
    },
  
  });
  
  
  const withVideos = require('next-videos')
  
  module.exports = withVideos()