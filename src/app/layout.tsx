import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etarnity Image Compressor | Compress JPG, PNG & WebP Online",
  description:
    "Compress JPG, PNG, and WebP images online for free with Etarnity Image Compressor. Fast, secure, simple, and no signup required.",
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
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Etarnity Image Compressor",
    description:
      "Compress JPG, PNG, and WebP images online for free. Fast, secure, and no signup required.",
    url: "https://yourdomain.com",
    siteName: "Etarnity Image Compressor",
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