"use client"

import { useState } from 'react'
import { Building2, UserCheck, Smartphone, CreditCard, RefreshCw, CheckCircle } from 'lucide-react'

interface Step {
  id: number
  icon: any
  title: string
  description: string
  details: string[]
  color: string
}

const steps: Step[] = [
  {
    id: 1,
    icon: Building2,
    title: "Employer Partners with Avela",
    description: "Your company integrates with our secure platform",
    details: [
      "Seamless payroll integration via API",
      "No disruption to existing processes",
      "Dedicated account manager support"
    ],
    color: "from-[#0081CC] to-[#0081CC]"
  },
  {
    id: 2,
    icon: UserCheck,
    title: "Employee Signs Up",
    description: "Verify employment with invite code from employer",
    details: [
      "Quick registration process",
      "Employment verification via invite code",
      "Secure identity confirmation"
    ],
    color: "from-[#0081CC] to-[#0081CC]"
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Request Your Earned Salary",
    description: "Access portion of accrued wages instantly",
    details: [
      "Request based on days worked",
      "Instant approval process",
      "24/7 availability"
    ],
    color: "from-[#0081CC] to-[#0081CC]"
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Avela Disburses Funds",
    description: "Full amount sent to M-Pesa or bank account",
    details: [
      "Instant M-Pesa transfers",
      "Direct bank deposits available",
      "Full requested amount disbursed"
    ],
    color: "from-[#0081CC] to-[#0081CC]"
  },
  {
    id: 5,
    icon: RefreshCw,
    title: "Automatic Payroll Deduction",
    description: "Seamless repayment on your next payday",
    details: [
      "Automatic deduction from salary",
      "No manual repayment needed",
      "Transparent fee structure"
    ],
    color: "from-[#0081CC] to-[#0081CC]"
  }
]

const StepCard = ({ step, isActive, onClick }: { step: Step; isActive: boolean; onClick: () => void }) => {
  const IconComponent = step.icon

  return (
    <div
      className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-white dark:bg-gray-800 shadow-xl scale-105 border-2 border-[#0081CC]' 
          : 'bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg'
      }`}
      onClick={onClick}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-semibold text-[#0081CC]">Step {step.id}</span>
        {isActive && <CheckCircle className="w-4 h-4 text-green-500" />}
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {step.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {step.description}
      </p>

      {isActive && (
        <div className="space-y-2">
          {step.details.map((detail, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#0081CC] rounded-full" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
         {/*<div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
            <RefreshCw className="w-4 h-4 text-[#0081CC] mr-2" />
            <span className="text-[#0081CC] text-sm font-semibold">Simple Process</span>
          </div>*/}
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How <span className="text-[#0081CC]">Avela</span> Works
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our streamlined process makes accessing your earned wages simple, secure, and instant. 
            Here's how we transform your financial flexibility in just 5 easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              isActive={activeStep === step.id}
              onClick={() => setActiveStep(step.id)}
            />
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0081CC] to-blue-600 transform -translate-y-1/2" />
          
          <div className="flex justify-between items-center relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    activeStep >= step.id 
                      ? 'bg-[#0081CC] text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block w-full h-0.5 bg-gray-200 dark:bg-gray-700 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-[#0081CC]/20 dark:bg-[#0081CC]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-[#0081CC]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">For Employees</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Instant access, no approval needed, privacy guaranteed, and financial empowerment
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-[#0081CC]/20 dark:bg-[#0081CC]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-[#0081CC]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">For Employers</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Cash flow relief, reduced administration, improved employee wellbeing and retention
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-[#0081CC]/20 dark:bg-[#0081CC]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-[#0081CC]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Technology</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Secure API integration, real-time processing, and seamless M-Pesa connectivity
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
