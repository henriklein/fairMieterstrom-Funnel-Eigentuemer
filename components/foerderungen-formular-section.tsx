"use client"

import { Card } from "@/components/ui/card"
import { FileText, Clock, CheckCircle, MessageSquare, Calculator, Wrench } from "lucide-react"
import { useEffect } from "react"

export function FoerderungenFormularSection() {
  useEffect(() => {
    // Load Fillout script
    const script = document.createElement("script")
    script.src = "https://server.fillout.com/embed/v1/"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="py-16 md:py-20 px-4 bg-[#f3eee7]" id="formular">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">Förder-Analyse starten</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Füllen Sie das Formular aus für Ihre kostenlose Analyse
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-[#77be21] mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Schnell & Einfach</h3>
                <p className="text-gray-600">
                  Nur wenige Angaben zu Ihrem Projekt erforderlich - dauert maximal 3 Minuten
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-8 w-8 text-[#77be21] mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sofortige Auswertung</h3>
                <p className="text-gray-600">
                  Sie erhalten innerhalb von 24 Stunden eine erste Einschätzung aller verfügbaren Förderungen
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 text-[#77be21] mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">100% Kostenlos</h3>
                <p className="text-gray-600">
                  Keine versteckten Kosten, keine Verpflichtungen - komplett unverbindlich
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-white shadow-lg">
            <div
              style={{ width: "100%", height: "500px" }}
              data-fillout-id="9BTwJ8oWWrus"
              data-fillout-embed-type="standard"
              data-fillout-inherit-parameters
              data-fillout-dynamic-resize
            ></div>
          </Card>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Next Steps - So geht es weiter</h3>
            <p className="text-xl text-gray-600">Nach dem Ausfüllen des Formulars</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-[#77be21] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#77be21] opacity-30"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">1. Bei Interesse</h4>
              <p className="text-gray-600">
                Detaillierte Besprechung Ihres Projekts und Ihrer Ziele in einem persönlichen Gespräch
              </p>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-[#77be21] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#77be21] opacity-30"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">2. Calculations</h4>
              <p className="text-gray-600">
                Genaue Projektanalyse, Optimierung der Anlagenplanung und Förderanträge für beste Wirtschaftlichkeit
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#77be21] rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">3. Umsetzung</h4>
              <p className="text-gray-600">
                Komplette Umsetzung aus einer Hand - von der Planung bis zum Management von Mietern und Abrechnungen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
