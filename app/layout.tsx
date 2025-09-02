import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShadCN Tags Input - React Component Library",
  description:
    "Professional shadcn tags input component for React applications with advanced form validation, animations, and enterprise-grade features.",
  keywords: [
    "react",
    "tags",
    "input",
    "component",
    "form",
    "validation",
    "typescript",
    "shadcn tags input",
  ],
  authors: [{ name: "Muhammad Aqib" }],
  generator: "v0.app",
  openGraph: {
    title: "ShadCN Tags Input - React Component Library",
    description:
      "Professional tags input component for React applications with advanced form validation and animations.",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://shadcn-tags-input.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
