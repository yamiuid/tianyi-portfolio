"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "主页" },
  { href: "/works", label: "作品" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}>
            天一寨主
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors ${
                  scrolled 
                    ? `hover:text-gray-900 dark:hover:text-white ${
                        pathname === link.href ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300"
                      }`
                    : `hover:text-white ${
                        pathname === link.href ? "text-white" : "text-white/80"
                      }`
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                    scrolled ? "bg-gray-900 dark:bg-white" : "bg-white"
                  }`} />
                )}
              </Link>
            ))}
          </nav>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div
        className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-20">
          <nav className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-medium ${
                  pathname === link.href ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
