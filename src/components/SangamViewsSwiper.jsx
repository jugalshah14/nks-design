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
      src: "/assets/mp1.png",
    },
    {
      src: "/assets/mp2.png",
    },
    {
      src: "/assets/mp3.png",
    },
    {
      src: "/assets/mp4.png",
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
  infinite: false,
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

  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex >= data[activeBHK].length - settings.slidesToShow;

  // Mobile navigation logic
  const mobileIndex = Math.ceil(activeIndex);
  const isMobilePrevDisabled = mobileIndex === 0;
  const isMobileNextDisabled = mobileIndex >= data[activeBHK].length - 1;

  return (
    <div className="relative top-[100px] md:-top-15 overflow-x-hidden bg-[#020C22]">
      <div className="container mx-auto relative md:mb-16 bg-[#020C22]">
        {/* Only for mobile */}
        <div className="flex items-center justify-center">
          <div className="none-md text-center text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-white mb-6 md:mb-1 mt-[60px] md:mt-0">
            Views from {activeBHK}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-0">
          <div className="!flex !flex-col justify-center bg-[#020C22] z-2 sangam-after-box pr-10 md:col-span-2 lg:col-span-1">
            <div
              className="hide-triangle text-center md:text-left text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-white mb-6 md:mb-1 mt-[60px] md:mt-0"
            >
              Views from {activeBHK}
            </div>
            <div className="hidden md:flex relative max-w-[190px] w-[366px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around mt-9 px-1 py-5">
              <div className="h-full flex items-center justify-center">
                <button
                  className={`focus:outline-none cursor-pointer ${isPrevDisabled ? 'opacity-30' : ''}`}
                  onClick={handlePrev}
                  disabled={isPrevDisabled}
                >
                  <Image
                    src="/assets/arrow-main.svg"
                    alt="Previous"
                    height={20}
                    width={19}
                    className="transform rotate-180 invert-100"
                  />
                </button>
              </div>
              <div className="h-full flex items-center justify-center">
                <button
                  className={`focus:outline-none cursor-pointer ${isNextDisabled ? 'opacity-30' : ''}`}
                  onClick={handleNext}
                  disabled={isNextDisabled}
                >
                  <Image
                    src="/assets/arrow-main.svg"
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
                    className="mx-5 !w-[100%] !overflow-x-hidden transition-transform duration-300 transform hover:scale-95"
                  >
                    <div className="relative !w-[100%] h-[200px] md:h-[350px] min-h-[200px] max-h-[200px] md:min-h-[350px]">
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
      <div className="w-full absolute bottom-0 flex md:hidden relative z-111 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around mt-9 px-1 py-5">
        <div className="h-full flex items-center justify-center">
          <button
            className={`focus:outline-none cursor-pointer ${isMobilePrevDisabled ? 'opacity-30' : ''}`}
            onClick={handlePrev}
            disabled={isMobilePrevDisabled}
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
            className={`focus:outline-none cursor-pointer ${isMobileNextDisabled ? 'opacity-30' : ''}`}
            onClick={handleNext}
            disabled={isMobileNextDisabled}
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
