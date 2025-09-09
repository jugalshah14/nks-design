// Performance Worker for background tasks
// This worker handles heavy computations without blocking the main thread

self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'PROCESS_ANIMATIONS':
      // Process animation data in background
      const processedAnimations = processAnimations(data);
      self.postMessage({
        type: 'ANIMATIONS_PROCESSED',
        data: processedAnimations
      });
      break;
      
    case 'PROCESS_IMAGES':
      // Process image data in background
      const processedImages = processImages(data);
      self.postMessage({
        type: 'IMAGES_PROCESSED',
        data: processedImages
      });
      break;
      
    default:
      console.log('Unknown message type:', type);
  }
};

function processAnimations(data) {
  // Simulate animation processing
  return {
    processed: true,
    timestamp: Date.now(),
    count: data?.length || 0
  };
}

function processImages(data) {
  // Simulate image processing
  return {
    processed: true,
    timestamp: Date.now(),
    count: data?.length || 0
  };
}