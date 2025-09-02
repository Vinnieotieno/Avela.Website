import { FileText, Users, Shield, AlertTriangle, CreditCard, Scale, Clock, Mail } from 'lucide-react'
import { Card } from '@/components/ui/card'

// Types for better maintainability
interface TermsSection {
  icon: any
  title: string
  content: string[]
  highlight?: boolean
  warning?: boolean
}

// Data separated for maintainability
const termsSections: TermsSection[] = [
  {
    icon: Users,
    title: "Acceptance of Terms",
    content: [
      "By accessing or using Avela's services, you agree to be bound by these Terms of Service",
      "These terms constitute a legally binding agreement between you and Avela Technologies",
      "If you do not agree to these terms, you may not use our services",
      "We may update these terms from time to time, and continued use constitutes acceptance"
    ],
    highlight: true
  },
  {
    icon: CreditCard,
    title: "Service Description",
    content: [
      "Avela provides earned wage access (EWA) services to eligible employees",
      "Our service allows you to access a portion of your earned but unpaid wages",
      "Advances are subject to eligibility criteria and employer participation",
      "Service availability may vary based on your location and employment status"
    ]
  },
  {
    icon: Shield,
    title: "Eligibility Requirements",
    content: [
      "Must be 18 years or older and a legal resident of Kenya",
      "Must be employed by a participating employer with regular payroll",
      "Must have a valid M-Pesa account or bank account",
      "Must meet minimum income requirements (typically KSH 15,000/month)",
      "Must pass identity verification and employment confirmation"
    ]
  },
  {
    icon: Scale,
    title: "Fees and Charges",
    content: [
      "Transparent fee structure with no hidden charges or interest rates",
      "Fees typically range from KSH 50-200 for advances under KSH 10,000",
      "Larger advances may incur fees of 2-5% of the advance amount",
      "All fees are clearly disclosed before you confirm any advance",
      "No monthly subscription fees or membership charges"
    ]
  },
  {
    icon: AlertTriangle,
    title: "User Responsibilities",
    content: [
      "Provide accurate and up-to-date personal and employment information",
      "Use the service responsibly and only for legitimate financial needs",
      "Notify us immediately of any changes to your employment status",
      "Maintain the security of your account credentials",
      "Comply with all applicable laws and regulations"
    ],
    warning: true
  },
  {
    icon: Clock,
    title: "Repayment Terms",
    content: [
      "Advances are automatically repaid from your next paycheck",
      "Repayment is coordinated through your employer's payroll system",
      "You cannot modify repayment terms once an advance is confirmed",
      "Failed repayments may result in service suspension or termination",
      "Additional fees may apply for failed or delayed repayments"
    ]
  }
]

const additionalTerms = [
  {
    title: "Account Termination",
    content: "We reserve the right to suspend or terminate accounts for violation of terms, fraudulent activity, or at our discretion. You may close your account at any time, subject to outstanding obligations."
  },
  {
    title: "Limitation of Liability",
    content: "Avela's liability is limited to the amount of fees paid by you. We are not liable for indirect, incidental, or consequential damages arising from use of our services."
  },
  {
    title: "Governing Law",
    content: "These terms are governed by the laws of Kenya. Any disputes will be resolved through binding arbitration in Nairobi, Kenya, unless prohibited by law."
  }
]

export default function TermsOfService() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#0081CC]/5 to-blue-500/5 dark:from-[#0081CC]/10 dark:to-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-center">
         {/*} <div className="inline-flex items-center gap-2 bg-[#0081CC]/10 text-[#0081CC] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Legal Agreement
          </div>*/}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            <span className="block">Terms of</span>
            <span className="block bg-gradient-to-r from-[#0081CC] to-blue-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            These terms govern your use of Avela's earned wage access services. Please read carefully 
            to understand your rights and responsibilities.
          </p>
          

        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {termsSections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <Card key={index} className={`p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  section.highlight
                    ? 'border-[#0081CC]/20 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/10 dark:to-gray-800'
                    : section.warning
                    ? 'border-[#0081CC]/20 bg-gradient-to-br from-blue-50/30 to-white dark:from-blue-900/5 dark:to-gray-800'
                    : 'border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}>
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 p-3 rounded-2xl ${
                      section.highlight
                        ? 'bg-gradient-to-br from-[#0081CC] to-[#0081CC] text-white'
                        : section.warning
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

      {/* Additional Terms */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Additional Terms & Conditions
          </h2>
          
          <div className="space-y-8">
            {additionalTerms.map((term, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {term.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {term.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Our legal team is available to clarify any questions about these terms of service.
          </p>
          
          <Card className="inline-block p-6 bg-gradient-to-r from-[#0081CC] to-blue-600 text-white rounded-2xl shadow-xl">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Legal Department</div>
                <div className="text-blue-100">business@avela.co.ke</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
