import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/hodadoc",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/utils/localImageLoader.ts",
    // domains:["picsum.photos"],
  }
};

export default nextConfig;