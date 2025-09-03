"use client"

import { Download, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'



const handleDownloadDeck = () => {
  // Create a downloadable PDF or redirect to deck
  const link = document.createElement('a')
  link.href = '/investor-deck.pdf' 
  link.download = 'Avela-Investor-Deck.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const handleScheduleMeeting = () => {
  // Open Jitsi meeting room
  window.open('https://meet.jit.si/DailyScrumMeeting', '_blank')
}

export default function InvestorHero() {
  return (
    <section className="relative py-20 mt-12 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Investor.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#0081CC]/30" />

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#0081CC]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0081CC]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          {/*<div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <div className="w-2 h-2 bg-[#0081CC] rounded-full mr-3 animate-pulse"></div>
            <span className="text-white text-sm font-semibold tracking-wide">SERIES A INVESTMENT OPPORTUNITY</span>
          </div>*/}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Invest in Kenya's
            <span className="block bg-gradient-to-r from-[#0081CC] to-blue-400 bg-clip-text text-transparent">
              Financial Revolution
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-10">
            Join us in transforming financial access for <span className="text-[#0081CC] font-semibold">1.9 million</span> Kenyan workers through
            our innovative Earned Wage Access platform. Massive market, proven model, exceptional returns.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              onClick={handleDownloadDeck}
              className="px-10 py-5 text-lg font-semibold bg-[#0081CC] hover:bg-[#0081CC]/90 text-white rounded-2xl shadow-2xl hover:shadow-[#0081CC]/25 transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-3" />
              Download Investor Deck
            </Button>
            <Button
              variant="outline"
              onClick={handleScheduleMeeting}
              className="px-10 py-5 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-md rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Schedule Meeting
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.5M</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Series A Round</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0081CC] mb-2">10-15x</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Target Returns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1.9M</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Target Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0081CC] mb-2">KES 2.4B</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Market Size</div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
