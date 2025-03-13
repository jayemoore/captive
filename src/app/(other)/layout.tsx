import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AosProvider from "../providers/Aos";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Captive",
  description:
    "Captiv8 Integrated Services, LLC (CIS) is a certified Small Business by the Small Business Administration (SBA) dedicated to delivering cutting-edge solutions that empower organizations to optimize their operations.",
};

export default function OtherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AosProvider>
      <Navbar />
      <main className={`${inter.variable}`}>{children}</main>
      <Footer />
    </AosProvider>
  );
}
