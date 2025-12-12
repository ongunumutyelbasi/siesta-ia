import type { NextConfig } from "next";

const repoName = 'siesta-ia'; 
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // 1. Specifies the base path for assets in production (for GitHub Pages URL structure)
  basePath: isProd ? `/${repoName}` : '',

  // 2. IMPORTANT: Tells Next.js to build static HTML/CSS/JS files
  output: 'export', 
  
  // 3. Recommended for static export: Disables Next.js specific Image optimization features
  images: {
    unoptimized: true
  }
};

export default nextConfig;