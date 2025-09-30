"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accessibility as Flexibility,
  Shield,
  Eye,
  Euro,
  Cpu,
  HeadphonesIcon,
  CheckCircle,
  ExternalLink,
  TrendingDown,
} from "lucide-react"

export function OnboardingBenefitsSection() {
  const benefits = [
    {
      icon: Flexibility,
      title: "Sie bleiben flexibel",
      description:
        "Ihr bisheriger Stromanbieter bleibt bestehen – Solarstrom ergänzt einfach Ihren bestehenden Tarif und erspart Ihnen somit bares Geld!",
      highlight: "Keine Vertragsbindung",
    },
    {
      icon: Shield,
      title: "Keine Vertragsbindung",
      description:
        "Dank fairMieterstrom und Ihrer Zustimmung können Sie Solarstrom nutzen – ohne neuen Vertrag, Wechsel oder Kündigung.",
      highlight: "100% flexibel",
    },
    {
      icon: Eye,
      title: "Maximale Transparenz",
      description: "Unsere Partner-Web-App zeigt Ihnen jederzeit live: Verbrauch, Solaranteil und CO₂-Einsparung.",
      highlight: "Live-Daten",
    },
    {
      icon: Euro,
      title: "Echt attraktiver Preis",
      description: "Sie sparen im Durchschnitt 100€/Jahr gegenüber dem aktuellen Versorger – oft sogar mehr.",
      highlight: "Bis zu 200€ Ersparnis",
    },
    {
      icon: Cpu,
      title: "Einfache & saubere Technik",
      description:
        "Smart Meter und das System (PowerTower + WEESS-App) steuern alles automatisch – Sie müssen nichts tun.",
      highlight: "Vollautomatisch",
    },
    {
      icon: HeadphonesIcon,
      title: "Persönlicher Service",
      description: "Direkter Kontakt via WhatsApp, Mail oder Telefon – keine Hotline, keine formellen Prozesse.",
      highlight: "Persönlich erreichbar",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-[#f3eee7]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04252b] mb-6">Ihre Vorteile mit fairMieterstrom</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Warum Sie jetzt sofort profitieren sollten – alle Vorteile auf einen Blick
            </p>
            <div className="bg-[#77be21]/10 border border-[#77be21]/20 rounded-lg p-6 max-w-2xl mx-auto">
              <CheckCircle className="w-8 h-8 text-[#77be21] mx-auto mb-4" />
              <p className="text-[#04252b] font-medium">Ab jetzt liegt es in Ihrer Hand! Verbrauchen Sie klug!</p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className="bg-[#77be21]/10 p-3 rounded-lg group-hover:bg-[#77be21]/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-[#77be21]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-[#04252b]">{benefit.title}</h3>
                      <span className="text-xs bg-[#77be21]/20 text-[#77be21] px-2 py-1 rounded-full">
                        {benefit.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Savings Highlight */}
          <Card className="p-8 bg-gradient-to-r from-[#77be21] to-[#77be21]/80 text-white mb-12">
            <div className="text-center">
              <TrendingDown className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Komplett stressfrei</h3>
              <p className="text-lg mb-6 opacity-90">
                Betrieb & Abrechnung übernehmen wir – Sie erhalten einfach günstigeren Solarstrom.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-xl font-semibold">
                  Mit fairMieterstrom bekommen Sie günstigen, sauberen Solarstrom – ohne Aufwand, ohne Risiko, mit
                  echter Ersparnis.
                </p>
              </div>
            </div>
          </Card>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h4 className="text-xl font-semibold text-[#04252b] mb-4">Mehr Informationen</h4>
              <p className="text-gray-700 mb-6">
                Vertiefen Sie Ihr Wissen über die Vorteile von fairMieterstrom mit unseren detaillierten Ressourcen.
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a
                    href="https://pure-energy-germany.de/blog/die-vorteile-von-mieterstrom-plus-fuer-mieter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Blog: Vorteile für Mieter
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="/berechner">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Kostenrechner nutzen
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-[#04252b] text-white">
              <h4 className="text-xl font-semibold mb-4">Sofort loslegen</h4>
              <p className="mb-6 opacity-90">
                Bereit für Ihren günstigen Solarstrom? Springen Sie direkt zur Anmeldung.
              </p>
              <Button
                size="lg"
                className="w-full bg-[#77be21] hover:bg-[#77be21]/90"
                onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
              >
                Jetzt anmelden
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
