"use client";
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FadeIn } from './animations';

const logos = [
  { src: "/assets/logo1.svg", width: 243, height: 64 },
  { src: "/assets/logo2.svg", width: 138, height: 64 },
  { src: "/assets/logo3.svg", width: 226, height: 64 },
  { src: "/assets/logo4.svg", width: 121, height: 64 },
  { src: "/assets/logo5.svg", width: 288, height: 64 },
];

export default function LogoSection() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <section className='bg-[#E7EDF2]'>
      <div className='py-[44px] container mx-auto'>
        <FadeIn className='pb-[28px] text-center text-[16px] font-satoshi font-[400] leading-[20px] text-[#22252E]'>
          In the news
        </FadeIn>

        {/* Desktop View */}
        <FadeIn delay={0.1} className='w-full gap-[48px] justify-between hidden md:flex'>
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt="logo"
            />
          ))}
        </FadeIn>

        {/* Mobile Slider */}
        <div className="block md:hidden">
          <Slider {...sliderSettings}>
            {logos.map((logo, i) => (
              <div key={i} className="flex justify-center items-center px-4">
                <Image
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt="logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
