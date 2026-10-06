import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/smartspace-seo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;