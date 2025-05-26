"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import SangamViewsSwiper from './SangamViewsSwiper';

const tabs = ['2D', '3D', 'Floor', 'Building'];

const sliderImages = {
  '2D': [
    "/assets/3bhkk.png",
    "/assets/3bhkk.png",
    "/assets/3bhkk.png",
    "/assets/3bhkk.png"
  ],
  '3D': [
    "/assets/3bhkk.png",
    "/assets/3bhkk.png",
    "/assets/3bhkk.png",
    "/assets/3bhkk.png"
  ],
  'Floor': [
    "/assets/3bhkk.png",
    "/assets/3bhkk.png",
    "/assets/3bhkk.png",
    "/assets/3bhkk.png"
  ],
  'Building': [
    "/assets/3bhkk.png",
    "/assets/3bhkk.png",
    "/assets/3bhkk.png",
    "/assets/3bhkk.png"
  ]
};

export default function SangamSliders() {
  const [swiperRef, setSwiperRef] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('2D');
  const [fade, setFade] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  return (
    <div className='relative max-md:-top-15'>
      <div className="container max-w-7xl mx-auto relative md:mb-16">

        {/* sangam part1 */}
        <div className='relative w-full pb-[60px]'>
          <div className='absolute top-0 md:top-12 h-[500px] md:h-[445px] bg-[#0E1727] w-full'></div>
          <div className='flex flex-row md:flex-col gap-3 md:gap-[0px] items-baseline md:items-center justify-center w-full py-[27px] md:py-[0px]'>
            <div className='relative md:w-full items-center flex justify-center'>
              <Image src="/assets/sangam-icon.png" width={100} height={100} alt="dot" className='hide-triangle' />
              <Image src="/assets/sangam-icon.svg" width={26} height={26} alt="dot" className='none-md' />
            </div>
            <h2 className="relative project-overview-title text-center !text-white pt-[16px] pb-[50px] md:pb-[32px] sangam-title">3BHK</h2>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[60%]'>
              <div className='bg-[#111B2F] relative'>

                {/* Tabs */}
                <div className='absolute z-[10] mx-[16px] md:mx-[0px] flex flex-row md:flex-col items-center justify-between bg-white/5 backdrop-filter backdrop-blur-[14px] bg-opacity-100 w-[340px] md:w-[72px] m-1 absolute left-0 top-[-50px] md:top-0'>
                  {tabs.map(tab => (
                    <div
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`w-full text-center text-white text-sm py-[7px] cursor-pointer transition-all duration-200 
                        ${activeTab === tab ? 'bg-[#144D78]' : 'hover:bg-[#144D78]'}`}
                    >
                      {tab}
                    </div>
                  ))}
                </div>

                <Image src="/assets/triangle-blue.png" width={65} height={65} alt="triangle" className='absolute right-0 hide-triangle' />

                {/* Slider */}
                <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                  <Swiper
                    key={activeTab}
                    modules={[Pagination]}
                    onSwiper={setSwiperRef}
                    onSlideChange={handleSlideChange}
                    onSlideChangeTransitionStart={() => setIsTransitioning(true)}
                    onSlideChangeTransitionEnd={() => setIsTransitioning(false)}
                    slidesPerView={1}
                    loop={false}
                    speed={600} // smoother slide
                    >
                    {sliderImages[activeTab].map((src, index) => (
                        <SwiperSlide key={index}>
                        <div
                            className={`p-[10px] md:p-[69px] flex items-center justify-center transition-transform duration-500 ${
                            isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                            }`}
                        >
                            <Image
                            src={src}
                            width={500}
                            height={500}
                            alt={`${activeTab}-${index}`}
                            className="object-contain w-full h-[350px]"
                            />
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>

                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between bg-white/5 p-[18px]">
                  <button className="pl-12 w-full text-white text-sm flex items-center gap-2 justify-center">
                    Check Dimensions <Image src="/assets/whitearrow.svg" alt="1BHK" width={40} height={3} />
                  </button>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer select-none ${
                        activeIndex > 0 ? 'bg-white text-black' : 'bg-white/20 text-white/50'
                      }`} onClick={handlePrev}>
                      ‹
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer select-none ${
                        activeIndex < sliderImages[activeTab].length - 1 ? 'bg-white text-black' : 'bg-white/20 text-white/50'
                      }`} onClick={handleNext}>
                      ›
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Info Card */}
            <div className='z-[10] absolute right-0 top-135 md:top-75 p-[20px] md:p-[40px] bg-[#020C22] w-full md:w-[44%]'>
              <div className='flex flex-col gap-3 md:gap-10'>
                <div className="grid grid-cols-2 md:gap-20 mb-4">
                  <div className='flex flex-col items-center md:items-start'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Tower</p>
                    <p className="text-[20px] md:text-[24px] text-white">A,B,C</p>
                  </div>
                  <div className='flex flex-col items-center md:items-start'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Flat units</p>
                    <p className="text-[20px] md:text-[24px] text-white">234</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:gap-20 md:mb-8">
                  <div className='order-2 md:order-1 flex flex-col items-center md:items-start'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Unit area</p>
                    <p className="text-[20px] md:text-[24px] text-white">56 m2 - 76 m2</p>
                  </div>
                  <div className='order-1 md:order-2 flex flex-col items-center md:items-start'>
                    <p className="text-[12px] md:text-[16px] text-white/50 mb-1">Price</p>
                    <div className="flex items-center">
                      <p className="hidden md:inline text-[24px] text-white shadow-lg mr-2 blur-[6.5px]">1234</p>
                      <a href="#" className="text-[14px] font-bold text-[#134c78] underline">Know price</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full mt-[20px] md:mt-[0px]'>
                <button className="flex justify-between w-full group cursor-pointer bg-[#144D78] hover:bg-[#0e3a5a] transition text-white font-medium items-center overflow-hidden">
                  <div className="p-[15px] md:p-[25px] group-hover:text-orange-400 transition-colors">
                    <span>Schedule a Visit</span>
                  </div>
                  <div className="bg-[#002F52] p-[20px] md:p-[30px] flex items-center justify-center">
                    <Image
                      src="/assets/arrow.png"
                      width={15}
                      height={15}
                      alt="arrow"
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* sangam part2 */}
      <SangamViewsSwiper />
    </div>
  );
}
