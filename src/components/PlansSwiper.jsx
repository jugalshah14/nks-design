'use client';
import React from 'react'
import Image from 'next/image';
import { useRef, useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

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
];


const settings = {
    className: "plans-swiper center",
    infinite: true,
    centerPadding: "30px",
    centerMode: true,
    slidesToShow: 1.01,
    speed: 600,
    dots: false,
    arrows: false,
    initialSlide: 0,
}

export default function PlansSwiper() {
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
        <div className='pt-10'>
            <Slider
                ref={slider => {
                    swiperRef = slider;
                }}
                {...settings}
                afterChange={(current) => setActiveIndex(current)}
            >
                {data.map((slide, i) => (
                    <div key={i} className='relative w-[100%] md:w-[100%] mx-auto'>
                        <div className={`relative h-[240px] md:h-[520px]`}>
                            <div className='plans_slider_backdrop z-1 h-[100%] w-[100%] absolute top-0 left-0' />
                            <Image src={slide.src} alt="slide-0" fill className='object-cover' />
                        </div>
                        <div className="relative w-[95%] md:w-[80%] top-[-60px] -right-[5%] md:right-[-14%] z-1 gap-4 md:gap-20 flex max-md:flex-col bg-[#010b22] p-5 md:p-8">
                            <div>
                                <h3 className="text-gradient-1 md:w-[60%] text-[24px] md:text-[40px] font-[Satoshi] font-[400] leading-7 md:leading-[48px] text-white/40 md:mb-6">
                                    {slide.title}
                                </h3>
                                <Link href={'#'} className="hidden md:flex items-center gap-2 text-[14px] font-[Satoshi] font-bold leading-[19px] text-[#134c78] mb-4 mt-20">
                                    Let's Discuss Your Requirements
                                    <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                                </Link>
                            </div>
                            <div className=''>
                                <div className="grid grid-cols-2 gap-20 mb-8">
                                    <div>
                                        <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Tower</p>
                                        <p className="text-[20px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">{slide.towers}</p>
                                    </div>
                                    <div>
                                        <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">BHK Type</p>
                                        <p className="text-[20px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">{slide.bhkTypes}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-20 md:mb-8">
                                    <div className='order-2 md:order-1'>
                                        <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Carpet Area</p>
                                        <p className="text-[20px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">{slide.carpetArea}</p>
                                    </div>

                                    <div className='order-1 md:order-2'>
                                        <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Price</p>
                                        <div className="flex items-center">
                                            <p className="hidden md:inline text-[20px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white shadow-lg mr-2 blur-[6.5px]">{slide.price}</p>
                                            <Link href="#" className="text-[14px] font-[Satoshi] font-bold leading-[19px] text-[#134c78] underline">
                                                Know price
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='block md:hidden border-[#D9D9D9] opacity-10' />
                            <Link href={'#'} className="flex md:hidden items-center gap-2 text-[14px] font-[Satoshi] font-bold leading-[19px] text-[#134c78]">
                                View Project
                                <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='relative bottom-0 flex justify-end'>
                <div className="w-[100%] md:w-[360px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around px-1 py-5">
                    <div className="h-full flex items-center justify-center">
                        <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                            <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="invert-100 transform rotate-180" />
                        </button>
                    </div>
                    <div className="flex gap-2 items-center text-[#D9D9D9]">{activeIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {data.length}</div>
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
