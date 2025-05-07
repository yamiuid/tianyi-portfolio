/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // 禁用图片优化，因为 GitHub Pages 不支持
  },
  basePath: process.env.NODE_ENV === 'production' ? '/20250507tianyi-portfolio' : '',  // 添加仓库名作为基础路径
  assetPrefix: process.env.NODE_ENV === 'production' ? '/20250507tianyi-portfolio/' : '',  // 添加资源前缀
}

module.exports = nextConfig 