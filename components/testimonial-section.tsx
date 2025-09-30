"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Michael Weber",
      role: "Eigentümer, 24 Wohneinheiten",
      content:
        "Mit fairMieterstrom haben wir endlich eine Lösung gefunden, die wirklich funktioniert. Die Rendite ist deutlich höher als beim herkömmlichen Mieterstrom und der Aufwand praktisch null.",
      rating: 5,
    },
    {
      name: "Sandra Müller",
      role: "Eigentümerin, 18 Wohneinheiten",
      content:
        "Die Abrechnung dauert wirklich nur 15 Minuten im Jahr. Unsere Mieter sind zufrieden mit dem günstigen Solarstrom und wir haben eine sichere Zusatzrendite.",
      rating: 5,
    },
    {
      name: "Thomas Schmidt",
      role: "Eigentümer, 32 Wohneinheiten",
      content:
        "Nach jahrelangen Problemen mit dem klassischen Mieterstrom ist fairMieterstrom wie ein Befreiungsschlag. Endlich können wir die Vorteile von Solarstrom nutzen, ohne den bürokratischen Aufwand.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-[#f3eee7] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(119,190,33,0.08),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(7,71,66,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-balance text-[#04252b]">
            Was unsere Kunden über <span className="text-[#77be21]">fairMieterstrom</span> sagen
          </h2>
          <p className="text-xl text-[#04252b]/70 text-balance max-w-3xl mx-auto">
            Erfahrungen von Eigentümern, die bereits auf fairMieterstrom setzen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group p-8 bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#77be21]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-6 relative z-10">
                <div className="flex justify-center">
                  <Quote className="h-8 w-8 text-[#77be21]" />
                </div>

                <div className="flex justify-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#77be21] text-[#77be21]" />
                  ))}
                </div>

                <p className="text-[#04252b]/80 leading-relaxed text-center italic">"{testimonial.content}"</p>

                <div className="text-center pt-4 border-t border-[#04252b]/10">
                  <p className="font-semibold text-[#04252b]">{testimonial.name}</p>
                  <p className="text-sm text-[#04252b]/60">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
