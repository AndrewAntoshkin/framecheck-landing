import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/framecheck-landing" : "",
  assetPrefix: isProd ? "/framecheck-landing/" : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
