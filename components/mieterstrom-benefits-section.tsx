"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Building2, TrendingUp, Shield } from "lucide-react"

export function MieterstromBenefitsSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const benefits = [
    {
      icon: Building2,
      title: "Maximale Flächennutzung & hohe Wirtschaftlichkeit",
      description:
        "Dachflächen und freie Stellplätze bieten optimale Möglichkeiten für Photovoltaikanlagen. Durch Mieterstrom wird der produzierte Solarstrom direkt vor Ort genutzt – ohne teure Netzentgelte oder Umlagen. Das senkt die Energiekosten für Mieter und steigert die Rentabilität für Eigentümer.",
    },
    {
      icon: TrendingUp,
      title: "Unabhängigkeit von steigenden Strompreisen",
      description:
        "Mieterstrom schützt vor Preisschwankungen am Strommarkt. Da ein großer Teil des Strombedarfs direkt vor Ort gedeckt wird, sind Mieter und Eigentümer weniger von steigenden Energiepreisen und Netzentgelten abhängig",
    },
    {
      icon: Shield,
      title: "Kein Mehraufwand für Eigentümer & Verwaltung",
      description:
        "Mit einem erfahrenen Mieterstrom-Anbieter entfällt jeglicher Verwaltungsaufwand. Von der Installation über den Betrieb bis zur Abrechnung wird alles übernommen – inklusive gesetzlicher Vorgaben und Fördermöglichkeiten. Eigentümer profitieren von einer Wertsteigerung ihrer Immobilie, ohne zusätzlichen Aufwand.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Darum funktioniert Mieterstrom für fast jedes Mehrfamilienhaus.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-8 bg-white/70 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-gradient-to-r from-[#77be21] to-[#074742] p-4 rounded-full">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-balance">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            Beratungstermin direkt vereinbaren
          </Button>
        </div>
      </div>
    </section>
  )
}
