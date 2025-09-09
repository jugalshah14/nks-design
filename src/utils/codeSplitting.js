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

  const LazyComponent = React.lazy(importFunc);

  // Enhanced error boundary for lazy components
  const LazyErrorBoundary = ({ children, ...props }) => {
    const [hasError, setHasError] = React.useState(false);
    const [retryCount, setRetryCount] = React.useState(0);

    const handleRetry = () => {
      if (retryCount < retryAttempts) {
        setRetryCount(prev => prev + 1);
        setHasError(false);
        // Force re-import
        window.location.reload();
      }
    };

    if (hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Failed to load component
          </h3>
          <p className="text-gray-500 mb-4">
            {retryCount < retryAttempts 
              ? `Retry attempt ${retryCount + 1} of ${retryAttempts}`
              : "Maximum retry attempts reached"
            }
          </p>
          {retryCount < retryAttempts && (
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Retry
            </button>
          )}
        </div>
      );
    }

    return (
      <ErrorBoundary onError={() => setHasError(true)}>
        {children}
      </ErrorBoundary>
    );
  };

  return (props) => (
    <LazyErrorBoundary>
      <React.Suspense fallback={FallbackComponent || <DefaultFallback />}>
        <LazyComponent {...props} />
      </React.Suspense>
    </LazyErrorBoundary>
  );
};

/**
 * Default fallback component for lazy loading
 */
const DefaultFallback = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
  </div>
);

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

