export function ComparisonSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              PowerTower vs. Klassische Vollversorgung
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto text-balance">
              Effiziente Lösungen für Ihre Mieterstromprojekte im Vergleich
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* PowerTower */}
            <div className="glass-card rounded-3xl p-8 md:p-10 border-2 border-accent/30 hover-lift shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-3xl">
                  ⚡
                </div>
                <h3 className="text-3xl font-bold text-primary">WEESS PowerTower</h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Minimaler Betriebsaufwand",
                    description: "Automatisierte Abrechnung ohne laufende Kosten. Alles läuft im Hintergrund.",
                  },
                  {
                    title: "Keine Umbaukosten",
                    description: "Kein aufwändiger Zählerschrankumbau – bestehende Infrastruktur bleibt erhalten.",
                  },
                  {
                    title: "Flexibler Mieterwechsel",
                    description: "Mieterwechsel sind problemlos und schnell umsetzbar, ohne bürokratischen Aufwand.",
                  },
                  {
                    title: "Bestehende Verträge",
                    description: "Stromverträge für Reststrom bleiben erhalten und können weiter genutzt werden.",
                  },
                  {
                    title: "Transparente Abrechnung",
                    description: "Faire Abrechnung des Solarstroms direkt mit dem Vermieter.",
                  },
                  {
                    title: "Keine baulichen Änderungen",
                    description: "Keine zusätzlichen Messgeräte in der Wohnung erforderlich.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-success to-success/70 flex items-center justify-center text-white text-sm font-bold mt-1 group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Klassische Vollversorgung */}
            <div className="glass-card rounded-3xl p-8 md:p-10 border-2 hover-lift shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center text-3xl">
                  ⚙️
                </div>
                <h3 className="text-3xl font-bold text-foreground">Klassische Vollversorgung</h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Komplexe Verträge",
                    description: "Individuelle Stromlieferverträge mit jedem Mieter für kombinierte Versorgung.",
                  },
                  {
                    title: "Messstellenbetreiber",
                    description: "Zusätzlicher Dienstleister für Installation, Wartung und Datenübermittlung nötig.",
                  },
                  {
                    title: "Aufwändige Organisation",
                    description: "Verwaltung des Messkonzepts und Anmeldung bei mehreren Behörden erforderlich.",
                  },
                  {
                    title: "Laufende Abrechnungen",
                    description: "Kontinuierliche Weitergabe der Kosten für Solar- und Netzstrom an Mieter.",
                  },
                  {
                    title: "Rechtliche Komplexität",
                    description: "Einhaltung von EEG, StromGVV und weiteren Vorgaben erforderlich.",
                  },
                  {
                    title: "Höherer Zeitaufwand",
                    description: "Mehr Verwaltungsaufwand und Koordination mit verschiedenen Parteien.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-bold mt-1">
                      •
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 glass-strong px-8 py-4 rounded-2xl">
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <p className="text-sm text-foreground/60">Kontakt</p>
                <p className="font-bold text-primary">+49 1521 1448643</p>
                <p className="text-sm text-accent">s.zare@eu.weess.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
