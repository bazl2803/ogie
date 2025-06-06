import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sv.epaenlinea.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  }
};

export default nextConfig;
