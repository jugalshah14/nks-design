"use client";

import { useState, useEffect, useRef } from 'react';

// Intersection Observer hook for performance
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasIntersected, options]);

  return [ref, isIntersecting];
};

// Performance-optimized component loader
export const PerformanceLoader = ({ 
  children, 
  fallback = null, 
  delay = 0,
  threshold = 0.1,
  rootMargin = '100px'
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold, rootMargin });
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, delay]);

  if (!shouldRender) {
    return (
      <div ref={ref} className="min-h-[200px]">
        {fallback || <div className="animate-pulse bg-gray-100 h-32 w-full rounded"></div>}
      </div>
    );
  }

  return <div ref={ref}>{children}</div>;
};

// Lazy component wrapper with performance optimization
export const LazyComponent = ({ 
  component: Component, 
  fallback = null,
  delay = 0,
  ...props 
}) => {
  return (
    <PerformanceLoader fallback={fallback} delay={delay}>
      <Component {...props} />
    </PerformanceLoader>
  );
};

// CSS-only animation wrapper
export const CSSAnimation = ({ 
  children, 
  animation = 'fadeIn',
  delay = 0,
  className = '',
  ...props 
}) => {
  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `animate-${animation}-delay` : '';
  
  return (
    <div 
      className={`${animationClass} ${delayClass} ${className}`}
      style={{ animationDelay: delay > 0 ? `${delay}s` : undefined }}
      {...props}
    >
      {children}
    </div>
  );
};

export default PerformanceLoader;
