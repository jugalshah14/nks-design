"use client";
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function MasterplanSwiper() {
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
        <div className='relative'>
            <div className="container max-w-7xl mx-auto relative mb-20">
                <div className="grid grid-cols-4 gap-10">
                    <div className="">
                        <h2 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-1">
                            Primary <br/>goals we <br/>were having
                        </h2>
                        <div className="relative right-[-90px] z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding rounded-md flex items-center justify-around mt-9 px-1 py-5">
                            <div className="h-full flex items-center justify-center">
                                <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="invert-75 transform rotate-180" />
                                </button>
                            </div>
                            <div className="flex gap-2 items-center">1 <div className="h-0.5 w-8 bg-[#D9D9D9]" /> 4</div>
                            <div className="h-full flex items-center justify-center">
                                <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div>
                            <Swiper
                                onSwiper={(swiper) => {
                                    setSwiperRef(swiper);
                                }}
                                slidesPerView={4.4}
                                centeredSlides={false}
                                spaceBetween={30}
                                pagination={{
                                    enabled: false,
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='relative gap-6 flex flex-col p-7 min-w-[300px] md:border-l md:border-dashed md:border-gray-300'>
                                        <h2 className="text-[#22252E] text-[24px] font-[700]">Concept for entrance Plaza</h2>
                                        <div className="">
                                            <Image src="/assets/goal1.png" width={240} height={240} alt="img"/>
                                        </div>
                                        <p className="text-[16px] text-[#22252E] font-[400]">
                                            Immerse yourself in the tranquility of the lush landscape garden
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative gap-6 flex flex-col p-7 min-w-[300px] md:border-l md:border-dashed md:border-gray-300'>
                                        <h2 className="text-[#22252E] text-[24px] font-[700]">Concept for entrance lobby</h2>
                                        <div className="">
                                            <Image src="/assets/goal2.png" width={240} height={240} alt="img"/>
                                        </div>
                                        <p className="text-[16px] text-[#22252E] font-[400]">
                                            Immerse yourself in the tranquility of the lush landscape garden
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative gap-6 flex flex-col p-7 min-w-[300px] md:border-l md:border-dashed md:border-gray-300'>
                                        <h2 className="text-[#22252E] text-[24px] font-[700]">Concept for the masterplan</h2>
                                        <div className="">
                                            <Image src="/assets/goal3.png" width={240} height={240} alt="img"/>
                                        </div>
                                        <p className="text-[16px] text-[#22252E] font-[400]">
                                            Immerse yourself in the tranquility of the lush landscape garden
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative gap-6 flex flex-col p-7 min-w-[300px] md:border-l md:border-dashed md:border-gray-300'>
                                        <h2 className="text-[#22252E] text-[24px] font-[700]">Concept for private garden flats</h2>
                                        <div className="">
                                            <Image src="/assets/goal2.png" width={240} height={240} alt="img"/>
                                        </div>
                                        <p className="text-[16px] text-[#22252E] font-[400]">
                                            Immerse yourself in the tranquility of the lush landscape garden
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
