import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etarnity Image Compressor | Free Online JPG, PNG & WebP Compression",
  description:
    "Compress JPG, PNG, and WebP images online for free with Etarnity Image Compressor. Fast, secure, lightweight, and no signup required.",
  keywords: [
    "image compressor",
    "compress image online",
    "jpg compressor",
    "png compressor",
    "webp compressor",
    "reduce image size",
    "free image compressor",
    "online image optimizer",
  ],
  authors: [{ name: "Etarnity Global Innovation" }],
  creator: "Etarnity Global Innovation",
  publisher: "Etarnity Global Innovation",
  openGraph: {
    title: "Etarnity Image Compressor",
    description:
      "Compress JPG, PNG, and WebP images online for free. Fast, secure, and no signup required.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Etarnity Image Compressor",
    description:
      "Compress JPG, PNG, and WebP images online for free. Fast, secure, and no signup required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}