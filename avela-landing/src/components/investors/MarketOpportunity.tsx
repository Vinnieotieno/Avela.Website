import { TrendingUp, CheckCircle, Target, DollarSign, Users, BarChart } from 'lucide-react'

interface MarketOpportunity {
  title: string
  value: string
  description: string
  growth: string
}

const marketOpportunities: MarketOpportunity[] = [
  {
    title: "Total Addressable Market",
    value: "KES 2.4B",
    description: "Annual salary advance market in Kenya",
    growth: "+25% YoY"
  },
  {
    title: "Target Employees",
    value: "1.9M",
    description: "Salaried workers earning under KES 50,000",
    growth: "+12% YoY"
  },
  {
    title: "Average Transaction",
    value: "KES 8,500",
    description: "Per salary advance request",
    growth: "+8% YoY"
  },
  {
    title: "Market Penetration",
    value: "<5%",
    description: "Current EWA adoption in Kenya",
    growth: "Huge Opportunity"
  }
]

export default function MarketOpportunity() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Massive <span className="text-[#0081CC]">Market Opportunity</span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed max-w-3xl mx-auto">
            Kenya's underserved financial market presents an unprecedented opportunity for growth and impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {marketOpportunities.map((opportunity, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-[#0081CC] mb-2">{opportunity.value}</div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{opportunity.title}</h3>
              <p className="text-sm text-black/60 dark:text-white/60 mb-3">{opportunity.description}</p>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-400 text-sm font-semibold">
                <TrendingUp className="w-3 h-3 mr-1" />
                {opportunity.growth}
              </div>
            </div>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="bg-gradient-to-r from-[#0081CC] to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">The Problem We're Solving</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>80% of employed Kenyans live in poverty despite having jobs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Predatory lenders charge up to 20% monthly interest rates</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Traditional salary advances are slow and stigmatized</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Employers struggle with cash flow for mid-month advances</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-4">74%</div>
              <div className="text-xl">of Kenyan workers earn under KES 50,000/month</div>
              <div className="text-lg opacity-90 mt-2">≈1.9 million potential users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
