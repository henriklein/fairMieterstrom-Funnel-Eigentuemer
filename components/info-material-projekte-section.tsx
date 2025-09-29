"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, MapPin, Users, Zap } from "lucide-react"
import Image from "next/image"

export function InfoMaterialProjekteSection() {
  const scrollToHero = () => {
    const element = document.getElementById("hero")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "Wohnanlage München-Schwabing",
      location: "München, Bayern",
      units: "48 Wohneinheiten",
      power: "120 kWp",
      image:
        "https://cdn.prod.website-files.com/6851230f794c51bed168c638/68d25ef6f02d0e1fc531e513_1.91-1_Haus_Frontal_Platten_Privacy.webp",
      description: "Moderne Wohnanlage mit optimaler Südausrichtung für maximale Solarerträge.",
    },
    {
      title: "Mehrfamilienhaus Berlin-Mitte",
      location: "Berlin",
      units: "24 Wohneinheiten",
      power: "85 kWp",
      image:
        "https://cdn.prod.website-files.com/6851230f794c51bed168c638/68d25ef6f02d0e1fc531e513_1.91-1_Haus_Frontal_Platten_Privacy.webp",
      description: "Saniertes Altbau-Ensemble mit innovativer Mieterstrom-Lösung.",
    },
    {
      title: "Neubau-Quartier Hamburg",
      location: "Hamburg",
      units: "72 Wohneinheiten",
      power: "180 kWp",
      image:
        "https://cdn.prod.website-files.com/6851230f794c51bed168c638/68d25ef6f02d0e1fc531e513_1.91-1_Haus_Frontal_Platten_Privacy.webp",
      description: "Nachhaltiges Wohnquartier mit integrierter Energieversorgung.",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-card-foreground mb-4 lg:mb-6">
            Erfolgreiche <span className="text-[#77be21]">fairMieterstrom</span> Projekte
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Über 200 realisierte Mieterstrom-Projekte in ganz Deutschland zeigen: fairMieterstrom funktioniert für
            Eigentümer und Mieter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 lg:h-56">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
                <h3 className="text-lg lg:text-xl font-semibold text-card-foreground">{project.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {project.units}
                  </div>
                  <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
                    <Zap className="h-4 w-4" />
                    {project.power}
                  </div>
                </div>
                <p className="text-sm lg:text-base text-muted-foreground">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToHero}
            size="lg"
            className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Infomaterial anfordern
            <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
