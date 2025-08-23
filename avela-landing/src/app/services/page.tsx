import { Smartphone, Globe, Shield, Zap, CreditCard, Users, CheckCircle, ArrowRight, TrendingUp, Clock, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Types for better maintainability
interface ServiceFeature {
  icon: any
  title: string
  description: string
  color: string
}

interface PlatformFeature {
  icon: any
  title: string
  description: string
  benefits: string[]
  color: string
}

interface Stat {
  icon: any
  value: string
  label: string
  color: string
}

// Data separated for maintainability
const serviceFeatures: ServiceFeature[] = [
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "We build technology solutions that address real-world challenges and improve people's lives.",
    color: "blue"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our solutions reach across the world, making a difference in communities everywhere.",
    color: "green"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Every solution is designed with the end-user in mind for maximum impact and adoption.",
    color: "purple"
  }
]

const platformFeatures: PlatformFeature[] = [
  {
    icon: CreditCard,
    title: "Interest-Free Access",
    description: "Employees withdraw earned wages with a flat processing fee—no loans, no interest.",
    benefits: ["No hidden charges", "Transparent fees", "No debt accumulation"],
    color: "green"
  },
  {
    icon: Smartphone,
    title: "Multi-Channel Access",
    description: "Available via mobile app, web platform, and USSD (*233*33#) for inclusivity.",
    benefits: ["Mobile app", "Web platform", "USSD access"],
    color: "blue"
  },
  {
    icon: Shield,
    title: "Payroll Integration",
    description: "Seamless integration with employer Payroll/HR systems with no disruption.",
    benefits: ["Zero disruption", "Automatic sync", "Real-time data"],
    color: "purple"
  },
  {
    icon: Zap,
    title: "Instant Disbursement",
    description: "Funds sent directly to MPesa or bank account, 24/7 availability.",
    benefits: ["24/7 access", "Instant transfer", "Multiple channels"],
    color: "orange"
  },
  {
    icon: Users,
    title: "Employer-Friendly",
    description: "No financial strain—Avela handles liquidity/payouts, administration and reconciliation.",
    benefits: ["No financial burden", "Full administration", "Automatic reconciliation"],
    color: "pink"
  }
]

const stats: Stat[] = [
  { icon: Users, value: "50K+", label: "Employees Served", color: "blue" },
  { icon: Clock, value: "24/7", label: "Availability", color: "green" },
  { icon: Star, value: "4.9", label: "User Rating", color: "yellow" },
  { icon: TrendingUp, value: "100%", label: "Secure", color: "purple" }
]

// Individual Components for better maintainability
const ServiceFeatureCard = ({ feature }: { feature: ServiceFeature }) => {
  const IconComponent = feature.icon
  
  return (
    <Card className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-${feature.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative space-y-6">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#0081CC] dark:group-hover:text-blue-400 transition-colors">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </Card>
  )
}

const PlatformFeatureCard = ({ feature }: { feature: PlatformFeature }) => {
  const IconComponent = feature.icon
  
  return (
    <Card className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-${feature.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative space-y-6">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#0081CC] dark:group-hover:text-blue-400 transition-colors">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {feature.description}
          </p>
          <div className="space-y-2">
            {feature.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className={`w-4 h-4 text-${feature.color}-500`} />
                <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

const StatCard = ({ stat }: { stat: Stat }) => {
  const IconComponent = stat.icon
  
  return (
    <div className="text-center space-y-3">
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 text-white shadow-lg`}>
        <IconComponent className="w-8 h-8" />
      </div>
      <div className="space-y-1">
        <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#0081CC]/5 to-blue-500/5 dark:from-[#0081CC]/10 dark:to-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0081CC]/10 text-[#0081CC] px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Services
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Innovative Technology
              <span className="block bg-gradient-to-r from-[#0081CC] to-blue-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Avela Technologies builds innovative technology solutions that address real-world challenges 
              and improve people's lives across the world.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                  Our Flagship Product
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Avela is a digital Earned Wage Access (EWA) platform that enables employees to access 
                  a portion of their accrued salary—calculated based on days worked—before their official payday.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  This empowers workers with financial flexibility, reduces reliance on debt, 
                  and promotes overall wellbeing.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0081CC] to-blue-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Employee Benefits</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access earned wages anytime, reduce financial stress, and avoid high-interest loans.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Employer Benefits</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Improve employee satisfaction, reduce turnover, and enhance workplace productivity.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0081CC] to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">How It Works</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <span>Employee works and earns wages</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <span>Request advance through Avela app</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <span>Receive funds instantly to M-Pesa or bank</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How we deliver innovative solutions that make a real difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <ServiceFeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Avela Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive features designed for maximum impact and user satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <PlatformFeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Impact by Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The real impact of our Earned Wage Access platform
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0081CC] via-blue-600 to-blue-700 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of employers who are already empowering their employees with financial flexibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#0081CC] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#0081CC] transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 