import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react"
import { BreadcrumbSchema } from "@/components/schema-markup"

export const metadata = {
  title: "Contact AK Infotech - Get Wholesale Quotes for Electronics in Chennai",
  description:
    "Contact AK Infotech for wholesale pricing on CCTV cameras, biometrics, computers, TVs and more. Call 9500673207 or visit our Mount Road showroom in Chennai.",
  keywords:
    "contact AK Infotech, electronics wholesale Chennai, CCTV price quote, Mount Road electronics dealer, wholesale inquiry, Hikvision Authorised Dealer, CPPlus Authorised Dealer,Prama Authorised Dealer, Hi-Focus Authorised Dealer, Uniview Authorised Dealer, Honeywell Authorised Dealer, Dahua Authorised Dealer, Canon Printer Authorised Dealer, HP Printer Authorised Dealer, Epson Printer Authorised Dealer, TCL TV Authorised Dealer, Zebronics Authorised Dealer, CCTV wholesale Dealer, cctv camera shop near me, cctv camera shop in ritchie street, cctv store near me, surveillance camera store near me, near by cctv camera shop, cc camera shop near me, shop camera cctv, near cctv camera shop, cctv camera store, cctv camera for store, cctv camera dealers in ritchie street, ritchie street cctv camera shop, security camera store near me",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://akinfotech.com" },
          { name: "Contact", url: "https://akinfotech.com/contact" },
        ]}
      />

      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Get in touch for wholesale pricing and bulk orders
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-3">Speak directly with our sales team</p>
                  <Button className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    9500673207
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-3">Send us your requirements</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Mail className="mr-2 h-4 w-4" />
                    akinfotechtn@gmail.com
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-3">Quick quotes and support</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you with a wholesale quote
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input id="name" placeholder="Your full name" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input id="phone" type="tel" placeholder="Your phone number" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Input id="company" placeholder="Your company name (optional)" />
                    </div>

                    <div>
                      <label htmlFor="products" className="block text-sm font-medium mb-2">
                        Products of Interest *
                      </label>
                      <Input id="products" placeholder="e.g., CCTV cameras, Biometric systems, Computers" required />
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                        Quantity Required
                      </label>
                      <Input id="quantity" placeholder="Approximate quantity needed" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Additional Requirements
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please provide any specific requirements, models, or additional information..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Store Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Visit Our Store</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-muted-foreground text-sm">
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

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Business Hours</p>
                          <p className="text-muted-foreground text-sm">
                            Monday - Saturday: 9:00 AM - 7:00 PM
                            <br />
                            Sunday: 10:00 AM - 5:00 PM
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Badge variant="outline" className="mb-2">
                          GST Registered
                        </Badge>
                        <p className="text-sm text-muted-foreground">GSTN: 33CPAPA9563H1Z1</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Quick Response</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Phone calls answered within 2 rings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">WhatsApp messages replied within 15 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Email inquiries responded within 2 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Wholesale quotes provided same day</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
