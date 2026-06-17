import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Host_Grotesk } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${brand.name} · Private proposals`,
  description: "Secure access to client proposal decks.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hostGrotesk.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden font-sans">{children}</body>
    </html>
  );
}
