// components/FAQ.tsx
"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: "Getting Started",
      question: "How much of my salary can I access early?",
      answer: "You can access up to 50% of your earned wages that haven't been paid yet. The exact amount depends on your employment verification and earnings history. Most users can access KSH 5,000-200,000 per pay period."
    },
    {
      category: "Fees & Pricing",
      question: "What fees does Avela charge?",
      answer: "Avela charges a small, transparent fee for each advance - typically KSH 50-200 for advances under KSH 10,000, and 2-5% for larger amounts. There are no hidden charges, monthly fees, or interest rates. You'll always see the exact fee before confirming."
    },
    {
      category: "M-Pesa Integration",
      question: "How quickly do I receive money in my M-Pesa?",
      answer: "Most advances are sent to your M-Pesa wallet instantly! Once you're verified (which takes 2-3 minutes), future advances typically arrive in your M-Pesa within seconds. Even first-time users usually receive funds within 5 minutes."
    },
    {
      category: "Credit & Security",
      question: "Do you check my CRB status?",
      answer: "No, we don't check CRB and advances don't impact your credit record. Our approval is based entirely on your employment verification and earned wage calculation. This makes Avela accessible to everyone, regardless of credit history."
    },
    {
      category: "Repayment",
      question: "How is the advance repaid?",
      answer: "The advance amount plus fee is automatically deducted from your next paycheck through your employer's payroll system. It's completely seamless - you don't need to do anything. If there are any issues, we'll work with you on a payment plan."
    },
    {
      category: "Eligibility",
      question: "What are the requirements to use Avela?",
      answer: "You need to be 18+, have a steady job with payroll, earn at least KSH 15,000/month, and have an active M-Pesa account. We work with most major Kenyan employers and can verify employment through various methods."
    },
    {
      category: "M-Pesa Integration",
      question: "Do I need to link my M-Pesa account?",
      answer: "Yes, you'll securely link your M-Pesa number during registration. We use bank-level security and never store your M-Pesa PIN. All transfers are processed through secure APIs approved by Safaricom."
    },
    {
      category: "Limits & Usage",
      question: "How often can I request advances to M-Pesa?",
      answer: "You can request advances as often as you need them, as long as you have available earned wages. Most users request 1-3 advances per month. There's no limit on frequency, but you can only have one active advance at a time."
    }
  ]

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-gray-50/50 dark:from-gray-800/30 dark:to-blue-900/20" />
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#0081cc]/5 to-blue-500/5 dark:from-[#0081cc]/10 dark:to-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
            <HelpCircle className="w-4 h-4 text-[#0081cc] dark:text-blue-400 mr-2" />
            <span className="text-[#0081cc] dark:text-blue-400 text-sm font-semibold">Got Questions?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-[#0081cc] to-blue-600 bg-clip-text text-transparent"> Questions</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Avela. Can't find what you're looking for? 
            Chat with our support team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#0081cc] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-semibold text-[#0081cc] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                    {faq.question}
                  </h3>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#0081cc] dark:text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Our support team is here to help you 24/7. Get answers in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#0081cc] hover:bg-[#006bb3] text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                Chat with Support
              </button>
              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                Browse Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}