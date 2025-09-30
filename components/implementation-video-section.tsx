"use client"

import Script from "next/script"

export function ImplementationVideoSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Einfacher als je zuvor!</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-primary">So gelingt die Umsetzung</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Die Umsetzung des WEESS Mieterstrom-Konzepts ist super einfach! Wir erklären in 5 Schritten, wie auch Ihr
              Team in jedem Mehrfamilienhaus dieses System installieren kann, sodass Vermieter mehr Geld verdienen und
              Mieter günstigeren Strom erhalten.
            </p>
          </div>

          {/* Right video */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative rounded-2xl overflow-hidden bg-muted border border-white/10 shadow-2xl"
              style={{ width: "350px", height: "622px" }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <style>
                      wistia-player[media-id='4oqp8khmfa']:not(:defined) {
                        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/4oqp8khmfa/swatch');
                        display: block;
                        filter: blur(5px);
                      }
                    </style>
                    <wistia-player media-id="4oqp8khmfa" aspect="0.5625" style="width: 100%; height: 100%;"></wistia-player>
                  `,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/embed/4oqp8khmfa.js" strategy="lazyOnload" type="module" />
    </section>
  )
}
