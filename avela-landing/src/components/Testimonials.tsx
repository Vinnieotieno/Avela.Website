"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Heart, TrendingUp, Users, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// Types for better maintainability
interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  location: string
  amount: string
  category: string
}

interface Stat {
  value: string
  label: string
  icon: any
  color: string
}

// Data separated for maintainability
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    role: "Retail Manager",
    company: "Nakumatt",
    content: "Avela saved me when my matatu broke down on Sunday. Got my advance to M-Pesa in 2 minutes and had the repair done the same day. No stress, no waiting for payday. This is exactly what Kenyan workers need!",
    rating: 5,
    avatar: "SW",
    location: "Nairobi",
    amount: "KSh 15,000",
    category: "Emergency"
  },
  {
    id: 2,
    name: "Marcus Ochieng",
    role: "Security Guard", 
    company: "G4S Kenya",
    content: "Finally ditched expensive mobile loans! Avela's fees are transparent and fair. I've saved thousands in interest charges and my CRB record is clean. My family can now breathe easy knowing we have this backup.",
    rating: 5,
    avatar: "MO",
    location: "Mombasa",
    amount: "KSh 25,000",
    category: "Medical"
  },
  {
    id: 3,
    name: "Grace Akinyi",
    role: "Healthcare Worker",
    company: "Kenyatta Hospital", 
    content: "As a single mum, unexpected expenses used to stress me out. Now I can handle anything life throws at me knowing I can send money to M-Pesa instantly. Avela has given me peace of mind.",
    rating: 5,
    avatar: "GA",
    location: "Nairobi",
    amount: "KSh 30,000",
    category: "Family"
  },
  {
    id: 4,
    name: "David Kimani",
    role: "Restaurant Server",
    company: "Java House",
    content: "The app is incredibly easy to use. I love seeing my earnings grow in real-time and sending directly to M-Pesa. Total game-changer for us Kenyans! No more borrowing from friends.",
    rating: 5,
    avatar: "DK",
    location: "Kisumu",
    amount: "KSh 12,000",
    category: "Transport"
  },
  {
    id: 5,
    name: "Faith Muthoni",
    role: "Teacher",
    company: "Brookhouse School",
    content: "When my daughter needed school fees urgently, Avela came through. The process was so smooth and the money was in my M-Pesa before I could even worry. This service is a blessing!",
    rating: 5,
    avatar: "FM",
    location: "Nairobi",
    amount: "KSh 45,000",
    category: "Education"
  },
  {
    id: 6,
    name: "John Otieno",
    role: "Driver",
    company: "Uber Kenya",
    content: "Being a driver means unpredictable income. Avela helps me bridge the gap when I need to pay bills or handle emergencies. The M-Pesa integration is perfect for my lifestyle.",
    rating: 5,
    avatar: "JO",
    location: "Nakuru",
    amount: "KSh 18,000",
    category: "Bills"
  }
]

const stats: Stat[] = [
  { 
    value: "50K+", 
    label: "Happy Users", 
    icon: Users,
    color: "from-blue-500 to-blue-600"
  },
  { 
    value: "4.9★", 
    label: "App Store Rating", 
    icon: Star,
    color: "from-yellow-500 to-orange-500"
  },
  { 
    value: "$2M+", 
    label: "Advances Funded", 
    icon: TrendingUp,
    color: "from-green-500 to-green-600"
  },
  { 
    value: "99.9%", 
    label: "Uptime", 
    icon: Shield,
    color: "from-purple-500 to-purple-600"
  }
]

// Individual Components for better maintainability
const TestimonialCard = ({ testimonial, isActive, onClick }: { testimonial: Testimonial; isActive: boolean; onClick: () => void }) => {
  return (
    <Card 
      className={`relative overflow-hidden cursor-pointer transition-all duration-700 transform ${
        isActive 
          ? 'scale-105 shadow-2xl ring-2 ring-[#0081CC]/20' 
          : 'scale-95 opacity-70 hover:scale-100 hover:opacity-90'
      } bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl rounded-3xl group`}
      onClick={onClick}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0081CC]/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8 lg:p-10">
        <div className="space-y-6">
          {/* Header with category and rating */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#0081CC]/10 text-[#0081CC] dark:text-blue-400 rounded-full text-xs font-semibold">
                {testimonial.category}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {testimonial.location}
              </span>
            </div>
            <div className="flex space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>

          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-[#0081CC]/20 group-hover:text-[#0081CC]/30 transition-colors duration-300" />

          {/* Content */}
          <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            "{testimonial.content}"
          </blockquote>

          {/* Amount */}
          <div className="bg-gradient-to-r from-[#0081CC]/10 to-blue-500/10 dark:from-[#0081CC]/20 dark:to-blue-500/20 rounded-2xl p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Advance Amount</div>
            <div className="text-2xl font-bold text-[#0081CC] dark:text-blue-400">
              {testimonial.amount}
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0081CC] to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
              {testimonial.avatar}
            </div>
            <div>
              <div className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</div>
              <div className="text-gray-600 dark:text-gray-400">{testimonial.role} at {testimonial.company}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

const StatCard = ({ stat }: { stat: Stat }) => {
  const IconComponent = stat.icon
  
  return (
    <div className="text-center group">
      <div className="relative">
        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform duration-300">
          {stat.value}
        </div>
        <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
      </div>
    </div>
  )
}

// Main Component
export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Slower auto-play functionality (8 seconds instead of 5)
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Increased from 5000 to 8000ms

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000) // Resume auto-play after 15s
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,129,204,0.03)_50%,transparent_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(0,129,204,0.08)_50%,transparent_75%)] animate-pulse" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#0081CC]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-black/3 dark:bg-white/3 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0081CC]/3 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/*<div className="inline-flex items-center gap-2 bg-[#0081CC]/10 text-[#0081CC] px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Loved by Thousands
          </div>*/}
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Real Stories from{" "}
            <span className="text-[#0081CC]">Real Kenyans</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how Avela has helped thousands of employees take control of their finances 
            and handle life's unexpected moments with confidence. Join our community of satisfied users.
          </p>
        </div>

        {/* Enhanced Stats Bar */}
        <Card className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-20 border-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </Card>

        {/* Testimonial Carousel */}
        <div className="mb-20">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <TestimonialCard 
                      testimonial={testimonial} 
                      isActive={index === currentIndex}
                      onClick={() => goToSlide(index)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Navigation Arrows */}
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

            {/* Enhanced Dot Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#0081CC] scale-125 shadow-lg' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <Card className="relative overflow-hidden bg-gradient-to-r from-[#0081CC] to-blue-600 rounded-3xl p-12 text-center text-white border-0 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent group-hover:from-blue-600/30 transition-all duration-500" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Share Your Story
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold group-hover:scale-105 transition-transform duration-300">
              Want to Share Your Avela Story?
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Join our community of satisfied users and help others discover how Avela can transform their financial well-being. Your story could inspire someone else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#0081CC] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1">
                Share Your Story
              </Button>
              <Button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#0081CC] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Read More Reviews
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
