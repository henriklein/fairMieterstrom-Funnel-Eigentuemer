import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { HeroSection } from "@/components/hero-section"
import { WeiterentwicklungSection } from "@/components/weiterentwicklung-section"
import { EigentumerSection } from "@/components/eigentuemer-section"
import { VergleichSection } from "@/components/vergleich-section"
import { DienstleistungenSection } from "@/components/dienstleistungen-section"
import { ProjekteSection } from "@/components/projekte-section"
import { AnsprechpartnerSection } from "@/components/ansprechpartner-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3eee7]">
      <Navbar />
      <ScrollProgress />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <WeiterentwicklungSection />
      </div>
      <div id="eigentuemer">
        <EigentumerSection />
      </div>
      <div id="vergleich">
        <VergleichSection />
      </div>
      <div id="dienstleistungen">
        <DienstleistungenSection />
      </div>
      <div id="testimonial">
        <ProjekteSection />
      </div>
      <div id="kontakt">
        <AnsprechpartnerSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
