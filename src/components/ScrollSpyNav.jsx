'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link as ScrollLink } from 'react-scroll';

export default function ScrollSpyNav() {
    const [swiperRef, setSwiperRef] = useState();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className="max-md:w-[100%] max-md:overflow-hidden sticky z-999 top-0 bg-white flex justify-center gap-10 space-x-8 border-t border-b border-[#22252e19] py-6 pb-6 md:py-10 md:pb-12">
            <Swiper
                onSwiper={(swiper) => {
                    setSwiperRef(swiper);
                }}
                spaceBetween={5}
                pagination={{
                    enabled: false,
                    clickable: true,
                }}
                modules={[Pagination]}
                className="scroll-spy"
                onRealIndexChange={handleSlideChange}
            >
                <SwiperSlide className='!w-fit !flex items-center justify-center'>
                    <ScrollLink
                        activeClass="spy-link-active"
                        to="section-Amenities"
                        spy={true}
                        className="default-theme-text-color-1"
                        smooth={true}
                        offset={-200}
                        duration={500}
                    >
                        <div className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-[Satoshi] font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0">
                            Amenities
                            <div className="hidden bottom-line absolute bottom-0 w-[38px] h-1 bg-[#4f70af]"></div>
                        </div>
                    </ScrollLink>
                </SwiperSlide>
                <SwiperSlide className='!w-fit px-5 !flex items-center justify-center'><Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" /></SwiperSlide>
                <SwiperSlide className='!w-fit !flex items-center justify-center'>
                    <ScrollLink
                        activeClass="spy-link-active"
                        to="section-Plans"
                        spy={true}
                        className="default-theme-text-color-1"
                        smooth={true}
                        offset={-120}
                        duration={500}
                    >

                        <div className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-[Satoshi] font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0">
                            Project Plans
                            <div className="hidden bottom-line absolute bottom-0 w-[38px] h-1 bg-[#4f70af]"></div>
                        </div>
                    </ScrollLink>
                </SwiperSlide>
                <SwiperSlide className='!w-fit px-5 !flex items-center justify-center'><Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" /></SwiperSlide>
                <SwiperSlide className='!w-fit !flex items-center justify-center'>
                    <ScrollLink
                        activeClass="spy-link-active"
                        to="section-Ganga"
                        spy={true}
                        className="default-theme-text-color-1"
                        smooth={true}
                        offset={-120}
                        duration={500}
                    >

                        <div className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-[Satoshi] font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0">
                            Ganga
                            <div className="hidden bottom-line absolute bottom-0 w-[38px] h-1 bg-[#4f70af]"></div>
                        </div>
                    </ScrollLink>
                </SwiperSlide>
                <SwiperSlide className='!w-fit px-5 !flex items-center justify-center'><Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" /></SwiperSlide>
                <SwiperSlide className='!w-fit !flex items-center justify-center'>
                    <ScrollLink
                        activeClass="spy-link-active"
                        to="section-WhySerampore"
                        spy={true}
                        className="default-theme-text-color-1"
                        smooth={true}
                        offset={-120}
                        duration={500}
                    >
                        <div className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-[Satoshi] font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0">
                            Why Serampore?
                            <div className="hidden bottom-line absolute bottom-0 w-[38px] h-1 bg-[#4f70af]"></div>
                        </div>
                    </ScrollLink>
                </SwiperSlide>
            </Swiper>
        </div>
        // <div className="max-md:w-[100vw] max-md:overflow-hidden sticky z-999 top-0 bg-white flex justify-center gap-10 space-x-8 border-t border-b border-[#22252e19] py-6 pb-6 md:py-10 md:pb-12">
        //     <button className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-[Satoshi] font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e] relative m-0">
        //         Amenities
        //         <div className="hidden bottom-line absolute bottom-[-16px] w-[38px] h-1 bg-[#4f70af]"></div>
        //     </button>
        //     <Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" />

        //     <button className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-[Satoshi] font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0">Project Plans</button>
        //     <Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" />

        //     <button className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-[Satoshi] font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0">Ganga</button>
        //     <Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" />

        //     <button className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-[Satoshi] font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0">Why Serampore?</button>
        // </div>
    )
}
