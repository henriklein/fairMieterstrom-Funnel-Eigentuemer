import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#04252b] text-[#f3eee7]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Image
              src="https://cdn.prod.website-files.com/6851230f794c51bed168c638/68512d19b79e73d7ac83ae53_header-logo.webp"
              alt="Pure Energy Germany Logo"
              width={180}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-[#f3eee7]/70">Mieterstrom neu gedacht</p>
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
          <p>&copy; Pure Energy Germany 2025</p>
        </div>
      </div>
    </footer>
  )
}
