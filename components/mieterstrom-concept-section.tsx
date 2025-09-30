export function MieterstromConceptSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(62,154,255,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
              Mieterstrom: Das Problem mit klassischen Lösungen
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Traditionelle Mieterstrommodelle sind komplex, teuer und aufwändig in der Umsetzung
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problems */}
            <div className="glass-card rounded-2xl p-6 border-2 border-destructive/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Klassische Vollversorgung</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Teurer Zählerschrankumbau erforderlich",
                  "Komplexe Marktkommunikation mit Messstellenbetreibern",
                  "Hohe laufende Betriebskosten",
                  "Aufwändiger Mieterwechsel",
                  "Mischstrom ohne klare Trennung",
                  "Langwierige Genehmigungsverfahren",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center text-destructive font-bold mt-0.5">
                      ✗
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="glass-card rounded-2xl p-6 border-2 border-success/30 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">WEESS GGV-Konzept</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Kein Zählerschrankumbau notwendig",
                  "Keine Marktkommunikation erforderlich",
                  "Minimale Betriebskosten durch Automatisierung",
                  "Problemloser, schneller Mieterwechsel",
                  "Physische Trennung von PV- und Netzstrom",
                  "Schnelle, unkomplizierte Installation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-success/30 flex items-center justify-center text-success font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why WEESS is better */}
          <div className="glass-strong rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Warum WEESS GGV besser ist</h3>
            <p className="text-base text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-6">
              Das WEESS PowerTower-Konzept ermöglicht die <strong>physische Trennung von PV- und Netzstrom</strong> –
              kein Mischstrom, volle Transparenz. Vermieter verkaufen ausschließlich Solarstrom aus der eigenen
              PV-Anlage, während Mieter ihre bestehenden Stromverträge für Netzstrom behalten. Die automatisierte
              Abrechnungssoftware macht die Verwaltung zum Kinderspiel – ohne laufende Kosten für den Betreiber.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground">Betreiberfreundlich</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground">Ideal für Bestandsgebäude</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground">Mieterstromzuschlag möglich</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
