import { Globe, Building2, Shield, Zap, CheckCircle } from 'lucide-react'

export default function CompetitiveAdvantage() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Our <span className="text-[#0081CC]">Competitive Advantage</span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed max-w-3xl mx-auto">
            What sets Avela apart in the rapidly growing EWA market
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0081CC]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[#0081CC]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Kenya-First Approach</h3>
                <p className="text-black/60 dark:text-white/60">Built specifically for Kenyan workers with M-Pesa integration and local compliance</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0081CC]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-[#0081CC]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Employer-Centric Model</h3>
                <p className="text-black/60 dark:text-white/60">Seamless payroll integration that benefits both employees and employers</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0081CC]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#0081CC]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Risk-Free Model</h3>
                <p className="text-black/60 dark:text-white/60">Advances based on earned wages, not creditworthiness - minimal default risk</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0081CC]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-[#0081CC]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Instant Processing</h3>
                <p className="text-black/60 dark:text-white/60">Real-time salary verification and instant M-Pesa disbursement</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">Market Comparison</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-[#0081CC]/10 rounded-xl">
                <span className="font-semibold text-black dark:text-white">Avela (Kenya Focus)</span>
                <span className="text-[#0081CC] font-bold">Market Leader</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
                <span className="font-semibold text-black dark:text-white">International Players</span>
                <span className="text-gray-500">Limited Local Presence</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
                <span className="font-semibold text-black dark:text-white">Traditional Lenders</span>
                <span className="text-red-500">High Interest Rates</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
                <span className="font-semibold text-black dark:text-white">Informal Solutions</span>
                <span className="text-red-500">Unreliable & Risky</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
