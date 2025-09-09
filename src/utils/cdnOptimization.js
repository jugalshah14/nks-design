// CDN and caching optimization utilities

/**
 * CDN configuration for different environments
 */
export const getCDNConfig = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    // CDN URLs for different environments
    cdnUrl: isProduction 
      ? 'https://cdn.newkolkata.in' 
      : isDevelopment 
        ? 'http://localhost:3000' 
        : 'https://staging-cdn.newkolkata.in',
    
    // Image CDN configuration
    imageCDN: {
      baseUrl: isProduction 
        ? 'https://images.newkolkata.in' 
        : 'http://localhost:3000',
      quality: 85,
      formats: ['avif', 'webp', 'jpeg'],
      sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    
    // Font CDN configuration
    fontCDN: {
      baseUrl: isProduction 
        ? 'https://fonts.newkolkata.in' 
        : 'http://localhost:3000',
      preload: true,
      display: 'swap',
    },
    
    // Static assets CDN
    staticCDN: {
      baseUrl: isProduction 
        ? 'https://static.newkolkata.in' 
        : 'http://localhost:3000',
      version: process.env.BUILD_ID || 'latest',
    }
  };
};

/**
 * Generate optimized image URLs for CDN
 */
export const getOptimizedImageUrl = (src, options = {}) => {
  const config = getCDNConfig();
  const {
    width,
    height,
    quality = config.imageCDN.quality,
    format = 'auto',
    fit = 'cover',
    position = 'center'
  } = options;

  // If it's already a CDN URL, return as is
  if (src.startsWith('http')) {
    return src;
  }

  // Build CDN URL with optimization parameters
  const params = new URLSearchParams();
  
  if (width) params.append('w', width);
  if (height) params.append('h', height);
  if (quality) params.append('q', quality);
  if (format !== 'auto') params.append('f', format);
  if (fit) params.append('fit', fit);
  if (position) params.append('pos', position);
  
  const queryString = params.toString();
  const baseUrl = config.imageCDN.baseUrl;
  
  return `${baseUrl}${src}${queryString ? `?${queryString}` : ''}`;
};

/**
 * Generate responsive image srcset for CDN
 */
export const generateCDNSrcSet = (src, sizes = [640, 750, 828, 1080, 1200, 1920]) => {
  return sizes
    .map(size => {
      const url = getOptimizedImageUrl(src, { width: size, quality: 85 });
      return `${url} ${size}w`;
    })
    .join(', ');
};

/**
 * Preload critical CDN resources
 */
export const preloadCDNResources = (resources = []) => {
  if (typeof window === 'undefined') return;

  const config = getCDNConfig();
  
  resources.forEach(resource => {
    const { src, type, as, media, crossorigin } = resource;
    const cdnUrl = src.startsWith('http') ? src : `${config.staticCDN.baseUrl}${src}`;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = cdnUrl;
    link.as = as || 'image';
    
    if (type) link.type = type;
    if (media) link.media = media;
    if (crossorigin) link.crossOrigin = crossorigin;
    
    document.head.appendChild(link);
  });
};

/**
 * Optimize resource loading based on connection speed
 */
export const optimizeForConnectionSpeed = () => {
  if (typeof window === 'undefined' || !('connection' in navigator)) return;

  const connection = navigator.connection;
  const effectiveType = connection.effectiveType;
  
  // Adjust image quality based on connection speed
  const qualityMap = {
    'slow-2g': 60,
    '2g': 70,
    '3g': 80,
    '4g': 90,
  };
  
  const quality = qualityMap[effectiveType] || 85;
  
  // Update CSS custom property for dynamic quality
  document.documentElement.style.setProperty('--image-quality', quality);
  
  // Add class for connection-based optimizations
  document.body.classList.add(`connection-${effectiveType}`);
  
  // Preload fewer resources on slow connections
  if (effectiveType === 'slow-2g' || effectiveType === '2g') {
    // Remove non-critical preloads
    const nonCriticalPreloads = document.querySelectorAll('link[rel="preload"][data-non-critical]');
    nonCriticalPreloads.forEach(link => link.remove());
  }
};

/**
 * Implement service worker for CDN caching
 */
export const registerServiceWorker = () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  const swUrl = '/sw.js';
  
  navigator.serviceWorker.register(swUrl)
    .then(registration => {
      console.log('Service Worker registered:', registration);
      
      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New content available, notify user
            console.log('New content available, please refresh');
          }
        });
      });
    })
    .catch(error => {
      console.log('Service Worker registration failed:', error);
    });
};

/**
 * Cache API responses for better performance
 */
export const cacheAPIResponse = async (url, options = {}) => {
  const { ttl = 300000, key = url } = options; // 5 minutes default TTL
  
  try {
    // Check if we have cached data
    const cached = localStorage.getItem(`cache_${key}`);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < ttl) {
        return data;
      }
    }
    
    // Fetch fresh data
    const response = await fetch(url);
    const data = await response.json();
    
    // Cache the response
    localStorage.setItem(`cache_${key}`, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
    
    return data;
  } catch (error) {
    console.error('API caching error:', error);
    return null;
  }
};

/**
 * Implement resource hints for better CDN performance
 */
export const addResourceHints = () => {
  if (typeof window === 'undefined') return;

  const config = getCDNConfig();
  
  // DNS prefetch for CDN domains
  const cdnDomains = [
    'cdn.newkolkata.in',
    'images.newkolkata.in',
    'fonts.newkolkata.in',
    'static.newkolkata.in'
  ];
  
  cdnDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });
  
  // Preconnect to primary CDN
  const preconnectLink = document.createElement('link');
  preconnectLink.rel = 'preconnect';
  preconnectLink.href = `https://${cdnDomains[0]}`;
  preconnectLink.crossOrigin = 'anonymous';
  document.head.appendChild(preconnectLink);
};

/**
 * Monitor CDN performance
 */
export const monitorCDNPerformance = () => {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource') {
        const { name, duration, transferSize, responseStart, responseEnd } = entry;
        
        // Check if resource is from CDN
        const isCDNResource = name.includes('cdn.newkolkata.in') || 
                             name.includes('images.newkolkata.in') ||
                             name.includes('fonts.newkolkata.in');
        
        if (isCDNResource) {
          const responseTime = responseEnd - responseStart;
          
          // Log slow CDN resources
          if (responseTime > 1000) {
            console.warn(`Slow CDN resource: ${name} (${Math.round(responseTime)}ms)`);
          }
          
          // Log large CDN resources
          if (transferSize > 500000) { // 500KB
            console.warn(`Large CDN resource: ${name} (${Math.round(transferSize / 1024)}KB)`);
          }
        }
      }
    });
  });

  observer.observe({ entryTypes: ['resource'] });
};

