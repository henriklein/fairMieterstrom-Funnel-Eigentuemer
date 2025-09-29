import { TenantHeroSection } from "@/components/tenant-hero-section"
import { TenantBenefitsSection } from "@/components/tenant-benefits-section"
import { TenantProcessSection } from "@/components/tenant-process-section"
import { TenantFormSection } from "@/components/tenant-form-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FaqSection } from "@/components/faq-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "fairMieterstrom für Mieter - Günstiger Solarstrom direkt vom Dach",
  description:
    "Als Mieter bis zu 200€ jährlich sparen mit fairMieterstrom. Solarstrom direkt vom Gebäudedach ohne Aufwand oder Vertragswechsel. Jetzt informieren!",
  keywords: "Mieterstrom, Mieter, Solarstrom, Stromkosten sparen, günstiger Strom, PV-Anlage, fairMieterstrom",
  openGraph: {
    title: "fairMieterstrom für Mieter - Günstiger Solarstrom direkt vom Dach",
    description:
      "Als Mieter bis zu 200€ jährlich sparen mit fairMieterstrom. Solarstrom direkt vom Gebäudedach ohne Aufwand oder Vertragswechsel.",
    url: "https://fairmieterstrom.pure-energy-germany.de/mieter",
    images: [
      {
        url: "https://cdn.prod.website-files.com/6851230f794c51bed168c638/68512d19b79e73d7ac83ae53_header-logo.webp",
        width: 1200,
        height: 630,
        alt: "fairMieterstrom für Mieter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "fairMieterstrom für Mieter - Günstiger Solarstrom direkt vom Dach",
    description:
      "Als Mieter bis zu 200€ jährlich sparen mit fairMieterstrom. Solarstrom direkt vom Gebäudedach ohne Aufwand oder Vertragswechsel.",
  },
  alternates: {
    canonical: "https://fairmieterstrom.pure-energy-germany.de/mieter",
  },
}

export default function TenantPage() {
  return (
    <main className="min-h-screen bg-[#f3eee7]">
      <StructuredData type="tenant" />
      <ScrollProgress />
      <Navbar />
      <TenantHeroSection />
      <TenantBenefitsSection />
      <TenantProcessSection />
      <TenantFormSection />
      <TestimonialSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
