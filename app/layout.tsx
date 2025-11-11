import type { Metadata } from "next";
import { EB_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/provider";

const outfitSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Nonso & Adanna's Wedding",
  description:
    "Join us in celebrating the union of Nonso and Adanna. Explore our wedding website for details on the big day, RSVP, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfitSans.variable} ${ebGaramond.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
