import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['ui-avatars.com', 'placehold.co'],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
