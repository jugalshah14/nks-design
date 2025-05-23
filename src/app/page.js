'use client';
import Amenities from "@/components/Amenities";
import AmenitiesSwiper from "@/components/AmenitiesSwiper";
import GangaWaves from "@/components/GangaWaves";
import HeroSectionWaves from "@/components/HeroSectionWaves";
import PlansSwiper from "@/components/PlansSwiper";
import PlanTypesSwiper from "@/components/PlanTypesSwiper";
import ProjectViewSlides from "@/components/ProjectViewSlides";
import RiversideLivingSwiper from "@/components/RiversideLivingSwiper";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import SeramporeMarqueeSlides from "@/components/SeramporeMarqueeSlides";
import SeramporeSwiper from "@/components/SeramporeSwiper";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="Hero_Section" className="relative h-screen">
        <Image
          className="max-md:hidden inset-0 w-full h-full object-cover"
          src="/assets/Riverview.png"
          alt="Riverside Luxury Residences"
          layout="fill"
          priority
        />
        <Image
          className="md:hidden inset-0 w-full h-full object-cover"
          src="/assets/Riverviewmobile.png"
          alt="Riverside Luxury Residences"
          layout="fill"
          priority
        />
        <div className="md:hidden hero-section-bg absolute h-[100%] w-[100%] top-0 left-0" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto">
            <p className="block md:hidden text-center text-[#F2F2F2] font-[500] text-[14px] leading-8 uppercase">have you ever imagined</p>
            <h1 className="max-md:px-9 max-md:text-center hero-section-title text-white leading-13 text-[48px] md:text-[100px] font-[400] md:leading-[100px] md:max-w-[635px]">
              Affordable Luxury by the Riverside
            </h1>
          </div>
        </div>
        <div className="inset-center absolute backdrop-blur-[20px] -bottom-[150px] md:bottom-[-60px] z-10 md:right-8 bg-[#FFFFFF33] rounded-full w-[133px] h-[133px] flex flex-col items-center justify-center">
          <p className="text-white text-[16px] font-[Satoshi] font-bold leading-[20px] text-center max-w-[93px]">
            Why Riverside Living?
          </p>
        </div>
      </section>
      <section className="relative">
        <HeroSectionWaves />
      </section>

      {/* Project Overview */}
      <section className="pb-2 pt-16 md:py-16 bg-white">
        <div className="container  mx-auto px-6">
          <div className="text-center mb-7 md:mb-16">
            <p className="text-[14px] leading-5 md:text-[16px] font-[Satoshi] font-[400] md:leading-[22px] text-[#22252e] mb-2">/ Magnificent</p>
            <h2 className="project-overview-title max-md:!text-[36px] max-md:!leading-11 max-md:font-[400] text-center">
              Project
              <span className="hidden md:inline"> overview</span>
              <span className="inline md:hidden"> View</span></h2>
          </div>
        </div>
        <div className="container  mx-auto relative mb-16">
          <div className="relative max-md:pt-5">
            <ProjectViewSlides />
          </div>
        </div>

        <div className="container  py-7 px-4 md:px-10 mx-auto grid grid-cols-2 xl:grid-cols-4 gap-8 md:py-20 bg-white">
          <div className="order-1 flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="" />
            </div>
            <h3 className="hidden md:block text-[40px] font-[Satoshi] font-[400] leading-[54px] text-[#22252e] mb-1">3 way</h3>
            <p className="hidden md:block text-[20px] font-[Satoshi] font-[400] leading-[27px] text-[#22252e] text-center">Connectivity</p>
            <p className="block md:hidden text-[18px] font-[Satoshi] font-[400] leading-6 text-[#22252e] text-center">Tallest towers of Bengal</p>
          </div>

          <div className="order-2 flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image src="/assets/icons/residential.svg" width={68} height={68} alt="Clubhouse" className="" />
            </div>
            <h3 className="hidden md:block text-[40px] font-[Satoshi] font-[400] leading-[54px] text-[#22252e] mb-1">56,000 sq.ft.</h3>
            <p className="hidden md:block text-[20px] font-[Satoshi] font-[400] leading-[28px] text-[#22252e] text-center">{`Hooghly's largest Residential Clubhouse`}</p>
            <p className="block md:hidden text-[18px] font-[Satoshi] font-[400] leading-6 text-[#22252e] text-center">Largest clubhouse in Hooghly 56,000 Sq. ft.</p>
          </div>

          <div className="order-4 md:order-3 flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image src="/assets/icons/area_of_project.svg" width={68} height={68} alt="Project Area" className="" />
            </div>
            <h3 className="hidden md:block text-[40px] font-[Satoshi] font-[400] leading-[54px] text-[#22252e] mb-1">19 acres</h3>
            <p className="hidden md:block text-[20px] font-[Satoshi] font-[400] leading-[27px] text-[#22252e] text-center">Area of Project</p>
            <p className="block md:hidden text-[18px] font-[Satoshi] font-[400] leading-6 text-[#22252e] text-center">Mini-theatre & Amphi-theatre</p>
          </div>

          <div className="order-3 md:order-4 flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image src="/assets/icons/jetty.svg" width={68} height={68} alt="Garden and Ghat" className="" />
            </div>
            <h3 className="hidden md:block text-[40px] font-[Satoshi] font-[400] leading-[54px] text-[#22252e] mb-1">50,000 sq.ft.</h3>
            <p className="hidden md:block text-[20px] font-[Satoshi] font-[400] leading-[28px] text-[#22252e] text-center">of Garden and Ghat by the Ganges</p>
            <p className="block md:hidden text-[18px] font-[Satoshi] font-[400] leading-6 text-[#22252e] text-center">Private Ganga Ghat, Ferry & Jetty Services</p>
          </div>
        </div>
      </section>

      {/* Certification Information */}
      <section className="max-md:hidden">
        <div className="relative certification-section pt-20 pb-30">
          <Image src="/assets/Rectangl_Left.png" width={80} height={307} alt="Rectangle_left" className="absolute top-0 h-[100%] left-0" />
          <Image src="/assets/Rectangle_right.png" width={80} height={307} alt="Rectangle_left" className="absolute top-0 h-[100%] right-0" />
          <div className="relative  container mx-auto px-6">
            <div className="text-center">
              <p className="text-[16px] font-[Satoshi] font-normal leading-[22px] text-[#22252e] mb-2">/ Trust</p>
              <h2 className="project-overview-title text-center"><span className="orange-color">Certified</span> by</h2>
            </div>
          </div>
        </div>
        <div className="relative -top-[45px] lg:top-[-75px] container  mx-auto grid md:grid-cols-5 gap-8">
          <div className="flex flex-col items-center">
            <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/RERA.png" fill alt="RERA Approved" className="object-scale-down" />
            </div>
            <h3 className="text-[18px] lg:text-[24px] font-[Satoshi] font-bold leading-[33px] text-[#22252e] m mt-autob-2 text-center">RERA Approved</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" className="mt-auto" />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/RERAAward.png" fill alt="RERA Approved" className="object-scale-down" />
            </div>
            <h3 className="text-[18px] lg:text-[24px] font-[Satoshi] font-bold leading-[33px] text-[#22252e] mb-2 text-center mt-auto">RERA Approved</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" className="mt-auto" />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/WBHIRA.png" fill alt="WBHIRA Approved" className="object-scale-down" />
            </div>
            <h3 className="text-[18px] lg:text-[24px] font-[Satoshi] font-bold leading-[33px] text-[#22252e] mb-2 text-center mt-auto">WBHIRA Approved</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" className="mt-auto" />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/IGBC.png" fill alt="IGBC Approved" className="object-scale-down" />
            </div>
            <h3 className="text-[18px] lg:text-[24px] font-[Satoshi] font-bold leading-[33px] text-[#22252e] mb-2 text-center mt-auto">IGBC Certified</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" className="mt-auto" />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/RERA.png" fill alt="RERA Approved" className="object-scale-down" />
            </div>
            <h3 className="text-[18px] lg:text-[24px] font-[Satoshi] font-bold leading-[33px] text-[#22252e] mb-2 text-center mt-auto">RERA Approved</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" className="mt-auto" />
          </div>
        </div>
      </section>

      <section className="relative">
        {/* Subnav with scroll spy*/}
        <ScrollSpyNav />

        <Element name="section-Amenities">
          {/* Amenities */}
          <section className="container  mx-auto mt-20">
            <div className="hidden md:grid grid-cols-2 gap-10 px-24 mb-14">
              <div className="">
                <p className="text-[16px] font-[Satoshi] font-normal leading-[22px] text-[#22252e] mb-2">/ Podium</p>
                <h2 className="project-overview-title text-[56px]">Enjoy <span className="orange-color">world-class Amenities</span> by the Ganges</h2>
              </div>
              <div className="flex items-end">
                <p className="text-[20px] font-[Satoshi] leading-[22px] text-[#22252E]">Experience a world of wonder and adventure. Our podium level is a playground for all ages!</p>
              </div>
            </div>
            <div className="block md:hidden text-center mb-7 md:mb-16 px-5">
              <p className="text-[14px] leading-5 md:text-[16px] font-[Satoshi] font-[400] md:leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
              <h2 className="project-overview-title max-md:!text-[36px] max-md:!leading-11 max-md:font-[400] text-center">
                Enjoy <span className="orange-color">World-class Amenities</span> alongside Ganga
              </h2>
            </div>
            <Amenities />
            <div className="container  mx-auto relative md:mb-16">
              <div className="hidden md:block relative">
                <div className="flex w-full h-[558px] justify-center relative">
                  <Image
                    fill
                    src="/assets/bitmap.png"
                    alt="Aerial view of Riverside Residences"
                    className="rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-center items-center bitmap absolute inset-0 rounded-lg">
                    <p className="text-[16px] font-[Satoshi] font-normal leading-[22px] text-white mb-2">/ Podium</p>
                    <h2 className="w-[50%] text-center project-overview-title !text-white text-[56px]">Elevate to <span className="orange-color">Award winning</span> Architectural Brilliance</h2>
                  </div>
                </div>
              </div>
              <div className="block md:hidden relative">
                <div className="flex w-full h-[280px] justify-center relative">
                  <Image
                    fill
                    src="/assets/bitmap.png"
                    alt="Aerial view of Riverside Residences"
                    className="object-cover"
                  />
                  <div className="plans-backdrop absolute top-0 left-0 h-[100%] w-[100%]" />
                  <div className="h-[100%] flex flex-col justify-center items-center bitmap absolute inset-0 w-[100%]">
                    <p className="text-[16px] font-[Satoshi] font-normal leading-[24px] text-white mb-2">/ Plans</p>
                    <h2 className="w-[90%] text-center project-overview-title !text-white !text-[36px] !leading-11 font-[400] !font-[IvyMode]">Largest <span className="orange-color">Clubhouse</span> in Kolkata</h2>
                  </div>
                </div>
                <div className="h-[160px] bg-[#061026]">
                  <div className="flex justify-center items-center">
                    <hr className="border-[#FFFFFF] w-[100%] opacity-20 absolute" />
                    <p className="p-2 z-1 bg-[#061026] font-[Satoshi] text-[16px] font-[700] leading-6 text-center text-white">65+ <br />World-class <br />Amenities</p>
                  </div>
                </div>
              </div>
            </div>
          </section >
          <AmenitiesSwiper />
        </Element>

        <Element name="section-Plans">
          {/* Plans Section */}
          <div className="bg-[#020C22]">
            <section className="container  mx-auto">
              <div className="relative container  mx-auto md:px-6">
                <div className="hidden md:flex text-center pt-20 flex-col justify-center items-center">
                  <p className="text-[16px] font-[Satoshi] font-normal leading-[22px] text-white mb-2">/ Plans</p>
                  <h2 className="w-[55%] project-overview-title !font-[300] text-center !text-white">The perfect sangam of <span className="orange-color">life</span> and <span className="orange-color">lifestyle</span></h2>
                </div>
                <div className="flex md:hidden text-center pt-10 flex-col justify-center items-center px-4">
                  <p className="text-[14px] font-[satoshi] font-[400] leading-[20px] text-white mb-2">/ Amenities</p>
                  <h2 className="w-[100%] project-overview-title !text-center !text-white !text-[36px] !leading-11 font-[IvyMode]">
                    {`We've got something for`} <span className="orange-color">{`Everyone's need`}</span>
                  </h2>
                </div>
              </div>
            </section>
            <PlansSwiper />
          </div>

          {/* Plans Types */}
          <section className="bg-white">
            <div className=" container mx-auto relative certification-section !bg-white pt-20">
              <div className="relative  container mx-auto">
                <div className="text-center">
                  <p className="text-[14px] font-[Satoshi] leading-[20px] md:text-[16px] md:font-[Satoshi] font-[400] md:leading-[22px] text-[#22252e] mb-2">/ Subtitle</p>
                  <h2 className="w-[100%] !text-center project-overview-title max-md:!text-[36px] max-md:!leading-11 font-[IvyMode]"><span className="orange-color">Comfortable </span>living, simplified</h2>
                </div>
                <div className="block md:hidden">
                  <PlanTypesSwiper />
                </div>
                <div className="hidden md:grid grid-cols-4 gap-4 mt-12">
                  <div className="bg-[#fdf6f2] p-5">
                    <Image src="/assets/icons/1bhk.svg" alt="1BHK" width={36} height={36} className="mb-12" />
                    <h3 className="text-[40px] font-[Satoshi] font-normal leading-[54px] text-[#22252e] mb-2">1BHK</h3>
                    <p className="text-[20px] font-[Satoshi] font-normal leading-[27px] text-[#22252eb2] mb-8">314 - 645 sq. ft.</p>
                    <a href="#" className="flex items-center gap-2 text-[16px] font-[Satoshi] font-bold leading-[22px] text-[#134c78]">
                      View
                      <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                    </a>
                  </div>
                  <div className="bg-[#fdf6f2] p-5">
                    <Image src="/assets/icons/2bhk.svg" alt="2BHK" width={36} height={36} className="mb-12" />
                    <h3 className="text-[40px] font-[Satoshi] font-normal leading-[54px] text-[#22252e] mb-2">1BHK</h3>
                    <p className="text-[20px] font-[Satoshi] font-normal leading-[27px] text-[#22252eb2] mb-8">314 - 645 sq. ft.</p>
                    <a href="#" className="flex items-center gap-2 text-[16px] font-[Satoshi] font-bold leading-[22px] text-[#134c78]">
                      View
                      <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                    </a>
                  </div>
                  <div className="bg-[#fdf6f2] p-5">
                    <Image src="/assets/icons/3bhk.svg" alt="3BHK" width={37} height={40} className="mb-12" />
                    <h3 className="text-[40px] font-[Satoshi] font-normal leading-[54px] text-[#22252e] mb-2">1BHK</h3>
                    <p className="text-[20px] font-[Satoshi] font-normal leading-[27px] text-[#22252eb2] mb-8">314 - 645 sq. ft.</p>
                    <a href="#" className="flex items-center gap-2 text-[16px] font-[Satoshi] font-bold leading-[22px] text-[#134c78]">
                      View
                      <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                    </a>
                  </div>
                  <div className="bg-[#fdf6f2] p-5">
                    <Image src="/assets/icons/4bhk.svg" alt="4BHK" width={43} height={39} className="mb-12" />
                    <h3 className="text-[40px] font-[Satoshi] font-normal leading-[54px] text-[#22252e] mb-2">1BHK</h3>
                    <p className="text-[20px] font-[Satoshi] font-normal leading-[27px] text-[#22252eb2] mb-8">314 - 645 sq. ft.</p>
                    <a href="#" className="flex items-center gap-2 text-[16px] font-[Satoshi] font-bold leading-[22px] text-[#134c78]">
                      View
                      <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:grid grid-cols-2 gap-10 px-24 mt-20">
                <div className="">
                  <p className="text-[16px] font-[Satoshi] font-normal leading-[22px] text-[#22252e] mb-2">/Why Riverside Living</p>
                  <h2 className="project-overview-title text-[56px]">
                    Discover yourself by the <span className="orange-color">sacred</span> and <span className="orange-color">tranquil rhythms</span> of the Ganges
                  </h2>
                </div>
                <div className="flex items-end">
                  <p className="text-[20px] text-[#22252E] font-[400]">Riverside living offers a tranquil environment with picturesque views alongside soothing sounds of flowing water and chirping birds, which, supported by scientific evidence, promotes relaxation, rejuvenation, and overall well-being for the mind, body, and soul. By embracing the healing power of nature, riverside living provides a harmonious lifestyle.</p>
                </div>
              </div>
              <div className="block md:hidden mt-10 text-center">
                <p className="text-[14px] font-[Satoshi] leading-[20px] md:text-[16px] md:font-[Satoshi] font-[400] md:leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
                <h2 className="w-[100%] !text-center project-overview-title max-md:!text-[36px] max-md:!leading-11 font-[IvyMode]">
                  Cherish the <span className="orange-color">benefits of Ganga</span> on your wellbeing!
                </h2>
              </div>
            </div>
            <RiversideLivingSwiper />
            <div className="md:container  mx-auto relative flex flex-col items-center max-md:py-10 max-md:mt-7 max-md:bg-[#DE804B17]">
              <div className="hidden md:block relative px-17 pt-9 pb-16 mt-4">
                <div className="absolute -left-[4.5%] top-0 w-[80%] h-[100%] bg-[#DE804B] -skew-x-12"></div>
                <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-[#020C22] skew-x-12"></div>
                <p className="relative text-[40px] font-[400] transforming-text">Take the 1st step to transforming your life</p>
              </div>
              <p className="enough-reasons-text block md:hidden font-[400] text-[24px] leading-8 w-[85%] text-center mb-8">
                Enough reasons to live by Ganges?
              </p>
              <button className="relative md:-top-7 bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden">
                <div className='px-6 py-3 mr-20'>
                  Schedule a Visit
                </div>
                <span className="px-6 py-3 text-orange-500 bg-[#002F52] text-lg">↗</span>
              </button>
            </div>
          </section>
        </Element>

        <Element name="section-Ganga">
          {/* Ganga Video */}
          <div className="md:mt-10">
            <div className="hidden md:block ">
              <div className="flex justify-center items-end p-10 relative h-[90vh] honouring_component">
                <video
                  src="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.mp4"
                  autoPlay
                  muted
                  loop
                >
                  <source src="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.mp4" type="video/mp4" />
                  <source src="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.webm" type="video/webm" />
                  <p>{`Sorry, Your Browser Doesn't Support Videos. Here's the`} <a href="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.mp4">Link to the video</a></p>
                </video>
                <div className="honouring-lightbox-overlay h-[100%] w-[100%] absolute top-0 left-0" />
                <div className="relative z-1 flex justify-center items-center flex-col">
                  <p className="text-[14px] font-[Satoshi] leading-[20px] md:text-[16px] md:font-[Satoshi] font-[400] md:leading-[22px] text-white mb-2">/ Amenities</p>
                  <h2 className="w-[100%] !text-center project-overview-title max-md:!text-[36px] max-md:!leading-11 font-[IvyMode] text-[56px] !text-white">
                    <span className="orange-color">Honouring Ganga,</span>
                    <br />
                    The mother of mankind
                  </h2>
                </div>
                <div className="absolute backdrop-blur-[20px] bottom-[35px] z-10 right-8 bg-[#FFFFFF33] rounded-full w-[79px] h-[79px] flex flex-col items-center justify-center">
                  <Image src="/assets/icons/play.svg" height={13.2} width={11.43} className='' alt="play" />
                </div>
              </div>
            </div>
            <div className="relative flex flex-col md:hidden">
              <div className="flex w-full h-[280px] justify-center relative honouring_component">
                <video
                  src="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.mp4"
                  autoPlay
                  muted
                  loop
                >
                  <source src="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.mp4" type="video/mp4" />
                  <source src="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.webm" type="video/webm" />
                  <p>{`Sorry, Your Browser Doesn't Support Videos. Here's the`} <a href="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.mp4">Link to the video</a></p>
                </video>
                <div className="honouring-lightbox-overlay-m h-[100%] w-[100%] absolute top-0 left-0" />
              </div>
              <div className="bg-[#020C22] py-8">
                <div className="h-[100%] flex flex-col justify-center items-center inset-0 w-[100%]">
                  <p className="text-[16px] font-[Satoshi] font-normal leading-[24px] text-white mb-2">/Amenities</p>
                  <h2 className="w-[90%] text-center project-overview-title !text-white !text-[36px] !leading-11 font-[400] !font-[IvyMode]"><span className="orange-color">Honouring Ganga</span> The mother of mankind</h2>
                </div>
                <div className="mt-14 flex justify-center items-center">
                  <hr className="border-[#FFFFFF] w-[100%] opacity-20 absolute" />
                  <p className="p-2 z-1 bg-[#020C22] font-[Satoshi] text-[16px] font-[700] leading-6 text-center text-white">Did you know?</p>
                </div>
                <p className="did-you-know-m w-[85%] mx-auto text-center font-[400] text-[24px] leading-7 mb-4">More than 50lacs people
                  of India supported by the freshwater of Ganga basin
                  daily!</p>
              </div>
              <button className="-top-7 mx-auto relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium inline-flex items-center gap-2 overflow-hidden">
                <div className='px-6 py-3 mr-20'>
                  Be a part of it
                </div>
                <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">↗</span>
              </button>
            </div>
            <div className="hidden md:block relative p-5 overflow-hidden">
              <GangaWaves />
              <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
              <div className="relative container  mx-auto py-15">
                <div className="grid grid-cols-3 gap-4 ">
                  <div className="col-span-2 p-2">
                    <p className="text-[20px] font-[Satoshi] font-[700] text-white mb-4">Did you know?</p>
                    <p className="w-[80%] transforming-text font-[400] text-[40px] leading-[48px]">
                      {`The Ganges River Dolphin (Platanista gangetica), also know locally as  "Susu", is one of only four freshwater dolphin species in the world and is often regarded as the ‘Tiger of the Ganges'.`}
                    </p>
                  </div>
                  <div className="p-2 flex gap-10 items-center">
                    <div className="flex gap-14 items-center">
                      <div className="flex flex-col gap-3">
                        <Image src={'/assets/icons/verticalwaves.svg'} width={15} height={15} alt="verticalwaves" className="opacity-[0.15]" />
                        <Image src={'/assets/icons/verticalwaves.svg'} width={15} height={15} alt="verticalwaves" className="opacity-[0.15]" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[20px] font-[Satoshi] font-[700] text-white mb-6">Want to Dive into Riverside Bliss?</p>
                        <button className="relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden">
                          <div className='px-6 py-3 mr-20'>
                            Schedule a Visit
                          </div>
                          <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">↗</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>

        {/* Why Serampore */}
        <Element name="section-WhySerampore">
          <section className="bg-white">
            <div className="container  mx-auto relative certification-section !bg-white pt-10 md:pt-20">
              <div className="grid grid-cols-2 gap-10 md:px-24">
                <div className="max-md:col-span-2">
                  <p className="max-md:text-center text-[14px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-[#22252e] mb-2">/ Location</p>
                  <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px]">
                    Why <br className="max-md:hidden" /><span className="orange-color">Serampore?</span>
                  </h2>
                </div>
                <div className="hidden md:flex items-end">
                  <p className="text-[20px] text-[#22252E] font-[400]">Serampore is situated about 20 kilometers north of Kolkata, providing easy access to urban amenities, job opportunities, and transportation networks.</p>
                </div>
              </div>
              <div className="relative md:mx-24 h-[280px] md:h-[400px] mt-7">
                <div className="serampore-bg-overlay max-md:block absolute top-0 left-0 h-[100%] w-[100%] z-1" />
                <Image src="/assets/seramporemap.png" fill className="object-cover" alt="serampore map" />
              </div>
            </div>

            <SeramporeSwiper />
          </section>
        </Element>
      </section>

      {/* Connectivity */}
      <div>
        <div className="relative md:p-5 overflow-hidden max-md:pb-5">
          <GangaWaves />
          <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
          <div className="max-md:px-5">
            <div className="relative md:px-24 container  mx-auto max-md:pt-10 md:py-15">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="max-md:col-span-2 md:p-2">
                  <p className="max-md:text-center text-[14px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] !text-white mb-2">/ Connectivity</p>
                  <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px] !text-white">
                    Serampore, next <br className="max-md:hidden" /><span className="orange-color">Investment hub</span>
                  </h2>
                  <button className="hidden mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden">
                    <div className='px-6 py-3 mr-20'>
                      Learn More
                    </div>
                    <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">↗</span>
                  </button>
                </div>
                <div className="max-md:mt-5 max-md:col-span-2 md:p-2 flex max-md:px-7 gap-10 items-center">
                  <div className="mb-12">
                    <div className="space-y-11">
                      <div className="flex items-center gap-9">
                        <div className="relative w-[48px] h-[48px]">
                          <Image src="/assets/icons/railroad-metro.svg" alt="metro" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Nearest Metro-station</p>
                          <p className="text-[16px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">Dakshineshwar • 12km</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-9">
                        <div className="relative w-[48px] h-[48px]">
                          <Image src="/assets/icons/airport-road.svg" alt="metro" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Nearest Airport</p>
                          <p className="text-[16px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">Airport • 21.4km</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-9">
                        <div className="relative w-[48px] h-[48px]">
                          <Image src="/assets/icons/railroad-train.svg" alt="metro" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-[12px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">Nearest Railway Station</p>
                          <p className="text-[16px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">Rishra • 1.8km</p>
                          <p className="text-[16px] md:text-[24px] font-[Satoshi] font-[400] leading-6 md:leading-[33px] text-white">Serampore • 2.4km</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#FFFFFF] opacity-10" />
          <SeramporeMarqueeSlides />
        </div>
        <div className="flex md:hidden justify-center relative -top-7">
          <button className="inline-flex relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium md:hidden items-center gap-2 overflow-hidden">
            <div className='px-6 py-3 mr-20'>
              Schedule a Visit
            </div>
            <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">↗</span>
          </button>
        </div>
      </div>


      {/*  Testimonials */}
      <section className="bg-white">
        <div className="container  mx-auto relative certification-section !bg-white pt-10 md:pt-20">
          <div className="grid grid-cols-2 gap-10 md:px-24">
            <div className="max-md:col-span-2">
              <p className="max-md:text-center text-[14px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-[#22252e] mb-2">/ Testimonials</p>
              <h2 className="hidden md:block project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px]">
                Building a <span className="orange-color">Brighter?</span><br />Tomorrow
              </h2>
              <h2 className="block md:hidden project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:text-[56px]">
                What our <span className="orange-color">customer says</span>
              </h2>
            </div>
            <div className="hidden md:flex items-end">
              <p className="text-[20px] text-[#22252E] font-[400]">Hear from Our 2800+ Happy Homebuyers</p>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Plans */}
      <div>
        <div className="relative p-5 overflow-hidden">
          <GangaWaves />
          <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
          <div className="relative md:px-24 container  mx-auto py-5 max-md:pb-15 md:py-15">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="max-md:col-span-2 md:p-2">
                <p className="max-md:text-center text-[14px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] !text-white mb-2">/ Plans</p>
                <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px] !text-white">
                  Your <span className="orange-color">Safety</span> &<br className="max-md:hidden" /> <span className="orange-color">Security</span>, Our<br className="max-md:hidden" /> Priority
                </h2>
                <button className="hidden mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden">
                  <div className='px-6 py-3 mr-20'>
                    Schedule a Visit
                  </div>
                  <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">↗</span>
                </button>
              </div>
              <div className="max-md:col-span-2 grid grid-cols-2 md:gap-x-20 gap-y-9 md:gap-y-12 mt-9 md:mt-6">
                <div className="flex flex-col items-center">
                  <Image height={68} width={68} src="/assets/icons/surveillance-cctv.svg" alt="Security Systems" className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4" />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-[Satoshi] font-[400] leading-6 md:leading-[28px] text-white text-center">
                    24 hours security systems
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image height={68} width={68} src="/assets/icons/desktop-computer.svg" alt="Monitoring Systems" className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4" />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-[Satoshi] font-[400] leading-6 md:leading-[28px] text-white text-center">
                    Central monitoring systems
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image height={68} width={68} src="/assets/icons/security-officer-gate.svg" alt="Surveillance" className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4" />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-[Satoshi] font-[400] leading-6 md:leading-[28px] text-white text-center">
                    24 hours surveillance
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image height={68} width={68} src="/assets/icons/surveillance-cctv.svg" alt="Emergency Buttons" className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4" />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-[Satoshi] font-[400] leading-6 md:leading-[28px] text-white text-center">
                    Emergency Buttons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-center relative -top-7">
          <button className="inline-flex relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium md:hidden items-center gap-2 overflow-hidden">
            <div className='px-6 py-3 mr-20'>
              Schedule a Visit
            </div>
            <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">↗</span>
          </button>
        </div>
      </div>
    </main>
  );
}
