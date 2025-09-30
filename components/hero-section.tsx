"use client"

import { useEffect } from "react"

export function HeroSection() {
  useEffect(() => {
    // Load Fillout script
    const script = document.createElement("script")
    script.src = "https://server.fillout.com/embed/v1/"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="relative pt-28 pb-16 md:pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-success animate-gradient opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(62,154,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(119,190,33,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-end">
          {/* Left side - Text content */}
          <div className="flex flex-col" style={{ minHeight: "550px" }}>
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance transition-all duration-1000 ease-out hover:scale-[1.005]">
                  Solar-Installateure aufgepasst:
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-accent via-success to-accent bg-clip-text text-transparent leading-tight text-balance animate-gradient bg-[length:200%_auto] transition-all duration-1000 ease-out hover:scale-[1.005]">
                  Mehr verdienen, weniger Aufwand
                </h2>
              </div>

              <div className="glass-strong rounded-2xl p-6 border-l-4 border-accent">
                <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                  WEESS vereinfacht Mieterstrom für jeden Installateur.
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Kostenlose Schulung für Ihr gesamtes Team",
                    "Rundum-Sorglos-Paket: Erst-Installation mit unserer Unterstützung vor Ort",
                    "Unser Partnernetzwerk unterstützt Ihren Kunden bei Finanzierung, Abwicklung mit Mietern und macht Ihnen den Abschluss leicht",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-success to-success/70 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        ✓
                      </span>
                      <span className="text-sm md:text-base text-foreground/90 pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <a
                href="#form"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent/90 text-white px-8 py-4 rounded-2xl font-bold text-lg hover-glow shadow-lg shadow-accent/30"
              >
                Jetzt Informationen anfordern
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Fillout form */}
          <div id="form" className="glass-card rounded-3xl shadow-2xl p-6 hover-lift">
            <div
              style={{ width: "100%", height: "550px" }}
              data-fillout-id="vqw3ehp2qqus"
              data-fillout-embed-type="standard"
              data-fillout-inherit-parameters
              data-fillout-dynamic-resize
            />
          </div>
        </div>
      </div>
    </section>
  )
}
