"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import SangamViewsSwiper from './SangamViewsSwiper';
import { AnimatedSection } from './animations';

const flatsData = {
  '3BHK': {
    tabs: ['2D', '3D', 'Floor', 'Building'],
    sliderImages: {
      '2D': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
      '3D': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
      'Floor': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
      'Building': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
    },
    info: { towers: 'A,B,C', units: 234, area: '56 m2 - 76 m2', price: 1234 },
  },

  '2BHK': {
    tabs: ['2D', '3D', 'Floor', 'Building'],
    sliderImages: {
      '2D': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
      '3D': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
      'Floor': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
      'Building': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
    },
    info: { towers: 'D,E', units: 150, area: '45 m2 - 60 m2', price: 4234 },
  },

  '4BHK': {
    tabs: ['2D', '3D', 'Floor', 'Building'],
    sliderImages: {
      '2D': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
      '3D': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
      'Floor': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
      'Building': ["/assets/3bhkk.png", "/assets/3bhkk.png", "/assets/3bhkk.png","/assets/3bhkk.png"],
    },
    info: { towers: 'F', units: 90, area: '80 m2 - 100 m2', price: 7234 },
  }
};


export default function SangamSliders() {
  const [swiperRef, setSwiperRef] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('2D');
  const [fade, setFade] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeBHK, setActiveBHK] = useState('3BHK');
  const [bhkFade, setBhkFade] = useState(false);

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
    <div className='relative max-md:-top-15'>
      <div className='w-full items-center justify-center mt-[80px] md:mt-[0px] flex flex-row gap-4 md:gap-10 border-t border-b border-white/10 mb-[52px]'>
        {['3BHK', '2BHK', '4BHK'].map((bhk, index) => (
            <React.Fragment key={bhk}>
            <div
                onClick={() => handleBHKChange(bhk)}
                className={`text-[16px] md:text-[20px] font-[Satoshi] font-normal leading-[28px] py-[20px] cursor-pointer transition-all duration-300 relative ${
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
      <div className="container mx-auto relative md:mb-16">

        {/* sangam part1 */}
        <div className='relative w-full pb-[60px]'>
          <div className={`absolute top-0 md:top-12 h-[400px] md:h-[445px] bg-[#0E1727] w-full transition-all duration-500 ${bhkFade ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}></div>
          <div className='flex flex-row md:flex-col gap-3 md:gap-[0px] items-baseline md:items-center justify-center w-full py-[27px] md:py-[0px]'>
            <div className='relative md:w-full items-center flex justify-center'>
              <Image src="/assets/sangam-icon.png" width={100} height={100} alt="dot" className='hide-triangle' />
              <Image src="/assets/sangam-icon.svg" width={26} height={26} alt="dot" className='none-md' />
            </div>
            <h2 className={`relative project-overview-title text-center !text-white pt-[16px] pb-[50px] md:pb-[32px] sangam-title transition-all duration-500 ${bhkFade ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
            {activeBHK}
            </h2>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[60%]'>
              <div className={`bg-[#111B2F] relative transition-all duration-500 ${bhkFade ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>

                {/* Tabs */}
                <div className='absolute z-[10] md:mx-[0px] flex flex-row md:flex-col items-center justify-between bg-white/5 backdrop-filter backdrop-blur-[14px] bg-opacity-100 w-full md:w-[72px] m-1 absolute left-0 top-[-50px] md:top-0 transition-all duration-300'>
                 {flatsData[activeBHK].tabs.map(tab => (
                    <div
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`w-full text-center text-white text-sm py-[7px] cursor-pointer transition-all duration-300 
                        ${activeTab === tab ? 'bg-[#144D78]' : 'hover:bg-[#144D78]'}`}
                    >
                      {tab}
                    </div>
                  ))}
                </div>

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
                            className="object-contain w-full h-[350px] transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between bg-white/5 p-[18px] transition-all duration-300 mt-[-60px] md:mt-[0px]">
                  <button className="pl-12 w-full text-white text-sm flex items-center gap-2 justify-center transition-all duration-300 hover:gap-4">
                    Check Dimensions <Image src="/assets/whitearrow.svg" alt="1BHK" width={40} height={3} className="transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer select-none transition-all duration-300 ${
                        activeIndex > 0 ? 'bg-white text-black hover:scale-110' : 'bg-white/20 text-white/50'
                      }`} onClick={handlePrev}>
                      ‹
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer select-none transition-all duration-300 ${
                        activeIndex < flatsData[activeBHK].sliderImages[activeTab].length - 1 ? 'bg-white text-black hover:scale-110' : 'bg-white/20 text-white/50'
                      }`} onClick={handleNext}>
                      ›
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className={`z-[10] absolute right-0 top-135 md:top-75 p-[20px] md:p-[40px] bg-[#020C22] w-full md:w-[44%] transition-all duration-500 ${bhkFade ? 'opacity-50 scale-95 translate-x-4' : 'opacity-100 scale-100 translate-x-0'}`}>
              <div className='flex flex-col gap-3 md:gap-10'>
                <div className="grid grid-cols-2 md:gap-20 mb-4">
                  <div className='flex flex-col items-center md:items-start transition-all duration-300 hover:scale-105'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Tower</p>
                    <p className="text-[20px] md:text-[24px] text-white">{flatsData[activeBHK].info.towers}</p>
                  </div>
                  <div className='flex flex-col items-center md:items-start transition-all duration-300 hover:scale-105'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Flat units</p>
                    <p className="text-[20px] md:text-[24px] text-white">{flatsData[activeBHK].info.units}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:gap-20 md:mb-8">
                  <div className='order-2 md:order-1 flex flex-col items-center md:items-start transition-all duration-300 hover:scale-105'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Unit area</p>
                    <p className="text-[20px] md:text-[24px] text-white">{flatsData[activeBHK].info.area}</p>
                  </div>
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
                <button className="w-full bg-[#144D78] hover:bg-blue-800 transition text-white font-medium inline-flex items-center gap-2 overflow-hidden button-secondary">
                  <div className='px-6 py-3 w-full flex justify-start'>
                      <span className='text-left inline md:inline'>Schedule a Visit</span>
                  </div>
                      <span className="px-6 py-4 text-orange-500 bg-[#002F52] text-lg ml-auto">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* sangam part2 */}
      <AnimatedSection delay={0.4}>
        <SangamViewsSwiper activeBHK={activeBHK} />
      </AnimatedSection>
    </div>
  );
}
