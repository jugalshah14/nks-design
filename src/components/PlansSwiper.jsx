'use client';
import React from 'react'
import Image from 'next/image';
import { useRef, useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { AnimatedSection } from "./animations";

const data = [
    {
        src: '/assets/plans_image_1.jpg',
        title: 'Sangam Signature',
        towers: '1, 2, 3, 9, 10, 11',
        carpetArea: '887 - 1039 sq.ft.',
        bhkTypes: '2 , 3',
        price: '****',
    },
    {
        src: '/assets/plans_image_2.jpg',
        title: 'Sangam Suites',
        towers: '4, 12',
        carpetArea: '1400 - 2085 sq. ft.',
        bhkTypes: '3 , 4',
        price: '****',
    },
    {
        src: '/assets/plans_image_3.jpg',
        title: 'Sangam Serenity',
        towers: '5, 6, 7, 13, 14, 15, 16',
        carpetArea: '567 - 1039 sq. ft.',
        bhkTypes: '1 , 2 , 3',
        price: '****',
    }
];


const settings = {
    className: "plans-swiper center",
    infinite: true,
    centerPadding: "30px",
    centerMode: true,
    slidesToShow: 1.01,
    speed: 600,
    dots: false,
    arrows: false,
    initialSlide: 0,
}

export default function PlansSwiper() {
    const [activeIndex, setActiveIndex] = useState(0);
    let swiperRef = useRef(null);

    const handleNext = () => {
        if (!swiperRef) return;
        swiperRef.slickNext();
    }

    const handlePrev = () => {
        if (!swiperRef) return;
        swiperRef.slickPrev();
    }

  return (
    <AnimatedSection className="pt-10">
      <Slider
        ref={(slider) => {
          swiperRef = slider;
        }}
        {...settings}
        afterChange={(current) => setActiveIndex(current)}
      >
        {data.map((slide, i) => (
          <div key={i} className="relative w-[100%] md:w-[100%] mx-auto">
            <div className={`relative h-[240px] md:h-[520px]`}>
              <div className="plans_slider_backdrop z-1 h-[100%] w-[100%] absolute top-0 left-0" />
              <Image
                src={slide.src}
                alt="slide-0"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[95%] md:w-[60%] top-[-60px] left-1/2 -translate-x-1/2 z-1 bg-[#010b22] ">
              <div className="flex max-md:flex-col p-5 md:p-8 gap-4 md:gap-20 !pb-0">
                <div>
                  <h3 className="text-gradient-1 md:w-[60%] text-[24px] md:text-[40px] font-satoshi font-[400] leading-7 md:leading-[48px] text-white/40 md:mb-6">
                    {slide.title}
                  </h3>
                </div>
                <div className="">
                  <div className="grid grid-cols-2 gap-10 mb-8">
                    <div>
                      <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                        Tower
                      </p>
                      <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                        {slide.towers}
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                        BHK Type
                      </p>
                      <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                        {slide.bhkTypes}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-10 md:mb-8">
                    <div className="order-2 md:order-1">
                      <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                        Carpet Area
                      </p>
                      <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                        {slide.carpetArea}
                      </p>
                    </div>

                    <div className="order-1 md:order-2">
                      <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                        Price
                      </p>
                      <div className="flex items-center">
                        <p className="hidden md:inline text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white shadow-lg mr-2 blur-[6.5px]">
                          {slide.price}
                        </p>
                        <a
                          href="#"
                          className="text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] underline"
                        >
                          Know price
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="block md:hidden border-[#D9D9D9] opacity-10" />
                <a className="flex md:hidden items-center gap-2 text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78]">
                  View Project
                  <Image
                    src="/assets/icons/arrowlong.svg"
                    alt="1BHK"
                    width={40}
                    height={3}
                  />
                </a>
              </div>
              <a className="hidden cursor-pointer md:flex items-center w-full gap-2 group/discuss-btn relative text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] mb-4 p-5" href='/contact-us'>
                <div className="absolute z-0 w-0 left-0 top-0 h-full bg-[#144D78] group-hover/discuss-btn:w-full transition-all duration-700"></div>
                <div className="w-full flex gap-4 items-center relative z-1 group-hover/discuss-btn:text-white transition-all duration-300">
                  Let's Discuss Your Requirements
                  <svg
                    width="60"
                    height="20"
                    viewBox="0 0 41 8"
                    className="transition-colors duration-300 fill-[#144D78] group-hover/discuss-btn:fill-white "
                  >
                    <path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        ))}
      </Slider>
      <div className="relative bottom-0 flex justify-end">
        <div className="w-[100%] md:w-[360px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around px-1 py-5">
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
                className="invert-100 transform rotate-180"
              />
            </button>
          </div>
          <div className="flex gap-2 items-center text-[#D9D9D9]">
            {activeIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" />{" "}
            {data.length}
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
              </AnimatedSection>
    )
}
