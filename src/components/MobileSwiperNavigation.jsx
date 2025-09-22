import React from 'react';
import Image from 'next/image';

const MobileSwiperNavigation = ({ 
  currentIndex, 
  totalSlides, 
  onPrev, 
  onNext, 
  isPrevDisabled, 
  isNextDisabled,
  className = "" 
}) => {
  return (
    <div className={`flex z-11 bg-white items-center justify-around px-1 py-5 ${className}`}>
      <div className="h-full flex items-center justify-center">
        <button
          id="mobile-swiper-prev"
          className={`focus:outline-none cursor-pointer ${isPrevDisabled ? 'opacity-30' : ''}`}
          onClick={onPrev}
          disabled={isPrevDisabled}
        >
          <Image 
            src="/assets/arrow-main.svg" 
            alt="Previous" 
            height={20} 
            width={19} 
            className="transform rotate-180" 
          />
        </button>
      </div>
      <div className="flex gap-2 items-center font-[700] text-black">
        <div className="w-4 text-center">{currentIndex + 1}</div>
        <div className="h-0.5 w-8 bg-[#D9D9D9]" />
        <div className='text-black/30'>{totalSlides}</div>
      </div>
      <div className="h-full flex items-center justify-center">
        <button
          id="mobile-swiper-next"
          className={`focus:outline-none cursor-pointer ${isNextDisabled ? 'opacity-30' : ''}`}
          onClick={onNext}
          disabled={isNextDisabled}
        >
          <Image 
            src="/assets/arrow-main.svg" 
            alt="Next" 
            height={20} 
            width={19} 
            className="" 
          />
        </button>
      </div>
    </div>
  );
};

export default MobileSwiperNavigation;