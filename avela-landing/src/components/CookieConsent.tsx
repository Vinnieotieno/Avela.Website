"use client"

import { useState, useEffect } from 'react'
import { Cookie, X, Settings, Check, Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  functional: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always required
    analytics: false,
    functional: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('avela-cookie-consent')
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    }
    
    localStorage.setItem('avela-cookie-consent', JSON.stringify(allAccepted))
    localStorage.setItem('avela-cookie-timestamp', new Date().toISOString())
    
    // Set actual cookies based on preferences
    setCookies(allAccepted)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleDeclineAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    }
    
    localStorage.setItem('avela-cookie-consent', JSON.stringify(essentialOnly))
    localStorage.setItem('avela-cookie-timestamp', new Date().toISOString())
    
    // Set only essential cookies
    setCookies(essentialOnly)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('avela-cookie-consent', JSON.stringify(preferences))
    localStorage.setItem('avela-cookie-timestamp', new Date().toISOString())
    
    // Set cookies based on user preferences
    setCookies(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const setCookies = (prefs: CookiePreferences) => {
    // Set cookies based on user preferences
    if (prefs.analytics) {
      // Enable Google Analytics or other analytics
      console.log('Analytics cookies enabled')
    }
    
    if (prefs.functional) {
      // Enable functional cookies (theme, language, etc.)
      console.log('Functional cookies enabled')
    }
    
    if (prefs.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled')
    }
  }

  const togglePreference = (type: keyof CookiePreferences) => {
    if (type === 'essential') return // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {!showSettings ? (
            // Main Banner
            <div className="p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-[#0081CC] text-white rounded-2xl">
                  <Cookie className="w-6 h-6" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      We Value Your Privacy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      We use cookies to enhance your browsing experience, provide personalized content, 
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={handleAcceptAll}
                      className="bg-[#0081CC] hover:bg-[#006bb3] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Accept All Cookies
                    </Button>
                    
                    <Button 
                      onClick={handleDeclineAll}
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Decline All
                    </Button>
                    
                    <Button 
                      onClick={() => setShowSettings(true)}
                      variant="ghost"
                      className="text-[#0081CC] hover:bg-[#0081CC]/10 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Customize
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn more in our{' '}
                    <a href="/cookies" className="text-[#0081CC] hover:underline">
                      Cookie Policy
                    </a>
                    {' '}and{' '}
                    <a href="/privacy" className="text-[#0081CC] hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
                
                <button
                  onClick={handleDeclineAll}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Essential Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Shield className="w-4 h-4 text-[#0081CC]" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">Essential Cookies</h4>
                      <span className="px-2 py-1 bg-[#0081CC]/10 text-[#0081CC] text-xs font-semibold rounded-full">
                        Required
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Necessary for the website to function properly
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-[#0081CC] rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Help us understand how visitors interact with our website
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('analytics')}
                    className={`ml-4 w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-[#0081CC] justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
                
                {/* Functional Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Functional Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Enable enhanced functionality and personalization
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('functional')}
                    className={`ml-4 w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.functional ? 'bg-[#0081CC] justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
                
                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Used to track visitors and display relevant advertisements
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('marketing')}
                    className={`ml-4 w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing ? 'bg-[#0081CC] justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleSavePreferences}
                  className="bg-[#0081CC] hover:bg-[#006bb3] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Save Preferences
                </Button>
                
                <Button 
                  onClick={handleAcceptAll}
                  variant="outline"
                  className="border-[#0081CC] text-[#0081CC] hover:bg-[#0081CC]/10 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Accept All
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </>
  )
}
