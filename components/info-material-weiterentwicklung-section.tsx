"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Users, TrendingUp } from "lucide-react"

export function InfoMaterialWeiterentwicklungSection() {
  const scrollToHero = () => {
    const element = document.getElementById("hero")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-card-foreground mb-4 lg:mb-6">
            Die Weiterentwicklung des <span className="text-[#77be21]">Mieterstroms</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            fairMieterstrom revolutioniert die Art, wie Mehrfamilienhäuser von Solarenergie profitieren können.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {[
            {
              icon: Zap,
              title: "Innovative Technologie",
              description: "Modernste PV-Anlagen mit intelligenter Steuerung für maximale Effizienz.",
            },
            {
              icon: Shield,
              title: "Rechtssicherheit",
              description: "Vollständige Compliance mit allen aktuellen und zukünftigen Gesetzen.",
            },
            {
              icon: Users,
              title: "Mieter-Fokus",
              description: "Einfache Teilnahme für Mieter ohne komplizierte Verträge oder Verpflichtungen.",
            },
            {
              icon: TrendingUp,
              title: "Garantierte Rendite",
              description: "Bis zu 15% gesicherte Rendite für Eigentümer durch optimierte Vermarktung.",
            },
          ].map((feature, index) => (
            <Card key={index} className="p-4 lg:p-6 text-center hover:shadow-lg transition-shadow">
              <feature.icon className="h-8 w-8 lg:h-10 lg:w-10 text-[#77be21] mx-auto mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-semibold text-card-foreground mb-2 lg:mb-3">{feature.title}</h3>
              <p className="text-sm lg:text-base text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToHero}
            size="lg"
            className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Infomaterial anfordern
            <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
