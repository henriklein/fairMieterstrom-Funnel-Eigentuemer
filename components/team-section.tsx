import Image from "next/image"

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Unser Team</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance">
            Erfahrung trifft auf Innovation
          </p>

          <div className="prose prose-lg mx-auto text-foreground mb-12">
            <p className="text-muted-foreground leading-relaxed">
              Hinter WEESS steht ein interdisziplinäres Team aus Energie-Experten, Technikern und Software-Spezialisten.
              Mit langjähriger Branchenerfahrung und einem klaren Blick für neue Ideen verbinden wir bewährtes Know-how
              mit innovativen Lösungen – immer mit dem Ziel, Mieterstrom einfach, sicher und wirtschaftlich zu machen.
            </p>
          </div>

          <div className="flex justify-center">
            <Image src="/images/team1.jpg" alt="WEESS Team" width={800} height={500} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
