import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.newkolkata.in',
        port: '',
        pathname: '/**',
      },
    ],
    // Aggressive performance optimizations for Core Web Vitals
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Critical for LCP optimization
    loader: 'default',
    unoptimized: false,
  },
  // Aggressive performance optimizations
  experimental: {
    optimizePackageImports: ['framer-motion', 'lottie-react', 'react-slick', 'swiper'],
  },
  // Aggressive bundle optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable aggressive tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          animations: {
            test: /[\\/]node_modules[\\/](framer-motion|lottie-react)[\\/]/,
            name: 'animations',
            chunks: 'all',
            priority: 10,
          },
          // Mobile-specific optimizations
          mobile: {
            test: /[\\/]node_modules[\\/](react-slick|swiper)[\\/]/,
            name: 'mobile',
            chunks: 'all',
            priority: 5,
          },
        },
      };
    }
    return config;
  },
  // Compress static assets
  compress: true,
  // Enable gzip compression
  poweredByHeader: false,
  // Aggressive caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
