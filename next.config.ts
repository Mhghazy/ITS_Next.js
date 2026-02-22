import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Static HTML export for GitHub Pages
  basePath: "/ITS_Next.js", // Must match GitHub repo name
  images: {
    unoptimized: true,     // Required for static export (no server-side image optimization)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'itsgroup-co.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
