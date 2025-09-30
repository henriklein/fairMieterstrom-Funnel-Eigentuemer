import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Lightbulb, Heart, Shield, ExternalLink } from "lucide-react"

export function OnboardingCompanySection() {
  const values = [
    {
      icon: Heart,
      title: "Kundenorientierung",
      description:
        "Sie als Mieter:innen stehen an erster Stelle. Wir sorgen für stressfreie, strukturierte Abläufe, übernehmen die Komplexität und sind persönlich erreichbar.",
    },
    {
      icon: Award,
      title: "Qualität",
      description:
        "Qualität durch saubere Arbeit, Verlässlichkeit und Kommunikation auf Augenhöhe – vom ersten Gespräch bis zum letzten Kabel.",
    },
    {
      icon: Shield,
      title: "Transparenz",
      description: "Transparenz in Planung, Abrechnung und Kommunikation – verständlich, fair und nachvollziehbar.",
    },
  ]

  const workingPrinciples = [
    "Wir arbeiten strukturiert, ehrlich und lösungsorientiert – mit dem Anspruch, unsere Projekte schnell, sicher und persönlich umzusetzen.",
    "Wir übernehmen Verantwortung, kommunizieren klar und sorgen dafür, dass jeder Schritt nachvollziehbar und stressfrei abläuft – für Eigentümer wie für Mieter.",
  ]

  return (
    <section id="company" className="py-20 bg-[#f3eee7]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04252b] mb-6">Pure Energy Germany – wer sind wir</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ein junges, ambitioniertes Unternehmen mit Wurzeln im Bauhandwerk und einem klaren Fokus: Wir ermöglichen
              die lokale Energiewende in Mehrfamilienhäusern.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-8 mb-12 bg-white border-l-4 border-[#77be21]">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-[#77be21] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#04252b] mb-4">Unsere Mission</h3>
                <p className="text-gray-700 mb-4">
                  Wir ermöglichen Mehrfamilienhauseigentümern Solarstrom unkompliziert an ihre Mieter zu verkaufen –
                  durch geringe laufende Kosten schaffen wir attraktive Angebote für Mieter.
                </p>
                <p className="text-gray-700 mb-4">
                  Unsere Mission ist es, das volle Potenzial der Solarenergie auszuschöpfen – vorteilhaft für Mieter,
                  profitabel für Eigentümer sowie planbar und fair für Handwerker.
                </p>
                <div className="bg-[#77be21]/10 p-4 rounded-lg">
                  <p className="text-[#04252b] font-medium">
                    Wir glauben, dass durch gute Kommunikation alle Beteiligten an der Energiewende profitieren können!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Positioning */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white">
              <Lightbulb className="w-8 h-8 text-[#77be21] mb-4" />
              <h3 className="text-xl font-semibold text-[#04252b] mb-4">Unsere Positionierung</h3>
              <p className="text-gray-700">
                Während andere Anbieter auf komplizierte Systeme mit hohen Betriebskosten setzen, bieten wir eine
                einfache, renditestarke Lösung mit klarer Struktur.
              </p>
            </Card>

            <Card className="p-6 bg-white">
              <Users className="w-8 h-8 text-[#77be21] mb-4" />
              <h3 className="text-xl font-semibent text-[#04252b] mb-4">Unsere Arbeitsweise</h3>
              <div className="space-y-3">
                {workingPrinciples.map((principle, index) => (
                  <p key={index} className="text-gray-700 text-sm">
                    {principle}
                  </p>
                ))}
              </div>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#04252b] text-center mb-8">Unsere Werte</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 bg-white text-center hover:shadow-lg transition-shadow">
                  <value.icon className="w-12 h-12 text-[#77be21] mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-[#04252b] mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-[#04252b] to-[#04252b]/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Mit uns wird Solarstrom für Mieter nicht nur möglich, sondern einfach besser.
            </h3>
            <p className="mb-6 opacity-90">Erfahren Sie mehr über unser Unternehmen und unsere Philosophie</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#77be21] hover:bg-[#77be21]/90" asChild>
                <a href="https://pure-energy-germany.de/uber-uns" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Mehr über uns erfahren
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a
                  href="https://pure-energy-germany.de/blog/fairmieterstrom-fuer-mieter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Blog lesen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
