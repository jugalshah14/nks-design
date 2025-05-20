'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useRef, useState } from 'react'

const data = [
    {
        src: '/assets/riverside1.png',
        title: 'Offering residents a visual feast that is both inspiring and soothing.',
    },
    {
        src: '/assets/riverside2.png',
        title: 'Proximity to water bodies can lead to cooler air and better air quality, as the water absorbs and dissipates heat.',
    },
    {
        src: '/assets/riverside2.png',
        title: 'Properties located near rivers often have higher market values due to their scenic appeal and recreational opportunities.',
    }
]

export default function RiversideLivingSwiper() {
    const [swiperRef, setSwiperRef] = useState();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
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
        <div className='md:pt-10'>
            <Swiper
                onSwiper={(swiper) => {
                    setSwiperRef(swiper);
                }}
                slidesPerView={1.3}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 2.6,
                        spaceBetween: 20,
                    },
                }}
                pagination={{
                    enabled: false,
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                onActiveIndexChange={handleSlideChange}
            >
                {data.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative flex flex-col items-center pt-15'>
                            <span className='absolute top-3 md:top-[-10px] text-[#DE804B] font-[IvyMode] font-[400] text-[58px] md:text-[90px] z-1 left-10 md:left-15'>{index + 1}</span>
                            <div className={`relative h-[195px] md:h-[300px] w-full`}>
                                <div className='plans_slider_backdrop z-1 h-[100%] w-[100%] absolute top-0 left-0' />
                                <Image src={slide.src} alt="slide-0" fill className='object-cover' />
                            </div>
                            <div className='relative h-[140px] top-[-30px] w-[90%] md:w-[80%] p-4.5 md:p-7 bg-[#FFFFFFB2] z-1 backdrop-filter backdrop-blur-[50px] bg-opacity-80 bg-clip-padding'>
                                {slide.title}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};