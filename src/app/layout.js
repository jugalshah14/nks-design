import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import React from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WebVitals from "@/components/WebVitals";
import MobileOptimizer from "@/components/MobileOptimizer";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const Satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-BoldItalic.woff",
      weight: "bold",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Italic.woff",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-MediumItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "New Kolkata",
  description:
    "Alcove Realty presents New Kolkata Sangam a riverside project where the beauty of nature meets the artistry of modern architecture. Your dream home awaits by the riverside. Explore now!",
  keywords:
    "Apartments/Flat In Serampore New Kolkata, Serampore Flats For Sale, Serampore Flat Price | Serampore Flat - New Kolkata",
  // Critical for Core Web Vitals optimization
  other: {
    'preload': '/assets/Riverview.png',
    'preload': '/assets/Riverviewmobile.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Critical resource hints for Core Web Vitals optimization */}
        <link rel="preload" href="/assets/Riverview.png" as="image" type="image/png" media="(min-width: 769px)" />
        <link rel="preload" href="/assets/Riverviewmobile.png" as="image" type="image/png" media="(max-width: 768px)" />
        <link rel="preload" href="/assets/icons/connectivity.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/icons/residential.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/icons/area_of_project.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/icons/family-icon.svg" as="image" type="image/svg+xml" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//admin.newkolkata.in" />
        <link rel="dns-prefetch" href="//www.rera.wb.gov.in" />
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://admin.newkolkata.in" />
        {/* Mobile-specific optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${cormorant.className} ${Satoshi.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics />
        <WebVitals />
        <MobileOptimizer />
        <React.Suspense fallback={<div>Loading......</div>}>
          <Header />
          {children}
          <Footer />
        </React.Suspense>
      </body>
    </html>
  );
}
