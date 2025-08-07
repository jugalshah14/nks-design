"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    title: "Quick bites after a movie night",
    image: "/assets/n1.png",
    desc: "Space for a sprawling food court on the 5th ﬂoor.",
    imageType: "Stock Image"
  },
  {
    title: "A rich gourmet experience awaits",
    image: "/assets/n2.png",
    desc: "Triveni's 4th ﬂoor is open to restaurants.",
    imageType: "Stock Image"
  },
  {
    title: "Bringing convenience to everyone's doorstep",
    image: "/assets/n3.png",
    desc: "A hypermarket on the lower ground ﬂoor to fulﬁl daily needs.",
    imageType: "Stock Image"
  },
  {
    title: "Unlimited fun for kids and adults alike",
    image: "/assets/n4.png",
    desc: "World-class entertainment zone.",
    imageType: "Stock Image"
  },
  {
    title: "Big screen magic awaits film buffs",
    image: "/assets/n5.png",
    desc: "4-screen multiplex on the 4th and 5th ﬂoor.",
    imageType: "Stock Image"
  },
  {
    title: "Setting a style statement",
    image: "/assets/n6.png",
    desc: "Open to apparel and lifestyle brands.",
    imageType: "Stock Image"
  },
  {
    title: "Revolutionising Healthcare in Serampore",
    image: "/assets/n7.png",
    desc: "Coming soon!",
    imageType: "Stock Image"
  },
  {
    title: "One-stop destination for every celebration",
    image: "/assets/n8.png",
    desc: "Space for banquet halls on the 7th ﬂoor.",
    imageType: "Stock Image"
  },
  {
    title: "Transforming hospitality in Hooghly district",
    image: "/assets/n9.png",
    desc: "Room for a 90-key hotel on the 8th and 9th ﬂoor.",
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
export default function NewTriventSliders() {
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
                      <div className="relative">
                        {/* Info Icon */}
                        <div className="absolute top-3 right-3 cursor-pointer flex flex-row items-center rounded-xl bg-black/20 z-10 group">
                          <div className="overflow-hidden">
                            <div className="text-[12px] text-white whitespace-nowrap opacity-0 max-w-0 group-hover:px-2 group-hover:opacity-100 group-hover:max-w-[100px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                              {slide.imageType}
                            </div>
                          </div>
                          <Image src="/assets/icons/info.svg" alt="info" width={20} height={20} className="" />
                        </div>
                        
                        <Image
                          src={slide.image}
                          width={240}
                          height={240}
                          alt="img"
                          className="w-full min-h-[240px] max-h-[240px] object-cover"
                        />
                      </div>
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
