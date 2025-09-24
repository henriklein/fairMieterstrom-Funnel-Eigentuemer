"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("cookie-consent")
    if (!cookieChoice) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
          <div className="flex-1">
            <p className="text-gray-700">
              Wir verwenden Cookies und ähnliche Technologien für Analyse und Marketing.
              <a
                href="https://www.pure-energy-germany.de/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#77be21] hover:underline ml-1"
              >
                Mehr erfahren
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-xs px-3 py-1 h-8 bg-transparent"
            >
              Ablehnen
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="text-xs px-3 py-1 h-8 bg-[#77be21] hover:bg-[#77be21]/90"
            >
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
