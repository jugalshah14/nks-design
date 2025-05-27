"use client";
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
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
    image: "/assets/goal4.jpg",
    desc: "Immerse yourself in the tranquility of the lush landscape garden",
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
                centerMode: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                slidesToShow: 1.4,
            }
        },
        {
            breakpoint: 425,
            settings: {
                centerMode: false,
                slidesToShow: 1.4,
            }
        },
    ]
}
export default function AmenitiesSwiper() {
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
        <div className='relative max-md:-top-15 overflow-hidden'>
            <div className="container mx-auto relative md:mb-16">
                <div className="grid grid-cols-4 gap-0">
                    <div className="hidden md:block bg-white z-2 after-box pr-10 md:col-span-2 lg:col-span-1">
                        <h2 className="px-[60px] pt-[34px] md:px-[0px] md:pt-[0px] text-[28px] md:text-[40px] font-satoshi font-normal leading-[32px] md:leading-[54px] text-[#22252e] mb-1 text-center md:text-left">
                          Primary goals we were having
                        </h2>
                        <div className="relative right-[-90px] z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding rounded-md flex items-center justify-around mt-9 px-1 py-5">
                            <div className="h-full flex items-center justify-center">
                                <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="transform rotate-180" />
                                </button>
                            </div>
                            <div className="flex gap-2 items-center">{activeIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" /> 4</div>
                            <div className="h-full flex items-center justify-center">
                                <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2 lg:col-span-3">
                        <div>
                            <Slider
                                ref={slider => {
                                    swiperRef = slider;
                                }}
                                {...settings}
                                afterChange={(current) => setActiveIndex(current)}
                            >
                                {data.map((slide, i) => (
                                    <div key={i} className='mx-2 !w-[100%] !overflow-hidden md:border-l md:border-dashed md:border-gray-300 bg-white'>
                                        <div className='top-[60px] md:top-[0px] relative !w-[100%] h-[470px] px-[16px] md:px-[28px]  gap-[15px] md:gap-[24px] flex flex-col transition-transform duration-300 transform hover:scale-95'>
                                          <h2 className="text-[#22252E] text-[20px] md:text-[24px] font-[700]">{slide.title}</h2>
                                          <Image src={slide.image} width={240} height={250} alt="img" className='w-full min-h-[250px] max-h-auto' />
                                          <p className="text-[16px] text-[#22252E] font-[400]">{slide.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden relative -top-3 z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding items-center justify-around px-1 py-5">
                <div className="h-full flex items-center justify-center">
                    <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                        <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="transform rotate-180" />
                    </button>
                </div>
                <div className="flex gap-2 items-center">{activeIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" /> 5</div>
                <div className="h-full flex items-center justify-center">
                    <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                        <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} className="" />
                    </button>
                </div>
            </div>
        </div>

    )
}
