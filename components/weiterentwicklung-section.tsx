"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function WeiterentwicklungSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-[#f3eee7] to-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-balance text-[#04252b]">
          So funktioniert <span style={{ color: "#074742" }}>fair</span>mieterstrom
        </h2>

        <div className="space-y-8 text-lg text-[#04252b]/70">
          <p className="text-balance">
            Das herkömmliche Mieterstrom-Konzept ist nicht perfekt: hoher bürokratischer Aufwand, langwierige Abrechnung
            mit den Mietern und volle Verantwortung gegenüber den Netzbetreibern. Das alles lässt Investoren & Besitzer
            verständlicherweise skeptisch werden.
          </p>

          <p className="text-balance text-[#04252b] font-medium">
            Mit <span style={{ color: "#074742" }}>fair</span>mieterstrom haben Sie all die guten Seiten des
            herkömmlichen Mieterstroms, ohne die Kopfschmerzen danach:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            "minimaler bürokratischer Aufwand",
            "Abrechnung mit Mietern in 15 Min/ Jahr",
            "keine Verpflichtungen: Sie verkaufen nur Solarstrom",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 rounded-full bg-[#77be21]/10">
                <Check className="h-8 w-8 text-[#77be21]" />
              </div>
              <p className="text-lg font-medium text-center text-balance text-[#04252b]">{feature}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-[#77be21] hover:bg-[#77be21]/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={scrollToContact}
        >
          Beratungstermin vereinbaren
        </Button>
      </div>
    </section>
  )
}
