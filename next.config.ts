import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output static HTML export for cPanel / Shared Hosting
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
