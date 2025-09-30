import { Navbar } from "@/components/navbar"
import { AppointmentHeroSection } from "@/components/appointment-hero-section"
import { VergleichSection } from "@/components/vergleich-section"
import { DienstleistungenSection } from "@/components/dienstleistungen-section"
import { WeiterentwicklungSection } from "@/components/weiterentwicklung-section"
import { EigentuemerSection } from "@/components/eigentuemer-section"
import { ProjekteSection } from "@/components/projekte-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { AnsprechpartnerSection } from "@/components/ansprechpartner-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { CookieBanner } from "@/components/cookie-banner"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beratungstermin vereinbaren - fairMieterstrom Experte Jan",
  description:
    "Vereinbaren Sie einen kostenlosen Beratungstermin mit unserem Experten Jan und erfahren Sie alles über fairMieterstrom für Ihr Gebäude. Bis zu 15% Rendite möglich.",
  keywords:
    "Beratungstermin, fairMieterstrom, Mieterstrom, Beratung, kostenlos, Experte, Jan, PV-Anlage, Mehrfamilienhaus",
  openGraph: {
    title: "Beratungstermin vereinbaren - fairMieterstrom Experte Jan",
    description:
      "Vereinbaren Sie einen kostenlosen Beratungstermin mit unserem Experten Jan und erfahren Sie alles über fairMieterstrom für Ihr Gebäude.",
    url: "https://fairmieterstrom.pure-energy-germany.de/beratungsgespraech",
    images: [
      {
        url: "https://cdn.prod.website-files.com/6851230f794c51bed168c638/68512d19b79e73d7ac83ae53_header-logo.webp",
        width: 1200,
        height: 630,
        alt: "fairMieterstrom Beratungstermin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beratungstermin vereinbaren - fairMieterstrom Experte Jan",
    description:
      "Vereinbaren Sie einen kostenlosen Beratungstermin mit unserem Experten Jan und erfahren Sie alles über fairMieterstrom für Ihr Gebäude.",
  },
  alternates: {
    canonical: "https://fairmieterstrom.pure-energy-germany.de/beratungsgespraech",
  },
}

export default function TerminPage() {
  return (
    <main className="min-h-screen bg-[#f3eee7]">
      <StructuredData type="consultation" />
      <ScrollProgress />
      <Navbar />
      <AppointmentHeroSection />
      <VergleichSection />
      <DienstleistungenSection />
      <WeiterentwicklungSection />
      <EigentuemerSection />
      <ProjekteSection />
      <TestimonialSection />
      <AnsprechpartnerSection />
      <FaqSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
