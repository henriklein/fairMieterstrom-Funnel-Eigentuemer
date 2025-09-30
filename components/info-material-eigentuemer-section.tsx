"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight, Euro, Clock, FileText, Users } from "lucide-react"

export function InfoMaterialEigentumerSection() {
  const scrollToHero = () => {
    const element = document.getElementById("hero")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-foreground mb-4 lg:mb-6">
            Warum Eigentümer{" "}
            <span className="font-bold" style={{ color: "#77be21" }}>
              fairMieterstrom ist kostenlos
            </span>{" "}
            wählen
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            fairMieterstrom bietet Ihnen als Eigentümer eine einzigartige Kombination aus hoher Rendite, minimaler
            Bürokratie und vollständiger Betreuung.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
          <div className="space-y-6 lg:space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                {
                  icon: Euro,
                  title: "Bis zu 15% Rendite",
                  description: "Gesicherte Rendite durch optimierte Vermarktung",
                },
                {
                  icon: Clock,
                  title: "Minimaler Aufwand",
                  description: "Wir übernehmen die komplette Abwicklung",
                },
                {
                  icon: FileText,
                  title: "Keine Bürokratie",
                  description: "Einfache Voraussetzungen, wenig Papierkram",
                },
                {
                  icon: Users,
                  title: "Mieter-Service",
                  description: "Vollständige Betreuung Ihrer Mieter",
                },
              ].map((benefit, index) => (
                <Card key={index} className="p-4 lg:p-6 hover:shadow-lg transition-shadow">
                  <benefit.icon className="h-6 w-6 lg:h-8 lg:w-8 text-[#77be21] mb-3 lg:mb-4" />
                  <h3 className="text-base lg:text-lg font-semibold text-card-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-xl lg:text-2xl font-semibold text-foreground">Das fairMieterstrom-Versprechen:</h3>
            {[
              "Keine Vorlaufkosten für Sie als Eigentümer",
              "Professionelle Installation und Wartung inklusive",
              "Transparente Abrechnung mit monatlichen Reports",
              "Rechtssichere Umsetzung aller Vorschriften",
              "Persönlicher Ansprechpartner für alle Fragen",
            ].map((promise, index) => (
              <div key={index} className="flex items-start gap-3 lg:gap-4">
                <Check className="h-5 w-5 lg:h-6 lg:w-6 text-[#77be21] mt-0.5 flex-shrink-0" />
                <p className="text-sm sm:text-base lg:text-lg text-foreground font-medium">{promise}</p>
              </div>
            ))}
          </div>
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
