"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileCheck, Zap, Smartphone, ArrowRight } from "lucide-react"

export function TenantProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: MessageSquare,
      title: "Kontakt aufnehmen",
      description: "Einfach Formular ausfüllen oder direkt anrufen",
      details: ["Kostenlose Erstberatung", "Individuelle Bedarfsanalyse", "Klärung aller Fragen"],
    },
    {
      icon: FileCheck,
      title: "Prüfung & Planung",
      description: "Wir prüfen die Machbarkeit in Ihrem Gebäude",
      details: ["Technische Machbarkeit", "Wirtschaftlichkeitsanalyse", "Abstimmung mit Eigentümer"],
    },
    {
      icon: Zap,
      title: "Installation & Setup",
      description: "Professionelle Installation ohne Aufwand für Sie",
      details: ["Komplette Technik-Installation", "Digitale Anbindung", "Inbetriebnahme und Test"],
    },
    {
      icon: Smartphone,
      title: "Sofort sparen",
      description: "App installieren und direkt von günstigem Solarstrom profitieren",
      details: ["Echtzeit-Monitoring", "Transparente Abrechnung", "Direkter Support"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#04252b] mb-6">
            So einfach <span className="text-[#77be21]">funktioniert's</span>
          </h2>
          <p className="text-xl text-[#04252b]/70 max-w-3xl mx-auto leading-relaxed">
            In nur 4 einfachen Schritten zu günstigem Solarstrom. Kein Anbieterwechsel, kein Papierkram, kein Aufwand
            für Sie.
          </p>
        </div>

        {/* Process Steps - Simplified and more dynamic */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`p-6 cursor-pointer transition-all duration-300 ${
                activeStep === index
                  ? "bg-[#77be21]/5 border-[#77be21]/30 shadow-lg scale-105"
                  : "hover:shadow-md border-[#04252b]/10"
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index ? "bg-[#77be21]" : "bg-[#04252b]/10"
                  }`}
                >
                  {step.icon &&
                    (() => {
                      const IconComponent = step.icon
                      return (
                        <IconComponent
                          className={`w-8 h-8 ${activeStep === index ? "text-white" : "text-[#04252b]"}`}
                        />
                      )
                    })()}
                </div>
                <div
                  className={`w-8 h-8 mx-auto mb-4 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    activeStep === index ? "bg-[#77be21] text-white" : "bg-[#04252b]/10 text-[#04252b]"
                  }`}
                >
                  {index + 1}
                </div>
                <h3 className="font-semibold text-[#04252b] mb-2">{step.title}</h3>
                <p className="text-sm text-[#04252b]/70">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Step Details - More dynamic and engaging */}
        <Card className="p-8 bg-white border-[#04252b]/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#04252b] mb-4">
                Schritt {activeStep + 1}: {steps[activeStep].title}
              </h3>
              <p className="text-[#04252b]/70 mb-6 leading-relaxed">{steps[activeStep].description}</p>
              <ul className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#77be21] rounded-full"></div>
                    <span className="text-[#04252b]/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#77be21]/10 to-[#04252b]/10 rounded-2xl p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {(() => {
                    const IconComponent = steps[activeStep].icon
                    return IconComponent ? <IconComponent className="w-12 h-12 text-[#77be21]" /> : null
                  })()}
                </div>
                <Button
                  size="lg"
                  className="bg-[#77be21] hover:bg-[#6ba01d] text-white"
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                >
                  {activeStep === steps.length - 1 ? "Jetzt starten" : "Nächster Schritt"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
