import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export function MieterstromReviewsSection() {
  const reviews = [
    {
      name: "Christian W",
      initials: "C",
      rating: 5,
      date: "vor 5 Monaten",
      reviewCount: "1 Bewertung",
      photoCount: "1 Foto",
      text: "Vom ersten Kontakt über die Planung, Kontakt zu verschiedenen Handwerkern und Abschluss der Bauarbeiten bis zur Erledigung der administrativen Angelegenheiten immer sehr professionell aber auch freundliche und individuelle Leistung dieser noch jungen Firma. Ich wünsche weiterhin gutes Gelingen und das verdiente Wachstum!",
    },
    {
      name: "Michael S",
      initials: "M",
      rating: 5,
      date: "vor 3 Monaten",
      reviewCount: "2 Bewertungen",
      photoCount: "0 Fotos",
      text: "Sehr kompetente Beratung und reibungslose Umsetzung unseres Mieterstrom-Projekts. Das Team hat sich um alles gekümmert - von der Planung bis zur Inbetriebnahme. Unsere Mieter sind begeistert vom günstigen Strom!",
    },
    {
      name: "Andrea K",
      initials: "A",
      rating: 5,
      date: "vor 2 Monaten",
      reviewCount: "1 Bewertung",
      photoCount: "3 Fotos",
      text: "Endlich eine Lösung, die wirklich funktioniert! Die Installation verlief problemlos und der administrative Aufwand ist minimal. Kann ich jedem Eigentümer nur empfehlen.",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden sagen</h2>
          <p className="text-lg text-muted-foreground">Echte Bewertungen von zufriedenen Eigentümern</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                {/* Profile Picture */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#77be21] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                    {review.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base truncate">{review.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">
                      {review.reviewCount} · {review.photoCount}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed text-foreground line-clamp-6">{review.text}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">Bewertungen von Google</p>
        </div>
      </div>
    </section>
  )
}
