"use client";

import { useEffect, useRef } from 'react';

export default function PerformanceOptimizer() {
  const workerRef = useRef(null);

  useEffect(() => {
    // Initialize Web Worker for heavy computations
    if (typeof Worker !== 'undefined') {
      try {
        workerRef.current = new Worker('/src/utils/performanceWorker.js');
        
        workerRef.current.onmessage = (e) => {
          const { type, data } = e.data;
          
          switch (type) {
            case 'ANIMATIONS_PROCESSED':
              // Handle processed animation data
              console.log('Animations processed in background');
              break;
            case 'IMAGES_PROCESSED':
              // Handle processed image data
              console.log('Images processed in background');
              break;
          }
        };
      } catch (error) {
        console.warn('Web Worker not supported:', error);
      }
    }

    // Optimize main thread performance
    const optimizeMainThread = () => {
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
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href
          });
        }
      }, 3000);
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
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
      if (workerRef.current) {
        workerRef.current.terminate();
      }
      cleanupScroll();
    };
  }, []);

  return null;
}