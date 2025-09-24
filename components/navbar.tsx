"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/68512d19b79e73d7ac83ae53_header-logo-MW6zFcQ9r0tvVvFtc46OaDybTkLyh8.webp"
              alt="Pure Energy Germany Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-[#04252b] hover:text-[#77be21] transition-colors font-medium"
            >
              Vorteile
            </button>
            <button
              onClick={() => scrollToSection("vergleich")}
              className="text-[#04252b] hover:text-[#77be21] transition-colors font-medium"
            >
              Vergleich
            </button>
            <button
              onClick={() => scrollToSection("testimonial")}
              className="text-[#04252b] hover:text-[#77be21] transition-colors font-medium"
            >
              Testimonial
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-[#04252b] hover:text-[#77be21] transition-colors font-medium"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#04252b] hover:text-[#77be21] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-[#04252b] hover:text-[#77be21] transition-colors font-medium w-full text-left"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection("vergleich")}
                className="block px-3 py-2 text-[#04252b] hover:text-[#77be21] transition-colors font-medium w-full text-left"
              >
                Vergleich
              </button>
              <button
                onClick={() => scrollToSection("testimonial")}
                className="block px-3 py-2 text-[#04252b] hover:text-[#77be21] transition-colors font-medium w-full text-left"
              >
                Testimonial
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="block px-3 py-2 text-[#04252b] hover:text-[#77be21] transition-colors font-medium w-full text-left"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
