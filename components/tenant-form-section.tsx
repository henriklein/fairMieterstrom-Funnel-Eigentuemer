"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Calendar, MessageSquare, Send, CheckCircle, Users, Euro, Shield } from "lucide-react"

export function TenantFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    landlordContact: "",
    currentProvider: "",
    monthlyBill: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-[#f3eee7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#04252b] mb-6">
            Jetzt <span className="text-[#77be21]">durchstarten</span>
          </h2>
          <p className="text-xl text-[#04252b]/70 max-w-3xl mx-auto leading-relaxed">
            Fordern Sie kostenlos Informationen an oder buchen Sie direkt ein unverbindliches Beratungsgespräch. Wir
            helfen Ihnen auch dabei, Ihren Vermieter zu überzeugen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="info" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Informationen anfordern
              </TabsTrigger>
              <TabsTrigger value="consultation" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Beratungsgespräch buchen
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <Card className="p-8 bg-white border-[#04252b]/10">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Form */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#04252b] mb-6">Kostenlose Informationen anfordern</h3>

                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-[#77be21] mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-[#04252b] mb-2">Vielen Dank für Ihr Interesse!</h4>
                        <p className="text-[#04252b]/70">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              placeholder="Ihr vollständiger Name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">E-Mail *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              placeholder="ihre@email.de"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Telefon</Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              placeholder="+49 123 456789"
                            />
                          </div>
                          <div>
                            <Label htmlFor="monthlyBill">Monatliche Stromkosten</Label>
                            <Input
                              id="monthlyBill"
                              value={formData.monthlyBill}
                              onChange={(e) => handleInputChange("monthlyBill", e.target.value)}
                              placeholder="ca. 80€"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="address">Adresse der Wohnung *</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            placeholder="Straße, Hausnummer, PLZ, Ort"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="landlordContact">Vermieter-Kontakt (falls bekannt)</Label>
                          <Input
                            id="landlordContact"
                            value={formData.landlordContact}
                            onChange={(e) => handleInputChange("landlordContact", e.target.value)}
                            placeholder="Name oder Kontaktdaten des Vermieters"
                          />
                        </div>

                        <div>
                          <Label htmlFor="message">Nachricht</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            placeholder="Haben Sie spezielle Fragen oder Wünsche?"
                            rows={4}
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-[#77be21] hover:bg-[#6ba01d]">
                          <Send className="w-5 h-5 mr-2" />
                          Kostenlose Informationen anfordern
                        </Button>

                        <div className="bg-[#77be21]/5 border border-[#77be21]/20 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-[#77be21] mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm text-[#04252b]/80 font-medium mb-1">Datenschutz & Vertrauen</p>
                              <p className="text-sm text-[#04252b]/70">
                                Wir kontaktieren niemals Ihren Vermieter oder andere Personen ohne Ihre ausdrückliche
                                Zustimmung. Ihre Daten werden vertraulich behandelt und nur für die Beratung verwendet.
                              </p>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-[#04252b]/50 text-center">
                          * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                        </p>
                      </form>
                    )}
                  </div>

                  {/* Benefits Sidebar */}
                  <div className="space-y-6">
                    <Card className="p-6 bg-[#77be21]/5 border-[#77be21]/20">
                      <h4 className="font-semibold text-[#04252b] mb-4">Das erhalten Sie:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#77be21]" />
                          <span className="text-sm text-[#04252b]/80">Individuelle Potenzialanalyse</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#77be21]" />
                          <span className="text-sm text-[#04252b]/80">Konkrete Einsparungsberechnung</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#77be21]" />
                          <span className="text-sm text-[#04252b]/80">Unterstützung bei Vermieter-Gespräch</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#77be21]" />
                          <span className="text-sm text-[#04252b]/80">Alle Informationen zur Umsetzung</span>
                        </li>
                      </ul>
                    </Card>

                    <Card className="p-6 bg-[#04252b]/5 border-[#04252b]/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Euro className="w-6 h-6 text-[#77be21]" />
                        <h4 className="font-semibold text-[#04252b]">Ihr Sparpotenzial</h4>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#04252b] mb-2">100-200€</div>
                        <div className="text-sm text-[#04252b]/70">Durchschnittliche Ersparnis pro Jahr</div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-[#77be21]/5 border-[#77be21]/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-[#77be21]" />
                        <h4 className="font-semibold text-[#04252b]">Vermieter überzeugen</h4>
                      </div>
                      <p className="text-sm text-[#04252b]/70">
                        Wir unterstützen Sie mit überzeugenden Argumenten und einer professionellen Präsentation für
                        Ihren Vermieter.
                      </p>
                    </Card>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="consultation">
              <Card className="p-8 bg-white border-[#04252b]/10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#04252b] mb-4">Kostenloses Erstberatungsgespräch buchen</h3>
                  <p className="text-[#04252b]/70">
                    Sprechen Sie direkt mit unseren Experten und lassen Sie sich unverbindlich beraten.
                  </p>
                </div>

                {/* Fillout Embed for Consultation Booking */}
                <div className="bg-[#f3eee7] rounded-lg p-8 text-center">
                  <div className="max-w-2xl mx-auto">
                    <iframe
                      src="https://calendly.com/pure-energy-germany/beratungsgespraech"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      className="rounded-lg"
                      title="Beratungsgespräch buchen"
                    ></iframe>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <Card className="p-6 text-center border-[#04252b]/10">
                    <Calendar className="w-8 h-8 text-[#77be21] mx-auto mb-3" />
                    <h4 className="font-semibold text-[#04252b] mb-2">Flexibel</h4>
                    <p className="text-sm text-[#04252b]/70">Termine auch abends und am Wochenende möglich</p>
                  </Card>
                  <Card className="p-6 text-center border-[#04252b]/10">
                    <Phone className="w-8 h-8 text-[#04252b] mx-auto mb-3" />
                    <h4 className="font-semibold text-[#04252b] mb-2">Persönlich</h4>
                    <p className="text-sm text-[#04252b]/70">Direkter Kontakt zu unseren Experten, keine Hotline</p>
                  </Card>
                  <Card className="p-6 text-center border-[#04252b]/10">
                    <MessageSquare className="w-8 h-8 text-[#77be21] mx-auto mb-3" />
                    <h4 className="font-semibold text-[#04252b] mb-2">Unverbindlich</h4>
                    <p className="text-sm text-[#04252b]/70">Kostenlose Beratung ohne jede Verpflichtung</p>
                  </Card>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
