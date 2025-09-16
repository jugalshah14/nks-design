import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import React from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WebVitals from "@/components/WebVitals";
import MobileOptimizer from "@/components/MobileOptimizer";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import BFCacheOptimizer from "@/components/BFCacheOptimizer";
import CSSOptimizer from "@/components/CSSOptimizer";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
  fallback: ["serif"],
});

const Satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Italic.woff",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-MediumItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-BoldItalic.woff",
      weight: "bold",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

export const metadata = {
  title: "New Kolkata",
  description:
    "Alcove Realty presents New Kolkata Sangam a riverside project where the beauty of nature meets the artistry of modern architecture. Your dream home awaits by the riverside. Explore now!",
  keywords:
    "Apartments/Flat In Serampore New Kolkata, Serampore Flats For Sale, Serampore Flat Price | Serampore Flat - New Kolkata",
  // Critical for Core Web Vitals optimization
  other: {
    'preload': '/assets/Riverview.webp',
    'preload': '/assets/Riverviewmobile.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Critical CSS using your existing styles - no design changes */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Your existing critical styles for faster loading */
            .hero-section-title {
              text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
              font-family: "Cormorant Garamond", serif;
            }
            .hero-section-bg {
              background: linear-gradient(
                  180deg,
                  rgba(79, 112, 175, 0) 59.25%,
                  rgba(79, 112, 175, 0.78) 81.4%,
                  #4f70af 98.92%
                ),
                linear-gradient(
                  180deg,
                  rgba(79, 112, 175, 0.4) 28.62%,
                  rgba(79, 112, 175, 0) 37.67%
                );
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            }
            .container {
              width: 90% !important;
            }
            .project-overview-title {
              font-family: "Cormorant Garamond", serif;
              font-weight: 400;
              font-size: 56px;
              line-height: 72px;
              letter-spacing: 0%;
              color: rgba(34, 37, 46, 1);
            }
            .orange-color {
              color: rgba(222, 128, 75, 1);
            }
            /* Your existing mobile styles */
            @media (max-width: 768px) {
              .project-overview-title {
                font-size: 36px;
                line-height: 44px;
              }
              .hero-section-bg {
                min-height: 100vh;
                min-width: 100vw;
              }
              .container {
                width: auto !important;
              }
            }
          `
        }} />
        {/* Critical resource hints for Core Web Vitals optimization */}
        <link rel="preload" href="/assets/Riverview.webp" as="image" type="image/webp" media="(min-width: 769px)" />
        <link rel="preload" href="/assets/Riverviewmobile.webp" as="image" type="image/webp" media="(max-width: 768px)" />
        <link rel="preload" href="/assets/icons/connectivity.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/icons/residential.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/icons/area_of_project.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/icons/family-icon.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/bitmap.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/assets/icons/verticalwaves.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/icons/info.svg" as="image" type="image/svg+xml" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//admin.newkolkata.in" />
        <link rel="dns-prefetch" href="//www.rera.wb.gov.in" />
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://admin.newkolkata.in" />
        {/* Mobile-specific optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* BFCache optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body
        className={`${cormorant.className} ${Satoshi.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics />
        <WebVitals />
        <MobileOptimizer />
        <PerformanceOptimizer />
        <BFCacheOptimizer />
        <CSSOptimizer />
        <React.Suspense fallback={<div>Loading......</div>}>
          <Header />
          {children}
          <Footer />
        </React.Suspense>
      </body>
    </html>
  );
}
