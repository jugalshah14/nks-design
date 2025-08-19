"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideUp } from "./animations";

const slides = [
  {
    title: "Neha Mohapatra",
    image: "/assets/r1.svg",
    designation: "Owner of flat in Serenity",
    para: "First and foremost, the construction and design of the apartments are top-notch. The 2BHK apartment I purchased is not only spacious but also thoughtfully designed,",
    number: "5"
  },
  {
    title: "Riyan Aggarwal",
    image: "/assets/r2.svg",
    designation: "Owner of flat in Serenity",
    para: "First and foremost, the construction and design of the apartments are top-notch. The 2BHK apartment I purchased is not only spacious but also thoughtfully designed, use of available space. The layout is functional and provides ample natural light and ventilation, creating a comfortable and inviting living environment.",
    number: "5"
  },
  {
    title: "Sushil Kumar",
    image: "/assets/rr3.png",
    designation: "Owner of flat in Serenity",
    para: "First and foremost, the construction and design of the apartments are top-notch. The 2BHK apartment I purchased is not only spacious but also thoughtfully designed,",
    number: "5"
  },
];

const settings = {
  className: "amenities-swiper !overflow-visible center",
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 2.1,
  speed: 600,
  dots: false,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
      },
    }
  ],
};

export default function ReviewSliderOne() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current?.slickNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slickPrev();
  };

  return (
    <div className="relative  overflow-hidden">
      <div className="container mx-auto relative md:mb-16">
        <div className="grid grid-cols-4 gap-0">
          {/* Left panel for title and arrows (desktop only) */}
          <div className="hidden md:block bg-white z-2 after-box pr-10 md:col-span-2 lg:col-span-1">
            <h2 className="project-overview-title text-left pb-[28px] md:pb-[0px]">
              Other<span className="orange-color"> Reviews</span>
            </h2>
            <div className="mt-[150px] relative right-[-30px] z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding rounded-md flex items-center justify-around mt-9 px-1 py-5">
              <button id="review-swiper-prev-desktop" className="focus:outline-none cursor-pointer" onClick={handlePrev}>
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="Previous"
                  height={20}
                  width={19}
                  className="transform rotate-180"
                />
              </button>
              <div className="flex gap-2 items-center">
                {activeIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {slides.length}
              </div>
              <button id="review-swiper-next-desktop" className="focus:outline-none cursor-pointer" onClick={handleNext}>
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="Next"
                  height={20}
                  width={19}
                />
              </button>
            </div>
          </div>

          {/* Right panel for slider */}
          <div className="col-span-4 md:col-span-2 lg:col-span-3 md:px-[10px] md:px-[0px]">
            <Slider
              ref={swiperRef}
              {...settings}
              afterChange={(current) => setActiveIndex(current)}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="mx-2 !w-full !overflow-hidden"
                >
                  <div className="relative flex flex-col mx-[16px] md:mx-0  md:pl-[30px]">
                    <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden mb-[12px] md:mb-[24px]">
                      <Image
                        src={slide.image}
                        width={100}
                        height={100}
                        alt={slide.title}
                        className="object-cover w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                      />
                    </div>

                    <h2 className="text-[#22252E] font-satoshi text-[18px] md:text-[24px] font-[700] leading-[28px] md:mb-[5px]">
                        {slide.title}
                    </h2>
                    <p className="text-[14px] md:text-[16px] font-satoshi font-[400] text-black/50 leading-[20px] mb-[12px] md:mb-[24px]">
                        {slide.designation}
                    </p>
                    <p className="w-full md:max-w-[410px] italic font-satoshi text-[14px] md:text-[20px] font-[400] leading-[28px] mb-[12px] md:mb-[24px]">
                        {slide.para}
                    </p>
                    <h3 className="text-[14px] md:text-[16px] font-satoshi font-[400] text-black/50 leading-[20px]">
                      No of Family Members
                    </h3>
                    <p className="text-[#22252E] font-satoshi text-[18px] md:text-[24px] font-[400] leading-[28px]">{slide.number}</p>
                    
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Bottom arrows and pagination (mobile only) */}
      <div className="pt-8 flex md:hidden relative -top-2 z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding items-center justify-around px-1 py-5">
        <button id="review-swiper-prev-mobile" className="focus:outline-none cursor-pointer" onClick={handlePrev}>
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="Previous"
            height={20}
            width={19}
            className="transform rotate-180"
          />
        </button>
        <div className="flex gap-2 items-center">
          {Math.ceil(activeIndex) + 1}
          <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {slides.length}
        </div>
        <button id="review-swiper-next-mobile" className="focus:outline-none cursor-pointer" onClick={handleNext}>
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="Next"
            height={20}
            width={19}
          />
        </button>
      </div>

    </div>
  );
}
