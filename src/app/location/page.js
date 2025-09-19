"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  AnimatedSection,
  FadeIn,
  SlideIn,
  SlideUp,
} from "@/components/animations";
// import TriventSliders from "@/components/TriventSliders";
import { Element } from "react-scroll";
import GangaWaves from "@/components/GangaWaves";
import SeramporeMarqueeSlides from "@/components/SeramporeMarqueeSlides";
import SeramporeSwiper from "@/components/SeramporeSwiper";
import Link from "next/link";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";

const seramporeData = [
  {
    src: "/assets/temple.png",
    icon: "/assets/icons/temple.svg",
    title: "Mahesh Temple",
    description: "350mtr away",
    backgroundImage: "/assets/mahesh-temple.png",
  },
  {
    src: "/assets/collage.png",
    icon: "/assets/icons/graduation-hat.svg",
    title: "Serampore College",
    description: "1.85km away",
    backgroundImage: "/assets/SRP-College.png",
  },
  {
    src: "/assets/hospital.png",
    icon: "/assets/icons/hospital-building.svg",
    title: "Serampore Hospital",
    description: "3.1km away",
    backgroundImage: "/assets/hospital-bg.png",
  },
  {
    src: "/assets/railwaystation.png",
    icon: "/assets/icons/railway.svg",
    title: "Serampore Railway Station",
    description: "2.5km away",
    backgroundImage: "/assets/railway-bg.png",
  },
];
export default function Location() {
  const [isModalOpens, setIsModalOpens] = useState(false);
  const handleScheduleVisit = (e) => {
    e.preventDefault();
    setIsModalOpens(true);
  };
  return (
    <>
      <main>
        {/* Hero Section */}
        <SlideUp>
        <section className="relative justify-center bg-[#FDF9F6] flex flex-col items-center md:h-[220px] md:top-[65] h-[180px] top-[50]">
          <SlideUp delay={0.4}>
            <div className="text-center pb-4 md:pb-0">
              <span className="text-[#22252e] font-bold text-[16px]">
                • Home
              </span>
              <span className="mx-2">—</span>
              <span className="text-[#5c5f68] font-normal text-[16px]">
                Location
              </span>
            </div>
          </SlideUp>
        </section>
      </SlideUp>

        <section className="">
          <SlideUp delay={0.8}>
            <div className="container mx-auto">
              <div className="relative w-full h-[265px] md:h-[460px] hidden md:block">
                <Image
                  src="/assets/location-hero.png"
                  alt="Hero-img"
                  fill
                  className="object-cover w-full h-full select-none no-drag"
                  priority
                />
              </div>
              <div className="relative w-full h-[265px] md:h-[460px] md:hidden">
                <Image
                  src="/assets/location-heroRES.png"
                  alt="Hero-img"
                  fill
                  className="object-cover w-full h-full select-none no-drag"
                  priority
                />
              </div>
              <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
                <h2 className="text-center project-overview-title mobile-title max-w-[800px]">
                  Embrace the <span className="orange-color">beauty </span>of
                  your <span className="orange-color">surroundings</span>
                </h2>
              </div>
            </div>
          </SlideUp>
        </section>

        {/* Trivent */}
        {/* <section className="bg-[#020C22]  mb-[100px] md:mb-[0px] md:pb-[80px]">
          <div className="container mx-auto text-center w-full pb-12 pt-[80px] pb-[20px] md:pb-[52px]">
            <SlideUp
              delay={0.4}
              className="text-[14px] md:text-center hero-section-title text-white leading-13 text-[48px] md:text-[100px] font-[400] md:leading-[120px] px-4"
            >
              New Kolkata <span className="orange-color">Triveni </span>
            </SlideUp>
              <SlideUp delay={0.4} className="pt-[28px] md:pt-[80px] relative flex flex-col md:flex-row items-end">
                  <div className="w-full md:w-[60%] bg-white relative">
                      <Image src="/assets/icons/tri-blue.svg" width={65} height={65} alt="triangle" className='md:right-[-10px] z-[10] absolute right-0 top-0 w-[35px] h-[35px] md:w-[70] md:h-[70px]' />
                      <Image src="/assets/trivant-header.png"  alt="trivant"  width={800} height={500} className="w-full object-cover"/>
                  </div>
                  <SlideUp delay={0.6} className="w-full md:w-[40%] bg-[#020C22] p-[20px] md:p-[40px] md:absolute md:right-[40px]">
                      <h2 className="text-center md:text-left font-satoshi text-[22px] md:text-[40px] leading-[28px] md:leading-[48px] font-[400] text-white">Make everyday living effortless with our {""}
                          <span className="orange-color">Convenience  </span>for Residence scheme.
                      </h2>
                  </SlideUp>
              </SlideUp>
          </div>
          <div className="gap-0.5 none-md px-[16px] flex flex-row justify-center items-center w-full">
            <Image src="/assets/line.svg"  alt="line"  width={100} height={1} className="!w-[100%]"/>
            <h1 className="text-center text-white w-[100%] text-[16px] leading-[20px] font-[700] font-satoshi">Attractions at<br/> Triveni</h1>
            <Image src="/assets/line.svg"  alt="line"  width={100} height={1} className="!w-[100%]"/>
          </div>
            <AnimatedSection delay={0.6} className="relative top-[50px] md:top-0 md:mt-[60px]">
              <TriventSliders />
            </AnimatedSection>
    </section> */}

        {/* Logo Cards Section */}
        {/* <section>
      <section className="container mx-auto bg-white p-[16px] md:p-[40px] flex flex-col gap-[48px] mt-[-60px]">
          <SlideUp delay={0.2} className="text-center font-satoshi text-[24px] md:text-[40px] leading-[28px] md:leading-[48px]">Soon you will also see:)</SlideUp>
          <SlideUp delay={0.4} className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 md:gap-[40px] w-full">
                  <div className="flex items-center flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                      <div className="p-[16px] md:p-[22px] rounded-full bg-[#F0F3FA] flex items-center justify-center">
                          <Image src="/assets/icons/connectivity.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                      </div>
                      <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Landscaped to perfection</p>
                  </div>
                  <div className="flex items-center flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                      <div className="p-[16px] md:p-[22px] rounded-full bg-[#FDF9F6] flex items-center justify-center">
                          <Image src="/assets/icons/residential.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                      </div>
                      <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Multiple relaxation zones</p>
                  </div>
                  <div className="flex items-center flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                      <div className="p-[16px] md:p-[22px] rounded-full custom-gradient flex items-center justify-center">
                          <Image src="/assets/icons/connectivity.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                      </div>
                      <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Fountain plaza and Amphitheater</p>
                  </div>
                  <div className="flex items-center flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                      <div className="p-[16px] md:p-[22px] rounded-full custom-gradient flex items-center justify-center">
                          <Image src="/assets/icons/area_of_project.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                      </div>
                      <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Landscaped to perfection</p>
                  </div>
                  <div className="flex items-center flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                      <div className="p-[16px] md:p-[22px] rounded-full bg-[#F0F3FA] flex items-center justify-center">
                          <Image src="/assets/icons/residential.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                      </div>
                      <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Multiple relaxation zones</p>
                  </div>
                  <div className="flex items-center flex-col md:flex-row gap-[16px] md:gap-[28px] pb-[36px] md:pb-[0px]">
                      <div className="p-[16px] md:p-[22px] rounded-full bg-[#FDF9F6] flex items-center justify-center">
                          <Image src="/assets/icons/jetty.svg" alt="icon" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px]" width={48} height={48} />
                      </div>
                      <p className="text-center md:text-left font-satoshi text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-[700]">Fountain plaza and Amphitheater</p>
                  </div>
              </div>
              
          </SlideUp>
      </section>
    </section> */}

        {/* Location Benifits */}
        <Element name="section-WhySerampore">
          <section className="bg-white max-md:pt-15">
            <div className="container  mx-auto relative certification-section !bg-white">
              <div className="grid grid-cols-2 gap-10 md:px-8 lg:px-24">
                <div className="max-md:col-span-2">
                  <SlideUp
                    delay={0.4}
                    className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px]"
                  >
                    Location <span className="orange-color">Benefits</span>
                  </SlideUp>
                </div>
                <div className="hidden md:flex items-end">
                  <SlideUp
                    delay={0.6}
                    className="text-[20px] text-[#22252E]/60 font-[400]"
                  >
                    Serampore is situated about 20 kilometers north of Kolkata,
                    providing easy access to urban amenities, job opportunities,
                    and transportation networks.
                  </SlideUp>
                </div>
              </div>
            </div>

            <SlideUp delay={0.6} className="overflow-x-hidden">
              <SeramporeSwiper data={seramporeData} />
            </SlideUp>
          </section>
        </Element>

        {/* Maps */}
        <section>
          <div className="container px-10 mx-auto md:pt-[40px]">
            <div className="text-center w-full pb-5 md:pb-12">
              <SlideUp
                delay={0.4}
                className="project-overview-title text-center"
              >
                Our <span className="orange-color">Neighbourhood</span>
              </SlideUp>
            </div>
          </div>
          <FadeIn
            delay={0.6}
            className="relative w-full md:h-[auto] h-[440px] aspect-[2/1]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7621588861452!2d88.35402567513168!3d22.737079979374972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b1d8d11144b%3A0x436932be30b5b9c2!2sNew%20Kolkata%20Sangam!5e0!3m2!1sen!2sin!4v1749182902387!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=""
            />
          </FadeIn>
        </section>

        {/* Investment Hub */}
        <div>
          <div className="relative md:p-5 overflow-hidden max-md:pb-5">
            <GangaWaves />
            <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
            <div className="max-md:px-5">
              <div className="relative md:px-8 lg:px-24 container  mx-auto max-md:pt-10 md:py-20">
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="max-md:col-span-2 md:p-2">
                    <SlideUp delay={0.4}>
                      <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px] !text-white">
                        Serampore, next <br className="max-md:hidden" />
                        <span className="orange-color">Investment hub</span>
                      </h2>
                    </SlideUp>
                    <SlideUp delay={0.6}>
                      <Link href="/location">
                        <button id="location-learn-more" className="hidden md:min-h-[4rem] min-h-[3.5rem] mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden button-primary">
                          <div className="px-6 py-3 mr-20">Learn More</div>
                          <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full ml-auto orange-color bg-[#002F52] text-lg">
                            <Image src="/assets/icons/arrow-orange.svg" alt="arrow" width={20} height={20} className="w-5 h-5" />
                          </span>
                        </button>
                      </Link>
                    </SlideUp>
                  </div>
                  <div className="max-md:mt-5 max-md:col-span-2 md:p-2 flex max-md:px-7 max-md:pb-10 gap-10 items-center">
                    <div>
                      <div className="space-y-11">
                        <SlideIn
                          delay={0.2}
                          direction="right"
                          className="flex items-center gap-9"
                        >
                          <div className="relative w-[48px] h-[48px]">
                            <Image
                              src="/assets/icons/railroad-metro.svg"
                              alt="metro"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                              Nearest Metro-station
                            </p>
                            <p className="text-[16px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                              Dakshineshwar • 37 min
                            </p>
                          </div>
                        </SlideIn>

                        <SlideIn
                          delay={0.4}
                          direction="right"
                          className="flex items-center gap-9"
                        >
                          <div className="relative w-[48px] h-[48px]">
                            <Image
                              src="/assets/icons/airport-road.svg"
                              alt="metro"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                              Nearest Airport
                            </p>
                            <p className="text-[16px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                              Airport • 45 min
                            </p>
                          </div>
                        </SlideIn>

                        <SlideIn
                          delay={0.8}
                          direction="right"
                          className="flex items-center gap-9"
                        >
                          <div className="relative w-[48px] h-[48px]">
                            <Image
                              src="/assets/icons/railroad-train.svg"
                              alt="metro"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                              Nearest Railway Station
                            </p>
                            <p className="text-[16px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                              Rishra • 11 min
                            </p>
                            <p className="text-[16px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                              Serampore • 13 min
                            </p>
                          </div>
                        </SlideIn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-[#FFFFFF] opacity-10" />
            <SeramporeMarqueeSlides />
          </div>
          <SlideUp delay={0.8}>
            <div className="flex md:hidden justify-center relative -top-7">
              <button
                id="location-schedule-visit-mobile"
                onClick={handleScheduleVisit}
                className="md:min-h-[4rem] min-h-[3.5rem] rounded-md h-full inline-flex relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium md:hidden items-center gap-2 overflow-hidden button-primary"
              >
                <div className="px-6 py-3 mr-20">
                  <span>Schedule a Visit</span>
                </div>
                <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full ml-auto orange-color bg-[#002F52] text-lg">
                  <Image src="/assets/icons/arrow-orange.svg" alt="arrow" width={20} height={20} className="w-5 h-5" />
                </span>
              </button>
            </div>
          </SlideUp>
        </div>
      </main>
      <ScheduleVisitModal
        isOpen={isModalOpens}
        onClose={() => setIsModalOpens(false)}
      />
    </>
  );
}
