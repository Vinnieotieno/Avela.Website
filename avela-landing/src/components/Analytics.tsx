// components/Analytics.tsx
"use client"

import { TrendingUp, DollarSign, Calendar, PieChart } from "lucide-react"

export default function Analytics() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-gray-50/50 dark:from-blue-900/20 dark:to-gray-800/30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0081cc]/5 to-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                <PieChart className="w-4 h-4 text-[#0081cc] mr-2" />
                <span className="text-[#0081cc] text-sm font-semibold">Smart Analytics</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Track Your
                <span className="bg-gradient-to-r from-[#0081cc] to-blue-600 bg-clip-text text-transparent"> Financial Wellness</span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Get deep insights into your earning patterns, advance history, and spending habits. 
                Make informed decisions about your financial future with our intelligent analytics.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Earnings Trends",
                  description: "Visualize your income patterns and predict future earnings"
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Advance History",
                  description: "Track all your advances and repayments in one place"
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "Payroll Integration",
                  description: "Seamlessly connect with your employer's payroll system"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#0081cc] to-blue-600 text-white rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-[#0081cc] to-blue-600 hover:from-[#006bb3] hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              View Your Dashboard
            </button>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Financial Overview</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Last 30 days</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#0081cc] rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-[#0081cc] to-blue-600 rounded-2xl p-4 text-white">
                  <div className="text-sm opacity-90">Total Earned</div>
                  <div className="text-2xl font-bold">KSH 485,000</div>
                  <div className="text-xs opacity-75 mt-1">↗ 12% increase</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4 border border-green-100 dark:border-green-800">
                  <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded mr-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    Available to M-Pesa
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">KSH 124,700</div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">Ready to send</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Earnings Trend</h4>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-[#0081cc] font-medium">This month</span>
                    <span className="text-gray-400 dark:text-gray-500">Last month</span>
                  </div>
                </div>
                
                {/* Simple Chart Visualization */}
                <div className="h-32 bg-gray-50 dark:bg-gray-700 rounded-xl p-4 flex items-end justify-between">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-[#0081cc] to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
                      style={{ height: `${height}%`, width: '12%' }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Recent Activity</h4>
                {[
                  { action: "Advance to M-Pesa", amount: "KSH 20,000", status: "approved", time: "2 hours ago" },
                  { action: "Payroll deposit", amount: "KSH 85,000", status: "completed", time: "3 days ago" },
                  { action: "M-Pesa repayment", amount: "KSH 15,000", status: "completed", time: "1 week ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{activity.amount}</div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        activity.status === 'approved' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 
                        activity.status === 'completed' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
                        'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}>
                        {activity.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg">
              <div className="text-xs font-semibold">Live Updates</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-xl shadow-lg">
              <div className="text-xs text-gray-500 dark:text-gray-400">Next update</div>
              <div className="font-semibold text-gray-900 dark:text-white">In 2 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}