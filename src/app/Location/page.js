"use client";
import React from "react";
import Image from "next/image";
import { AnimatedSection, FadeIn, SlideUp } from "@/components/animations";
import TriventSliders from "@/components/TriventSliders";
import { Element } from "react-scroll";
import SeramporeSwiper from "@/components/SeramporeSwiper";
import SeramporeSwiperLocation from "@/components/SeramporeSwiperLocation";
import GangaWaves from "@/components/GangaWaves";
import SeramporeMarqueeSlides from "@/components/SeramporeMarqueeSlides";

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
              <span className="text-gray-400">Location</span>
            </div>
          </SlideUp>
          <SlideUp delay={0.6}>
            <h1 className="relative -mb-5 page-hero-title no-negative-margin select-none no-drag">
              Location
            </h1>
          </SlideUp>
        </section>
      </SlideUp>

      <section className="-mt-16 no-negative-margin pb-[60px]">
        <SlideUp delay={0.8}>
          <div className="container mx-auto">
            <div className="relative w-full h-[200px] md:h-[460px]">
              <Image
                src="/assets/tri1.svg"
                width={65}
                height={65}
                alt="img"
                className="absolute left-0 z-10 w-[35px] h-[35px] md:w-[65px] md:h-[65px] select-none no-drag"
              />
              <Image
                src="/assets/tri2.svg"
                width={65}
                height={65}
                alt="img"
                className="absolute right-0 bottom-0 z-10 w-[35px] h-[35px] md:w-[65px] md:h-[65px] select-none no-drag"
              />
              <Image
                src="/assets/location-hero.png"
                alt="Hero-img"
                fill
                className="object-cover w-full h-full select-none no-drag"
                priority
              />
            </div>
            <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
              <h2 className="text-center project-overview-title text-center mobile-title max-w-[800px]">
                Embrace the{" "}
                <span className="orange-color">beauty </span>of your <span className="orange-color">surroundings </span>.
              </h2>
            </div>
          </div>
        </SlideUp>
      </section>

     {/* Trivent */}
      <section className="bg-[#020C22]  mb-[100px] md:mb-[0px] md:pb-[80px]">
            <div className="container mx-auto text-center w-full pb-12 pt-[80px] pb-[20px] md:pb-[52px]">
              <SlideUp
                delay={0.2}
                className="text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2"
              >
                / Amenities
              </SlideUp>
              <SlideUp
                delay={0.4}
                className="text-[14px] md:text-center hero-section-title text-white leading-13 text-[48px] md:text-[100px] font-[400] md:leading-[120px]"
              >
                New Kolkata <span className="orange-color">Triveni </span>
              </SlideUp>
                <SlideUp delay={0.4} className="pt-[28px] md:pt-[80px] relative flex flex-col md:flex-row items-end">
                    <div className="w-full md:w-[60%] bg-white relative">
                        <Image src="/assets/icons/tri-blue.svg" width={65} height={65} alt="triangle" className='md:right-[-10px] z-[10] absolute right-0 top-0 w-[35px] h-[35px] md:w-[70] md:h-[70px]' />
                        <Image src="/assets/trivant-header.png"  alt="trivant"  width={800} height={500} className=""/>
                    </div>
                    <SlideUp delay={0.6} className="w-full md:w-[40%] bg-[#020C22] p-[20px] md:p-[40px] md:absolute md:right-[40px]">
                        <h2 className="text-center md:text-left font-satoshi text-[22px] md:text-[40px] leading-[28px] md:leading-[48px] font-[400] text-white">Make everyday living effortless with our {""}
                            <span className="orange-color">Convenience  </span>for Residence scheme.
                        </h2>
                    </SlideUp>
                </SlideUp>
            </div>
            <div className="none-md px-[16px] flex flex-row justify-center items-center w-full">
              <Image src="/assets/line.svg"  alt="line"  width={100} height={1} className="!w-[100%]"/>
              <h1 className="text-center text-white w-[100%] text-[16px] leading-[20px] font-[700] font-satoshi">Attractions at<br/> Triveni</h1>
              <Image src="/assets/line.svg"  alt="line"  width={100} height={1} className="!w-[100%]"/>
            </div>
            <AnimatedSection delay={0.6} className="mt-[60px]">
              <TriventSliders />
            </AnimatedSection>
      </section>

      {/* Logo Cards Section */}
      <section>
        <section className="container mx-auto bg-white p-[16px] md:p-[40px] flex flex-col gap-[48px] mt-[-60px]">
            <SlideUp delay={0.2} className="text-center font-satoshi text-[24px] md:text-[40px] leading-[28px] md:leading-[48px]">Soon you will also see:)</SlideUp>
            <SlideUp delay={0.4} className="w-full">                
                <div className="grid grid-cols-2 md:grid-cols-3 md:gap-[40px] w-full">
                    {/* Card 1 */}
                    <div className="flex items-center flex flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                        <div className="p-[16px] md:p-[22px] rounded-full bg-[#F0F3FA] flex items-center justify-center">
                            <Image src="/assets/icons/connectivity.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                        </div>
                        <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Landscaped to perfection</p>
                    </div> 
                    {/* Card 2 */}
                    <div className="flex items-center flex flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                        <div className="p-[16px] md:p-[22px] rounded-full bg-[#FDF9F6] flex items-center justify-center">
                            <Image src="/assets/icons/residential.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                        </div>
                        <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Multiple relaxation zones</p>
                    </div> 
                    {/* Card 3 */}
                    <div className="flex items-center flex flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                        <div className="p-[16px] md:p-[22px] rounded-full custom-gradient flex items-center justify-center">
                            <Image src="/assets/icons/connectivity.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                        </div>
                        <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Fountain plaza and Amphitheater</p>
                    </div> 
                    {/* Card 4 */}
                    <div className="flex items-center flex flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                        <div className="p-[16px] md:p-[22px] rounded-full custom-gradient flex items-center justify-center">
                            <Image src="/assets/icons/area_of_project.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                        </div>
                        <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Landscaped to perfection</p>
                    </div> 
                    {/* Card 5 */}
                    <div className="flex items-center flex flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                        <div className="p-[16px] md:p-[22px] rounded-full bg-[#F0F3FA] flex items-center justify-center">
                            <Image src="/assets/icons/residential.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                        </div>
                        <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Multiple relaxation zones</p>
                    </div> 
                    {/* Card 6 */}
                    <div className="flex items-center flex flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                        <div className="p-[16px] md:p-[22px] rounded-full bg-[#FDF9F6] flex items-center justify-center">
                            <Image src="/assets/icons/jetty.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                        </div>
                        <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Fountain plaza and Amphitheater</p>
                    </div>       
                </div>
                
            </SlideUp>
        </section>
      </section>

      {/* Location Benifits */}
      <Element name="section-WhySerampore">
                <section className="bg-white">
                  <div className="container  mx-auto relative certification-section !bg-white pt-10 md:pt-20">
                    <div className="grid grid-cols-2 gap-10 md:px-8 lg:px-24">
                      <div className="max-md:col-span-2">
                        <SlideUp delay={0.2} className="max-md:text-center text-[14px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-[#22252e] mb-2">
                          / Location
                        </SlideUp>
                        <SlideUp delay={0.4} className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px]">
                          Location <span className="orange-color">Benefits</span>
                        </SlideUp>
                      </div>
                      <div className="hidden md:flex items-end">
                        <SlideUp delay={0.6} className="text-[20px] text-[#22252E] font-[400]">
                          Serampore is situated about 20 kilometers north of Kolkata, providing easy access to urban amenities, job opportunities, and transportation networks.
                        </SlideUp>
                      </div>
                    </div>
                    <SlideUp delay={0.8} className="relative md:mx-24 h-[280px] md:h-[400px] mt-7">
                      <div className="serampore-bg-overlay max-md:block absolute top-0 left-0 h-[100%] w-[100%] z-1" />
                      <Image
                        src="/assets/seramporemap.png"
                        fill
                        className="object-cover"
                        alt="serampore map"
                      />
                    </SlideUp>
                  </div>
      
                  <SlideUp delay={0.6}>
                    <SeramporeSwiperLocation />
                  </SlideUp>
                </section>
      </Element>

        {/* Maps */}
        <section>
            <div className="container px-10 mx-auto pt-[40px]">
                <div className="text-center w-full pb-12">
                    <SlideUp
                      delay={0.2}
                      className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[20px] md:leading-[22px] text-[#22252e] mb-2"
                    >
                      / Magnificent
                    </SlideUp>
                    <SlideUp delay={0.4} className="project-overview-title text-center">
                      Our <span className="orange-color">Neighbourhood</span>
                    </SlideUp>
                </div>
            </div>
            <FadeIn delay={0.6} className="relative w-full h-[auto] aspect-[2/1]">
                <Image
                    src="/assets/loc-mapp.png"
                    alt="img"
                    fill
                    className="select-none no-drag"
                />
            </FadeIn>
        </section>

        {/* Investment Hub */}
        <div>
        <div className="relative md:p-5 overflow-hidden max-md:pb-5">
          <GangaWaves />
          <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
          <div className="max-md:px-5">
            <SlideUp delay={0.2} className="relative md:px-8 lg:px-24 container  mx-auto max-md:pt-10 md:py-15">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="max-md:col-span-2 md:p-2">
                  <p className="max-md:text-center text-[14px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] !text-white mb-2">
                    / Connectivity
                  </p>
                  <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px] !text-white">
                    Serampore, next <br className="max-md:hidden" />
                    <span className="orange-color">Investment hub</span>
                  </h2>
                  <button className="hidden mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden button-primary">
                    <div className="px-6 py-3 mr-20">Learn More</div>
                    <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">
                      ↗
                    </span>
                  </button>
                </div>
                <div className="max-md:mt-5 max-md:col-span-2 md:p-2 flex max-md:px-7 gap-10 items-center">
                  <div className="mb-12">
                    <div className="space-y-11">
                      <div className="flex items-center gap-9">
                        <div className="relative w-[48px] h-[48px]">
                          <Image
                            src="/assets/icons/railroad-metro.svg"
                            alt="metro"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                            Nearest Metro-station
                          </p>
                          <p className="text-[16px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">
                            Dakshineshwar • 12km
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-9">
                        <div className="relative w-[48px] h-[48px]">
                          <Image
                            src="/assets/icons/airport-road.svg"
                            alt="metro"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                            Nearest Airport
                          </p>
                          <p className="text-[16px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">
                            Airport • 21.4km
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-9">
                        <div className="relative w-[48px] h-[48px]">
                          <Image
                            src="/assets/icons/railroad-train.svg"
                            alt="metro"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                            Nearest Railway Station
                          </p>
                          <p className="text-[16px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">
                            Rishra • 1.8km
                          </p>
                          <p className="text-[16px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">
                            Serampore • 2.4km
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
          <hr className="border-[#FFFFFF] opacity-10" />
          <SeramporeMarqueeSlides />
        </div>
        <div className="flex md:hidden justify-center relative -top-7">
          <button className="inline-flex relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium md:hidden items-center gap-2 overflow-hidden button-primary">
            <div className="px-6 py-3 mr-20">
              <span>Schedule a Visit</span>
            </div>
            <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">
              ↗
            </span>
          </button>
        </div>
      </div>

    
    </main>
  );
}
