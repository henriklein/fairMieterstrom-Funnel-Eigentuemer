"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#04252b] text-[#f3eee7]">
      {/* Main Footer */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Company Info */}
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/68512d19b79e73d7ac83ae53_header-logo-QrQxzMpim3coCG5xVrazq1F0Sz7bv6.webp"
                alt="Pure Energy Germany Logo"
                width={180}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="text-[#77be21] font-medium text-lg">Mieterstrom neu gedacht</p>
            </div>

            {/* Für Mieter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#77be21]">Für Mieter</h4>
              <div className="space-y-2">
                <a href="/mieter" className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors">
                  Mieterstrom Info
                </a>
                <a href="/mieter/onboarding" className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors">
                  Mieter Onboarding
                </a>
                <a href="/berechner" className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors">
                  Ersparnis Berechner
                </a>
              </div>
            </div>

            {/* Für Eigentümer */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#77be21]">Für Eigentümer</h4>
              <div className="space-y-2">
                <a
                  href="/beratungsgespraech"
                  className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors"
                >
                  Beratungsgespräch
                </a>
                <a href="/infomaterial" className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors">
                  Infomaterial
                </a>
                <a href="/foerderungen" className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors">
                  Förderungen
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#77be21]">Navigation</h4>
              <div className="space-y-2">
                <a
                  href="https://www.pure-energy-germany.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors"
                >
                  Homepage
                </a>
                <a
                  href="https://www.pure-energy-germany.de/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors"
                >
                  Blog
                </a>
                <a
                  href="https://www.pure-energy-germany.de/uber-uns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors"
                >
                  Über uns
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#f3eee7]/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#f3eee7]/70">&copy; 2025 - eine Marke der Oskomera GmbH</p>
            <div className="flex gap-4 text-[#f3eee7]/70">
              <a
                href="https://www.pure-energy-germany.de/impressum"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#77be21] transition-colors"
              >
                Impressum
              </a>
              <span>|</span>
              <a
                href="https://www.pure-energy-germany.de/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#77be21] transition-colors"
              >
                Datenschutz
              </a>
              <span>|</span>
              <a
                href="https://www.pure-energy-germany.de/agbs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#77be21] transition-colors"
              >
                AGBs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
