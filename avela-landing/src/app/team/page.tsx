import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"
import { Users, Star, Award, Globe, TrendingUp, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = generatePageMetadata({
  title: "Meet the Avela Team - Fintech Experts Driving Financial Innovation in Kenya",
  description: "Meet Avela's expert team of fintech professionals, software developers, and financial inclusion advocates. 50+ years combined experience building Kenya's leading EWA platform.",
  keywords: [
    "Avela team",
    "fintech experts Kenya",
    "EWA platform team",
    "financial technology experts",
    "Kenya fintech professionals",
    "software development team",
    "financial inclusion experts",
    "earned wage access experts",
    "mobile money specialists",
    "payroll integration experts",
    "financial wellness team",
    "Kenyan startup team",
    "technology innovation team",
    "financial services experts",
    "EWA platform developers"
  ],
  path: "/team",
  type: "website"
})

// Types for better maintainability
interface TeamStat {
  icon: any
  value: string
  label: string
  color: string
}

interface Department {
  icon: any
  name: string
  description: string
  color: string
}

interface TeamValue {
  icon: any
  title: string
  description: string
  color: string
}

// Data separated for maintainability
/*const teamStats: TeamStat[] = [
  { icon: Users, value: "25+", label: "Team Members", color: "blue" },
  { icon: Star, value: "15+", label: "Years Experience", color: "yellow" },
  { icon: Award, value: "50+", label: "Awards Won", color: "green" },
  { icon: Globe, value: "10+", label: "Countries Served", color: "purple" }
]*/

const departments: Department[] = [
  {
    icon: Zap,
    name: "Leadership",
    description: "Strategic vision and company direction",
    color: "blue"
  },
  {
    icon: Shield,
    name: "Technology",
    description: "Innovation and technical excellence",
    color: "green"
  },
  {
    icon: TrendingUp,
    name: "Product",
    description: "User-centric product development",
    color: "purple"
  },
  {
    icon: Users,
    name: "Engineering",
    description: "Robust and scalable solutions",
    color: "orange"
  },
  {
    icon: Star,
    name: "Customer Success",
    description: "Exceptional user experience",
    color: "pink"
  },
  {
    icon: Globe,
    name: "Business Development",
    description: "Market expansion and partnerships",
    color: "cyan"
  }
]

const teamValues: TeamValue[] = [
  {
    icon: Users,
    title: "Dedicated Professionals",
    description: "Our team consists of dedicated professionals with extensive expertise in software development, artificial intelligence, and technology consulting.",
    color: "blue"
  },
  {
    icon: Star,
    title: "Commitment to Excellence",
    description: "Each member contributes unique skills and a commitment to excellence, ensuring that Avela remains at the forefront of the industry.",
    color: "yellow"
  },
  {
    icon: Shield,
    title: "Innovation Focus",
    description: "We foster a culture of innovation where creativity and technical expertise come together to solve complex challenges.",
    color: "green"
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our diverse team brings together perspectives from across Africa and beyond to create solutions that work for everyone.",
    color: "purple"
  }
]

// Individual Components for better maintainability
const StatCard = ({ stat }: { stat: TeamStat }) => {
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

const DepartmentCard = ({ department }: { department: Department }) => {
  const IconComponent = department.icon
  
  return (
    <Card className="group relative bg-white mt-12  dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="space-y-4">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-${department.color}-500 to-${department.color}-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#0081CC] dark:group-hover:text-blue-400 transition-colors">
            {department.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {department.description}
          </p>
        </div>
      </div>
    </Card>
  )
}

const TeamValueCard = ({ value }: { value: TeamValue }) => {
  const IconComponent = value.icon
  
  return (
    <Card className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}-500/5 to-${value.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative space-y-6">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="space-y-4">
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

export default function TeamPage() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Team.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#0081CC]/30" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#0081CC]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0081CC]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            {/*<div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <div className="w-2 h-2 bg-[#0081CC] rounded-full mr-3 animate-pulse"></div>
              <span className="text-white text-sm font-semibold tracking-wide">OUR TEAM</span>
            </div>*/}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block">Dedicated Professionals</span>
              <span className="block bg-gradient-to-r from-[#0081CC] to-blue-400 bg-clip-text text-transparent">
                Driving Innovation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
              Our team consists of dedicated professionals with extensive expertise in <span className="text-[#0081CC] font-semibold">software development,
              fintech innovation, and technology consulting</span>. Together, we're revolutionizing financial access in Kenya.
            </p>

            {/* Team Stats Row */}
            {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0081CC] mb-2">50+</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Core Disciplines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0081CC] mb-2">100%</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Committed</div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/*<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>*/}
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The qualities that define our team and drive our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <TeamValueCard key={index} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Departments
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Specialized teams working together to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department, index) => (
              <DepartmentCard key={index} department={department} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                  Our Culture
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  We foster an environment where innovation thrives, collaboration is celebrated, 
                  and every team member has the opportunity to make a meaningful impact.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0081CC] to-blue-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Collaboration</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We believe in the power of teamwork and cross-functional collaboration.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We encourage creative thinking and continuous learning at every level.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0081CC] to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Join Our Team</h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    We're always looking for talented individuals who share our passion for 
                    innovation and making a difference in Africa.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Competitive compensation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Professional development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Flexible work environment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0081CC] via-blue-600 to-blue-700 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Be part of a team that's transforming financial access across Africa. 
            We're always looking for talented individuals who share our passion for innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#0081CC] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#0081CC] transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
