"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Euro, Zap, TrendingUp, Calculator } from "lucide-react"

export function FoerderungenBundesSection() {
  const bundesFoerderungen = [
    {
      title: "EEG-Vergütung & Marktprämie",
      description:
        "Feste Einspeisevergütung für 20 Jahre ab Inbetriebnahme. Für Anlagen ≤100 kW feste Vergütung, bis 1 MW Marktprämie in Direktvermarktung.",
      icon: <Euro className="h-8 w-8 text-[#77be21]" />,
      highlight: "20 Jahre garantiert",
    },
    {
      title: "EEG-Mieterstromzuschlag",
      description: "Zusätzlicher Cent/kWh-Zuschlag für vor Ort an Mieter gelieferten PV-Strom nach § 48a EEG.",
      icon: <Zap className="h-8 w-8 text-[#77be21]" />,
      highlight: "Zusätzliche Vergütung",
    },
    {
      title: "0% Umsatzsteuer",
      description:
        "Lieferung und Installation von PV-Anlagen und Speichern an Betreiber auf Wohngebäuden ist umsatzsteuerfrei.",
      icon: <TrendingUp className="h-8 w-8 text-[#77be21]" />,
      highlight: "Sofortige Ersparnis",
    },
    {
      title: "Einkommensteuer-Befreiung",
      description: "Erträge aus PV-Anlagen bis 30 kWp je Wohn- oder Gewerbeeinheit sind einkommensteuerfrei.",
      icon: <Calculator className="h-8 w-8 text-[#77be21]" />,
      highlight: "Steuerfrei bis 30 kWp",
    },
  ]

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">Bundesweite Förderungen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Es gibt einige bundesweite Förderungen - das sind ein paar der Beispiele und die besten Gründe, warum jetzt
            die perfekte Zeit hierfür ist
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {bundesFoerderungen.map((foerderung, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                {foerderung.icon}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{foerderung.title}</h3>
                    <Badge variant="secondary" className="bg-[#77be21]/10 text-[#77be21]">
                      {foerderung.highlight}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{foerderung.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#f3eee7] to-white rounded-3xl p-6 lg:p-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">
            Beste Finanzierungsmodelle für Ihr Projekt
          </h3>
          <p className="text-center text-gray-600 mb-6">Machen wir natürlich auch Vorschläge bei Anfrage</p>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-white/80 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-gray-800 mb-2">KfW 270</h4>
              <p className="text-gray-600 text-sm">Zinsgünstige Finanzierung von PV-Anlagen</p>
            </Card>
            <Card className="p-4 bg-white/80 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-gray-800 mb-2">BEG Einzelmaßnahmen</h4>
              <p className="text-gray-600 text-sm">Zuschüsse für Heizungs- und Wärmemaßnahmen</p>
            </Card>
            <Card className="p-4 bg-white/80 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-gray-800 mb-2">KFN - Klimafreundlicher Neubau</h4>
              <p className="text-gray-600 text-sm">Zinsgünstige Kredite für Neubau mit PV</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
