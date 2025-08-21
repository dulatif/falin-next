import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["logospng.org", "cdn.iconscout.com", "falin.netlify.app"],
  },
};

export default nextConfig;
