import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error - Next.js types might not be perfectly aligned with the CLI warning yet
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
