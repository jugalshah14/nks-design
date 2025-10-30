'use client';
import React from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll';

export default function WhyRiversideFloatingButton() {
    return (
        <ScrollLink
            activeClass="spy-link-active"
            to="section-Amenities"
            spy={true}
            className="default-theme-text-color-1 max-md:flex max-md:w-100 max-md:justify-center"
            smooth={true}
            offset={-100}
            duration={500}
            id="amenities"
        >
            <div className="cursor-pointer absolute bottom-[70px] md:bottom-[30px] z-10 md:right-8 bg-white shadow-lg max-md:px-3 max-md:py-3 md:px-6 md:py-6 flex items-center md:gap-3 gap-2 w-auto">
                <p className="text-[#22252E] md:text-[16px] text-[14px] font-satoshi font-bold leading-[20px]">
                    Why Riverside Living?
                </p>
                <Image 
                    src="/assets/icons/arrow-down.svg" 
                    alt="arrow down" 
                    width={20} 
                    height={20}
                />
            </div>
        </ScrollLink>
    )
}
