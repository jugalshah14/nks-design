"use client";
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
    {
        src: '/assets/amenities-slides-0.png'
    },
    {
        src: '/assets/amenities-slides-1.png'
    },
    {
        src: '/assets/amenities-slides-2.png'
    },
    {
        src: '/assets/amenities-slides-3.png'
    },
    {
        src: '/assets/amenities-slides-4.png'
    },
];

const settings = {
    className: "amenities-swiper !overflow-visible center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 4,
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
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 425,
            settings: {
                centerMode: true,
                slidesToShow: 1,
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
                        <h2 className="text-left project-overview-title text-[48px]">
                            <span className="font-[700] text-[112px] ">65+</span> World-class Amenities
                        </h2>
                        <div className="relative right-[-90px] z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding rounded-md flex items-center justify-around mt-9 px-1 py-5">
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
                                    <div key={i} className='mx-2 !w-[100%] !overflow-hidden'>
                                        <div className='relative !w-[100%] h-[370px]'>
                                            <Image src={slide.src} alt="slide-0" fill className='object-cover' />
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
