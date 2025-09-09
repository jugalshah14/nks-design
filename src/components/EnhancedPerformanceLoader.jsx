"use client";

import { useEffect, useState, useRef } from "react";

export default function EnhancedPerformanceLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState("Initializing...");
  const startTime = useRef(Date.now());

  useEffect(() => {
    const stages = [
      { text: "Loading critical resources...", progress: 20 },
      { text: "Optimizing images...", progress: 40 },
      { text: "Preparing components...", progress: 60 },
      { text: "Finalizing setup...", progress: 80 },
      { text: "Almost ready...", progress: 95 },
    ];

    let currentStage = 0;
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsLoading(false);
          return 100;
        }
        
        // Update stage based on progress
        const nextStage = stages.find(stage => prev < stage.progress);
        if (nextStage && currentStage < stages.indexOf(nextStage)) {
          currentStage = stages.indexOf(nextStage);
          setLoadingStage(nextStage.text);
        }
        
        return prev + Math.random() * 8 + 2; // More controlled progress
      });
    }, 150);

    // Performance-based loading time
    const checkPerformance = () => {
      const loadTime = Date.now() - startTime.current;
      const connection = navigator.connection;
      
      // Adjust loading time based on connection speed
      let maxTime = 3000; // Default 3 seconds
      
      if (connection) {
        switch (connection.effectiveType) {
          case 'slow-2g':
            maxTime = 5000;
            break;
          case '2g':
            maxTime = 4000;
            break;
          case '3g':
            maxTime = 3000;
            break;
          case '4g':
            maxTime = 2000;
            break;
        }
      }
      
      return maxTime;
    };

    const maxLoadingTime = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressInterval);
    }, checkPerformance());

    // Check if critical resources are loaded
    const checkCriticalResources = () => {
      const criticalImages = document.querySelectorAll('img[data-priority="true"]');
      const loadedImages = Array.from(criticalImages).filter(img => img.complete);
      
      if (loadedImages.length === criticalImages.length && loadingProgress >= 80) {
        setIsLoading(false);
        clearInterval(progressInterval);
        clearTimeout(maxLoadingTime);
      }
    };

    // Check every 200ms
    const resourceCheckInterval = setInterval(checkCriticalResources, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(resourceCheckInterval);
      clearTimeout(maxLoadingTime);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Logo or brand element */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">NK</span>
          </div>
        </div>

        {/* Loading spinner */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-transparent border-t-orange-500 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-xl font-semibold text-gray-800 mb-2">
          New Kolkata
        </div>
        <div className="text-sm text-gray-600 mb-6">
          {loadingStage}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>

        {/* Progress percentage */}
        <div className="text-sm text-gray-500">
          {Math.round(loadingProgress)}%
        </div>

        {/* Performance tips for slow connections */}
        {typeof window !== 'undefined' && navigator.connection && 
         (navigator.connection.effectiveType === 'slow-2g' || 
          navigator.connection.effectiveType === '2g') && (
          <div className="mt-4 text-xs text-gray-400">
            Optimizing for slower connection...
          </div>
        )}
      </div>
    </div>
  );
}

