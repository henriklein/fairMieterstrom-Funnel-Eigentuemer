import { Card } from "@/components/ui/card"
import { X, Check, Award, Star } from "lucide-react"

export function VergleichSection() {
  const comparisons = [
    {
      category: "Bürokratie",
      traditional: "Genehmigung dauert im Schnitt 6–10 Monate, Genehmigung unsicher",
      plus: "Standardantrag wie normale Solaranlagen, Genehmigung in ca. 4 Wochen",
      traditionalIcon: X,
      plusIcon: Check,
    },
    {
      category: "Rendite",
      traditional: "Durch hohen Verwaltungs- und Abrechnungsaufwand minimiert",
      plus: "+15% durch minimale Bürokratie und geringen Abrechnungsaufwand",
      traditionalIcon: X,
      plusIcon: Check,
    },
    {
      category: "Laufende Kosten",
      traditional: "60–75€/Mieter pro Jahr",
      plus: "kostenfrei",
      traditionalIcon: X,
      plusIcon: Check,
    },
    {
      category: "Klassifizierung",
      traditional: "Als Energiehändler mit umfangreichen Verpflichtungen",
      plus: "Nur Verkauf von Solarstrom, kein Energiehändler-Status",
      traditionalIcon: X,
      plusIcon: Check,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(119,190,33,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(7,71,66,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.02)_49%,rgba(255,255,255,0.02)_51%,transparent_52%)] bg-[length:20px_20px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#77be21] to-[#074742] p-3 rounded-full">
              <Award className="h-6 w-6 text-white" />
              <Star className="h-4 w-4 text-white fill-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 text-balance">
            Mieterstrom vs. <span className="text-[#77be21]">fairMieterstrom</span>
          </h2>
          <p className="text-slate-300 text-lg">Der Unterschied, der den Unterschied macht</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="group p-8 bg-gradient-to-br from-red-950/80 to-red-900/60 border border-red-800/30 backdrop-blur-xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-8 text-center text-red-200 flex items-center justify-center gap-2">
                <X className="h-6 w-6" />
                Herkömmlicher Mieterstrom
              </h3>
              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className="space-y-2 p-4 rounded-lg bg-red-950/40 backdrop-blur-sm border border-red-800/20 hover:border-red-700/40 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <item.traditionalIcon className="h-5 w-5 text-red-400" />
                      <h4 className="font-semibold text-red-200">{item.category}</h4>
                    </div>
                    <p className="text-red-300 pl-7 text-sm leading-relaxed">{item.traditional}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="group p-8 bg-gradient-to-br from-emerald-950/80 to-teal-900/60 border border-emerald-700/30 backdrop-blur-xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#77be21]/20 to-[#074742]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-[#77be21] to-[#074742] px-3 py-1 rounded-full">
              <Award className="h-4 w-4 text-white" />
              <span className="text-white text-xs font-semibold">PREMIUM</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-8 text-center text-emerald-200 flex items-center justify-center gap-2">
                <Check className="h-6 w-6 text-[#77be21]" />
                <span className="text-[#77be21]">fairMieterstrom</span>
              </h3>
              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className="space-y-2 p-4 rounded-lg bg-emerald-950/40 backdrop-blur-sm border border-emerald-700/20 hover:border-[#77be21]/40 transition-colors duration-300 hover:shadow-lg hover:shadow-[#77be21]/10"
                  >
                    <div className="flex items-center gap-2">
                      <item.plusIcon className="h-5 w-5 text-[#77be21]" />
                      <h4 className="font-semibold text-emerald-200">{item.category}</h4>
                    </div>
                    <p className="text-emerald-300 pl-7 text-sm leading-relaxed">{item.plus}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#77be21]/10 via-transparent to-[#074742]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </Card>
        </div>
      </div>
    </section>
  )
}
