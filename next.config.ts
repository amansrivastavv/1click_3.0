import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Enable static export ONLY in production build
  output: isProd ? "export" : undefined,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Enable Proxy Rewrites ONLY in development (when not using static export)
  async rewrites() {
    if (isProd) return [];
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://appapi.1clickpolicy.com/:path*",
      },
    ];
  },
};

export default nextConfig;
