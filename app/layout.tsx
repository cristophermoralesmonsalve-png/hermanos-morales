import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Hermanos Morales | Muebles a Medida",
  description:
    "Diseñamos y fabricamos muebles de madera únicos y a medida para tu hogar, terraza o jardín. Bancas, sillones y muebles de exterior con terminación premium.",
  keywords: ["muebles a medida", "muebles de madera", "bancas", "sillones", "muebles de jardín", "Hermanos Morales"],
  openGraph: {
    title: "Hermanos Morales | Muebles a Medida",
    description: "Muebles de madera hechos a medida para tu hogar, terraza o jardín.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#111111",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
