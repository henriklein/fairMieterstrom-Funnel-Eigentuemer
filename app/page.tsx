import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { MieterstromConceptSection } from "@/components/mieterstrom-concept-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PowerTowerSection } from "@/components/powertower-section"
import { ProjectsSlideshow } from "@/components/projects-slideshow"
import { ImplementationVideoSection } from "@/components/implementation-video-section"
import { TeamServicesSection } from "@/components/team-services-section"
import { FinalCTA } from "@/components/final-cta"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <MieterstromConceptSection />
      <BenefitsSection />
      <PowerTowerSection />
      <ProjectsSlideshow />
      <ImplementationVideoSection />
      <TeamServicesSection />
      <FinalCTA />
      <FAQSection />
      <Footer />
    </main>
  )
}
