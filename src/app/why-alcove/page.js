/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import PastProjectSwiper from "@/components/PastProjectSwiper";
import { SlideUp } from "@/components/animations";
import Link from "next/link";

export default function WhyAlcove() {
  return (
    <main>
      {/* Hero Section */}
      <SlideUp className="bg-[#F3F6F8] flex flex-col items-center px-14 pt-[150px] pb-14 padding-top">
        <SlideUp
          delay={0.4}
          className="text-sm px-4 pt-6 text-center text-gray-500 mb-2"
        >
          <span className="text-[#22252E] font-satoshi font-[700]">• Home</span>
          <span className="mx-2">—</span>
          <span className="text-gray-400">Why Alcove</span>
        </SlideUp>
        <SlideUp
          delay={0.6}
          className="relative -mb-5 page-hero-title no-negative-margin"
        >
          Why Alcove
        </SlideUp>
      </SlideUp>

      <section className="-mt-16 no-negative-margin pb-[40px] md:pb-[0px]">
        <SlideUp delay={0.8} className="container mx-auto">
          <div className="relative w-full md:h-[460px] h-[265px]">
            <Image
              src="/assets/alcove-hero.png"
              alt="Hero-img"
              fill
              priority
              className="select-none no-drag"
            />
          </div>
          <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-8 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
            <h2 className="text-center project-overview-title mobile-title max-w-[800px]">
              Where <span className="orange-color">luxury </span>meets{" "}
              <span className="orange-color">affordability </span>
            </h2>
          </div>
        </SlideUp>
      </section>

      {/* Founder's desk */}
      <section className="md:mt-[80px]">
        <div className="relative certification-section py-[48px]">
          <Image
            src="/assets/Rectangl_Left.png"
            width={80}
            height={307}
            alt="Rectangle_left"
            className="absolute top-0 !h-[100%] left-0"
          />
          <div className="flex flex-col md:flex-row justify-between relative container mx-auto gap-[12px] md:gap-[54px]">
            <div className="text-center md:text-left w-full md:pb-15">
              <SlideUp
                delay={0.2}
                className="project-overview-title text-center md:text-left !font-cormorant"
              >
                From <br />
                <span className="orange-color"> Founder’s </span>Desk
              </SlideUp>
              <SlideUp
                delay={0.4}
                className="text-[16px] md:text-[20px] font-satoshi font-normal leading-[20px] md:leading-[28px] text-[#22252e] md:mb-2 py-[16px] max-md:px-5"
              >
                Alcove Realty was founded by Shri. Amar Nath Shro . He is the
                driving force behind our commitment to excellence, innovation,
                and customer satisfaction. With decades of experience in the
                industry, he has shaped our company into what it is today. His
                passion for creating exceptional homes has led our team to
                deliver countless successful projects that have set new
                benchmarks in the industry. As a visionary leader, Shri. Amar
                Nath Shro 's expertise continues to inspire our team to push
                boundaries and exceed expectations. At Alcove Realty, we take
                pride in having him at the helm of our journey towards
                excellence and customer satisfaction
              </SlideUp>
            </div>
            <SlideUp delay={0.6} className="flex flex-row w-full">
              <Image
                src="/assets/white-triangle.svg"
                width={38}
                height={430}
                alt="Rectangle_left"
                className="pt-9 hide-triangle flex items-end"
              />
              <div className="w-full justify-center">
                <div className="relative">
                  <Image
                    src="/assets/person.png"
                    width={446}
                    height={339}
                    alt="Rectangle_left"
                    className="w-full"
                  />
                </div>
                <div className="bg-white flex flex-row gap-[10px] justify-center items-center py-[20px] md:py-0">
                  <Image
                    src="/assets/thumbnail-mobile.svg"
                    width={60}
                    height={60}
                    alt="thumbnail"
                    className="none-md"
                  />
                  <div className="md:w-full p-2">
                    <h2 className="text-center text-[#22252E] text-[18px] md:text-[24px] font-[700]">
                      Amar Nath Shroff
                    </h2>
                    <p className="text-center pb-0 text-[16px] text-[#5C5F68] font-[400]">
                      Chairman, Alcove
                    </p>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* <section className="mt-[80px] bg-[#eaf1f6] py-[40px] md:py-[80px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-[40px] md:gap-[60px] px-[16px] md:px-[80px]">
          <div className="max-w-[500px] text-center md:text-left">
            <h2 className="text-[#22252E] text-[28px] md:text-[36px] font-cormorant font-medium leading-tight">
              From <br />
              <span className="text-[#DE7D37]">Founder’s</span> Desk
            </h2>
            <p className="mt-6 text-[#22252E] text-[16px] md:text-[18px] leading-[26px] font-satoshi">
              Alcove Realty was founded by Shri. Amar Nath Shroff. He is the
              driving force behind our commitment to excellence, innovation, and
              customer satisfaction. With decades of experience in the industry,
              he has shaped our company into what it is today. His passion for
              creating exceptional homes has led our team to deliver countless
              successful projects that have set new benchmarks in the industry.
              As a visionary leader, Shri. Amar Nath Shroff's expertise
              continues to inspire our team to push boundaries and exceed
              expectations. At Alcove Realty, we take pride in having him at the
              helm of our journey towards excellence and customer satisfaction.
            </p>
          </div>
          <div className="relative max-w-[446px] w-full">
            <div className="bg-white rounded shadow-lg transform rotate-[2deg] w-full h-[339px] flex flex-col overflow-hidden">
              <div className="transform rotate-[-2deg] w-full flex-shrink-0">
                <Image
                  src="/assets/person.png"
                  alt="Amar Nath Shroff"
                  width={446}
                  height={220}
                  className="w-full h-[220px] object-cover rounded-t select-none no-drag"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center items-center flex-grow px-4 py-3">
                <h3 className="text-[#22252E] text-[18px] md:text-[20px] font-semibold text-center">
                  Amar Nath Shroff
                </h3>
                <p className="text-[#5C5F68] text-[14px] md:text-[16px] font-normal text-center">
                  Chairman, Alcove
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission and vision */}
      <section>
        <div className="container mx-auto md:pt-[149px] pb-[30px] md:pb-[70px] z-[1] relative px-[16px] md:px-[0px]">
          {/* mission */}
          <div className="flex flex-col justify-center items-center  pt-[60px] pb-[28px] none-md">
            <SlideUp
              delay={0.4}
              className="page-hero-title !text-[36px] !leading-[44px] text-center md:text-left"
            >
              Our <span className="orange-color">Mission</span>
            </SlideUp>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-[10px]">
            <SlideUp className="w-full">
              <Image
                src="/assets/mission.svg"
                width={450}
                height={460}
                alt="mission"
                className=""
              />
            </SlideUp>
            <div className="w-full pt-[28px] md:pt-[0px]">
              <SlideUp
                delay={0.2}
                className="hide-triangle text-left pb-[48px] project-overview-title text-center mobile-title max-w-[800px]"
              >
                Our <span className="orange-color">Mission </span>
              </SlideUp>
              <SlideUp delay={0.4} className="flex flex-row w-full items-start">
                <Image
                  src="/assets/blue-tri.svg"
                  width={28}
                  height={88}
                  alt="blue triangle"
                  className=""
                />
                <div className="bg-[#F3F6F8] p-[32px] flex flex-row gap-5 items-start mb-[16px]">
                  <Image
                    src="/assets/mission-icon1.svg"
                    width={40}
                    height={30}
                    alt="house"
                    className="mt-2"
                  />
                  <div className="flex flex-col items-baseline h-full">
                    <h2 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[28px] font-satoshi font-[700]">
                      Our Journey
                    </h2>
                    <p className="pt-[8px] max-w-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-satoshi font-[400]">
                      Alcove Realty! Spearheaded by its Legendary Founder Shri
                      Amar Nath Shroff, is the most renowned and trusted name in
                      the sphere of real estate. With Forty glorious years of
                      experience, this ‘3 Generation’ company towers with
                      distinction and repute at the helm of the Industry.
                    </p>
                  </div>
                </div>
              </SlideUp>
              <SlideUp
                delay={0.6}
                className="md:pl-[74px] flex flex-row w-full items-end md:items-start"
              >
                <Image
                  src="/assets/pink-tri.svg"
                  width={28}
                  height={88}
                  alt="blue triangle"
                  className="hide-triangle"
                />
                <div className="bg-[#FDF9F6] p-[32px] flex flex-row gap-5 items-start">
                  <Image
                    src="/assets/mission-icon2.svg"
                    width={40}
                    height={30}
                    alt="house"
                    className="mt-2"
                  />
                  <div className="flex flex-col items-baseline h-full">
                    <h2 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[28px] font-satoshi font-[700]">
                      What We Build
                    </h2>
                    <p className="pt-[8px] max-w-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-satoshi font-[400]">
                      Alcove Realty as one of the most well-known residential
                      property developers in Kolkata has not only created
                      residential projects but also projects for commercial and
                      mixed used purposes as well.
                    </p>
                  </div>
                </div>
                <Image
                  src="/assets/pink-tri.svg"
                  width={28}
                  height={88}
                  alt="blue triangle"
                  className="rotate-180 none-md"
                />
              </SlideUp>
            </div>
          </div>

          {/* vision */}
          <div className="flex flex-col justify-center items-center  pt-[60px] pb-[28px] none-md">
            <SlideUp
              delay={0.4}
              className="page-hero-title !text-[36px] !leading-[44px] text-center md:text-left"
            >
              Our <span className="orange-color">Vision</span>
            </SlideUp>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between gap-[10px] md:pt-[70px] items-center w-full">
            <div className="w-full pb-[28px] md:pb-[0px]">
              <SlideUp
                delay={0.4}
                className="hide-triangle text-left pb-[48px] project-overview-title text-center mobile-title max-w-[800px]"
              >
                Our <span className="orange-color">Vision </span>
              </SlideUp>
              <SlideUp delay={0.6} className="flex flex-row w-full items-start">
                <Image
                  src="/assets/blue-tri.svg"
                  width={28}
                  height={88}
                  alt="blue triangle"
                  className=""
                />
                <div className="bg-[#F3F6F8] p-[32px] flex flex-row gap-5 items-start mb-[16px]">
                  <Image
                    src="/assets/mission-icon1.svg"
                    width={40}
                    height={30}
                    alt="house"
                    className="mt-2"
                  />
                  <div className="flex flex-col items-baseline h-full">
                    <h2 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[28px] font-satoshi font-[700]">
                    How We Create Impact
                    </h2>
                    <p className="pt-[8px] max-w-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-satoshi font-[400]">
                    Alcove Realty seeks to enhance the quality of life through active community involvement in all its projects. Continually exploring new ideas and technology while retaining tradition and heritage, every project transcends the elements of style, exclusivity, elegance and safety.
                    </p>
                  </div>
                </div>
              </SlideUp>
            </div>
            <SlideUp
              delay={0.2}
              className="w-full flex justify-end pb-[28px] md:pb-[0px]"
            >
              <Image
                src="/assets/vision.svg"
                width={450}
                height={460}
                alt="mission"
                className=""
              />
            </SlideUp>
          </div>
        </div>
        <div className="relative pb-[80px]">
          <div className="absolute top-[-50px] md:top-[-170px] w-full">
            <Image
              src="/assets/bg-top.svg"
              width={180}
              height={245}
              alt="bg"
              className="img-size !w-full select-none no-drag mb-[-1px]"
            />
            <Image
              src="/assets/bg-bottom.svg"
              width={180}
              height={245}
              alt="bg"
              className="img-size !w-full select-none no-drag"
            />
          </div>
          <SlideUp
            delay={0.2}
            className="bg-[#f3f6f8] md:bg-transparent relative container mx-auto flex flex-row justify-center w-full md:px-[200px] z-[1]"
          >
            <Image
              src="/assets/sport-gif.gif"
              width={144}
              height={144}
              alt="house"
              className="img-size md:h-[144px] md:w-[144px]"
            />
            <Link
              href="/life-@-alcove"
              className="mr-[16px] md:mr-[0px] cursor-pointer bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center"
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
            </Link>
          </SlideUp>
        </div>
      </section>

      {/* Past Projects */}
      <section>
        <div className="relative">
          <div className="text-center w-full">
            <SlideUp
              delay={0.4}
              className="project-overview-title text-center md:pb-[28px]"
            >
              <span className="orange-color">Past</span> Projects
            </SlideUp>
          </div>
          <div className="bg-[#F5F8FA] w-full absolute h-[315px] top-100 md:top-95"></div>
        </div>
        <SlideUp delay={0.6}>
          <PastProjectSwiper />
        </SlideUp>
      </section>

      {/* slider */}
      {/* <section className="realtive pt-6">
        <div className="w-full flex justify-center items-center none-md">
          <h1 className="project-overview-title !text-center md:pb-[28px] md:pb-[0px] none-md py-[30px]">
            Meet The {""}
            <span className="orange-color pl-2"> Team</span>
          </h1>
        </div>
        <SlideUp delay={0.4}>
          <TeamSwiper />
        </SlideUp>
      </section> */}

      <section className="relative">
        <SlideUp
          delay={0.6}
          className="mr-[16px] md:mr-[0px] md:ml-[100px] absolute container mx-auto flex flex-row justify-center w-full md:px-[200px] z-[1]"
        >
          <Image
            src="/assets/faqs-detail-gif.gif"
            width={180}
            height={144}
            alt="house"
            className="img-size md:h-[144px] md:w-[144px]"
          />
          <Link
            href="/location"
            className="bg-white cursor-pointer relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center"
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
          </Link>
        </SlideUp>
      </section>

      {/* Blue section */}
      <section className="bg-[#020C22] py-[80px] pt-[100px] md:pt-[160px] mt-[70px] overflow-hidden px-[16px] md:px-[0px]">
        <div className="container mx-auto">
          <div className="flex ietms-center w-full md:items-end justify-between mb-[48px]">
            <div className="w-full">
              <SlideUp
                delay={0.2}
                className="project-overview-title text-center md:text-left !text-white"
              >
                <span className="orange-color">
                  Awards <br />
                </span>
                & Recognitions
              </SlideUp>
            </div>
            <SlideUp
              delay={0.4}
              className="hide-triangle text-[20px] md:text-[20px] font-satoshi font-[400] leading-5 md:leading-[28px] text-white/50 max-w-[400px]"
            >
              Experience a world of wonder and adventure. Our podium level is a
              playground for all ages!
            </SlideUp>
          </div>
          <SlideUp
            delay={0.6}
            className="flex flex-col md:flex-row w-full gap-[32px]"
          >
            <div className="relative w-full">
              <Image
                src="/assets/ar1.png"
                width={504}
                height={490}
                alt="award"
                className="w-full h-[313px] md:h-[490px] object-cover"
              />
              <div className="absolute right-0 bottom-0 p-[12px] md:p-[28px] flex flex-col gap-[12px] bg-[#020C22] justify-center">
                <h1 className="max-w-[284px] text-[18px] md:text-[24px] font-satoshi font-[700] leading-[24px] md:leading-[28px] text-white">
                Most Popular Project of the Year
                </h1>
                <p className="text-[16px] font-normal font-satoshi leading-[24px] text-white">
                  2025
                </p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-[29px]">
              <div className="w-full flex flex-row h-full">
                <Image
                  src="/assets/ar2.png"
                  width={210}
                  height={148}
                  alt="award"
                  className="img-size object-cover"
                />
                <div className="w-full p-[12px] md:p-[28px] flex flex-col gap-[12px] bg-white/5 justify-center">
                  <h1 className="text-[18px] md:text-[24px] font-satoshi font-[700] leading-[24px] md:leading-[28px] text-white">
                  Landscape Project of the Year- Residential
                  </h1>
                  <p className="text-[16px] font-satoshi font-[400] leading-[24px] text-white">
                    2025
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-row h-full">
                <Image
                  src="/assets/ar3.png"
                  width={210}
                  height={148}
                  alt="award"
                  className="img-size object-cover"
                />
                <div className="w-full p-[12px] md:p-[28px] flex flex-col gap-[12px] bg-white/5 justify-center">
                  <h1 className="text-[18px] md:text-[24px] font-satoshi font-[700] leading-[24px] md:leading-[28px] text-white">
                  Best Mid-Range Housing Projects in West Bengal 
                  </h1>
                  <p className="text-[16px] font-satoshi font-[400] leading-[24px] text-white">
                   2025
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-row h-full">
                <Image
                  src="/assets/ar4.png"
                  width={210}
                  height={148}
                  alt="award"
                  className="img-size object-cover"
                />
                <div className="w-full p-[12px] md:p-[28px] flex flex-col gap-[12px] bg-white/5 justify-center">
                  <h1 className="text-[18px] md:text-[24px] font-satoshi font-[700] leading-[24px] md:leading-[28px] text-white">
                  Excellence in Brand Customer Experience
                  </h1>
                  <p className="text-[16px] font-satoshi font-[400] leading-[24px] text-white">
                    2025
                  </p>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* <section className="overflow-x-hidden">
        <LogoSection />
      </section> */}
    </main>
  );
}
