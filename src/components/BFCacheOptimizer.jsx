"use client";

import { useEffect } from 'react';

export default function BFCacheOptimizer() {
  useEffect(() => {
    // Optimize Back/Forward Cache (BFCache) restoration
    const handlePageShow = (event) => {
      // Check if page was restored from BFCache
      if (event.persisted) {
        // Page was restored from BFCache, reinitialize components
        console.log('Page restored from BFCache');
        
        // Reinitialize animations
        const animations = document.querySelectorAll('[data-animation]');
        animations.forEach(animation => {
          animation.style.animation = 'none';
          animation.offsetHeight; // Trigger reflow
          animation.style.animation = null;
        });
        
        // Reinitialize lazy-loaded components
        const lazyComponents = document.querySelectorAll('[data-lazy]');
        lazyComponents.forEach(component => {
          if (component.getBoundingClientRect().top < window.innerHeight) {
            component.classList.add('loaded');
          }
        });
      }
    };

    const handlePageHide = (event) => {
      // Page is being hidden, prepare for BFCache
      console.log('Page being hidden, preparing for BFCache');
      
      // Clean up event listeners that might prevent BFCache
      const elements = document.querySelectorAll('[data-bfcache-cleanup]');
      elements.forEach(element => {
        element.removeEventListener('scroll', () => {});
        element.removeEventListener('resize', () => {});
      });
    };

    const handleBeforeUnload = (event) => {
      // Clean up before page unload
      console.log('Page unloading, cleaning up');
      
      // Remove event listeners
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', () => {});
    };

    // Add event listeners
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}
