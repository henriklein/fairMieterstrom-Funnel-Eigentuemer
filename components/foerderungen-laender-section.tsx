"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, CheckCircle } from "lucide-react"

export function FoerderungenLaenderSection() {
  const beispielFoerderungen = [
    {
      land: "Berlin",
      programm: "SolarPLUS",
      status: "aktiv",
      beschreibung: "Zuschüsse für PV-Anlagen und Speichersysteme",
    },
    {
      land: "Hessen",
      programm: "WIBank PV-Anlagen-Darlehen",
      status: "aktiv",
      beschreibung: "Kredit mit Zinszuschuss, neu aufgelegt",
    },
    {
      land: "Hamburg",
      programm: "Solar auf Gründächern",
      status: "aktiv",
      beschreibung: "Schwerpunkt auf Gründach-PV mit Förderung",
    },
  ]

  return (
    <section className="py-12 md:py-16 px-4 bg-[#f3eee7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">Länder- & Kommunalförderungen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bis zu 6.000 Förderungen auf allen Ebenen - das ist ein Beispiel von verschiedensten Förderungen die es
            gibt, aber noch viel mehr
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {beispielFoerderungen.map((foerderung, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-[#77be21]" />
                <h3 className="text-lg font-bold text-gray-800">{foerderung.land}</h3>
                <Badge className="ml-auto bg-green-100 text-green-800 flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  {foerderung.status}
                </Badge>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">{foerderung.programm}</h4>
              <p className="text-gray-600 text-sm">{foerderung.beschreibung}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#77be21]/10 to-[#77be21]/5 rounded-3xl p-6 lg:p-8 border border-[#77be21]/20">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Alle Förderungen schnell finden</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Alle Förderungen können durch das untige Fillout-Formular gefunden werden - schnell ausfüllen, kostenlos!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
