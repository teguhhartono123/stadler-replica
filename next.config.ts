import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 🟢 SILVER BULLET BYPASS: Matikan sensor limitasi domain biar gambar apa pun langsung lolos mengudara live!
    unoptimized: true,
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
