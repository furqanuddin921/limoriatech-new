import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output static HTML export for cPanel / Shared Hosting
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Turbopack configuration (Next.js 16+ default bundler)
  // Custom splitChunks (webpack cacheGroups) is not supported in Turbopack.
  // Code splitting is achieved via dynamic imports in page components:
  //   - src/app/portfolio/[slug]/page.tsx  → PortfolioDetailContent lazy loaded
  //   - src/app/services/[slug]/page.tsx   → ServiceDetailContent lazy loaded
  // Turbopack handles vendor chunk splitting automatically and efficiently.
  turbopack: {},
};

export default nextConfig;
