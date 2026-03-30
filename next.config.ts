import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/framecheck-landing" : "",
  images: { unoptimized: true },
};

export default nextConfig;
