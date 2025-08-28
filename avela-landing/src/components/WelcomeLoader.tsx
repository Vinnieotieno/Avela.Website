"use client"

import { useState, useEffect } from 'react'
import { Zap, ArrowRight, CheckCircle } from 'lucide-react'

interface WelcomeLoaderProps {
  onLoadingComplete: () => void
  minLoadTime?: number
}

export default function WelcomeLoader({ onLoadingComplete, minLoadTime = 3000 }: WelcomeLoaderProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const loadingSteps = [
    { text: "Initializing Avela...", duration: 800 },
    { text: "Loading your financial freedom...", duration: 1000 },
    { text: "Preparing instant salary access...", duration: 900 },
    { text: "Welcome to Avela!", duration: 700 }
  ]

  useEffect(() => {
    const startTime = Date.now()
    let stepTimeout: NodeJS.Timeout
    let progressInterval: NodeJS.Timeout

    const runLoadingSequence = async () => {
      // Progress animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100
          return prev + Math.random() * 3 + 1
        })
      }, 50)

      // Step progression
      for (let i = 0; i < loadingSteps.length; i++) {
        setCurrentStep(i)
        await new Promise(resolve => {
          stepTimeout = setTimeout(resolve, loadingSteps[i].duration)
        })
      }

      // Ensure minimum load time
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadTime - elapsedTime)
      
      if (remainingTime > 0) {
        await new Promise(resolve => setTimeout(resolve, remainingTime))
      }

      // Complete loading
      setProgress(100)
      
      // Fade out animation
      setTimeout(() => {
        setIsVisible(false)
        setTimeout(onLoadingComplete, 500) // Wait for fade out
      }, 500)
    }

    runLoadingSequence()

    return () => {
      clearTimeout(stepTimeout)
      clearInterval(progressInterval)
    }
  }, [minLoadTime, onLoadingComplete])

  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0081CC 0%, #1e40af 50%, #0081CC 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 4s ease infinite'
      }}
      role="dialog"
      aria-label="Loading Avela application"
      aria-live="polite"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/15 rounded-full blur-lg animate-pulse" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/20 rounded-full blur-md animate-pulse" 
             style={{ animationDelay: '2s', animationDuration: '2.5s' }} />
        
        {/* Geometric shapes */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-white/30 rotate-45 animate-spin" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-white/40 rounded-full animate-bounce" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-12 w-2 h-2 bg-white/50 animate-ping" 
             style={{ animationDelay: '2s' }} />
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center px-8 max-w-md mx-auto">
        {/* Logo animation - Clean design without external logo */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              {/* Clean Avela brand icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#0081CC] to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
            </div>

            {/* Rotating ring around logo */}
            <div className="absolute inset-0 border-4 border-white/30 border-t-white rounded-2xl animate-spin"
                 style={{ animationDuration: '2s' }} />
          </div>

          {/* Company name with typing effect */}
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="inline-block animate-pulse">A</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>v</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>e</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>l</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>a</span>
          </h1>
          <p className="text-white/80 text-lg font-medium">Salary Access</p>
        </div>

        {/* Loading steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <span
              className="text-white text-lg font-medium transition-all duration-300"
              key={currentStep}
            >
              {loadingSteps[currentStep]?.text}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
            </div>
          </div>
          <div className="flex justify-between text-white/70 text-sm mt-2">
            <span>Loading...</span>
            <span>{Math.round(Math.min(progress, 100))}%</span>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="space-y-3">
          <div className={`flex items-center text-white/90 transition-all duration-500 ${
            currentStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <ArrowRight className="w-4 h-4 mr-2 text-white/70" />
            <span className="text-sm">Instant salary advances</span>
          </div>
          <div className={`flex items-center text-white/90 transition-all duration-500 ${
            currentStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`} style={{ transitionDelay: '200ms' }}>
            <ArrowRight className="w-4 h-4 mr-2 text-white/70" />
            <span className="text-sm">No credit checks required</span>
          </div>
          <div className={`flex items-center text-white/90 transition-all duration-500 ${
            currentStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`} style={{ transitionDelay: '400ms' }}>
            <ArrowRight className="w-4 h-4 mr-2 text-white/70" />
            <span className="text-sm">Secure M-Pesa integration</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
              style={{ 
                animationDelay: `${dot * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
