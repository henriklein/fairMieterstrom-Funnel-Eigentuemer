import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { FoerderungenHeroSection } from "@/components/foerderungen-hero-section"
import { FoerderungenBundesSection } from "@/components/foerderungen-bundes-section"
import { ProjektBeispielSection } from "@/components/projekt-beispiel-section"
import { FoerderungenFormularSection } from "@/components/foerderungen-formular-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Förderungen für Mieterstrom - fairMieterstrom",
  description:
    "Entdecken Sie alle verfügbaren Förderungen für Ihr Mieterstrom-Projekt. Kostenlose Analyse aller Subsidien und Zuschüsse. Bis zu 15% gesicherte Rendite durch optimale Fördernutzung.",
  keywords:
    "Mieterstrom Förderung, PV Förderung, EEG Vergütung, Mieterstromzuschlag, BEG Förderung, KfW Kredit, Solarförderung",
  alternates: {
    canonical: "https://fairmieterstrom.pure-energy-germany.de/foerderungen",
  },
}

export default function FoerderungenPage() {
  return (
    <main className="min-h-screen bg-[#f3eee7]">
      <StructuredData type="subsidies" />
      <Navbar />
      <ScrollProgress />
      <div id="hero">
        <FoerderungenHeroSection />
      </div>
      <div id="bundes-foerderungen">
        <FoerderungenBundesSection />
      </div>
      <div id="formular">
        <FoerderungenFormularSection />
      </div>
      <div id="projekt-beispiel">
        <ProjektBeispielSection />
      </div>
      <Footer />
    </main>
  )
}
