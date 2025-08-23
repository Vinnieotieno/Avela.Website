import { Sparkles, Target, Eye, Users, Heart, Handshake, Zap, Shield, Globe, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Types for better maintainability
interface CompanyValue {
  icon: any
  title: string
  description: string
  color: string
}

interface Milestone {
  year: string
  title: string
  description: string
}

// Data separated for maintainability
const companyValues: CompanyValue[] = [
  {
    icon: Sparkles,
    title: "Innovation with Purpose",
    description: "We create technology solutions that solve real African problems and drive meaningful change.",
    color: "blue"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in everything we do.",
    color: "green"
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "We empower individuals and businesses through accessible technology solutions.",
    color: "purple"
  },
  {
    icon: Heart,
    title: "Foster Inclusion",
    description: "We ensure our solutions are accessible to all, promoting digital inclusion across Africa.",
    color: "pink"
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We believe in collaborative growth and building strong partnerships for success.",
    color: "orange"
  }
]

const milestones: Milestone[] = [
  {
    year: "2025",
    title: "Company Founded",
    description: "Avela Technologies was established with a vision to transform financial access in Africa."
  },
  {
    year: "2025",
    title: "Avela Platform Launch",
    description: "Our flagship Earned Wage Access platform was launched to empower Kenyan workers."
  },
  {
    year: "2025",
    title: "50,000+ Users",
    description: "Reached a significant milestone of serving over 50,000 employees across Kenya."
  }
]

// Individual Components for better maintainability
const ValueCard = ({ value }: { value: CompanyValue }) => {
  const IconComponent = value.icon
  
  return (
    <Card className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}-500/5 to-${value.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative space-y-6">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#0081CC] dark:group-hover:text-blue-400 transition-colors">
            {value.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>
    </Card>
  )
}

const MilestoneCard = ({ milestone }: { milestone: Milestone }) => (
  <Card className="bg-gradient-to-br from-[#0081CC]/10 to-blue-600/10 dark:from-[#0081CC]/20 dark:to-blue-600/20 rounded-3xl p-8 border border-[#0081CC]/20 dark:border-[#0081CC]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
    <div className="space-y-4">
      <div className="inline-flex px-4 py-2 bg-[#0081CC] text-white rounded-full text-sm font-semibold">
        {milestone.year}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {milestone.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {milestone.description}
      </p>
    </div>
  </Card>
)

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#0081CC]/5 to-blue-500/5 dark:from-[#0081CC]/10 dark:to-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/*<div className="inline-flex items-center gap-2 bg-[#0081CC]/10 text-[#0081CC] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              About Avela Technologies
            </div>*/}
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Empowering Innovation,
              <span className="block bg-gradient-to-r from-[#0081CC] to-blue-600 bg-clip-text text-transparent">
                Shaping the Future
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Founded in 2025, Avela Technologies is a leading innovator in the technology sector, 
              delivering quality services in tech solutions with a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                  Company Overview
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  With a commitment to excellence and a passion for advancing digital solutions, 
                  we deliver quality services in tech solutions. Our team of dedicated professionals 
                  is driven by the pursuit of quality and customer satisfaction.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0081CC] to-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To be the leading provider of smart and impactful technology solutions in Africa, 
                    fostering digital transformation and inclusion.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To empower businesses through innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0081CC] to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">African Focus</h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    We build products that solve African-related problems, 
                    fostering digital transformation and inclusion across the continent.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">50K+</div>
                      <div className="text-sm opacity-90">Users Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Secure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Company Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide our innovation and shape our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our mission to transform financial access in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={index} milestone={milestone} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0081CC] via-blue-600 to-blue-700 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Be part of the digital transformation that's empowering Africa through innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#0081CC] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Get Started Today
            </Button>
            <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#0081CC] transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}