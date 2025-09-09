// Performance monitoring utilities

/**
 * Monitor Core Web Vitals
 */
export const monitorCoreWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Monitor LCP (Largest Contentful Paint)
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  });
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

  // Monitor FID (First Input Delay)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      const fid = entry.processingStart - entry.startTime;
      console.log('FID:', fid);
    });
  });
  fidObserver.observe({ entryTypes: ['first-input'] });

  // Monitor CLS (Cumulative Layout Shift)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        console.log('CLS:', clsValue);
      }
    });
  });
  clsObserver.observe({ entryTypes: ['layout-shift'] });

  // Monitor FCP (First Contentful Paint)
  const fcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.name === 'first-contentful-paint') {
        console.log('FCP:', entry.startTime);
      }
    });
  });
  fcpObserver.observe({ entryTypes: ['paint'] });

  // Monitor TTFB (Time to First Byte)
  const navigation = performance.getEntriesByType('navigation')[0];
  if (navigation) {
    const ttfb = navigation.responseStart - navigation.requestStart;
    console.log('TTFB:', ttfb);
  }
};

/**
 * Monitor resource loading performance
 */
export const monitorResourcePerformance = () => {
  if (typeof window === 'undefined') return;

  const resourceObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.entryType === 'resource') {
        const { name, duration, transferSize, encodedBodySize } = entry;
        
        // Log slow resources
        if (duration > 1000) {
          console.warn(`Slow resource: ${name} (${Math.round(duration)}ms)`);
        }
        
        // Log large resources
        if (transferSize > 100000) {
          console.warn(`Large resource: ${name} (${Math.round(transferSize / 1024)}KB)`);
        }
      }
    });
  });

  resourceObserver.observe({ entryTypes: ['resource'] });
};

/**
 * Monitor memory usage
 */
export const monitorMemoryUsage = () => {
  if (typeof window === 'undefined' || !('memory' in performance)) return;

  const memory = performance.memory;
  console.log('Memory Usage:', {
    used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
    total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB',
    limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + 'MB'
  });
};

/**
 * Initialize all performance monitoring
 */
export const performanceMonitor = () => {
  console.log('Initializing performance monitoring...');
  
  monitorCoreWebVitals();
  monitorResourcePerformance();
  monitorMemoryUsage();
  
  console.log('Performance monitoring initialized');
};

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
  performanceMonitor();
}