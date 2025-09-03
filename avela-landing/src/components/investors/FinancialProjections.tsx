import { Card } from '@/components/ui/card'
import { TrendingUp, DollarSign, Users, BarChart } from 'lucide-react'

interface FinancialProjection {
  year: string
  revenue: string
  users: string
  growth: string
}

const financialProjections: FinancialProjection[] = [
  { year: "2025", revenue: "KES 45M", users: "15K", growth: "Launch Year" },
  { year: "2026", revenue: "KES 180M", users: "60K", growth: "300%" },
  { year: "2027", revenue: "KES 450M", users: "150K", growth: "150%" },
  { year: "2028", revenue: "KES 900M", users: "300K", growth: "100%" }
]

export default function FinancialProjections() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Financial <span className="text-[#0081CC]">Projections</span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed max-w-3xl mx-auto">
            Conservative projections based on market research and comparable EWA platforms globally
          </p>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-[#0081CC] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Year</th>
                <th className="px-6 py-4 text-left font-semibold">Revenue</th>
                <th className="px-6 py-4 text-left font-semibold">Active Users</th>
                <th className="px-6 py-4 text-left font-semibold">Growth Rate</th>
              </tr>
            </thead>
            <tbody>
              {financialProjections.map((projection, index) => (
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 font-semibold text-black dark:text-white">{projection.year}</td>
                  <td className="px-6 py-4 text-2xl font-bold text-[#0081CC]">{projection.revenue}</td>
                  <td className="px-6 py-4 text-lg font-semibold text-black dark:text-white">{projection.users}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-400 text-sm font-semibold">
                      {projection.growth}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Investment Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <DollarSign className="w-12 h-12 text-[#0081CC] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Revenue Model</h3>
            <p className="text-black/60 dark:text-white/60 mb-4">3-5% processing fee per transaction with automatic collection</p>
            <div className="text-2xl font-bold text-[#0081CC]">Predictable</div>
          </Card>

          <Card className="p-6 text-center">
            <TrendingUp className="w-12 h-12 text-[#0081CC] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Unit Economics</h3>
            <p className="text-black/60 dark:text-white/60 mb-4">Strong margins with low customer acquisition costs</p>
            <div className="text-2xl font-bold text-[#0081CC]">Profitable</div>
          </Card>

          <Card className="p-6 text-center">
            <BarChart className="w-12 h-12 text-[#0081CC] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Market Position</h3>
            <p className="text-black/60 dark:text-white/60 mb-4">First-mover advantage in Kenya's EWA market</p>
            <div className="text-2xl font-bold text-[#0081CC]">Leading</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
