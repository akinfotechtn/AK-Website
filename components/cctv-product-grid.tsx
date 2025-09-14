import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Shield, Eye, Camera } from "lucide-react"

const cctvProducts = [
  {
    id: 1,
    name: "Hikvision DS-2CE16D0T-IR",
    brand: "Hikvision",
    type: "Bullet Camera",
    description: "2MP 1080P IR Bullet Camera with 20m IR range",
    specifications: {
      resolution: "2MP (1920×1080)",
      irRange: "20m",
      lens: "3.6mm Fixed",
      protection: "IP66",
    },
    features: ["Day/Night Vision", "Smart IR", "Weatherproof", "BNC Output"],
    image: "/hikvision-bullet-camera.png",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 2,
    name: "Dahua HAC-HDW1200RP",
    brand: "Dahua",
    type: "Dome Camera",
    description: "2MP HDCVI IR Eyeball Camera with Smart IR",
    specifications: {
      resolution: "2MP (1920×1080)",
      irRange: "30m",
      lens: "3.6mm Fixed",
      protection: "IP67",
    },
    features: ["Smart IR", "ICR Day/Night", "3-Axis Adjustment", "Vandal Resistant"],
    image: "/dahua-dome-camera.png",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 3,
    name: "CPPlus CP-UNC-TA10L3-DS",
    brand: "CPPlus",
    type: "Dome Camera",
    description: "1MP HD Dome Camera with 10m IR",
    specifications: {
      resolution: "1MP (1280×720)",
      irRange: "10m",
      lens: "3.6mm Fixed",
      protection: "IP66",
    },
    features: ["HD Resolution", "Night Vision", "Easy Installation", "Cost Effective"],
    image: "/cpplus-dome-camera.png",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 4,
    name: "Prama PRHD-B20IR36",
    brand: "Prama",
    type: "Bullet Camera",
    description: "2MP AHD Bullet Camera with 36 IR LEDs",
    specifications: {
      resolution: "2MP (1920×1080)",
      irRange: "25m",
      lens: "3.6mm Fixed",
      protection: "IP66",
    },
    features: ["36 IR LEDs", "Metal Housing", "OSD Menu", "UTC Control"],
    image: "/prama-bullet-camera.png",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 5,
    name: "Hikvision DS-2DE2A204IW-DE3",
    brand: "Hikvision",
    type: "PTZ Camera",
    description: "2MP Network Mini PTZ Camera with 4x Zoom",
    specifications: {
      resolution: "2MP (1920×1080)",
      zoom: "4x Optical",
      irRange: "30m",
      protection: "IP66",
    },
    features: ["Pan/Tilt/Zoom", "Auto Tracking", "Preset Positions", "Mobile App"],
    image: "/hikvision-ptz-camera.png",
    wholesalePrice: "Contact for Price",
  },
  {
    id: 6,
    name: "Secureeye S-B2MIR36",
    brand: "Secureeye",
    type: "Bullet Camera",
    description: "2MP AHD IR Bullet Camera with Metal Body",
    specifications: {
      resolution: "2MP (1920×1080)",
      irRange: "30m",
      lens: "3.6mm Fixed",
      protection: "IP66",
    },
    features: ["Metal Body", "IR Cut Filter", "BNC Connector", "12V DC"],
    image: "/secureeye-bullet-camera.png",
    wholesalePrice: "Contact for Price",
  },
]

export function CCTVProductGrid() {
  return (
    <div className="space-y-8">
      {/* Category Overview */}
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-3xl mb-4">CCTV Camera Solutions</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Complete range of professional CCTV cameras from leading brands. We offer bullet cameras, dome cameras, PTZ
          cameras, and complete surveillance systems at wholesale prices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 p-4 bg-card rounded-lg">
            <Camera className="h-5 w-5 text-accent" />
            <span className="font-medium">Bullet Cameras</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-4 bg-card rounded-lg">
            <Shield className="h-5 w-5 text-accent" />
            <span className="font-medium">Dome Cameras</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-4 bg-card rounded-lg">
            <Eye className="h-5 w-5 text-accent" />
            <span className="font-medium">PTZ Cameras</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-4 bg-card rounded-lg">
            <Camera className="h-5 w-5 text-accent" />
            <span className="font-medium">IP Cameras</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cctvProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-primary">{product.type}</Badge>
                <Badge className="absolute top-3 right-3 bg-accent">{product.brand}</Badge>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                {/* Specifications */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resolution:</span>
                    <span className="font-medium">{product.specifications.resolution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">IR Range:</span>
                    <span className="font-medium">{product.specifications.irRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Protection:</span>
                    <span className="font-medium">{product.specifications.protection}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="text-lg font-semibold text-accent mb-4">{product.wholesalePrice}</div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-accent hover:bg-accent/90" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Installation Services */}
      <div className="bg-muted/30 rounded-lg p-8 text-center">
        <h3 className="font-heading font-semibold text-2xl mb-4">Professional Installation Services</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We provide complete CCTV installation services including site survey, system design, installation, and
          configuration. Our experienced technicians ensure optimal camera placement and system performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Phone className="mr-2 h-4 w-4" />
            Get Installation Quote
          </Button>
          <Button size="lg" variant="outline">
            Technical Support
          </Button>
        </div>
      </div>
    </div>
  )
}
