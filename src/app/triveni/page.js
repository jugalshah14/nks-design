'use client';
import React from 'react'
import Image from "next/image";
import TeamSwiper from '@/components/TeamSwiper';
import PastProjectSwiper from '@/components/PastProjectSwiper';
import LogoSection from '@/components/LogoSection';
import { SlideUp } from '@/components/animations';
import Amenities from '../amenities/page';
import AmenitiesSwiper from '@/components/AmenitiesSwiper';
import SocialSection from '@/components/SocialSection';

export default function triveni() {
  return (
    <main>

        {/* Hero Section */}
        <SlideUp className="bg-[#F3F6F8] flex flex-col items-center px-14 pt-[150px] pb-14 padding-top">
            <SlideUp delay={0.4} className="text-sm px-4 pt-6 text-center text-gray-500 mb-2">
                <span className="text-[#22252E] font-satoshi font-[700]">• Home</span>
                <span className="mx-2">—</span>
                <span className="text-gray-400">Triveni Omniplex</span>
            </SlideUp>
            <SlideUp delay={0.6} className="text-center items-center flex justify-center relative -mb-5 page-hero-title no-negative-margin">
            Triveni Omniplex
            </SlideUp>
        </SlideUp>

        <section className='-mt-16 no-negative-margin pb-[40px] md:pb-[0px]'>
            <SlideUp delay={0.8} className="container mx-auto">
            <div className="relative w-full md:h-[460px] h-[265px] hide-triangle">
                <Image
                    src="/assets/triveni-hero.png"
                    alt="Hero-img"
                    fill
                    priority
                    className='select-none no-drag'
                />
            </div>
            <div className="relative w-full h-[262px] none-md">
                <Image src="/assets/blue-triangle.svg" width={18} height={17} alt="img" className='absolute left-0 z-10 w-[18px] h-[18px] md:w-[65px] md:h-[65px] select-none no-drag'/>
                <Image src="/assets/tri2.svg" width={65} height={65} alt="img" className='absolute right-0 bottom-0 z-10 w-[18px] h-[18px] md:w-[65px] md:h-[65px] select-none no-drag'/>
                <Image
                    src="/assets/triveni-mobile.jpg"
                    alt="Hero-img"
                    fill
                    className=" w-full h-full select-none no-drag"
                    priority
                    />
            </div>
            <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
                <h2 className="text-center project-overview-title mobile-title max-w-[800px]">
                A gold mine for your  <span className="orange-color">brand</span>.
                </h2>
            </div>
            </SlideUp>
        </section>


    </main>
  )
}
