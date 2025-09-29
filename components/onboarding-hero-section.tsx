"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Sun, Zap, Leaf } from "lucide-react"

export function OnboardingHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/modern-house-with-solar-panels-on-roof-sunny-day.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#04252b]/90 via-[#04252b]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-[#77be21]/20 backdrop-blur-sm border border-[#77be21]/30 rounded-full px-6 py-3 mb-8">
            <CheckCircle className="w-5 h-5 text-[#77be21]" />
            <span className="text-sm font-medium">Willkommen bei fairMieterstrom</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Ihr Weg zum günstigen <span className="text-[#77be21]">Solarstrom</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            Liebe Mieterinnen und Mieter, Sie können ab sofort von günstigem, grünem Strom direkt vom eigenen Dach
            profitieren.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <Sun className="w-12 h-12 text-[#77be21] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Solarstrom vom Dach</h3>
              <p className="text-sm opacity-80">Direkt von Ihrer Hausanlage</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <Zap className="w-12 h-12 text-[#77be21] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Bis zu 25% sparen</h3>
              <p className="text-sm opacity-80">Deutlich günstiger als Netzstrom</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <Leaf className="w-12 h-12 text-[#77be21] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">100% nachhaltig</h3>
              <p className="text-sm opacity-80">Sauber und umweltfreundlich</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#77be21] hover:bg-[#77be21]/90 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById("table-of-contents")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jetzt loslegen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
            >
              Direkt zur Anmeldung
            </Button>
          </div>

          <p className="text-sm mt-8 opacity-70">
            Wir – das Team von Pure Energy Germany – freuen uns, Sie an Bord zu haben.
          </p>
        </div>
      </div>
    </section>
  )
}
