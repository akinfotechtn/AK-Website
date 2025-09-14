import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Award, Users, Truck, Shield } from "lucide-react"
import { BreadcrumbSchema } from "@/components/schema-markup"

export const metadata = {
  title: "About AK Infotech - Leading Electronics Wholesale Dealer in Chennai",
  description:
    "Learn about AK Infotech, Chennai's trusted wholesale dealer for CCTV cameras, biometrics, access control, TVs, computers and printers since establishment.",
  keywords:
    "AK Infotech Chennai, electronics wholesale dealer, CCTV dealer Chennai, biometric systems dealer, computer wholesale Chennai, Hikvision Authorised Dealer, CPPlus Authorised Dealer,Prama Authorised Dealer, Hi-Focus Authorised Dealer, Uniview Authorised Dealer, Honeywell Authorised Dealer, Dahua Authorised Dealer, Canon Printer Authorised Dealer, HP Printer Authorised Dealer, Epson Printer Authorised Dealer, TCL TV Authorised Dealer, Zebronics Authorised Dealer, CCTV wholesale Dealer, cctv camera shop near me, cctv camera shop in ritchie street, cctv store near me, surveillance camera store near me, near by cctv camera shop, cc camera shop near me, shop camera cctv, near cctv camera shop, cctv camera store, cctv camera for store, cctv camera dealers in ritchie street, ritchie street cctv camera shop, security camera store near me",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://akinfotech.com" },
          { name: "About", url: "https://akinfotech.com/about" },
        ]}
      />

      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">About AK Infotech</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Your trusted partner for electronics and security solutions in Chennai
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl mb-6">Who We Are</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AK Infotech is a leading wholesale dealer of electronics and security solutions based in Chennai.
                    Located at the heart of Mount Road, we have been serving businesses, retailers, and installers
                    across Tamil Nadu with quality products at competitive wholesale prices.
                  </p>
                  <p>
                    Our extensive product range includes CCTV cameras, video door phones, biometric systems, access
                    control solutions, televisions, computers, printers, and cash counting machines from renowned brands
                    like Hikvision, Dahua, CPPlus, TCL, Samsung, Dell, Canon, and HP.
                  </p>
                  <p>
                    With our GST registration (33CPAPA9563H1Z1) and established business presence, we ensure complete
                    transparency and reliability in all our transactions.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/modern-computer-setup-with-monitor-printer-office.png"
                  alt="AK Infotech Office and Showroom"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl mb-4">Why Choose AK Infotech?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine quality products, competitive pricing, and exceptional service to deliver value to our
                customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-white bg-popover-foreground">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-yellow-500">Quality Products</h3>
                  <p className="text-sm text-black">
                    Genuine products from authorized brands with warranty support
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-popover-foreground">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-yellow-500">Wholesale Pricing</h3>
                  <p className="text-sm text-black">
                    Competitive wholesale rates for bulk orders and registered dealers
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-popover-foreground">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-yellow-500">Fast Delivery</h3>
                  <p className="text-sm text-black">
                    Quick delivery across Chennai and Tamil Nadu with reliable logistics
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-popover-foreground">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-yellow-500">Expert Support</h3>
                  <p className="text-sm text-black">
                    Technical guidance and after-sales support from our experienced team
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Location */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl mb-4">Visit Our Store</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Located in the prime business district of Mount Road, Chennai
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-heading font-semibold text-xl mb-6">Store Information</h3>
                  <div className="space-y-4 text-black">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-black" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-black">
                          No.19, Shop No: F22 & F23, 1st Floor
                          <br />
                          Uno Arcade A/C Complex
                          <br />
                          Meeran Sahib Street, Mount Road
                          <br />
                          Chennai - 600002
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-black" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-black">9500673207</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-black" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-black">akinfotechtn@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 mt-1 text-black" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-black">
                          Monday - Saturday: 9:00 AM - 7:00 PM
                          <br />
                          Sunday: 10:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Badge variant="outline" className="mb-2">
                      GST Registered
                    </Badge>
                    <p className="text-sm text-muted-foreground">GSTN: 33CPAPA9563H1Z1</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Find Us on Map</h3>
                  <p className="text-muted-foreground mb-4">Located in Uno Arcade Complex, Mount Road</p>
                  <Button variant="outline">Get Directions</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
