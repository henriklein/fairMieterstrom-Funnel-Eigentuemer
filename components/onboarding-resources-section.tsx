import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  HelpCircle,
  BookOpen,
  Download,
  MessageSquare,
  BarChart3,
  Phone,
  Mail,
  Globe,
  MapPin,
  ExternalLink,
  QrCode,
} from "lucide-react"

export function OnboardingResourcesSection() {
  const resources = [
    {
      icon: HelpCircle,
      title: "Häufige Fragen und Antworten",
      description: "Antworten auf Ihre Fragen – von Stromverträgen bis zur Nutzung der digitalen Übersicht.",
      link: "https://pure-energy-germany.de/faq",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: BookOpen,
      title: "Glossar",
      description:
        "Was ist ein Wechselrichter? Wie funktioniert der PowerTower? Wir erklären alle Fachbegriffe einfach und direkt.",
      link: "https://pure-energy-germany.de/glossar",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: Download,
      title: "Digitale Flyer & Dokumente",
      description: "Alle Inhalte aus diesem Paket jederzeit digital nachlesen, herunterladen oder weiterleiten.",
      link: "https://pure-energy-germany.de/downloads",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: MessageSquare,
      title: "Kontaktformular für Fragen und Feedback",
      description: "Sie erreichen uns direkt über unser Online-Kontaktportal.",
      link: "https://pure-energy-germany.de/uber-uns#contact-sec",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: BarChart3,
      title: "Unsere Quellen und Berechnungen",
      description: "Alle verwendeten Daten, Rechenwege und Hintergrundinformationen – transparent und nachvollziehbar.",
      link: "https://pure-energy-germany.de/quellen",
      color: "bg-red-50 border-red-200",
    },
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefonischer Support",
      details: ["Mo–Fr: 09:00–17:00 Uhr", "+49 151 70593094"],
      color: "text-blue-600",
    },
    {
      icon: Mail,
      title: "E-Mail Support",
      details: ["support@pure-energy-germany.de", "Antwort innerhalb 24h"],
      color: "text-green-600",
    },
    {
      icon: Globe,
      title: "Online",
      details: ["www.pure-energy-germany.de", "24/7 verfügbar"],
      color: "text-purple-600",
    },
  ]

  return (
    <section id="resources" className="py-20 bg-[#f3eee7]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04252b] mb-6">
              Digitale Inhalte und weiterführende Infos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Auf unserer digitalen Plattform „Mieter-Infos" finden Sie alles rund um Ihr neues Strommodell – klar
              erklärt, jederzeit erreichbar.
            </p>
            <div className="bg-[#77be21]/10 border border-[#77be21]/20 rounded-lg p-6 max-w-2xl mx-auto">
              <QrCode className="w-8 h-8 text-[#77be21] mx-auto mb-4" />
              <p className="text-[#04252b] font-medium">Noch Fragen? Entdecken Sie alle Infos online</p>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resources.map((resource, index) => (
              <Card key={index} className={`p-6 ${resource.color} hover:shadow-lg transition-shadow`}>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-[#77be21]" />
                  </div>
                  <h3 className="font-semibold text-[#04252b] mb-3">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Öffnen
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-semibold text-[#04252b] text-center mb-8">So erreichen Sie uns</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`${contact.color} bg-opacity-10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                  >
                    <contact.icon className={`w-8 h-8 ${contact.color}`} />
                  </div>
                  <h4 className="font-semibold text-[#04252b] mb-2">{contact.title}</h4>
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="bg-[#f3eee7] p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#77be21] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#04252b] mb-2">Postanschrift</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Pure Energy Germany</p>
                    <p>c/o Oskomera GmbH</p>
                    <p>Debbingstraße 16a</p>
                    <p>46286 Dorsten</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Access CTA */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-to-r from-[#04252b] to-[#04252b]/80 text-white">
              <h3 className="text-2xl font-bold mb-4">Schneller Zugang zu allen Infos</h3>
              <p className="mb-6 opacity-90">
                Scannen Sie den QR-Code und gelangen Sie direkt zur Kontaktsektion unserer Website – inklusive FAQ,
                Kontaktformular und weiteren Infos.
              </p>
              <Button size="lg" className="bg-[#77be21] hover:bg-[#77be21]/90" asChild>
                <a href="https://pure-energy-germany.de/uber-uns#contact-sec" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Zur Kontaktseite
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
