"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    month: "June 2023",
    images: ["/assets/c11.png", "/assets/c12.png", "/assets/c13.png"],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "April 2023",
    images: ["/assets/c21.png", "/assets/c22.png", "/assets/c23.png"],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "May 2023",
    images: ["/assets/c31.png", "/assets/c32.png", "/assets/c33.png"],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
];

const settings = {
  className: "construction-swiper center",
  infinite: false,
  centerPadding: "30px",
  slidesToShow: 2.5,
  speed: 600,
  dots: false,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1.05,
      },
    },
  ],
};

const ConstructionSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageIndexes, setImageIndexes] = useState(sliderData.map(() => 0));
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  let swiperRef = useRef(null);
  let progressInterval = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setIsAutoPlaying(true);
          } else {
            setIsInView(false);
            setIsAutoPlaying(false);
            if (progressInterval.current) {
              clearTimeout(progressInterval.current);
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (progressInterval.current) {
        clearTimeout(progressInterval.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (!swiperRef) return;
    setIsTransitioning(true);
    swiperRef.slickNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    setIsTransitioning(true);
    swiperRef.slickPrev();
  };

  const cycleImage = (slideIndex) => {
    const newIndexes = [...imageIndexes];
    newIndexes[slideIndex] = (newIndexes[slideIndex] + 1) % 3;
    setImageIndexes(newIndexes);
  };

  const startAutoSlide = () => {
    if (progressInterval.current) {
      clearTimeout(progressInterval.current);
    }
    progressInterval.current = setTimeout(() => {
      if (activeIndex >= sliderData.length - 1) {
        // If we're at the last slide, go back to first slide
        swiperRef.slickGoTo(0);
      } else {
        handleNext();
      }
    }, 6000);
  };

  useEffect(() => {
    if (isAutoPlaying && isInView) {
      startAutoSlide();
    }
    return () => {
      if (progressInterval.current) {
        clearTimeout(progressInterval.current);
      }
    };
  }, [activeIndex, isAutoPlaying, isInView]);

  // Mobile navigation logic
  const mobileIndex = Math.ceil(activeIndex);
  const isMobilePrevDisabled = mobileIndex === 0;
  const isMobileNextDisabled = mobileIndex >= sliderData.length - 1;

  return (
    <section ref={sectionRef} className="bg-[#020C22] overflow-x-hidden relative select-none pointer-events-auto">
      <div className="md:px-8 px-4 pb-[40px] md:pb-0">
        <Slider
          ref={(slider) => {
            swiperRef = slider;
          }}
          {...settings}
          afterChange={() => {
            const slides = document.querySelectorAll(
              ".construction-swiper .slick-slide"
            );

            for (let i = 0; i < slides.length; i++) {
              if (slides[i].classList.contains("slick-current")) {
                setActiveIndex(i);
                break;
              }
            }
            setIsTransitioning(false);
            // Restart auto-sliding after any slide change
            if (isAutoPlaying && isInView) {
              startAutoSlide();
            }
          }}
        >
          {sliderData.map((slide, slideIdx) => {
            const index = imageIndexes[slideIdx];
            const images = [
              slide.images[index % 3],
              slide.images[(index + 1) % 3],
              slide.images[(index + 2) % 3],
            ];

            return (
              <div key={slideIdx} className="transition-opacity duration-500">
                <div className="flex flex-row gap-[10px] md:gap-6 items-center pb-[20px] md:pb-6">
                  <div
                    className={`w-[8px] h-[8px] md:w-[20px] md:h-[20px] rounded-full border border-white ${
                      slideIdx === activeIndex ? "bg-white" : ""
                    }`}
                  />
                  <div className="h-px bg-white/20 w-[88%] relative overflow-hidden">
                    <div 
                      className={`absolute left-0 top-0 h-full bg-white transition-all duration-[6000ms] ease-linear ${
                        slideIdx === activeIndex && isInView ? 'animate-timeline' : ''
                      }`}
                      style={{
                        width: slideIdx === activeIndex && isInView ? '100%' : '0%',
                        animation: slideIdx === activeIndex && isInView ? 'timeline 6s linear forwards' : 'none'
                      }}
                    />
                  </div>
                </div>

                <div
                  className={`ml-1 md:ml-2 px-[16px] md:px-[40px] w-full border-l border-dashed border-gray-300 ${
                    slideIdx === activeIndex
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                >
                  {/* <div
                    onClick={() =>
                      slideIdx === activeIndex && cycleImage(slideIdx)
                    }
                  > */}
                    <div>
                    <h2 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[48px] text-white mb-[24px]">
                      {slide.month}
                    </h2>
                    <div className="relative h-[250px] md:h-[450px] w-[90%] md:w-[95%]">
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

                    <p className="text-[16px] font-satoshi font-[400] leading-[20px] text-white/50 pt-[50px] pb-[12px]">
                      {slide.description}
                    </p>
                    <span className="orange-color text-[16px] font-satoshi font-[400] leading-[20px]">
                      View Updates →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Desktop Navigation Arrows */}
      <div className="hidden md:flex gap-4 mt-[56px] w-full justify-center items-center">
        <div
          className={`w-[28px] h-[28px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
            activeIndex > 0 ? 'bg-white text-black' : 'bg-white/20 text-white/50 pointer-events-none'
          }`}
          onClick={() => {
            handlePrev();
          }}
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
          className={`w-[28px] h-[28px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
            activeIndex < sliderData.length - 1 ? 'bg-white text-black' : 'bg-white/20 text-white/50 pointer-events-none'
          }`}
          onClick={() => {
            handleNext();
          }}
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

      {/* Mobile Navigation */}
      <div className="relative bottom-0 flex justify-end md:hidden">
        <div className="w-[100%] md:w-[360px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around px-1 py-5">
          <div className="h-full flex items-center justify-center">
            <button
              className={`focus:outline-none cursor-pointer ${isMobilePrevDisabled ? 'opacity-30' : ''}`}
              onClick={handlePrev}
              disabled={isMobilePrevDisabled}
            >
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="Previous"
                height={20}
                width={19}
                className="invert-100 transform rotate-180"
              />
            </button>
          </div>
          <div className="flex gap-2 items-center text-[#D9D9D9]">
            {mobileIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" />{" "}
            {sliderData.length}
          </div>
          <div className="h-full flex items-center justify-center">
            <button
              className={`focus:outline-none cursor-pointer ${isMobileNextDisabled ? 'opacity-30' : ''}`}
              onClick={handleNext}
              disabled={isMobileNextDisabled}
            >
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="Next"
                height={20}
                width={19}
                className="invert-100"
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes timeline {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ConstructionSlider;
