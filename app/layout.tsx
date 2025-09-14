import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { DM_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "AK Infotech - Wholesale Electronics Dealer in Chennai | CCTV, Biometrics, Access Control",
  description:
    "AK Infotech offers wholesale prices on CCTV cameras, video door phones, biometrics, access control systems, TVs, computers, and printers in Chennai. Brands: Hikvision, Dahua, CPPlus, ESSL, ZKTeco, TCL, and more.",
  keywords:
    "CCTV camera Chennai, wholesale electronics, biometrics, access control, video door phone, TCL TV, cash counting machine, computers Chennai, printers Chennai, Hikvision Authorised Dealer, CPPlus Authorised Dealer,Prama Authorised Dealer, Hi-Focus Authorised Dealer, Uniview Authorised Dealer, Honeywell Authorised Dealer, Dahua Authorised Dealer, Canon Printer Authorised Dealer, HP Printer Authorised Dealer, Epson Printer Authorised Dealer, TCL TV Authorised Dealer, Zebronics Authorised Dealer, CCTV wholesale Dealer, cctv camera shop near me, cctv camera shop in ritchie street, cctv store near me, surveillance camera store near me, near by cctv camera shop, cc camera shop near me, shop camera cctv, near cctv camera shop, cctv camera store, cctv camera for store, cctv camera dealers in ritchie street, ritchie street cctv camera shop, security camera store near me",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "AK Infotech - Wholesale Electronics Dealer in Chennai",
    description:
      "Wholesale supplier of CCTV cameras, biometrics, access control, TVs, computers and printers in Chennai at competitive prices.",
    type: "website",
    locale: "en_IN",
    url: "https://www.akinfotechcctv.in/",
    siteName: "AK Infotech",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg",
        width: 1200,
        height: 630,
        alt: "AK Infotech - Wholesale Electronics Dealer Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Infotech - Wholesale Electronics Dealer in Chennai",
    description:
      "Wholesale supplier of CCTV cameras, biometrics, access control, TVs, computers and printers in Chennai",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg"],
  },
  alternates: {
    canonical: "https://www.akinfotechcctv.in/",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    ICBM: "13.0827, 80.2707",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.akinfotechcctv.in/" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-tdFymAcvfv6JWRb2PupiOqtcUUtoPC.jpeg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans ${dmSans.variable} ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
