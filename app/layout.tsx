import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu/Menu";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import {ScrollToTopButton} from "../components/scrolltotop"
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashira Fernando",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">     
      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
        <ScrollToTopButton />
        <Analytics />
        </body>
    </html>

  );
}
