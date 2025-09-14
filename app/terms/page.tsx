import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms & Conditions - AK Infotech Electronics Wholesale",
  description:
    "Read the terms and conditions for purchasing electronics from AK Infotech, Chennai's leading wholesale dealer for CCTV, biometrics, computers and more.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Terms & Conditions</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Please read these terms carefully before making any purchase
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-muted/30 p-6 rounded-lg mb-8">
                <p className="text-sm text-muted-foreground mb-0">
                  Last updated: {new Date().toLocaleDateString("en-IN")}
                </p>
              </div>

              <h2 className="font-heading font-bold text-2xl mb-4">1. General Terms</h2>
              <p className="mb-6">
                These terms and conditions govern your use of AK Infotech's services and products. By purchasing from
                us, you agree to be bound by these terms. AK Infotech reserves the right to modify these terms at any
                time without prior notice.
              </p>

              <h2 className="font-heading font-bold text-2xl mb-4">2. Products and Pricing</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>All products are sold at wholesale prices to registered dealers and bulk buyers</li>
                <li>Prices are subject to change without prior notice</li>
                <li>Product availability is subject to stock and may vary</li>
                <li>All prices are exclusive of taxes unless otherwise mentioned</li>
                <li>GST will be charged as applicable on all transactions</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">3. Orders and Payment</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>All orders are subject to acceptance by AK Infotech</li>
                <li>Payment terms will be communicated at the time of order confirmation</li>
                <li>We accept cash, bank transfer, and other approved payment methods</li>
                <li>Full payment may be required before delivery for new customers</li>
                <li>Credit terms may be extended to established customers at our discretion</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">4. Delivery and Shipping</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Delivery timelines are estimates and may vary based on product availability</li>
                <li>Shipping charges are additional and will be communicated before dispatch</li>
                <li>Risk of loss or damage passes to the buyer upon delivery</li>
                <li>Customers are responsible for checking products upon delivery</li>
                <li>Any damage or discrepancy must be reported within 24 hours of delivery</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">5. Warranty and Returns</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>All products come with manufacturer's warranty as applicable</li>
                <li>Warranty claims must be processed through authorized service centers</li>
                <li>AK Infotech is not responsible for warranty service or repairs</li>
                <li>Returns are accepted only for defective products within 7 days of purchase</li>
                <li>Products must be in original packaging with all accessories for returns</li>
                <li>Custom orders and special configurations are not returnable</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">6. Limitation of Liability</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>AK Infotech's liability is limited to the purchase price of the product</li>
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Technical specifications are as provided by manufacturers</li>
                <li>Customers are responsible for ensuring product compatibility</li>
                <li>Installation and configuration services are not included unless specified</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">7. Intellectual Property</h2>
              <p className="mb-6">
                All trademarks, brand names, and product names mentioned are the property of their respective owners. AK
                Infotech does not claim ownership of any third-party intellectual property.
              </p>

              <h2 className="font-heading font-bold text-2xl mb-4">8. Privacy and Data Protection</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Customer information is collected only for business purposes</li>
                <li>We do not share customer data with unauthorized third parties</li>
                <li>Customer data is protected as per applicable privacy laws</li>
                <li>Customers may request access to or deletion of their personal data</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">9. Governing Law</h2>
              <p className="mb-6">
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
                jurisdiction of the courts in Chennai, Tamil Nadu.
              </p>

              <h2 className="font-heading font-bold text-2xl mb-4">10. Contact Information</h2>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>AK Infotech</strong>
                </p>
                <p className="mb-2">No.19, Shop No: F22 & F23, 1st Floor</p>
                <p className="mb-2">Uno Arcade A/C Complex, Meeran Sahib Street</p>
                <p className="mb-2">Mount Road, Chennai - 600002</p>
                <p className="mb-2">Phone: 9500673207</p>
                <p className="mb-2">Email: akinfotechtn@gmail.com</p>
                <p className="mb-0">GSTN: 33CPAPA9563H1Z1</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
