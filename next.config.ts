import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname :'localhost',
      port:'3000'
    },
      {
        hostname: 'localhost',
        port: '8084'
      }],
  },
};

module.exports = nextConfig;
