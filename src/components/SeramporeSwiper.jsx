'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useRef, useState } from 'react'

const data = [
    {
        src: '/assets/collage.png',
        icon: '/assets/icons/graduation-hat.svg',
        title: 'Serampore College',
        description: '1.85km away'
    },
    {
        src: '/assets/hospital.png',
        icon: '/assets/icons/hospital-building.svg',
        title: 'Serampore Hospital',
        description: '3.1km away'
    },
    {
        src: '/assets/railwaystation.png',
        icon: '/assets/icons/shopping-bag-tag.svg',
        title: 'Serampore Railway Station',
        description: '2.5km away'
    },
    {
        src: '/assets/shelby.jpg',
        icon: '/assets/icons/hospital-building.svg',
        title: 'Shelby Hospital',
        description: '3.4km away'
    }
]

export default function SeramporeSwiper() {
    const [swiperRef, setSwiperRef] = useState();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleNext = () => {
        if (!swiperRef) return;
        swiperRef.slideNext();
    }

    const handlePrev = () => {
        if (!swiperRef) return;
        swiperRef.slidePrev();
    }

    return (
        <div className='md:pt-10 mb-10'>
            <Swiper
                onSwiper={(swiper) => {
                    setSwiperRef(swiper);
                }}
                slidesPerView={1.5}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    1023: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                    },
                    1400: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    },
                }}
                pagination={{
                    enabled: false,
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                onRealIndexChange={handleSlideChange}
            >
                {data.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative flex items-start pt-15'>
                            <div className='relative min-h-[110px] min-w-[110px] md:min-h-[160px] md:min-w-[160px] overflow-hidden z-1'>
                                <Image src={slide.src} alt="slide-0" fill className='object-cover' />
                            </div>
                            <div className={`location-slide relative top-5 -left-[100px] flex flex-col p-7 pl-30 pr-10 ${+activeIndex === index ? 'bg-[#000E2D]' : 'bg-[#F8F8F8]'}`}>
                                <Image src={slide.icon} height={48} width={48} alt="icon" className={`max-md:!h-[33px] max-md:!w-[33px] ${+activeIndex === index && 'invert-100'}`} />
                                <p className={`md:min-w-[172px] mt-2 text-[14px] md:text-[20px] ${+activeIndex === index ? 'text-[#FFFFFF]' : 'text-[#22252E]'} font-[700] leading-5 md:leading-[28px]`}>
                                    {slide.title}
                                </p>
                                <p className={`mb-1 text-[12px] md:text-[16px] ${+activeIndex === index ? 'text-[#FFFFFF]' : 'text-[#22252E]'} opacity-60 font-[400] leading-4 md:leading-[20px]`}>
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="relative transform bg-white flex gap-10 items-center justify-center mt-9 px-1 py-5">
                <div className="h-full flex items-center justify-center">
                    <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                        <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="invert-75 transform rotate-180" />
                    </button>
                </div>
                <div className="flex gap-2 items-center">{activeIndex+1} <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {data.length}</div>
                <div className="h-full flex items-center justify-center">
                    <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                        <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} className="" />
                    </button>
                </div>
            </div>
        </div>
    )
};