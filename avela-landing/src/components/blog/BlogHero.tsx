"use client"

import { Search } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface BlogHeroProps {
  title?: string
  subtitle?: string
  showSearch?: boolean
  onSearch?: (query: string) => void
  variant?: 'default' | 'minimal'
}

export default function BlogHero({
  title = "Avela Blog",
  subtitle = "Insights, tips, and updates from the Avela team",
  showSearch = true,
  onSearch,
  variant = 'default'
}: BlogHeroProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim())
    }
  }

  if (variant === 'minimal') {
    return (
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 mt-12 lg:py-32 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-white dark:bg-black" />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#0081CC]/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-32 right-20 w-16 h-16 bg-[#0081CC]/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-[#0081CC]/10 rounded-full blur-md animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0081CC]/5 rounded-full blur-3xl animate-pulse -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0081CC]/5 rounded-full blur-3xl animate-pulse translate-x-48 translate-y-48" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main heading with animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 animate-fade-in-up">
              <span className="text-[#0081CC]">
                {title}
              </span>
            </h1>

            {/* Subtitle with stagger animation */}
            <p className="text-xl md:text-2xl text-black/70 dark:text-white/70 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>

            {/* Search Bar */}
            {showSearch && (
              <div className="max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <form onSubmit={handleSearch} className="relative">
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40 dark:text-white/40 w-5 h-5 group-focus-within:text-[#0081CC] transition-colors" />
                    <input
                      type="text"
                      placeholder="Search articles, topics, or authors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-32 py-4 text-lg border border-black/20 dark:border-white/20 rounded-2xl focus:ring-2 focus:ring-[#0081CC] focus:border-[#0081CC] bg-white dark:bg-black text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                    />
                    <Button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-xl bg-[#0081CC] hover:bg-[#0081CC]/90 text-white transition-all duration-300 hover:scale-105"
                      disabled={!searchQuery.trim()}
                    >
                      Search
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={() => {
                  const articlesSection = document.getElementById('blog-articles');
                  if (articlesSection) {
                    articlesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 text-lg font-semibold bg-[#0081CC] hover:bg-[#0081CC]/90 text-white transform hover:scale-105 transition-all duration-300"
              >
                Explore Articles
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const articlesSection = document.getElementById('blog-articles');
                  if (articlesSection) {
                    articlesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 text-lg font-semibold border-[#0081CC] text-[#0081CC] hover:bg-[#0081CC] hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Latest Posts
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:block animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Hero Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/Image2.jpg"
                  alt="Avela Blog Hero"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg width='500' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%230081CC'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3EAdd your image here%3C/text%3E%3C/svg%3E";
                  }}
                />

                {/* Overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Optional floating badge */}
                <div className="absolute top-4 right-4 bg-[#0081CC] text-white text-sm px-3 py-1 rounded-full font-semibold">
                  Latest
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-[#0081CC]/20 rounded-3xl blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
