import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <Image src="/images/weess-logo.png" alt="WEESS Logo" width={100} height={35} className="h-8 w-auto" />

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link
              href="https://pure-energy-germany.de/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <span>|</span>
            <Link
              href="https://pure-energy-germany.de/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Datenschutz
            </Link>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} WEESS GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
