"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/avelalogo.png"
                alt="Avela Logo"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0081CC] to-blue-600 bg-clip-text text-transparent">
              Avela
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "Who We Are", href: "/about" },
              { name: "Our Services", href: "/services" },
              { name: "Team", href: "/team" },
              { name: "FAQ", href: "/faq" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-[#0081CC] dark:hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0081CC]/10 to-blue-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0081CC] to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right side - Theme toggle and CTA */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 group"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>

            {/* CTA Button */}
            <button className="hidden sm:block bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-[#006bb3] hover:to-blue-700 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Get Started
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {[
              { name: "Home", href: "/" },
              { name: "Who We Are", href: "/about" },
              { name: "Our Services", href: "/services" },
              { name: "Team", href: "/team" },
              { name: "FAQ", href: "/faq" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-[#0081CC] dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button className="w-full bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-[#006bb3] hover:to-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
