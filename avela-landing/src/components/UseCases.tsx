"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Car,
  Heart,
  Zap,
  Home,
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  Shield,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Types for better maintainability
interface UseCase {
  id: number
  icon: any
  title: string
  scenario: string
  amount: string
  urgency: string
  action: string
  color: string
  gradient: string
}

interface Feature {
  icon: any
  title: string
  description: string
  color: string
}

// Data separated for maintainability
const useCases: UseCase[] = [
  {
    id: 1,
    icon: Car,
    title: "Commuting To Work",
    scenario: "You don't have transport and need to get to work urgently",
    amount: "KSh 5,000",
    urgency: "URGENT",
    action: "Get Instant Advance",
    color: "from-blue-500 to-blue-600",
    gradient: "from-blue-500/20 to-blue-600/20",
  },
  {
    id: 2,
    icon: Heart,
    title: "Medical Emergency",
    scenario: "Unexpected medical bills require immediate payment for treatment",
    amount: "KSh 25,000",
    urgency: "CRITICAL",
    action: "Apply Now",
    color: "from-gray-700 to-gray-800",
    gradient: "from-gray-700/20 to-gray-800/20",
  },
  {
    id: 3,
    icon: Zap,
    title: "KPLC Bills",
    scenario: "Your electricity is about to be disconnected due to pending bills",
    amount: "KSh 8,000",
    urgency: "TODAY",
    action: "Pay Bills",
    color: "from-blue-600 to-blue-700",
    gradient: "from-blue-600/20 to-blue-700/20",
  },
  {
    id: 4,
    icon: Home,
    title: "Rent Payment",
    scenario: "Month-end rent is due and you're short to avoid eviction notice",
    amount: "KSh 20,000",
    urgency: "DUE",
    action: "Secure Funds",
    color: "from-gray-600 to-gray-700",
    gradient: "from-gray-600/20 to-gray-700/20",
  },
]

const features: Feature[] = [
  {
    icon: Clock,
    title: "Instant Approval",
    description: "Get your advance in under 2 minutes",
    color: "text-blue-500",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-grade security with M-Pesa integration",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "No CRB Listing",
    description: "Your credit score remains unaffected",
    color: "text-blue-700",
  },
  {
    icon: TrendingUp,
    title: "Flexible Repayment",
    description: "Pay back on your next salary date",
    color: "text-blue-500",
  },
]

// Individual Components for better maintainability
const UseCaseCard = ({ useCase, isActive, onClick }: { useCase: UseCase; isActive: boolean; onClick: () => void }) => {
  const IconComponent = useCase.icon

  return (
    <Card
      className={`relative overflow-hidden cursor-pointer transition-all duration-500 transform ${
        isActive
          ? "scale-105 shadow-2xl ring-2 ring-[#0081CC]/20"
          : "scale-95 opacity-70 hover:scale-100 hover:opacity-90"
      } bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl rounded-3xl group`}
      onClick={onClick}
    >
      {/* Animated background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Icon with animated background */}
          <div className="relative flex-shrink-0 self-center sm:self-start">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${useCase.color} rounded-xl sm:rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
            />
            <div
              className={`relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${useCase.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
            >
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#0081CC] transition-colors duration-300">
                {useCase.title}
              </h3>
              <span
                className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${useCase.color} animate-pulse self-center sm:self-auto`}
              >
                {useCase.urgency}
              </span>
            </div>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{useCase.scenario}</p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#0081CC] text-center sm:text-left">{useCase.amount}</div>
              <Button
                className={`bg-gradient-to-r ${useCase.color} hover:scale-105 transition-all duration-300 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto`}
              >
                {useCase.action}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const IconComponent = feature.icon

  return (
    <div className="group relative p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-[#0081CC]/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
        <div
          className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color.replace("text-", "from-").replace("-500", "-500/20")} to-transparent group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
        >
          <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-[#0081CC] transition-colors duration-300 text-sm sm:text-base">
            {feature.title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{feature.description}</p>
        </div>
      </div>
    </div>
  )
}

const AdvanceSalarySection = () => (
  <Card className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 border-0 shadow-2xl rounded-3xl group">
    {/* Animated background elements */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0081CC]/5 via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#0081CC]/10 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-1000" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-black/5 dark:from-white/5 to-transparent rounded-full blur-2xl transform -translate-x-24 translate-y-24 group-hover:scale-125 transition-transform duration-1000 delay-200" />

    <div className="relative p-8 md:p-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What <span className="text-[#0081CC]">Advance Salary Providers</span> Offer
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Discover the advantages of advance salary services for Kenyan employees
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Financial Flexibility */}
        <div className="relative group">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/30 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-800/50 group-hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400">Financial Flexibility</h4>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm leading-relaxed">
              Access your earned wages before payday to handle unexpected expenses and emergencies
            </p>
          </div>
        </div>

        {/* No Credit Impact */}
        <div className="relative group">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900/20 dark:to-gray-800/30 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">No Credit Impact</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Advance salary services don't affect your credit score or require CRB checks
            </p>
          </div>
        </div>

        {/* Instant Access */}
        <div className="relative group">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/30 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-800/50 group-hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400">Instant Access</h4>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm leading-relaxed">
              Get your advance within minutes, directly to your M-Pesa wallet
            </p>
          </div>
        </div>

        {/* No Collateral */}
        <div className="relative group">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900/20 dark:to-gray-800/30 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">No Collateral</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              No need for security deposits or asset pledges - your employment is your guarantee
            </p>
          </div>
        </div>

        {/* Flexible Repayment */}
        <div className="relative group">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/30 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-800/50 group-hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400">Flexible Repayment</h4>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm leading-relaxed">
              Repay automatically on your next salary date with no hidden fees
            </p>
          </div>
        </div>

        {/* Employer Partnership */}
        <div className="relative group">
          <div className="bg-gradient-to-br from-[#0081CC]/10 to-[#0081CC]/5 dark:from-[#0081CC]/20 dark:to-[#0081CC]/10 rounded-3xl p-6 border border-[#0081CC]/20 dark:border-[#0081CC]/30 group-hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0081CC] to-blue-600 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#0081CC] dark:text-blue-400">Employer Partnership</h4>
            </div>
            <p className="text-[#0081CC] dark:text-blue-400 text-sm leading-relaxed">
              Seamless integration with your employer's payroll system for secure transactions
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <Button className="bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-[#006bb3] hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl group-hover:shadow-[#0081CC]/25">
          Get Your Advance Today
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  </Card>
)

// Main Component
export default function UseCasesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % useCases.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,129,204,0.03)_50%,transparent_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(0,129,204,0.08)_50%,transparent_75%)] animate-pulse" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#0081CC]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-black/3 dark:bg-white/3 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0081CC]/3 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4">
          {/*<div className="inline-flex items-center gap-2 bg-[#0081CC]/10 text-[#0081CC] px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Real-Life Scenarios
          </div>*/}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            When You Need Money
            <span className="block text-[#0081CC]"> Fast & Secure</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Life happens unexpectedly. When it does, Avela is here to provide instant financial solutions for Kenyan
            employees. Get your earned wages in advance, directly to M-Pesa.
          </p>
        </div>

        {/* Use Cases Carousel */}
        <div className="mb-20">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {useCases.map((useCase, index) => (
                  <div key={useCase.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <UseCaseCard useCase={useCase} isActive={index === currentSlide} onClick={() => goToSlide(index)} />
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Navigation Arrows - Mobile Responsive */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 group"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-gray-700 dark:text-gray-300 group-hover:text-[#0081CC] transition-colors duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 group"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-gray-700 dark:text-gray-300 group-hover:text-[#0081CC] transition-colors duration-300" />
            </button>

            {/* Enhanced Dot Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-[#0081CC] scale-125 shadow-lg"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Why Choose <span className="text-[#0081CC]">Avela</span>?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Experience the future of employee financial wellness with our innovative platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <AdvanceSalarySection />
      </div>
    </section>
  )
}
