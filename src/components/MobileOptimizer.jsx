"use client";

import { useEffect, useState } from 'react';

// Mobile-specific performance optimizations
export default function MobileOptimizer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Mobile-specific optimizations
    if (isMobile) {
      // Reduce animation complexity on mobile
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
      
      // Optimize touch interactions
      document.documentElement.style.setProperty('--touch-action', 'manipulation');
      
      // Reduce layout shifts
      document.documentElement.style.setProperty('--contain', 'layout style paint');
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Mobile-specific meta tags and optimizations
  useEffect(() => {
    if (isMobile) {
      // Add mobile-specific meta tags
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
      }

      // Optimize for mobile performance
      document.body.style.setProperty('--webkit-tap-highlight-color', 'transparent');
      document.body.style.setProperty('--webkit-touch-callout', 'none');
      document.body.style.setProperty('--webkit-user-select', 'none');
      
      // Preload critical mobile resources
      const preloadImages = [
        '/assets/Riverviewmobile.png',
        '/assets/icons/connectivity.svg',
        '/assets/icons/residential.svg',
        '/assets/icons/area_of_project.svg',
        '/assets/icons/family-icon.svg'
      ];
      
      preloadImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
      
      // Performance monitoring for mobile
      if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          // Reduce quality for slow connections
          document.body.classList.add('slow-connection');
        }
      }
    }
  }, [isMobile]);

  return null;
}

