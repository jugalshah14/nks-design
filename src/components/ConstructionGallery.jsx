"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const ConstructionGallery = ({ isOpen, onClose, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images?.[0]?.src || "");
    const [selectedText, setSelectedText] = useState(images?.[0]?.text || "");
    const thumbnailRef = useRef(null);
  
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);
  
    useEffect(() => {
      if (images?.length > 0) {
        setCurrentIndex(0);
        setSelectedImage(images[0].src);
        setSelectedText(images[0]?.text);
      }
    }, [images]);

    // Auto-scroll to active thumbnail
    useEffect(() => {
      if (thumbnailRef.current) {
        const thumbnailElement = thumbnailRef.current.children[currentIndex];
        if (thumbnailElement) {
          thumbnailElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }, [currentIndex]);
  
    const handleThumbnailClick = (image, index) => {
      setCurrentIndex(index);
      setSelectedImage(image.src);
      setSelectedText(image.text);
    };
  
    const handleNextImage = () => {
      if (currentIndex < images.length - 1) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setSelectedImage(images[nextIndex].src);
        setSelectedText(images[nextIndex].text);
      }
    };
  
    const handlePreviousImage = () => {
      if (currentIndex > 0) {
        const prevIndex = currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedImage(images[prevIndex].src);
        setSelectedText(images[prevIndex].text);
      }
    };
  
    if (!isOpen || !selectedImage) return null;  // Prevent rendering if selectedImage is invalid
  
    return (
      <div className="fixed bg-black/75 inset-0 flex justify-center items-center z-99999 overflow-auto">
        <div className="bg-transparent bg-opacity-50 flex flex-col items-center rounded-lg w-full md:w-full lg:w-full relative">
          <div className="md:w-[70%] w-[90%] flex justify-end items-end">
            <button
              id="construction-gallery-close"
              onClick={onClose}
              className="fixed top-10 right-20 text-3xl text-white hover:text-gray-800 cursor-pointer"
              aria-label="Close Modal"
            >
              &times;
            </button>
          </div>
  
          {/* Selected image */}
          {selectedImage && (
            <div className="relative flex justify-center my-6">
              <Image
                src={selectedImage}
                alt="Certification Image"
                width={300}
                height={300}
                className="object-contain rounded shadow-md"
              />
              <div className="w-full absolute bottom-0 left-0 max-md:text-center p-3 backdrop-blur-md font-semibold z-10">
                    <span className="text-white font-normal text-[15px] leading-5">
                    {selectedText}
                    </span>
                  </div>
            </div>
          )}
  
          {/* Thumbnails */}
          <div 
            ref={thumbnailRef}
            className="flex justify-start overflow-x-auto space-x-3 mt-2 px-4 py-2 [&::-webkit-scrollbar]:hidden"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                width={60}
                height={60}
                className={`w-20 h-20 object-cover cursor-pointer border-2 transition flex-shrink-0 ${
                  currentIndex === index
                    ? "border-white filter-none"
                    : "border-transparent hover:border-gray-300 filter brightness-50"
                }`}
                onClick={() => handleThumbnailClick(image, index)}
              />
            ))}
          </div>
  
          {/* Navigation */}
          <div className="relative transform bg-[#021642] flex gap-20 items-center justify-center mt-9 p-5">
            <div className="h-full flex items-center justify-center">
              <button
                id="construction-gallery-prev"
                className={`focus:outline-none ${
                  currentIndex === 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                }`}
                onClick={handlePreviousImage}
                disabled={currentIndex === 0}
              >
                <Image
                  src="/assets/icons/arrow-r-w.svg"
                  alt="Previous"
                  height={20}
                  width={19}
                  className={`${
                    currentIndex === 0 ? "invert-75" : ""
                  } transform rotate-180`}
                />
              </button>
            </div>
            <div className="h-full flex items-center justify-center">
              <button
                id="construction-gallery-next"
                className={`focus:outline-none ${
                  currentIndex === images.length - 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                }`}
                onClick={handleNextImage}
                disabled={currentIndex === images.length - 1}
              >
                <Image
                  src="/assets/icons/arrow-r-w.svg"
                  alt="Next"
                  height={20}
                  width={19}
                  className={
                    currentIndex === images.length - 1
                      ? "invert-75"
                      : ""
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ConstructionGallery;
