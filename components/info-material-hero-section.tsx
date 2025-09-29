"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, Download, AlertCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function InfoMaterialHeroSection() {
  const [formData, setFormData] = useState({
    anrede: "",
    vorname: "",
    nachname: "",
    interesse: "",
    email: "",
    telefon: "",
    agb: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/infomaterial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Ein Fehler ist aufgetreten")
      }

      console.log("[v0] Form submitted successfully:", result)
      setIsSubmitted(true)
    } catch (err) {
      console.error("[v0] Form submission error:", err)
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (error) setError("")
  }

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
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/20 shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02] group-hover:bg-gradient-to-br group-hover:from-white/30 group-hover:to-white/15"></div>
              <div className="relative p-4 sm:p-6 lg:p-8 space-y-4 lg:space-y-6">
                <div className="space-y-3 lg:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground drop-shadow-sm">
                    <span
                      style={{ color: "#77be21" }}
                      className="bg-gradient-to-r from-[#77be21] to-[#8bc34a] bg-clip-text text-transparent font-extrabold tracking-tight"
                    >
                      fair
                    </span>
                    <span className="text-gray-800 font-extrabold tracking-tight">Mieterstrom</span>
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-700 text-balance font-medium">
                    Mieterstrom neu gedacht.
                  </h2>
                  <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-600 text-balance font-medium">
                    Planung, Installation & Betreuung für Mehrfamilienhäuser.
                  </p>
                </div>

                {/* USP Bullet Points */}
                <div className="space-y-3 lg:space-y-4">
                  {[
                    "Bis zu 15% gesicherte Rendite mit Ihrer PV-Anlage",
                    "Einfache Voraussetzungen und minimale Bürokratie",
                    "Wir übernehmen Kommunikation & Abrechnung mit den Mietern",
                    "Erfüllt alle aktuellen und zukünftigen gesetzlichen Anforderungen",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-2 lg:gap-3">
                      <Check className="h-5 w-5 lg:h-6 lg:w-6 text-[#77be21] mt-0.5 flex-shrink-0 drop-shadow-sm" />
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-800 font-medium">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <p className="text-lg font-semibold text-gray-800 mb-2">Kostenloses Infomaterial anfordern</p>
                  <p className="text-base text-gray-600">
                    Erhalten Sie detaillierte Informationen über fairMieterstrom und wie Sie von unserem innovativen
                    Mieterstrom-Konzept profitieren können.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:pl-8">
            <Card className="p-4 sm:p-6 lg:p-8 bg-card shadow-lg">
              <div className="space-y-4 lg:space-y-6">
                <div className="text-center">
                  <Download className="h-8 w-8 text-[#77be21] mx-auto mb-3" />
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-semibold text-balance text-card-foreground">
                    Infomaterial anfordern
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">Kostenlos und unverbindlich</p>
                </div>

                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-[#77be21] rounded-full flex items-center justify-center mx-auto">
                      <Check className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">Vielen Dank!</h4>
                    <p className="text-gray-600">Ihr Infomaterial wird in Kürze an Ihre E-Mail-Adresse gesendet.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="anrede">Anrede *</Label>
                        <Select onValueChange={(value) => handleInputChange("anrede", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Auswählen" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="herr">Herr</SelectItem>
                            <SelectItem value="frau">Frau</SelectItem>
                            <SelectItem value="divers">Divers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="interesse">Interesse als *</Label>
                        <Select onValueChange={(value) => handleInputChange("interesse", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Auswählen" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="eigentuemer">Eigentümer</SelectItem>
                            <SelectItem value="mieter">Mieter</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vorname">Vorname *</Label>
                        <Input
                          id="vorname"
                          type="text"
                          value={formData.vorname}
                          onChange={(e) => handleInputChange("vorname", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nachname">Nachname *</Label>
                        <Input
                          id="nachname"
                          type="text"
                          value={formData.nachname}
                          onChange={(e) => handleInputChange("nachname", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail-Adresse *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefon">Telefonnummer</Label>
                      <Input
                        id="telefon"
                        type="tel"
                        value={formData.telefon}
                        onChange={(e) => handleInputChange("telefon", e.target.value)}
                        placeholder="Optional"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agb"
                        checked={formData.agb}
                        onCheckedChange={(checked) => handleInputChange("agb", checked as boolean)}
                        required
                      />
                      <Label htmlFor="agb" className="text-sm text-gray-600 leading-relaxed">
                        Ich stimme den{" "}
                        <a href="#" className="text-[#77be21] hover:underline">
                          Allgemeinen Geschäftsbedingungen
                        </a>{" "}
                        zu und erkläre mich mit der Verarbeitung meiner Daten gemäß{" "}
                        <a href="#" className="text-[#77be21] hover:underline">
                          Datenschutzerklärung
                        </a>{" "}
                        einverstanden. *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.agb}
                      className="w-full bg-[#77be21] hover:bg-[#6ba01d] text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Wird gesendet..." : "Infomaterial anfordern"}
                    </Button>
                  </form>
                )}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-border">
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
      </div>
    </section>
  )
}
