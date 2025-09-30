"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sun, Zap, Euro, TrendingUp } from "lucide-react"

export function TenantHeroSection() {
  const [savingsCounter, setSavingsCounter] = useState(0)
  const [solarPercentage, setSolarPercentage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Animate savings counter
    const savingsInterval = setInterval(() => {
      setSavingsCounter((prev) => {
        if (prev >= 200) {
          clearInterval(savingsInterval)
          return 200
        }
        return prev + 2
      })
    }, 20)

    // Animate solar percentage
    const solarInterval = setInterval(() => {
      setSolarPercentage((prev) => {
        if (prev >= 75) {
          clearInterval(solarInterval)
          return 75
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(savingsInterval)
      clearInterval(solarInterval)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen bg-[#f3eee7] flex items-center"
      style={{
        backgroundImage: `url('https://cdn.prod.website-files.com/6851230f794c51bed168c638/68d25ef6f02d0e1fc531e513_1.91-1_Haus_Frontal_Platten_Privacy.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#f3eee7]/80"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#77be21] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#04252b] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#77be21]/10 text-[#77be21] px-4 py-2 rounded-full text-sm font-medium">
                <Sun className="w-4 h-4" />
                Für Mieter - Sofort sparen!
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#04252b] leading-tight">
                Bis zu{" "}
                <span className="text-[#77be21] relative">
                  {savingsCounter}€<div className="absolute -top-2 -right-8 text-2xl">💰</div>
                </span>{" "}
                pro Jahr sparen
              </h1>

              <p className="text-xl text-[#04252b]/70 leading-relaxed">
                Mit <strong>fairMieterstrom</strong> beziehen Sie günstigen Solarstrom direkt vom Dach Ihres Hauses.
                Unser neuestes Energiekonzept ist günstiger, transparenter und nachhaltiger als alles, was es bisher
                gab.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-8 py-4 text-lg">
                Jetzt kostenlos informieren
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#77be21] text-[#77be21] hover:bg-[#77be21]/10 px-8 py-4 text-lg bg-transparent"
              >
                Erstberatung buchen
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#04252b]/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#77be21] rounded-full"></div>
                Kein Anbieterwechsel nötig
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#04252b] rounded-full"></div>
                100% unkompliziert
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#77be21] rounded-full"></div>
                Sofort verfügbar
              </div>
            </div>
          </div>

          {/* Right Interactive Cards */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Savings Card */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#77be21]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#77be21]/10 rounded-full flex items-center justify-center">
                    <Euro className="w-6 h-6 text-[#77be21]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#04252b]">Ihre Ersparnis</h3>
                    <p className="text-sm text-[#04252b]/70">Pro Jahr</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#77be21]">{savingsCounter}€</div>
                  <div className="text-sm text-[#04252b]/50">100-200€ Durchschnitt</div>
                </div>
              </div>
              <div className="w-full bg-[#04252b]/10 rounded-full h-2">
                <div
                  className="bg-[#77be21] h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(savingsCounter / 200) * 100}%` }}
                ></div>
              </div>
            </Card>

            {/* Solar Percentage Card */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#04252b]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#04252b]/10 rounded-full flex items-center justify-center">
                    <Sun className="w-6 h-6 text-[#04252b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#04252b]">Solarstrom-Anteil</h3>
                    <p className="text-sm text-[#04252b]/70">Vom eigenen Dach</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#04252b]">{solarPercentage}%</div>
                  <div className="text-sm text-[#04252b]/50">Grüne Energie</div>
                </div>
              </div>
              <div className="w-full bg-[#04252b]/10 rounded-full h-2">
                <div
                  className="bg-[#04252b] h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${solarPercentage}%` }}
                ></div>
              </div>
            </Card>

            {/* Quick Benefits */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#77be21]/20">
              <h3 className="font-semibold text-[#04252b] mb-4">Sofort verfügbar:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#77be21]" />
                  <span className="text-sm text-[#04252b]/70">Kein Papierkram, keine Wartezeiten</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#77be21]" />
                  <span className="text-sm text-[#04252b]/70">Maximale Kontrolle durch unsere App</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-[#04252b]" />
                  <span className="text-sm text-[#04252b]/70">100% grüne Energie vom eigenen Dach</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
