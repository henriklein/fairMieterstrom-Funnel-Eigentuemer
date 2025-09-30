export function VisionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">WEESS Mieterstrom</h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Ihr Partner, der Komplexität in Einfachheit verwandelt.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Energiewende vorantreiben</h3>
              <p className="text-muted-foreground">Gemeinsam gestalten wir eine nachhaltige Zukunft</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Einfachen Zugang schaffen</h3>
              <p className="text-muted-foreground">Mieterstrom für jeden zugänglich machen</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Nachhaltigkeit verbinden</h3>
              <p className="text-muted-foreground">Wirtschaftlichkeit und Komfort in Einklang bringen</p>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="#form"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Jetzt Informationen anfordern
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
