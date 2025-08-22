"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/assets/o1.png",
    designation: "Around 4650 clients in township",
    objectPosition: "object-[70%_50%]",
    imageType: "Actual Image"
  },
  {
    image: "/assets/o2.png",
    designation: "High foot traffic in Serampore",
    objectPosition: "object-[0%_50%]",
    imageType: "Stock Image"
  },
  {
    image: "/assets/o3.jpg",
    designation: "Between Hooghly and Kolkata",
    objectPosition: "object-[50%_50%]",
    imageType: "Artist Impression"
  },
  {
    image: "/assets/o4.jpg",
    designation: "State-of-the-art infrastructure",
    objectPosition: "object-[50%_50%]",
    imageType: "Artist Impression"
  },
  {
    image: "/assets/o5.png",
    designation: "Healthcare services in Serampore",
    objectPosition: "object-[50%_50%]",
    imageType: "Stock Image"
  },
  {
    image: "/assets/o6.png",
    designation: "Seamless three-way connectivity",
    objectPosition: "object-[50%_50%]",
    imageType: "Stock Image"
  },
  {
    image: "/assets/o7.png",
    designation: "Affordable leasing rates",
    objectPosition: "object-[50%_50%]",
    imageType: "Stock Image"
  }
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
        slidesToShow: 1.3,
        infinite: false,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1.3,
        infinite: false,
      },
    },
  ],
};

export default function OmniplexSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current?.slickNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slickPrev();
  };

  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex >= slides.length - settings.slidesToShow;

  return (
    <div className="relative  overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-4 gap-0">
          {/* Left panel for title and arrows (desktop only) */}
          <div className="hidden md:block bg-white z-2 after-box  md:col-span-2 lg:col-span-1">
            <h2 className="project-overview-title text-left pb-[28px] md:pb-[0px]">
              Why bring your business to <span className="orange-color">Triveni Omniplex </span>
            </h2>
            <div className="max-w-[190px] relative border border-[rgba(0,0,0,0.2)] z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 flex items-center justify-around mt-9 px-1 py-5">
              <button 
                id="omniplex-slider-prev-desktop"
                className={`focus:outline-none cursor-pointer ${isPrevDisabled ? 'opacity-30' : ''}`} 
                onClick={handlePrev}
                disabled={isPrevDisabled}
              >
                <Image
                  src="/assets/arrow-main.svg"
                  alt="Previous"
                  height={20}
                  width={19}
                  className="transform rotate-180"
                />
              </button>
              <button 
                id="omniplex-slider-next-desktop"
                className={`focus:outline-none cursor-pointer ${isNextDisabled ? 'opacity-30' : ''}`} 
                onClick={handleNext}
                disabled={isNextDisabled}
              >
                <Image
                  src="/assets/arrow-main.svg"
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
                  className="mx-2 md:mx-6 !w-full !overflow-hidden"
                >
                  <div className="relative gap-2 flex flex-col min-h-[400px]">
                    <div className="relative">
                      {/* Info Icon */}
                      <div className="absolute top-3 md:right-8 right-3 cursor-pointer flex flex-row items-center rounded-xl bg-black/20 z-10 group">
                        <div className="overflow-hidden">
                          <div className="text-[12px] text-white whitespace-nowrap opacity-0 max-w-0 group-hover:px-2 group-hover:opacity-100 group-hover:max-w-[100px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                            {slide.imageType}
                          </div>
                        </div>
                        <Image src="/assets/icons/info.svg" alt="info" width={20} height={20} className="" />
                      </div>
                      
                      <Image
                        src={slide.image}
                        width={280}
                        height={240}
                        alt={slide.title}
                        className={`height-member w-full !h-[400px] object-cover ${slide.objectPosition}`}
                      />
                    </div>
                    <div className="p-4 absolute bottom-0 bg-white/90 backdrop-filter backdrop-blur-[14px] bg-opacity-80 w-full gap-2 flex flex-col">
                      <p className="max-w-[232px] text-[20px] text-[#22252E] font-[400] font-satoshi leading-[28px]">
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
        <button 
          id="omniplex-slider-prev-mobile"
          className={`focus:outline-none cursor-pointer ${Math.ceil(activeIndex) === 0 ? 'opacity-30' : ''}`} 
          onClick={handlePrev}
          disabled={Math.ceil(activeIndex) === 0}
        >
          <Image
            src="/assets/arrow.svg"
            alt="Previous"
            height={20}
            width={19}
            className="transform rotate-180"
          />
        </button>
        <div className="flex gap-2 items-center font-[700]">
          {Math.ceil(activeIndex) + 1}
          <div className="h-0.5 w-8 bg-[#D9D9D9]" /> <div className="text-black/30">{slides.length}</div>
        </div>
        <button 
          id="omniplex-slider-next-mobile"
          className={`focus:outline-none cursor-pointer ${Math.ceil(activeIndex) >= slides.length - 1 ? 'opacity-30' : ''}`} 
          onClick={handleNext}
          disabled={Math.ceil(activeIndex) >= slides.length - 1}
        >
          <Image
            src="/assets/arrow.svg"
            alt="Next"
            height={20}
            width={19}
          />
        </button>
      </div>
    </div>
  );
}
