import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Bella Vista Pizzeria - Authentic Artisanal Pizza",
  description:
    "Experience the finest artisanal pizzas made with fresh, local ingredients. Order online for pickup or delivery.",
    
  generator: "Samra",
  icons: {
    icon: [
      { url: "/placeholder.png", sizes: "32x32" },
      { url: "/placeholder.png", type: "image/png", sizes: "192x192" },
      { url: "/placeholder.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/placeholder.png", type: "image/png", sizes: "180x180" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-heading: ${montserrat.style.fontFamily};
  --font-body: ${openSans.style.fontFamily};
}
        `}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
