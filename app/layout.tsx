import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  createLocalBusinessJsonLd,
  createWebsiteJsonLd,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Mata Mauli Doors | Premium Doors in Nashik",
    template: "%s | Mata Mauli Doors",
  },
  description: siteDescription,
  keywords: [
    "premium doors Nashik",
    "wooden doors Nashik",
    "designer doors Igatpuri",
    "custom doors Maharashtra",
    "PVC doors India",
  ],
  authors: [{ name: "Mata Mauli Industries" }],
  creator: "Mata Mauli Industries",
  publisher: "Mata Mauli Industries",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: "Mata Mauli Doors | Premium Doors in Nashik",
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/logo.png",
        width: 640,
        height: 487,
        alt: "Mata Mauli Doors logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mata Mauli Doors | Premium Doors in Nashik",
    description: siteDescription,
    images: ["/logo.png"],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={[createLocalBusinessJsonLd(), createWebsiteJsonLd()]} />
        <div id="main-content" tabIndex={-1}>{children}</div>
      </body>
    </html>
  );
}

