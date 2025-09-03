"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DollarSign, Star, Users, ArrowRight, Download, Calendar } from 'lucide-react'

const handleDownloadDeck = () => {
  // Create a downloadable PDF or redirect to deck
  const link = document.createElement('a')
  link.href = '/investor-deck.pdf' // You'll need to add this file to public folder
  link.download = 'Avela-Investor-Deck.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const handleScheduleMeeting = () => {
  // Open Jitsi meeting room
  window.open('https://meet.jit.si/DailyScrumMeeting', '_blank')
}

export default function InvestmentTerms() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Investment <span className="text-[#0081CC]">Opportunity</span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed max-w-3xl mx-auto">
            Join us in building Kenya's financial future with attractive returns and meaningful impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center border-2 border-[#0081CC]/20 hover:border-[#0081CC] transition-all duration-300">
            <div className="w-16 h-16 bg-[#0081CC]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-[#0081CC]" />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Series A Round</h3>
            <div className="text-4xl font-bold text-[#0081CC] mb-4">$2.5M</div>
            <p className="text-black/60 dark:text-white/60 mb-6">Raising to accelerate growth and expand market reach</p>
            <ul className="text-left space-y-2 text-sm text-black/60 dark:text-white/60">
              <li>• Product development & scaling</li>
              <li>• Market expansion</li>
              <li>• Team growth</li>
              <li>• Regulatory compliance</li>
            </ul>
          </Card>

          <Card className="p-8 text-center border-2 border-[#0081CC] bg-[#0081CC]/5 transform scale-105">
            <div className="w-16 h-16 bg-[#0081CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Target Returns</h3>
            <div className="text-4xl font-bold text-[#0081CC] mb-4">10-15x</div>
            <p className="text-black/60 dark:text-white/60 mb-6">Projected returns over 5-7 years based on market size</p>
            <ul className="text-left space-y-2 text-sm text-black/60 dark:text-white/60">
              <li>• Massive addressable market</li>
              <li>• Proven business model</li>
              <li>• Strong unit economics</li>
              <li>• Scalable technology</li>
            </ul>
          </Card>

          <Card className="p-8 text-center border-2 border-[#0081CC]/20 hover:border-[#0081CC] transition-all duration-300">
            <div className="w-16 h-16 bg-[#0081CC]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[#0081CC]" />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Investor Profile</h3>
            <div className="text-4xl font-bold text-[#0081CC] mb-4">Impact</div>
            <p className="text-black/60 dark:text-white/60 mb-6">Seeking investors aligned with our mission of financial inclusion</p>
            <ul className="text-left space-y-2 text-sm text-black/60 dark:text-white/60">
              <li>• FinTech experience preferred</li>
              <li>• African market knowledge</li>
              <li>• Strategic value addition</li>
              <li>• Long-term partnership</li>
            </ul>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#0081CC] to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Financial Access in Kenya?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join us in building the future of financial inclusion. Download our investor deck or schedule a meeting to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownloadDeck}
              className="px-8 py-4 text-lg font-semibold bg-white text-[#0081CC] hover:bg-gray-100"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Investor Deck
            </Button>
            <Button 
              variant="outline" 
              onClick={handleScheduleMeeting}
              className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-[#0081CC]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Meeting
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">Contact Us</div>
                <div className="opacity-90">Business Inquiries</div>
                <div className="text-sm opacity-75 mt-1">business@avela.co.ke</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Nairobi, Kenya</div>
                <div className="opacity-90">Headquarters</div>
                <div className="text-sm opacity-75 mt-1">Series A Stage - 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
