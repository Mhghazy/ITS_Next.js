import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",         // Static HTML export for GitHub Pages
  basePath: "/ITS_Next.js", // Must match GitHub repo name
  images: {
    unoptimized: true,      // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'itsgroup-co.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname), // Fix: tell Turbopack the root is THIS directory
  },
};

export default nextConfig;
