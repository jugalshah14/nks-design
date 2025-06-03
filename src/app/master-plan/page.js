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
        <section className="bg-[#FDF9F6] flex flex-col items-center px-14 pt-[150px] pb-14 padding-top">
          <SlideUp delay={0.4}>
            <div className="text-sm px-4 pt-6 text-center text-gray-500">
              <span className="text-black-700 font-semibold">• Home</span>
              <span className="mx-2">—</span>
              <span className="text-gray-400">Masterplans</span>
            </div>
          </SlideUp>
          <SlideUp delay={0.6}>
            <h1 className="relative -mb-5 page-hero-title no-negative-margin select-none no-drag">
              Masterplans
            </h1>
          </SlideUp>
        </section>
      </SlideUp>

      <section className="-mt-16 no-negative-margin">
        <SlideUp delay={0.8}>
          <div className="container mx-auto">
            <div className="relative w-full h-[265px] md:h-[460px]">
              <Image
                src="/assets/tri1.svg"
                width={65}
                height={65}
                alt="img"
                className="absolute left-0 z-10 w-[18px] h-[18px] md:w-[65px] md:h-[65px] select-none no-drag"
              />
              <Image
                src="/assets/tri2.svg"
                width={65}
                height={65}
                alt="img"
                className="absolute right-0 bottom-0 z-10 w-[18px] h-[18px] md:w-[65px] md:h-[65px] select-none no-drag"
              />
              <Image
                src="/assets/masterplan-hero.png"
                alt="Hero-img"
                fill
                className="object-cover w-full h-full select-none no-drag"
                priority
              />
            </div>
            <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
              <h2 className="text-center project-overview-title text-center mobile-title max-w-[800px]">
                Seamless living in a thoughtfully designed{" "}
                <span className="orange-color">Masterplans</span>
              </h2>
            </div>
          </div>
        </SlideUp>
      </section>

      <section>
        <div className="">
          <div className="container px-[16px] md:px-10 mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 py-[60px] md:py-20 bg-white">
            <SlideUp delay={0.2} className="flex flex-col items-center">
              <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                <Image
                  src="/assets/icons/connectivity.svg"
                  width={68}
                  height={68}
                  alt="Connectivity"
                  className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]"
                />
              </div>
              <h3 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">
                15
              </h3>
              <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[27px] text-[#22252e] text-center">
                Total Towers
              </p>
            </SlideUp>

            <SlideUp delay={0.4} className="flex flex-col items-center">
              <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                <Image
                  src="/assets/icons/residential.svg"
                  width={68}
                  height={68}
                  alt="Clubhouse"
                  className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]"
                />
              </div>
              <h3 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">
                27
              </h3>
              <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[28px] text-[#22252e] text-center">
                Highest number of <br /> Floors
              </p>
            </SlideUp>

            <SlideUp delay={0.6} className="flex flex-col items-center">
              <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                <Image
                  src="/assets/icons/area_of_project.svg"
                  width={68}
                  height={68}
                  alt="Project Area"
                  className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]"
                />
              </div>
              <h3 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">
                65+
              </h3>
              <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[27px] text-[#22252e] text-center">
                Amenities
              </p>
            </SlideUp>

            <SlideUp delay={0.8} className="flex flex-col items-center">
              <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                <Image
                  src="/assets/icons/jetty.svg"
                  width={68}
                  height={68}
                  alt="Garden and Ghat"
                  className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]"
                />
              </div>
              <h3 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">
                4
              </h3>
              <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[28px] text-[#22252e] text-center">
                Types of BHKs
              </p>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Architect Eye Section */}
      <section>
        <div className="relative certification-section pt-[40px] md:pt-20 mb-15">
          <Image
            src="/assets/Rectangl_Left.png"
            width={80}
            height={307}
            alt="Rectangle_left"
            className="absolute top-0 h-[100%] left-0 hide-triangle"
          />
          <div className="flex flex-col md:flex-row justify-between relative container mx-auto px-[16px] md:px-24 gap-[36px] md:gap-12">
            <div className="text-center md:text-left w-full md:pb-30">
              <SlideUp
                delay={0.2}
                className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2"
              >
                / Amenities
              </SlideUp>
              <SlideUp
                delay={0.4}
                className="project-overview-title text-center md:text-left"
              >
                From <br />
                <span className="orange-color"> Architect’s </span> Eye
              </SlideUp>
            </div>
            <SlideUp delay={0.6} className="flex flex-row">
              <Image
                src="/assets/Rectangle_right.png"
                width={80}
                height={307}
                alt="Rectangle_left"
                className="h-[100%] hide-triangle"
              />
              <div className="bg-white pb-0 p-[24px] md:p-12 w-full">
                <SlideUp delay={0.8} className="flex flex-row gap-8">
                  <div>
                    <Image
                      src="/assets/hafeez.svg"
                      width={60}
                      height={60}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h2 className="text-[#22252E] text-[18px] md:text-[24px] font-[700]">
                      Hafeez Contractor
                    </h2>
                    <p className="pb-0 text-[16px] text-[#5C5F68] font-[400]">
                      Architect, Alcove
                    </p>
                  </div>
                </SlideUp>
                <SlideUp
                  delay={1}
                  className="text-[16px] md:text-[20px] font-satoshi font-normal leading-[20px] md:leading-[28px] text-[#22252e] mb-2 py-[20px] md:pt-10"
                >
                  As being architect of New Kolkata, I recommend this place as
                  nice place to live. we&apos;re architecture notes. learn about
                  the systems you use everyday from the engineers who built them
                </SlideUp>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>
      <SlideUp delay={0.2} className='w-full flex justify-center items-center none-md'>
        <h1 className="text-center text-[28px] leading-[32px] font-satoshi font-[400] pb-[36px]">Primary goals<br/> we were having</h1>
      </SlideUp>
      <AnimatedSection delay={0.4}>
        <MasterplanSwiper />
      </AnimatedSection>

      {/* map section */}
      <section>
        <div className="container px-10 mx-auto">
          <div className="text-center w-full pb-12">
            <SlideUp
              delay={0.2}
              className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[20px] md:leading-[22px] text-[#22252e] mb-2"
            >
              / Magnificent
            </SlideUp>
            <SlideUp delay={0.4} className="project-overview-title text-center">
              NewKolkata’s <span className="orange-color">Masterplan</span>
            </SlideUp>
          </div>
        </div>
        <FadeIn delay={0.6} className="relative w-full h-[auto] aspect-[2/1]">
          <Image
            src="/assets/map.png"
            alt="img"
            fill
            className="object-cover select-none no-drag"
          />
        </FadeIn>
      </section>

      {/* specifications */}
      <section>
        <div className="container mx-auto py-20 gap-[37px] md:gap-12 flex flex-col">
          <div className="text-center w-full">
            <SlideUp
              delay={0.2}
              className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[20px] md:leading-[22px] text-[#22252e] mb-2"
            >
              / Magnificent
            </SlideUp>
            <SlideUp delay={0.4} className="project-overview-title text-center">
              NewKolkata’s <span className="orange-color">Specifications</span>
            </SlideUp>
          </div>
          <div>
            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-10">
              {/* Structure */}
              <SlideUp
                delay={0.6}
                className=" p-[16px] md:p-10 pt-3 md:border-l md:border-dashed md:border-gray-300"
              >
                <div className="flex flex-row md:flex-col gap-[12px] md:gap-[0px] items-center justify-center md:items-start md:justify-start">
                  <Image
                    src="/assets/icons/connectivity.svg"
                    width={68}
                    height={68}
                    alt="Connectivity"
                    className="mb-6 w-[30px] md:w-[68px] h-[30px] md:h-[68px]"
                  />
                  <h3 className="font-satoshi font-semibold text-xl mb-6">
                    Structure
                  </h3>
                </div>
                <ul className="list-disc pl-4">
                  <li>Pile Foundation for durability & stability.</li>
                  <li>Earthquake resistant RCC Superstructure.</li>
                </ul>
              </SlideUp>

              {/* Electricals */}
              <SlideUp
                delay={0.8}
                className=" p-[16px] md:p-10 pt-3 md:border-l md:border-dashed md:border-gray-300"
              >
                <div className="flex flex-row md:flex-col gap-[12px] md:gap-[0px] items-center justify-center md:items-start md:justify-start">
                  <Image
                    src="/assets/icons/connectivity.svg"
                    width={68}
                    height={68}
                    alt="Connectivity"
                    className="mb-6 w-[30px] md:w-[68px] h-[30px] md:h-[68px]"
                  />
                  <h3 className="font-satoshi font-semibold text-xl mb-6">
                    Electricals
                  </h3>
                </div>
                <ul className="list-disc pl-4">
                  <li>
                    Copper PVC coated wiring in concealed conduits with repute
                    make switches.
                  </li>
                  <li>
                    AC point, TV point & telephone socket in living/dining & all
                    bedrooms.
                  </li>
                  <li>Sufficient electrical points.</li>
                  <li>
                    Electrical points for geyser, exhaust, washing machine,
                    microwave, refrigerator, water purifier, grinder, computer,
                    mobile charging.
                  </li>
                </ul>
              </SlideUp>

              {/* Kitchen */}
              <SlideUp
                delay={1}
                className=" p-[16px] md:p-10 pt-3 md:border-l md:border-dashed md:border-gray-300"
              >
                <div className="flex flex-row md:flex-col gap-[12px] md:gap-[0px] items-center justify-center md:items-start md:justify-start">
                  <Image
                    src="/assets/icons/area_of_project.svg"
                    width={68}
                    height={68}
                    alt="Project Area"
                    className="mb-6 w-[30px] md:w-[68px] h-[30px] md:h-[68px]"
                  />
                  <h3 className="font-satoshi font-semibold text-xl mb-6">
                    Kitchen
                  </h3>
                </div>
                <ul className="list-disc pl-4">
                  <li>
                    Cuddapah counter with stainless steel sink and taps of
                    repute make.
                  </li>
                  <li>
                    Ceramic tiles dado up to 2 ft. above working platform (Size
                    – 18” X 12”).
                  </li>
                  <li>Provision for water inlet for filter.</li>
                  <li>Exhaust provision</li>
                </ul>
              </SlideUp>

              {/* Flooring */}
              <SlideUp
                delay={1.2}
                className=" p-[16px] md:p-10 pt-3 md:border-l md:border-dashed md:border-gray-300"
              >
                <div className="flex flex-row md:flex-col gap-[12px] md:gap-[0px] items-center justify-center md:items-start md:justify-start">
                  <Image
                    src="/assets/icons/connectivity.svg"
                    width={68}
                    height={68}
                    alt="Connectivity"
                    className="mb-6 w-[30px] md:w-[68px] h-[30px] md:h-[68px]"
                  />
                  <h3 className="font-satoshi font-semibold text-xl mb-6">
                    Flooring
                  </h3>
                </div>
                <ul className="list-disc pl-4">
                  <li>Ceramic tiles in all bedrooms. (Size – 16’’ X 16”)</li>
                  <li>
                    Vitrified tiles in living/dining space. (Size – 24” X 24”)
                  </li>
                  <li>
                    Anti–skid ceramic tiles in kitchen & toilets. (Size – 12” X
                    12”)
                  </li>
                  <li>
                    Ceramic Tiles in Balcony attached to bedroom, if any (Size –
                    16&quot; X 16&quot;)
                  </li>
                  <li>
                    Vitrified Mat finish tiles in Balcony attached to
                    living/dining space, if any (Size &quot; 24&quot; X
                    24&quot;)
                  </li>
                </ul>
              </SlideUp>
            </div>
          </div>
          <SlideUp delay={0.4}>
            <BrochureSection />
          </SlideUp>
        </div>
      </section>

      {/* sangam */}
      <section className="bg-[#020C22] mb-[160px] md:mb-[100px] md:mb-[0px] md:pb-[80px]">
        <div className="text-center w-full pb-12 pt-[80px] pb-[20px] md:pb-[52px]">
          <SlideUp
            delay={0.2}
            className="text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2"
          >
            / Amenities
          </SlideUp>
          <SlideUp
            delay={0.4}
            className="text-[14px] md:text-center hero-section-title text-white leading-13 text-[48px] md:text-[150px] font-[400] md:leading-[150px]"
          >
            Sangam
          </SlideUp>
        </div>
        <SlideUp delay={0.6}>
          <SangamSliders />
        </SlideUp>
      </section>

      <SlideUp
        delay={0.2}
        className="container mx-auto flex flex-row justify-center w-full md:px-[200px] md:-mt-18 group cursor-pointer transform transition-transform duration-300 hover:scale-101"
      >
        <Image
          src="/assets/faqs-detail-gif.gif"
          width={144}
          height={144}
          alt="house"
          className="img-size  md:h-[144px] md:w-[144px]"
        />
        <div
          className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center cursor-pointer"
          style={{ borderTopWidth: "1px", borderBottomWidth: "4px" }}
        >
          <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">
            Curious to see life @Alcove and world-class amenities?
          </h1>
          <Image
            src="/assets/icons/arrowlong.svg"
            alt="1BHK"
            width={40}
            height={3}
            className="absolute right-[10px] md:right-[40px]"
          />
          <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
        </div>
      </SlideUp>

      {/* Past Projects */}
      <section className="overflow-x-hidden">
        <div className="relative pt-[30px] md:pt-[100px]">
          <div className="text-center w-full">
            <SlideUp
              delay={0.2}
              className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2  pt-[20px] md:pt-[0px]"
            >
              / Amenities
            </SlideUp>
            <SlideUp delay={0.4} className="project-overview-title text-center">
              <span className="orange-color">Past</span> Projects
            </SlideUp>
          </div>
          <div className="bg-[#F5F8FA] w-full absolute h-[315px] top-120"></div>
        </div>
        <AnimatedSection>
          <PastProjectSwiper />
        </AnimatedSection>
        <FadeIn
          delay={0.4}
          className="container mx-auto flex flex-row justify-center w-full md:px-[200px] pt-0 md:pt-0 cursor-pointer"
        >
          <Image
            src="/assets/sport-gif.gif"
            width={144}
            height={144}
            alt="house"
            className="img-size md:h-[144px] md:w-[144px]"
          />
          <div
            className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center"
            style={{ borderTopWidth: "1px", borderBottomWidth: "4px" }}
          >
            <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">
              Embrace the beauty of your surroundings, know our neighbourhood
            </h1>
            <Image
              src="/assets/icons/arrowlong.svg"
              alt="1BHK"
              width={40}
              height={3}
              className="absolute right-[10px] md:right-[40px]"
            />
            <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
          </div>
        </FadeIn>
        <div></div>
      </section>

      {/* Project Overview */}
      <section className="pb-2 md:py-20 bg-white pt-[60px] md:pt-[80px]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-7 md:mb-16">
            <SlideUp
              delay={0.2}
              className="text-[14px] leading-5 md:text-[16px] font-[Satoshi] font-[400] md:leading-[22px] text-[#22252e] mb-2"
            >
              / Magnificent
            </SlideUp>
            <SlideUp delay={0.4} className="project-overview-title text-center">
              <span className="orange-color">Image</span> Gallery
            </SlideUp>
          </div>
        </div>
        <div className="container mx-auto relative">
          <AnimatedSection
            delay={0.6}
            className="relative max-md:pt-5 !overflow-visible"
          >
            <ProjectViewSlides />
          </AnimatedSection>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="relative">
        <div className="hide-triangle bg-[#F5F8FA] w-full absolute h-[374px] md:top-[-20px]"></div>
        <div className="container mx-auto  px-[16px] md:px-[0px]">
          <Blogs />
        </div>
      </section>

      {/* Construction Updates Section */}
      <section className="bg-[#020C22] md:py-[80px] pt-[40px]">
        <div className="container mx-auto">
          <div className="flex ietms-center w-full md:items-end justify-between mb-[48px]">
            <div className="w-full">
              <SlideUp
                delay={0.2}
                className="text-center md:text-start text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2"
              >
                / Amenities
              </SlideUp>
              <SlideUp
                delay={0.4}
                className="project-overview-title text-center md:text-left !text-white"
              >
                <span className="orange-color">
                  Construction <br />
                </span>
                Updates
              </SlideUp>
            </div>
            <SlideUp
              delay={0.4}
              className="hide-triangle text-[20px] md:text-[20px] font-[Satoshi] font-[400] leading-5 md:leading-[28px] text-white/50 max-w-[400px]"
            >
              Experience a world of wonder and adventure. Our podium level is a
              playground for all ages!
            </SlideUp>
          </div>
        </div>
        <AnimatedSection delay={0.6}>
          <ConstructionSlider />
        </AnimatedSection>
      </section>
    </main>
  );
}
