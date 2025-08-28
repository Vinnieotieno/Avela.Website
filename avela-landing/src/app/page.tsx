// page.tsx
import Hero from "@/components/Hero"
import Features from "@/components/Features"
{/*import MpesaIntegration from "@/components/MpesaIntegration"*/}
import UseCases from "@/components/UseCases"
import Analytics from "@/components/Analytics"
import Testimonials from "@/components/Testimonials"
import AppDownload from "@/components/AppDownload"

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <Hero />

      <section aria-label="Features and benefits">
        <Features />
      </section>

      {/* <MpesaIntegration />*/}

      <section aria-label="Use cases and examples">
        <UseCases />
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
  )
}