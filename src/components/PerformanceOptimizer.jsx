"use client";

import { useEffect, useState } from 'react';

// Performance optimization component
export const PerformanceOptimizer = ({ children, threshold = 0.1, rootMargin = '50px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsVisible(true);
          setHasIntersected(true);
          // Disconnect observer after first intersection to save memory
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = document.querySelector('[data-performance-optimizer]');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, hasIntersected]);

  return (
    <div data-performance-optimizer>
      {isVisible ? children : (
        <div className="animate-pulse bg-gray-200 h-32 w-full rounded"></div>
      )}
    </div>
  );
};

// Lazy load wrapper with performance optimization
export const LazyLoadWrapper = ({ children, fallback, delay = 0 }) => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!shouldLoad) {
    return fallback || <div className="animate-pulse bg-gray-200 h-32 w-full rounded"></div>;
  }

  return children;
};

// Animation performance optimizer
export const AnimationOptimizer = ({ children, className = "", ...props }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    );

    const currentElement = document.querySelector('[data-animation-optimizer]');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      data-animation-optimizer
      className={`transition-opacity duration-300 ${isInView ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default PerformanceOptimizer;

