'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

const sliderData = [
  {
    month: 'May 2023',
    images: ['/assets/const1.jpg', '/assets/const2.png', '/assets/const1.jpg'],
    description: 'Everybody longs for a lifestyle that relishes their body.',
  },
  {
    month: 'April 2023',
    images: ['/assets/const2.png', '/assets/const1.jpg', '/assets/const1.jpg'],
    description: 'Everybody longs for a lifestyle that relishes their body.',
  },
  {
    month: 'June 2023',
    images: ['/assets/const2.png', '/assets/const1.jpg', '/assets/const1.jpg'],
    description: 'Everybody longs for a lifestyle that relishes their body.',
  }
];

const ConstructionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageIndexes, setImageIndexes] = useState(sliderData.map(() => 0));
  const totalSlides = sliderData.length;

  // Drag state
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;

    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        slideLeft();
      } else {
        slideRight();
      }
    }

    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const cycleImage = (slideIndex) => {
    const newIndexes = [...imageIndexes];
    newIndexes[slideIndex] = (newIndexes[slideIndex] + 1) % 3;
    setImageIndexes(newIndexes);
  };

  const slideLeft = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slideRight = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const visibleSlides = [
    (currentSlide - 1 + totalSlides) % totalSlides,
    currentSlide,
    (currentSlide + 1) % totalSlides
  ];
 
  return (
    <section
      className={`bg-[#020C22] overflow-x-hidden relative px-8 select-none pointer-events-auto ${
        isDragging.current ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Arrows only visible on mobile */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer md:hidden" onClick={slideLeft}>
        ←
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer md:hidden" onClick={slideRight}>
        →
      </div>

      <div className="flex gap-8 justify-end transition-transform duration-500 w-full">
        {visibleSlides.map((slideIdx, pos) => {
          const slide = sliderData[slideIdx];
          const index = imageIndexes[slideIdx];
          const images = [
            slide.images[index % 3],
            slide.images[(index + 1) % 3],
            slide.images[(index + 2) % 3],
          ];

          return (
            <div key={slideIdx} className='min-w-[288px] md:min-w-[520px] transition-opacity duration-500'>
              <div className='flex flex-row gap-[10px] md:gap-6 items-center pb-[20px] md:pb-6'>
                <div className={`w-[8px] h-[8px] md:w-[20px] md:h-[20px] rounded-full border border-white ${pos === 2 ? 'bg-white' : ''}`} />
                <div className="h-px bg-white/20 w-full" />
              </div>

              <div className={`ml-2 px-[16px] md:px-[40px] w-full md:border-l md:border-dashed md:border-gray-300 ${pos === 2 ? 'opacity-100 cursor-pointer' : 'opacity-30'}`}>
                <div onClick={() => pos === 2 && cycleImage(slideIdx)}>
                  <h2 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[48px] text-white mb-[24px]">{slide.month}</h2>
                  <div className="relative h-[250px] md:h-[450px]">
                    {images.map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt="Construction"
                        fill
                        style={{
                          zIndex: 10 - i,
                          transform: `translate(${i * 16}px, ${i * 16}px)`,
                          opacity: i === 0 ? 1 : 0.3,
                        }}
                        className="absolute object-cover transition-all duration-500 border border-white/10"
                      />
                    ))}
                  </div>

                  <p className="text-[16px] font-[Satoshi] font-[400] leading-[20px] text-white/50 pt-[50px] pb-[12px]">{slide.description}</p>
                  <span className="orange-color text-[16px] font-[Satoshi] font-[400] leading-[20px]">View Updates →</span>
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
