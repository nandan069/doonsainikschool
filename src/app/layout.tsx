import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doon Sainik School Dehradun | Best Sainik School, Military School, RIMC",
  description:
    "Doon Sainik School Dehradun – Premier institution for RIMC, Sainik School, Military School entrance preparation with Schooling, Coaching and SSB Training. Admission Open For 2025-26.",
  keywords:
    "Doon Sainik School, Sainik School Coaching Dehradun, RIMC Coaching, Military School Coaching, SSB Training, NDA Coaching",
  openGraph: {
    title: "Doon Sainik School Dehradun",
    description:
      "Best Sainik School, Military School, RIMC with Schooling, Coaching and SSB Training",
    type: "website",
    url: "https://doonsainikschool.com",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased bg-military-bg text-military-white`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <SmoothScrolling>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
