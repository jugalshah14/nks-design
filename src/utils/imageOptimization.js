// Image optimization utilities

/**
 * Generate responsive image sizes for different breakpoints
 */
export const generateImageSizes = (breakpoints = {}) => {
  const defaultBreakpoints = {
    mobile: 768,
    tablet: 1024,
    desktop: 1920,
    ...breakpoints,
  };

  return `(max-width: ${defaultBreakpoints.mobile}px) 100vw, (max-width: ${defaultBreakpoints.tablet}px) 50vw, (max-width: ${defaultBreakpoints.desktop}px) 33vw, 25vw`;
};

/**
 * Generate optimized image configuration
 */
export const getOptimizedImageConfig = (options = {}) => {
  const {
    priority = false,
    quality = 85,
    loading = "lazy",
    placeholder = "blur",
    sizes,
    ...rest
  } = options;

  return {
    priority,
    quality,
    loading,
    placeholder,
    sizes: sizes || generateImageSizes(),
    ...rest,
  };
};

/**
 * Generate blur data URL for placeholder
 */
export const generateBlurDataURL = (width = 100, height = 100, color = "#f3f4f6") => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  return canvas.toDataURL("image/jpeg", 0.1);
};

/**
 * Preload critical images
 */
export const preloadCriticalImages = (images) => {
  if (typeof window === "undefined") return;

  images.forEach(({ src, type = "image/jpeg", media }) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    link.type = type;
    if (media) link.media = media;
    document.head.appendChild(link);
  });
};

/**
 * Lazy load images with intersection observer
 */
export const setupLazyLoading = (selector = "img[data-lazy]") => {
  if (typeof window === "undefined") return;

  const images = document.querySelectorAll(selector);
  
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: "50px 0px",
      threshold: 0.1,
    });

    images.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      img.classList.add("loaded");
    });
  }
};

/**
 * Optimize image loading based on connection speed
 */
export const optimizeForConnection = () => {
  if (typeof window === "undefined" || !("connection" in navigator)) return;

  const connection = navigator.connection;
  const effectiveType = connection.effectiveType;

  // Adjust image quality based on connection speed
  const qualityMap = {
    "slow-2g": 60,
    "2g": 70,
    "3g": 80,
    "4g": 90,
  };

  const quality = qualityMap[effectiveType] || 85;
  
  // Apply quality to all images
  document.documentElement.style.setProperty("--image-quality", quality);
  
  // Add class for slow connections
  if (effectiveType === "slow-2g" || effectiveType === "2g") {
    document.body.classList.add("slow-connection");
  }
};

/**
 * Generate responsive image srcset
 */
export const generateSrcSet = (baseSrc, widths = [640, 750, 828, 1080, 1200, 1920]) => {
  return widths
    .map((width) => `${baseSrc}?w=${width}&q=85 ${width}w`)
    .join(", ");
};

/**
 * Check if WebP is supported
 */
export const isWebPSupported = () => {
  if (typeof window === "undefined") return false;
  
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
};

/**
 * Get optimal image format based on browser support
 */
export const getOptimalImageFormat = (preferWebP = true) => {
  if (preferWebP && isWebPSupported()) {
    return "webp";
  }
  return "jpeg";
};

