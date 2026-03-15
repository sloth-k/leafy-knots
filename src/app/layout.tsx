import type { Metadata } from "next";

import "@/app/globals.css";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloatingButton } from "@/components/common/WhatsAppFloatingButton";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Leafy Knots | Handmade Crochet & Knitted Creations in Hyderabad",
    template: "%s | Leafy Knots",
  },
  description: siteConfig.description,
  keywords: [
    "Leafy Knots",
    "handmade crochet Hyderabad",
    "handmade knitting Hyderabad",
    "crochet gifts India",
    "custom crochet orders",
    "Hyderabad handmade brand",
  ],
  openGraph: {
    title: "Leafy Knots | Handmade Crochet & Knitted Creations in Hyderabad",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1600,
        height: 1200,
        alt: "Leafy Knots handmade collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leafy Knots | Handmade Crochet & Knitted Creations in Hyderabad",
    description: siteConfig.description,
    images: [siteConfig.heroImage],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  image: `${siteConfig.url}${siteConfig.heroImage}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  areaServed: ["Hyderabad", "India"],
  url: siteConfig.url,
  telephone: siteConfig.whatsappPhone,
  sameAs: [siteConfig.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream font-body text-brown antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </div>
      </body>
    </html>
  );
}
