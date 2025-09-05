"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageGallery = ({ isOpen, onClose, images }) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || "");

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
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePreviousImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bg-black/50 inset-0 flex justify-center items-center z-99999 overflow-auto">
      <div className="bg-transparent bg-opacity-75 flex flex-col items-center rounded-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
        <div className="flex justify-end items-end w-full">
          <button
            id="image-gallery-close"
            onClick={onClose}
            className="text-3xl text-white hover:text-gray-800 cursor-pointer"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>

        {/* Selected image */}
        <div className="flex justify-center my-6">
          <Image
            src={selectedImage}
            alt="Certification Image"
            width={650}
            height={500}
            className="object-contain rounded shadow-md"
            sizes="(max-width: 768px) 90vw, 650px"
            quality={90}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            loading="eager"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center overflow-x-auto space-x-3 mt-2">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={60}
              height={60}
              className={`w-20 h-20 object-cover cursor-pointer rounded-md border-2 transition ${
                selectedImage === image
                  ? "border-blue-600 filter-none"
                  : "border-transparent hover:border-gray-300 filter brightness-40"
              }`}
              onClick={() => handleThumbnailClick(image)}
              sizes="80px"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              loading="lazy"
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="relative transform bg-white flex gap-10 items-center justify-center mt-9 p-5">
          <div className="h-full flex items-center justify-center">
            <button
              id="image-gallery-prev"
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
          <div className="flex gap-2 items-center">
            {images.indexOf(selectedImage) + 1}{" "}
            <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {images.length}
          </div>
          <div className="h-full flex items-center justify-center disabled:cursor-auto">
            <button
              id="image-gallery-next"
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

export default ImageGallery;
