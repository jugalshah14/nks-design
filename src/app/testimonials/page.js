"use client";
import React from "react";
import Image from "next/image";
import MasterplanSwiper from "@/components/MasterplanSwiper";
import BrochureSection from "@/components/BrochureCard";
import ProjectViewSlides from "@/components/ProjectViewSlides";
import SangamSliders from "@/components/SangamSliders";
import Blogs from "@/components/Blogs";
import ConstructionSlider from "@/components/ConstructionSlider";
import PastProjectSwiper from "@/components/PastProjectSwiper";
import { AnimatedSection, FadeIn, SlideUp } from "@/components/animations";

export default function MasterPlan() {
  return (
    <main>
      {/* Hero Section */}
      <SlideUp>
        <section className="bg-[#FDF9F6] flex flex-col items-center px-14 pt-[150px] padding-top">
          <SlideUp delay={0.4}>
            <div className="text-sm px-4 pt-6 text-center text-gray-500">
              <span className="text-black-700 font-semibold">• Home</span>
              <span className="mx-2">—</span>
              <span className="text-gray-400">Testimonials</span>
            </div>
          </SlideUp>
          <SlideUp delay={0.6}>
            <h1 className="relative mb-5 page-hero-title no-negative-margin select-none no-drag">
              Testimonials
            </h1>
          </SlideUp>
          <SlideUp delay={0.8}>
            <Image src="/assets/people.png" width={859} height={192} alt="award" className='img-size grayscale w-full md:w-[859]' />
          </SlideUp>
        </section>
      </SlideUp>

      {/* white section */}
      <section>
        <div className="relative container mx-auto pt-[160px] pb-[100px] justify-center items-center flex flex-col">
            <FadeIn delay={0.6} className="flex items-center w-full justify-center"><Image src="/assets/qt.svg" width={168} height={241} alt="qt" className='img-size absolute top-[70px]' /></FadeIn>
            <SlideUp delay={0.4} className="max-w-[948px] text-[40px] leading-[48px] font-satoshi font-[400] text-center">Our goal is to provide residents with a harmonious and enriching living experience, offering quality homes, vibrant amenities, and a strong sense of community.</SlideUp>
        </div>
      </section>

      
    </main>
  );
}
