/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // 禁用图片优化，因为 GitHub Pages 不支持
  },
  basePath: process.env.NODE_ENV === 'production' ? '/tianyi-portfolio' : '',  // 修改为正确的仓库名
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tianyi-portfolio/' : '',  // 修改为正确的仓库名
}

module.exports = nextConfig 