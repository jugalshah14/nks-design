'use client';
import React from 'react'
import Image from 'next/image';
import { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        src: '/assets/project_overview_image_1.png',
        title: 'Aerial view',
    },
    {
        src: '/assets/project_overview_image_2.png',
        title: 'Front view',
    },
];

const settings = {
    className: "project-overview-swiper center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    speed: 600,
    dots: false,
    arrows: false,
    initialSlide: 0,
};

export default function ProjectViewSlides() {
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
        <div className='relative'>
            <div className="absolute -top-[35px] flex justify-center z-9 w-[100%]">
                <span className="transition-all text-[52px] font-[IvyMode] font-bold leading-[66px] text-[#de7f4a]">{activeIndex + 1}</span>
                <span className="transition-all text-[52px] font-[IvyMode] font-bold leading-[66px] text-[#de7f4a]">/</span>
                <span className="transition-all text-[52px] font-[IvyMode] font-bold leading-[66px] text-[#de7f4a]">{data.length}</span>
            </div>
            <Slider
                ref={slider => {
                    swiperRef = slider;
                }}
                {...settings}
                afterChange={(current) => setActiveIndex(current)}
            >
                {data.map((slide, index) => (
                    <div key={index} className='relative top-[-50px]'>
                        <div className="flex justify-center relative h-[280px] md:h-[70vh]">
                            <Image
                                src={slide.src}
                                alt={slide.title}
                                className="object-cover"
                                fill
                            />
                            <div className="absolute inset-0 rounded-lg">
                                <h3 className="max-md:w-[100%] max-md:text-center bottom-4 absolute md:bottom-16 md:left-11 text-[28px] md:text-[48px] font-[Satoshi] font-[400] leading-8 md:leading-[65px] text-white">
                                    {slide.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="absolute -bottom-10 md:bottom-[-0px] left-1/2 transform -translate-x-1/2 bg-white custom-box-shadow rounded-md flex items-center justify-between w-[121px] md:w-[260px] h-[48px] md:h-[96px] z-1">
                <div className="w-1/2 h-full flex items-center justify-center">
                    <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                        <div className='h-[20px] w-[20px] md:h-[35px] md:w-[36px] relative'>
                            <Image src="/assets/icons/arrow-right.svg" alt="Previous" fill className="object-cover transform rotate-180" />
                        </div>
                    </button>
                </div>
                <div className="h-12 w-px bg-[#20202019]"></div>
                <div className="w-1/2 h-full flex items-center justify-center">
                    <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                        <div className='h-[20px] w-[20px] md:h-[35px] md:w-[36px] relative'>
                            <Image src="/assets/icons/arrow-right.svg" alt="Next" fill className="object-cover" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
