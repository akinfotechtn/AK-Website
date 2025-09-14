import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  const productCategories = [
    "CCTV Cameras",
    "Video Door Phones",
    "Biometrics",
    "Access Control",
    "TVs",
    "Cash Counting Machines",
    "Computers & Peripherals",
    "Printers",
    "Monitors",
  ]

  const brands = [
    "Hikvision",
    "Dahua",
    "CPPlus",
    "ESSL",
    "ZKTeco",
    "TCL",
    "Samsung",
    "LG",
    "Canon",
    "HP",
    "Dell",
    "Acer",
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg"
              alt="AK Infotech - Electronics Wholesale Dealer"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground text-sm">
              Your trusted wholesale partner for electronics in Chennai. We provide quality products at competitive
              prices.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>
                  No.19, Shop No:F22AndF23, 1st Floor, Uno Arcade A/C Complex, Meeran Sahib Street, Mount Road,
                  Chennai-600002
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>9500673207</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>akinfotechtn@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Products</h4>
            <ul className="space-y-2 text-sm">
              {productCategories.slice(0, 6).map((product) => (
                <li key={product}>
                  <Link href="/products" className="text-muted-foreground hover:text-accent transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Brands</h4>
            <ul className="space-y-2 text-sm">
              {brands.slice(0, 8).map((brand) => (
                <li key={brand}>
                  <span className="text-muted-foreground">{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AK Infotech. All rights reserved. | GSTN: 33CPAPA9563H1Z1</p>
        </div>
      </div>
    </footer>
  )
}
