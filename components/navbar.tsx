import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Image
          src="/images/weess-logo.png"
          alt="WEESS Logo"
          width={80}
          height={28}
          className="h-7 w-auto hover-scale"
          priority
        />
        <a
          href="#form"
          className="px-5 py-2 bg-accent text-accent-foreground rounded-full font-semibold text-sm hover-glow transition-all"
        >
          Beratung anfragen
        </a>
      </div>
    </nav>
  )
}
