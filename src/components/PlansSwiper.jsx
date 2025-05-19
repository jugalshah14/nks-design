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
        src: '/assets/plans_image_1.jpg',
        title: 'Sangam Serenity',
        towers: '5,6,7,13,14,15,16',
        carpetArea: '314 - 645 sq. ft.',
        bhkTypes: '1,2,3',
        price: '****',
    },
    {
        src: '/assets/plans_image_2.jpg',
        title: 'Sangam Serenity',
        towers: '5,6,7,13,14,15,16',
        carpetArea: '314 - 645 sq. ft.',
        bhkTypes: '1,2,3',
        price: '****',
    },
    {
        src: '/assets/plans_image_3.jpg',
        title: 'Sangam Serenity',
        towers: '5,6,7,13,14,15,16',
        carpetArea: '314 - 645 sq. ft.',
        bhkTypes: '1,2,3',
        price: '****',
    }
]

export default function PlansSwiper() {
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
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
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
                        <div className='relative w-[80%] mx-auto'>
                            <div className={`relative h-[520px]`}>
                                <div className='plans_slider_backdrop z-1 h-[100%] w-[100%] absolute top-0 left-0' />
                                <Image src={slide.src} alt="slide-0" fill className='object-cover' />
                            </div>
                            <div className="relative w-[80%] top-[-60px] right-[-14%] z-1 gap-20 flex bg-[#010b22] p-8">
                                <div>
                                    <h3 className="text-gradient-1 w-[60%] text-[40px] font-satoshi font-normal leading-[48px] text-white/40 mb-6">
                                        {slide.title}
                                    </h3>
                                    <a className="flex items-center gap-2 text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] mb-4 mt-20">
                                        Let's Discuss Your Requirements
                                        <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                                    </a>
                                </div>
                                <div className=''>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-8">
                                        <div>
                                            <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white/50 mb-1">Tower</p>
                                            <p className="text-[24px] font-satoshi font-normal leading-[33px] text-white">{slide.towers}</p>
                                        </div>
                                        <div>
                                            <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white/50 mb-1">BHK Type</p>
                                            <p className="text-[24px] font-satoshi font-normal leading-[33px] text-white">{slide.bhkTypes}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-8">
                                        <div>
                                            <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white/50 mb-1">Carpet Area</p>
                                            <p className="text-[24px] font-satoshi font-normal leading-[33px] text-white">{slide.carpetArea}</p>
                                        </div>

                                        <div>
                                            <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white/50 mb-1">Price</p>
                                            <div className="flex items-center">
                                                <p className="text-[24px] font-satoshi font-normal leading-[28px] text-white shadow-lg mr-2 blur-[6.5px]">{slide.price}</p>
                                                <a href="#" className="text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] underline">
                                                    Know price
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='relative bottom-0 flex justify-end'>
                <div className="w-[360px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around px-1 py-5">
                    <div className="h-full flex items-center justify-center">
                        <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                            <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="invert-100 transform rotate-180" />
                        </button>
                    </div>
                    <div className="flex gap-2 items-center text-[#D9D9D9]">1 <div className="h-0.5 w-8 bg-[#D9D9D9]" /> 3</div>
                    <div className="h-full flex items-center justify-center">
                        <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                            <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} className="invert-100" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
