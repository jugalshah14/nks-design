"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

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
    image: "/assets/team-member1.png",
    designation: "Chairman",
  }
  
];

export default function TeamSwiper() {
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
    <div className="relative overflow-hidden pt-10">
      <div className="container mx-auto relative md:mb-16 overflow-visible px-[16px] md:px-[0px]">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-[32px] md:gap-10">
          <div className="">
            <h2 className="project-overview-title text-left pb-[28px] md:pb-[0px]">Meet The <span className="orange-color">Team</span></h2>
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
                  className="!w-[280px] flex-shrink-0 overflow-hidden mr-5"
                >
                  <div className="relative gap-2 flex flex-col min-h-[400px]">
                    <Image src={slide.image} width={280} height={240} alt="img" className="" />
                    <div className="p-[16px] absolute bottom-0 bg-white/90 backdrop-filter backdrop-blur-[14px] bg-opacity-80 w-full gap-2 flex flex-col">
                      <h2 className="text-[#22252E] font-satoshi text-[24px] font-[700] leading-[28px]">{slide.title}</h2>
                      <p className="text-[16px] text-[#22252E] font-[400] leading-[18px]">{slide.designation}</p>
                    </div>
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
