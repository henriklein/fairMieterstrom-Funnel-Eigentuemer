"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Star } from "lucide-react"
import { useState } from "react"

export function ProjekteSection() {
  const [showVideo, setShowVideo] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById("kontakt")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="testimonial" className="py-20 px-4 bg-gradient-to-br from-white to-[#f3eee7]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left side - YouTube embed */}
          <div className="flex flex-col justify-center">
            <div
              className="relative bg-black rounded-2xl overflow-hidden cursor-pointer group aspect-video shadow-2xl hover:shadow-3xl transition-all duration-300"
              onClick={() => setShowVideo(true)}
            >
              <img
                src="https://cdn.prod.website-files.com/6851230f794c51bed168c638/68c0010c743d19ee77caa48b_Thumbnail.png"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="h-10 w-10 text-[#04252b] ml-1" />
                </div>
              </div>
            </div>

            {/* Video popup */}
            {showVideo && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                <div className="relative w-full max-w-4xl aspect-video">
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300 text-xl"
                  >
                    ✕
                  </button>
                  <iframe
                    src="https://www.youtube.com/embed/UdEDoUNaoaw?autoplay=1"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right side - Testimonial */}
          <div className="flex flex-col justify-center space-y-8">
            <Card className="p-8 bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-[#77be21] text-[#77be21]" />
                  ))}
                </div>

                <blockquote className="text-lg text-[#04252b] leading-relaxed font-medium">
                  "Sehr professionelle Firma mit klarem Dienstleistungsgedanken. Kunden werden ernst genommen und
                  umfassend beraten. Ich gebe guten Gewissens 5 Sterne – weiter so!"
                </blockquote>

                <div className="border-t border-[#04252b]/10 pt-4">
                  <p className="font-semibold text-[#04252b]">Alexej Tschernow</p>
                  <p className="text-[#04252b]/70">Projektpartner (Elektroinstallationsbetrieb)</p>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#77be21] hover:bg-[#77be21]/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToContact}
              >
                Beratungstermin Vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
