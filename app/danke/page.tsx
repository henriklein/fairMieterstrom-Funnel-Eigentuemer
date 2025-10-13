import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DankePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center space-y-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-[#77be21]/10 p-6">
              <CheckCircle className="w-16 h-16 text-[#77be21]" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-balance">Vielen Dank für Ihre Anfrage!</h1>

          <p className="text-xl text-muted-foreground text-pretty">
            Wir haben Ihre Informationen erhalten und werden uns in Kürze bei Ihnen melden.
          </p>

          <p className="text-muted-foreground">
            Unser Team wird Ihre Anfrage prüfen und sich innerhalb von 24 Stunden bei Ihnen zurückmelden.
          </p>

          <div className="pt-6">
            <Button asChild size="lg" className="bg-[#77be21] hover:bg-[#6ba91d]">
              <Link href="/">Zurück zur Startseite</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
