/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [500, 640, 750, 828, 1080, 1200, 1928],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
