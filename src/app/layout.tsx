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
