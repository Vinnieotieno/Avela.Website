import { Shield, Eye, Lock, Users, FileText, Clock, Mail, Phone } from 'lucide-react'
import { Card } from '@/components/ui/card'

// Types for better maintainability
interface PolicySection {
  icon: any
  title: string
  content: string[]
  highlight?: boolean
}

// Data separated for maintainability
const policySections: PolicySection[] = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: [
      "Personal identification information (name, email, phone number, ID number)",
      "Employment information (employer details, salary information, employment status)",
      "Financial information (M-Pesa number, bank account details, transaction history)",
      "Device and usage information (IP address, browser type, app usage patterns)",
      "Location data (for fraud prevention and service optimization)"
    ]
  },
  {
    icon: Shield,
    title: "How We Use Your Information",
    content: [
      "Process salary advance requests and facilitate payments",
      "Verify your identity and employment status",
      "Assess creditworthiness and manage financial risk",
      "Provide customer support and respond to inquiries",
      "Improve our services and develop new features",
      "Comply with legal and regulatory requirements"
    ],
    highlight: true
  },
  {
    icon: Lock,
    title: "Data Security & Protection",
    content: [
      "Industry-standard encryption for all data transmission and storage",
      "Multi-factor authentication and secure access controls",
      "Regular security audits and vulnerability assessments",
      "Compliance with international data protection standards",
      "Secure data centers with 24/7 monitoring and backup systems"
    ]
  },
  {
    icon: Users,
    title: "Information Sharing",
    content: [
      "We do not sell your personal information to third parties",
      "Limited sharing with employers for payroll integration purposes",
      "Sharing with financial partners (M-Pesa, banks) for payment processing",
      "Disclosure to regulatory authorities when legally required",
      "Anonymous, aggregated data may be used for research and analytics"
    ]
  },
  {
    icon: Eye,
    title: "Your Privacy Rights",
    content: [
      "Access and review your personal information",
      "Request correction of inaccurate or incomplete data",
      "Request deletion of your personal information (subject to legal requirements)",
      "Opt-out of marketing communications",
      "Data portability - receive your data in a structured format"
    ]
  },
  {
    icon: Clock,
    title: "Data Retention",
    content: [
      "Personal information retained for the duration of your account",
      "Transaction records kept for 7 years for regulatory compliance",
      "Marketing data deleted within 30 days of opt-out request",
      "Inactive accounts archived after 2 years of no activity",
      "Legal hold data retained as required by law or litigation"
    ]
  }
]

const contactInfo = [
  { icon: Mail, label: "Email", value: "business@avela.co.ke" },
  { icon: Phone, label: "Phone", value: "+2541 10 127 095" },
  { icon: FileText, label: "Address", value: "Nairobi, Kenya" }
]

export default function PrivacyPolicy() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#0081CC]/5 to-blue-500/5 dark:from-[#0081CC]/10 dark:to-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-center">
          {/*<div className="inline-flex items-center gap-2 bg-[#0081CC]/10 text-[#0081CC] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Privacy & Security
          </div>*/}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            <span className="block">Privacy</span>
            <span className="block bg-gradient-to-r from-[#0081CC] to-blue-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Your privacy is fundamental to our mission. Learn how we collect, use, and protect your personal information 
            while providing you with secure salary advance services.
          </p>
          

        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {policySections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <Card key={index} className={`p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  section.highlight
                    ? 'border-[#0081CC]/20 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/10 dark:to-gray-800'
                    : 'border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}>
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 p-3 rounded-2xl ${
                      section.highlight
                        ? 'bg-gradient-to-br from-[#0081CC] to-[#0081CC] text-white'
                        : 'bg-[#0081CC]/10 text-[#0081CC]'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#0081CC] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Our privacy team is here to help. Contact us with any questions about how we handle your personal information.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <Card key={index} className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-3 bg-[#0081CC] text-white rounded-xl">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">
                        {contact.label}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
