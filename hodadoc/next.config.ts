import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/hodadoc",
  images: {
    // domains:["picsum.photos"],
    loader: "custom",
    loaderFile: "./src/lib/utils/localImageLoader.ts",
  }
};

export default nextConfig;