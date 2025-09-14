import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { BreadcrumbSchema } from "@/components/schema-markup"

export const metadata = {
  title: "Products - AK Infotech | CCTV, Biometrics, Computers, TVs at Wholesale Prices",
  description:
    "Browse our complete range of electronics: CCTV cameras, biometrics, access control, video door phones, TVs, computers, printers at wholesale prices in Chennai.",
  keywords:
    "CCTV camera price Chennai, biometric system, access control, video door phone, TCL TV, computer wholesale, printer Chennai, Hikvision Authorised Dealer, CPPlus Authorised Dealer,Prama Authorised Dealer, Hi-Focus Authorised Dealer, Uniview Authorised Dealer, Honeywell Authorised Dealer, Dahua Authorised Dealer, Canon Printer Authorised Dealer, HP Printer Authorised Dealer, Epson Printer Authorised Dealer, TCL TV Authorised Dealer, Zebronics Authorised Dealer, CCTV wholesale Dealer, cctv camera shop near me, cctv camera shop in ritchie street, cctv store near me, surveillance camera store near me, near by cctv camera shop, cc camera shop near me, shop camera cctv, near cctv camera shop, cctv camera store, cctv camera for store, cctv camera dealers in ritchie street, ritchie street cctv camera shop, security camera store near me, wholesale cctv camera",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.akinfotechcctv.in/" },
          { name: "Products", url: "https://www.akinfotechcctv.in/products" },
        ]}
      />

      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Products</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Complete range of electronics and security solutions at wholesale prices
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="lg:w-1/4">
                <ProductFilters />
              </aside>
              <main className="lg:w-3/4">
                <ProductGrid />
              </main>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
