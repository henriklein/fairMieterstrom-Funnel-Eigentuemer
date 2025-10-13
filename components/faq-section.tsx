import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Was ist Mieterstrom?",
      answer:
        "Mieterstrom ist ein Modell, bei dem Solarstrom direkt vor Ort erzeugt und an die Mieter im Gebäude verkauft wird. Dies ermöglicht günstigere Strompreise für Mieter und zusätzliche Einnahmen für Eigentümer.",
    },
    {
      question: "Wie unterscheidet sich WEESS von anderen Mieterstrom-Anbietern?",
      answer:
        "WEESS bietet ein vollautomatisiertes System aus einer Hand: Von der Installation über die Abrechnung bis zum Service. Wir übernehmen die gesamte Bürokratie und sorgen für Rechtssicherheit, während Sie sich auf Ihr Kerngeschäft konzentrieren können.",
    },
    {
      question: "Welche Kosten kommen auf mich zu?",
      answer:
        "Alle Kosten sind transparent und von Anfang an kalkulierbar. Es gibt keine versteckten Gebühren. Die genauen Kosten hängen von der Größe und Komplexität Ihres Projekts ab – kontaktieren Sie uns für ein individuelles Angebot.",
    },
    {
      question: "Wie lange dauert die Umsetzung eines Mieterstrom-Projekts mit WEESS?",
      answer:
        "Dank unserer optimierten Prozesse und der Übernahme aller bürokratischen Schritte können wir Projekte deutlich schneller umsetzen als herkömmliche Anbieter. Die genaue Dauer hängt vom Einzelfall ab.",
    },
    {
      question: "Benötige ich spezielle Vorkenntnisse?",
      answer:
        "Nein! Wir bieten kostenlose Schulungen für Ihr gesamtes Team an und unterstützen Sie bei der Erst-Installation vor Ort. Unser System ist so konzipiert, dass es einfach zu bedienen ist.",
    },
    {
      question: "Was passiert, wenn technische Probleme auftreten?",
      answer:
        "WEESS bietet einen umfassenden Service und Support. Bei technischen Problemen sind wir Ihr direkter Ansprechpartner und kümmern uns schnell um eine Lösung.",
    },
    {
      question: "Wie profitieren meine Kunden von WEESS?",
      answer:
        "Ihre Kunden profitieren von günstigerem Strom, einem vollautomatisierten System ohne Verwaltungsaufwand und der Rechtssicherheit durch ein professionelles Komplettsystem. Zudem unterstützt unser Partnernetzwerk bei Finanzierung und Mieterabwicklung.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12 text-balance">
            Häufig gestellte Fragen
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
