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
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mata Mauli Doors",
    title: "Mata Mauli Doors | Premium Doors in Nashik",
    description:
      "Premium wooden, PVC, and designer doors handcrafted in Igatpuri, Nashik by Mata Mauli Industries.",
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
      <body>{children}</body>
    </html>
  );
}
