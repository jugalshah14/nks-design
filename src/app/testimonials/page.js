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
        <section className="bg-[#FDF9F6] flex flex-col text-center items-center px-0 pb-20 mb-30 md:px-14 pt-[70px] md:pt-[150px]">
          <SlideUp delay={0.4}>
            <div className="text-sm px-4 pt-6 text-center text-gray-500">
              <span className="text-black-700 font-semibold">• Home</span>
              <span className="mx-2">—</span>
              <span className="text-gray-400">Testimonials</span>
            </div>
          </SlideUp>
          <SlideUp delay={0.6} className="justify-center flex">
            <h1 className="relative md:mb-5 page-hero-title no-negative-margin select-none no-drag">
              Testimonials
            </h1>
          </SlideUp>
        </section>
      </SlideUp>
        <SlideUp delay={0.8} className="flex justify-center w-full absolute md:top-85 top-50">
          <div>
            <Image
              src="/assets/people.png"
              width={859}
              height={192}
              alt="award"
              className="img-size grayscale !w-full md:w-[859px]"
            />
          </div>
        </SlideUp>

      {/* white section */}
      <section>
        <div className="relative container mx-auto md:pt-[160px] pb-[60px] md:pb-[100px] justify-center items-center flex flex-col">
          <FadeIn
            delay={0.8}
            className="hidden md:flex items-center w-full justify-center"
          >
            <Image
              src="/assets/qt.svg"
              width={168}
              height={241}
              alt="qt"
              className="img-size absolute top-[30px] md:top-[70px]"
            />
          </FadeIn>
          <SlideUp
            delay={1}
            className="px-[16px] md:px-0 md:max-w-[948px] text-[24px] md:text-[40px] leading-[28px] md:leading-[48px] font-satoshi font-[400] md:text-center text-left"
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
