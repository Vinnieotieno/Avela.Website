"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, ArrowRight, Clock, Wallet } from "lucide-react"

import { useTheme } from "./ThemeProvider"

export default function EnhancedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showTopBanner, setShowTopBanner] = useState(true)
  const { theme, toggleTheme } = useTheme()

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
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
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
            <div className="flex items-center space-x-3 group cursor-pointer" role="img" aria-label="Avela Logo">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/avelalogo.png"
                  alt="Avela Logo"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0081CC] via-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-[#0081CC] transition-all duration-300">
                  Avela
                </span>
                <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-medium -mt-1`}>
                  Salary Access
                </span>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2" role="navigation" aria-label="Main navigation">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative group px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl hover:scale-105 ${
                    theme === 'dark' 
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
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0081CC]/5 via-blue-500/10 to-[#0081CC]/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                  
                  {/* Active indicator */}
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0081CC] to-blue-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0081CC]/20 to-blue-500/20 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 -z-10" />
                </a>
              ))}
            </nav>

            {/* Enhanced Right Section */}
            <div className="flex items-center space-x-3">
              {/* Enhanced Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                }`}
                aria-label="Toggle theme"
              >
                <div className="relative z-10">
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-500 group-hover:scale-110 group-hover:rotate-180 transition-all duration-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </button>

              {/* Enhanced CTA Button */}
              <button className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-blue-700 hover:to-[#0081CC] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 group relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>

              {/* Enhanced Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 group relative ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                } ${isMenuOpen ? 'scale-95' : ''}`}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <div className="relative z-10">
                  {isMenuOpen ? (
                    <X className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} group-hover:rotate-90 transition-transform duration-300`} />
                  ) : (
                    <Menu className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} group-hover:scale-110 transition-transform duration-300`} />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
              isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className={`py-6 space-y-3 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 group ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50' 
                      : 'text-gray-700 hover:text-[#0081CC] hover:bg-gray-50'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.3s ease ${index * 100}ms`
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  <span className="font-medium">{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
              
              <div className="px-6 pt-4">
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-blue-700 hover:to-[#0081CC] text-white px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] group">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
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