"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ConstructionGallery = ({ isOpen, onClose, images }) => {
    const [selectedImage, setSelectedImage] = useState(images?.[0]?.src || "");
    const [selectedText, setSelectedText] = useState(images?.[0]?.text || "");
  
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
        setSelectedImage(images[0].src);
        setSelectedText(images[0]?.text);
      }
    }, [images]);
  
    const handleThumbnailClick = (image) => {
      setSelectedImage(image.src);
      setSelectedText(image.text);
    };
  
    const handleNextImage = () => {
      const currentIndex = images.findIndex((img) => img.src === selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex].src);
      setSelectedText(images[nextIndex].text);
    };
  
    const handlePreviousImage = () => {
      const currentIndex = images.findIndex((img) => img.src === selectedImage);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex].src);
      setSelectedText(images[prevIndex].text);
    };
  
    if (!isOpen || !selectedImage) return null;  // Prevent rendering if selectedImage is invalid
  
    return (
      <div className="fixed bg-black/50 inset-0 flex justify-center items-center z-99999 overflow-auto">
        <div className="bg-transparent bg-opacity-50 flex flex-col items-center rounded-lg w-full md:w-full lg:w-full relative">
          <div className="w-[70%] flex justify-end items-end">
            <button
              onClick={onClose}
              className="text-3xl text-white hover:text-gray-800 cursor-pointer"
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
          <div className="flex justify-center overflow-x-auto space-x-3 mt-2">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                width={60}
                height={60}
                className={`w-20 h-20 object-cover cursor-pointer rounded-md border-2 transition ${
                  selectedImage === image.src
                    ? "border-blue-600 filter-none"
                    : "border-transparent hover:border-gray-300 filter brightness-50"
                }`}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
  
          {/* Navigation */}
          <div className="relative transform bg-white flex gap-10 items-center justify-center mt-9 p-5">
            <div className="h-full flex items-center justify-center">
              <button
                className="focus:outline-none cursor-pointer disabled:cursor-auto"
                onClick={handlePreviousImage}
              >
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="Previous"
                  height={20}
                  width={19}
                  className={`${
                    images.indexOf(selectedImage) + 1 === 1 ? "invert-75" : ""
                  } transform rotate-180`}
                />
              </button>
            </div>
            <div className="h-full flex items-center justify-center disabled:cursor-auto">
              <button
                className="focus:outline-none cursor-pointer"
                onClick={handleNextImage}
              >
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="Next"
                  height={20}
                  width={19}
                  className={
                    images.indexOf(selectedImage) + 1 === images.length
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
