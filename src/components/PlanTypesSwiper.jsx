"use client";
import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const data = [
  {
    icon: "/assets/icons/1bhk.svg",
    title: "1BHK",
    desc: "Starts from 15.99lacs",
    link: "",
  },
  {
    icon: "/assets/icons/2bhk.svg",
    title: "2BHK",
    desc: "Starts from 23.99lacs",
    link: "",
  },
  {
    icon: "/assets/icons/3bhk.svg",
    title: "3BHK",
    desc: "Starts from 33.99lacs",
    link: "",
  },
  {
    icon: "/assets/icons/4bhk.svg",
    title: "4BHK",
    desc: "Starts from 44.99lacs",
    link: "",
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
        slidesToShow: 1.7,
        infinite: false,
      },
    },
  ],
};
export default function PlanTypesSwiper() {
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
    <div className="pt-10 overflow-hidden px-4 md:px-0">
      <Slider
        ref={(slider) => {
          swiperRef = slider;
        }}
        {...settings}
        afterChange={(current) => setActiveIndex(current)}
      >
        {data.map((slide, index) => (
          <div key={index} className="bg-[#fdf6f2] p-5 mx-2">
            <Image
              src={slide.icon}
              alt={slide.title}
              width={36}
              height={36}
              className="mb-12"
            />
            <h3 className="text-[40px] font-[Satoshi] font-normal leading-[54px] text-[#22252e] mb-2">
              {slide.title}
            </h3>
            <p className="text-[20px] font-[Satoshi] font-normal leading-[27px] text-[#22252eb2] mb-8">
              {slide.desc}
            </p>
            <Link
              href={slide.link}
              className="flex items-center gap-2 text-[16px] font-[Satoshi] font-bold leading-[22px] text-[#134c78]"
            >
              View
              <Image
                src="/assets/icons/arrowlong.svg"
                alt="1BHK"
                width={40}
                height={3}
              />
            </Link>
          </div>
        ))}
      </Slider>
      <div className="relative mt-2 flex justify-end">
        <div className="w-[100%] md:w-[360px] z-11 flex items-center justify-around px-1 py-5">
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
                className=" transform rotate-180"
              />
            </button>
          </div>
          <div className="flex gap-2 items-center">
            {Math.ceil(activeIndex) + 1}{" "}
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
                className=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
