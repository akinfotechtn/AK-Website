import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - AK Infotech Electronics Wholesale",
  description:
    "Learn how AK Infotech protects your privacy and handles personal information when you purchase electronics from our Chennai wholesale store.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Privacy Policy</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                How we collect, use, and protect your personal information
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-muted/30 p-6 rounded-lg mb-8">
                <p className="text-sm text-muted-foreground mb-0">
                  Last updated: {new Date().toLocaleDateString("en-IN")}
                </p>
              </div>

              <h2 className="font-heading font-bold text-2xl mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                AK Infotech collects information to provide better services to our customers. We collect information in
                the following ways:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, phone number, email address, company name, and billing
                  address
                </li>
                <li>
                  <strong>Business Information:</strong> GST number, business type, and purchase requirements
                </li>
                <li>
                  <strong>Transaction Information:</strong> Purchase history, payment details, and delivery preferences
                </li>
                <li>
                  <strong>Communication Records:</strong> Phone calls, emails, and chat conversations for service
                  improvement
                </li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Processing and fulfilling your orders</li>
                <li>Providing customer support and technical assistance</li>
                <li>Sending product updates, price lists, and promotional offers</li>
                <li>Maintaining business records and GST compliance</li>
                <li>Improving our products and services</li>
                <li>Preventing fraud and ensuring transaction security</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Delivery partners and payment processors for order fulfillment
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or government regulations
                </li>
                <li>
                  <strong>Business Protection:</strong> To protect our rights, property, or safety of our customers
                </li>
                <li>
                  <strong>Consent:</strong> When you have given explicit consent for specific purposes
                </li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">4. Data Security</h2>
              <p className="mb-4">We implement appropriate security measures to protect your personal information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Secure storage of physical and digital records</li>
                <li>Access controls limiting who can view your information</li>
                <li>Regular security assessments and updates</li>
                <li>Secure communication channels for sensitive information</li>
                <li>Employee training on data protection practices</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">5. Data Retention</h2>
              <p className="mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                policy, comply with legal obligations, resolve disputes, and enforce our agreements. Business records
                are maintained as required by GST and other applicable laws.
              </p>

              <h2 className="font-heading font-bold text-2xl mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                  requirements)
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service provider
                </li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">7. Cookies and Website Data</h2>
              <p className="mb-4">Our website may use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Improve website functionality and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Remember your preferences and settings</li>
                <li>Provide relevant content and advertisements</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mb-4">8. Third-Party Links</h2>
              <p className="mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of these external sites. We encourage you to read their privacy policies before providing any personal
                information.
              </p>

              <h2 className="font-heading font-bold text-2xl mb-4">9. Changes to This Policy</h2>
              <p className="mb-6">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an
                updated revision date. We encourage you to review this policy periodically.
              </p>

              <h2 className="font-heading font-bold text-2xl mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or how we handle your personal information, please
                contact us:
              </p>
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
