"use client"
import { Card } from "@/components/ui/card"
import { MapPin, Calculator, Wrench } from "lucide-react"

export function FoerderungenAnalyseSection() {
  const scrollToFormular = () => {
    const element = document.getElementById("formular")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 md:py-20 px-4 bg-white" id="analyse">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">So funktioniert unsere Analyse</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <MapPin className="h-12 w-12 text-[#77be21] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Schritt 1: Standort-Analyse</h3>
            <p className="text-gray-600">
              Wir machen erst eine Standortanalyse mit allen Förderungen und senden diese kostenfrei zu
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Calculator className="h-12 w-12 text-[#77be21] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Schritt 2: Projektanalyse</h3>
            <p className="text-gray-600">
              Solange Interesse vorhanden ist, machen wir eine genaue Projektanalyse und optimieren die beste
              Anlagenplanung und Förderanträge für beste Wirtschaftlichkeit und besprechen Finanzierungsmöglichkeiten
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Wrench className="h-12 w-12 text-[#77be21] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Schritt 3: Umsetzung</h3>
            <p className="text-gray-600">
              Bei Interesse Umsetzung aus einer Hand, auch das Management von Mietern, Rechnungsanträgen, etc. - Geld
              sparen
            </p>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-[#f3eee7] to-white rounded-3xl p-8 lg:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Beispielprojekt mit Pure Energy Germany</h3>
            <p className="text-lg text-gray-600 mb-8">Hier lassen wir Fakten sprechen!</p>

            <div className="max-w-4xl mx-auto">
              <img
                src="/images/design-mode/Screenshot%202025-09-29%20at%2016.47.42.png"
                alt="Beispielprojekt mit Pure Energy Germany - 6 Wohneinheiten, 29,59 kWP PV-Anlage, 15,42% Rendite"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#77be21] mb-2">15,42%</div>
                <p className="text-gray-600">Rendite (IRR)</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#77be21] mb-2">6,5 Jahre</div>
                <p className="text-gray-600">Amortisationszeit</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#77be21] mb-2">4.404€</div>
                <p className="text-gray-600">Durchschnittlicher Gewinn/Jahr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
