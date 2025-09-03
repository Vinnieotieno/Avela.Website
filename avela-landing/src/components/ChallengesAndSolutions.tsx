"use client"

import { useState } from 'react'
import { AlertTriangle, TrendingDown, DollarSign, Clock, Shield, Zap, Users, CheckCircle } from 'lucide-react'

interface Challenge {
  id: number
  icon: any
  title: string
  description: string
  statistic: string
  impact: string
}

interface Solution {
  id: number
  icon: any
  title: string
  description: string
  benefit: string
}

const challenges: Challenge[] = [
  {
    id: 1,
    icon: TrendingDown,
    title: "Low Income Reality",
    description: "74% of salaried workers earn under KES 50,000 per month",
    statistic: "≈1.9 million workers",
    impact: "Mounting financial pressure due to rising cost of living"
  },
  {
    id: 2,
    icon: AlertTriangle,
    title: "Living Paycheck to Paycheck",
    description: "Over 70% of Kenyan workers have little to no emergency savings",
    statistic: "70% of workers",
    impact: "No room for unexpected expenses or emergencies"
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Heavy Statutory Deductions",
    description: "PAYE, NSSF, NHIF/SHA, housing levy consume 20-30% of gross salary",
    statistic: "20-30% deductions",
    impact: "Further strain on already limited take-home pay"
  },
  {
    id: 4,
    icon: Clock,
    title: "Predatory Lending Trap",
    description: "Digital lenders charge up to 20% monthly interest rates",
    statistic: "20% per month",
    impact: "Cycles of debt, poor financial health, and stress"
  }
]

const solutions: Solution[] = [
  {
    id: 1,
    icon: Zap,
    title: "Instant Access to Earned Wages",
    description: "Get your accrued salary immediately without waiting for payday",
    benefit: "Financial flexibility when you need it most"
  },
  {
    id: 2,
    icon: Shield,
    title: "Interest-Free Solution",
    description: "No loans, no interest, no debt - just access to your own money",
    benefit: "Break free from predatory lending cycles"
  },
  {
    id: 3,
    icon: Users,
    title: "Privacy and Dignity",
    description: "No stigma from requesting salary advances at work",
    benefit: "Maintain professional relationships and personal dignity"
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Employer Cash Flow Relief",
    description: "No need for employers to budget mid-month advance requests",
    benefit: "Operational efficiency and reduced administrative burden"
  }
]

const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
  const IconComponent = challenge.icon

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-[#0081CC]/20 dark:border-[#0081CC]/30 hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-[#0081CC]/10 dark:bg-[#0081CC]/20 rounded-xl flex items-center justify-center mb-4">
        <IconComponent className="w-6 h-6 text-[#0081CC]" />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {challenge.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
        {challenge.description}
      </p>

      <div className="bg-[#0081CC]/10 dark:bg-[#0081CC]/20 rounded-lg p-3 mb-3">
        <div className="text-2xl font-bold text-[#0081CC] mb-1">
          {challenge.statistic}
        </div>
        <div className="text-xs text-[#0081CC]/80">
          {challenge.impact}
        </div>
      </div>
    </div>
  )
}

const SolutionCard = ({ solution }: { solution: Solution }) => {
  const IconComponent = solution.icon

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-[#0081CC]/20 dark:border-[#0081CC]/30 hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-[#0081CC]/10 dark:bg-[#0081CC]/20 rounded-xl flex items-center justify-center mb-4">
        <IconComponent className="w-6 h-6 text-[#0081CC]" />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {solution.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
        {solution.description}
      </p>

      <div className="bg-[#0081CC]/10 dark:bg-[#0081CC]/20 rounded-lg p-3">
        <div className="text-sm font-semibold text-[#0081CC]">
          {solution.benefit}
        </div>
      </div>
    </div>
  )
}

export default function ChallengesAndSolutions() {
  const [activeTab, setActiveTab] = useState<'challenges' | 'solutions'>('challenges')

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The Problem <span className="text-[#0081CC]">Avela</span> Solves
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            Understanding the financial challenges facing Kenyan workers and how our innovative 
            Earned Wage Access platform provides sustainable solutions.
          </p>

          {/* Tab Navigation */}
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'challenges'
                  ? 'bg-[#0081CC] text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Current Challenges
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'solutions'
                  ? 'bg-[#0081CC] text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Avela Solutions
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {activeTab === 'challenges' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          )}

          {activeTab === 'solutions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {solutions.map((solution) => (
                <SolutionCard key={solution.id} solution={solution} />
              ))}
            </div>
          )}
        </div>

        {/* Key Statistics */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Kenya's Financial Reality
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              The numbers that drive our mission to transform financial access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0081CC] mb-2">80%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                of employed Kenyans live in poverty despite having jobs
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0081CC] mb-2">≈15M</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                employed Kenyans struggling with insufficient income
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0081CC] mb-2">20%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                monthly interest rates from predatory digital lenders
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
