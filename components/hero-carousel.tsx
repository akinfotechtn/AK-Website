"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, Truck, Award, Phone } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "CCTV Security Solutions",
    subtitle: "Professional surveillance systems for your business",
    description:
      "Complete CCTV camera systems from leading brands like Hikvision, Dahua, and CPPlus at wholesale prices.",
    image: "/professional-cctv-security-camera-system-installat.png",
    cta: "View CCTV Products",
  },
  {
    id: 2,
    title: "Biometric Access Control",
    subtitle: "Advanced security and attendance systems",
    description: "ESSL and ZKTeco biometric solutions for secure access control and time attendance management.",
    image: "/biometric-fingerprint-access-control-system.png",
    cta: "Explore Biometrics",
  },
  {
    id: 3,
    title: "Video Door Phones",
    subtitle: "Smart intercom solutions for modern buildings",
    description: "High-quality video door phone systems from trusted brands for residential and commercial use.",
    image: "/modern-video-door-phone-intercom-system.png",
    cta: "View Door Phones",
  },
  {
    id: 4,
    title: "Computers & Peripherals",
    subtitle: "Complete IT solutions at wholesale rates",
    description: "Computers, printers, monitors and accessories from Dell, HP, Canon, Acer and more brands.",
    image: "/modern-computer-setup-with-monitor-printer-office.png",
    cta: "Browse Computers",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden bg-primary">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center z-10">
              <div className="max-w-2xl">
                <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4 leading-tight text-white">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl mb-6 text-white/95">{slide.subtitle}</h2>
                <p className="text-lg mb-8 text-white/90 leading-relaxed">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                    {slide.cta}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/80 text-white hover:bg-white hover:text-primary bg-transparent backdrop-blur-sm"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now: 9500673207
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-sm z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-sm z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-primary">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Authorized Dealer</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Truck className="h-5 w-5" />
              <span className="font-medium">Chennai Wide Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Award className="h-5 w-5" />
              <span className="font-medium">Wholesale Prices</span>
            </div>
            <div className="text-primary font-medium">GSTN: 33CPAPA9563H1Z1</div>
          </div>
        </div>
      </div>
    </section>
  )
}
