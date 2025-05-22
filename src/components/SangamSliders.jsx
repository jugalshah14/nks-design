"use client";
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function SangamSliders() {
    const [swiperRef, setSwiperRef] = useState();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        if (!swiperRef) return;
        swiperRef.slideNext();
    }

    const handlePrev = () => {
        if (!swiperRef) return;
        swiperRef.slidePrev();
    }

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className='relative max-md:-top-15'>
            <div className="container max-w-7xl mx-auto relative md:mb-16">

                {/* sangam part1 */}
                <div className='relative w-full pb-[60px]'>
                    <div className='absolute top-12 h-[445px] bg-[#0E1727] w-full'></div>
                    <div className='relative w-full items-center flex justify-center'>
                        <Image src="/assets/sangam-icon.png" width={100} height={100} alt="dot" />
                    </div>
                    <h2 className="relative project-overview-title text-center !text-white pt-[16px] pb-[32px]">3BHK</h2>
                    <div className='flex flex-row'>
                        <div className='w-[60%]'>
                            <div className='bg-[#111B2F] relative'>
                                <div className='flex flex-col items-center justify-between bg-white/5 w-[72px] m-1 absolute left-0'>
                                    <div className='w-full text-center text-white text-sm py-[7px] hover:bg-[#144D78] cursor-pointer'>2D</div>
                                    <div className='w-full text-center text-white text-sm py-[7px] hover:bg-[#144D78] cursor-pointer'>3D</div>
                                    <div className='w-full text-center text-white text-sm py-[7px] hover:bg-[#144D78] cursor-pointer'>Floor</div>
                                    <div className='w-full text-center text-white text-sm py-[7px] hover:bg-[#144D78] cursor-pointer'>Building</div>
                                </div>
                                <Image src="/assets/triangle-blue.png" width={65} height={65} alt="triangle" className='absolute right-0'/>
                                <div className='p-[69px] flex items-center justify-center'><Image src="/assets/3bhkk.png" width={500} height={500} alt="dot" /></div>
                                <div className="flex items-center justify-between bg-white/5 p-[18px]">
                                    <button className="pl-12 w-full text-white text-sm flex items-center gap-2 items-center justify-center">
                                    Check Dimensions <Image src="/assets/whitearrow.svg" alt="1BHK" width={40} height={3} className='text-white'/>
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">‹</div>
                                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">›</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute right-0 top-75 p-[40px] bg-[#020C22] w-[44%]'>
                            <div className='flex flex-col gap-10'>
                                <div className="grid grid-cols-2 gap-20 mb-4">
                                    <div>
                                        <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Tower</p>
                                        <p className="text-[20px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">A,B,C</p>
                                    </div>
                                    <div>
                                        <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Flat units</p>
                                        <p className="text-[20px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">234</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-20 md:mb-8">
                                    <div className='order-2 md:order-1'>
                                        <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Unit area</p>
                                        <p className="text-[20px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">56 m2  - 76 m2</p>
                                    </div>

                                    <div className='order-1 md:order-2'>
                                        <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Price</p>
                                        <div className="flex items-center">
                                            <p className="hidden md:inline text-[20px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white shadow-lg mr-2 blur-[6.5px]">1234</p>
                                            <a href="#" className="text-[14px] font-[Satoshi] font-bold leading-[19px] text-[#134c78] underline">
                                                Know price
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <button className="flex justify-between w-full group cursor-pointer bg-[#144D78] hover:bg-[#0e3a5a] transition rounded-md text-white font-medium inline-flex items-center gap-2 overflow-hidden">
                                    <div className="p-[25px] group-hover:text-orange-400 transition-colors duration-300">
                                        <span className="hidden md:inline text-left">Schedule a Visit</span>
                                    </div>
                                    <div className="bg-[#002F52] p-[30px] h-full flex items-center justify-center">
                                        <Image
                                        src="/assets/arrow.png"
                                        width={15}
                                        height={15}
                                        alt="arrow"
                                        className="transition-transform duration-300 group-hover:rotate-45"
                                        />
                                    </div>
                                </button>            
                            </div>
                        </div>
                    </div>
                </div>

                {/* sangam part2 */}
                <div className="grid grid-cols-4 gap-10">
                    <div className="hidden md:block">
                        <h2 className="text-[40px] font-satoshi font-normal leading-[54px] text-white mb-1">
                            Views from <br/> 2BHK
                        </h2>
                        <div className="relative right-[-90px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding rounded-md flex items-center justify-around mt-9 px-1 py-5">
                            <div className="h-full flex items-center justify-center text-white">
                                <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="invert-100 transform rotate-180" />
                                </button>
                            </div>
                            <div className="flex gap-2 items-center text-white">1 <div className="h-0.5 w-8 bg-[#D9D9D9] text-white" /> 3</div>
                            <div className="h-full flex items-center justify-center">
                                <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                                    <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} className="invert-100" />
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
                                loop={true}
                                breakpoints={{
                                    556: {
                                        slidesPerView: 2.4,
                                        spaceBetween: 20,
                                        loop: false
                                    },
                                    768: {
                                        slidesPerView: 3.2,
                                        spaceBetween: 20,
                                    },
                                }}
                                centeredSlides={true}
                                pagination={{
                                    enabled: false,
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                                onRealIndexChange={handleSlideChange}
                            >
                                <SwiperSlide>
                                    <div className='relative w-[565px] h-[280px]'>
                                        <Image src="/assets/sangam1.png" alt="slide-0" fill className='object-cover' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative w-[565px] h-[280px]'>
                                        <Image src="/assets/sangam2.png" alt="slide-1" fill className='object-cover' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative w-[565px] h-[280px]'>
                                        <Image src="/assets/sangam3.png" alt="slide-2" fill className='object-cover' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative w-[565px] h-[280px]'>
                                        <Image src="/assets/sangam4.jpg" alt="slide-3" fill className='object-cover' />
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
