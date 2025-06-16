"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    title: "New exclusive mall",
    image: "/assets/trivent1.jpg",
    desc: "Immerse yourself in the tranquility of the lush landscape garden",
  },
  {
    title: "Famous clothing brands",
    image: "/assets/trivent2.jpg",
    desc: "Immerse yourself in the tranquility of the lush landscape garden",
  },
  {
    title: "Famous food",
    image: "/assets/trivent3.jpg",
    desc: "Immerse yourself in the tranquility of the lush landscape garden",
  },
  {
    title: "Gaming zone for everyone",
    image: "/assets/trivent4.jpg",
    desc: "Immerse yourself in the tranquility of the lush landscape garden",
  },
];

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
export default function TriventSliders() {
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
  const isNextDisabled = activeIndex >= data.length - settings.slidesToShow;

  return (
    <>
    <div className="relative max-md:-top-15 overflow-hidden">
      <div className="container mx-auto relative md:mb-16">
        <div className="grid grid-cols-4 gap-0">
          <div className="hidden md:flex flex-col bg-[#020C22] z-2 after-box pr-10 md:col-span-2 lg:col-span-1 with-before justify-center items-left">
            <h2 className="px-[60px] pt-[34px] md:px-[0px] md:pt-[0px] text-[28px] md:text-[40px] font-satoshi font-normal leading-[32px] md:leading-[54px] text-[#22252e] mb-1 text-center md:text-left text-white">
              Attractions at Triveni
            </h2>
            <div className="w-full relative max-w-[190px] z-11 transform bg-[#021642] flex items-center justify-around mt-9 px-1 py-5">
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
                {data.map((slide, i) => (
                  <div
                    key={i}
                    className="mx-2 !w-[100%] !overflow-hidden md:border-l md:border-dashed md:border-[rgba(255,255,255,0.2)] bg-[#020C22] h-[450px] md:h-auto"
                  >
                    <div className="top-[60px] md:top-[0px] relative !w-[100%] h-auto px-[16px] md:px-[28px]  gap-[15px] md:gap-[24px] flex flex-col transition-transform duration-300 transform hover:scale-95">
                      <h2 className="hide-triangle text-white text-[20px] md:text-[24px] font-[700]">
                        {slide.title}
                      </h2>
                      <Image
                        src={slide.image}
                        width={240}
                        height={250}
                        alt="img"
                        className="w-full min-h-[250px] max-h-auto"
                      />
                      <h2 className="none-md text-white text-[20px] md:text-[24px] font-[700]">
                        {slide.title}
                      </h2>
                      <p className="text-[16px] text-white/50 font-[400]">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute w-full top-[-40px] h-[48px] flex md:hidden relative !z-11 transform bg-[#021642] items-center justify-around px-1 py-5">
        <div className="h-full flex items-center justify-center">
          <button
            className={`focus:outline-none cursor-pointer ${Math.ceil(activeIndex) === 0 ? 'opacity-30' : ''}`}
            onClick={handlePrev}
            disabled={Math.ceil(activeIndex) === 0}
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
          <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {data.length}
        </div>
        <div className="h-full flex items-center justify-center">
          <button
            className={`focus:outline-none cursor-pointer ${Math.ceil(activeIndex) >= data.length - 1 ? 'opacity-30' : ''}`}
            onClick={handleNext}
            disabled={Math.ceil(activeIndex) >= data.length - 1}
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
    </>
  );
}
