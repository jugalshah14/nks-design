"use client";
import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileSwiperNavigation from "./MobileSwiperNavigation";
import LazyIframe from "./LazyIframe";

const data = [
  {
    src: "/assets/user1.png",
    name: "Raman Singh",
    position: "Owner of flat in Serenity",
    videoUrl: "https://www.youtube.com/embed/ud9WxxZ4Ns4", // before time
  },
  {
    src: "/assets/user1.png",
    name: "Raman Singh",
    position: "Owner of flat in Serenity",
    videoUrl: "https://www.youtube.com/embed/9QBa840b6ik", // ganga view
  },
  {
    src: "/assets/user1.png",
    name: "Raman Singh",
    position: "Owner of flat in Serenity",
    videoUrl: "https://www.youtube.com/embed/UTXy2taEo2w", // brand trust
  },
  {
    src: "/assets/user1.png",
    name: "Raman Singh",
    position: "Owner of flat in Serenity",
    videoUrl: "https://www.youtube.com/embed/diVORAg3Sp0", // handover testimonial
  },
  {
    src: "/assets/user1.png",
    name: "Raman Singh",
    position: "Owner of flat in Serenity",
    videoUrl: "https://www.youtube.com/embed/uy6JwmlsYGI", // customer testimonial
  },
];

const settings = {
  className: "project-overview-swiper center",
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 1,
  speed: 600,
  dots: false,
  arrows: false,
  initialSlide: 0,
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  let swiperRef = useRef(null);

  const handleNext = () => {
    if (!swiperRef) return;
    swiperRef.slickNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    swiperRef.slickPrev();
  };

  return (
    <div className="relative max-md:mt-7 md:my-12">
      <Slider
        ref={(slider) => {
          swiperRef = slider;
        }}
        {...settings}
        afterChange={(current) => setActiveIndex(current)}
      >
        {data.map((slide, index) => (
          <div
            key={index}
            className="relative max-md:flex max-md:justify-center items-start pt-7"
          >
            <div className="testimonials-qt-center absolute md:top-10 md:left-0 h-[140px] w-[108] md:h-[241px] md:w-[186px] overflow-hidden">
              <Image
                src={"/assets/icons/qt.svg"}
                alt="Quote"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center md:items-start max-md:flex-col md:ml-32 max-md:px-5 relative z-10">
              {/* <div className='max-md:mb-2 relative min-h-[40px] min-w-[40px] md:min-h-[84px] md:min-w-[84px] overflow-hidden rounded-full md:mr-6'>
                                <Image src={slide.src} alt={slide.name} fill className='object-cover' />
                            </div> */}
              <div className="max-md:flex max-md:flex-col max-md:items-center w-full">
                {/* <h3 className="max-md:text-center text-[16px] md:text-[24px] font-satoshi font-[500] leading-6 md:leading-[33px] text-[#22252e] mb-1">{slide.name}</h3>
                                <p className="max-md:text-center text-[12px] md:text-[16px] font-satoshi font-[500] leading-5 md:leading-[22px] text-[#22252e99] mb-6">{slide.position}</p> */}
                <div className="max-md:flex max-md:justify-center w-full">
                  <LazyIframe
                    src={slide.videoUrl}
                    title={`${slide.name} testimonial`}
                    wrapperClassName=""
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <MobileSwiperNavigation
        currentIndex={activeIndex}
        totalSlides={data.length}
        onPrev={handlePrev}
        onNext={handleNext}
        isPrevDisabled={activeIndex === 0}
        isNextDisabled={activeIndex === data.length - 1}
        className="relative transform bg-white flex gap-10 items-center justify-around md:justify-end mt-9 px-1 py-5"
      />
    </div>
  );
}
