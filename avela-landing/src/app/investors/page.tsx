import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"
import InvestorHero from "@/components/investors/InvestorHero"
import MarketOpportunity from "@/components/investors/MarketOpportunity"
import FinancialProjections from "@/components/investors/FinancialProjections"
import CompetitiveAdvantage from "@/components/investors/CompetitiveAdvantage"
import InvestmentTerms from "@/components/investors/InvestmentTerms"

export const metadata: Metadata = generatePageMetadata({
  title: "Invest in Avela - Series A $2.5M | Kenya's Leading EWA Platform Investment",
  description: "Invest in Kenya's financial revolution. Avela Series A round: $2.5M raising, 10-15x returns, 1.9M target market, KES 2.4B opportunity. Join the EWA transformation.",
  keywords: [
    "Avela investment",
    "Series A funding",
    "Kenya fintech investment",
    "EWA platform investment",
    "earned wage access investment",
    "fintech startup Kenya",
    "financial inclusion investment",
    "mobile money investment",
    "Kenya startup funding",
    "EWA market opportunity",
    "fintech Series A",
    "African fintech investment",
    "financial technology investment",
    "venture capital Kenya",
    "startup investment opportunity"
  ],
  path: "/investors",
  type: "website"
})

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <InvestorHero />
      <MarketOpportunity />
      <FinancialProjections />
      <CompetitiveAdvantage />
      <InvestmentTerms />
    </div>
  )
}
