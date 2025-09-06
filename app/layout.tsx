import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAWIBAWA - Madu Trigona Premium untuk Kesehatan",
  description:
    "Madu trigona premium KAWIBAWA yang dipanen dengan metode lestari. Kaya nutrisi alami, 5x lebih tinggi antioksidan, dan ramah lingkungan. Dikelola mahasiswa IPB University.",
  keywords:
    "madu trigona, madu premium, madu alami, antioksidan, kesehatan, KAWIBAWA, IPB University, madu terbaik, organic honey",
  authors: [{ name: "KAWIBAWA" }],
  creator: "KAWIBAWA",
  publisher: "PT Wibawa Sejahtera Abadi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
