import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, MapPin, Clock } from "lucide-react"

const features = [
  "Authorized dealer for leading brands",
  "Wholesale pricing for retailers",
  "Technical support and installation guidance",
  "Chennai-wide delivery network",
  "Quality assurance on all products",
  "Bulk order discounts available",
]

const stats = [
  { label: "Years in Business", value: "10+", icon: Clock },
  { label: "Product Categories", value: "9", icon: CheckCircle },
  { label: "Satisfied Customers", value: "1000+", icon: Users },
  { label: "Service Areas", value: "Chennai", icon: MapPin },
]

export function AboutSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-primary">About AK Infotech</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AK Infotech is Chennai's trusted wholesale electronics dealer, specializing in security solutions,
              computers, and electronic equipment. We serve retailers, installers, and businesses with quality products
              at competitive wholesale prices.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Chennai at Mount Road, we offer a comprehensive range of products from leading
              brands including Hikvision, Dahua, ESSL, ZKTeco, TCL, Samsung, Dell, HP, and many more.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More About Us
            </Button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <IconComponent className="h-8 w-8 text-accent mx-auto mb-3" />
                      <div className="font-heading font-bold text-2xl mb-1 text-black">{stat.value}</div>
                      <div className="text-sm text-black">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 text-black">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-black">
                  <li>• Competitive wholesale pricing</li>
                  <li>• Genuine products with warranty</li>
                  <li>• Expert technical consultation</li>
                  <li>• Fast delivery across Chennai</li>
                  <li>• After-sales support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
