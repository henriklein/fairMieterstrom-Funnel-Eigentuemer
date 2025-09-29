"use client"

import { Card } from "@/components/ui/card"
import { Users, Award, Clock, CheckCircle } from "lucide-react"
import { useEffect } from "react"

export function FoerderungenCalendlySection() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  const expertenVorteile = [
    {
      icon: <Award className="h-8 w-8 text-[#77be21]" />,
      title: "Förder-Experten",
      beschreibung: "Unsere Spezialisten kennen alle aktuellen Förderungen und deren Kombinationsmöglichkeiten",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#77be21]" />,
      title: "30 Min. Beratung",
      beschreibung: "Ausführliche Analyse Ihres Projekts und aller verfügbaren Förderoptionen",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#77be21]" />,
      title: "Sofort-Bewertung",
      beschreibung: "Sie erhalten direkt eine Einschätzung der möglichen Förderungen und Rendite",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 bg-[#f3eee7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">Expertenberatung buchen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sprechen Sie direkt mit unseren Förder-Experten und erhalten Sie eine maßgeschneiderte Beratung für Ihr
            Mieterstrom-Projekt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Experten-Vorteile */}
          <div className="space-y-8">
            <div className="space-y-6">
              {expertenVorteile.map((vorteil, index) => (
                <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-[#77be21]/10 rounded-lg">{vorteil.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{vorteil.title}</h3>
                      <p className="text-gray-600">{vorteil.beschreibung}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Team Info */}
            <Card className="p-6 bg-gradient-to-br from-white to-[#77be21]/5 border border-[#77be21]/20">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-[#77be21] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Unser Experten-Team</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      • <strong>Förder-Spezialisten</strong> mit jahrelanger Erfahrung
                    </p>
                    <p>
                      • <strong>Juristen</strong> für rechtliche Absicherung
                    </p>
                    <p>
                      • <strong>Ingenieure</strong> für technische Optimierung
                    </p>
                    <p>
                      • <strong>Steuerberater</strong> für maximale Steuervorteile
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Calendly Widget */}
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Termin direkt online buchen</h3>

            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/pure-energy-germany/foerderberatung-mieterstrom"
              style={{ minWidth: "320px", height: "700px" }}
            />

            <div className="mt-6 p-4 bg-[#77be21]/10 rounded-lg text-center">
              <p className="text-sm text-gray-700">
                <strong>Hinweis:</strong> Die Beratung ist 100% kostenlos und unverbindlich. Sie erhalten eine
                detaillierte Förder-Analyse für Ihr Projekt.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
