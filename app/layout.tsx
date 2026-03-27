import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G&A Studio — Shopify Experts | CRO & Development",
  description:
    "Guillermo & Alfredo. Shopify developers and project managers specializing in CRO, custom development and high-converting ecommerce stores.",
  keywords:
    "Shopify developers, CRO, ecommerce, Shopify Plus, conversion rate optimization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
