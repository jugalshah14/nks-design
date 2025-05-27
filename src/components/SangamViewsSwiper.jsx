"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideUp } from "./animations";

const data = {
  "3BHK": [
    {
      src: "/assets/sangam1.png",
    },
    {
      src: "/assets/sangam2.png",
    },
    {
      src: "/assets/sangam3.png",
    },
    {
      src: "/assets/sangam4.jpg",
    },
  ],
  "2BHK": [
    {
      src: "/assets/sangam1.png",
    },
    {
      src: "/assets/sangam2.png",
    },
    {
      src: "/assets/sangam3.png",
    },
    {
      src: "/assets/sangam4.jpg",
    },
  ],
  "4BHK": [
    {
      src: "/assets/sangam1.png",
    },
    {
      src: "/assets/sangam2.png",
    },
    {
      src: "/assets/sangam3.png",
    },
    {
      src: "/assets/sangam4.jpg",
    },
  ],
};

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
        centerMode: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.8,
        infinite: false,
      },
    },
  ],
};
export default function SangamViewsSwiper({ activeBHK = "3BHK" }) {
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

  return (
    <div className="relative md:-top-15 overflow-hidden">
      <div className="container mx-auto relative md:mb-16 bg-[#020C22]">
        <div className="grid grid-cols-4 gap-0">
          <div className="!flex !flex-col justify-center bg-[#020C22] z-2 sangam-after-box pr-10 md:col-span-2 lg:col-span-1">
            <SlideUp
              delay={0.6}
              className="text-center md:text-left text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-white mb-1"
            >
              Views from {activeBHK}
            </SlideUp>
            <div className="hidden md:flex relative w-[366px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around mt-9 px-1 py-5">
              <div className="h-full flex items-center justify-center">
                <button
                  className="focus:outline-none  cursor-pointer"
                  onClick={handlePrev}
                >
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="Previous"
                    height={20}
                    width={19}
                    className="transform rotate-180 invert-100"
                  />
                </button>
              </div>
              <div className="flex gap-2 items-center text-white">
                {Math.ceil(activeIndex) + 1}{" "}
                <div className="h-0.5 w-8 bg-[#D9D9D9] text-white" />{" "}
                {data[activeBHK].length}
              </div>
              <div className="h-full flex items-center justify-center">
                <button
                  className="focus:outline-none cursor-pointer"
                  onClick={handleNext}
                >
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="Next"
                    height={20}
                    width={19}
                    className="invert-100"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-3">
            <div>
              <Slider
                ref={(slider) => {
                  swiperRef = slider;
                }}
                {...settings}
                afterChange={(current) => setActiveIndex(current)}
              >
                {data[activeBHK].map((slide, i) => (
                  <div
                    key={i}
                    className="mx-5 !w-[100%] !overflow-hidden transition-transform duration-300 transform hover:scale-95"
                  >
                    <div className="relative !w-[100%] h-[350px]">
                      <Image
                        src={slide.src}
                        alt={`${activeBHK}-view-${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto flex md:hidden relative w-[366px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around mt-9 px-1 py-5">
        <div className="h-full flex items-center justify-center">
          <button
            className="focus:outline-none  cursor-pointer"
            onClick={handlePrev}
          >
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="Previous"
              height={20}
              width={19}
              className="transform rotate-180 invert-100"
            />
          </button>
        </div>
        <div className="flex gap-2 items-center text-white">
          {Math.ceil(activeIndex) + 1}{" "}
          <div className="h-0.5 w-8 bg-[#D9D9D9] text-white" />{" "}
          {data[activeBHK].length}
        </div>
        <div className="h-full flex items-center justify-center">
          <button
            className="focus:outline-none cursor-pointer"
            onClick={handleNext}
          >
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="Next"
              height={20}
              width={19}
              className="invert-100"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
