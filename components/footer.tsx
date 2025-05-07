export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">天一寨主</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">创意无限 · 设计非凡</p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-3">导航</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    主页
                  </a>
                </li>
                <li>
                  <a
                    href="/works"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    作品
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    关于
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    联系
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">联系方式</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">tianyi@example.com</li>
                <li className="text-gray-600 dark:text-gray-300">+86 123 4567 8910</li>
                <li className="text-gray-600 dark:text-gray-300">北京市朝阳区创意园区</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">&copy; {currentYear} 天一寨主. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
