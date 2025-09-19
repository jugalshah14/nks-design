'use client';
import React from 'react'
import Image from 'next/image';
import { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        src: '/assets/project_overview_image_1.webp',
        info: 'Actual Image',
        title: 'Aerial View'
    },
    {
        src: '/assets/project_overview_image_2.webp',
        info: 'Actual Image',
        title: 'Fountain View'
    },
    {
        src: '/assets/project_overview_image_3.webp',
        info: 'Artist impression',
        title: 'Club House'
    },
    {
        src: '/assets/project_overview_image_4.webp',
        info: 'Actual Image',
        title: 'Kids Play Area'
    },
    {
        src: '/assets/project_overview_image_5.webp',
        info: 'Actual Image',
        title: 'Private Ganga Ghat'
    },
    {
        src: '/assets/project_overview_image_6.webp',
        info: 'Actual Image',
        title: 'Podium Night View'
    },
    {
        src: '/assets/project_overview_image_7.webp',
        info: 'Actual Image',
        title: 'Podium Landscape'
    },
    {
        src: '/assets/project_overview_image_8.webp',
        info: 'Actual Image',
        title: 'View from Bedroom'
    },
];

const settings = {
    className: "project-overview-swiper center",
    infinite: false,
    centerPadding: "30px",
    slidesToShow: 1,
    speed: 600,
    dots: false,
    arrows: false,
    initialSlide: 0,
};

export default function ProjectViewSlides() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mobileTooltipIndex, setMobileTooltipIndex] = useState(null);
    let swiperRef = useRef(null);

    const handleNext = () => {
        if (!swiperRef) return;
        swiperRef.slickNext();
    }

    const handlePrev = () => {
        if (!swiperRef) return;
        swiperRef.slickPrev();
    }

    const handleInfoClick = (index) => {
        if (mobileTooltipIndex === index) {
            setMobileTooltipIndex(null);
        } else {
            setMobileTooltipIndex(index);
        }
    }

    return (
        <div className='relative'>
            {/* <div className="absolute -top-[35px] flex justify-center z-9 w-[100%]">
                <span className="transition-all text-[52px] font-cormorant font-bold leading-[66px] text-[#de7f4a]">{activeIndex + 1}</span>
                <span className="transition-all text-[52px] font-cormorant font-bold leading-[66px] text-[#de7f4a]">/</span>
                <span className="transition-all text-[52px] font-cormorant font-bold leading-[66px] text-[#de7f4a]">{data.length}</span>
            </div> */}
            <Slider
                ref={slider => {
                    swiperRef = slider;
                }}
                {...settings}
                afterChange={(current) => setActiveIndex(current)}
            >
                {data.map((slide, index) => (
                    <div key={index} className='relative md:top-[-50px] top-[-30px]'>
                        <div className="flex justify-center relative h-[280px] md:h-[700px]">
                            {/* Info Icon with Tooltip (new style) */}
                            <div className={`absolute md:top-15 top-10 right-3 cursor-pointer flex flex-row items-center rounded-xl bg-black/20 z-10 group`}>
                                <div className="overflow-hidden">
                                    <div className={`text-[12px] text-white whitespace-nowrap transition-all duration-300 ease-in-out ${
                                        // Show on hover for desktop, show on click for mobile
                                        mobileTooltipIndex === index 
                                            ? 'opacity-100 max-w-[100px] px-2 translate-x-0' 
                                            : 'md:group-hover:opacity-100 md:group-hover:max-w-[100px] md:group-hover:px-2 md:group-hover:translate-x-0 opacity-0 max-w-0'
                                    }`}>
                                        {slide.info}
                                    </div>
                                </div>
                                <button 
                                    id={`project-view-info-${index}`}
                                    onClick={() => handleInfoClick(index)}
                                    className="focus:outline-none"
                                    aria-label={`Show info for ${slide.title}`}
                                >
                                    <Image src="/assets/icons/info.svg" alt="info" width={25} height={25} className="" />
                                </button>
                            </div>
                            <div className="absolute inset-0 rounded-lg w-full h-full z-1"></div>
                            <Image
                                src={slide.src}
                                alt={slide.title}
                                className="object-fill"
                                fill
                            />
                            <div className="absolute inset-0 rounded-lg z-2" style={{
                                background: 'linear-gradient(180deg, #000000 -48%, rgba(0, 0, 0, 0) 44.08%, #0D0C0C 130.57%)'
                            }}>
                                <h3 className="max-md:w-[100%] max-md:text-center md:bottom-10 bottom-5 absolute md:left-10 text-[28px] md:text-[48px] font-satoshi font-[400] leading-8 md:leading-[65px] text-white">
                                    {slide.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="absolute -bottom-10 md:bottom-[-0px] left-1/2 transform -translate-x-1/2 bg-white custom-box-shadow rounded-md flex items-center justify-between w-[121px] md:w-[260px] h-[48px] md:h-[96px] z-1">
                <div className="w-1/2 h-full flex items-center justify-center">
                    <button id="project-view-prev" className={`focus:outline-none cursor-pointer ${activeIndex === 0 ? 'opacity-30' : ''}`} onClick={handlePrev}>
                    <div className='h-[20px] w-[20px] md:h-[35px] md:w-[36px] relative'>
                        <Image
                            src="/assets/arrow-main.svg"
                            alt="Previous"
                            fill
                            className="transform rotate-180"
                            />
                        </div>
                    </button>
                </div>
                <div className="h-12 w-px bg-[#20202019]"></div>
                <div className="w-1/2 h-full flex items-center justify-center">
                    <button id="project-view-next" className={`focus:outline-none cursor-pointer ${activeIndex === data.length - 1 ? 'opacity-30' : ''}`} onClick={handleNext}>
                        <div className='h-[20px] w-[20px] md:h-[35px] md:w-[36px] relative'>
                        <Image
                            src="/assets/arrow-main.svg"
                                alt="Next"
                                fill
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
