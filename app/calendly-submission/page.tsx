import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Home, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CalendlySubmissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-[#77be21]/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-[#77be21]" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Vielen Dank für Ihre Terminbuchung!</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Wir freuen uns sehr auf unser Gespräch und darauf, gemeinsam mit Ihnen die Möglichkeiten für Ihr
              Mieterstrom-Projekt zu besprechen. Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details zu
              unserem Termin.
            </p>
            <p className="text-lg text-gray-700 mb-4">Bis dahin wünsche ich Ihnen alles Gute!</p>
          </div>

          {/* Jan's Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/design-mode/68681412c4914a212e8638ba_Jan%20Graventein(1).png"
                  alt="Jan Gravenstein"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Jan Gravenstein</h2>
                <p className="text-lg text-gray-600">Geschäftsführer & Ihr persönlicher Ansprechpartner</p>
              </div>
            </div>

            {/* Signature */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-5xl text-gray-800 mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Jan Gravenstein
              </p>
              <p className="text-sm text-gray-500">Pure Energy Germany</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href="/landing-renditenrechner-mieterstrom">
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Seite
              </Link>
            </Button>

            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <a href="https://pure-energy-germany.de" target="_blank" rel="noopener noreferrer">
                <Home className="w-4 h-4" />
                Homepage
              </a>
            </Button>

            <Button asChild className="gap-2 bg-[#77be21] hover:bg-[#5a9419]">
              <a href="https://pure-energy-germany.de/blog" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4" />
                Zum Blog
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Load Dancing Script font for signature */}
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
    </div>
  )
}
