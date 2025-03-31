import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    serverActions: {
      bodySizeLimit: "10mb",
      allowedOrigins: ["http://localhost:3000/"],
    },
  },
};

export default nextConfig;
