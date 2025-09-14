const brands = [
  {
    name: "Hikvision",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cctv-for-home-security-CN59pBVORV6zo8AQwfG3wwkJlZgL5i.webp",
  },
  {
    name: "Dahua",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/night-vision-cctv-camera-MH2PMf2LbHiXsA2Rn5w7tbSOl0NKqs.webp",
  },
  {
    name: "CPPlus",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cctv-maintenance-services-9BOl4bdLhqzoReicco0pJf0fLNQaHC.webp",
  },
  {
    name: "ESSL",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fingerprint-scanner-dealers-in-chennai-zJDpCtKWcl94AHrjdHjpIvvQaIS1Ps.webp",
  },
  { name: "ZKTeco", logo: "/zkteco-logo.png" },
  { name: "TCL", logo: "/tcl-electronics-television-brand-logo.jpg" },
  { name: "Samsung", logo: "/samsung-electronics-brand-logo.jpg" },
  { name: "LG", logo: "/lg-electronics-brand-logo.jpg" },
  {
    name: "Dell",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dell-logo-png-open-2000-9JOdB7UYoA4yijYadqE8aCg2Aw39vw.png",
  },
  { name: "HP", logo: "/hp-hewlett-packard-printer-computer-brand-logo.jpg" },
  {
    name: "Canon",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canon-Logo-8V84R1JsDBNUKxIZDpy1jjJRwXsK4O.png",
  },
  {
    name: "Epson",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Epson-Logo-KmQr6iHe8lFdZmwHJv2UkuTPuhPPX9.png",
  },
]

export function BrandsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">
            Authorized Dealer for Leading Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with industry-leading manufacturers to bring you genuine products with full warranty support
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-card rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">And many more trusted brands in electronics and security solutions</p>
        </div>
      </div>
    </section>
  )
}
