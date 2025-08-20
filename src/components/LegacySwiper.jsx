"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatedSection } from "./animations";

const data = [
  {
    src: "/assets/projects1.png",
    title: "The 42",
  },
  {
    src: "/assets/projects2.jpg",
    title: "Alcove Gloria",
  },
  {
    src: "/assets/projects3.jpg",
    title: "Flora Fountain",
  },
  {
    src: "/assets/projects4.jpg",
    title: "Alcove Regency",
  },
  {
    src: "/assets/projects5.jpg",
    title: "Prayag",
  },
];

const settings = {
  className: "legacy-swiper center",
  infinite: false,
  centerPadding: "30px",
  slidesToShow: 1,
  speed: 600,
  dots: false,
  arrows: false,
  initialSlide: 0,
};

export default function LegacySwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  let swiperRef = useRef(null);

  const handleNext = () => {
    if (!swiperRef) return;
    swiperRef.slickNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    swiperRef.slickPrev();
  };

  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex === data.length - 1;

  return (
    <AnimatedSection className="container mx-auto py-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Left Column - Text Content */}
        <div className="relative lg:col-span-4 max-md:text-center">
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <h2 className="text-[24px] font-satoshi leading-[28px] font-[700] text-[#5C5F68] mb-5">
              Alcove's Legacy
            </h2>
            <div className="w-[140px] h-[1px] bg-[#282C3F] mb-5"></div>
          </div>
          <p className="text-[28px] font-satoshi font-[700] text-[#22252E] leading-[36px]">
            Alcove has redefined Kolkata’s skyline with landmark projects. Known
            for quality, innovation, and timely delivery, we create spaces that
            inspire. New Kolkata Sangam carries forward this tradition where
            vision meets craftsmanship.{" "}
          </p>

          {/* Decorative circle element */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full opacity-30"></div>
        </div>

        {/* Right Column - Swiper */}
        <div className="relative lg:col-span-6">
          <Slider
            ref={(slider) => {
              swiperRef = slider;
            }}
            {...settings}
            afterChange={(current) => setActiveIndex(current)}
          >
            {data.map((slide, index) => (
              <div key={index} className="relative md:top-[-50px] top-[-30px]">
                <div className="flex justify-center relative h-[280px] md:h-[500px]">
                  <div className="absolute inset-0 rounded-lg w-full h-full z-1"></div>
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-fill"
                  />
                  <div className="absolute inset-0 z-2">
                    <h3 className="max-md:w-[100%] p-6 backdrop-filter backdrop-blur-[8px] max-md:text-center bottom-0 absolute right-0 text-[28px] md:text-[40px] font-satoshi font-[500] leading-8 md:leading-[48px] text-white">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Controls - matching Project Overview style */}
          <div className="absolute -bottom-10 md:bottom-[25px] left-1/2 transform -translate-x-1/2 bg-white custom-box-shadow rounded-md flex items-center justify-between w-[121px] md:w-[160px] h-[48px] md:h-[60px] z-1">
            <div className="w-1/2 h-full flex items-center justify-center">
              <button
                id="legacy-swiper-prev"
                className={`focus:outline-none cursor-pointer ${
                  isPrevDisabled ? "opacity-30" : ""
                }`}
                onClick={handlePrev}
              >
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="Previous"
                    fill
                    className="object-cover transform rotate-180"
                  />
                </div>
              </button>
            </div>
            <div className="h-6 w-px bg-[#20202019]"></div>
            <div className="w-1/2 h-full flex items-center justify-center">
              <button
                id="legacy-swiper-next"
                className={`focus:outline-none cursor-pointer ${
                  isNextDisabled ? "opacity-30" : ""
                }`}
                onClick={handleNext}
              >
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="Next"
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
