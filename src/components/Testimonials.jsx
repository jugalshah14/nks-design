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
        src: '/assets/user1.png',
        name: 'Raman Singh',
        position: 'Owner of flat in Serenity',
        description: 'As being resident of New Kolkata, I recommend this place as nice place to live.'
    },
    {
        src: '/assets/user1.png',
        name: 'Raman Singh',
        position: 'Owner of flat in Serenity',
        description: 'As being resident of New Kolkata, I recommend this place as nice place to live.'
    },
    {
        src: '/assets/user1.png',
        name: 'Raman Singh',
        position: 'Owner of flat in Serenity',
        description: 'As being resident of New Kolkata, I recommend this place as nice place to live.'
    },
    {
        src: '/assets/user1.png',
        name: 'Raman Singh',
        position: 'Owner of flat in Serenity',
        description: 'As being resident of New Kolkata, I recommend this place as nice place to live.'
    },
]

export default function Testimonials() {
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
        <div className="relative my-12">
            <Swiper
                onSwiper={(swiper) => {
                    setSwiperRef(swiper);
                }}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={0}
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
                        <div key={index} className='relative items-start pt-15'>
                            <div className='absolute top-10 left-0 h-[241px] w-[186px] overflow-hidden'>
                                <Image src={"/assets/icons/qt.svg"} alt="Quote" fill className='object-cover' />
                            </div>

                            <div className="flex items-start ml-32 relative z-10">
                                <div className='relative min-h-[84px] min-w-[84px] overflow-hidden rounded-full mr-6'>
                                    <Image src={slide.src} alt={slide.name} fill className='object-cover' />
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-satoshi font-bold leading-[33px] text-[#22252e] mb-1">{slide.name}</h3>
                                    <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e99] mb-6">{slide.position}</p>
                                    <p className="text-[40px] font-satoshi font-normal leading-[48px] text-[#22252e] max-w-[80%]">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="relative transform bg-white flex gap-10 items-center justify-end mt-9 px-1 py-5">
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
    )
}
