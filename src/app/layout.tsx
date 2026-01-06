import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TanstackProvider from "@/providers/TanstackProvider";
import "./globals.css";

import ThemeRegistry from "@/providers/ThemeRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js MUI Boilerplate",
  description:
    "A production-ready Enterprise boilerplate for Next.js 15, Material UI v6, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{String(metadata.title)}</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanstackProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </TanstackProvider>
      </body>
    </html>
  );
}
