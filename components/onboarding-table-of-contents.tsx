"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Zap, TrendingUp, Smartphone, BookOpen, Clock, ExternalLink, QrCode } from "lucide-react"

export function OnboardingTableOfContents() {
  const sections = [
    {
      id: "company",
      title: "Pure Energy Germany - wer sind wir",
      description: "Ein kurzer Überblick zu unserem Unternehmen, unseren Werten und Ihrer neuen Energiepartnerschaft.",
      icon: Building2,
      color: "bg-blue-50 text-blue-600",
      links: [
        { title: "Über uns", url: "https://pure-energy-germany.de/uber-uns" },
        { title: "Unser Team", url: "https://pure-energy-germany.de/team" },
      ],
    },
    {
      id: "how-it-works",
      title: "Was ist fairMieterstrom",
      description: "Wie Solarstrom direkt vom Dach zu Ihnen gelangt – einfach, günstig und ohne Anbieterwechsel.",
      icon: Zap,
      color: "bg-yellow-50 text-yellow-600",
      links: [
        { title: "Blog: Was ist fairMieterstrom", url: "https://pure-energy-germany.de/blog/was-ist-fairMieterstrom" },
        { title: "Technische Details", url: "https://pure-energy-germany.de/technik" },
      ],
    },
    {
      id: "benefits",
      title: "Ihre Mietervorteile mit fairMieterstrom",
      description:
        "Wie Sie Stromkosten sparen, flexibel bleiben und ganz nebenbei das Klima schützen. Klar und verständlich aufgelistet.",
      icon: TrendingUp,
      color: "bg-green-50 text-green-600",
      links: [
        {
          title: "Blog: Vorteile für Mieter",
          url: "https://pure-energy-germany.de/blog/die-vorteile-von-mieterstrom-plus-fuer-mieter",
        },
        { title: "Kostenrechner", url: "/berechner" },
      ],
    },
    {
      id: "app",
      title: "Verbrauch live verfolgen - Ihre Solar-App",
      description: "So sehen Sie jederzeit Ihre aktuelle Stromproduktion, Ihren Verbrauch und Ihre CO₂-Ersparnis.",
      icon: Smartphone,
      color: "bg-purple-50 text-purple-600",
      links: [
        { title: "App Demo", url: "https://demo.weess.de" },
        { title: "FAQ zur App", url: "https://pure-energy-germany.de/faq#app" },
      ],
    },
    {
      id: "resources",
      title: "App, Hilfe & Kontakt auf einen Blick",
      description:
        "Mit Schritt-für-Schritt-Anleitung zur Web-App, QR-Code zur FAQ-Seite sowie allen Kontaktdaten und Öffnungszeiten.",
      icon: BookOpen,
      color: "bg-orange-50 text-orange-600",
      links: [
        { title: "Kontakt & Support", url: "https://pure-energy-germany.de/uber-uns#contact-sec" },
        { title: "FAQ", url: "https://pure-energy-germany.de/faq" },
        { title: "Downloads", url: "https://pure-energy-germany.de/downloads" },
      ],
    },
    {
      id: "timeline",
      title: "Jetzt starten - Ihre nächsten Schritte",
      description:
        "Timeline mit allen erforderlichen Schritten von der Zustimmung zur Datenschutzerklärung bis zur Nutzung.",
      icon: Clock,
      color: "bg-red-50 text-red-600",
      links: [
        { title: "Datenschutzerklärung", url: "https://pure-energy-germany.de/datenschutz" },
        { title: "Beratungsgespräch buchen", url: "/beratungsgespraech" },
      ],
    },
  ]

  return (
    <section id="table-of-contents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04252b] mb-6">Ihr fairMieterstrom Onboarding</h2>
            <p className="text-lg text-gray-600 mb-8">
              Alle Inhalte finden Sie zusätzlich auch online – scannen Sie einfach die jeweiligen QR-Codes oder nutzen
              Sie die direkten Links.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#77be21]/10 border border-[#77be21]/20 rounded-full px-4 py-2">
              <QrCode className="w-4 h-4 text-[#77be21]" />
              <span className="text-sm text-[#77be21] font-medium">QR-Codes für mobile Nutzung verfügbar</span>
            </div>
          </div>

          <div className="grid gap-6">
            {sections.map((section, index) => (
              <Card key={section.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${section.color} flex-shrink-0`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-500">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="text-xl font-semibold text-[#04252b]">{section.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {section.links.map((link, linkIndex) => (
                        <Button key={linkIndex} variant="outline" size="sm" className="text-xs bg-transparent" asChild>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            {link.title}
                          </a>
                        </Button>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#77be21] hover:text-[#77be21]/80"
                      onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Zum Abschnitt springen →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Wir freuen uns, Sie auf dem Weg in die solare Zukunft zu begleiten.</p>
            <p className="text-lg font-medium text-[#04252b]">
              Sonnige Grüße,
              <br />
              <span className="text-[#77be21]">Henri Klein</span>
              <br />
              <span className="text-sm text-gray-500">
                Ansprechpartner für Kundenzufriedenheit, Pure Energy Germany
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
