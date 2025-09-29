"use client"

import { Button } from "@/components/ui/button"
import { Check, Euro, TrendingUp, Shield } from "lucide-react"

export function FoerderungenHeroSection() {
  const scrollToFormular = () => {
    const element = document.getElementById("formular")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="py-16 md:py-20 lg:py-24 px-4 bg-background relative overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.prod.website-files.com/6851230f794c51bed168c638/68d25ef6f02d0e1fc531e513_1.91-1_Haus_Frontal_Platten_Privacy.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance text-foreground drop-shadow-sm">
                <span className="text-[#77be21] font-extrabold tracking-tight">Alle Förderungen</span>
                <span className="text-gray-800 font-extrabold tracking-tight"> für Ihr Energieprojekt</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 text-balance font-medium">
                Über 6.000 Förderungen auf Bundes-, Landes-, Kommunal- und regionaler Basis
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 text-balance font-medium">
                Wir analysieren kostenlos alle verfügbaren Förderungen für verschiedenste Projekte und sorgen für
                optimale Ausnutzung aller Zuschüsse und Vergütungen.
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={scrollToFormular}
              >
                Jetzt Kostenlose Voranalyse beantragen
              </Button>
            </div>
          </div>

          {/* Right side - Three boxes vertically stacked and smaller */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <Euro className="h-10 w-10 text-[#77be21] mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Bis zu 15% Rendite</h3>
              <p className="text-gray-600 text-sm">Durch optimale Kombination aller verfügbaren Förderungen</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <TrendingUp className="h-10 w-10 text-[#77be21] mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">20 Jahre garantiert</h3>
              <p className="text-gray-600 text-sm">EEG-Vergütung und Mieterstromzuschlag gesetzlich festgeschrieben</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <Shield className="h-10 w-10 text-[#77be21] mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Steuervorteile</h3>
              <p className="text-gray-600 text-sm">0% Umsatzsteuer auf PV-Anlagen und Einkommensteuerbefreiung</p>
            </div>
          </div>
        </div>

        {/* Why Now Section */}
        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30 mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">
            Warum gerade jetzt der perfekte Zeitpunkt ist
          </h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4">
              {[
                "Höchste Förderquoten seit Jahren verfügbar",
                "Neue BEG-Programme mit attraktiven Zuschüssen",
                "Mieterstromzuschlag wurde deutlich erhöht",
                "0% Umsatzsteuer macht Investition noch rentabler",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#77be21] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 font-medium">{point}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "KfW-Kredite mit Rekord-Niedrigzinsen",
                "Viele Länder haben neue Programme aufgelegt",
                "Kommunale Förderungen werden wieder ausgeschüttet",
                "fairMieterstrom optimiert alle Förderströme automatisch",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#77be21] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
