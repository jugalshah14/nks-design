"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import SangamViewsSwiper from './SangamViewsSwiper';
import { AnimatedSection } from './animations';
import { useSearchParams } from 'next/navigation';
import Link from "next/link";

const flatsData = {
  '1BHK': {
    sliderImages: {
      '2D': ["/assets/1bhk.png", "/assets/1bhk1.png"],
    },
    info: { towers: 'Serenity', units: 'B/C/F/G/J/K/N/O', price: 4234 },
  },

  '2BHK': {
    sliderImages: {
      '2D': ["/assets/2bhk1.png", "/assets/2bhk2.png"],
    },
    info: { towers: 'Signature & Serenity', units: 'E/H', price: 4234 },
  },
  
  '3BHK': {
    sliderImages: {
      '2D': ["/assets/3bhk.png", "/assets/3bhk1.png", "/assets/3bhk2.png","/assets/3bhk3.png","/assets/3bhk4.png"],
    },
    info: { towers: 'Signature , Serenity , Suites', units: 'A/B/C/D', price: 1234 },
  },

  '4BHK': {
    sliderImages: {
      '2D': ["/assets/4bhk.png", "/assets/4bhk1.png"],
    },
    info: { towers: 'Suites', units: '', price: 7234 },
  }
};


export default function SangamSliders() {
  const searchParams = useSearchParams();
  const [swiperRef, setSwiperRef] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('2D');
  const [fade, setFade] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeBHK, setActiveBHK] = useState('1BHK');
  const [bhkFade, setBhkFade] = useState(false);

  useEffect(() => {
    const bhkParam = searchParams.get('bhk');
    const sectionParam = searchParams.get('section');
    
    if (sectionParam === 'sangam') {
      const element = document.getElementById('sangam-section');
      if (element) {
        const offset = window.innerWidth < 768 ? -110 : -180;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    if (bhkParam && ['1BHK', '2BHK', '3BHK', '4BHK'].includes(bhkParam)) {
      handleBHKChange(bhkParam);
    }
  }, [searchParams]);

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
    setBhkFade(true);
    setTimeout(() => {
      setActiveBHK(bhk);
      setActiveTab('2D'); 
      setActiveIndex(0); 
      setBhkFade(false);
    }, 300);
  };

  return (
    <>
    <div className='relative max-md:-top-15'>
      <div className='w-full items-center justify-center mt-[80px] md:mt-[0px] flex flex-row gap-4 md:gap-10 border-t border-b border-white/10 md:mb-[52px]'>
        {['1BHK', '2BHK', '3BHK', '4BHK'].map((bhk, index) => (
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
            {index < 3 && (
                <Image src="/assets/dot.svg" width={10} height={10} alt="dot" className="transition-opacity duration-300" />
            )}
            </React.Fragment>
        ))}
        </div>
      <div className="container mx-auto relative md:mb-16">

        {/* sangam part1 */}
        <div className='relative w-full pb-[60px]'>
          <div className={`absolute top-0 md:top-12 h-[400px] md:h-[445px] bg-[#0E1727] w-full transition-all duration-500 ${bhkFade ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}></div>
          <div className='flex flex-row md:flex-col gap-3 md:gap-[0px] items-baseline md:items-center justify-center w-full py-[27px] md:py-[0px]'>
            <div className='relative md:w-full items-center flex justify-center'>
              <Image src="/assets/sangam-icon.png" width={100} height={100} alt="dot" className='hide-triangle' />
              <Image src="/assets/sangam-icon.svg" width={26} height={26} alt="dot" className='none-md' />
            </div>
            <h2 className={`relative project-overview-title text-center !text-white pt-[16px] md:pb-[32px] sangam-title transition-all duration-500 ${bhkFade ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
            {activeBHK}
            </h2>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[60%]'>
              <div className={`bg-[#111B2F] relative transition-all duration-500 ${bhkFade ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>

                <Image src="/assets/triangle-blue.png" width={65} height={65} alt="triangle" className='absolute right-0 hide-triangle transition-transform duration-500 hover:rotate-12' />

                {/* Slider */}
                <div className={`transition-all duration-500 ${fade || bhkFade ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
                  <Swiper
                    key={`${activeBHK}-${activeTab}`}
                    modules={[Pagination]}
                    onSwiper={setSwiperRef}
                    onSlideChange={handleSlideChange}
                    onSlideChangeTransitionStart={() => setIsTransitioning(true)}
                    onSlideChangeTransitionEnd={() => setIsTransitioning(false)}
                    slidesPerView={1}
                    loop={false}
                    speed={600}
                    >
                    {flatsData[activeBHK].sliderImages[activeTab].map((src, index) => (
                        <SwiperSlide key={index}>
                        <div
                            className={`p-[10px] md:p-[69px] flex items-center justify-center transition-all duration-500 ${
                            isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                            }`}
                        >
                            <Image
                            src={src}
                            width={500}
                            height={500}
                            alt={`${activeTab}-${index}`}
                            className="pb-10 md:pb-0 object-contain w-full h-[350px] transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>

                {/* Navigation Buttons */}

                <div className="relative md:static flex items-center justify-center bg-[#0E1727] md:bg-white/5 p-[18px] transition-all duration-300 mt-[-60px] md:mt-0">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 md:w-[27px] h-6 md:h-[27px] rounded-full flex items-center justify-center cursor-pointer select-none transition-all duration-300 ${
                      activeIndex > 0 ? 'bg-white text-black hover:scale-110' : 'bg-white/20 text-white/50 pointer-events-none'
                    }`}
                    onClick={activeIndex > 0 ? handlePrev : undefined}
                  >
                   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#22252E] rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                  </div>
                  <div
                    className={`w-6 md:w-[27px] h-6 md:h-[27px] rounded-full flex items-center justify-center cursor-pointer select-none transition-all duration-300 ${
                      activeIndex < flatsData[activeBHK].sliderImages[activeTab].length - 1 ? 'bg-white text-black hover:scale-110' : 'bg-white/20 text-white/50 pointer-events-none'
                    }`}
                    onClick={
                      activeIndex < flatsData[activeBHK].sliderImages[activeTab].length - 1 ? handleNext : undefined
                    }
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#22252E]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                  </div>
                </div>
              </div>


              </div>
            </div>

            {/* Info Card */}
            <div className={`z-[10] absolute right-0 top-135 md:top-75 p-[20px] md:p-[40px] bg-[#020C22] w-full md:w-[44%] transition-all duration-500 ${bhkFade ? 'opacity-50 scale-95 translate-x-4' : 'opacity-100 scale-100 translate-x-0'}`}>
              <div className='flex flex-col gap-3 md:gap-5'>
                <div className="grid grid-cols-2 md:gap-20">
                  <div className='flex flex-col items-center md:items-start transition-all duration-300 hover:scale-105'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Tower</p>
                    <p className="text-[20px] md:text-[24px] text-white">{flatsData[activeBHK].info.towers}</p>
                  </div>
                  <div className='flex flex-col items-center md:items-start transition-all duration-300 hover:scale-105'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Unit Type</p>
                    <p className="text-[20px] md:text-[24px] text-white">{flatsData[activeBHK].info.units}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:gap-20 md:mb-8">
                  <div className='order-1 md:order-2 flex flex-col items-center md:items-start transition-all duration-300 hover:scale-105'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Price</p>
                    <div className="flex items-center">
                      <p className="hidden md:inline text-[24px] text-white shadow-lg mr-2 blur-[6.5px]">{flatsData[activeBHK].info.price}</p>
                      <a href="#" className="text-[14px] font-bold text-[#134c78] underline transition-all duration-300 hover:text-[#1a6ba8]">Know price</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full mt-[20px] md:mt-[0px]'>
                <Link href="/contact-us">
                <button className="md:rounded-sm w-full bg-[#144D78] hover:bg-blue-800 transition text-white font-medium inline-flex items-center gap-2 overflow-hidden button-secondary">
                  <div className='px-6 py-3 w-full flex justify-start'>
                      <span className='text-left inline md:inline'>Schedule a Visit</span>
                  </div>
                      <span className="px-6 py-4 orange-color bg-[#002F52] text-lg ml-auto">↗</span>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* sangam part2 */}     
      <SangamViewsSwiper activeBHK={activeBHK} />
    </>
  );
}
