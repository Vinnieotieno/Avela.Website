"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, Mail, Phone, MessageCircle, Send, User, MapPin, Clock, Star } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormField, Select } from '@/components/ui/form'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const faqs = [
    {
      id: 1,
      category: "Getting Started",
      question: "How much of my salary can I access early?",
      answer: "You can access up to 50% of your earned wages that haven't been paid yet. The exact amount depends on your employment verification and earnings history. Most users can access KSH 5,000-200,000 per pay period.",
      popular: true
    },
    {
      id: 2,
      category: "Fees & Pricing",
      question: "What fees does Avela charge?",
      answer: "Avela charges a small, transparent fee for each advance - typically KSH 50-200 for advances under KSH 10,000, and 2-5% for larger amounts. There are no hidden charges, monthly fees, or interest rates.",
      popular: true
    },
    {
      id: 3,
      category: "M-Pesa Integration",
      question: "How quickly do I receive money in my M-Pesa?",
      answer: "Most advances are sent to your M-Pesa wallet instantly! Once you're verified (which takes 2-3 minutes), future advances typically arrive in your M-Pesa within seconds.",
      popular: true
    },
    {
      id: 4,
      category: "Credit & Security",
      question: "Do you check my CRB status?",
      answer: "No, we don't check CRB and advances don't impact your credit record. Our approval is based entirely on your employment verification and earned wage calculation.",
    },
    {
      id: 5,
      category: "Repayment",
      question: "How is the advance repaid?",
      answer: "The advance amount plus fee is automatically deducted from your next paycheck through your employer's payroll system. It's completely seamless - you don't need to do anything.",
    },
    {
      id: 6,
      category: "Eligibility",
      question: "What are the requirements to use Avela?",
      answer: "You need to be 18+, have a steady job with payroll, earn at least KSH 15,000/month, and have an active M-Pesa account. We work with most major Kenyan employers.",
    }
  ]

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))]
  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 mt-16 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-[#0081CC] to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative">
          {/*<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Support Center
          </div>*/}
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            How Can We
            <span className="block">Help You?</span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about Avela's advance salary services. 
            Can't find what you're looking for? Get in touch with our support team.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#0081CC] text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-20" role="region" aria-label="Frequently Asked Questions">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index
              const buttonId = `faq-button-${faq.id}`
              const panelId = `faq-panel-${faq.id}`

              return (
                <Card key={faq.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group">
                  <h3>
                    <button
                      id={buttonId}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xs font-semibold text-[#0081CC] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                      {faq.popular && (
                        <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 dark:bg-yellow-900/30 px-3 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </span>
                      )}
                    </div>
                      <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg group-hover:text-[#0081CC] dark:group-hover:text-blue-400 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0" aria-hidden="true">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#0081CC] dark:text-blue-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      )}
                    </div>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`px-8 pb-6 transition-all duration-300 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get answers in minutes, not hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
                </p>
              </div>

              <Form
                onSubmit={(e) => {
                  e.preventDefault()
                  // Handle form submission
                }}
                aria-label="Contact support form"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    helperText="We'll use this to personalize our response"
                  />

                  <FormField
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    helperText="We'll send our response to this email"
                  />
                </div>

                <Select
                  label="Subject Category"
                  placeholder="Select a category"
                  required
                  options={[
                    { value: "account", label: "Account & Registration" },
                    { value: "payments", label: "Payments & Transfers" },
                    { value: "technical", label: "Technical Support" },
                    { value: "fees", label: "Fees & Charges" },
                    { value: "security", label: "Security & Privacy" },
                    { value: "other", label: "Other" }
                  ]}
                  helperText="This helps us route your question to the right team"
                />

                <FormField
                  label="Subject"
                  type="text"
                  placeholder="Brief description of your question"
                  required
                  helperText="A short summary of what you need help with"
                />

                <FormField
                  label="Message"
                  multiline
                  rows={5}
                  placeholder="Tell us more about your question or concern..."
                  required
                  helperText="Please provide as much detail as possible to help us assist you better"
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-[#006bb3] hover:to-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  aria-describedby="submit-help"
                >
                  <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                  Send Message
                </Button>
                <p id="submit-help" className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  We typically respond within 24 hours
                </p>
              </Form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Other Ways to Reach Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're here to help you 24/7. Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-[#0081CC] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Phone Support</div>
                    <div className="text-gray-600 dark:text-gray-300">+2541 10 127 095</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-[#0081CC] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email Support</div>
                    <div className="text-gray-600 dark:text-gray-300">business@avela.co.ke</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-[#0081CC] rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Live Chat</div>
                    <div className="text-gray-600 dark:text-gray-300">Available 24/7 in the app</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-[#0081CC] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Office Address</div>
                    <div className="text-gray-600 dark:text-gray-300">House 25, Westlands House</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-[#0081CC] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Response Time</div>
                    <div className="text-gray-600 dark:text-gray-300">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 