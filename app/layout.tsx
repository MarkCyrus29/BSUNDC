import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "BSC — Premium Bathroom, Kitchen & Building Products",
  description:
    "Engineered in Germany & Denmark. BSC delivers premium faucets, fixtures, and sanitary products that unite precision engineering with refined design for residential and commercial spaces across Southeast Asia.",
  openGraph: {
    title: "BSC — Engineered Precision, Designed Beauty",
    description:
      "Premium bathroom, kitchen & building products. German-Danish engineering. Trusted across Southeast Asia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}

        {/* Paper noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Editorial grid lines — desktop only */}
        <div className="hidden lg:block" aria-hidden="true">
          <div className="grid-line" style={{ left: "8.33%" }} />
          <div className="grid-line" style={{ left: "33.33%" }} />
          <div className="grid-line" style={{ left: "66.66%" }} />
          <div className="grid-line" style={{ left: "91.66%" }} />
        </div>
      </body>
    </html>
  );
}
