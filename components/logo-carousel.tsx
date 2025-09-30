"use client"

import Image from "next/image"

const logos = [
  { src: "/images/Enpal-Logo.jpg", alt: "Enpal" },
  { src: "/images/Zolar-Logo.jpg", alt: "Zolar" },
  { src: "/images/DZ4-Logo.jpg", alt: "DZ4" },
  { src: "/images/Yello-Logo.jpg", alt: "Yello" },
  { src: "/images/Eigensonne-Logo.jpg", alt: "Eigensonne" },
]

export function LogoCarousel() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center justify-center flex-wrap md:flex-nowrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop on larger screens */}
            {logos.map((logo, index) => (
              <div
                key={`dup-${index}`}
                className="hidden md:block flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
