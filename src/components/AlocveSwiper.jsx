"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatedSection, FadeIn, SlideUp } from "@/components/animations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const fitnessSlides = [
  {
    src: "/assets/fitness.png",
    alt: "Fitness center with people working out",
    caption: <>Fitness events to enhance your fitness level.</>,
  },
  {
    src: "/assets/gangaGhat.png",
    alt: "Yoga session in progress",
    caption: (
      <>
        Join our <span className="text-orange-500">yoga</span> sessions for
        mental peace.
      </>
    ),
  },
  {
    src: "/assets/box-cricket.png",
    alt: "Personal trainers guiding",
    caption: (
      <>
        Personal trainers to guide you towards your{" "}
        <span className="text-orange-500">goal.</span>
      </>
    ),
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
    caption: (
      <>
        Where modern living meets{" "}
        <span className="text-orange-500">natural wonders</span>.
      </>
    ),
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
    caption: (
      <>
        Join the fun and make memories with our{" "}
        <span className="text-orange-500">exciting activities</span> for
        everyone.
      </>
    ),
  },
  {
    src: "/assets/fitness.png",
    alt: "Cricket fans cheering",
    caption: <>Engage in community sports events.</>,
  },
];

function FitnessSwiper() {
  const [swiperRef, setSwiperRef] = useState();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <AnimatedSection>
      {/* Desktop View */}
      <div className="container fitness-swiper md:mb-10 w-full mx-auto flex-col lg:flex-row mt-12 lg:gap-x-8 flex">
        <div className="flex flex-col items-center w-full md:w-[804px]">
          <div className="relative w-full md:w-[804px]">
            <Swiper
              modules={[Pagination]}
              onSwiper={setSwiperRef}
              onSlideChange={handleSlideChange}
              slidesPerView={1}
              loop={false}
              speed={600}
            >
              {fitnessSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="md:relative w-full h-[268px] md:h-[570px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full absolute bottom-0 left-0 max-md:text-center p-3 md:p-5 backdrop-blur-md font-semibold z-10">
              <span className="text-white md:font-bold text-[18px] md:text-[24px] md:leading-7 leading-6">{fitnessSlides[activeIndex].caption}</span>
              <span className="absolute right-12 bottom-4 flex gap-2 hide-triangle">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className={`cursor-pointer bg-white text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
                    activeIndex > 0
                      ? "opacity-100"
                      : "opacity-50 pointer-events-none"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#22252E] rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className={`cursor-pointer bg-white text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
                    activeIndex < fitnessSlides.length - 1
                      ? "opacity-100"
                      : "opacity-50 pointer-events-none"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#22252E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:justify-center h-full">
          <div className="z-20 md:relative md:-bottom-[300px] md:right-[70px] max-w-md bg-[#020C22] p-5 md:p-10 text-white font-satoshi text-[24px] md:text-[40px] font-normal leading-[28px] md:leading-[48px] text-center md:text-left flex h-auto">
            <span>
              Make everyday living effortless with our{" "}
              <span className="text-orange-500">Convenience</span> for Residence
              scheme.
            </span>
          </div>
        </div>
        {/* mobile arrows */}
        <span className="none-md">
          <div className="flex py-3 bg-[#1D2639] relative justify-center items-center gap-10 w-full">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous Slide"
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-10 w-10 rotate-180 ${
                  activeIndex > 0 ? "text-[white]" : "text-gray-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === fitnessSlides.length - 1}
              aria-label="Next Slide"
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-10 w-10 ${
                  activeIndex < fitnessSlides.length - 1
                    ? "text-[white]"
                    : "text-gray-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </span>
      </div>
    </AnimatedSection>
  );
}

function NatureSwiper() {
  const [swiperRef, setSwiperRef] = useState();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <AnimatedSection>
      <div className="container nature-swiper py-12 w-full mx-auto flex-col lg:flex-row lg:gap-x-8 flex max-md:bg-white">
        <div className="flex flex-col items-center w-full md:w-[804px] lg:order-2">
          <div className="relative w-full md:w-[804px]">
            <Swiper
              modules={[Pagination]}
              onSwiper={setSwiperRef}
              onSlideChange={handleSlideChange}
              slidesPerView={1}
              loop={false}
              speed={600}
            >
              {natureSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="md:relative w-full h-[268px] md:h-[570px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full absolute bottom-0 left-0 max-md:text-center p-3 md:p-5 backdrop-blur-md font-semibold z-10">
              <span className="text-white md:font-bold text-[18px] md:text-[24px] md:leading-7 leading-6 md:pl-10 pl-0">{natureSlides[activeIndex].caption}</span>
              <span className="absolute right-5 bottom-4 flex gap-2 hide-triangle">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className={`cursor-pointer bg-white text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
                    activeIndex > 0
                      ? "opacity-100"
                      : "opacity-50 pointer-events-none"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#22252E] rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className={`cursor-pointer bg-white text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
                    activeIndex < natureSlides.length - 1
                      ? "opacity-100"
                      : "opacity-50 pointer-events-none"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#22252E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:justify-center h-full lg:order-1">
          <div className="z-20 md:relative md:-bottom-[250px] md:left-[70px] max-w-md md:bg-[#020C22] bg-white p-5 md:p-10 md:text-white text-black font-satoshi text-[24px] md:text-[40px] font-normal leading-[28px] md:leading-[48px] text-center md:text-left flex h-auto">
            <span>
              Embrace the beauty of nature with us, where modern living meets{" "}
              <span className="text-orange-500">natural wonders</span>
            </span>
          </div>
        </div>
        {/* mobile arrows */}
        <span className="none-md">
          <div className="flex py-3 bg-white relative justify-center items-center gap-10 w-full">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous Slide"
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-10 w-10 rotate-180 ${
                  activeIndex > 0 ? "text-[black]" : "text-gray-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === natureSlides.length - 1}
              aria-label="Next Slide"
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-10 w-10 ${
                  activeIndex < natureSlides.length - 1
                    ? "text-[black]"
                    : "text-gray-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </span>
      </div>
    </AnimatedSection>
  );
}

function CricketSwiper() {
  const [swiperRef, setSwiperRef] = useState();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <AnimatedSection>
      <div className="container cricket-swiper md:mb-10 w-full mx-auto flex-col lg:flex-row md:mt-12 mt-0 lg:gap-x-8 flex">
        <div className="flex flex-col items-center w-full md:w-[804px]">
          <div className="relative w-full md:w-[804px]">
            <Swiper
              modules={[Pagination]}
              onSwiper={setSwiperRef}
              onSlideChange={handleSlideChange}
              slidesPerView={1}
              loop={false}
              speed={600}
            >
              {cricketSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="md:relative w-full h-[268px] md:h-[570px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full absolute bottom-0 left-0 max-md:text-center p-3 md:p-5 backdrop-blur-md font-semibold z-10">
              <span className="text-white md:font-bold text-[18px] md:text-[24px] md:leading-7 leading-6">{cricketSlides[activeIndex].caption}</span>
              <span className="absolute right-12 bottom-4 flex gap-2 hide-triangle">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className={`cursor-pointer bg-white text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
                    activeIndex > 0
                      ? "opacity-100"
                      : "opacity-50 pointer-events-none"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#22252E] rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className={`cursor-pointer bg-white text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
                    activeIndex < cricketSlides.length - 1
                      ? "opacity-100"
                      : "opacity-50 pointer-events-none"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#22252E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:justify-center h-full">
          <div className="z-20 md:relative md:-bottom-[300px] md:right-[70px] max-w-md bg-[#020C22] p-5 md:p-10 text-white font-satoshi text-[24px] md:text-[40px] font-normal leading-[28px] md:leading-[48px] text-center md:text-left flex h-auto">
            <span>
              Join the fun and make memories with our{" "}
              <span className="text-orange-500">exciting activities</span> for
              everyone
            </span>
          </div>
        </div>
        {/* mobile arrows */}
        <span className="none-md">
          <div className="flex py-3 bg-[#1D2639] relative justify-center items-center gap-10 w-full">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous Slide"
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-10 w-10 rotate-180 ${
                  activeIndex > 0 ? "text-[white]" : "text-gray-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === cricketSlides.length - 1}
              aria-label="Next Slide"
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-10 w-10 ${
                  activeIndex < cricketSlides.length - 1
                    ? "text-[white]"
                    : "text-gray-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </span>
      </div>
    </AnimatedSection>
  );
}

export default function MultiSwiper() {
  return (
    <FadeIn>
      <FitnessSwiper />
      <NatureSwiper />
      <CricketSwiper />
    </FadeIn>
  );
}
