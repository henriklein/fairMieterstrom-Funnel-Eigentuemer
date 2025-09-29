"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, Euro, Zap, Home, Battery } from "lucide-react"
import { useEffect, useState } from "react"

export function ProjektBeispielSection() {
  const [animatedValues, setAnimatedValues] = useState({
    gewinn: 0,
    rendite: 0,
    amortisation: 0,
  })

  const finalValues = {
    gewinn: 4404,
    rendite: 15.42,
    amortisation: 6.5,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedValues({
        gewinn: Math.round(finalValues.gewinn * progress),
        rendite: Math.round(finalValues.rendite * progress * 100) / 100,
        amortisation: Math.round(finalValues.amortisation * progress * 10) / 10,
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setAnimatedValues(finalValues)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const projectData = {
    wohneinheiten: 6,
    leistung: "29,59 kWP",
    batterie: "20 kWh",
    waermepumpe: "Ja",
    investition: "28.568,00€",
  }

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-white via-[#f8f9fa] to-[#f3eee7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Beispielprojekt mit Pure Energy Germany
          </h2>
          <p className="text-xl text-gray-600">Hier lassen wir Fakten sprechen!</p>
        </div>

        <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
          {/* Project Overview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-[#77be21]">
              <Home className="h-10 w-10 text-[#77be21] mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{projectData.wohneinheiten}</div>
              <p className="text-gray-600 font-medium">Wohneinheiten</p>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-[#77be21]">
              <Zap className="h-10 w-10 text-[#77be21] mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{projectData.leistung}</div>
              <p className="text-gray-600 font-medium">Leistung PV-Anlage</p>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-[#77be21]">
              <Battery className="h-10 w-10 text-[#77be21] mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{projectData.batterie}</div>
              <p className="text-gray-600 font-medium">Größe Batteriespeicher</p>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-[#77be21]">
              <div className="text-4xl mb-4">🔥</div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{projectData.waermepumpe}</div>
              <p className="text-gray-600 font-medium">Wärmepumpe integriert?</p>
            </Card>
          </div>

          {/* Financial Results with animated numbers */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Investition</h3>
              <Card className="p-6 bg-gradient-to-r from-gray-50 to-white shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-600">Investitionskosten</span>
                  <span className="text-2xl font-bold text-gray-800">{projectData.investition}</span>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Rendite & Gewinn</h3>
              <div className="space-y-4">
                <Card className="p-6 bg-gradient-to-r from-green-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-600">Durchschnittlicher Gewinn</span>
                    <span className="text-2xl font-bold text-[#77be21]">
                      {animatedValues.gewinn.toLocaleString()}€/a
                    </span>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-r from-green-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-600">Rendite (IRR)</span>
                    <span className="text-2xl font-bold text-[#77be21]">{animatedValues.rendite}%</span>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-r from-green-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-600">Amortisationszeit</span>
                    <span className="text-2xl font-bold text-[#77be21]">{animatedValues.amortisation} Jahre</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Key Highlights with animated values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-to-br from-white to-green-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <TrendingUp className="h-16 w-16 text-[#77be21] mx-auto mb-6" />
              <div className="text-4xl font-bold text-[#77be21] mb-3">{animatedValues.rendite}%</div>
              <p className="text-gray-600 font-medium">Rendite (IRR)</p>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-white to-green-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Clock className="h-16 w-16 text-[#77be21] mx-auto mb-6" />
              <div className="text-4xl font-bold text-[#77be21] mb-3">{animatedValues.amortisation}</div>
              <p className="text-gray-600 font-medium">Jahre Amortisation</p>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-white to-green-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Euro className="h-16 w-16 text-[#77be21] mx-auto mb-6" />
              <div className="text-4xl font-bold text-[#77be21] mb-3">{animatedValues.gewinn.toLocaleString()}€</div>
              <p className="text-gray-600 font-medium">Gewinn pro Jahr</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
