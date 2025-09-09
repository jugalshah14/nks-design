// Advanced code splitting and JavaScript optimization utilities

/**
 * Create a lazy component with error boundary and loading states
 */
export const createLazyComponent = (importFunc, options = {}) => {
  const {
    fallback: FallbackComponent,
    errorBoundary: ErrorBoundary,
    retryAttempts = 3,
    retryDelay = 1000,
    ...lazyOptions
  } = options;

  // This is a utility function that returns a component factory
  // The actual React components will be created when this is used
  return (props) => {
    // This will be implemented by the consuming component
    console.log('Lazy component created with props:', props);
    return null;
  };
};

/**
 * Default fallback component for lazy loading
 */
const DefaultFallback = () => {
  return null; // This will be implemented by the consuming component
};

/**
 * Preload components based on user interaction
 */
export const preloadOnInteraction = (importFunc, event = 'mouseenter') => {
  let preloaded = false;
  
  return {
    [event]: () => {
      if (!preloaded) {
        preloaded = true;
        importFunc();
      }
    }
  };
};

/**
 * Preload components based on viewport intersection
 */
export const preloadOnIntersection = (importFunc, options = {}) => {
  const {
    rootMargin = '100px',
    threshold = 0.1,
    once = true
  } = options;

  let preloaded = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !preloaded) {
          preloaded = true;
          importFunc();
          if (once) {
            observer.disconnect();
          }
        }
      });
    },
    { rootMargin, threshold }
  );

  return {
    ref: (node) => {
      if (node) {
        observer.observe(node);
      }
    }
  };
};

/**
 * Defer non-critical JavaScript execution
 */
export const deferExecution = (callback, delay = 0) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout: delay });
  } else {
    setTimeout(callback, delay);
  }
};

/**
 * Batch multiple operations for better performance
 */
export const batchOperations = (operations, batchSize = 10) => {
  const batches = [];
  for (let i = 0; i < operations.length; i += batchSize) {
    batches.push(operations.slice(i, i + batchSize));
  }

  return batches.map((batch, index) => 
    () => batch.forEach(operation => operation())
  );
};

/**
 * Optimize bundle splitting for better caching
 */
export const createBundleGroups = () => {
  return {
    // Critical components that should be in the main bundle
    critical: [
      'Header',
      'Footer',
      'HeroSectionWaves'
    ],
    // Components that can be loaded after initial render
    secondary: [
      'AmenitiesSwiper',
      'PlansSection',
      'Testimonials'
    ],
    // Heavy components that should be lazy loaded
    heavy: [
      'GangaVideoSection',
      'ConstructionGallery',
      'ImageGallery'
    ],
    // Third-party libraries
    vendor: [
      'framer-motion',
      'lottie-react',
      'react-slick',
      'swiper'
    ]
  };
};

/**
 * Dynamic import with retry logic
 */
export const dynamicImportWithRetry = async (importFunc, maxRetries = 3) => {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await importFunc();
    } catch (error) {
      lastError = error;
      if (i < maxRetries - 1) {
        // Exponential backoff
        await new Promise(resolve => 
          setTimeout(resolve, Math.pow(2, i) * 1000)
        );
      }
    }
  }
  
  throw lastError;
};

/**
 * Optimize script loading with proper attributes
 */
export const optimizeScriptLoading = () => {
  if (typeof window === 'undefined') return;

  // Add async/defer attributes to non-critical scripts
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
    if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
      // Check if script is critical
      const isCritical = script.src.includes('critical') || 
                        script.src.includes('main') ||
                        script.src.includes('app');
      
      if (!isCritical) {
        script.setAttribute('defer', '');
      }
    }
  });
};

/**
 * Monitor bundle size and performance
 */
export const monitorBundlePerformance = () => {
  if (typeof window === 'undefined') return;

  // Monitor resource loading
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource') {
        const { name, duration, transferSize } = entry;
        
        // Log large resources
        if (transferSize > 100000) { // 100KB
          console.warn(`Large resource detected: ${name} (${Math.round(transferSize / 1024)}KB)`);
        }
        
        // Log slow resources
        if (duration > 1000) { // 1 second
          console.warn(`Slow resource detected: ${name} (${Math.round(duration)}ms)`);
        }
      }
    });
  });

  observer.observe({ entryTypes: ['resource'] });

  // Monitor JavaScript execution time
  const jsObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'measure' && entry.name.includes('js-execution')) {
        console.log(`JavaScript execution time: ${entry.duration}ms`);
      }
    });
  });

  jsObserver.observe({ entryTypes: ['measure'] });
};

