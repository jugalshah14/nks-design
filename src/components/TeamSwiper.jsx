"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Amar Nath Shroff",
    image: "/assets/team-member1.png",
    designation: "Chairman",
  },
  {
    title: "Ajay Kumar Shroff",
    image: "/assets/member2.png",
    designation: "Chairman",
  },
  {
    title: "Archana Shroff",
    image: "/assets/member3.png",
    designation: "Chairman",
  },
  {
    title: "Yashaswi Shroff",
    image: "/assets/member4.png",
    designation: "Chairman",
  },
  {
    title: "Amar Nath Shroff",
    image: "/assets/member3.png",
    designation: "Chairman",
  },
];

const settings = {
  className: "amenities-swiper !overflow-visible center",
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 3,
  speed: 600,
  dots: false,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.4,
        infinite: false,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1.4,
        infinite: false,
      },
    },
  ],
};

export default function TeamSwiper() {
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
              Meet The <span className="orange-color">Team</span>
            </h2>
            <div className="relative right-[-90px] z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding rounded-md flex items-center justify-around mt-9 px-1 py-5">
              <button className="focus:outline-none cursor-pointer" onClick={handlePrev}>
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
              <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
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
          <div className="col-span-4 md:col-span-2 lg:col-span-3 px-[10px] md:px-[0px]">
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
                  <div className="relative gap-2 flex flex-col min-h-[400px]">
                    <Image
                      src={slide.image}
                      width={280}
                      height={240}
                      alt={slide.title}
                      className="height-member"
                    />
                    <div className="p-4 absolute bottom-0 bg-white/90 backdrop-filter backdrop-blur-[14px] bg-opacity-80 w-full gap-2 flex flex-col">
                      <h2 className="text-[#22252E] font-satoshi text-[24px] font-bold leading-[28px]">
                        {slide.title}
                      </h2>
                      <p className="text-[16px] text-[#22252E] font-normal leading-[18px]">
                        {slide.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Bottom arrows and pagination (mobile only) */}
      <div className="pt-8 flex md:hidden relative -top-2 z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding items-center justify-around px-1 py-5">
        <button className="focus:outline-none cursor-pointer" onClick={handlePrev}>
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
        <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
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
