
"use client"

import { Smartphone, Zap, Shield, CheckCircle } from "lucide-react"

export default function MpesaIntegration() {
  const mpesaFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Transfer",
      description: "Money sent to your M-Pesa wallet in under 30 seconds"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safaricom Secured",
      description: "Official M-Pesa API integration approved by Safaricom"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "No Extra Fees",
      description: "Standard M-Pesa rates apply, no additional charges from Avela"
    }
  ]

  const steps = [
    {
      step: "1",
      title: "Link M-Pesa",
      description: "Securely connect your M-Pesa number to Avela"
    },
    {
      step: "2", 
      title: "Request Advance",
      description: "Choose amount from your available earned wages"
    },
    {
      step: "3",
      title: "Get M-Pesa",
      description: "Receive money instantly in your M-Pesa wallet"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/5 dark:from-green-500/20 dark:to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-500/5 to-emerald-500/10 dark:from-green-500/10 dark:to-emerald-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 mb-6">
            <div className="w-6 h-6 bg-green-600 rounded mr-3 flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <span className="text-green-700 dark:text-green-400 text-sm font-semibold">Powered by M-Pesa</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Seamless Integration with
            <span className="text-green-600 dark:text-green-400"> M-Pesa</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Experience the fastest way to access your earned wages in Kenya. Our official M-Pesa 
            integration ensures your money reaches you instantly, securely, and reliably.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              {mpesaFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-green-100 dark:border-green-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-lg mr-3 flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                Official M-Pesa Partner
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Avela is an official M-Pesa integration partner, working directly with Safaricom 
                to ensure the highest levels of security and reliability for all transactions.
              </p>
            </div>
          </div>

          {/* Right Content - Process Steps */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                How It Works
              </h3>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#0081cc] to-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{step.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock M-Pesa Transaction */}
              <div className="mt-8 bg-green-50 dark:bg-green-900/30 rounded-2xl p-6 border border-green-100 dark:border-green-800">
                <div className="text-center space-y-3">
                  <div className="text-sm text-green-700 dark:text-green-400">Transaction Preview</div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-left">
                    <div className="text-xs text-gray-500 dark:text-gray-400">M-Pesa Transaction</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">KSH 25,000.00 received</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">From: AVELA</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Balance: KSH 47,500.00</div>
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">✓ Delivered in 15 seconds</div>
                </div>
              </div>
            </div>

            {/* Floating M-Pesa Logo */}
            <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-xl shadow-lg">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="font-bold text-lg">M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent" />
            <div className="relative space-y-6">
              <h3 className="text-3xl font-bold">
                Ready to Experience M-Pesa Integration?
              </h3>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Join thousands of Kenyan workers who trust Avela for instant access to their earned wages through M-Pesa.
              </p>
              <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:shadow-lg transform hover:scale-105 flex items-center space-x-3 mx-auto">
                <span>Connect M-Pesa Now</span>
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}