import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { ProductCategories } from "@/components/product-categories"
import { AboutSection } from "@/components/about-section"
import { BrandsSection } from "@/components/brands-section"
import { ContactCTA } from "@/components/contact-cta"
import { LocalBusinessSchema, OrganizationSchema, ProductCatalogSchema, FAQSchema } from "@/components/schema-markup"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <OrganizationSchema />
      <ProductCatalogSchema />
      <FAQSchema />

      <Header />
      <main>
        <HeroCarousel />
        <ProductCategories />
        <AboutSection />
        <BrandsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
