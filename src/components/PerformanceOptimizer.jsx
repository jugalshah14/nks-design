"use client";

import { useEffect, useRef, useState } from 'react';

export default function PerformanceOptimizer() {
  const workerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag to prevent hydration mismatch
    setIsClient(true);
    
    // Initialize performance optimizations without Web Worker
    // Web Worker removed to avoid build errors

    // Optimize main thread performance
    const optimizeMainThread = () => {
      if (typeof window === 'undefined') return;
      
      // Use requestIdleCallback for non-critical tasks
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Process non-critical animations
          const animations = document.querySelectorAll('[data-animation]');
          animations.forEach(animation => {
            animation.style.willChange = 'transform';
          });
        });
      }

      // Use requestAnimationFrame for smooth animations
      let animationId;
      const animate = () => {
        // Process animations in chunks
        const elements = document.querySelectorAll('.animate-slide-up, .animate-slide-up-delay');
        elements.forEach((element, index) => {
          if (index % 10 === 0) { // Process in chunks of 10
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
          }
        });
        
        animationId = requestAnimationFrame(animate);
      };
      
      // Start animation processing
      setTimeout(() => {
        animate();
      }, 100);
    };

    // Defer heavy operations
    const deferHeavyOperations = () => {
      if (typeof window === 'undefined') return;
      
      // Defer non-critical JavaScript execution
      setTimeout(() => {
        // Process lazy-loaded components
        const lazyComponents = document.querySelectorAll('[data-lazy]');
        lazyComponents.forEach(component => {
          component.classList.add('loaded');
        });
      }, 2000);

      // Defer analytics and tracking
      setTimeout(() => {
        // Load analytics after critical content
        if (window.gtag) {
          window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href
          });
        }
      }, 3000);
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      if (typeof window === 'undefined') return () => {};
      
      let ticking = false;
      
      const updateScroll = () => {
        // Throttle scroll events
        const scrollY = window.scrollY;
        const elements = document.querySelectorAll('[data-scroll-optimize]');
        
        elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('in-viewport');
          } else {
            element.classList.remove('in-viewport');
          }
        });
        
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    };

    // Initialize optimizations
    optimizeMainThread();
    deferHeavyOperations();
    const cleanupScroll = optimizeScroll();

    // Cleanup
    return () => {
      cleanupScroll();
    };
  }, []);

  // Don't render anything during SSR to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return null;
}