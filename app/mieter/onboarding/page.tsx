import { OnboardingHeroSection } from "@/components/onboarding-hero-section"
import { OnboardingTableOfContents } from "@/components/onboarding-table-of-contents"
import { OnboardingCompanySection } from "@/components/onboarding-company-section"
import { OnboardingHowItWorksSection } from "@/components/onboarding-how-it-works-section"
import { OnboardingBenefitsSection } from "@/components/onboarding-benefits-section"
import { OnboardingAppSection } from "@/components/onboarding-app-section"
import { OnboardingResourcesSection } from "@/components/onboarding-resources-section"
import { OnboardingTimelineSection } from "@/components/onboarding-timeline-section"
import { OnboardingConsentForm } from "@/components/onboarding-consent-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "fairMieterstrom Onboarding - Ihr Weg zum günstigen Solarstrom",
  description:
    "Willkommen bei fairMieterstrom! Erfahren Sie alles über Ihren neuen günstigen Solarstrom direkt vom Dach. Schritt-für-Schritt Anleitung und Einrichtung.",
  keywords: "fairMieterstrom, Onboarding, Mieterstrom, Solarstrom, Anleitung, Setup, Pure Energy Germany",
  openGraph: {
    title: "fairMieterstrom Onboarding - Ihr Weg zum günstigen Solarstrom",
    description:
      "Willkommen bei fairMieterstrom! Erfahren Sie alles über Ihren neuen günstigen Solarstrom direkt vom Dach.",
    url: "https://fairmieterstrom.pure-energy-germany.de/mieter/onboarding",
    images: [
      {
        url: "https://cdn.prod.website-files.com/6851230f794c51bed168c638/68512d19b79e73d7ac83ae53_header-logo.webp",
        width: 1200,
        height: 630,
        alt: "fairMieterstrom Onboarding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "fairMieterstrom Onboarding - Ihr Weg zum günstigen Solarstrom",
    description:
      "Willkommen bei fairMieterstrom! Erfahren Sie alles über Ihren neuen günstigen Solarstrom direkt vom Dach.",
  },
  alternates: {
    canonical: "https://fairmieterstrom.pure-energy-germany.de/mieter/onboarding",
  },
}

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[#f3eee7]">
      <StructuredData type="tenant" />
      <ScrollProgress />
      <Navbar />
      <OnboardingHeroSection />
      <OnboardingTableOfContents />
      <OnboardingCompanySection />
      <OnboardingHowItWorksSection />
      <OnboardingBenefitsSection />
      <OnboardingAppSection />
      <OnboardingResourcesSection />
      <OnboardingTimelineSection />
      <OnboardingConsentForm />
      <Footer />
    </main>
  )
}
