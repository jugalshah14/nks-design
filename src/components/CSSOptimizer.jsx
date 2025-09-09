"use client";

import { useEffect, useState } from 'react';

export default function CSSOptimizer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag to prevent hydration mismatch
    setIsClient(true);
    
    // Load non-critical CSS asynchronously
    const loadDeferredCSS = () => {
      if (typeof window === 'undefined') return;
      
      const loadCSS = (href, media = 'all') => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = media;
        
        if (media === 'print') {
          link.onload = () => {
            link.media = 'all';
          };
        }
        
        document.head.appendChild(link);
      };

      // Load non-critical CSS after initial render
      setTimeout(() => {
        // Load component-specific CSS
        const componentCSS = `
          /* Non-critical component styles */
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(30px);
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Hover effects */
          .button-primary:hover {
            background-color: #020c22;
            transition: background-color 0.5s ease;
          }
          
          .button-secondary:hover {
            background-color: #002F52;
            transition: background-color 0.5s ease;
          }
          
          /* Complex animations */
          .marquee-content {
            animation: marquee 15s linear infinite;
          }
          
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          
          /* Form styles */
          .form-label {
            position: relative;
            border: 1px solid #ededed;
            display: flex;
            height: 60px;
            overflow: hidden;
          }
          
          .form-input {
            width: 100%;
            padding: 10px 0px;
            border: none;
            outline: none;
            resize: none;
          }
          
          /* Complex gradients */
          .text-gradient-1 {
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(119deg, #de804b 23%, #1e8bda 75%),
              linear-gradient(300deg, #fff 24%, rgba(255, 255, 255, 0.44) 52%);
            -webkit-background-clip: text;
            background-clip: text;
          }
        `;

        // Inject non-critical CSS
        const style = document.createElement('style');
        style.id = 'deferred-css';
        style.textContent = componentCSS;
        document.head.appendChild(style);
      }, 100);
    };

    // Optimize CSS based on connection speed
    const optimizeForConnection = () => {
      if (typeof window === 'undefined' || !('connection' in navigator)) return;
      
      const connection = navigator.connection;
      const effectiveType = connection.effectiveType;

      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        // For slow connections, inline more critical CSS
        const additionalCSS = `
          /* Additional critical CSS for slow connections */
          .hero-section-bg {
            background-image: url('/assets/Riverviewmobile.png');
          }
          
          @media (min-width: 769px) {
            .hero-section-bg {
              background-image: url('/assets/Riverview.jpeg');
            }
          }
          
          /* Reduce animation complexity for slow connections */
          .animate-slide-up {
            animation-duration: 0.4s;
          }
          
          .animate-fade-in {
            animation-duration: 0.3s;
          }
        `;
        
        const style = document.createElement('style');
        style.id = 'slow-connection-css';
        style.textContent = additionalCSS;
        document.head.appendChild(style);
      }
    };

    // Remove unused CSS (basic implementation)
    const removeUnusedCSS = () => {
      if (typeof window === 'undefined') return;
      
      // This is a simplified version - in production, use PurgeCSS at build time
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      
      stylesheets.forEach(stylesheet => {
        const href = stylesheet.href;
        if (href && href.includes('unused')) {
          // Mark as print media to defer loading
          stylesheet.media = 'print';
          stylesheet.onload = () => {
            stylesheet.media = 'all';
          };
        }
      });
    };

    // Initialize CSS optimizations
    loadDeferredCSS();
    optimizeForConnection();
    removeUnusedCSS();

    // Preload critical fonts
    const preloadFonts = () => {
      if (typeof window === 'undefined') return;
      
      const fonts = [
        { href: '/fonts/Satoshi-Regular.woff', type: 'font/woff' },
        { href: '/fonts/Satoshi-Medium.woff', type: 'font/woff' },
        { href: '/fonts/Satoshi-Bold.woff', type: 'font/woff' },
        { href: '/fonts/Cormorant-Garamond-Regular.woff2', type: 'font/woff2' },
      ];

      fonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font.href;
        link.as = 'font';
        link.type = font.type;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    preloadFonts();

  }, []);

  // Don't render anything during SSR to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return null;
}

