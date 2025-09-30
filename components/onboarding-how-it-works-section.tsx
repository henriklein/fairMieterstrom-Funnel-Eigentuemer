import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sun, Zap, Database, Wifi, BarChart3, CreditCard, ArrowRight, ExternalLink } from "lucide-react"

export function OnboardingHowItWorksSection() {
  const steps = [
    {
      icon: Sun,
      title: "PV-Module",
      description: "wandeln Sonnenlicht direkt in Gleichstrom um",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: Zap,
      title: "Wechselrichter",
      description: "erzeugt haushaltsüblichen 230 V-Wechselstrom",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: Database,
      title: "PowerTower",
      description: "verteilt Solarstrom im Haus und zählt jede Kilowattstunde",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: Wifi,
      title: "Netz-Backup",
      description: "bei wenig Sonne übernimmt automatisch das öffentliche Netz",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: BarChart3,
      title: "Live-Daten",
      description: "WEESS-Cloud liefert Produktion & Verbrauch in App und Dashboard",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: CreditCard,
      title: "Abrechnung",
      description: "Solarstrom zum Fixpreis, der restliche Strom wie gewohnt über Ihren Anbieter",
      color: "bg-red-50 border-red-200",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04252b] mb-6">Was ist fairMieterstrom</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              fairMieterstrom bedeutet: Sie beziehen günstigen Solarstrom direkt vom Dach Ihres Hauses – ohne
              Anbieterwechsel und mit maximaler Flexibilität.
            </p>
            <div className="bg-[#77be21]/10 border border-[#77be21]/20 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-[#04252b] font-medium">
                Wir übernehmen die Technik und den Aufwand. Für Sie wird's einfach: Die Stromkosten sinken meist um rund
                15 %, die Gesamtersparnis kann je nach Verbrauch und Standort sogar bis zu 25 % betragen.
              </p>
            </div>
          </div>

          {/* How it works steps */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#04252b] text-center mb-8">So funktioniert's</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className={`p-6 ${step.color} hover:shadow-lg transition-shadow`}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg">
                      <step.icon className="w-6 h-6 text-[#77be21]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#04252b] mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-700">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Example Implementation */}
          <Card className="p-8 bg-gradient-to-br from-[#f3eee7] to-white border-2 border-[#77be21]/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-[#04252b] mb-4">
                Beispielhafte Umsetzung eines Zwei-Parteien-Mieterstrommodells
              </h3>
              <div className="w-full max-w-2xl mx-auto">
                <img
                  src="/diagram-showing-solar-panels-on-roof-connected-to-.jpg"
                  alt="Mieterstrom Diagramm"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Card>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="p-6 bg-[#77be21]/5 border-[#77be21]/20">
              <h4 className="text-xl font-semibold text-[#04252b] mb-4">Sie sparen, wir übernehmen den Rest!</h4>
              <p className="text-gray-700 mb-4">
                Warum weiter teuren Strom zahlen – wenn's auch günstiger, grüner und einfacher geht?
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automatische Umschaltung zwischen Solar- und Netzstrom</li>
                <li>• Keine Unterbrechung der Stromversorgung</li>
                <li>• Transparente Abrechnung über zwei getrennte Zähler</li>
                <li>• Maximale Ausnutzung der Solarenergie</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white">
              <h4 className="text-xl font-semibold text-[#04252b] mb-4">Mehr erfahren</h4>
              <p className="text-gray-700 mb-6">
                Vertiefen Sie Ihr Wissen über fairMieterstrom mit unseren detaillierten Ressourcen.
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a
                    href="https://pure-energy-germany.de/blog/was-ist-fairMieterstrom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Blog: Was ist fairMieterstrom
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="https://pure-energy-germany.de/technik" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Technische Details
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
