import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CCTVProductGrid } from "@/components/cctv-product-grid"

export const metadata = {
  title: "CCTV Cameras - AK Infotech | Hikvision, Dahua, CPPlus at Wholesale Prices",
  description:
    "Professional CCTV camera systems from Hikvision, Dahua, CPPlus, Prama at wholesale prices in Chennai. Bullet, dome, PTZ cameras with installation support.",
  keywords: "CCTV camera Chennai, Hikvision camera price, Dahua CCTV, CPPlus camera, security camera wholesale, Hikvision Authorised Dealer, CPPlus Authorised Dealer,Prama Authorised Dealer, Hi-Focus Authorised Dealer, Uniview Authorised Dealer, Honeywell Authorised Dealer, Dahua Authorised Dealer, Canon Printer Authorised Dealer, HP Printer Authorised Dealer, Epson Printer Authorised Dealer, TCL TV Authorised Dealer, Zebronics Authorised Dealer, CCTV wholesale Dealer, cctv camera shop near me, cctv camera shop in ritchie street, cctv store near me, surveillance camera store near me, near by cctv camera shop, cc camera shop near me, shop camera cctv, near cctv camera shop, cctv camera store, cctv camera for store, cctv camera dealers in ritchie street, ritchie street cctv camera shop, security camera store near me",
}

export default function CCTVPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">CCTV Camera Systems</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Professional surveillance solutions from leading brands at wholesale prices
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <CCTVProductGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
