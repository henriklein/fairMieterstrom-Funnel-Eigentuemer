"use client"

import { useEffect } from "react"

export function FinalCTA() {
  useEffect(() => {
    // Fillout script is already loaded in HeroSection
  }, [])

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-8 text-balance">
            Fordern Sie jetzt unverbindlich weitere Informationen an
          </h2>

          <div className="bg-card rounded-lg shadow-lg p-6">
            <div
              style={{ width: "100%", height: "500px" }}
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
