import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "juixhd2gcyyv123g.public.blob.vercel-storage.com",
      },
    ],
  },
  turbopack: {
    root: "./",
  },
  allowedDevOrigins: ["192.168.1.4"],
};

export default nextConfig;
