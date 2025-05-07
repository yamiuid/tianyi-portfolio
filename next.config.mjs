/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 启用静态导出 [^1][2]
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
};

export default nextConfig;
