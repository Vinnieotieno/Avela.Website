import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"
import FAQPage from '@/components/FAQPage'

export const metadata: Metadata = generatePageMetadata({
  title: "Avela FAQ - Earned Wage Access Questions & Answers | EWA Help Center",
  description: "Get answers to frequently asked questions about Avela's earned wage access platform. Learn about M-Pesa transfers, eligibility, fees, security, and how EWA works in Kenya.",
  keywords: [
    "Avela FAQ",
    "earned wage access questions",
    "EWA help center",
    "salary advance FAQ",
    "M-Pesa transfer questions",
    "Avela support",
    "EWA platform help",
    "financial wellness FAQ",
    "employee benefits questions",
    "payroll advance help",
    "instant salary questions",
    "Kenya EWA FAQ",
    "mobile money FAQ",
    "financial inclusion help",
    "workplace benefits FAQ"
  ],
  path: "/faq",
  type: "website"
})

export default function FAQ() {
  return <FAQPage />
}