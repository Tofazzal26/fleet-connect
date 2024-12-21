import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "FleetConnect",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${rajdhani.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}