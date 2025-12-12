// next.config.ts

import type { NextConfig } from "next";

// Vercel does not need repoName, basePath, or assetPrefix
const nextConfig: NextConfig = {

  images: {
    // Keep unoptimized for now, or remove it if you want Vercel's image optimization
    unoptimized: true
  }
};

export default nextConfig;