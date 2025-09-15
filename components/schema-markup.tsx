export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.akinfotechcctv.in/#business",
    name: "AK Infotech",
    alternateName: "AK Infotech CCTV",
    description:
      "Leading wholesale dealer of CCTV cameras, biometrics, access control, video door phones, TVs, computers, printers and cash counting machines in Chennai",
    url: "https://www.akinfotechcctv.in/",
    telephone: "+919500673207",
    email: "akinfotechtn@gmail.com",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "17:00"
      }
    ],
    paymentAccepted: ["Cash", "Bank Transfer", "UPI", "Credit Card", "Debit Card"],
    currenciesAccepted: "INR",
    priceRange: "₹₹",
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
      containedInPlace: {
        "@type": "Country",
        name: "India"
      }
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
            description: "Security cameras from Hikvision, Dahua, CPPlus",
            image: "https://www.akinfotechcctv.in/cctv-security-camera-system.png",
            url: "https://www.akinfotechcctv.in/products",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              price: "4999",
              seller: { "@type": "Organization", name: "AK Infotech" }
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.4",
              reviewCount: "125"
            }
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Biometric Systems",
            description: "Fingerprint and access control systems from ESSL, ZKTeco",
            image: "https://www.akinfotechcctv.in/biometric-fingerprint-scanner.png",
            url: "https://www.akinfotechcctv.in/products",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              price: "4999",
              seller: { "@type": "Organization", name: "AK Infotech" }
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5",
              reviewCount: "64"
            }
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Video Door Phones",
            description: "Intercom systems from Hikvision, Dahua, CPPlus",
            image: "https://www.akinfotechcctv.in/video-door-phone-intercom.png",
            url: "https://www.akinfotechcctv.in/products",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              price: "2999",
              seller: { "@type": "Organization", name: "AK Infotech" }
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.3",
              reviewCount: "85"
            }
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Computers & Peripherals",
            description: "Laptops, desktops, monitors from Dell, Acer, Asus",
            image: "https://www.akinfotechcctv.in/desktop-computer-setup-office.png",
            url: "https://www.akinfotechcctv.in/products",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              price: "15999",
              seller: { "@type": "Organization", name: "AK Infotech" }
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.6",
              reviewCount: "150"
            }
          },
        },
      ],
    },
    sameAs: [
      "https://www.google.com/maps/place/AK+Infotech",
      "https://www.akinfotechcctv.in/"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    }
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
    alternateName: "AK Infotech CCTV",
    legalName: "AK Infotech",
    url: "https://www.akinfotechcctv.in/",
    logo: {
      "@type": "ImageObject",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg",
      width: 200,
      height: 200
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg",
    description:
      "Wholesale dealer of electronics and security solutions in Chennai. Authorized dealer for Hikvision, Dahua, CPPlus, TCL, Samsung, Dell, Canon, HP and more.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919500673207",
        contactType: "sales",
        email: "akinfotechtn@gmail.com",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil", "Hindi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00"
        }
      },
      {
        "@type": "ContactPoint",
        telephone: "+919500673207",
        contactType: "customer service",
        email: "akinfotechtn@gmail.com",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil", "Hindi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "17:00"
        }
      }
    ],
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
    sameAs: [
      "https://www.google.com/maps/place/AK+Infotech",
      "https://www.akinfotechcctv.in/"
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electronics Wholesale",
          description: "Wholesale supply of CCTV cameras, biometrics, access control systems, computers, TVs and printers"
        }
      }
    ]
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
          image: "https://www.akinfotechcctv.in/cctv-security-camera-system.png",
          url: "https://www.akinfotechcctv.in/products#cctv-cameras",
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
          image: "https://www.akinfotechcctv.in/video-door-phone-intercom.png",
          url: "https://www.akinfotechcctv.in/products#video-door-phones",
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
          image: "https://www.akinfotechcctv.in/biometric-fingerprint-scanner.png",
          url: "https://www.akinfotechcctv.in/products#biometric-systems",
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
          image: "https://www.akinfotechcctv.in/access-control-card-reader-system.png",
          url: "https://www.akinfotechcctv.in/products#access-control-systems",
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
          image: "https://www.akinfotechcctv.in/modern-smart-tv-display.png",
          url: "https://www.akinfotechcctv.in/products#smart-tvs",
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

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What products does AK Infotech sell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AK Infotech is a wholesale dealer specializing in CCTV cameras, biometric systems, access control, video door phones, smart TVs, computers, printers, and cash counting machines. We are authorized dealers for brands like Hikvision, Dahua, CPPlus, TCL, Samsung, Dell, Canon, and HP."
        }
      },
      {
        "@type": "Question",
        name: "Where is AK Infotech located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our showroom is located at No.19, Shop No: F22 & F23, 1st Floor, Uno Arcade A/C Complex, Meeran Sahib Street, Mount Road, Chennai - 600002. We serve customers across Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        name: "What are your business hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are open Monday to Saturday from 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 5:00 PM. You can also contact us at +919500673207 or email akinfotechtn@gmail.com for inquiries."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer wholesale prices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in wholesale pricing for bulk orders and registered dealers. We offer competitive rates for CCTV cameras, biometric systems, computers, TVs, and other electronics. Contact us for custom quotes."
        }
      },
      {
        "@type": "Question",
        name: "Are you GST registered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are GST registered with GSTN: 33CPAPA9563H1Z1. All our transactions are transparent and include proper GST documentation."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
