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
                src="/images/design-mode/68512d19b79e73d7ac83ae53_header-logo(1).webp"
                alt="Pure Energy Germany Logo"
                width={180}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="text-[#77be21] font-medium text-lg">Mieterstrom neu gedacht</p>
            </div>

            {/* Funnel Pages */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#77be21]">Seiten</h4>
              <div className="space-y-2">
                <a href="/" className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors">
                  Startseite
                </a>
                <a
                  href="/landing-renditenrechner-mieterstrom"
                  className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors"
                >
                  Mieterstrom, aber stressfrei!
                </a>
              </div>
            </div>

            {/* Navigation Links */}
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

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#77be21]">Rechtliches</h4>
              <div className="space-y-2">
                <a
                  href="https://www.pure-energy-germany.de/impressum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors"
                >
                  Impressum
                </a>
                <a
                  href="https://www.pure-energy-germany.de/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors"
                >
                  Datenschutz
                </a>
                <a
                  href="https://www.pure-energy-germany.de/agbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#f3eee7]/70 hover:text-[#77be21] transition-colors"
                >
                  AGBs
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#f3eee7]/20 text-center text-[#f3eee7]/70">
            <p>&copy; Pure Energy Germany 2025 - eine Marke der Oskomera GmbH</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
