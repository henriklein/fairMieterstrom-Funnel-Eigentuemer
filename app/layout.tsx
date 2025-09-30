import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "WEESS Mieterstrom - Mehr verdienen, weniger Aufwand",
  description:
    "WEESS vereinfacht Mieterstrom für jeden Installateur. Kostenlose Schulung, Rundum-Sorglos-Paket und Partnernetzwerk für einfache Abschlüsse.",
  keywords: "Mieterstrom, Solar, Installateur, WEESS, Photovoltaik, Energiewende",
  openGraph: {
    title: "WEESS Mieterstrom - Mehr verdienen, weniger Aufwand",
    description: "WEESS vereinfacht Mieterstrom für jeden Installateur.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
