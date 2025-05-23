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
        src: '/assets/project1.png',
        icon1: '/assets/project-icon1.svg',
        icon2: '/assets/project-icon2.svg',
        title: 'The 42 Kolkata',
        description: 'Enjoy the beauty of the lotus pond pavilion and unwind with a calming.'
    },
    {
        src: '/assets/project2.jpg',
        icon1: '/assets/project-icon1.svg',
        icon2: '/assets/project-icon2.svg',
        title: 'Newkolkata Triveni',
        description: 'Enjoy the beauty of the lotus pond pavilion and unwind with a calming.'
    },
    {
        src: '/assets/project3.jpg',
        icon1: '/assets/project-icon1.svg',
        icon2: '/assets/project-icon2.svg',
        title: 'The 42 Kolkata',
        description: 'Enjoy the beauty of the lotus pond pavilion and unwind with a calming.'
    },
    {
        src: '/assets/project3.jpg',
        icon1: '/assets/project-icon1.svg',
        icon2: '/assets/project-icon2.svg',
        title: 'The 42 Kolkata',
        description: 'Enjoy the beauty of the lotus pond pavilion and unwind with a calming.'
    }
]

export default function ProjectSwiper() {
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
        <div className='md:pt-10 mb-10 mx-[16px] md:mx-[0px]'>
            <Swiper
                onSwiper={(swiper) => {
                    setSwiperRef(swiper);
                }}
                slidesPerView={1.1}
                spaceBetween={10}
                loop={false}
                
                breakpoints={{
                    768: {
                        slidesPerView: 1.9,
                        spaceBetween: 10,
                        slidesOffsetBefore: 120,
                        slidesOffsetAfter: 60,
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
                        <div className='flex md:flex-row flex-col'>
                           <div className='w-full md:w-[360px] h-[240px] md:h-[468px] relative'>
                            <Image 
                                src={slide.src} 
                                alt="slide-0" 
                                fill 
                                className="object-cover" 
                            />
                            </div>
                            <div className='w-full md:w-[380px] flex flex-col bg-[#0C162B] md:mt-[40px]'>
                                <div className='p-[36px] relative'>
                                    <div className='absolute w-full top-[-65px] md:top-0 md:left-[-60px] flex items-start justify-start mb-[28px] left-0 bg-black/70 md:bg-transparent backdrop-filter backdrop-blur-[5px] bg-opacity-80'>
                                        <div className='w-full projectslide-title py-[20px] px-[27px] transforming-text font-[400] text-[40px] leading-[48px] whitespace-nowrap'>
                                            {slide.title}
                                        </div>        
                                    </div>

                                    <div className='pb-[28px] md:pt-[120px]'>
                                        <p className="text-[14px] md:text-[14px] font-[Satoshi] font-[400] leading-5 md:leading-[20px] text-white/50 mb-1">About Project</p>
                                        <p className="text-[16px] md:text-[16px] font-[Satoshi] font-[400] leading-6 md:leading-[20px] text-white">{slide.description}</p>
                                    </div>
                                    <div className='flex flex-row gap-4 pb-[24px]'>
                                        <div>
                                            <Image src={slide.icon1} alt="slide-0" width={28} height={28}/>
                                        </div>
                                        <div>
                                            <p className="text-[14px] md:text-[14px] font-[Satoshi] font-[400] leading-5 md:leading-[20px] text-white/50 mb-1">Project Category</p>
                                            <p className="text-[16px] md:text-[16px] font-[Satoshi] font-[400] leading-6 md:leading-[20px] text-white">Luxurious Flats</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-4'>
                                        <div>
                                            <Image src={slide.icon2} alt="slide-0" width={28} height={28}/>
                                        </div>
                                        <div>
                                            <p className="text-[14px] md:text-[14px] font-[Satoshi] font-[400] leading-5 md:leading-[20px] text-white/50 mb-1">Location</p>
                                            <p className="text-[16px] md:text-[16px] font-[Satoshi] font-[400] leading-6 md:leading-[20px] text-white">Serampore, Kolkata</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='w-full ietms-center justify-center flex'>
                <div className="w-full relative transform bg-white flex gap-10 items-center justify-center mt-9 px-1 py-5 max-w-[366px] shadow-[0px_4px_170px_rgba(0,0,0,0.25)]">
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
        </div>
    )
};