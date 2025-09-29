import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { InfoMaterialHeroSection } from "@/components/info-material-hero-section"
import { InfoMaterialWeiterentwicklungSection } from "@/components/info-material-weiterentwicklung-section"
import { InfoMaterialEigentumerSection } from "@/components/info-material-eigentuemer-section"
import { VergleichSection } from "@/components/vergleich-section"
import { DienstleistungenSection } from "@/components/dienstleistungen-section"
import { InfoMaterialProjekteSection } from "@/components/info-material-projekte-section"
import { AnsprechpartnerSection } from "@/components/ansprechpartner-section"
import { InfoMaterialFAQSection } from "@/components/info-material-faq-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "fairMieterstrom Infomaterial anfordern - Kostenlose Unterlagen",
  description:
    "Fordern Sie kostenloses Infomaterial zu fairMieterstrom an. Erfahren Sie alles über Mieterstrom-Lösungen für Mehrfamilienhäuser mit bis zu 15% gesicherter Rendite.",
  keywords:
    "Infomaterial, fairMieterstrom, Mieterstrom, Mehrfamilienhaus, PV-Anlage, Rendite, kostenlos, Unterlagen, Broschüre",
  openGraph: {
    title: "fairMieterstrom Infomaterial anfordern - Kostenlose Unterlagen",
    description:
      "Fordern Sie kostenloses Infomaterial zu fairMieterstrom an. Erfahren Sie alles über Mieterstrom-Lösungen für Mehrfamilienhäuser.",
    url: "https://fairmieterstrom.pure-energy-germany.de/infomaterial",
    images: [
      {
        url: "https://cdn.prod.website-files.com/6851230f794c51bed168c638/68512d19b79e73d7ac83ae53_header-logo.webp",
        width: 1200,
        height: 630,
        alt: "fairMieterstrom Infomaterial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "fairMieterstrom Infomaterial anfordern - Kostenlose Unterlagen",
    description:
      "Fordern Sie kostenloses Infomaterial zu fairMieterstrom an. Erfahren Sie alles über Mieterstrom-Lösungen für Mehrfamilienhäuser.",
  },
  alternates: {
    canonical: "https://fairmieterstrom.pure-energy-germany.de/infomaterial",
  },
}

export default function InfoMaterialPage() {
  return (
    <main className="min-h-screen bg-[#f3eee7]">
      <StructuredData type="infomaterial" />
      <Navbar />
      <ScrollProgress />
      <div id="hero">
        <InfoMaterialHeroSection />
      </div>
      <div id="features">
        <InfoMaterialWeiterentwicklungSection />
      </div>
      <div id="eigentuemer">
        <InfoMaterialEigentumerSection />
      </div>
      <div id="vergleich">
        <VergleichSection />
      </div>
      <div id="dienstleistungen">
        <DienstleistungenSection />
      </div>
      <div id="testimonial">
        <InfoMaterialProjekteSection />
      </div>
      <div id="kontakt">
        <AnsprechpartnerSection />
      </div>
      <div id="faq">
        <InfoMaterialFAQSection />
      </div>
      <Footer />
    </main>
  )
}
