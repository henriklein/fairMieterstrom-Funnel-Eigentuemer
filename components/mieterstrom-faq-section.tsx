"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Sparkles } from "lucide-react"

export function MieterstromFAQSection() {
  const faqs = [
    {
      question: "Was ist Mieterstrom?",
      answer:
        "Mieterstrom ist lokal erzeugter Strom – meist aus einer Photovoltaikanlage auf dem Dach des Mehrfamilienhauses – der direkt an die Mieter geliefert wird. Dadurch entfällt der teure Umweg über das öffentliche Netz, was die Stromkosten senkt.",
    },
    {
      question: "Was ist Gemeinschaftliche Gebäudeversorgung?",
      answer:
        "Die Gemeinschaftliche Gebäudeversorgung ist ein rechtlicher Rahmen, der es ermöglicht, Solarstrom direkt an Mieter zu verkaufen, ohne als Energiehändler zu agieren.",
    },
    {
      question: "Gibt es einen Unterschied zwischen Mieterstrom & gemeinschaftlicher Gebäudeversorgung?",
      answer:
        "Ja, die gemeinschaftliche Gebäudeversorgung bietet weniger bürokratische Hürden und vereinfachte Abrechnungsprozesse im Vergleich zum herkömmlichen Mieterstrom.",
    },
    {
      question: "Welche Vorteile bietet die Gemeinschaftliche Gebäudeversorgung?",
      answer:
        "Hauptvorteile sind: minimaler bürokratischer Aufwand, schnelle Genehmigungsverfahren, keine Energiehändler-Verpflichtungen und deutlich geringere laufende Kosten.",
    },
    {
      question: "Wie funktioniert die Abrechnung bei der Gemeinschaftlichen Gebäudeversorgung?",
      answer:
        "Die Abrechnung erfolgt vereinfacht und dauert nur etwa 15 Minuten pro Jahr, da komplexe Energiehändler-Verpflichtungen entfallen.",
    },
    {
      question: "Wie wird die Gemeinschaftliche Gebäudeversorgung reguliert?",
      answer:
        "Sie unterliegt weniger strengen Regulierungen als der herkömmliche Mieterstrom, da Sie nur Solarstrom verkaufen und nicht als Energiehändler agieren.",
    },
    {
      question: "Wie schnell kann man sowas umsetzen?",
      answer:
        "Die Genehmigung erfolgt wie bei normalen Solaranlagen und dauert in der Regel nur etwa 4 Wochen, statt 6-10 Monate beim herkömmlichen Mieterstrom.",
    },
    {
      question: "Welche rechtlichen Aspekte sind zu beachten?",
      answer:
        "Alle aktuellen und zukünftigen gesetzlichen Anforderungen werden von uns übernommen. Sie haben keine zusätzlichen rechtlichen Verpflichtungen.",
    },
    {
      question: "Was habe ich davon?",
      answer:
        "Sie erhalten bis zu 15% gesicherte Rendite, kostenfrei laufende Kosten und eine Wertsteigerung Ihrer Immobilie ohne Verwaltungsaufwand.",
    },
    {
      question: "Was haben meine Mieter davon?",
      answer:
        "Ihre Mieter profitieren von günstigerem, lokalem Solarstrom und tragen zur lokalen Energiewende bei, ohne zusätzliche Verpflichtungen.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(119,190,33,0.08),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(7,71,66,0.05),transparent_50%)]" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-[#77be21] to-[#074742] p-3 rounded-full">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-center mb-4 text-balance">Noch Unsicher?</h2>
          <p className="text-muted-foreground text-lg">Häufig gestellte Fragen</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl px-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#77be21]/5 to-[#074742]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6 relative z-10 group-hover:text-[#074742] transition-colors duration-300 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#77be21] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6 relative z-10">
                {faq.answer}
              </AccordionContent>

              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#77be21]/20 via-transparent to-[#074742]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ padding: "1px" }}
              >
                <div className="w-full h-full rounded-2xl bg-white/80 backdrop-blur-xl" />
              </div>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#77be21] hover:bg-[#77be21]/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              document.getElementById("kontakt")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            Beratungstermin direkt vereinbaren
          </Button>
        </div>
      </div>
    </section>
  )
}
