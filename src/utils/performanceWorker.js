// Web Worker for heavy computations to reduce main thread work
self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'PROCESS_ANIMATIONS':
      // Process animation data in background
      const processedData = data.map(item => ({
        ...item,
        processed: true,
        timestamp: Date.now()
      }));
      
      self.postMessage({
        type: 'ANIMATIONS_PROCESSED',
        data: processedData
      });
      break;
      
    case 'PROCESS_IMAGES':
      // Process image data in background
      const processedImages = data.map(img => ({
        ...img,
        loaded: true,
        processedAt: Date.now()
      }));
      
      self.postMessage({
        type: 'IMAGES_PROCESSED',
        data: processedImages
      });
      break;
      
    default:
      self.postMessage({
        type: 'ERROR',
        message: 'Unknown message type'
      });
  }
};
