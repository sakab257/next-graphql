import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'localhost:8084'],
  },
};

module.exports = nextConfig;
