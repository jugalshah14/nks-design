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
                  <div className="md:relative w-full h-[200px] md:h-[570px]">
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
              <span className="text-white md:font-bold font-normal text-[24px] leading-7">{fitnessSlides[activeIndex].caption}</span>
              <span className="absolute right-12 bottom-4 flex gap-2 hide-triangle">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className={`cursor-pointer bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
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
                  className={`cursor-pointer bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
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
          <div className="z-20 md:relative md:-bottom-[300px] md:right-[70px] max-w-md bg-[#020C22] p-5 md:p-10 text-white font-satoshi text-[22px] md:text-[40px] leading-[28px] md:leading-[48px] text-center md:text-left flex h-auto">
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
      {/* Mobile View */}
      <div className="w-full flex flex-col bg-white py-10 md:mb-10 md:hidden">
        <div className="relative">
          <div className="relative w-full h-[200px] overflow-hidden">
            <Swiper
              modules={[Pagination]}
              onSwiper={setSwiperRef}
              onSlideChange={handleSlideChange}
              slidesPerView={1}
              spaceBetween={0}
              loop={false}
              speed={600}
              className="w-full h-full"
            >
              {natureSlides.map((slide, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Title Bar */}
          <div className="w-full absolute bottom-0 py-3 backdrop-blur-md flex items-center justify-center z-10">
            <span className="text-white font-bold text-[18px] leading-6 text-center">
              {natureSlides[activeIndex].caption}
            </span>
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full flex flex-col items-center">
          <div className="text-black p-5 text-center text-[24px] leading-7 font-satoshi font-normal">
            Embrace the beauty of nature with us, where modern living meets{" "}
            <span className="text-orange-500">natural wonders</span>
          </div>
        </div>
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
      </div>
      {/* Desktop View */}
      <div className="container nature-swiper md:mb-10 w-full h-[280px] md:h-[570px] mx-auto flex-col lg:flex-row items-center lg:items-center mt-12 hidden md:flex">
        <div className="flex flex-col justify-center lg:justify-center h-full">
          <div className="z-20 relative md:-bottom-[118px] md:left-[50px] max-w-md bg-[#020C22] p-6 md:p-10 text-white font-satoshi text-[40px] leading-[48px] text-left self-center lg:self-end mt-4">
            Embrace the beauty of nature with us, where modern living meets{" "}
            <span className="text-orange-500">natural wonders</span>
          </div>
        </div>
        <SlideUp delay={0.4}>
          <div className="relative w-full h-[570px] md:w-[804px]">
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
                  <div className="relative w-full h-[570px]">
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
            <div className="w-full absolute bottom-0 left-0 p-5 pl-15 backdrop-blur-md text-white font-semibold text-2xl z-10">
              {natureSlides[activeIndex].caption}
              <span className="absolute right-4 bottom-4 flex gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className={`cursor-pointer bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
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
                  className={`cursor-pointer bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
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
        </SlideUp>
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
      {/* Mobile View */}
      <div className="w-full bg-white flex flex-col md:hidden">
        <div className="relative">
          <div className="relative w-full h-[200px] overflow-hidden">
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
                  <div className="relative w-full h-[200px]">
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
          </div>
          {/* Title Bar */}
          <div className="absolute w-full bottom-0 py-3 backdrop-blur-md flex items-center justify-center z-10">
            <span className="text-white font-bold text-[18px] leading-6 text-center">
              {cricketSlides[activeIndex].caption}
            </span>
          </div>
        </div>
        {/* Text Section */}
        <div className="relative w-full bg-[#020C22] p-5 flex flex-col items-center">
          <div className="text-white text-center text-[24px] leading-7 font-satoshi font-normal">
            Join the fun and make memories with our{" "}
            <span className="text-orange-500">exciting activities</span> for
            everyone
          </div>
        </div>
        <div className="flex py-3 -top-[1px] bg-[#1D2639] relative justify-center border-none items-center gap-10 w-full">
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
      </div>
      {/* Desktop View */}
      <div className="container cricket-swiper md:mb-10 w-full h-[280px] md:h-[570px] mx-auto flex-col lg:flex-row mt-12 hidden md:flex">
        <div className="relative w-full h-[570px] md:w-[804px]">
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
                <div className="relative w-full h-[570px]">
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
          <div className="w-full absolute bottom-0 left-0 p-5 backdrop-blur-md text-white font-semibold text-2xl z-10">
            {cricketSlides[activeIndex].caption}
            <span className="absolute right-12 bottom-4 flex gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className={`cursor-pointer bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
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
                className={`cursor-pointer bg-white/40 hover:bg-white/70 text-black rounded-full w-8 h-8 flex items-center justify-center transition shadow ${
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
        <div className="flex flex-col justify-center lg:justify-center h-full">
          <div className="z-20 relative -bottom-[149px] right-[40px] max-w-md bg-[#020C22] p-8 md:p-10 text-white font-satoshi text-[40px] leading-[48px] text-left flex h-auto">
            <span>
              Join the fun and make memories with our{" "}
              <span className="text-orange-500">exciting activities</span> for
              everyone
            </span>
          </div>
        </div>
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
