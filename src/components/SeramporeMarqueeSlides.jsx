import Image from 'next/image';
import React from 'react';

export default function SeramporeMarqueeSlides() {
    return (
        <marquee>
            <div className="gap-10 py-4 md:pt-10 flex justify-between">
                <div className="min-w-[30px] h-[30px] relative">
                    <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
                </div>
                <div className="flex items-center">
                    <p className="text-[20px ]md:text-[24px] font-[Satoshi] font-[400] leading-7 md:leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">New Town • 32km</p>
                </div>

                <div className="min-w-[30px] h-[30px] relative">
                    <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
                </div>
                <div className="flex items-center">
                    <p className="text-[20px ]md:text-[24px] font-[Satoshi] font-[400] leading-7 md:leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">Esplanade • 22.3km</p>
                </div>

                <div className="min-w-[30px] h-[30px] relative">
                    <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
                </div>
                <div className="flex items-center">
                    <p className="text-[20px ]md:text-[24px] font-[Satoshi] font-[400] leading-7 md:leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">Sector V • 27.3km</p>
                </div>

                <div className="min-w-[30px] h-[30px] relative">
                    <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
                </div>
                <div className="flex items-center">
                    <p className="text-[20px ]md:text-[24px] font-[Satoshi] font-[400] leading-7 md:leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">Dakshineshwar • 12km</p>
                </div>
            </div>
        </marquee>
    )
}
