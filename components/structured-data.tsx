import Script from "next/script"

interface StructuredDataProps {
  type: "homepage" | "calculator" | "consultation" | "infomaterial" | "tenant"
}

export function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Pure Energy Germany",
      alternateName: "fairMieterstrom",
      url: "https://fairmieterstrom.pure-energy-germany.de",
      logo: "https://cdn.prod.website-files.com/6851230f794c51bed168c638/68512d19b79e73d7ac83ae53_header-logo.webp",
      description:
        "Mieterstrom neu gedacht. Mit fairMieterstrom schaffen Sie ein lukratives Investment ohne zusätzlichen Aufwand oder bürokratischen Albtraum.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "DE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "German",
      },
      sameAs: ["https://pure-energy-germany.de"],
    }

    switch (type) {
      case "homepage":
        return [
          baseOrganization,
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "fairMieterstrom",
            url: "https://fairmieterstrom.pure-energy-germany.de",
            description:
              "Mieterstrom neu gedacht. Mit fairMieterstrom schaffen Sie ein lukratives Investment ohne zusätzlichen Aufwand oder bürokratischen Albtraum.",
            publisher: {
              "@type": "Organization",
              name: "Pure Energy Germany",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "fairMieterstrom",
            description: "Mieterstrom-Lösungen für Mehrfamilienhäuser mit bis zu 15% gesicherter Rendite",
            provider: {
              "@type": "Organization",
              name: "Pure Energy Germany",
            },
            areaServed: "DE",
            serviceType: "Mieterstrom",
            offers: {
              "@type": "Offer",
              description: "Bis zu 15% gesicherte Rendite mit PV-Anlage für Mehrfamilienhäuser",
            },
          },
        ]

      case "calculator":
        return [
          baseOrganization,
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "fairMieterstrom Berechner",
            url: "https://fairmieterstrom.pure-energy-germany.de/berechner",
            description: "Kostenloser Projektvoranalyse-Tool zur Berechnung des fairMieterstrom Potenzials",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              description: "Kostenlose Projektvoranalyse",
            },
          },
        ]

      case "consultation":
        return [
          baseOrganization,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "fairMieterstrom Beratungstermin",
            description: "Kostenloser Beratungstermin mit Experten für fairMieterstrom",
            provider: {
              "@type": "Organization",
              name: "Pure Energy Germany",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              description: "Kostenlose Beratung",
            },
          },
        ]

      case "tenant":
        return [
          baseOrganization,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "fairMieterstrom für Mieter",
            description: "Günstiger Solarstrom direkt vom Gebäudedach für Mieter - bis zu 200€ jährlich sparen",
            provider: {
              "@type": "Organization",
              name: "Pure Energy Germany",
            },
            audience: {
              "@type": "Audience",
              audienceType: "Mieter",
            },
            offers: {
              "@type": "Offer",
              description: "Bis zu 200€ jährliche Ersparnis bei Stromkosten",
            },
          },
        ]

      default:
        return [baseOrganization]
    }
  }

  const structuredData = getStructuredData()

  return (
    <>
      {structuredData.map((data, index) => (
        <Script
          key={index}
          id={`structured-data-${type}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}
    </>
  )
}
