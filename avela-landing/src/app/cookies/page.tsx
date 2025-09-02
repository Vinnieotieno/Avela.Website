import { Cookie, Settings, BarChart3, Shield, Eye, Trash2, Clock, Mail } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Types for better maintainability
interface CookieType {
  icon: any
  title: string
  description: string
  examples: string[]
  essential: boolean
  color: string
}

// Data separated for maintainability
const cookieTypes: CookieType[] = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    examples: [
      "Authentication and login session management",
      "Security tokens and fraud prevention",
      "Load balancing and server routing",
      "Basic website functionality and navigation"
    ],
    essential: true,
    color: "green"
  },
  {
    icon: BarChart3,
    title: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website to improve user experience.",
    examples: [
      "Google Analytics for website traffic analysis",
      "Page view tracking and user journey mapping",
      "Performance monitoring and error tracking",
      "A/B testing and feature usage statistics"
    ],
    essential: false,
    color: "blue"
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    description: "Enable enhanced functionality and personalization features.",
    examples: [
      "Language and region preferences",
      "Theme settings (dark/light mode)",
      "Form data and user preferences",
      "Chat widget and support features"
    ],
    essential: false,
    color: "purple"
  },
  {
    icon: Eye,
    title: "Marketing Cookies",
    description: "Used to track visitors across websites to display relevant advertisements.",
    examples: [
      "Social media integration and sharing",
      "Advertising campaign tracking",
      "Retargeting and remarketing pixels",
      "Third-party advertising networks"
    ],
    essential: false,
    color: "orange"
  }
]

const cookieManagement = [
  {
    icon: Settings,
    title: "Browser Settings",
    description: "Most browsers allow you to control cookies through their settings. You can block or delete cookies, but this may affect website functionality."
  },
  {
    icon: Trash2,
    title: "Clear Cookies",
    description: "You can delete existing cookies at any time through your browser settings. This will reset your preferences and may require you to log in again."
  },
  {
    icon: Clock,
    title: "Cookie Expiration",
    description: "Different cookies have different lifespans. Session cookies expire when you close your browser, while persistent cookies remain until their expiration date."
  }
]

export default function CookiePolicy() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#0081CC]/5 to-blue-500/5 dark:from-[#0081CC]/10 dark:to-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-center">
          {/*<div className="inline-flex items-center gap-2 bg-[#0081CC]/10 text-[#0081CC] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cookie className="w-4 h-4" />
            Website Cookies
          </div>*/}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            <span className="block">Cookie</span>
            <span className="block bg-gradient-to-r from-[#0081CC] to-blue-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience 
            on our website and provide you with personalized services.
          </p>
          

        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Card className="p-8 rounded-3xl shadow-lg border border-[#0081CC]/20 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/10 dark:to-gray-800">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 p-4 bg-gradient-to-br from-[#0081CC] to-blue-600 text-white rounded-2xl">
                <Cookie className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences, 
                  keeping you logged in, and analyzing how you use our site.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We use both first-party cookies (set by Avela) and third-party cookies (set by our partners) 
                  to deliver our services and improve your experience.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We use different types of cookies for various purposes to enhance your experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => {
              const IconComponent = cookie.icon
              return (
                <Card key={index} className={`p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  cookie.essential
                    ? 'border-[#0081CC]/20 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/10 dark:to-gray-700'
                    : 'border-gray-100 dark:border-gray-600 bg-white dark:bg-gray-700'
                }`}>
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 p-3 rounded-2xl ${
                      cookie.essential
                        ? 'bg-gradient-to-br from-[#0081CC] to-[#0081CC] text-white'
                        : 'bg-[#0081CC]/10 text-[#0081CC]'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {cookie.title}
                        </h3>
                        {cookie.essential && (
                          <span className="px-3 py-1 bg-[#0081CC]/10 text-[#0081CC] text-xs font-semibold rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {cookie.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Examples:</h4>
                        <ul className="space-y-2">
                          {cookie.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#0081CC] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {example}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              You have control over how cookies are used on our website
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cookieManagement.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center">
                  <div className="inline-flex p-3 bg-[#0081CC] text-white rounded-xl mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              )
            })}
          </div>

          <Card className="p-8 bg-gradient-to-r from-[#0081CC] to-blue-600 text-white rounded-3xl shadow-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Cookie Preferences</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              You can manage your cookie preferences at any time. Note that disabling certain cookies 
              may affect the functionality of our website.
            </p>
            <Button className="bg-white text-[#0081CC] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300">
              Manage Cookie Settings
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our privacy team if you have questions about our cookie practices.
          </p>
          
          <Card className="inline-block p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#0081CC] text-white rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Privacy Team</div>
                <div className="text-gray-600 dark:text-gray-300">business@avela.co.ke</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
