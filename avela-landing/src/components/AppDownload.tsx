
"use client"

import { Smartphone, Download, Star, Shield, Sparkles, ArrowRight, CheckCircle, Play, Users, Zap, Sun, Moon } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// Types for better maintainability
interface AppFeature {
  icon: any
  text: string
  color: string
}

interface AppStat {
  icon: any
  value: string
  label: string
  color: string
}

interface TimeGreeting {
  period: 'morning' | 'afternoon' | 'evening' | 'night'
  greeting: string
  icon: any
}

// Data separated for maintainability
const appFeatures: AppFeature[] = [
  { icon: Zap, text: "Get advance salary in minutes", color: "green" },
  { icon: CheckCircle, text: "Direct bank & M-Pesa transfers", color: "blue" },
  { icon: Shield, text: "Secure & transparent fees", color: "purple" },
  { icon: Users, text: "24/7 customer support", color: "orange" }
]

const appStats: AppStat[] = [
  { icon: Star, value: "4.9", label: "App Store Rating", color: "yellow" },
  { icon: Download, value: "50K+", label: "Downloads", color: "blue" },
  { icon: Shield, value: "100%", label: "Secure", color: "green" }
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

// Individual Components for better maintainability
const AppFeatureItem = ({ feature }: { feature: AppFeature }) => {
  const IconComponent = feature.icon
  
  return (
    <div className="flex items-center space-x-3 group">
      <div className={`w-8 h-8 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-4 h-4 text-white" />
      </div>
      <span className="text-blue-100 dark:text-blue-200 group-hover:text-white transition-colors duration-300 font-medium">{feature.text}</span>
    </div>
  )
}

const AppStatCard = ({ stat }: { stat: AppStat }) => {
  const IconComponent = stat.icon
  
  return (
    <div className="flex items-center space-x-3 text-blue-100 dark:text-blue-200 group hover:text-white transition-colors duration-300">
      <div className={`w-8 h-8 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-4 h-4 text-white" />
      </div>
      <div>
        <div className="font-bold text-white">{stat.value}</div>
        <div className="text-sm opacity-90">{stat.label}</div>
      </div>
    </div>
  )
}

const AppStoreButton = ({ type, icon, title, subtitle }: { type: 'google' | 'apple'; icon: string; title: string; subtitle: string }) => (
  <Button className="group bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center space-x-3 min-w-[200px]">
    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {type === 'google' ? (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.5 12.707l2.302 2.302-10.937 6.64 8.635-8.942zm0-1.414L5.865 2.351l10.937 6.64L14.5 11.293z"/>
        </svg>
      ) : (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )}
    </div>
    <div className="text-left">
      <div className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300">{subtitle}</div>
      <div className="font-semibold group-hover:text-white transition-colors duration-300">{title}</div>
    </div>
  </Button>
)

const PhoneMockup = ({ greeting }: { greeting: TimeGreeting }) => {
  const GreetingIcon = greeting.icon
  
  return (
    <div className="relative">
      {/* Main Phone */}
      <div className="relative mx-auto w-80 h-[640px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
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
          <div className="p-6 space-y-6">
            {/* Header with time-based greeting */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <GreetingIcon className="w-5 h-5 text-[#0081CC]" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {greeting.greeting}, Vincent!
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Here's your earnings summary
              </p>
            </div>

            {/* Balance Card */}
            <div className="bg-gradient-to-br from-[#0081CC] via-blue-600 to-[#0081CC] rounded-3xl p-6 text-white relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#0081CC]/25 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue-100 text-sm">Available to withdraw</p>
                    <h2 className="text-3xl font-bold">Ksh 11,247.50</h2>
                  </div>
                  <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                    <div className="w-6 h-6 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-100">Earned this week</span>
                    <span>Ksh 2,495.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Request Advance
              </button>
              <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                View History
              </button>
            </div>

            {/* Recent Activity */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Recent Activity</h4>
              <div className="space-y-2">
                {['Ksh 30,000 advance - Approved', 'Ksh21,150 advance - Repaid'].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg px-2 transition-colors duration-200">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="text-xs font-semibold flex items-center space-x-1">
          <Zap className="w-3 h-3" />
          <span>Fast</span>
        </div>
      </div>
      
      <div className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <div className="text-xs text-gray-500 dark:text-gray-400">Trusted by</div>
        <div className="font-semibold text-gray-900 dark:text-white">50,000+ users</div>
      </div>
    </div>
  )
}

// Main Component
export default function AppDownload() {
  // Get current greeting based on time
  const currentGreeting = getTimeGreeting()

  return (
    <section className="py-24 bg-gradient-to-br from-[#0081CC] via-blue-600 to-blue-700 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent dark:from-blue-800/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Available Now</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Download Avela
                <span className="block">for Advance Salary</span>
              </h2>
              
              <p className="text-xl text-blue-100 dark:text-blue-200 leading-relaxed">
                Get instant access to your earned wages directly to your bank account or M-Pesa wallet. 
                Simple, secure, and designed for Kenyan workers.
              </p>
            </div>

            {/* App Features */}
            <div className="space-y-4">
              {appFeatures.map((feature, index) => (
                <AppFeatureItem key={index} feature={feature} />
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <AppStoreButton 
                  type="google"
                  icon="GP"
                  title="Google Play"
                  subtitle="GET IT ON"
                />
                <AppStoreButton 
                  type="apple"
                  icon="AS"
                  title="App Store"
                  subtitle="Download on the"
                />
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                {appStats.map((stat, index) => (
                  <AppStatCard key={index} stat={stat} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - App Screenshots */}
          <div className="relative">
            <PhoneMockup greeting={currentGreeting} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Card className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Access Your Earned Wages?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of employees who've taken control of their finances. 
              Download Avela today and get your advance in minutes.
            </p>
            <Button className="bg-white text-[#0081CC] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Get Started - It's Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}