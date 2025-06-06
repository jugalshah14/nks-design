"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { SlideUp } from './animations';
import ReviewSliderOne from './ReviewSliderOne';
import ReviewsOne from './ReviewsOne';
import ReviewsTwo from './ReviewsTwo';
import ReviewsThree from './ReviewsThree';

const flatsData = {
  '3BHK': {
    
  },

  '2BHK': {
   
  },

  '4BHK': {
   
  }
};

export default function ReviewsSection() {
  const [swiperRef, setSwiperRef] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('2D');
  const [fade, setFade] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeBHK, setActiveBHK] = useState('3BHK');
  const [bhkFade, setBhkFade] = useState(false);

  const sectionRefs = {
    '3BHK': useRef(null),
    '2BHK': useRef(null),
    '4BHK': useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Adding offset for better detection

      // Find which section is currently in view
      Object.entries(sectionRefs).forEach(([bhk, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveBHK(bhk);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (bhk) => {
    if (sectionRefs[bhk]?.current) {
      const elementPosition = sectionRefs[bhk].current.getBoundingClientRect().top;
      const isMobile = window.innerWidth < 768; // md breakpoint
      const offset = isMobile ? 120 : 200; // less offset for mobile
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveBHK(bhk);
    }
  };

  const handleNext = () => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setFade(true);
    setTimeout(() => {
      setActiveTab(tab);
      setActiveIndex(0);
      setFade(false);
    }, 200);
  };

  const handleBHKChange = (bhk) => {
    if (bhk === activeBHK) return;
    scrollToSection(bhk);
  };

  return (
    <div className='md:pb-[60px]'>
        <div className='sticky top-[60px] md:top-[100px] z-11 bg-[#020C22]'>
            <div className='w-full items-center justify-center flex flex-row gap-4 md:gap-10 border-t border-b border-white/10'>
                {['3BHK', '2BHK', '4BHK'].map((bhk, index) => (
                    <React.Fragment key={bhk}>
                    <div
                        onClick={() => handleBHKChange(bhk)}
                        className={`text-[16px] md:text-[20px] font-satoshi font-normal leading-[28px] py-[20px] cursor-pointer transition-all duration-300 relative ${
                        activeBHK === bhk ? 'text-white' : 'text-white/50'
                        }`}
                    >
                        {bhk}
                        <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#144D78] transition-all duration-300 transform origin-left ${
                            activeBHK === bhk ? 'scale-x-100' : 'scale-x-0'
                        }`}></div>
                    </div>
                    {index < 2 && (
                        <Image src="/assets/dot.svg" width={10} height={10} alt="dot" className="transition-opacity duration-300" />
                    )}
                    </React.Fragment>
                ))}
            </div>
        </div>
        
        <div ref={sectionRefs['3BHK']}>
            <ReviewsOne/>
        </div>
      
        <div ref={sectionRefs['2BHK']}>
            <ReviewsTwo/>
        </div>
        
        <div ref={sectionRefs['4BHK']}>
            <ReviewsThree/>
        </div>

    </div>
  );
}
