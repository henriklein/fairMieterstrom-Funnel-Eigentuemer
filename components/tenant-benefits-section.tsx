"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Euro, Smartphone, Shield, Leaf, Clock, Users, ArrowRight, CheckCircle } from "lucide-react"

export function TenantBenefitsSection() {
  const [activeTab, setActiveTab] = useState("mieter")

  const mieterBenefits = [
    {
      icon: Euro,
      title: "Sofort sparen",
      description: "Im Schnitt 100–200 € weniger Stromkosten pro Jahr!",
      detail: "Günstiger Solarstrom direkt vom Dach Ihres Hauses",
    },
    {
      icon: Smartphone,
      title: "Maximale Kontrolle",
      description: "Unsere App zeigt Ihnen Verbrauch, Solaranteil und CO₂-Ersparnis in Echtzeit.",
      detail: "Transparenz und Kontrolle über Ihren Energieverbrauch",
    },
    {
      icon: Clock,
      title: "100% unkompliziert",
      description: "Kein Papierkram, keine langen Wartezeiten – wir übernehmen alles.",
      detail: "Ihr alter Stromvertrag läuft einfach weiter",
    },
    {
      icon: Leaf,
      title: "Gut fürs Klima",
      description: "Grüne Energie vom eigenen Dach statt teurem Netzstrom.",
      detail: "Aktiver Beitrag zur Energiewende",
    },
    {
      icon: Shield,
      title: "Keine Bindung",
      description: "Solarstrom ergänzt einfach Ihren bestehenden Tarif.",
      detail: "Flexibel und ohne langfristige Verpflichtungen",
    },
    {
      icon: Users,
      title: "Persönlicher Service",
      description: "Keine Hotline, sondern direkter Kontakt zu unserem Team.",
      detail: "Individuelle Betreuung und schnelle Hilfe",
    },
  ]

  const eigentuemerBenefits = [
    {
      icon: Euro,
      title: "Zusätzliche Einnahmen",
      description: "Profitieren Sie von Ihrer Solaranlage durch Stromverkauf an Mieter",
      detail: "Attraktive Rendite auf Ihre Investition",
    },
    {
      icon: Users,
      title: "Zufriedene Mieter",
      description: "Bieten Sie Ihren Mietern einen echten Mehrwert",
      detail: "Stärkere Mieterbindung durch innovative Energielösungen",
    },
    {
      icon: Shield,
      title: "Rundum-Service",
      description: "Wir übernehmen Installation, Technik und Abrechnung",
      detail: "Kein Aufwand für Sie als Eigentümer",
    },
  ]

  return (
    <section className="py-20 bg-[#f3eee7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#04252b] mb-6">
            Vorteile für <span className="text-[#77be21]">alle</span>
          </h2>
          <p className="text-xl text-[#04252b]/70 max-w-3xl mx-auto leading-relaxed">
            fairMieterstrom macht die Energiewende für Mieter zugänglich und schafft gleichzeitig attraktive
            Möglichkeiten für Eigentümer. Eine Win-Win-Situation für alle Beteiligten.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/50 p-1 rounded-lg border border-[#04252b]/10">
            <button
              onClick={() => setActiveTab("mieter")}
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeTab === "mieter"
                  ? "bg-white text-[#77be21] shadow-sm border border-[#77be21]/20"
                  : "text-[#04252b]/70 hover:text-[#04252b]"
              }`}
            >
              Für Mieter
            </button>
            <button
              onClick={() => setActiveTab("eigentuemer")}
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeTab === "eigentuemer"
                  ? "bg-white text-[#04252b] shadow-sm border border-[#04252b]/20"
                  : "text-[#04252b]/70 hover:text-[#04252b]"
              }`}
            >
              Für Eigentümer
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(activeTab === "mieter" ? mieterBenefits : eigentuemerBenefits).map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-[#77be21] group bg-white"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeTab === "mieter" ? "bg-[#77be21]/10" : "bg-[#04252b]/10"
                  }`}
                >
                  <benefit.icon className={`w-6 h-6 ${activeTab === "mieter" ? "text-[#77be21]" : "text-[#04252b]"}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#04252b] mb-2 group-hover:text-[#77be21] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-[#04252b]/70 mb-3 leading-relaxed">{benefit.description}</p>
                  <p className="text-sm text-[#04252b]/50">{benefit.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#77be21]/5 to-[#04252b]/5 rounded-2xl p-8 lg:p-12 border border-[#77be21]/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#04252b] mb-4">Eigentümer noch nicht überzeugt?</h3>
              <p className="text-[#04252b]/70 mb-6 leading-relaxed">
                Wir helfen Ihnen gerne dabei, Ihren Vermieter von den Vorteilen zu überzeugen. Mit unserer Erfahrung und
                den klaren wirtschaftlichen Vorteilen schaffen wir eine Win-Win-Situation für alle Beteiligten.
              </p>
              <div className="flex items-center gap-4 text-sm text-[#04252b]/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#77be21]" />
                  Kostenlose Beratung
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#77be21]" />
                  Überzeugende Argumente
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#77be21]" />
                  Persönliche Unterstützung
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button size="lg" className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-8 py-4">
                Eigentümer überzeugen lassen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-[#04252b]/50 mt-3">Wir unterstützen Sie bei der Kommunikation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
