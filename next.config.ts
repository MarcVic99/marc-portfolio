import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/sales-tracker",
        destination: "/projects/profitly",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
