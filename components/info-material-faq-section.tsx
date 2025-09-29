"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

export function InfoMaterialFAQSection() {
  const scrollToHero = () => {
    const element = document.getElementById("hero")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const faqs = [
    {
      question: "Was kostet fairMieterstrom für mich als Eigentümer?",
      answer:
        "fairMieterstrom ist für Sie als Eigentümer komplett kostenfrei. Wir finanzieren die PV-Anlage vor und Sie profitieren von der garantierten Rendite ohne Eigenkapital-Einsatz.",
    },
    {
      question: "Wie hoch ist die garantierte Rendite?",
      answer:
        "Je nach Objekt und Ausrichtung können Sie mit einer Rendite von 8-15% rechnen. Die genaue Rendite ermitteln wir in einer kostenlosen Potentialanalyse für Ihr Objekt.",
    },
    {
      question: "Was passiert, wenn Mieter nicht teilnehmen möchten?",
      answer:
        "Kein Problem! Die Teilnahme am Mieterstrom ist für Mieter freiwillig. Nicht genutzter Strom wird ins öffentliche Netz eingespeist und vergütet.",
    },
    {
      question: "Welche Voraussetzungen muss mein Gebäude erfüllen?",
      answer:
        "Ihr Gebäude sollte mindestens 6 Wohneinheiten haben und eine geeignete Dachfläche (Süd-, Ost- oder Westausrichtung) besitzen. Wir prüfen die Eignung kostenlos.",
    },
    {
      question: "Wie läuft die Abrechnung mit den Mietern?",
      answer:
        "Wir übernehmen die komplette Abrechnung mit Ihren Mietern. Sie erhalten monatliche Reports und müssen sich um nichts kümmern.",
    },
    {
      question: "Was passiert bei einem Mieterwechsel?",
      answer:
        "Bei Mieterwechseln kümmern wir uns um die komplette Abwicklung. Neue Mieter können einfach in den Mieterstrom einsteigen oder ihren bisherigen Anbieter behalten.",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-foreground mb-4 lg:mb-6">
            Häufig gestellte <span className="text-[#77be21]">Fragen</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu fairMieterstrom.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-8 lg:mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4 lg:px-6">
              <AccordionTrigger className="text-left text-base lg:text-lg font-semibold text-foreground hover:no-underline py-4 lg:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm lg:text-base text-muted-foreground pb-4 lg:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <p className="text-base lg:text-lg text-muted-foreground mb-4 lg:mb-6">
            Haben Sie weitere Fragen? Fordern Sie unser detailliertes Infomaterial an.
          </p>
          <Button
            onClick={scrollToHero}
            size="lg"
            className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Infomaterial anfordern
            <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
