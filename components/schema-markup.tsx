export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://akinfotech.com/#business",
    name: "AK Infotech",
    description:
      "Leading wholesale dealer of CCTV cameras, biometrics, access control, video door phones, TVs, computers, printers and cash counting machines in Chennai",
    url: "https://akinfotech.com",
    telephone: "+919500673207",
    email: "akinfotechtn@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.19, Shop No: F22 & F23, 1st Floor, Uno Arcade A/C Complex, Meeran Sahib Street",
      addressLocality: "Mount Road",
      addressRegion: "Tamil Nadu",
      postalCode: "600002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0827",
      longitude: "80.2707",
    },
    openingHours: ["Mo-Sa 09:00-19:00", "Su 10:00-17:00"],
    paymentAccepted: "Cash, Bank Transfer, UPI",
    currenciesAccepted: "INR",
    priceRange: "Wholesale Prices",
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electronics Wholesale Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "CCTV Cameras",
            description: "Security cameras from Hikvision, Dahua, CPPlus brands",
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
            description: "Laptops, desktops, monitors from Dell, Acer, Asus brands",
          },
        },
      ],
    },
    sameAs: ["https://www.google.com/maps/place/AK+Infotech"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://akinfotech.com/#organization",
    name: "AK Infotech",
    legalName: "AK Infotech",
    url: "https://akinfotech.com",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg",
    description: "Wholesale dealer of electronics and security solutions in Chennai",
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
      streetAddress: "No.19, Shop No: F22 & F23, 1st Floor, Uno Arcade A/C Complex, Meeran Sahib Street",
      addressLocality: "Mount Road",
      addressRegion: "Tamil Nadu",
      postalCode: "600002",
      addressCountry: "IN",
    },
    taxID: "33CPAPA9563H1Z1",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ProductCatalogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AK Infotech Product Catalog",
    description: "Complete range of electronics at wholesale prices",
    numberOfItems: 9,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "CCTV Cameras",
          description: "Security surveillance cameras from top brands",
          brand: ["Hikvision", "Dahua", "CPPlus", "Prama", "TP Link"],
          category: "Security Equipment",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "Contact for wholesale price",
            seller: {
              "@type": "Organization",
              name: "AK Infotech",
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Video Door Phones",
          description: "Intercom and video door phone systems",
          brand: ["Hikvision", "Dahua", "CPPlus"],
          category: "Security Equipment",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "Contact for wholesale price",
            seller: {
              "@type": "Organization",
              name: "AK Infotech",
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Biometric Systems",
          description: "Fingerprint and biometric access control systems",
          brand: ["ESSL", "ZKTeco"],
          category: "Security Equipment",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "Contact for wholesale price",
            seller: {
              "@type": "Organization",
              name: "AK Infotech",
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Product",
          name: "Access Control Systems",
          description: "Door access control and card reader systems",
          brand: ["ESSL", "ZKTeco"],
          category: "Security Equipment",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "Contact for wholesale price",
            seller: {
              "@type": "Organization",
              name: "AK Infotech",
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Product",
          name: "Smart TVs",
          description: "LED and Smart TVs from leading brands",
          brand: ["TCL", "Maxxion", "LG", "Samsung"],
          category: "Electronics",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "Contact for wholesale price",
            seller: {
              "@type": "Organization",
              name: "AK Infotech",
            },
          },
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
