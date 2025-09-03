import { Metadata } from "next"
import { generatePageMetadata, generateServiceStructuredData } from "@/lib/seo"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import ChallengesAndSolutions from "@/components/ChallengesAndSolutions"
import OnboardingProcess from "@/components/OnboardingProcess"
{/*import MpesaIntegration from "@/components/MpesaIntegration"*/}
import UseCases from "@/components/UseCases"
import Analytics from "@/components/Analytics"
import Testimonials from "@/components/Testimonials"
import AppDownload from "@/components/AppDownload"

export const metadata: Metadata = generatePageMetadata({
  title: "Avela - Kenya's #1 Earned Wage Access Platform | Instant Salary to M-Pesa",
  description: "Get instant access to your earned salary via M-Pesa with Avela. Kenya's leading EWA platform serving 50,000+ workers. 0% interest, no loans, instant transfers. Join today!",
  keywords: [
    "salary advance Kenya",
    "earned wage access Kenya",
    "M-Pesa salary advance",
    "instant salary Kenya",
    "payroll advance",
    "financial wellness Kenya",
    "employee benefits Kenya",
    "salary on demand",
    "EWA platform",
    "Kenyan fintech",
    "mobile money Kenya",
    "financial inclusion Kenya",
    "digital lending alternative",
    "workplace benefits Kenya",
    "instant money transfer"
  ],
  path: "/",
  type: "website"
})

export default function Home() {
  const serviceStructuredData = generateServiceStructuredData()

  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData)
        }}
      />

      <div className="bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <Hero />

      <section aria-label="Features and benefits">
        <Features />
      </section>

      <section aria-label="How Avela works">
        <HowItWorks />
      </section>

      <section aria-label="Challenges and solutions">
        <ChallengesAndSolutions />
      </section>

      {/* <MpesaIntegration />*/}

      <section aria-label="Use cases and examples">
        <UseCases />
      </section>

      <section aria-label="Onboarding process">
        <OnboardingProcess />
      </section>

      <section aria-label="Analytics and statistics">
        <Analytics />
      </section>

      <section aria-label="Customer testimonials">
        <Testimonials />
      </section>

        <section aria-label="Mobile app download">
          <AppDownload />
        </section>
      </div>
    </>
  )
}