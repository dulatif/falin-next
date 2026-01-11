import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TanstackProvider from "@/providers/TanstackProvider";
import ThemeRegistry from "@/providers/ThemeRegistry";
import "@/theme/css/colors.css";
import "@/theme/css/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Falin Next",
  description:
    "A production-ready Enterprise boilerplate for Next.js 15, Material UI v6, and TypeScript.",
  openGraph: {
    title: "Falin Next",
    description:
      "A production-ready Enterprise boilerplate for Next.js 15, Material UI v6, and TypeScript.",
    url: "https://github.com/dulatif/falin-next",
    siteName: "Falin Next",
    images: [
      {
        url: "/falin-logo.png",
        width: 512,
        height: 512,
        alt: "Falin Next Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falin Next",
    description:
      "A production-ready Enterprise boilerplate for Next.js 15, Material UI v6, and TypeScript.",
    images: ["/falin-logo.png"],
  },
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
      <body className={`${inter.variable}`}>
        <TanstackProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </TanstackProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
