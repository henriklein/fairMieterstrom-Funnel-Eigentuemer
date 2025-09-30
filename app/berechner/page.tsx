import { Navbar } from "@/components/navbar"
import { CalculatorHeroSection } from "@/components/calculator-hero-section"
import { InteractiveGraphSection } from "@/components/interactive-graph-section"
import { VergleichSection } from "@/components/vergleich-section"
import { DienstleistungenSection } from "@/components/dienstleistungen-section"
import { WeiterentwicklungSection } from "@/components/weiterentwicklung-section"
import { EigentuemerSection } from "@/components/eigentuemer-section"
import { ProjekteSection } from "@/components/projekte-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CalculatorSection } from "@/components/calculator-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { CookieBanner } from "@/components/cookie-banner"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kostenloser Mieterstrom Berechner - fairMieterstrom Potenzial ermitteln",
  description:
    "Nutzen Sie unseren kostenlosen Projektvoranalyse-Tool und berechnen Sie das Potenzial von fairMieterstrom für Ihr Gebäude. Bis zu 15% Rendite möglich.",
  keywords:
    "Mieterstrom Berechner, Projektvoranalyse, fairMieterstrom, kostenlos, Potenzial berechnen, PV-Anlage Rendite, Mehrfamilienhaus",
  openGraph: {
    title: "Kostenloser Mieterstrom Berechner - fairMieterstrom Potenzial ermitteln",
    description:
      "Nutzen Sie unseren kostenlosen Projektvoranalyse-Tool und berechnen Sie das Potenzial von fairMieterstrom für Ihr Gebäude.",
    url: "https://fairmieterstrom.pure-energy-germany.de/berechner",
    images: [
      {
        url: "https://cdn.prod.website-files.com/6851230f794c51bed168c638/68512d19b79e73d7ac83ae53_header-logo.webp",
        width: 1200,
        height: 630,
        alt: "fairMieterstrom Berechner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kostenloser Mieterstrom Berechner - fairMieterstrom Potenzial ermitteln",
    description:
      "Nutzen Sie unseren kostenlosen Projektvoranalyse-Tool und berechnen Sie das Potenzial von fairMieterstrom für Ihr Gebäude.",
  },
  alternates: {
    canonical: "https://fairmieterstrom.pure-energy-germany.de/berechner",
  },
}

export default function BerechnerPage() {
  return (
    <main className="min-h-screen bg-[#f3eee7]">
      <StructuredData type="calculator" />
      <ScrollProgress />
      <Navbar />
      <CalculatorHeroSection />
      <InteractiveGraphSection />
      <VergleichSection />
      <DienstleistungenSection />
      <WeiterentwicklungSection />
      <EigentuemerSection />
      <ProjekteSection />
      <TestimonialSection />
      <CalculatorSection />
      <FaqSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
