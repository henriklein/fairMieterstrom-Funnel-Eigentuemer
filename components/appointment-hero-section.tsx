"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown } from "lucide-react"

export function AppointmentHeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
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
                Sprechen wir über Ihr <span className="text-[#77be21]">fairMieterstrom</span> Projekt
              </h1>

              <p className="text-xl md:text-2xl text-[#04252b]/80 leading-relaxed text-pretty">
                Vereinbaren Sie jetzt einen kostenlosen Beratungstermin mit unserem Experten Jan und erfahren Sie, wie
                fairMieterstrom Ihr Gebäude revolutionieren kann.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#77be21] rounded-full"></div>
                  <p className="text-lg text-[#04252b]/70">Kostenlose und unverbindliche Beratung</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#77be21] rounded-full"></div>
                  <p className="text-lg text-[#04252b]/70">Individuelle Projektanalyse für Ihr Gebäude</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#77be21] rounded-full"></div>
                  <p className="text-lg text-[#04252b]/70">Direkte Antworten auf all Ihre Fragen</p>
                </div>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Jetzt Termin vereinbaren
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right side - Jan's Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/68681412c4914a212e8638ba_Jan%20Graventein-BYhcH81Auev8WV5EcmlvT0Qry4db7n.png"
                    alt="Jan - Ihr persönlicher Ansprechpartner"
                    className="w-48 h-48 rounded-full object-cover border-4 border-white/50 shadow-lg"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-[#04252b]">Hey, ich bin Jan!</h3>
                  <p className="text-lg text-[#04252b]/80 leading-relaxed">
                    Ich freue mich darauf, mit Ihnen über Ihr fairMieterstrom Projekt zu sprechen und Ihnen zu zeigen,
                    wie Sie davon profitieren können.
                  </p>
                </div>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-[#77be21] hover:bg-[#6ba01d] text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Termin vereinbaren
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
