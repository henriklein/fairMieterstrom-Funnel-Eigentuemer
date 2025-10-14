"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

export function MieterstromHeroSection() {
  const [formLoaded, setFormLoaded] = useState(false)
  const [showFormPopup, setShowFormPopup] = useState(false)

  useEffect(() => {
    const loadFilloutScript = () => {
      if (document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
        return
      }

      const script = document.createElement("script")
      script.src = "https://server.fillout.com/embed/v1/"
      script.async = true
      document.head.appendChild(script)
    }

    loadFilloutScript()

    const checkFormLoad = () => {
      const formElement = document.querySelector('[data-fillout-id="9BTwJ8oWWrus"]')
      if (formElement && formElement.children.length > 0) {
        setFormLoaded(true)
      }
    }

    checkFormLoad()
    const interval = setInterval(checkFormLoad, 1000)

    setTimeout(() => {
      clearInterval(interval)
      if (!formLoaded) {
        console.log("[v0] Form embed failed to load, showing fallback button")
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [formLoaded])

  const scrollToContact = () => {
    const element = document.getElementById("kontakt")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openFormPopup = () => {
    setShowFormPopup(true)
  }

  return (
    <section
      className="py-12 md:py-16 lg:py-20 px-4 bg-background relative overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.prod.website-files.com/6851230f794c51bed168c638/68d25ef6f02d0e1fc531e513_1.91-1_Haus_Frontal_Platten_Privacy.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/20 shadow-2xl"></div>
              <div className="relative p-4 sm:p-6 lg:p-8 space-y-4 lg:space-y-6">
                <div className="space-y-3 lg:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground drop-shadow-sm">
                    Mieterstrom, aber stressfrei!
                  </h1>
                  <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-700 text-balance font-medium">
                    Planung, Installation & Betreuung für Mehrfamilienhäuser und Gewerbe.
                  </p>
                </div>

                <div className="space-y-3 lg:space-y-4">
                  {[
                    "Bis zu 15% gesicherte Rendite mit Ihrer PV-Anlage",
                    "Einfache Vorraussetzungen und minimale Bürokratie",
                    "Wir übernehmen Kommunikation & Abrechnung mit den Mietern",
                    "Erfüllt alle aktuellen und zukünftigen gesetzliche Anforderungen",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-2 lg:gap-3">
                      <Check className="h-5 w-5 lg:h-6 lg:w-6 text-[#77be21] mt-0.5 flex-shrink-0 drop-shadow-sm" />
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-800 font-medium">{point}</p>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={scrollToContact}
                >
                  Beratungstermin direkt vereinbaren
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="p-4 sm:p-6 lg:p-8 bg-card shadow-lg">
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-xl sm:text-xl lg:text-2xl font-semibold text-center text-balance text-card-foreground">
                  Kostenlose Beratung anfragen
                </h3>

                {!formLoaded && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Formular lädt nicht? Kein Problem!</p>
                    <Button
                      onClick={openFormPopup}
                      className="bg-[#77be21] hover:bg-[#6ba01d] text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Beratungsformular öffnen
                    </Button>
                  </div>
                )}

                <div
                  style={{
                    width: "100%",
                    height: "430px",
                    minHeight: "430px",
                    maxHeight: "430px",
                    overflow: "hidden",
                  }}
                  className="sm:h-[430px] lg:h-[430px]"
                  data-fillout-id="9BTwJ8oWWrus"
                  data-fillout-embed-type="standard"
                  data-fillout-inherit-parameters
                  data-fillout-dynamic-resize
                  data-fillout-redirect-url={`${typeof window !== "undefined" ? window.location.origin : ""}/danke`}
                />
              </div>
            </Card>
          </div>

          {showFormPopup && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setShowFormPopup(false)}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg transition-all"
                >
                  ✕
                </button>
                <iframe
                  src="https://forms.fillout.com/t/9BTwJ8oWWrus"
                  className="w-full h-[80vh]"
                  frameBorder="0"
                  title="Beratungsformular"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
