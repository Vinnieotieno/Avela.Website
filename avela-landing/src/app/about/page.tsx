import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"
import { Sparkles, Target, Eye, Users, Heart, Handshake, Shield, Globe } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = generatePageMetadata({
  title: "About Avela - Transforming Financial Access for Kenyan Workers",
  description: "Learn about Avela's mission to provide instant salary access to 1.9M Kenyan workers earning under KES 50,000. Breaking the cycle of predatory lending with 0% interest EWA solutions.",
  keywords: [
    "about Avela",
    "Avela company",
    "earned wage access Kenya",
    "financial inclusion Kenya",
    "Kenyan workers financial access",
    "predatory lending alternative",
    "EWA platform Kenya",
    "financial wellness Kenya",
    "employee financial benefits",
    "salary advance company Kenya",
    "fintech Kenya",
    "mobile money solutions",
    "workplace financial wellness",
    "Kenyan startup",
    "financial technology Kenya"
  ],
  path: "/about",
  type: "website"
})

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
    <Card
      className="group relative bg-white dark:bg-gray-800  mt-12 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
      role="article"
      aria-labelledby={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}-500/5 to-${value.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative space-y-4 sm:space-y-6">
        <div
          className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
          aria-hidden="true"
        >
          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="space-y-3">
          <h3
            id={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#0081CC] dark:group-hover:text-blue-400 transition-colors"
          >
            {value.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>
    </Card>
  )
}

const MilestoneCard = ({ milestone }: { milestone: Milestone }) => (
  <Card
    className="bg-gradient-to-br from-[#0081CC]/10 to-blue-600/10 dark:from-[#0081CC]/20 dark:to-blue-600/20 rounded-3xl p-6 sm:p-8 border border-[#0081CC]/20 dark:border-[#0081CC]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    role="article"
    aria-labelledby={`milestone-${milestone.year}`}
  >
    <div className="space-y-4">
      <div
        className="inline-flex px-3 sm:px-4 py-2 bg-[#0081CC] text-white rounded-full text-xs sm:text-sm font-semibold"
        aria-label={`Year ${milestone.year}`}
      >
        {milestone.year}
      </div>
      <h3
        id={`milestone-${milestone.year}`}
        className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white"
      >
        {milestone.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
        {milestone.description}
      </p>
    </div>
  </Card>
)

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden"
        aria-labelledby="about-hero-heading"
        role="banner"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Advance.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#0081CC]/30" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#0081CC]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0081CC]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            {/*<div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <div className="w-2 h-2 bg-[#0081CC] rounded-full mr-3 animate-pulse"></div>
              <span className="text-white text-sm font-semibold tracking-wide">ABOUT AVELA</span>
            </div>*/}

            <h1
              id="about-hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              <span className="block">Transforming Financial Access</span>
              <span className="block bg-gradient-to-r from-[#0081CC] to-blue-400 bg-clip-text text-transparent">
                for Kenyan Workers
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 px-4 sm:px-0 max-w-4xl mx-auto"
              aria-describedby="company-founding-info"
            >
              Avela addresses the financial challenges facing <span className="text-[#0081CC] font-semibold">74%</span> of Kenyan salaried workers who earn under
              KES 50,000 monthly. We provide instant access to earned wages without loans, interest, or debt -
              breaking the cycle of predatory lending.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">74%</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Workers Under KES 50K</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0081CC] mb-2">1.9M</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Target Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">0%</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Interest Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0081CC] mb-2">24/7</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Access</div>
              </div>
            </div>

            <div id="company-founding-info" className="sr-only">
              Avela Technologies was established in 2025 as a technology company focused on innovation and excellence in digital solutions.
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section
        className="py-20 bg-white dark:bg-gray-900"
        aria-labelledby="company-overview-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2
                  id="company-overview-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100"
                >
                  Company Overview
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Company Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4 sm:px-0">
              The principles that guide our innovation and shape our culture
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed px-4 sm:px-0">
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