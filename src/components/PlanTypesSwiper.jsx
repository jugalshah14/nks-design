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
        icon: '/assets/icons/1bhk.svg',
        title: '1BHK',
        desc: 'Starts from 15.99lacs',
        link: ''
    },
    {
        icon: '/assets/icons/2bhk.svg',
        title: '2BHK',
        desc: 'Starts from 23.99lacs',
        link: ''
    },
    {
        icon: '/assets/icons/3bhk.svg',
        title: '3BHK',
        desc: 'Starts from 33.99lacs',
        link: ''
    },
    {
        icon: '/assets/icons/4bhk.svg',
        title: '4BHK',
        desc: 'Starts from 44.99lacs',
        link: ''
    },

]

export default function PlanTypesSwiper() {
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
        <div className='pt-10'>
            <Swiper
                onSwiper={(swiper) => {
                    setSwiperRef(swiper);
                }}
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
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
                onActiveIndexChange={handleSlideChange}
            >
                {data.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#fdf6f2] p-5">
                            <Image src={slide.icon} alt={slide.title} width={36} height={36} className="mb-12" />
                            <h3 className="text-[40px] font-[Satoshi] font-normal leading-[54px] text-[#22252e] mb-2">{slide.title}</h3>
                            <p className="text-[20px] font-[Satoshi] font-normal leading-[27px] text-[#22252eb2] mb-8">{slide.desc}</p>
                            <a href={slide.link} className="flex items-center gap-2 text-[16px] font-[Satoshi] font-bold leading-[22px] text-[#134c78]">
                                View
                                <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='relative mt-2 flex justify-end'>
                <div className="w-[100%] md:w-[360px] z-11 flex items-center justify-around px-1 py-5">
                    <div className="h-full flex items-center justify-center">
                        <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                            <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className=" transform rotate-180" />
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
    )
}
