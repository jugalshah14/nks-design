"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  const GA_ID = "G-TCS9KBZ1T7";

  if (!GA_ID) return null;

  return (
    <>
      {/* GA4 Config */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
