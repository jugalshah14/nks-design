"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    month: "June 2023",
    images: ["/assets/const2.png", "/assets/const1.jpg", "/assets/const1.jpg"],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "April 2023",
    images: ["/assets/const2.png", "/assets/const1.jpg", "/assets/const1.jpg"],
    description: "Everybody longs for a lifestyle that relishes their body.",
  },
  {
    month: "May 2023",
    images: ["/assets/const1.jpg", "/assets/const2.png", "/assets/const1.jpg"],
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
  const [imageIndexes, setImageIndexes] = useState(sliderData.map(() => 0));
  let swiperRef = useRef(null);

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

  const handleSlideChange = (currentSlide) => {
    // Calculate the actual active index based on slidesToShow
    const slidesToShow =
      window.innerWidth >= 1024 ? 2.5 : window.innerWidth >= 768 ? 2.5 : 1;
    const activeSlide = Math.round(currentSlide * slidesToShow);
    setActiveIndex(activeSlide);
  };

  return (
    <section className="bg-[#020C22] overflow-x-hidden relative select-none pointer-events-auto">
      <div className="md:px-8 px-4 pb-[40px] md:pb-0">
        <Slider
          ref={(slider) => {
            swiperRef = slider;
          }}
          {...settings}
          beforeChange={(_, newIndex) => handleSlideChange(newIndex)}
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
                  <div className="h-px bg-white/20 w-[88%]" />
                </div>

                <div
                  className={`md:ml-2 px-[16px] md:px-[40px] w-full md:border-l md:border-dashed md:border-gray-300 ${
                    slideIdx === activeIndex
                      ? "opacity-100 cursor-pointer"
                      : "opacity-30"
                  }`}
                >
                  <div
                    onClick={() =>
                      slideIdx === activeIndex && cycleImage(slideIdx)
                    }
                  >
                    <h2 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[48px] text-white mb-[24px]">
                      {slide.month}
                    </h2>
                    <div className="relative h-[250px] md:h-[450px] w-[95%]">
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

                    <p className="text-[16px] font-[Satoshi] font-[400] leading-[20px] text-white/50 pt-[50px] pb-[12px]">
                      {slide.description}
                    </p>
                    <span className="orange-color text-[16px] font-[Satoshi] font-[400] leading-[20px]">
                      View Updates →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="relative bottom-0 flex justify-end block md:hidden">
        <div className="w-[100%] md:w-[360px] z-11 transform bg-[#021642] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around px-1 py-5">
          <div className="h-full flex items-center justify-center">
            <button
              className="focus:outline-none  cursor-pointer"
              onClick={handlePrev}
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
            {activeIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" />{" "}
            {sliderData.length}
          </div>
          <div className="h-full flex items-center justify-center">
            <button
              className="focus:outline-none cursor-pointer"
              onClick={handleNext}
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
    </section>
  );
};

export default ConstructionSlider;
