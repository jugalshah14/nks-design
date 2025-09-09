"use client";

import { useEffect } from 'react';

// Web Vitals monitoring for Core Web Vitals optimization
export function reportWebVitals(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Send to Google Analytics or other analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  }
}

// Web Vitals component for monitoring
export default function WebVitals() {
  useEffect(() => {
    // Import web-vitals dynamically to avoid blocking initial load
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(reportWebVitals);
      onFID(reportWebVitals);
      onFCP(reportWebVitals);
      onLCP(reportWebVitals);
      onTTFB(reportWebVitals);
    }).catch((error) => {
      console.warn('Web Vitals monitoring failed to load:', error);
    });

    // Import advanced performance monitoring
    import('@/utils/performanceMonitor').then(({ performanceMonitor }) => {
      // Monitor is automatically initialized
      console.log('Advanced performance monitoring enabled');
    }).catch((error) => {
      console.warn('Advanced performance monitoring failed to load:', error);
    });
  }, []);

  return null;
}

