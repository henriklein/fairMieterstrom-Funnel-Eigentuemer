import { Card } from "@/components/ui/card"
import { Award, Users, Target, Zap, CheckCircle, Star } from "lucide-react"

export function DienstleistungenSection() {
  const services = [
    {
      icon: Award,
      title: "Qualität",
      description:
        "Qualität durch saubere Arbeit, Verlässlichkeit und Kommunikation auf Augenhöhe – vom ersten Gespräch bis zum letzten Kabel.",
      features: ["Saubere Handwerksarbeit", "Verlässliche Umsetzung", "Kommunikation auf Augenhöhe"],
    },
    {
      icon: Target,
      title: "Transparenz",
      description: "Transparenz in Planung, Abrechnung und Kommunikation – verständlich, fair und nachvollziehbar.",
      features: ["Klare Kostenstruktur", "Nachvollziehbare Abrechnung", "Offene Kommunikation"],
    },
    {
      icon: Users,
      title: "Kundenorientierung",
      description:
        "Sie als Eigentümer stehen an erster Stelle. Wir sorgen für stressfreie, strukturierte Abläufe und sind persönlich erreichbar.",
      features: ["Persönliche Betreuung", "Strukturierte Abläufe", "Stressfreie Umsetzung"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f3eee7] via-white to-[#f3eee7] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(119,190,33,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(7,71,66,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#77be21] to-[#074742] p-3 rounded-full">
              <Zap className="h-6 w-6 text-white" />
              <Star className="h-4 w-4 text-white fill-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#074742] mb-4 text-balance">
            Unsere <span className="text-[#77be21]">Dienstleistungen</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-pretty">
            Wir sind Pure Energy Germany – ein junges, ambitioniertes Unternehmen mit Wurzeln im Bauhandwerk und einem
            klaren Fokus: Wir ermöglichen die lokale Energiewende in Mehrfamilienhäusern.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#77be21]/30 hover:shadow-xl hover:shadow-[#77be21]/10 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#77be21]/5 to-[#074742]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#77be21] to-[#074742] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#074742] mb-4 group-hover:text-[#77be21] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-[#77be21] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#77be21]/10 to-[#074742]/10 rounded-2xl p-8 border border-[#77be21]/20">
            <h3 className="text-2xl font-semibold text-[#074742] mb-4">
              Unsere <span className="text-[#77be21]">Mission</span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-pretty">
              Wir arbeiten strukturiert, ehrlich und lösungsorientiert – mit dem Anspruch, Projekte schnell, sicher und
              persönlich umzusetzen. Wir übernehmen Verantwortung, kommunizieren klar und sorgen dafür, dass jeder
              Schritt nachvollziehbar und stressfrei abläuft – für Eigentümer wie für Mieter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
