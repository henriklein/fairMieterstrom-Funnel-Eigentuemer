"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Sindelfingen: 9 Wohneinheiten",
    description:
      "In Sindelfingen versorgt ein WEESS-System 9 Wohneinheiten zuverlässig mit lokal erzeugtem Strom. Bewohner profitieren von geringeren Energiekosten, während die Immobilie durch nachhaltige Energieversorgung an Wert gewinnt.",
    image: "/images/project-sindelfingen.png",
  },
  {
    title: "Baden-Württemberg: 10 Wohneinheiten",
    description:
      "Ein Projekt mit 10 Wohneinheiten in Baden-Württemberg zeigt, wie einfach sich Mieterstrom skalieren lässt. Dank WEESS erhalten Mieter sauberen, bezahlbaren Strom – Eigentümer sichern sich zugleich ein zukunftsfähiges Energiekonzept.",
    image: "/images/project-baden-wurttemberg.png",
  },
  {
    title: "Nürtingen: 5 Wohneinheiten",
    description:
      "In Nürtingen wurde ein Mehrfamilienhaus mit 5 Wohneinheiten erfolgreich mit Mieterstrom ausgestattet. Das System sorgt für mehr Unabhängigkeit vom Netz und macht die Energiewende direkt im Alltag erlebbar.",
    image: "/images/project-nurtingen.png",
  },
  {
    title: "Leverkusen: 4 Wohneinheiten",
    description:
      "Auch kleinere Projekte profitieren: In Leverkusen nutzen 4 Wohneinheiten die Vorteile des WEESS-Komplettsystems. Die Bewohner genießen transparente Abrechnung und nachhaltigen Strom – ganz ohne zusätzlichen Verwaltungsaufwand.",
    image: "/images/project-leverkusen.png",
  },
]

export function ProjectsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate if section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollDelta = window.scrollY - lastScrollY.current
        const scrollSpeed = Math.abs(scrollDelta)

        // Update progress based on scroll direction and speed
        setScrollProgress((prev) => {
          const change = (scrollDelta / 100) * (1 + scrollSpeed / 50)
          const newProgress = prev + change

          // Wrap around
          if (newProgress >= projects.length) {
            setCurrentIndex(0)
            return 0
          } else if (newProgress < 0) {
            setCurrentIndex(projects.length - 1)
            return projects.length - 1
          }

          const newIndex = Math.floor(newProgress)
          if (newIndex !== currentIndex && newIndex >= 0 && newIndex < projects.length) {
            setCurrentIndex(newIndex)
          }

          return newProgress
        })
      }

      lastScrollY.current = window.scrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [currentIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setScrollProgress(index)
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % projects.length
    goToSlide(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length
    goToSlide(newIndex)
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bereits umgesetzte Projekte</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Slideshow container */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted/30 backdrop-blur-xl border border-white/10">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 h-full p-8 md:p-12">
                  {/* Image */}
                  <div className="relative rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{project.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
