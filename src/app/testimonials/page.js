"use client";
import React from "react";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/animations";
import ReviewsSection from "@/components/ReviewsSection";

export default function Testimonials() {
  return (
    <main>
      {/* Hero Section */}
      <SlideUp>
      <section className="relative justify-center bg-[#FDF9F6] flex flex-col items-center md:h-[280px] md:top-[100] h-[180px] top-[50]">
      <SlideUp delay={0.4}>
            <div className="px-4 pt-6 text-center pb-4 md:pb-0">
              <span className="text-[#22252e] font-bold text-[20px]">
                • Home
              </span>
              <span className="mx-2">—</span>
              <span className="text-[#5c5f68] font-normal text-[20px]">
                Testimonials
              </span>
            </div>
          </SlideUp>
        </section>
      <section className="mt-9">
        <SlideUp delay={0.8}>
          <div className="container mx-auto">
            <div className="relative w-full h-[265px] md:h-[460px]">
              <Image
                src="/assets/testimonials-hero.png"
                alt="Hero-img"
                fill
                className="object-cover w-full h-full select-none no-drag"
                priority
              />
            </div>
            <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
              <h2 className="text-center project-overview-title mobile-title max-w-[800px]">
              Where Stories <span className="orange-color">Meet Homes </span>
              </h2>
            </div>
          </div>
        </SlideUp>
      </section>
      </SlideUp>

      {/* white section */}
      <section>
        <div className="relative container mx-auto md:pt-[160px] pt-[40px] pb-[60px] md:pb-[100px] justify-center items-center flex flex-col">
          <FadeIn
            delay={0.8}
            className="flex items-center w-full md:justify-center justify-end"
          >
            <Image
              src="/assets/qt.svg"
              width={168}
              height={241}
              alt="qt"
              className=" max-md:w-[43px] max-md:h-[56px] absolute top-[30px] md:top-[70px]"
            />
          </FadeIn>
          <SlideUp
            delay={1}
            className="px-[28px] md:px-0 md:max-w-[948px] text-[24px] md:text-[40px] leading-[28px] md:leading-[48px] font-satoshi font-[400] md:text-center text-left"
          >
            Our goal is to provide residents with a harmonious and enriching
            living experience, offering quality homes, vibrant amenities, and a
            strong sense of community.
          </SlideUp>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="">
        <div className="bg-[#020C22] text-center w-full pb-10 pt-[40px] md:pt-[80px] md:pb-[52px]">
          <SlideUp
            delay={0.4}
            className="md:text-center hero-section-title text-white leading-13 text-[48px] md:text-[150px] font-[400] md:leading-[150px] md:pb-[52px]"
          >
            Reviews
          </SlideUp>
        </div>
        <ReviewsSection />
      </section>
    </main>
  );
}
