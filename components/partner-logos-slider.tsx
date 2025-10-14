import Image from "next/image"

export function PartnerLogosSlider() {
  const partnerLogos = [
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/686822a115b7b12958c7f9e2_Sixt.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229f44c420ffb7ff7665_KVB.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229f1bcd1918532531e9_Provinzial.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229fb4690d793ff934d8_Quantum.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229f8fc1b6fba111dd39_Tipico.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229fa930dde643070008_Hunkemo%CC%88ller.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229f81063e70c6f0c1f3_KIND.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229f1bcd1918532531d5_IBIS.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229f2991610966f5f2e4_Ernsting%27s%20Family.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229ffa9f5b95bce62d17_IU.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229f44c420ffb7ff763f_Trago%20Bank.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229fdb6d8d1fb8e7d54b_HKM.webp",
    "https://cdn.prod.website-files.com/6851230f794c51bed168c638/6868229f7f8efb226a3a75c2_R%2BV.webp",
  ]

  return (
    <section className="py-8 lg:py-12 px-4 bg-background border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground mb-6 lg:mb-8 text-sm lg:text-base">
          Vertrauen von namhaften Partnern
        </p>
        <div className="overflow-hidden">
          <div className="flex items-center space-x-8 lg:space-x-12 scroll-animation">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Partner Logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-8 sm:h-10 lg:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {partnerLogos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Partner Logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-8 sm:h-10 lg:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
