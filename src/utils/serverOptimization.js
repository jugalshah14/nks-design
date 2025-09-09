// Server optimization utilities and configuration

/**
 * Server performance configuration
 */
export const getServerConfig = () => {
  return {
    // Next.js server configuration
    nextjs: {
      // Enable experimental features for better performance
      experimental: {
        optimizePackageImports: ['framer-motion', 'lottie-react', 'react-slick', 'swiper'],
        serverMinification: true,
        serverComponentsExternalPackages: ['sharp'],
        optimizeCss: true,
        scrollRestoration: true,
      },
      
      // Image optimization
      images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000,
        quality: 85,
        progressive: true,
        devicePixelRatio: [1, 2, 3],
      },
      
      // Compression settings
      compress: true,
      poweredByHeader: false,
      
      // Bundle optimization
      webpack: {
        optimization: {
          usedExports: true,
          sideEffects: false,
          concatenateModules: true,
          minimize: true,
        },
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            framework: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'framework',
              chunks: 'all',
              priority: 40,
              enforce: true,
            },
            nextjs: {
              test: /[\\/]node_modules[\\/](next)[\\/]/,
              name: 'nextjs',
              chunks: 'all',
              priority: 35,
            },
            animations: {
              test: /[\\/]node_modules[\\/](framer-motion|lottie-react)[\\/]/,
              name: 'animations',
              chunks: 'all',
              priority: 30,
            },
            ui: {
              test: /[\\/]node_modules[\\/](react-slick|swiper)[\\/]/,
              name: 'ui',
              chunks: 'all',
              priority: 25,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
              minChunks: 1,
            },
          },
        },
      },
    },
    
    // HTTP/2 and server optimization
    http: {
      // Enable HTTP/2
      http2: true,
      
      // Keep-alive settings
      keepAlive: true,
      keepAliveTimeout: 5000,
      keepAliveMaxRequests: 100,
      
      // Timeout settings
      timeout: 30000,
      headersTimeout: 40000,
      
      // Buffer settings
      maxBufferSize: 1024 * 1024, // 1MB
      maxHeaderSize: 16384, // 16KB
    },
    
    // Caching configuration
    caching: {
      // Static assets
      static: {
        maxAge: 31536000, // 1 year
        immutable: true,
        etag: true,
        lastModified: true,
      },
      
      // API responses
      api: {
        maxAge: 300, // 5 minutes
        sMaxAge: 300,
        staleWhileRevalidate: 60,
      },
      
      // HTML pages
      html: {
        maxAge: 0,
        mustRevalidate: true,
        sMaxAge: 3600, // 1 hour for CDN
      },
    },
    
    // Security headers
    security: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
    },
  };
};

/**
 * Optimize server response times
 */
export const optimizeServerResponse = () => {
  return {
    // Database optimization
    database: {
      connectionPool: {
        min: 2,
        max: 10,
        acquireTimeoutMillis: 30000,
        createTimeoutMillis: 30000,
        destroyTimeoutMillis: 5000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 200,
      },
      query: {
        timeout: 30000,
        retry: 3,
        cache: true,
        cacheTTL: 300, // 5 minutes
      },
    },
    
    // API optimization
    api: {
      rateLimit: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
        standardHeaders: true,
        legacyHeaders: false,
      },
      compression: {
        level: 6,
        threshold: 1024,
        filter: (req, res) => {
          if (req.headers['x-no-compression']) {
            return false;
          }
          return true;
        },
      },
    },
    
    // Static file serving
    static: {
      maxAge: 31536000,
      immutable: true,
      etag: true,
      lastModified: true,
      setHeaders: (res, path) => {
        if (path.endsWith('.woff2')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      },
    },
  };
};

/**
 * Monitor server performance
 */
export const monitorServerPerformance = () => {
  if (typeof window === 'undefined') return;

  const metrics = {
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
  };

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      switch (entry.entryType) {
        case 'navigation':
          metrics.pageLoadTime = entry.loadEventEnd - entry.loadEventStart;
          break;
        case 'paint':
          if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime;
          }
          break;
        case 'largest-contentful-paint':
          metrics.largestContentfulPaint = entry.startTime;
          break;
        case 'layout-shift':
          if (!entry.hadRecentInput) {
            metrics.cumulativeLayoutShift += entry.value;
          }
          break;
        case 'first-input':
          metrics.firstInputDelay = entry.processingStart - entry.startTime;
          break;
      }
    });
  });

  observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });

  // Report metrics
  setTimeout(() => {
    console.log('Server Performance Metrics:', metrics);
    
    // Send metrics to analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(metrics.largestContentfulPaint),
        custom_map: {
          'first_contentful_paint': Math.round(metrics.firstContentfulPaint),
          'largest_contentful_paint': Math.round(metrics.largestContentfulPaint),
          'cumulative_layout_shift': Math.round(metrics.cumulativeLayoutShift * 1000),
          'first_input_delay': Math.round(metrics.firstInputDelay),
        },
      });
    }
  }, 5000);
};

/**
 * Implement server-side caching strategies
 */
export const implementCachingStrategies = () => {
  return {
    // Browser caching
    browser: {
      static: 'public, max-age=31536000, immutable',
      dynamic: 'public, max-age=0, must-revalidate',
      api: 'public, max-age=300, s-maxage=300',
    },
    
    // CDN caching
    cdn: {
      static: 'public, max-age=31536000, immutable',
      dynamic: 'public, max-age=3600, s-maxage=3600',
      api: 'public, max-age=300, s-maxage=300',
    },
    
    // Service Worker caching
    serviceWorker: {
      cacheFirst: ['/assets/', '/_next/static/'],
      networkFirst: ['/api/'],
      staleWhileRevalidate: ['/'],
    },
  };
};

/**
 * Optimize for different hosting environments
 */
export const getHostingOptimizations = (platform = 'vercel') => {
  const optimizations = {
    vercel: {
      functions: {
        maxDuration: 30,
        memory: 1024,
        regions: ['iad1', 'sfo1', 'lhr1'],
      },
      edge: {
        regions: ['iad1', 'sfo1', 'lhr1', 'hnd1', 'syd1'],
        runtime: 'nodejs18.x',
      },
      caching: {
        static: 'public, max-age=31536000, immutable',
        dynamic: 'public, max-age=0, must-revalidate',
      },
    },
    netlify: {
      functions: {
        timeout: 30,
        memory: 1024,
      },
      edge: {
        regions: ['us-east-1', 'us-west-2', 'eu-west-1'],
      },
      caching: {
        static: 'public, max-age=31536000, immutable',
        dynamic: 'public, max-age=0, must-revalidate',
      },
    },
    aws: {
      lambda: {
        timeout: 30,
        memory: 1024,
        runtime: 'nodejs18.x',
      },
      cloudfront: {
        ttl: 31536000,
        compress: true,
        http2: true,
      },
      s3: {
        cacheControl: 'public, max-age=31536000, immutable',
        compression: 'gzip',
      },
    },
  };

  return optimizations[platform] || optimizations.vercel;
};

