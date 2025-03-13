import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import AosProvider from "./providers/Aos";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Captive",
  description:
    "Captiv8 Integrated Services provides top-tier solutions for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} `}>
        {/* <AosProvider> */}
        {/* <Navbar /> */}
        {children}
        {/* <Footer/> */}
        {/* </AosProvider> */}
      </body>
    </html>
  );
}
