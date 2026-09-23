import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0d0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Akritidesigners — Architectural Planning, 3D Visualization & Engineering",
    template: "%s | Akritidesigners",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Akritidesigners",
    "Architectural Planning",
    "Interior Design Studio",
    "Exterior Elevation",
    "AutoCAD Drafting",
    "3D Visualization",
    "Architectural Renders",
    "SketchUp Modeling",
    "Structural Design",
    "Quantity Estimation",
    "BOQ Cost Estimation",
    "Working Drawings"
  ],
  authors: [{ name: "Akritidesigners Studio" }],
  creator: "Akritidesigners",
  publisher: "Akritidesigners",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name + " — " + siteConfig.tagline,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Akritidesigners Studio Architecture & Visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name + " — " + siteConfig.tagline,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: "$$",
    serviceArea: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architectural & Engineering Services",
      itemListElement: siteConfig.disciplines.map((d) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: d,
        },
      })),
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans selection:bg-sky-500 selection:text-zinc-950">
        {/* Skip to Main Content Link for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sky-500 text-zinc-950 font-mono text-xs font-bold rounded shadow-lg"
        >
          Skip to main content
        </a>

        {/* Global Navigation */}
        <Navbar />

        {/* Page Main Content */}
        <main id="main-content" className="flex-1 w-full flex flex-col">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
