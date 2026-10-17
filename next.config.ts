import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Renamed URLs keep their search ranking and backlinks via permanent redirects.
  async redirects() {
    return [
      { source: "/projects/swiming-tracking", destination: "/projects/swimming-tracking", permanent: true },
      { source: "/projects/ai-news-autmation.png", destination: "/projects/ai-news-automation.png", permanent: true },
    ];
  },
};

export default nextConfig;
