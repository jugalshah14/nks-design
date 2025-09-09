"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  sizes,
  placeholder = "blur",
  blurDataURL,
  objectFit = "cover",
  objectPosition = "center",
  loading = "lazy",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === "lazy" && !priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: "50px", // Start loading 50px before the image comes into view
          threshold: 0.1,
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [loading, priority]);

  // Generate optimized blur placeholder
  const generateBlurDataURL = (w, h) => {
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#f3f4f6";
    ctx.fillRect(0, 0, w, h);
    return canvas.toDataURL("image/jpeg", 0.1);
  };

  // Default blur placeholder if none provided
  const defaultBlurDataURL = blurDataURL || generateBlurDataURL(width || 100, height || 100);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Fallback for broken images
  if (hasError) {
    return (
      <div
        ref={imgRef}
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-gray-400 text-sm">Image unavailable</div>
      </div>
    );
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            objectFit,
            objectPosition,
          }}
          quality={quality}
          sizes={sizes || `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw`}
          priority={priority}
          loading={loading}
          placeholder={placeholder}
          blurDataURL={defaultBlurDataURL}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;

