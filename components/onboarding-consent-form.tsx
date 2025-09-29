"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Shield, FileText, Mail, CheckCircle, AlertCircle, ExternalLink } from "lucide-react"

export function OnboardingConsentForm() {
  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    address: "",
    apartmentNumber: "",
    postalCode: "",
    city: "",
    email: "",
    language: "deutsch",
    dataProcessingConsent: false,
    marketingConsent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.address &&
    formData.apartmentNumber &&
    formData.postalCode &&
    formData.city &&
    formData.email &&
    formData.dataProcessingConsent

  if (isSubmitted) {
    return (
      <section id="consent-form" className="py-20 bg-[#f3eee7]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-white text-center">
              <CheckCircle className="w-16 h-16 text-[#77be21] mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#04252b] mb-4">Vielen Dank für Ihre Anmeldung!</h2>
              <p className="text-gray-600 mb-6">
                Ihre Einwilligung wurde erfolgreich übermittelt. Sie erhalten in Kürze eine Bestätigung per E-Mail mit
                allen weiteren Informationen zum Ablauf.
              </p>
              <div className="bg-[#77be21]/10 p-4 rounded-lg mb-6">
                <p className="text-sm text-[#04252b]">
                  <strong>Nächste Schritte:</strong> Wir koordinieren die Installation mit Ihrem Vermieter und
                  informieren Sie über den Terminplan.
                </p>
              </div>
              <Button size="lg" className="bg-[#77be21] hover:bg-[#77be21]/90" asChild>
                <a href="/mieter">Zurück zur Mieter-Seite</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="consent-form" className="py-20 bg-[#f3eee7]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04252b] mb-6">Datenschutz & Zustimmung</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Warum wir Ihre Rückmeldung brauchen – und wie Sie ganz einfach zustimmen können.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Information Card */}
            <Card className="p-6 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-[#77be21] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#04252b] mb-2">
                    Datenschutzinformationen zur Teilnahme an fairMieterstrom
                  </h3>
                  <p className="text-sm text-gray-600">
                    Zur ordnungsgemäßen Durchführung des fairMieterstrom-Modells sowie zur vertraglichen und technischen
                    Betreuung ist die Verarbeitung bestimmter personenbezogener Daten erforderlich.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-[#f3eee7] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#04252b] mb-2">Welche Daten werden verarbeitet?</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ihre Kontaktdaten (Name, Adresse, E-Mail)</li>
                    <li>• Verbrauchsdaten Ihrer Wohnung</li>
                    <li>• Technische Zuordnungen zur Anlage</li>
                  </ul>
                </div>

                <div className="bg-[#f3eee7] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#04252b] mb-2">Wer verarbeitet die Daten?</h4>
                  <p className="text-sm text-gray-600">
                    Die Verarbeitung erfolgt durch die Oskomera GmbH (Marke: Pure Energy Germany) sowie durch unseren
                    Auftragsverarbeiter OpenHandwerk GmbH gemäß Art. 28 DSGVO.
                  </p>
                </div>

                <div className="bg-[#f3eee7] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#04252b] mb-2">Ihre Rechte</h4>
                  <p className="text-sm text-gray-600">
                    Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch. Die Einwilligung
                    können Sie jederzeit widerrufen.
                  </p>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="https://pure-energy-germany.de/datenschutz" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Vollständige Datenschutzerklärung lesen
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </Card>

            {/* Form Card */}
            <Card className="p-6 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-[#04252b] mb-2">Einwilligung zur Datenverarbeitung</h3>
                  <p className="text-sm text-gray-600">Gemäß Art. 6 Abs. 1 lit. a DSGVO</p>
                </div>

                {/* Salutation */}
                <div>
                  <Label className="text-sm font-medium text-[#04252b]">Anrede *</Label>
                  <RadioGroup
                    value={formData.salutation}
                    onValueChange={(value) => setFormData({ ...formData, salutation: value })}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="herr" id="herr" />
                      <Label htmlFor="herr" className="text-sm">
                        Herr
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="frau" id="frau" />
                      <Label htmlFor="frau" className="text-sm">
                        Frau
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="divers" id="divers" />
                      <Label htmlFor="divers" className="text-sm">
                        Divers
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-[#04252b]">
                      Vorname *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-[#04252b]">
                      Nachname *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="address" className="text-sm font-medium text-[#04252b]">
                      Adresse *
                    </Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="mt-1"
                      placeholder="Straße und Hausnummer"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="apartmentNumber" className="text-sm font-medium text-[#04252b]">
                      Wohnung *
                    </Label>
                    <Input
                      id="apartmentNumber"
                      value={formData.apartmentNumber}
                      onChange={(e) => setFormData({ ...formData, apartmentNumber: e.target.value })}
                      className="mt-1"
                      placeholder="Nr."
                      required
                    />
                  </div>
                </div>

                {/* Postal Code & City */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="postalCode" className="text-sm font-medium text-[#04252b]">
                      PLZ *
                    </Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="city" className="text-sm font-medium text-[#04252b]">
                      Ort *
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-[#04252b]">
                    E-Mail Adresse *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1"
                    required
                  />
                </div>

                {/* Language */}
                <div>
                  <Label className="text-sm font-medium text-[#04252b]">Bevorzugte Sprache *</Label>
                  <RadioGroup
                    value={formData.language}
                    onValueChange={(value) => setFormData({ ...formData, language: value })}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="deutsch" id="deutsch" />
                      <Label htmlFor="deutsch" className="text-sm">
                        Deutsch
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="english" id="english" />
                      <Label htmlFor="english" className="text-sm">
                        English
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="dataProcessingConsent"
                      checked={formData.dataProcessingConsent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, dataProcessingConsent: checked as boolean })
                      }
                      className="mt-1"
                    />
                    <Label htmlFor="dataProcessingConsent" className="text-sm text-gray-700 leading-relaxed">
                      <strong>Ich willige ein</strong>, dass meine personenbezogenen Daten zum Zwecke der Durchführung
                      und Abrechnung des fairMieterstrom-Modells verarbeitet werden dürfen. *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketingConsent"
                      checked={formData.marketingConsent}
                      onCheckedChange={(checked) => setFormData({ ...formData, marketingConsent: checked as boolean })}
                      className="mt-1"
                    />
                    <Label htmlFor="marketingConsent" className="text-sm text-gray-700 leading-relaxed">
                      Ja, ich erlaube das Senden zusätzlicher Informationen, Umfragen und Service-Updates.
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  {!isFormValid && (
                    <div className="flex items-center gap-2 mb-4 text-sm text-amber-600">
                      <AlertCircle className="w-4 h-4" />
                      <span>
                        Bitte füllen Sie alle Pflichtfelder (*) aus und erteilen Sie die erforderliche Einwilligung.
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#77be21] hover:bg-[#77be21]/90"
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Wird übermittelt...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Einwilligung absenden
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Sie können diese Einwilligung jederzeit per E-Mail an support@pure-energy-germany.de widerrufen.
                  </p>
                </div>
              </form>
            </Card>
          </div>

          {/* Alternative Submission Methods */}
          <Card className="mt-8 p-6 bg-white">
            <h4 className="font-semibold text-[#04252b] mb-4">Alternative Übermittlungswege</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-[#04252b] mb-2">Per Post</h5>
                <p className="text-sm text-gray-600 mb-2">
                  Drucken Sie das Formular aus und senden Sie es per Post an:
                </p>
                <div className="bg-[#f3eee7] p-3 rounded text-sm">
                  Pure Energy Germany
                  <br />
                  c/o Oskomera GmbH
                  <br />
                  Debbingstraße 16a
                  <br />
                  46286 Dorsten
                </div>
              </div>
              <div>
                <h5 className="font-medium text-[#04252b] mb-2">Per E-Mail</h5>
                <p className="text-sm text-gray-600 mb-2">
                  Alternativ können Sie das ausgefüllte Formular als Foto senden an:
                </p>
                <div className="bg-[#f3eee7] p-3 rounded text-sm">
                  <Mail className="w-4 h-4 inline mr-2" />
                  support@pure-energy-germany.de
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
