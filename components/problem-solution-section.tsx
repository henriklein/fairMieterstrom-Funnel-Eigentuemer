export function ProblemSolutionSection() {
  const problems = [
    {
      problem: "Bürokratie und komplizierte Abrechnung",
      description:
        "Viele Mieterstrom-Modelle scheitern an intransparenten Prozessen, manueller Abrechnung und einem hohen Abstimmungsaufwand mit Dienstleistern.",
      solution: "WEESS macht Abrechnung einfach und digital",
      solutionDetail:
        "Mit unserem vollautomatisierten Portal und der WEESS App werden Verbrauch, Abrechnung und Reporting in Echtzeit erledigt – klar, transparent und ohne Zusatzaufwand.",
    },
    {
      problem: "Unsichere gesetzliche Rahmenbedingungen",
      description:
        "Neue Anforderungen, komplizierte Gesetze und fehlende Standards sorgen dafür, dass Projekte ins Stocken geraten oder gar nicht umgesetzt werden.",
      solution: "WEESS schafft Rechtssicherheit",
      solutionDetail:
        "Unser Komplettsystem setzt aktuelle Vorgaben konsequent um und sorgt so für Planungssicherheit – Investoren, Verwalter und Eigentümer profitieren von einem rechtssicheren Modell.",
    },
    {
      problem: "Hoher Verwaltungsaufwand für Eigentümer und Verwalter",
      description:
        "Die Organisation von Mieterstrom bedeutet bisher: viele Ansprechpartner, hohe Komplexität und zusätzlicher Verwaltungsaufwand.",
      solution: "Kein Mehraufwand für Eigentümer & Verwaltung",
      solutionDetail:
        "Von Technik über Abrechnung bis Service kommt alles aus einer Hand – ein System, ein Portal, ein Partner. Das spart Zeit, Kosten und Nerven.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12 text-balance">
            Warum Mieterstrom scheitert – und wie WEESS das ändert
          </h2>

          <div className="space-y-8">
            {problems.map((item, index) => (
              <div key={index} className="bg-card rounded-lg shadow-md p-6 md:p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Problem */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-destructive text-2xl leading-none">✗</span>
                      <h3 className="text-xl font-semibold text-foreground">{item.problem}</h3>
                    </div>
                    <p className="text-muted-foreground pl-8">{item.description}</p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3 md:border-l md:border-border md:pl-6">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-2xl leading-none">✓</span>
                      <h3 className="text-xl font-semibold text-primary">{item.solution}</h3>
                    </div>
                    <p className="text-foreground pl-8">{item.solutionDetail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
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
