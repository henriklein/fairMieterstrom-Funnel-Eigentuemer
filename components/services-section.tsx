export function ServicesSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/80 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(119,190,33,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Unsere Leistungen
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance">
              Alles was Sie für erfolgreiches Mieterstrom brauchen – aus einer Hand
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                description: "Bleiben Sie immer auf dem neuesten Stand – rechtlich aktuell und technisch optimiert.",
                icon: "🔄",
                features: ["Automatische Updates", "Neue Features", "Compliance-Sicherheit"],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="glass-strong rounded-3xl p-8 hover-lift group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/90">
                      <span className="w-2 h-2 rounded-full bg-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                <strong className="text-white">Zusätzlich gesetzlich geregelte Sondermodelle:</strong> Profitieren Sie
                von Förderungen nach §21 EEG und §42b EnWG für maximale Wirtschaftlichkeit.
              </p>
              <a
                href="#form"
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover-scale shadow-lg"
              >
                Jetzt beraten lassen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
