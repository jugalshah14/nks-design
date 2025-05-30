"use client";
import Image from "next/image";
import { useState } from "react";

const fitnessSlides = [
  {
    src: "/assets/fitness.png",
    alt: "Fitness center with people working out",
    caption: <>Fitness events to enhance your fitness level.</>,
  },
  {
    src: "/assets/gangaGhat.png",
    alt: "Yoga session in progress",
    caption: <>Join our <span className="text-orange-500">yoga</span> sessions for mental peace.</>,
  },
  {
    src: "/assets/box-cricket.png",
    alt: "Personal trainers guiding",
    caption: <>Personal trainers to guide you towards your <span className="text-orange-500">goal.</span></>,
  },
];

const natureSlides = [
  {
    src: "/assets/gangaGhat.png",
    alt: "Modern residential buildings by the river",
    caption: <>Experience the thrill of our nature exploring events!</>,
  },
  {
    src: "/assets/box-cricket.png",
    alt: "Green trees and modern architecture",
    caption: <>Embrace the beauty of nature with us.</>,
  },
  {
    src: "/assets/fitness.png",
    alt: "Sunset view of residence near nature",
    caption: <>Where modern living meets <span className="text-orange-500">natural wonders</span>.</>,
  },
];

const cricketSlides = [
  {
    src: "/assets/box-cricket.png",
    alt: "Box cricket tournament at night",
    caption: <>Box cricket tournament</>,
  },
  {
    src: "/assets/gangaGhat.png",
    alt: "Cricket players having fun on field",
    caption: <>Join the fun and make memories with our <span className="text-orange-500">exciting activities</span> for everyone.</>,
  },
  {
    src: "/assets/fitness.png",
    alt: "Cricket fans cheering",
    caption: <>Engage in community sports events.</>,
  },
];

function FitnessSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? fitnessSlides.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === fitnessSlides.length - 1 ? 0 : prev + 1));
  };

  const { src, alt, caption } = fitnessSlides[currentIndex];

  return (
    <div className="container fitness-swiper md:mb-10 w-full h-[280px] md:h-[570px] mx-auto flex flex-col lg:flex-row items-center mt-12 lg:gap-x-8">
      <div className="flex flex-col items-center w-full md:w-[804px]">
        <div className="relative w-full h-[268px] md:h-[570px] md:w-[804px]">
          <Image src={src} alt={alt} fill />
          <div className="w-full absolute bottom-0 left-0 p-5 backdrop-blur-md text-white font-semibold text-lg md:text-2xl">
            {caption}
            <span className="absolute right-12 bottom-4 flex gap-2">
              <button
                onClick={prevImage}
                aria-label="Previous Slide"
                className="bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                aria-label="Next Slide"
                className="bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow"
              >
                ›
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="z-1 absolute md:right-47 -bottom-95 md:-bottom-303 max-w-md bg-[#020C22] p-8 md:p-10 text-white font-[Satoshi] text-[24px] leading-[28px] md:text-[40px] md:leading-[48px] text-left flex items-center h-auto">
        <span>
          Make everyday living effortless with our <span className="text-orange-500">Convenience</span> for Residence scheme.
        </span>
      </div>
    </div>
  );
}

function NatureSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? natureSlides.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === natureSlides.length - 1 ? 0 : prev + 1));
  };

  const { src, alt, caption } = natureSlides[currentIndex];

  return (
    <div className="container nature-swiper md:mb-10 w-full h-[280px] md:h-[570px] mx-auto flex flex-col lg:flex-row items-center lg:items-center mt-12">
      <div className="flex flex-col justify-center lg:justify-center h-full">
        <div className="z-10 relative top-100 md:top-29.5 md:left-10 max-w-md bg-[#020C22] p-6 md:p-10 text-white font-[Satoshi] text-[24px] leading-[28px] md:text-[40px] md:leading-[48px] text-left self-center lg:self-end mt-4">
          Embrace the beauty of nature with us, where modern living meets{" "}
          <span className="text-orange-500">natural wonders</span>
        </div>
      </div>
      <div className="relative w-full h-[268px] md:w-[804px] md:h-[570px] ">
        <Image src={src} alt={alt} fill />
        <div className="w-full absolute bottom-0 left-0 p-5 pl-15 backdrop-blur-md text-white font-semibold text-lg md:text-2xl">
          {caption}
          <span className="absolute right-4 bottom-4 flex gap-2">
            <button
              onClick={prevImage}
              aria-label="Previous Slide"
              className="bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              aria-label="Next Slide"
              className="bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow"
            >
              ›
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

function CricketSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? cricketSlides.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === cricketSlides.length - 1 ? 0 : prev + 1));
  };

  const { src, alt, caption } = cricketSlides[currentIndex];

  return (
    <div className="container cricket-swiper md:mb-10 w-full h-[280px] md:h-[570px] mx-auto flex flex-col lg:flex-row items-center mt-12">
      <div className="relative w-full h-[268px] md:w-[804px] md:h-[570px]">
        <Image src={src} alt={alt} fill />
        <div className="w-full absolute bottom-0 left-0 p-5 backdrop-blur-md text-white font-semibold text-lg md:text-2xl">
          {caption}
          <span className="absolute right-12 bottom-4 flex gap-2">
            <button
              onClick={prevImage}
              aria-label="Previous Slide"
              className="bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              aria-label="Next Slide"
              className="bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow"
            >
              ›
            </button>
          </span>
        </div>
      </div>
      <div className="z-1 absolute md:right-47 md:-bottom-612 -bottom:600 max-w-md bg-[#020C22] p-8 md:p-10 text-white font-[Satoshi] text-[24px] leading-[28px] md:text-[40px] md:leading-[48px] text-left flex h-auto">
        <span>
        Join the fun and make memories with our{" "}
          <span className="text-orange-500">exciting activities</span> for everyone
          </span>
      </div>
    </div>
  );
}

export default function MultiSwiper() {
  return (
    <>
      <FitnessSwiper />
      <NatureSwiper />
      <CricketSwiper />
    </>
  );
}
