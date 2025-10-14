import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MieterstromHeroSection } from "@/components/mieterstrom-hero-section"
import { MieterstromBenefitsSection } from "@/components/mieterstrom-benefits-section"
import { MieterstromReviewsSection } from "@/components/mieterstrom-reviews-section"
import { AnsprechpartnerSection } from "@/components/ansprechpartner-section"
import { MieterstromFAQSection } from "@/components/mieterstrom-faq-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { PartnerLogosSlider } from "@/components/partner-logos-slider"

export default function MieterstromLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <MieterstromHeroSection />
        <PartnerLogosSlider />
        <MieterstromBenefitsSection />
        <MieterstromReviewsSection />
        <AnsprechpartnerSection />
        <MieterstromFAQSection />
      </main>
      <Footer />
    </div>
  )
}
