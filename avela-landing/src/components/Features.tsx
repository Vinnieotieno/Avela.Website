"use client"

import { useState, useEffect } from "react"
import { Clock, Shield, Smartphone, Zap, CreditCard, Users, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Types for better maintainability
interface Feature {
  id: number
  icon: any
  title: string
  description: string
  gradient: string
  color: string
  benefits: string[]
}

// Data separated for maintainability
const features: Feature[] = [
  {
    id: 1,
    icon: Zap,
    title: "Lightning Fast",
    description: "Get approved and funded to M-Pesa in under 2 minutes. No paperwork, no waiting.",
    gradient: "from-blue-400 to-blue-600",
    color: "blue",
    benefits: ["2-minute approval", "Instant M-Pesa transfer", "No paperwork required"],
  },
  {
    id: 2,
    icon: Shield,
    title: "Bank-Grade Security",
    description: "256-bit encryption and Safaricom-approved security keep your data bulletproof.",
    gradient: "from-gray-400 to-gray-600",
    color: "gray",
    benefits: ["256-bit encryption", "Safaricom approved", "Data protection"],
  },
  {
    id: 3,
    icon: CreditCard,
    title: "No CRB Checks",
    description: "Your CRB status stays untouched. Approval based on your earned wages only.",
    gradient: "from-blue-500 to-blue-700",
    color: "blue",
    benefits: ["No credit checks", "CRB status protected", "Wage-based approval"],
  },
  {
    id: 4,
    icon: Smartphone,
    title: "M-Pesa Ready",
    description: "Seamlessly integrated with M-Pesa for instant money transfers to your wallet.",
    gradient: "from-blue-400 to-blue-600",
    color: "blue",
    benefits: ["Direct M-Pesa integration", "Instant transfers", "Wallet ready"],
  },
  {
    id: 5,
    icon: Clock,
    title: "24/7 Available",
    description: "Access your earned wages anytime, anywhere. Even on weekends and holidays.",
    gradient: "from-gray-500 to-gray-700",
    color: "gray",
    benefits: ["24/7 access", "Weekend availability", "Holiday support"],
  },
  {
    id: 6,
    icon: Users,
    title: "Trusted by Kenyans",
    description: "Join 50,000+ Kenyan employees who've already taken control of their finances.",
    gradient: "from-blue-600 to-blue-800",
    color: "blue",
    benefits: ["50,000+ users", "Kenyan focused", "Community trusted"],
  },
]

// Individual Components for better maintainability
const FeatureCard = ({ feature, isActive, onClick }: { feature: Feature; isActive: boolean; onClick: () => void }) => {
  const IconComponent = feature.icon

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
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div className="relative p-8">
        <div className="space-y-6">
          {/* Icon */}
          <div
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <IconComponent className="w-8 h-8" />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#0081CC] dark:group-hover:text-blue-400 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
          </div>

          {/* Benefits List */}
          <div className="space-y-2">
            {feature.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-2 h-2 ${feature.color === "blue" ? "bg-blue-500" : "bg-gray-500"} rounded-full`} />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Hover Arrow */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`w-6 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full`} />
          </div>
        </div>
      </div>
    </Card>
  )
}

// Main Component
export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 6000) // 6 seconds per slide

    return () => clearInterval(interval)
  }, [isAutoPlaying, features.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 dark:from-gray-800/30 dark:to-blue-900/20" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-blue-600/5 dark:from-blue-500/10 dark:to-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-blue-600/5 dark:from-blue-500/10 dark:to-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/*<div className="inline-flex items-center gap-2 bg-[#0081CC]/10 text-[#0081CC] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Why Choose Avela
          </div>*/}

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Built for the Modern
            <span className="bg-gradient-to-r from-[#0081CC] to-blue-600 bg-clip-text text-transparent">
              {" "}
              Workforce
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We've reimagined how employees access their earned wages with cutting-edge technology and a user-first
            approach that puts you in control.
          </p>
        </div>

        {/* Features Carousel */}
        <div className="mb-16">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={feature.id} className="w-full flex-shrink-0 px-4">
                    <FeatureCard feature={feature} isActive={index === currentSlide} onClick={() => goToSlide(index)} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 group"
            >
              <ChevronLeft className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-[#0081CC] transition-colors duration-300" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 group"
            >
              <ChevronRight className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-[#0081CC] transition-colors duration-300" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {features.map((_, index) => (
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

        {/* Bottom CTA */}
        <div className="text-center">
          <Button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
            <span>Experience All Features</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
