export function BenefitsSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-success/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-20 text-balance">
            Mehrwert für alle Beteiligten
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vermieter Benefits */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-success to-success/80 flex items-center justify-center text-3xl shadow-lg">
                  🏠
                </div>
                <h3 className="text-3xl font-bold text-primary">Ihr Mehrwert als Vermieter</h3>
              </div>

              {[
                {
                  title: "Zusätzliche Einnahmen",
                  description: "Direktvermarktung von Solarstrom und mögliche Förderungen wie der Mieterstromzuschlag.",
                  icon: "💰",
                },
                {
                  title: "Immobilienwert steigern",
                  description:
                    "Attraktivitätssteigerung durch nachhaltige Energieversorgung und moderne Infrastruktur.",
                  icon: "📈",
                },
                {
                  title: "Einfache Verwaltung",
                  description: "Standardisierte Prozesse und automatisierte Abrechnungslösungen sparen Zeit und Geld.",
                  icon: "⚙️",
                },
                {
                  title: "Rechtssicherheit",
                  description: "Alle rechtlichen Anforderungen werden automatisch erfüllt und dokumentiert.",
                  icon: "✅",
                },
              ].map((benefit, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 hover-lift group">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{benefit.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{benefit.title}</h4>
                      <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mieter Benefits */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-3xl shadow-lg">
                  👥
                </div>
                <h3 className="text-3xl font-bold text-primary">Was Mieter davon haben</h3>
              </div>

              {[
                {
                  title: "Günstiger Solarstrom",
                  description: "Zugang zu lokal erzeugtem Solarstrom direkt aus dem eigenen Gebäude zu fairen Preisen.",
                  icon: "☀️",
                },
                {
                  title: "Transparente Abrechnung",
                  description: "Der Anteil von Solar- und Netzstrom ist klar ersichtlich und nachvollziehbar.",
                  icon: "📊",
                },
                {
                  title: "Keine Umstellung",
                  description: "Keine Änderung bestehender Stromverträge erforderlich – alles aus einer Hand.",
                  icon: "🔌",
                },
                {
                  title: "Nachhaltigkeit",
                  description: "Aktiver Beitrag zum Klimaschutz durch Nutzung erneuerbarer Energien.",
                  icon: "🌱",
                },
              ].map((benefit, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 hover-lift group">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{benefit.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{benefit.title}</h4>
                      <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
