'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sliderData = [
  {
    month: 'April 2023',
    images: ['/assets/const1.jpg', '/assets/const2.png', '/assets/const1.jpg'],
    description: 'Everybody longs for a lifestyle that relishes their body.',
  },
  {
    month: 'May 2023',
    images: ['/assets/const2.png', '/assets/const1.jpg', '/assets/const1.jpg'],
    description: 'Everybody longs for a lifestyle that relishes their body.',
  },
  {
    month: 'June 2023',
    images: ['/assets/const2.png', '/assets/const1.jpg', '/assets/const1.jpg'],
    description: 'Everybody longs for a lifestyle that relishes their body.',
  },
];

const ConstructionSlider = () => {
  const [imageIndexes, setImageIndexes] = useState(sliderData.map(() => 0));
  const [currentSlide, setCurrentSlide] = useState(2); // middle slide in view

  const cycleImage = (slideIndex) => {
    const newIndexes = [...imageIndexes];
    newIndexes[slideIndex] = (newIndexes[slideIndex] + 1) % 3;
    setImageIndexes(newIndexes);
  };

  return (
    <section className="bg-[#020C22] overflow-x-hidden">
      {/* Top line + dot indicator */}
      {/* <div className="flex items-center justify-center mb-8 relative">
        <div className="h-px bg-white/20 w-full absolute top-1/2 left-0" />
        <div className="relative z-10 flex gap-8">
          {sliderData.map((_, idx) => (
            <div key={idx} className={`w-[20px] h-[20px] rounded-full border border-white ${currentSlide === idx ? 'bg-white' : ''}`} />
          ))}
        </div>
      </div> */}

      {/* Slider */}
      <div className="flex gap-8 justify-center transition-transform duration-500 w-full">
        {sliderData.map((slide, idx) => {
          const index = imageIndexes[idx];
          const images = [
            slide.images[index % 3],
            slide.images[(index + 1) % 3],
            slide.images[(index + 2) % 3],
          ];

          return (
            <div>
            <div className='flex flex-row gap-6 items-center pb-6'>
                <div key={idx} className={`w-[20px] h-[20px] rounded-full border border-white ${currentSlide === idx ? 'bg-white' : ''}`} />
                <div className="h-px bg-white/20 w-full" />
            </div>
           <div className={`ml-2 px-[40px] w-full md:border-l md:border-dashed md:border-gray-300 cursor-pointer transition-opacity duration-500 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-30'
              }`}>
             <div
              key={idx}
              className={`w-[489px]'
              }`}
              onClick={() => cycleImage(idx)}
            >
              <h2 className="text-[40px] font-satoshi font-normal leading-[48px] text-white mb-[24px]">{slide.month}</h2>
              <div className="relative h-[400px]">
                {images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="Construction"
                    fill
                    style={{
                      zIndex: 10 - i,
                      transform: `translate(${i * 16}px, ${i * 16}px)`,
                    }}
                    className="absolute object-cover transition-all duration-500 border border-white/10"
                  />
                ))}
              </div>

              <p className="text-[16px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[20px] text-white/50 pt-[50px] pb-[12px]">{slide.description}</p>
              <span className="orange-color text-[16px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[20px]">View Updates →</span>
            </div>
           </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConstructionSlider;
