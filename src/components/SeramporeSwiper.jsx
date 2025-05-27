"use client";
import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideUp } from "./animations";

const data = [
  {
    src: "/assets/collage.png",
    icon: "/assets/icons/graduation-hat.svg",
    title: "Serampore College",
    description: "1.85km away",
  },
  {
    src: "/assets/hospital.png",
    icon: "/assets/icons/hospital-building.svg",
    title: "Serampore Hospital",
    description: "3.1km away",
  },
  {
    src: "/assets/railwaystation.png",
    icon: "/assets/icons/shopping-bag-tag.svg",
    title: "Serampore Railway Station",
    description: "2.5km away",
  },
  {
    src: "/assets/shelby.jpg",
    icon: "/assets/icons/hospital-building.svg",
    title: "Shelby Hospital",
    description: "3.4km away",
  },
];

const settings = {
  className: "serampore-swiper center",
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 3.2,
  speed: 600,
  dots: false,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        centerMode: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 926,
      settings: {
        centerMode: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
};
export default function SeramporeSwiper() {
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
    <div className="md:pt-10 mb-10 container mx-auto overflow-x-visible max-sm:px-5">
      <Slider
        ref={(slider) => {
          swiperRef = slider;
        }}
        {...settings}
        afterChange={(current) => {
          setActiveIndex(
            +document
              .getElementsByClassName("serampore-swiper")?.[0]
              .getElementsByClassName("slick-current")?.[0]
              ?.getAttribute("data-index") || current
          );
        }}
      >
        {data.map((slide, index) => (
          <SlideUp
            delay={0.2 * index}
            key={index}
            className="relative !flex flex-nowrap pt-15 w-[100%]"
          >
            <Image
              src={slide.src}
              alt="slide-0"
              height={160}
              width={160}
              className="relative !h-[110px] !w-[110px] md:!h-[160px] md:!w-[160px] z-1"
            />
            <div
              className={`w-fit relative flex flex-col p-7 pl-3 pt-10 max-sm:pr-30 pr-20 `}
            >
              <div className="location-slide bg-[#F8F8F8] top-6 -left-[70px] w-[100%] sm:w-[120%] h-[100%] absolute back-active" />
              <Image
                src={slide.icon}
                height={48}
                width={48}
                alt="icon"
                className={`max-md:!h-[33px] max-md:!w-[33px] image z-1`}
              />
              <p
                className={`max-md:!whitespace-nowrap md:!w-[172px] mt-2 text-[14px] md:text-[20px] text-[#22252E] font-[700] z-1 leading-5 md:leading-[28px] title`}
              >
                {slide.title}
              </p>
              <p
                className={`z-1 mb-1 text-[12px] md:text-[16px] text-[#22252E] opacity-60 font-[400] leading-4 md:leading-[20px] description`}
              >
                {slide.description}
              </p>
            </div>
          </SlideUp>
        ))}
      </Slider>
      <div className="relative transform bg-white flex gap-10 items-center justify-center mt-9 px-1 py-5">
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
              className={`${!activeIndex && "invert-75"} transform rotate-180`}
            />
          </button>
        </div>
        <div className="flex gap-2 items-center">
          {Math.ceil(activeIndex + 1)}{" "}
          <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {data.length}
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
              className={`${
                Math.ceil(activeIndex + 1) === data.length && "invert-75"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
