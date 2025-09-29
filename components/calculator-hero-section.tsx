"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown, Calculator, TrendingUp, Zap } from "lucide-react"

export function CalculatorHeroSection() {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("berechner")
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#f3eee7] via-white to-[#f3eee7]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-[#04252b] leading-tight">
                Unser kostenloses <span className="text-[#77be21]">Projektvoranalyse-Tool</span>
              </h1>

              <p className="text-xl md:text-2xl text-[#04252b]/80 leading-relaxed text-pretty">
                Berechnen Sie in wenigen Minuten das Potenzial von fairMieterstrom für Ihr Gebäude und erhalten Sie eine
                erste Einschätzung der möglichen Einsparungen.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#77be21] rounded-full"></div>
                  <p className="text-lg text-[#04252b]/70">Kostenlose Potenzialanalyse in 3 Minuten</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#77be21] rounded-full"></div>
                  <p className="text-lg text-[#04252b]/70">Individuelle Berechnung für Ihr Gebäude</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#77be21] rounded-full"></div>
                  <p className="text-lg text-[#04252b]/70">Sofortige Ergebnisse ohne Wartezeit</p>
                </div>
              </div>
            </div>

            <Button
              onClick={scrollToCalculator}
              className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Jetzt kostenlos berechnen
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right side - Calculator Preview */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#77be21] to-[#6ba01d] rounded-full flex items-center justify-center shadow-lg">
                    <Calculator className="w-16 h-16 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#04252b]">Projektvoranalyse-Tool</h3>
                  <p className="text-lg text-[#04252b]/80 leading-relaxed">
                    Erhalten Sie eine erste Einschätzung des fairMieterstrom Potenzials für Ihr Gebäude
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-[#77be21] mx-auto mb-2" />
                      <p className="text-sm text-[#04252b]/70">Einsparungen</p>
                    </div>
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-[#77be21] mx-auto mb-2" />
                      <p className="text-sm text-[#04252b]/70">Potenzial</p>
                    </div>
                  </div>

                  <Button
                    onClick={scrollToCalculator}
                    className="w-full bg-[#77be21] hover:bg-[#6ba01d] text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Jetzt berechnen
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
