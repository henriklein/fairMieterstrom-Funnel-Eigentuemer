import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { anrede, vorname, nachname, interesse, email, telefon, agb } = body

    // Validate required fields
    if (!anrede || !vorname || !nachname || !interesse || !email || !agb) {
      return NextResponse.json({ error: "Alle Pflichtfelder müssen ausgefüllt werden." }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }, { status: 400 })
    }

    // Log the form submission (in production, you would save to database)
    console.log("[v0] Infomaterial request received:", {
      anrede,
      vorname,
      nachname,
      interesse,
      email,
      telefon: telefon || "Nicht angegeben",
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
    })

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Add to CRM/marketing automation
    // 4. Send notification to sales team

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: "Vielen Dank! Ihr Infomaterial wird in Kürze an Ihre E-Mail-Adresse gesendet.",
    })
  } catch (error) {
    console.error("[v0] Error processing infomaterial request:", error)
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 },
    )
  }
}
