"use client"

import { Card } from "@/components/ui/card"
import { Calculator, Building, Users, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export function CalculatorSection() {
  const [formLoaded, setFormLoaded] = useState(false)

  useEffect(() => {
    const loadFilloutScript = () => {
      if (document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
        return
      }

      const script = document.createElement("script")
      script.src = "https://server.fillout.com/embed/v1/"
      script.async = true
      document.head.appendChild(script)
    }

    loadFilloutScript()

    const checkFormLoad = () => {
      const formElement = document.querySelector('[data-fillout-id="9BTwJ8oWWrus"]')
      if (formElement && formElement.children.length > 0) {
        setFormLoaded(true)
      }
    }

    checkFormLoad()
    const interval = setInterval(checkFormLoad, 1000)

    setTimeout(() => {
      clearInterval(interval)
      if (!formLoaded) {
        console.log("[v0] Calculator form embed failed to load")
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [formLoaded])

  return (
    <section id="berechner" className="py-20 px-4 bg-gradient-to-br from-[#f3eee7] to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance text-[#04252b]">
          Berechnen Sie Ihr fairMieterstrom Potenzial
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Introduction */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#77be21] rounded-full flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#04252b]">Kostenlose Projektvoranalyse</h3>
            </div>

            <p className="text-lg text-[#04252b]/80 leading-relaxed">
              Unser intelligenter Berechner analysiert die Gegebenheiten Ihres Gebäudes und erstellt eine erste
              Einschätzung des fairMieterstrom Potenzials.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Building className="w-5 h-5 text-[#77be21] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#04252b]">Gebäudespezifische Analyse</h4>
                  <p className="text-[#04252b]/70">Berücksichtigung von Gebäudetyp, Größe und Lage</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-[#77be21] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#04252b]">Mieteranzahl-Optimierung</h4>
                  <p className="text-[#04252b]/70">Anpassung an die Anzahl der Wohneinheiten</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-[#77be21] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#04252b]">Energieeffizienz-Berechnung</h4>
                  <p className="text-[#04252b]/70">Realistische Einschätzung der Energieproduktion</p>
                </div>
              </div>
            </div>

            <div className="bg-[#77be21]/10 p-6 rounded-lg border border-[#77be21]/20">
              <p className="text-[#04252b] font-medium">
                💡 <strong>Hinweis:</strong> Diese Berechnung dient als erste Orientierung. Für eine detaillierte
                Analyse vereinbaren Sie gerne einen kostenlosen Beratungstermin.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#04252b] text-center">Projektdaten eingeben</h3>

              <div
                style={{
                  width: "100%",
                  height: "600px",
                  minHeight: "600px",
                  maxHeight: "600px",
                  overflow: "hidden",
                }}
                className="rounded-lg"
                data-fillout-id="9BTwJ8oWWrus"
                data-fillout-embed-type="standard"
                data-fillout-inherit-parameters
                data-fillout-dynamic-resize
                data-fillout-redirect-url={`${typeof window !== "undefined" ? window.location.origin : ""}/danke`}
              />

              <p className="text-sm text-[#04252b]/70 text-center">
                * Berechnungen sind Schätzwerte und können je nach individuellen Gegebenheiten variieren
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
