import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const goshaSans = localFont({
  src: [
    {
      path: "../../public/font/PPGoshaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gosha",
});

const hybi11 = localFont({
  src: [
    {
      path: "../../public/font/Hybi11AmigoLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Hybi11AmigoRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Hybi11AmigoSemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Hybi11AmigoBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Hybi11AmigoExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-hybi11",
});

export const metadata: Metadata = {
  title: "Alt F Awesome · Private proposals",
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
      className={`${goshaSans.variable} ${hybi11.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
