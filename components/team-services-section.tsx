"use client"

import Image from "next/image"

export function TeamServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Team */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">Unser Team</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 text-balance">
                Erfahrung trifft auf Innovation
              </p>

              <div className="mb-6">
                <Image
                  src="/images/team1.jpg"
                  alt="WEESS Team"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl hover-lift w-full"
                />
              </div>

              <div className="prose prose-lg mb-6">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Hinter WEESS steht ein interdisziplinäres Team aus Energie-Experten, Technikern und
                  Software-Spezialisten. Mit langjähriger Branchenerfahrung und einem klaren Blick für neue Ideen
                  verbinden wir bewährtes Know-how mit innovativen Lösungen – immer mit dem Ziel, Mieterstrom einfach,
                  sicher und wirtschaftlich zu machen.
                </p>
              </div>

              <div className="glass-strong rounded-xl p-4">
                <p className="text-foreground/90 text-sm leading-relaxed">
                  <strong className="text-foreground">Zusätzlich gesetzlich geregelte Sondermodelle:</strong>{" "}
                  Profitieren Sie von Förderungen nach §21 EEG und §42b EnWG für maximale Wirtschaftlichkeit.
                </p>
              </div>
            </div>

            {/* Right side - Services */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">Unsere Leistungen</h3>

              <div className="grid gap-5">
                {[
                  {
                    title: "Persönlicher Support",
                    description:
                      "Unsere erfahrenen Energieexperten stehen Ihnen jederzeit zur Seite und unterstützen bei allen Fragen.",
                    icon: "👨‍💼",
                    features: ["Direkter Ansprechpartner", "Schnelle Reaktionszeiten", "Expertise vor Ort"],
                  },
                  {
                    title: "Rechtssichere Abrechnungen",
                    description:
                      "Erstellen Sie Abrechnungen auf Knopfdruck oder lassen Sie sie vollautomatisch durch WEESS versenden.",
                    icon: "📄",
                    features: ["Automatisierte Prozesse", "Gesetzeskonform", "Transparente Dokumentation"],
                  },
                  {
                    title: "Digitale Verwaltung",
                    description:
                      "Unbegrenzte Verwaltung von Verträgen, Gebäuden, Anlagen und Verbrauchern – alles digital.",
                    icon: "💻",
                    features: ["Cloud-basiert", "Jederzeit verfügbar", "Intuitive Bedienung"],
                  },
                  {
                    title: "Regelmäßige Updates",
                    description:
                      "Bleiben Sie immer auf dem neuesten Stand – rechtlich aktuell und technisch optimiert.",
                    icon: "🔄",
                    features: ["Automatische Updates", "Neue Features", "Compliance-Sicherheit"],
                  },
                ].map((service, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-xl p-5 hover-lift group"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-foreground mb-2">{service.title}</h4>
                        <p className="text-muted-foreground leading-relaxed mb-3 text-sm">{service.description}</p>
                        <ul className="space-y-1.5">
                          {service.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2 text-foreground/90 text-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
