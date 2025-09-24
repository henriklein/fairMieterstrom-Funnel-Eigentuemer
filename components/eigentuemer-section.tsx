"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, Shield } from "lucide-react"

export function EigentumerSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Deutlich höhere Renditen",
      description:
        "Durch vereinfachte Bürokratie, Abrechnung mit den Mietern und Installation, können unsere Kunden mit dem fairMieterstrom Modell deutlich höhere Renditen erreichen, ohne gleichzeitig starke Verpflichtungen gegenüber ihren Mietern zu haben.",
    },
    {
      icon: DollarSign,
      title: "Geringe laufende Kosten",
      description:
        'Das normale Mieterstrom-Modell kostet pro Jahr 50–75€/Mieter – <span className="font-bold text-[#77be21]">fairMieterstrom ist kostenlos</span>',
    },
    {
      icon: Shield,
      title: "Kein Mehraufwand",
      description:
        "Mit fairMieterstrom entfällt jeglicher Verwaltungsaufwand. Von der Installation über den Betrieb bis zur Abrechnung wird alles übernommen – inklusive gesetzlicher Vorgaben und Fördermöglichkeiten. Eigentümer profitieren von einer Wertsteigerung ihrer Immobilie, ohne zusätzlichen Aufwand.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(119,190,33,0.1),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(7,71,66,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">
          Darum sind Eigentümer begeistert von <span className="text-[#074742]">fairMieterstrom</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group p-8 bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#77be21]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-4 relative z-10">
                <div className="relative">
                  <benefit.icon className="h-12 w-12 text-[#77be21] group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#77be21]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-balance group-hover:text-[#074742] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: benefit.description }}
                />
              </div>

              <div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#77be21]/20 via-transparent to-[#074742]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ padding: "1px" }}
              >
                <div className="w-full h-full rounded-lg bg-white/80 backdrop-blur-xl" />
              </div>
            </Card>
          ))}
        </div>

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
