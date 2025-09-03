"use client"

import { useState } from 'react'
import { MessageSquare, Settings, Rocket, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react'

interface OnboardingStep {
  id: number
  icon: any
  title: string
  description: string
  details: string[]
  duration: string
  color: string
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Consultation",
    description: "Meet with employer to understand payroll structure and needs",
    details: [
      "Understand payroll structure and employee needs",
      "Live demo of Avela platform and features",
      "Discuss integration preferences and requirements",
      "Customize solution to fit company culture"
    ],
    duration: "1-2 weeks",
    color: "from-[#0081CC] to-[#0081CC]"
  },
  {
    id: 2,
    icon: Settings,
    title: "Integration",
    description: "Configure Avela with employer's Payroll/HR system",
    details: [
      "Secure API integration with existing systems",
      "Dashboard configuration and customization",
      "No disruption to existing payroll processes",
      "Comprehensive security and compliance setup"
    ],
    duration: "1-2 weeks",
    color: "from-[#0081CC] to-[#0081CC]"
  },
  {
    id: 3,
    icon: Rocket,
    title: "Soft Launch",
    description: "Prepare internal communications and training materials",
    details: [
      "Develop internal communication strategy",
      "Create onboarding materials for employees",
      "Train selected pilot group administrators",
      "Set up support channels and resources"
    ],
    duration: "1 week",
    color: "from-[#0081CC] to-[#0081CC]"
  },
  {
    id: 4,
    icon: Users,
    title: "Pilot Phase",
    description: "Roll out to small group to test and gather feedback",
    details: [
      "Deploy to selected employee group",
      "Test functionality and user experience",
      "Gather feedback and usage analytics",
      "Refine processes based on real-world usage"
    ],
    duration: "2 months",
    color: "from-[#0081CC] to-[#0081CC]"
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Full Company Launch",
    description: "Expand access to all employees with tailored messaging",
    details: [
      "Company-wide rollout with proven processes",
      "Tailored messaging and communication campaign",
      "Comprehensive employee training and support",
      "Full feature access for all eligible employees"
    ],
    duration: "2-4 weeks",
    color: "from-[#0081CC] to-[#0081CC]"
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Ongoing Support & Analytics",
    description: "Dedicated support with real-time insights and reporting",
    details: [
      "Dedicated account manager for ongoing support",
      "Real-time usage insights and analytics",
      "Employee wellness impact reporting",
      "Continuous optimization and feature updates"
    ],
    duration: "Ongoing",
    color: "from-[#0081CC] to-[#0081CC]"
  }
]

const StepCard = ({ step, isActive, onClick }: { step: OnboardingStep; isActive: boolean; onClick: () => void }) => {
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
      
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-[#0081CC]">Step {step.id}</span>
        <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300">
          {step.duration}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {step.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {step.description}
      </p>

      {isActive && (
        <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
          {step.details.map((detail, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function OnboardingProcess() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/*<div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
            <Rocket className="w-4 h-4 text-[#0081CC] mr-2" />
            <span className="text-[#0081CC] text-sm font-semibold">Seamless Implementation</span>
          </div>*/}
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Seamless Onboarding with <span className="text-[#0081CC]">Avela</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Our proven 6-step onboarding process ensures smooth integration with your existing systems 
            while maximizing employee adoption and satisfaction.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {onboardingSteps.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              isActive={activeStep === step.id}
              onClick={() => setActiveStep(step.id)}
            />
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="relative mb-16">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0081CC] to-blue-600 transform -translate-y-1/2" />
          
          <div className="flex justify-between items-center relative z-10">
            {onboardingSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeStep >= step.id 
                      ? 'bg-[#0081CC] text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.id}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center max-w-20">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-[#0081CC]/10 to-[#0081CC]/5 dark:from-[#0081CC]/20 dark:to-[#0081CC]/10 rounded-2xl">
            <div className="w-12 h-12 bg-[#0081CC]/20 dark:bg-[#0081CC]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-[#0081CC]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Zero Disruption</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Seamless integration with existing payroll systems without disrupting current processes
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#0081CC]/10 to-[#0081CC]/5 dark:from-[#0081CC]/20 dark:to-[#0081CC]/10 rounded-2xl">
            <div className="w-12 h-12 bg-[#0081CC]/20 dark:bg-[#0081CC]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-[#0081CC]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Dedicated Support</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Personal account manager and ongoing support throughout the entire implementation
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#0081CC]/10 to-[#0081CC]/5 dark:from-[#0081CC]/20 dark:to-[#0081CC]/10 rounded-2xl">
            <div className="w-12 h-12 bg-[#0081CC]/20 dark:bg-[#0081CC]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-[#0081CC]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Real-time Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Comprehensive dashboard with usage insights and employee wellness impact reporting
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0081CC] to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Employee Experience?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join leading companies that have already implemented Avela for their employees
            </p>
            <button className="bg-white text-[#0081CC] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2">
              Start Your Implementation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
