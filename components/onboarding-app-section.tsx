import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, BarChart3, Zap, Leaf, Shield, MapPin, ExternalLink, QrCode } from "lucide-react"

export function OnboardingAppSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Verbrauchsanalyse Ihrer Wohnung",
      description:
        "Erkennen Sie auf einen Blick, wieviel Ihres Stroms aus der Solaranlage stammt – und wieviel aus dem öffentlichen Netz bezogen wird.",
    },
    {
      icon: Zap,
      title: "Live-Daten zur Solarproduktion",
      description: "Sie sehen in Echtzeit, wieviel Strom die Solaranlage aktuell erzeugt – jederzeit abrufbar.",
    },
    {
      icon: Leaf,
      title: "CO₂-Ersparnis auf einen Blick",
      description:
        "Verfolgen Sie Ihre persönliche CO₂-Einsparung in Kilogramm – täglich aktualisiert und transparent aufbereitet.",
    },
  ]

  return (
    <section id="app" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04252b] mb-6">Verfolgen Sie Ihren Verbrauch online</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Sie möchten wissen, wieviel Strom Sie verbrauchen – und wieviel davon direkt vom Dach Ihres Hauses stammt?
            </p>
            <div className="bg-[#77be21]/10 border border-[#77be21]/20 rounded-lg p-6 max-w-2xl mx-auto">
              <Smartphone className="w-8 h-8 text-[#77be21] mx-auto mb-4" />
              <p className="text-[#04252b] font-medium">Ihre Energie. Ihre Übersicht.</p>
            </div>
          </div>

          {/* App Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-[#f3eee7] hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-[#77be21]" />
                  </div>
                  <h3 className="font-semibold text-[#04252b] mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* App Screenshot/Demo */}
          <Card className="p-8 bg-gradient-to-br from-[#04252b] to-[#04252b]/80 text-white mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">WEESS Partner-App</h3>
                <p className="mb-6 opacity-90">
                  Mit unserer Partner-Web-App erhalten Sie vollständige Transparenz über Ihren Energieverbrauch und Ihre
                  Solarproduktion.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#77be21]" />
                    <span className="text-sm">DSGVO-konform und sicher</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#77be21]" />
                    <span className="text-sm">Daten gehostet in Deutschland, Frankfurt am Main</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#77be21]" />
                    <span className="text-sm">Vollkommen automatisch</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <img
                    src="/smartphone-showing-energy-app-dashboard-with-solar.jpg"
                    alt="WEESS App Dashboard"
                    className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Details */}
          <Card className="p-6 bg-[#f3eee7] border-l-4 border-[#77be21]">
            <h4 className="text-xl font-semibold text-[#04252b] mb-4">Technik dahinter</h4>
            <p className="text-gray-700 mb-4">
              Unsere Partner-App von WEESS greift automatisch auf die Messdaten des PowerTowers zu. Das System ist
              speziell für Mieterstrom optimiert – sicher, DSGVO-konform und vollkommen automatisch.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Wichtiger Hinweis:</strong> Sie erhalten einen persönlichen Zugang per Mail nach Abschluss aller
                Arbeiten!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1 bg-transparent" asChild>
                  <a href="https://demo.weess.de" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    App Demo ansehen
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent" asChild>
                  <a href="https://pure-energy-germany.de/faq#app" target="_blank" rel="noopener noreferrer">
                    <QrCode className="w-4 h-4 mr-2" />
                    FAQ zur App
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
