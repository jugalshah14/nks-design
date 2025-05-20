"use client";
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function AmenitiesSwiper() {
    const [swiperRef, setSwiperRef] = useState();

    const handleNext = () => {
        if (!swiperRef) return;
        swiperRef.slideNext();
    }

    const handlePrev = () => {
        if (!swiperRef) return;
        swiperRef.slidePrev();
    }

    return (
        <div className='relative max-md:-top-15'>
            <div className="container max-w-7xl mx-auto relative md:mb-16">
                <div className="grid grid-cols-4 gap-10">
                    <div className="hidden md:block">
                        <h2 className="text-left project-overview-title text-[48px]">
                            <span className="font-[700] text-[112px] ">65+</span> World-class Amenities
                        </h2>
                        <div className="relative right-[-90px] z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding rounded-md flex items-center justify-around mt-9 px-1 py-5">
                            <div className="h-full flex items-center justify-center">
                                <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="invert-75 transform rotate-180" />
                                </button>
                            </div>
                            <div className="flex gap-2 items-center">1 <div className="h-0.5 w-8 bg-[#D9D9D9]" /> 3</div>
                            <div className="h-full flex items-center justify-center">
                                <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-3">
                        <div>
                            <Swiper
                                onSwiper={(swiper) => {
                                    setSwiperRef(swiper);
                                }}
                                slidesPerView={1.8}
                                spaceBetween={10}
                                breakpoints={{
                                    556: {
                                        slidesPerView: 2.4,
                                        spaceBetween: 30,
                                    },
                                    768: {
                                        slidesPerView: 4.4,
                                        spaceBetween: 30,
                                    },
                                }}
                                centeredSlides={true}
                                pagination={{
                                    enabled: false,
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='relative w-[200px] h-[370px]'>
                                        <Image src="/assets/amenities-slides-0.png" alt="slide-0" fill className='object-cover' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative w-[200px] h-[370px]'>
                                        <Image src="/assets/amenities-slides-1.png" alt="slide-1" fill className='object-cover' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative w-[200px] h-[370px]'>
                                        <Image src="/assets/amenities-slides-2.png" alt="slide-2" fill className='object-cover' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative w-[200px] h-[370px]'>
                                        <Image src="/assets/amenities-slides-3.png" alt="slide-3" fill className='object-cover' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative w-[200px] h-[370px]'>
                                        <Image src="/assets/amenities-slides-4.png" alt="slide-4" fill className='object-cover' />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="flex md:hidden relative -top-3 z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding items-center justify-around px-1 py-5">
                            <div className="h-full flex items-center justify-center">
                                <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="transform rotate-180" />
                                </button>
                            </div>
                            <div className="flex gap-2 items-center">1 <div className="h-0.5 w-8 bg-[#D9D9D9]" /> 3</div>
                            <div className="h-full flex items-center justify-center">
                                <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
