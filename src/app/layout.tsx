import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Captive",
  description:
    "Captiv8 Integrated Services, LLC (CIS) is a certified Small Business by the Small Business Administration (SBA) dedicated to delivering cutting-edge solutions that empower organizations to optimize their operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable}   `}>{children}</body>
      <Footer/>
    </html>
  );
}
