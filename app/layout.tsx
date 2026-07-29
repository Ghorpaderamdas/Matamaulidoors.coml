import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matamaulidoors.com"),
  title: {
    default: "Mata Mauli Doors | Premium Doors in Nashik",
    template: "%s | Mata Mauli Doors",
  },
  description:
    "Premium wooden, PVC, and designer doors handcrafted in Igatpuri, Nashik by Mata Mauli Industries.",
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mata Mauli Doors",
    title: "Mata Mauli Doors | Premium Doors in Nashik",
    description:
      "Premium wooden, PVC, and designer doors handcrafted in Igatpuri, Nashik by Mata Mauli Industries.",
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
    description:
      "Premium wooden, PVC, and designer doors handcrafted in Igatpuri, Nashik by Mata Mauli Industries.",
    images: ["/logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mata Mauli Doors",
  description: "Premium wooden, PVC, and designer doors handcrafted in Igatpuri, Nashik.",
  url: "https://matamaulidoors.com",
  telephone: "+917218554183",
  email: "info@matamaulidoors.com",
  image: "https://matamaulidoors.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Maruti Mandir, Taked BK",
    addressLocality: "Igatpuri",
    addressRegion: "Maharashtra",
    postalCode: "422403",
    addressCountry: "IN",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
