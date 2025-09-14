import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Eye } from "lucide-react"

const products = [
  // CCTV Cameras
  {
    id: 1,
    name: "Hikvision CCTV Cameras",
    category: "CCTV Cameras",
    brand: "Hikvision",
    description: "All Range of Hikvision CCTV Camera Products",
    features: ["Analog Cameras", "Network Cameras", "DVR", "NVR"],
    image: "/hikvision-white-bullet-security-camera-with-ir-led.jpg",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 2,
    name: "Dahua CCTV Cameras",
    category: "CCTV Cameras",
    brand: "Dahua",
    description: "All Range of Dahua CCTV Camera Products",
    features: ["Analog Cameras", "Network Cameras", "DVR", "NVR"],
    image: "/dahua-white-dome-eyeball-security-camera.jpg",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 3,
    name: "CPPlus CCTV Cameras",
    category: "CCTV Cameras",
    brand: "CPPlus",
    description: "All Range of Dahua CCTV Camera Products",
    features: ["Analog Cameras", "Network Cameras", "DVR", "NVR"],
    image: "/cp-plus-white-dome-security-camera-vandal-resistan.jpg",
    wholesalePrice: "Contact for Price",
  },

  // Video Door Phones
  {
    id: 4,
    name: "Hikvision Video Door Phone",
    category: "Video Door Phones",
    brand: "Hikvision",
    description: "All Range of Hikvision Analog & IP Video Door Phones",
    features: ["Analog VDP", "IP VDP"],
    image: "/hikvision-video-doorphone-touch-screen-intercom.webp",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 5,
    name: "Dahua Video Door Phone",
    category: "Video Door Phones",
    brand: "Dahua",
    description: "All Range of Dahua Analog & IP Video Door Phones",
    features: ["Analog VDP", "IP VDP"],
    image: "/dahua-video-door-bell.png",
    wholesalePrice: "Contact for Price",
  },

  // Biometrics
  {
    id: 6,
    name: "ESSL Attendance Biometric Machine",
    category: "Biometrics",
    brand: "ESSL",
    description: "ESSL Time Attendance System with Access Control",
    features: ["Finger", "Face", "Card", "Access Control", "Battery Backup"],
    image: "/essl-biometric.jpg",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 7,
    name: "ZKTeco Attendance Biometric Device",
    category: "Biometrics",
    brand: "ZKTeco",
    description: "ESSL Time Attendance System with Access Control",
    features: ["Finger", "Face", "Card", "Access Control", "Battery Backup"],
    image: "/zkteco-f22-biometric.jpg",
    wholesalePrice: "Contact for Price",
  },

  // Access Control
  {
    id: 8,
    name: "ESSL Fingerprint & Card Access Control Device",
    category: "Access Control",
    brand: "ESSL",
    description: "Single Door Access Controller with RFID Support",
    features: ["Single Door Control", "RFID Card Support", "TCP/IP Communication", "Wiegand Interface"],
    image: "/essl-x7-access-control.webp",
    wholesalePrice: "Contact for Price",
  },

  // TVs
  {
    id: 9,
    name: "TCL Smart Android TV",
    category: "TVs",
    brand: "TCL",
    description: "All Range of TCL Android Smart TV from 32 inch to 75 inch",
    features: ["4K UHD Display", "Android TV", "HDR10 Support", "Google Assistant"],
    image: "/tcl-tv.jpg",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 10,
    name: "Samsung Commercial Display",
    category: "TVs",
    brand: "Samsung",
    description: "All Range of Samsung Commercial Display from 32 inch to 75 inch",
    features: ["Crystal 4K Display", "Smart TV", "Multiple Voice Assistants", "Game Mode"],
    image: "/samsung-commercial-tv.jpg",
    wholesalePrice: "Contact for Price",
  },

  // Cash Counting Machines
  {
    id: 11,
    name: "Maxxion Cash Counting Machine",
    category: "Cash Counting Machines",
    brand: "Maxxion",
    description: "All Range of Currency Counting Machine with Fake Note Detection",
    features: ["1000 Notes/Min", "Fake Note Detection", "Batch Counting", "LED Display"],
    image: "/maxxion-cash-counting-machine.webp",
    wholesalePrice: "Contact for Price",
  },

  // Computers
  {
    id: 12,
    name: "Desktop & Laptop",
    category: "Computers & Peripherals",
    brand: "All Brands",
    description: "All Range of Desktops & Laptops",
    features: ["Desktop", "Laptop"],
    image: "/computers-laptops.jpg",
    wholesalePrice: "Contact for Price",
  },

  // Printers
  {
    id: 13,
    name: "Printers",
    category: "Printers",
    brand: "Canon, Epson, HP",
    description: "All Range of Canon, HP, Epson Printers",
    features: ["Laser", "Ink Tank System", "Inkjet"],
    image: "/printers.jpg",
    wholesalePrice: "Contact for Price",
  },
]

export function ProductGrid() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-heading font-semibold text-2xl">All Products ({products.length})</h2>
        <div className="text-sm text-muted-foreground">Showing wholesale prices for registered dealers</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-primary">{product.category}</Badge>
                <Badge className="absolute top-3 right-3 bg-accent">{product.brand}</Badge>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-foreground/80 text-sm mb-3 line-clamp-2">{product.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {product.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.features.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <div className="text-lg font-semibold text-accent">{product.wholesalePrice}</div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-accent hover:bg-accent/90" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-muted/30 rounded-lg">
        <h3 className="font-heading font-semibold text-xl mb-4">Need a Custom Quote?</h3>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          Contact us for bulk orders, custom configurations, or products not listed here. We offer competitive wholesale
          pricing for all electronics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Phone className="mr-2 h-4 w-4" />
            Call: 9500673207
          </Button>
          <Button size="lg" variant="outline">
            Email: akinfotechtn@gmail.com
          </Button>
        </div>
      </div>
    </div>
  )
}
