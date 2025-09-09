// Compression optimization utilities

/**
 * Check if Brotli compression is supported
 */
export const isBrotliSupported = () => {
  if (typeof window === 'undefined') return false;
  
  // Check if the browser supports Brotli
  const acceptEncoding = navigator.userAgent.includes('Chrome') || 
                        navigator.userAgent.includes('Firefox') ||
                        navigator.userAgent.includes('Safari');
  
  return acceptEncoding;
};

/**
 * Optimize compression based on content type
 */
export const getCompressionConfig = (contentType) => {
  const configs = {
    'text/html': {
      gzip: { level: 6, threshold: 1024 },
      brotli: { level: 4, threshold: 1024 },
      priority: 'high'
    },
    'text/css': {
      gzip: { level: 9, threshold: 512 },
      brotli: { level: 6, threshold: 512 },
      priority: 'high'
    },
    'application/javascript': {
      gzip: { level: 9, threshold: 1024 },
      brotli: { level: 6, threshold: 1024 },
      priority: 'high'
    },
    'image/svg+xml': {
      gzip: { level: 9, threshold: 256 },
      brotli: { level: 6, threshold: 256 },
      priority: 'medium'
    },
    'application/json': {
      gzip: { level: 6, threshold: 1024 },
      brotli: { level: 4, threshold: 1024 },
      priority: 'medium'
    },
    'text/plain': {
      gzip: { level: 6, threshold: 1024 },
      brotli: { level: 4, threshold: 1024 },
      priority: 'low'
    }
  };
  
  return configs[contentType] || {
    gzip: { level: 6, threshold: 1024 },
    brotli: { level: 4, threshold: 1024 },
    priority: 'medium'
  };
};

/**
 * Generate compression headers for different content types
 */
export const generateCompressionHeaders = (contentType, size) => {
  const config = getCompressionConfig(contentType);
  const headers = {};
  
  // Only compress if content is larger than threshold
  if (size >= config.gzip.threshold) {
    headers['Content-Encoding'] = isBrotliSupported() ? 'br' : 'gzip';
    headers['Vary'] = 'Accept-Encoding';
    
    // Add compression info headers
    if (isBrotliSupported()) {
      headers['X-Compression'] = 'brotli';
      headers['X-Compression-Level'] = config.brotli.level.toString();
    } else {
      headers['X-Compression'] = 'gzip';
      headers['X-Compression-Level'] = config.gzip.level.toString();
    }
  }
  
  return headers;
};

/**
 * Optimize images for better compression
 */
export const optimizeImageForCompression = (imageData, options = {}) => {
  const {
    quality = 85,
    format = 'webp',
    progressive = true,
    optimize = true
  } = options;
  
  // This would typically be done server-side with Sharp
  // For client-side, we can provide optimization hints
  return {
    quality,
    format,
    progressive,
    optimize,
    // Additional optimization hints
    mozjpeg: {
      quality: quality,
      progressive: progressive
    },
    webp: {
      quality: quality,
      effort: 6
    },
    avif: {
      quality: quality,
      effort: 4
    }
  };
};

/**
 * Monitor compression effectiveness
 */
export const monitorCompression = () => {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource') {
        const { name, transferSize, encodedBodySize, decodedBodySize } = entry;
        
        // Calculate compression ratio
        if (encodedBodySize > 0 && decodedBodySize > 0) {
          const compressionRatio = ((decodedBodySize - encodedBodySize) / decodedBodySize) * 100;
          const compressionType = entry.responseHeaders?.['content-encoding'] || 'none';
          
          // Log compression stats
          console.log(`Resource: ${name}`);
          console.log(`Compression: ${compressionType} (${compressionRatio.toFixed(1)}% reduction)`);
          console.log(`Original: ${decodedBodySize} bytes, Compressed: ${encodedBodySize} bytes`);
          
          // Warn about poor compression
          if (compressionRatio < 20 && decodedBodySize > 10000) {
            console.warn(`Poor compression ratio for ${name}: ${compressionRatio.toFixed(1)}%`);
          }
        }
      }
    });
  });

  observer.observe({ entryTypes: ['resource'] });
};

/**
 * Preload compressed resources
 */
export const preloadCompressedResources = (resources) => {
  if (typeof window === 'undefined') return;

  resources.forEach(resource => {
    const { href, as, type, media } = resource;
    
    // Check if browser supports Brotli
    const acceptEncoding = isBrotliSupported() ? 'br' : 'gzip';
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as || 'image';
    
    if (type) link.type = type;
    if (media) link.media = media;
    
    // Add compression hint
    link.setAttribute('data-compression', acceptEncoding);
    
    document.head.appendChild(link);
  });
};

/**
 * Optimize bundle compression
 */
export const optimizeBundleCompression = () => {
  // This would typically be done at build time
  // For runtime, we can provide optimization hints
  return {
    // Webpack compression plugin configuration
    webpack: {
      compression: {
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 1024,
        minRatio: 0.8
      },
      brotli: {
        test: /\.(js|css|html|svg)$/,
        threshold: 1024,
        minRatio: 0.8
      }
    },
    
    // Next.js specific optimizations
    nextjs: {
      compress: true,
      poweredByHeader: false,
      generateEtags: true,
      generateBuildId: true
    }
  };
};

/**
 * Implement content-aware compression
 */
export const getContentAwareCompression = (content) => {
  const contentType = typeof content === 'string' ? 'text/plain' : 'application/json';
  const size = new Blob([content]).size;
  
  // Determine optimal compression based on content
  if (contentType === 'text/html' || contentType === 'text/css') {
    return {
      algorithm: 'brotli',
      level: 6,
      threshold: 1024
    };
  }
  
  if (contentType === 'application/javascript') {
    return {
      algorithm: 'gzip',
      level: 9,
      threshold: 1024
    };
  }
  
  if (contentType === 'image/svg+xml') {
    return {
      algorithm: 'brotli',
      level: 6,
      threshold: 256
    };
  }
  
  // Default compression
  return {
    algorithm: 'gzip',
    level: 6,
    threshold: 1024
  };
};

/**
 * Monitor and report compression metrics
 */
export const reportCompressionMetrics = () => {
  if (typeof window === 'undefined') return;

  // Collect compression metrics
  const metrics = {
    totalResources: 0,
    compressedResources: 0,
    totalOriginalSize: 0,
    totalCompressedSize: 0,
    compressionTypes: {}
  };

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource') {
        const { transferSize, encodedBodySize, decodedBodySize, responseHeaders } = entry;
        
        metrics.totalResources++;
        
        if (encodedBodySize > 0 && decodedBodySize > 0) {
          metrics.compressedResources++;
          metrics.totalOriginalSize += decodedBodySize;
          metrics.totalCompressedSize += encodedBodySize;
          
          const compressionType = responseHeaders?.['content-encoding'] || 'none';
          metrics.compressionTypes[compressionType] = (metrics.compressionTypes[compressionType] || 0) + 1;
        }
      }
    });
    
    // Report metrics after a delay
    setTimeout(() => {
      const overallCompressionRatio = ((metrics.totalOriginalSize - metrics.totalCompressedSize) / metrics.totalOriginalSize) * 100;
      
      console.log('Compression Metrics:', {
        totalResources: metrics.totalResources,
        compressedResources: metrics.compressedResources,
        overallCompressionRatio: `${overallCompressionRatio.toFixed(1)}%`,
        compressionTypes: metrics.compressionTypes,
        totalSavings: `${Math.round((metrics.totalOriginalSize - metrics.totalCompressedSize) / 1024)}KB`
      });
    }, 5000);
  });

  observer.observe({ entryTypes: ['resource'] });
};

