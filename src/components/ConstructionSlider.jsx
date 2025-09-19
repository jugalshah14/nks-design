"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConstructionGallery from "./ConstructionGallery";

const sliderData = [
  {
    month: "July 2025",
    images: [
      { src: "/assets/july1.JPG", text: "Sangam Tower 1 Flooring Work in progress." },
      { src: "/assets/july2.JPG", text: "Sangam Tower 2 Finishing Work in progress." },
      { src: "/assets/july3.JPG", text: "Sangam Tower 3 Flooring Work in progress." },
      { src: "/assets/july4.JPG", text: "Sangam Tower 4 25th Floor Roof Casting & Flooring Work in Progress." },
      { src: "/assets/july5.JPG", text: "Sangam Tower 5 On Possession." },
      { src: "/assets/july6.JPG", text: "Sangam Tower 6 On Possession." },
      { src: "/assets/july7.JPG", text: "Sangam Tower 7 On Possession." },
      { src: "/assets/july8.JPG", text: "Sangam Tower 9 Finishing Work in progress." },
      { src: "/assets/july9.JPG", text: "Sangam Tower 10 Flooring Work in progress." },
      { src: "/assets/july10.JPG", text: "Sangam Tower 11 Flooring Work in progress." },
      { src: "/assets/july11.JPG", text: "Sangam Tower 12 Finishing Work in progress." },
      { src: "/assets/july12.JPG", text: "Sangam Tower 13 On Possession." },
      { src: "/assets/july13.JPG", text: "Sangam Tower 14 On Possession." },
      { src: "/assets/july14.JPG", text: "Sangam Tower 15 On Possession." },
      { src: "/assets/july15.JPG", text: "Sangam Tower 16 On Possession." },
      { src: "/assets/july16.JPG", text: "Triveni." },
    ],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "June 2025",
    images: [
      { src: "/assets/June/Sangam Tower 2 Completion of Flooring Work.JPG", text: "Sangam Tower 2 Completion of Flooring Work." },
      { src: "/assets/June/Sangam Tower 3 Completion of 27th Floor Roof Casting.JPG", text: "Sangam Tower 3 Completion of 27th Floor Roof Casting." },
      { src: "/assets/June/Sangam Tower 4 23rd Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 4 23rd Floor Roof Casting Work in Progress." },
      { src: "/assets/June/Sangam Tower 5 On Possession.JPG", text: "Sangam Tower 5 On Possession." },
      { src: "/assets/June/Sangam Tower 6 On Possession.JPG", text: "Sangam Tower 6 On Possession." },
      { src: "/assets/June/Sangam Tower 7 On Possession.JPG", text: "Sangam Tower 7 On Possession." },
      { src: "/assets/June/Sangam Tower 9 Finishing Work in progress.JPG", text: "Sangam Tower 9 Finishing Work in progress." },
      { src: "/assets/June/Sangam Tower 10 27th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 10 27th Floor Roof Casting Work in Progress." },
      { src: "/assets/June/Sangam Tower 11 Completion of 26th Floor Roof Casting.JPG", text: "Sangam Tower 11 Completion of 26th Floor Roof Casting." },
      { src: "/assets/June/Sangam Tower 12 On Completion of the Unit except Bathroom Fittings Work in Progress.JPG", text: "Sangam Tower 12 On Completion of the Unit except Bathroom Fittings Work in Progress." },
      { src: "/assets/June/Sangam Tower 13 On Possession.JPG", text: "Sangam Tower 13 On Possession." },
      { src: "/assets/June/Sangam Tower 14 On Possession.JPG", text: "Sangam Tower 14 On Possession." },
      { src: "/assets/June/Sangam Tower 15 On Possession.JPG", text: "Sangam Tower 15 On Possession." },
      { src: "/assets/June/Sangam Tower 16 On Possession.JPG", text: "Sangam Tower 16 On Possession." },
      { src: "/assets/June/Triveni.JPG", text: "TRIVENI." },
      
    ],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "May 2025",
    images: [
      { src: "/assets/May/Sangam Tower 1 Flooring Work in progress.JPG", text: "Sangam Tower 1 Flooring Work in progress." },
      { src: "/assets/May/Sangam Tower 2 Flooring Work in progress.JPG", text: "Sangam Tower 2 Flooring Work in progress." },
      { src: "/assets/May/Sangam Tower 3 Completion of 25th Floor Roof Casting.JPG", text: "Sangam Tower 3 Completion of 25th Floor Roof Casting." },
      { src: "/assets/May/Sangam Tower 4 20th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 4 20th Floor Roof Casting Work in Progress." },
      { src: "/assets/May/Sangam Tower 5 On Possession.JPG", text: "Sangam Tower 5 On Possession." },
      { src: "/assets/May/Sangam Tower 6 On Possession.JPG", text: "Sangam Tower 6 On Possession." },
      { src: "/assets/May/Sangam Tower 7 On Possession.JPG", text: "Sangam Tower 7 On Possession." },
      { src: "/assets/May/Sangam Tower 9 Finishing Work in progress.JPG", text: "Sangam Tower 9 Finishing Work in progress." },
      { src: "/assets/May/Sangam Tower 10 23rd Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 10 23rd Floor Roof Casting Work in Progress." },
      { src: "/assets/May/Sangam Tower 11 23rd Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 11 23rd Floor Roof Casting Work in Progress." },
      { src: "/assets/May/Sangam Tower 12 On Completion of the Unit except Bathroom Fittings Work in Progress.JPG", text: "Sangam Tower 12 On Completion of the Unit except Bathroom Fittings Work in Progress." },
      { src: "/assets/May/Sangam Tower 13 On Possession.JPG", text: "Sangam Tower 13 On Possession." },
      { src: "/assets/May/Sangam Tower 14 On Possession.JPG", text: "Sangam Tower 14 On Possession." },
      { src: "/assets/May/Sangam Tower 15 On Possession.JPG", text: "Sangam Tower 15 On Possession." },
      { src: "/assets/May/Sangam Tower 16 On Possession.JPG", text: "Sangam Tower 16 On Possession." },
      { src: "/assets/May/TRIVENI.JPG", text: "TRIVENI." },
    ],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "April 2025",
    images: [
      { src: "/assets/April/Sangam Tower 1 Flooring Work in progress.JPG", text: "Sangam Tower 1 Flooring Work in progress" },
      { src: "/assets/April/Sangam Tower 2 Flooring Work in progress.JPG", text: "Sangam Tower 2 Flooring Work in progress" },
      { src: "/assets/April/Sangam Tower 3 Completion of 22nd Floor Roof Casting.JPG", text: "Sangam Tower 3 Completion of 22nd Floor Roof Casting" },
      { src: "/assets/April/Sangam Tower 4 18th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 4 18th Floor Roof Casting Work in Progress" },
      { src: "/assets/April/Sangam Tower 5 Ready for Possession.JPG", text: "Sangam Tower 5 Ready for Possession" },
      { src: "/assets/April/Sangam Tower 6 Ready for  Possession.JPG", text: "Sangam Tower 6 Ready for  Possession" },
      { src: "/assets/April/Sangam Tower 7 Ready for  Possession.JPG", text: "Sangam Tower 7 Ready for  Possession" },
      { src: "/assets/April/Sangam Tower 9 On Completion of the Unit except Bathroom Fittings.JPG", text: "Sangam Tower 9 On Completion of the Unit except Bathroom Fittings" },
      { src: "/assets/April/Sangam Tower 10 22nd Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 10 22nd Floor Roof Casting Work in Progress" },
      { src: "/assets/April/Sangam Tower 11 20th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 11 20th Floor Roof Casting Work in ProgressSangam Tower 12 Flooring Work in progress" },
      { src: "/assets/April/Sangam Tower 12 Flooring Work in progress.JPG", text: "Sangam Tower 12 Flooring Work in progress" },
      { src: "/assets/April/Sangam Tower 13 Ready for  Possession.JPG", text: "Sangam Tower 13 Ready for  Possession" },
      { src: "/assets/April/Sangam Tower 14 Ready for  Possession.JPG", text: "Sangam Tower 14 Ready for  Possession" },
      { src: "/assets/April/Sangam Tower 15 Ready for Possession.JPG", text: "Sangam Tower 15 Ready for Possession" },
      { src: "/assets/April/Sangam Tower 16 Ready for  Possession.JPG", text: "Sangam Tower 16 Ready for  Possession" },
      { src: "/assets/April/TRIVENI.JPG", text: "TRIVENI" },
    ],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "March 2025",
    images: [
      { src: "/assets/March/Fountain.JPG", text: "Fountain" },  
      { src: "/assets/March/Podium (2).JPG", text: "Podium" },
      { src: "/assets/March/Podium (3).JPG", text: "Podium" },
      { src: "/assets/March/Podium (4).JPG", text: "Podium" },
      { src: "/assets/March/Podium.JPG", text: "Podium" },
      { src: "/assets/March/Sangam Podium Area.JPG", text: "Sangam Podium Area" },
      { src: "/assets/March/Sangam Podium Area-1.JPG", text: "Sangam Podium Area-1" },
      { src: "/assets/March/Sangam Tower 1 Flooring Work in progress.JPG", text: "Sangam Tower 1 Flooring Work in progress" },
      { src: "/assets/March/Sangam Tower 2 Flooring Work in progress.JPG", text: "Sangam Tower 2 Flooring Work in progress" },
      { src: "/assets/March/Sangam Tower 3 20th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 3 20th Floor Roof Casting Work in Progress" },
      { src: "/assets/March/Sangam Tower 4 15th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 4 15th Floor Roof Casting Work in Progress" },
      { src: "/assets/March/Sangam Tower 9 On Completion of the Unit except Bathroom Fittings.JPG", text: "Sangam Tower 9 On Completion of the Unit except Bathroom Fittings" },
      { src: "/assets/March/Sangam Tower 10 19th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 10 19th Floor Roof Casting Work in Progress" },
      { src: "/assets/March/Sangam Tower 11 18th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 11 18th Floor Roof Casting Work in Progress" },
      { src: "/assets/March/Sangam Tower 12 Flooring Work in progress.JPG", text: "Sangam Tower 12 Flooring Work in progress" },
      { src: "/assets/March/TRIVENI.JPG", text: "TRIVENI" },
    ],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "February 2025",
    images: [
      { src: "/assets/February/OVERALL SANGAM BIRD_S VIEW.JPG", text: "OVERALL SANGAM BIRD_S VIEW" },
      { src: "/assets/February/Sangam Tower 1 27th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 1 27th Floor Roof Casting Work in Progress" },
      { src: "/assets/February/Sangam Tower 2 Flooring Work in progress.JPG", text: "Sangam Tower 2 Flooring Work in progress" },
      { src: "/assets/February/Sangam Tower 3 18th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 3 18th Floor Roof Casting Work in Progress" },
      { src: "/assets/February/Sangam Tower 4 Completion of 11th Floor Roof Casting.JPG", text: "Sangam Tower 4 Completion of 11th Floor Roof Casting" },
      { src: "/assets/February/Sangam Tower 5 On Possession.JPG", text: "Sangam Tower 5 On Possession" },
      { src: "/assets/February/Sangam Tower 6 On Possession.JPG", text: "Sangam Tower 6 On Possession" },
      { src: "/assets/February/Sangam Tower 7 On Possession.JPG", text: "Sangam Tower 7 On Possession" },
      { src: "/assets/February/Sangam Tower 9 Completion of Flooring Work.JPG", text: "Sangam Tower 9 Completion of Flooring Work" },
      { src: "/assets/February/Sangam Tower 10 15th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 10 15th Floor Roof Casting Work in Progress" },
      { src: "/assets/February/Sangam Tower 11 14th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 11 14th Floor Roof Casting Work in Progress" },
      { src: "/assets/February/Sangam Tower 12 Flooring Work in progress.JPG", text: "Sangam Tower 12 Flooring Work in progress" },
      { src: "/assets/February/Sangam Tower 13 On Possession.JPG", text: "Sangam Tower 13 On Possession" },
      { src: "/assets/February/Sangam Tower 14 On Possession.JPG", text: "Sangam Tower 14 On Possession" },
      { src: "/assets/February/Sangam Tower 15 On Possession.JPG", text: "Sangam Tower 15 On Possession" },
      { src: "/assets/February/Sangam Tower 16 On Possession.JPG", text: "Sangam Tower 16 On Possession" },
    ],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "January 2025",
    images: [
      { src: "/assets/January/OVERALL SANGAM BIRD_S VIEW.JPG", text: "OVERALL SANGAM BIRD_S VIEW" },
      { src: "/assets/January/Sangam Tower 1 24th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 1 24th Floor Roof Casting Work in Progress" },
      { src: "/assets/January/Sangam Tower 2 Flooring Work in progress.JPG", text: "Sangam Tower 2 Flooring Work in progress" },
      { src: "/assets/January/Sangam Tower 3 16th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 3 16th Floor Roof Casting Work in Progress" },
      { src: "/assets/January/Sangam Tower 4 9th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 4 9th Floor Roof Casting Work in Progress" },
      { src: "/assets/January/Sangam Tower 5 Finishing Work in progress.JPG", text: "Sangam Tower 5 Finishing Work in progress" },
      { src: "/assets/January/Sangam Tower 6 On Possession.JPG", text: "Sangam Tower 6 On Possession" },
      { src: "/assets/January/Sangam Tower 7 On Possession.JPG", text: "Sangam Tower 7 On Possession" },
      { src: "/assets/January/Sangam Tower 9 Completion of Flooring Work.JPG", text: "Sangam Tower 9 Completion of Flooring Work" },
      { src: "/assets/January/Sangam Tower 10 12th Floor Roof Casting Work in Progress.JPG", text: "Sangam Tower 10 12th Floor Roof Casting Work in Progress" },
      { src: "/assets/January/Sangam Tower 11 Completion of 11th Floor Roof Casting.JPG", text: "Sangam Tower 11 Completion of 11th Floor Roof Casting" },
      { src: "/assets/January/Sangam Tower 12 Flooring Work in progress.JPG", text: "Sangam Tower 12 Flooring Work in progress" },
      { src: "/assets/January/Sangam Tower 13 On Possession.JPG", text: "Sangam Tower 13 On Possession" },
      { src: "/assets/January/Sangam Tower 14 Finishing Work in progress.JPG", text: "Sangam Tower 14 Finishing Work in progress" },
      { src: "/assets/January/Sangam Tower 15 On Possession.JPG", text: "Sangam Tower 15 On Possession" },
      { src: "/assets/January/Sangam Tower 16 On Possession.JPG", text: "Sangam Tower 16 On Possession" },
    ],
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
  // const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageIndexes, setImageIndexes] = useState(sliderData.map(() => 0));
  // const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]); // State to store selected images
  let swiperRef = useRef(null);
  let progressInterval = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // setIsAutoPlaying(true);
          } else {
            setIsInView(false);
            // setIsAutoPlaying(false);
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
    swiperRef.slickNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    swiperRef.slickPrev();
  };

  const cycleImage = (slideIndex) => {
    const newIndexes = [...imageIndexes];
    newIndexes[slideIndex] = (newIndexes[slideIndex] + 1) % 3;
    setImageIndexes(newIndexes);
  };

  const openModalWithImages = (images) => {
    setSelectedImages(images); // Set images of the clicked month to the state
    setIsModalOpen(true); // Open the modal
  };

  const mobileIndex = Math.ceil(activeIndex);
  const isMobilePrevDisabled = mobileIndex === 0;
  const isMobileNextDisabled = mobileIndex >= sliderData.length - 1;

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-[#020C22] overflow-x-hidden relative select-none pointer-events-auto"
      >
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
                        className={`absolute left-0 top-0 h-full bg-white
                      }`}
                        style={{
                          width:
                            slideIdx === activeIndex && isInView
                              ? "100%"
                              : "0%",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className={`ml-1 md:ml-2 px-[16px] md:px-[40px] w-full border-l border-dashed border-gray-300 ${
                      slideIdx === activeIndex ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    <div onClick={() => openModalWithImages(slide.images)}>
                      <h2 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[48px] text-white mb-[24px]">
                        {slide.month}
                      </h2>
                      <div className="relative h-[250px] md:h-[450px] w-[90%] md:w-[95%]">
                        {images.map((img, i) => (
                          <Image
                            key={i}
                            src={img.src}
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
                        
                      </p>
                      <span className="orange-color text-[16px] font-satoshi font-[400]  leading-[20px]">
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
        <div className="hidden md:flex justify-center mt-[56px] w-full">
          <div className="bg-[#021642] flex items-center justify-between w-[120px] h-[48px] px-4">
            <button
              id="construction-slider-prev"
              className={`focus:outline-none cursor-pointer ${
                activeIndex > 0 ? "" : "opacity-30"
              }`}
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              id="construction-slider-next"
              className={`focus:outline-none cursor-pointer ${
                activeIndex < sliderData.length - 1 ? "" : "opacity-30"
              }`}
              onClick={handleNext}
              disabled={activeIndex >= sliderData.length - 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="relative bottom-0 flex justify-end md:hidden">
          <div className="w-[100%] md:w-[360px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around px-1 py-5">
            <div className="h-full flex items-center justify-center">
              <button
                id="construction-slider-prev-mobile"
                className={`focus:outline-none cursor-pointer ${
                  isMobilePrevDisabled ? "opacity-30" : ""
                }`}
                onClick={handlePrev}
                disabled={isMobilePrevDisabled}
              >
                <Image
                  src="/assets/arrow-main.svg"
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
                id="construction-slider-next-mobile"
                className={`focus:outline-none cursor-pointer ${
                  isMobileNextDisabled ? "opacity-30" : ""
                }`}
                onClick={handleNext}
                disabled={isMobileNextDisabled}
              >
                <Image
                  src="/assets/arrow-main.svg"
                  alt="Next"
                  height={20}
                  width={19}
                  className="invert-100"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      <ConstructionGallery
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={selectedImages} // Passing the selected images for the month to the modal
      />
    </>
  );
};

export default ConstructionSlider;
