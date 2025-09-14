export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.akinfotechcctv.in/#business",
    name: "AK Infotech",
    description:
      "Leading wholesale dealer of CCTV cameras, biometrics, access control, video door phones, TVs, computers, printers and cash counting machines in Chennai",
    url: "https://www.akinfotechcctv.in/",
    telephone: "+919500673207",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No.19, Shop No: F22 & F23, 1st Floor, Uno Arcade A/C Complex, Meeran Sahib Street",
      addressLocality: "Mount Road",
      addressRegion: "Tamil Nadu",
      postalCode: "600002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0827,
      longitude: 80.2707,
    },
    openingHours: ["Mo-Sa 09:00-19:00", "Su 10:00-17:00"],
    paymentAccepted: ["Cash", "Bank Transfer", "UPI"],
    currenciesAccepted: "INR",
    priceRange: "₹₹",
    areaServed: "Tamil Nadu",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electronics Wholesale Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "CCTV Cameras",
            description: "Security cameras from Hikvision, Dahua, CPPlus",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Biometric Systems",
            description: "Fingerprint and access control systems from ESSL, ZKTeco",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Video Door Phones",
            description: "Intercom systems from Hikvision, Dahua, CPPlus",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Computers & Peripherals",
            description: "Laptops, desktops, monitors from Dell, Acer, Asus",
          },
        },
      ],
    },
    sameAs: ["https://www.google.com/maps/place/AK+Infotech"],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.akinfotechcctv.in/#organization",
    name: "AK Infotech",
    legalName: "AK Infotech",
    url: "https://www.akinfotechcctv.in/",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg",
    description:
      "Wholesale dealer of electronics and security solutions in Chennai",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919500673207",
      contactType: "sales",
      email: "akinfotechtn@gmail.com",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No.19, Shop No: F22 & F23, 1st Floor, Uno Arcade A/C Complex, Meeran Sahib Street",
      addressLocality: "Mount Road",
      addressRegion: "Tamil Nadu",
      postalCode: "600002",
      addressCountry: "IN",
    },
    taxID: "33CPAPA9563H1Z1",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductCatalogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AK Infotech Product Catalog",
    description: "Complete range of electronics at wholesale prices",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "CCTV Cameras",
          description: "Security surveillance cameras from top brands",
          brand: { "@type": "Brand", name: "Hikvision" },
          category: "Security Equipment",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.4",
            reviewCount: "125"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "4999",
            priceValidUntil: "2025-12-31",
            seller: { "@type": "Organization", name: "AK Infotech" }
          }
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Video Door Phones",
          description: "Intercom and video door phone systems",
          brand: { "@type": "Brand", name: "Dahua" },
          category: "Security Equipment",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.3",
            reviewCount: "85"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "2999",
            priceValidUntil: "2025-12-31",
            seller: { "@type": "Organization", name: "AK Infotech" }
          }
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Biometric Systems",
          description: "Fingerprint and biometric access control systems",
          brand: { "@type": "Brand", name: "ESSL" },
          category: "Security Equipment",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            reviewCount: "64"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "4999",
            priceValidUntil: "2025-12-31",
            seller: { "@type": "Organization", name: "AK Infotech" }
          }
        }
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Product",
          name: "Access Control Systems",
          description: "Door access control and card reader systems",
          brand: { "@type": "Brand", name: "ZKTeco" },
          category: "Security Equipment",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.2",
            reviewCount: "58"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "3999",
            priceValidUntil: "2025-12-31",
            seller: { "@type": "Organization", name: "AK Infotech" }
          }
        }
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Product",
          name: "Smart TVs",
          description: "LED and Smart TVs from leading brands",
          brand: { "@type": "Brand", name: "Samsung" },
          category: "Electronics",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "150"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "15999",
            priceValidUntil: "2025-12-31",
            seller: { "@type": "Organization", name: "AK Infotech" }
          }
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}


export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
