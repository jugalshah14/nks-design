// Critical CSS extraction and optimization utilities

/**
 * Extract critical CSS for above-the-fold content
 */
export const extractCriticalCSS = () => {
  return `
    /* Critical CSS for above-the-fold content */
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      line-height: 1.6;
      color: #333;
      background: #fff;
    }
    
    /* Hero section critical styles */
    .hero-section {
      position: relative;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .hero-section-title {
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      font-family: "Cormorant Garamond", serif;
      font-size: clamp(2rem, 5vw, 4rem);
      font-weight: 400;
      line-height: 1.2;
      color: white;
      text-align: center;
      margin: 0;
    }
    
    .hero-section-bg {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    /* Container critical styles */
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    /* Typography critical styles */
    .project-overview-title {
      font-family: "Cormorant Garamond", serif;
      font-weight: 400;
      font-size: clamp(2rem, 4vw, 3.5rem);
      line-height: 1.2;
      color: rgba(34, 37, 46, 1);
      margin: 0 0 1rem 0;
    }
    
    .orange-color {
      color: rgba(222, 128, 75, 1);
    }
    
    /* Layout critical styles */
    .flex {
      display: flex;
    }
    
    .items-center {
      align-items: center;
    }
    
    .justify-center {
      justify-content: center;
    }
    
    .text-center {
      text-align: center;
    }
    
    /* Spacing critical styles */
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mt-4 { margin-top: 1rem; }
    .mt-6 { margin-top: 1.5rem; }
    .mt-8 { margin-top: 2rem; }
    
    .p-4 { padding: 1rem; }
    .p-6 { padding: 1.5rem; }
    .p-8 { padding: 2rem; }
    
    /* Mobile critical optimizations */
    @media (max-width: 768px) {
      .hero-section {
        min-height: 100vh;
        min-width: 100vw;
      }
      
      .project-overview-title {
        font-size: clamp(1.5rem, 6vw, 2.25rem);
        line-height: 1.3;
      }
      
      .container {
        width: 95%;
        padding: 0 0.5rem;
      }
      
      .hero-section-title {
        font-size: clamp(1.5rem, 8vw, 2.5rem);
        padding: 0 1rem;
      }
    }
    
    /* Performance optimizations */
    .will-change-transform {
      will-change: transform;
    }
    
    .will-change-opacity {
      will-change: opacity;
    }
    
    .gpu-accelerated {
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
    
    /* Prevent layout shift */
    .prevent-layout-shift {
      contain: layout style paint;
    }
    
    /* Image optimization */
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    /* Font loading optimization */
    .font-satoshi {
      font-display: swap;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
    }
    
    .font-cormorant {
      font-display: swap;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
    }
  `;
};

/**
 * Generate CSS for non-critical styles that can be deferred
 */
export const generateDeferredCSS = () => {
  return `
    /* Non-critical styles - loaded after initial render */
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
      opacity: 0;
    }
    
    .animate-slide-up {
      animation: slideUp 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(30px);
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Hover effects - non-critical */
    .button-primary:hover {
      background-color: #020c22;
      transition: background-color 0.5s ease;
    }
    
    .button-secondary:hover {
      background-color: #002F52;
      transition: background-color 0.5s ease;
    }
    
    /* Complex animations - non-critical */
    .marquee-content {
      animation: marquee 15s linear infinite;
    }
    
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    
    /* Form styles - non-critical */
    .form-label {
      position: relative;
      border: 1px solid #ededed;
      display: flex;
      height: 60px;
      overflow: hidden;
    }
    
    .form-input {
      width: 100%;
      padding: 10px 0px;
      border: none;
      outline: none;
      resize: none;
    }
    
    /* Complex gradients - non-critical */
    .text-gradient-1 {
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(119deg, #de804b 23%, #1e8bda 75%),
        linear-gradient(300deg, #fff 24%, rgba(255, 255, 255, 0.44) 52%);
      -webkit-background-clip: text;
      background-clip: text;
    }
  `;
};

/**
 * Load non-critical CSS asynchronously
 */
export const loadDeferredCSS = () => {
  if (typeof window === 'undefined') return;

  const loadCSS = (href) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  };

  // Load non-critical CSS after initial render
  setTimeout(() => {
    // Load Tailwind CSS (if not already loaded)
    if (!document.querySelector('link[href*="tailwind"]')) {
      loadCSS('/styles/tailwind.css');
    }
    
    // Load component-specific CSS
    loadCSS('/styles/components.css');
  }, 100);
};

/**
 * Inline critical CSS in the document head
 */
export const inlineCriticalCSS = () => {
  if (typeof document === 'undefined') return;

  const criticalCSS = extractCriticalCSS();
  
  // Remove existing critical CSS if any
  const existingCritical = document.getElementById('critical-css');
  if (existingCritical) {
    existingCritical.remove();
  }

  // Create and inject critical CSS
  const style = document.createElement('style');
  style.id = 'critical-css';
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
};

/**
 * Optimize CSS delivery based on connection speed
 */
export const optimizeCSSForConnection = () => {
  if (typeof window === 'undefined' || !('connection' in navigator)) return;

  const connection = navigator.connection;
  const effectiveType = connection.effectiveType;

  // Adjust CSS loading based on connection speed
  if (effectiveType === 'slow-2g' || effectiveType === '2g') {
    // For slow connections, inline more CSS
    const additionalCriticalCSS = `
      /* Additional critical CSS for slow connections */
      .hero-section-bg {
        background-image: url('/assets/Riverviewmobile.png');
      }
      
      @media (min-width: 769px) {
        .hero-section-bg {
          background-image: url('/assets/Riverview.jpeg');
        }
      }
    `;
    
    const style = document.createElement('style');
    style.textContent = additionalCriticalCSS;
    document.head.appendChild(style);
  }
};

/**
 * Remove unused CSS rules
 */
export const removeUnusedCSS = () => {
  if (typeof window === 'undefined') return;

  // This would typically be done at build time with tools like PurgeCSS
  // For runtime, we can only hide unused stylesheets
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  
  stylesheets.forEach(stylesheet => {
    // Check if stylesheet is used by looking for matching elements
    const href = stylesheet.href;
    if (href && !href.includes('critical') && !href.includes('tailwind')) {
      // Simple heuristic: if no elements use this stylesheet's classes, hide it
      const testElement = document.createElement('div');
      testElement.className = 'test-unused-css';
      document.body.appendChild(testElement);
      
      const computedStyle = window.getComputedStyle(testElement);
      if (computedStyle.display === 'block' && computedStyle.margin === '0px') {
        // Likely unused, defer loading
        stylesheet.media = 'print';
        stylesheet.onload = () => {
          stylesheet.media = 'all';
        };
      }
      
      document.body.removeChild(testElement);
    }
  });
};

