import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, DoorOpen, Fingerprint, Shield, Tv, Calculator, Monitor, Printer } from "lucide-react"

const categories = [
  {
    name: "CCTV Cameras",
    description: "Professional surveillance systems",
    icon: Camera,
    brands: "Hikvision, Dahua, CPPlus, Prama",
    image: "/cctv-security-camera-system.png",
  },
  {
    name: "Video Door Phones",
    description: "Smart intercom solutions",
    icon: DoorOpen,
    brands: "Hikvision, Dahua, CPPlus",
    image: "/video-door-phone-intercom.png",
  },
  {
    name: "Biometrics",
    description: "Fingerprint & face recognition",
    icon: Fingerprint,
    brands: "ESSL, ZKTeco",
    image: "/biometric-fingerprint-scanner.png",
  },
  {
    name: "Access Control",
    description: "Secure entry management",
    icon: Shield,
    brands: "ESSL, ZKTeco",
    image: "/access-control-card-reader-system.png",
  },
  {
    name: "TVs",
    description: "Smart & LED televisions",
    icon: Tv,
    brands: "TCL, Samsung, LG, Maxxion",
    image: "/modern-smart-tv-display.png",
  },
  {
    name: "Cash Counting Machines",
    description: "Currency counting solutions",
    icon: Calculator,
    brands: "Maxxion, TVS",
    image: "/cash-counting-machine-currency.png",
  },
  {
    name: "Computers & Peripherals",
    description: "Complete IT solutions",
    icon: Monitor,
    brands: "Dell, Acer, Asus, Zebronics",
    image: "/desktop-computer-setup-office.png",
  },
  {
    name: "Printers",
    description: "Inkjet & laser printers",
    icon: Printer,
    brands: "Canon, Epson, HP",
    image: "/office-printer-multifunction.png",
  },
]

export function ProductCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">Our Product Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of electronics and security solutions at wholesale prices for retailers and installers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.name} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-2 text-black">{category.name}</h3>
                    <p className="mb-3 text-neutral-400">{category.description}</p>
                    <p className="text-sm text-accent font-medium mb-4">Brands: {category.brands}</p>
                    <Button asChild className="w-full">
                      <Link href="/products">View Products</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
