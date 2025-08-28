"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Sun, Moon, ArrowRight, Clock, Wallet } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { useTheme } from "./ThemeProvider"
import { useAccessibility, handleKeyboardNavigation, KEYBOARD_KEYS } from "@/hooks/useAccessibility"

export default function EnhancedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showTopBanner, setShowTopBanner] = useState(true)
  const { theme, toggleTheme } = useTheme()
  const { announceToScreenReader, trapFocus } = useAccessibility()
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 10)
      // Hide top banner when scrolling down
      setShowTopBanner(scrollY < 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle mobile menu accessibility
  useEffect(() => {
    if (isMenuOpen) {
      // Trap focus in mobile menu
      const cleanup = trapFocus('.mobile-menu')
      // Announce menu opening to screen readers
      announceToScreenReader('Navigation menu opened')

      // Handle escape key to close menu
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false)
          announceToScreenReader('Navigation menu closed')
        }
      }

      document.addEventListener('keydown', handleEscape)

      return () => {
        cleanup?.()
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isMenuOpen, trapFocus, announceToScreenReader])

  // Handle theme toggle accessibility
  const handleThemeToggle = () => {
    toggleTheme()
    const newTheme = theme === 'light' ? 'dark' : 'light'
    announceToScreenReader(`Switched to ${newTheme} mode`)
  }

  // Get time-based greeting
  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return "Good morning"
    if (hour < 17) return "Good afternoon" 
    if (hour < 21) return "Good evening"
    return "Good night"
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <>
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Avela",
              "url": "https://avela.com",
              "logo": "https://avela.com/avelalogo.png",
              "description": "Access your salary today with Avela - Quick cash solutions for employees"
            })
          }}
        />
      </div>

      {/* Dynamic Top Banner */}
      <div className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        showTopBanner ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-r from-[#0081CC] via-blue-600 to-[#0081CC]'}`}>
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center py-3 px-4">
            <div className="flex items-center space-x-3 text-white animate-pulse">
              <Clock className="w-4 h-4" />
              <div className="text-sm font-medium">
                <span className="animate-bounce inline-block">{getGreeting()}!</span>
                <span className="mx-2">Welcome to Avela</span>
                <span className="inline-flex items-center space-x-1">
                  <Wallet className="w-4 h-4" />
                  <span>Running out of cash? Access your salary today!</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" 
               style={{
                 animation: 'shimmer 3s ease-in-out infinite',
                 transform: 'translateX(-100%)'
               }} />
        </div>

        {/* Close button for banner */}
        <button
          onClick={() => setShowTopBanner(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Enhanced Main Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          showTopBanner ? 'top-12' : 'top-0'
        } ${
          isScrolled
            ? `${theme === 'dark' ? 'bg-gray-800/95' : 'bg-gray-100/95'} backdrop-blur-xl border-b ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-300/50'} shadow-2xl shadow-blue-500/10`
            : `${theme === 'dark' ? 'bg-gray-900/90' : 'bg-gray-50/90'} backdrop-blur-md border-b ${theme === 'dark' ? 'border-gray-800/30' : 'border-gray-200/30'}`
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer" role="img" aria-label="Avela Logo">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 group-hover:scale-110 transition-transform duration-200">
                <img
                  src="/avelalogo.png"
                  alt="Avela Logo"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0081CC] via-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-[#0081CC] transition-all duration-200">
                  Avela
                </span>
                <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-medium -mt-1`}>
                  Salary Access
                </span>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2" role="navigation" aria-label="Main navigation">
              {navItems.map((item, index) => {
                // Handle trailing slashes in pathname matching
                const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
                const isActive = (item.href === '/' && normalizedPathname === '/') ||
                                (item.href !== '/' && normalizedPathname === item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-underline ${isActive ? 'active' : ''} relative group px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-xl hover:scale-105 ${
                      isActive
                        ? theme === 'dark'
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-[#0081CC] bg-[#0081CC]/10'
                        : theme === 'dark'
                          ? 'text-gray-300 hover:text-blue-400'
                          : 'text-gray-700 hover:text-[#0081CC]'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    <span className="relative z-10 flex items-center">
                      <span>{item.name}</span>
                    </span>

                    {/* Hover background */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#0081CC]/5 via-blue-500/10 to-[#0081CC]/5 rounded-xl transition-transform duration-200 ${
                      isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'
                    }`} />
                  </Link>
                )
              })}
            </nav>

            {/* Enhanced Right Section */}
            <div className="flex items-center space-x-3">
              {/* Enhanced Theme Toggle */}
              <button
                onClick={handleThemeToggle}
                className={`p-3 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                }`}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                aria-pressed={theme === 'dark'}
              >
                <div className="relative z-10">
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-500 group-hover:scale-110 group-hover:rotate-180 transition-all duration-200" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-200" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 scale-0 group-hover:scale-100 transition-transform duration-200" />
              </button>

              {/* Enhanced CTA Button */}
              <Link
                href="https://avela-admin.azurewebsites.net/login?redirect=/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-blue-700 hover:to-[#0081CC] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              {/* Enhanced Mobile Menu Button */}
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen)
                  if (!isMenuOpen) {
                    announceToScreenReader('Navigation menu opened')
                  } else {
                    announceToScreenReader('Navigation menu closed')
                  }
                }}
                className={`lg:hidden p-3 rounded-xl transition-all duration-200 group relative ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                } ${isMenuOpen ? 'scale-95' : ''}`}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                <div className="relative z-10">
                  {isMenuOpen ? (
                    <X className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} group-hover:rotate-90 transition-transform duration-200`} />
                  ) : (
                    <Menu className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} group-hover:scale-110 transition-transform duration-200`} />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div
            id="mobile-navigation"
            className={`mobile-menu lg:hidden transition-all duration-500 ease-out overflow-hidden ${
              isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
            aria-hidden={!isMenuOpen}
            ref={mobileMenuRef}
          >
            <nav
              className={`py-6 space-y-3 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, index) => {
                // Handle trailing slashes in pathname matching
                const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
                const isActive = (item.href === '/' && normalizedPathname === '/') ||
                                (item.href !== '/' && normalizedPathname === item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`mobile-nav-accent ${isActive ? 'active' : ''} relative flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? theme === 'dark'
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-[#0081CC] bg-[#0081CC]/10'
                        : theme === 'dark'
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                          : 'text-gray-700 hover:text-[#0081CC] hover:bg-gray-50'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.2s ease ${index * 100}ms`
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    <span className="font-medium">{item.name}</span>
                    <ArrowRight className={`w-4 h-4 transition-all duration-200 ${
                      isActive ? 'opacity-100 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                    }`} />


                  </Link>
                )
              })}
              
              <div className="px-6 pt-4">
                <Link
                  href="https://avela-admin.azurewebsites.net/login?redirect=/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-blue-700 hover:to-[#0081CC] text-white px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile menu backdrop */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}