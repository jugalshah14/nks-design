"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    title: "Concept for entrance Plaza",
    image: "/assets/goal1.png",
    desc: "Immerse yourself in the tranquility of the lush landscape garden",
  },
  {
    title: "Concept for entrance lobby",
    image: "/assets/goal2.png",
    desc: "Immerse yourself in the tranquility of the lush landscape garden",
  },
  {
    title: "Concept for the masterplan",
    image: "/assets/goal3.png",
    desc: "Immerse yourself in the tranquility of the lush landscape garden",
  },
  {
    title: "Concept for private garden flats",
    image: "/assets/goal2.png",
    desc: "Immerse yourself in the tranquility of the lush landscape garden",
  },
];

export default function MasterplanSwiper() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef) swiperRef.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative max-md:-top-15 overflow-hidden ">
      <div className="container max-w-7xl mx-auto relative md:mb-16 overflow-visible px-[16px] md:px-[0px]">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-[32px] md:gap-10">
          <div className="">
            <h2 className="px-[60px] pt-[34px] md:px-[0px] md:pt-[0px] text-[28px] md:text-[40px] font-satoshi font-normal leading-[32px] md:leading-[54px] text-[#22252e] mb-1 text-center md:text-left">
              Primary goals we were having
            </h2>
            <div className="hidden md:flex relative right-[-90px] z-11 bg-[#FFFFFF33] backdrop-blur-[14px] bg-opacity-80 rounded-md flex items-center justify-around mt-9 px-1 py-5">
              <button
                onClick={handlePrev}
                className={`cursor-pointer ${isBeginning ? "opacity-40" : "opacity-100"}`}
              >
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="Previous"
                  height={20}
                  width={19}
                  className="rotate-180"
                />
              </button>
              <div className="flex gap-2 items-center">
                {activeIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {slides.length}
              </div>
              <button
                onClick={handleNext}
                className={`cursor-pointer ${isEnd ? "opacity-40" : "opacity-100"}`}
              >
                <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} />
              </button>
            </div>
          </div>

          <div className="col-span-4 md:col-span-3 overflow-visible">
            <Swiper
              onSwiper={(swiper) => setSwiperRef(swiper)}
              onSlideChange={handleSlideChange}
              slidesPerView={"auto"}
              spaceBetween={30}
              centeredSlides={false}
              loop={false}
              modules={[Navigation]}
              className="!overflow-visible"
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[290px] flex-shrink-0 overflow-hidden !mr-0"
                >
                  <div className="relative gap-6 flex flex-col p-7 md:border-l md:border-dashed md:border-gray-300 bg-white">
                    <h2 className="text-[#22252E] text-[24px] font-[700]">{slide.title}</h2>
                    <Image src={slide.image} width={240} height={240} alt="img" />
                    <p className="text-[16px] text-[#22252E] font-[400]">{slide.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile Arrows */}
            
          </div>
        </div>
      </div>
      <div className="flex md:hidden relative -top-3 z-11 bg-[#4F70AF0D] items-center justify-around px-1 py-5 mt-4">
              <button
                onClick={handlePrev}
                className={`cursor-pointer ${isBeginning ? "opacity-40" : "opacity-100"}`}
              >
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="Previous"
                  height={20}
                  width={19}
                  className="rotate-180"
                />
              </button>
              <div className="flex gap-2 items-center">
                {activeIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {slides.length}
              </div>
              <button
                onClick={handleNext}
                className={`cursor-pointer ${isEnd ? "opacity-40" : "opacity-100"}`}
              >
                <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} />
              </button>
            </div>
    </div>
    
  );
}
