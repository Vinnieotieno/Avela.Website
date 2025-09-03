"use client"

import { ArrowRight, Play, Zap, Shield, Clock, TrendingUp, Sparkles, Smartphone, CheckCircle, Star, Sun, Moon } from 'lucide-react'
import { useEffect, useState } from "react"

// Enhanced TypeScript interfaces for better maintainability
interface TrustIndicator {
  icon: any
  text: string
  color: string
  description: string
}

interface AppFeature {
  icon: any
  text: string
  color: string
}

interface BackgroundImage {
  id: number
  url: string
  alt: string
  overlay: string
}

interface TimeGreeting {
  period: 'morning' | 'afternoon' | 'evening' | 'night'
  greeting: string
  icon: any
}

// Data separated for maintainability
const trustIndicators: TrustIndicator[] = [
  { 
    icon: Zap, 
    text: "Instant Approval", 
    color: "green",
    description: "Get approved in under 2 minutes"
  },
  { 
    icon: Shield, 
    text: "Bank-Level Security", 
    color: "blue",
    description: "256-bit encryption protection"
  },
  { 
    icon: Clock, 
    text: "No Credit Impact", 
    color: "purple",
    description: "Your CRB status stays clean"
  }
]

const appFeatures: AppFeature[] = [
  { icon: CheckCircle, text: "Real-time earnings tracking", color: "green" },
  { icon: CheckCircle, text: "Instant M-Pesa transfers", color: "blue" },
  { icon: CheckCircle, text: "24/7 customer support", color: "purple" },
  { icon: CheckCircle, text: "Transparent fee structure", color: "orange" }
]

// Time-based greetings
const timeGreetings: TimeGreeting[] = [
  { period: 'morning', greeting: 'Good Morning', icon: Sparkles },
  { period: 'afternoon', greeting: 'Good Afternoon', icon: Sun },
  { period: 'evening', greeting: 'Good Evening', icon: Moon },
  { period: 'night', greeting: 'Good Night', icon: Star }
]

// Utility function to get time-based greeting
const getTimeGreeting = (): TimeGreeting => {
  const hour = new Date().getHours()
  
  if (hour >= 5 && hour < 12) {
    return timeGreetings[0] // morning
  } else if (hour >= 12 && hour < 17) {
    return timeGreetings[1] // afternoon
  } else if (hour >= 17 && hour < 22) {
    return timeGreetings[2] // evening
  } else {
    return timeGreetings[3] // night
  }
}

// Typing effect component
const TypewriterText = ({ text, delay = 100, className = "" }: { text: string; delay?: number; className?: string }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const PhoneMockup = ({ greeting }: { greeting: TimeGreeting }) => {
  const GreetingIcon = greeting.icon

  return (
    <div
      className="relative w-full mt-8 sm:mt-12 lg:mt-18 max-w-xs sm:max-w-sm mx-auto lg:max-w-none"
      role="img"
      aria-label="Mobile app interface showing salary advance features and balance of Ksh 11,247.50 available to withdraw"
    >
      {/* Main Phone */}
      <div className="relative mx-auto w-64 sm:w-72 md:w-80 lg:w-72 xl:w-80 h-[520px] sm:h-[580px] md:h-[640px] lg:h-[580px] xl:h-[640px] bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] sm:rounded-[3rem] p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
        <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="bg-gray-900 h-8 flex items-center justify-center relative">
            <div className="w-20 h-1 bg-gray-800 rounded-full" />
            <div className="absolute right-4 flex space-x-1">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          {/* App Content */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Header with time-based greeting */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <GreetingIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0081CC]" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {greeting.greeting}, Chebet!
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                Here's your earnings summary
              </p>
            </div>

            {/* Balance Card */}
            <div className="bg-gradient-to-br from-[#0081CC] via-blue-600 to-[#0081CC] rounded-3xl p-4 sm:p-6 text-white relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#0081CC]/25 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-3 sm:space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue-100 text-xs sm:text-sm">Available to withdraw</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Ksh 11,247.50</h2>
                  </div>
                  <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-blue-100">Earned this week</span>
                    <span>Ksh 2,495.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 sm:space-y-3">
              <button className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-3 sm:py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Request Advance
              </button>
              <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 py-3 sm:py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                View History
              </button>
            </div>

            {/* Recent Activity */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Recent Activity</h4>
              <div className="space-y-1 sm:space-y-2">
                {['Ksh 30,000 advance - Approved', 'Ksh21,150 advance - Repaid'].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg px-2 transition-colors duration-200">
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Responsive positioning */}
      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-4 md:py-2 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="text-xs font-semibold flex items-center space-x-1">
          <Zap className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
          <span className="text-xs sm:text-xs">Instant</span>
        </div>
      </div>

      <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 px-1.5 py-1.5 sm:px-2 sm:py-2 md:px-4 md:py-3 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <div className="text-xs text-gray-500 dark:text-gray-400">Next payday</div>
        <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-1 text-xs">
          <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-[#0081CC]" />
          <span>Sept 05, 2025</span>
        </div>
      </div>
    </div>
  )
}

// Main Component
export default function Hero() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [currentBackground, setCurrentBackground] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [showTyping, setShowTyping] = useState<boolean>(false)

  // Get current greeting based on time
  const currentGreeting = getTimeGreeting()

  useEffect(() => {
    setIsVisible(true)
    
    // Delay typing effect start
    const typingTimer = setTimeout(() => {
      setShowTyping(true)
    }, 1000)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(timeInterval)
      clearTimeout(typingTimer)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen w-full flex items-center overflow-hidden transition-colors duration-300 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      aria-label="Hero section - Access advance salary instantly"
      role="banner"
    >
      {/* Dynamic gradient orbs that follow mouse */}
      <div 
        className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-[#0081CC]/20 to-blue-500/20 dark:from-[#0081CC]/30 dark:to-blue-500/30 rounded-full blur-3xl -z-10 transition-all duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          top: '10%',
          right: '10%'
        }}
      />
      <div 
        className="absolute w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-tr from-blue-500/15 to-[#0081CC]/15 dark:from-blue-500/25 dark:to-[#0081CC]/25 rounded-full blur-3xl -z-10 transition-all duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          bottom: '20%',
          left: '15%'
        }}
      />
      
      {/* Floating geometric shapes - Responsive sizing */}
      <div className="absolute top-16 left-16 sm:top-20 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-[#0081CC]/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-32 right-24 sm:top-40 sm:right-32 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-24 left-24 sm:bottom-32 sm:left-32 w-2 h-2 bg-[#0081CC]/50 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-none">
          {/* Left Content with Glass Effect */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} order-1 lg:order-1`}>
            {/* Glass container for better text visibility */}
            <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/50 dark:border-gray-700/50 shadow-2xl">
              {/* Enhanced main heading with typing effect */}
              <div className="space-y-4 sm:space-y-6">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
                  aria-label="Access advance salary instantly - Get your earned wages before payday"
                >
                  {showTyping ? (
                    <>
                      <div className="block text-gray-900 dark:text-white mb-2 sm:mb-4">
                        <TypewriterText text="Access" delay={150} className="text-gray-900 dark:text-white" />
                      </div>
                      <div className="block mb-2 sm:mb-4">
                        <TypewriterText 
                          text="Advance Salary" 
                          delay={100} 
                          className="bg-gradient-to-r from-[#0081CC] via-blue-600 to-[#0081CC] bg-clip-text text-transparent" 
                        />
                      </div>
                      <div className="block text-gray-900 dark:text-white">
                        <TypewriterText text="Instantly" delay={120} className="text-gray-900 dark:text-white" />
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="block text-gray-900 dark:text-white mb-2 sm:mb-4">Access</span>
                      <span className="block bg-gradient-to-r from-[#0081CC] via-blue-600 to-[#0081CC] bg-clip-text text-transparent mb-2 sm:mb-4">Advance Salary</span>
                      <span className="block text-gray-900 dark:text-white">Instantly</span>
                    </>
                  )}
                </h1>
                
                <p
                  className="text-lg sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium"
                  aria-describedby="hero-benefits"
                >
                  Kenya's digital Earned Wage Access platform. Access your accrued salary instantly
                  without loans, interest, or debt. Designed for Kenyan workers' financial flexibility.
                </p>

                {/* Screen reader benefits list */}
                <div id="hero-benefits" className="sr-only">
                  <ul>
                    <li>Get up to 75% of earned wages instantly</li>
                    <li>No credit checks required</li>
                    <li>Transparent fee structure</li>
                    <li>Available 24/7</li>
                  </ul>
                </div>
              </div>

              {/* Enhanced CTA buttons with advanced animations */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8" role="group" aria-label="Call to action buttons">
                <button
                  className="group relative bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-[#006bb3] hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#0081CC]/25 transform hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden"
                  aria-label="Get your salary advance - Start application process"
                  aria-describedby="cta-primary-help"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">Get Your Advance</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" aria-hidden="true" />
                </button>
                <div id="cta-primary-help" className="sr-only">
                  Click to start your salary advance application. Quick approval in under 2 minutes.
                </div>

                <button
                  className="group relative bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold border border-white/50 dark:border-gray-700/50 hover:border-[#0081CC]/30 dark:hover:border-blue-400/30 transition-all duration-300 hover:shadow-xl backdrop-blur-sm flex items-center justify-center space-x-2 overflow-hidden"
                  aria-label="Watch demo video - See how Avela works"
                  aria-describedby="cta-demo-help"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0081CC]/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current relative z-10" aria-hidden="true" />
                  <span className="relative z-10">Watch Demo</span>
                </button>
                <div id="cta-demo-help" className="sr-only">
                  Watch a 2-minute video demonstration of how to use Avela to get your salary advance.
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced right content - Now visible on all screens, comes second on mobile */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} order-2 lg:order-2`} style={{ animationDelay: '600ms' }}>
            <PhoneMockup greeting={currentGreeting} />
          </div>
        </div>
      </div>
    </section>
  )
}