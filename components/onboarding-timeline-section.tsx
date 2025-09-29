"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, FileText, Zap, Smartphone, HeadphonesIcon, ArrowRight } from "lucide-react"

export function OnboardingTimelineSection() {
  const timelineSteps = [
    {
      id: 1,
      title: "Datenschutzerklärung lesen",
      description: "Informieren Sie sich über die Datenverarbeitung und Ihre Rechte",
      icon: FileText,
      status: "pending",
      estimatedTime: "5 Min",
      action: "Lesen Sie die vollständigen Datenschutzinformationen",
    },
    {
      id: 2,
      title: "Einwilligung erteilen",
      description: "Füllen Sie das Einwilligungsformular aus und senden es ab",
      icon: CheckCircle,
      status: "pending",
      estimatedTime: "3 Min",
      action: "Formular ausfüllen und absenden",
    },
    {
      id: 3,
      title: "Installation & Inbetriebnahme",
      description: "Unser Techniker-Team installiert die Anlage und nimmt sie in Betrieb",
      icon: Zap,
      status: "waiting",
      estimatedTime: "1-2 Wochen",
      action: "Wir koordinieren den Termin mit Ihnen",
    },
    {
      id: 4,
      title: "App-Zugang erhalten",
      description: "Sie erhalten Ihre persönlichen Zugangsdaten per E-Mail",
      icon: Smartphone,
      status: "waiting",
      estimatedTime: "Nach Installation",
      action: "Automatisch nach Abschluss der Arbeiten",
    },
    {
      id: 5,
      title: "Solarstrom nutzen",
      description: "Ab sofort profitieren Sie von günstigem Solarstrom vom eigenen Dach",
      icon: HeadphonesIcon,
      status: "waiting",
      estimatedTime: "Sofort",
      action: "Automatisch - Sie müssen nichts tun",
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04252b] mb-6">
              Jetzt starten - Ihre nächsten Schritte
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Folgen Sie dieser einfachen Timeline, um Ihren fairMieterstrom zu aktivieren. Wir begleiten Sie durch
              jeden Schritt.
            </p>
            <div className="bg-[#77be21]/10 border border-[#77be21]/20 rounded-lg p-6 max-w-2xl mx-auto">
              <Clock className="w-8 h-8 text-[#77be21] mx-auto mb-4" />
              <p className="text-[#04252b] font-medium">
                Gesamtdauer: Nur wenige Minuten für Sie, der Rest läuft automatisch
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {timelineSteps.map((step, index) => (
              <Card
                key={step.id}
                className={`p-6 ${
                  step.status === "pending"
                    ? "border-[#77be21] bg-[#77be21]/5"
                    : step.status === "waiting"
                      ? "border-gray-200 bg-gray-50"
                      : "border-green-500 bg-green-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        step.status === "pending"
                          ? "bg-[#77be21] text-white"
                          : step.status === "waiting"
                            ? "bg-gray-300 text-gray-600"
                            : "bg-green-500 text-white"
                      }`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    {index < timelineSteps.length - 1 && <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-[#04252b]">
                        Schritt {step.id}: {step.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          step.status === "pending"
                            ? "bg-[#77be21]/20 text-[#77be21]"
                            : step.status === "waiting"
                              ? "bg-gray-200 text-gray-600"
                              : "bg-green-200 text-green-700"
                        }`}
                      >
                        {step.estimatedTime}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{step.action}</p>

                    {step.status === "pending" && step.id === 1 && (
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://pure-energy-germany.de/datenschutz" target="_blank" rel="noopener noreferrer">
                          Datenschutzerklärung lesen
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    )}

                    {step.status === "pending" && step.id === 2 && (
                      <Button
                        size="sm"
                        className="bg-[#77be21] hover:bg-[#77be21]/90"
                        onClick={() => document.getElementById("consent-form")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Zum Formular
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Next Steps Info */}
          <Card className="mt-12 p-8 bg-gradient-to-r from-[#04252b] to-[#04252b]/80 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Was passiert nach Ihrer Anmeldung?</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Bestätigung</h4>
                  <p className="text-sm opacity-90">Sie erhalten eine Bestätigung Ihrer Anmeldung per E-Mail</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Terminkoordination</h4>
                  <p className="text-sm opacity-90">Wir koordinieren die Installation mit Ihrem Vermieter</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Aktivierung</h4>
                  <p className="text-sm opacity-90">Nach der Installation erhalten Sie Ihren App-Zugang</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
