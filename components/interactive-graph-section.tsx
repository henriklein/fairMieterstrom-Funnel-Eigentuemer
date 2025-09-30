"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, Euro, BarChart3 } from "lucide-react"

export function InteractiveGraphSection() {
  const [activeYear, setActiveYear] = useState(1)
  const [animatedValues, setAnimatedValues] = useState({ rendite: 0, usage: 0, savings: 0 })
  const [isAnimating, setIsAnimating] = useState(false)

  // Sample data for different years
  const yearData = {
    1: { rendite: 8.5, usage: 65, savings: 2400 },
    2: { rendite: 12.3, usage: 78, savings: 3200 },
    3: { rendite: 15.8, usage: 85, savings: 4100 },
    4: { rendite: 18.2, usage: 88, savings: 4800 },
    5: { rendite: 21.5, usage: 92, savings: 5600 },
    10: { rendite: 35.7, usage: 95, savings: 8900 },
    15: { rendite: 52.3, usage: 97, savings: 12400 },
    20: { rendite: 68.9, usage: 98, savings: 15800 },
  }

  const years = [1, 2, 3, 4, 5, 10, 15, 20]

  useEffect(() => {
    setIsAnimating(true)
    const targetData = yearData[activeYear as keyof typeof yearData]

    // Animate values
    const duration = 1000
    const steps = 50
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeProgress = 1 - Math.pow(1 - progress, 3) // Ease out cubic

      setAnimatedValues({
        rendite: targetData.rendite * easeProgress,
        usage: targetData.usage * easeProgress,
        savings: targetData.savings * easeProgress,
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setIsAnimating(false)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [activeYear])

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#f3eee7] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#04252b] mb-6">
            Sehen Sie Ihr <span className="text-[#77be21]">fairMieterstrom</span> Potenzial wachsen
          </h2>
          <p className="text-xl text-[#04252b]/70 max-w-3xl mx-auto">
            Entdecken Sie, wie sich Ihre Rendite und Energieeffizienz über die Jahre entwickeln
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Interactive Graph */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#04252b] text-center">
                  Jahr {activeYear} - Projektentwicklung
                </h3>

                {/* Visual Graph */}
                <div className="space-y-6">
                  {/* Rendite Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-[#04252b]">Rendite</span>
                      <span className="text-2xl font-bold text-[#77be21]">{animatedValues.rendite.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-gradient-to-r from-[#77be21] to-[#6ba01d] h-4 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${Math.min(animatedValues.rendite * 1.5, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Usage Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-[#04252b]">Energieeffizienz</span>
                      <span className="text-2xl font-bold text-[#77be21]">{animatedValues.usage.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-gradient-to-r from-[#04252b] to-[#2a5a63] h-4 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${animatedValues.usage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Savings Display */}
                  <div className="bg-[#77be21]/10 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Euro className="w-6 h-6 text-[#77be21]" />
                      <span className="text-lg font-semibold text-[#04252b]">Jährliche Einsparungen</span>
                    </div>
                    <span className="text-3xl font-bold text-[#77be21]">
                      {animatedValues.savings.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Year Selection */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#04252b] text-center">Wählen Sie ein Jahr aus:</h4>
              <div className="grid grid-cols-4 gap-2">
                {years.map((year) => (
                  <Button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    variant={activeYear === year ? "default" : "outline"}
                    className={`${
                      activeYear === year
                        ? "bg-[#77be21] hover:bg-[#6ba01d] text-white"
                        : "border-[#77be21] text-[#77be21] hover:bg-[#77be21] hover:text-white"
                    } transition-all duration-300`}
                  >
                    Jahr {year}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Benefits */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <TrendingUp className="w-8 h-8 text-[#77be21]" />
                <h4 className="text-xl font-bold text-[#04252b]">Steigende Rendite</h4>
              </div>
              <p className="text-[#04252b]/70">
                Ihre Investition in fairMieterstrom zahlt sich über die Jahre immer mehr aus. Durch optimierte
                Energieverteilung und steigende Strompreise wächst Ihre Rendite kontinuierlich.
              </p>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <Zap className="w-8 h-8 text-[#77be21]" />
                <h4 className="text-xl font-bold text-[#04252b]">Optimierte Effizienz</h4>
              </div>
              <p className="text-[#04252b]/70">
                Mit der Zeit lernt das System die Verbrauchsmuster Ihrer Mieter kennen und optimiert die
                Energieverteilung für maximale Effizienz.
              </p>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <BarChart3 className="w-8 h-8 text-[#77be21]" />
                <h4 className="text-xl font-bold text-[#04252b]">Langfristige Vorteile</h4>
              </div>
              <p className="text-[#04252b]/70">
                fairMieterstrom ist eine Investition in die Zukunft. Je länger das System läuft, desto größer werden die
                Einsparungen für Sie und Ihre Mieter.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
