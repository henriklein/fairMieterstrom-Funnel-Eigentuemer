import Image from "next/image"

export function PowerTowerSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(62,154,255,0.2),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              WEESS PowerTower Konzept
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-balance">
              Gemeinschaftliche Gebäudeversorgung (GGV) – Die intelligente Alternative
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Features - 2 columns */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Physische Trennung",
                  description:
                    "PV- und Netzstrom garantiert getrennt. Kein Mischstrom, volle Transparenz für alle Beteiligten.",
                  icon: "⚡",
                },
                {
                  title: "Betreiberfreundlich",
                  description:
                    "Selbstständige Abrechnung möglich, keine Marktkommunikation erforderlich. Minimaler Aufwand.",
                  icon: "📊",
                },
                {
                  title: "Ideal für Bestand",
                  description:
                    "Perfekt für Nachrüstung in Bestandsgebäuden und schnelle Umsetzung von Mieterstromprojekten.",
                  icon: "🏢",
                },
                {
                  title: "Vollversorgung",
                  description: "Vollständige Stromversorgung für alle Haushalte über einen zentralen Vertrag.",
                  icon: "🔌",
                },
                {
                  title: "Flexible Integration",
                  description: "Nahtlose Kombination von Photovoltaik und öffentlichem Netzstrom nach Bedarf.",
                  icon: "🔄",
                },
                {
                  title: "Förderungen nutzen",
                  description: "Profitieren Sie von gesetzlichen Förderungen wie dem Mieterstromzuschlag.",
                  icon: "💰",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="glass-strong rounded-xl p-5 hover-lift group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1 flex justify-center">
              <div className="relative hover-lift">
                <Image
                  src="/images/powertower-device.png"
                  alt="WEESS PowerTower Device"
                  width={300}
                  height={600}
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.weess-marketing.de/powertower"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-strong text-white px-8 py-4 rounded-2xl font-semibold text-base hover-glow"
            >
              Mehr über PowerTower erfahren
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
