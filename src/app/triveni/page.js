'use client';
import React from 'react'
import Image from "next/image";
import { AnimatedSection, FadeIn, SlideUp } from '@/components/animations';
import { Element } from "react-scroll";
import GangaVideoSection from '@/components/GangaVideoSection';
import GangaWaves from '@/components/GangaWaves';
import Link from 'next/link';
import TriveniSection from '@/components/TriveniSection';
import RetailCards from '@/components/RetailCards';
import CommercialCards from '@/components/CommercialCards';
import OmniplexSlider from '@/components/OmniplexSlider';
import NewTriventSliders from '@/components/NewTriventSliders';

export default function triveni() {
  return (
    <main>

        {/* Hero Section */}
        <SlideUp>
        <section className="relative justify-center bg-[#f3f6f8] flex flex-col items-center md:h-[220px] md:top-[65] h-[180px] top-[50]">
          <SlideUp delay={0.4}>
            <div className="text-center pb-4 md:pb-0">
              <span className="text-[#22252e] font-bold text-[16px]">
                • Home
              </span>
              <span className="mx-2">—</span>
              <span className="text-[#5c5f68] font-normal text-[16px]">
                Triveni Omniplex
              </span>
            </div>
          </SlideUp>
        </section>
      </SlideUp>

        <section className='no-negative-margin pb-[40px] md:pb-[80px]'>
            <SlideUp delay={0.8} className="container mx-auto">
            <div className="relative w-full md:h-[460px] h-[265px] hide-triangle">
                <Image
                    src="/assets/triveni-hero.png"
                    alt="Hero-img"
                    fill
                    priority
                    className='select-none no-drag'
                />
            </div>
            <div className="relative w-full h-[262px] none-md">
                <Image src="/assets/blue-triangle.svg" width={18} height={17} alt="img" className='absolute left-0 z-10 w-[18px] h-[18px] md:w-[65px] md:h-[65px] select-none no-drag'/>
                <Image src="/assets/tri2.svg" width={65} height={65} alt="img" className='absolute right-0 bottom-0 z-10 w-[18px] h-[18px] md:w-[65px] md:h-[65px] select-none no-drag'/>
                <Image
                    src="/assets/triveni-mobile.jpg"
                    alt="Hero-img"
                    fill
                    className=" w-full h-full select-none no-drag"
                    priority
                    />
            </div>
            <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
                <h2 className="text-center project-overview-title mobile-title max-w-[800px]">
                A gold mine for your  <span className="orange-color">brand</span>
                </h2>
            </div>
            </SlideUp>
        </section>

        {/* Triveni Omniplex */}
        <section className="relative w-full h-[274px] md:h-[800px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/omniplex.jpg')" }}>
            <div
                className="absolute inset-0"
                style={{
                background: `linear-gradient(to bottom, #B99680 0%, transparent 40%, #22252E 100%)`,
                }}
            ></div>
            <div className="absolute bottom-0 w-full text-center hide-triangle">
                <SlideUp delay={0.4}>
                    <h2 className="pb-[80px] !text-white text-[100px] leading-[120px] font-[400] !text-center font-cormorant">
                      <span className="orange-color">Triveni </span>Omniplex 
                    </h2>
                  </SlideUp>
            </div>
        </section>    
        <Element name="section-Ganga">
          {/* Ganga Video */}
          <div className="">
            <div className="relative p-5 overflow-hidden">
              <GangaWaves />
              <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
              <div className="relative container  mx-auto py-[30px] md:py-15">
                  <div className="md:p-2">
                    <SlideUp delay={0.4} className='none-md w-full flex flex-row justify-center items-center'>
                      <h2 className="pb-[20px] text-center !text-white text-[36px] leading-[44px] font-[400] !text-center font-cormorant">
                        <span className="orange-color">Triveni </span>Omniplex 
                      </h2>
                    </SlideUp>
                    <SlideUp delay={0.2} className='text-center md:text-left text-white text-[16px] md:text-[20px] leading-[20px] md:leading-[28px] font-[400] font-satoshi pb-[20px] md:pb-[16px]'>Your gateway to exponential growth</SlideUp>
                    <SlideUp delay={0.4}>
                      <p className="text-center md:text-left max-w-[1200px] w-full transforming-text font-[300] text-[24px] md:text-[56px] leading-[28px] md:leading-[72px] lg:text-[40px] lg:leading-[48px]">
                        {`Triveni Omniplex offers a complete destination for shopping, dining, entertainment, workspace and healthcare, presenting brands with a prime opportunity to grow in a rapidly developing region.`}
                      </p>
                    </SlideUp>
                  </div>
              </div>
            </div>
          </div>
        </Element>


        {/* why triveni */}
        <section className='relative'>
            <div className="text-center w-full pt-[40px] md:pt-[80px]">
                <SlideUp delay={0.4} className="project-overview-title text-center">Why  <span className="orange-color">Triveni </span></SlideUp>
            </div>
            <TriveniSection/>
        </section>

        {/* Map */}
        <section className="bg-white">
            <div className="container  mx-auto relative certification-section !bg-white pt-10 md:pt-[80px] pb-[40px]">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 md:px-8 lg:px-24">
                    <div className="max-md:col-span-2">
                        <SlideUp delay={0.4} className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px]">
                            Location <span className="orange-color">Overview</span>
                        </SlideUp>
                    </div>
                    <div className="flex items-end">
                        <SlideUp delay={0.6} className="pt-[28px] md:pt-0 text-[18px] md:text-[20px] text-[#22252E]/60 font-[400] px-[16px] md:px-0 text-center md:text-left">
                            Strategically located on G.T. Road, Mahesh, Serampore Triveni Omniplex serves as a key commercial hub between Kolkata and Hooghly, offering seamless connectivity, a 45-minute airport drive, and access to over 4,650 ready customers.                       
                        </SlideUp>
                    </div>
                </div>
            </div>
              
            <FadeIn delay={0.6} className="relative w-full h-[400px] md:h-[auto] aspect-[2/1]">
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
                      <h3 className="text-[24px] max-md:text-center md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">
                        1.54 lakh sq. ft.
                      </h3>
                      <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[27px] text-[#22252e] text-center">
                        Approx. Leasable <br/> Built-up Area
                      </p>
                    </SlideUp>
        
                    <SlideUp delay={0.4} className="flex flex-col items-center">
                      <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                        <Image
                          src="/assets/house.svg"
                          width={68}
                          height={68}
                          alt="Clubhouse"
                          className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]"
                        />
                      </div>
                      <h3 className="text-[24px] md:text-[40px] max-md:text-center font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">
                        1.32 lakh sq. ft.
                      </h3>
                      <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[28px] text-[#22252e] text-center">
                        Commercial Built-up <br/>Area
                      </p>
                    </SlideUp>
        
                    <SlideUp delay={0.6} className="flex flex-col items-center">
                      <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                        <Image
                          src="/assets/money.svg"
                          width={68}
                          height={68}
                          alt="Project Area"
                          className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]"
                        />
                      </div>
                      <h3 className="text-[24px] md:text-[40px] max-md:text-center font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">
                        35,000 sq. ft.
                      </h3>
                      <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[27px] text-[#22252e] text-center">
                        Approx. Single Floor <br/> Plate Area
                      </p>
                    </SlideUp>
        
                    <SlideUp delay={0.8} className="flex flex-col items-center">
                      <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                        <Image
                          src="/assets/car.svg"
                          width={68}
                          height={68}
                          alt="Garden and Ghat"
                          className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]"
                        />
                      </div>
                      <h3 className="text-[24px] md:text-[40px] font-satoshi max-md:text-center font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">
                        300+
                      </h3>
                      <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[28px] text-[#22252e] text-center">
                        Vehicle Parking <br/> Capacity
                      </p>
                    </SlideUp>
                  </div>
                </div>
        </section>

        {/* Retail Mix */}
        <section className='p-[5px] md:p-[60px] relative bg-[#E7EDF2] w-full'>
            <div className="bg-white pb-16 md:pb-12">
                <div className="flex justify-center">
                <SlideUp delay={0.2} className=" hidden md:block absolute md:top-7">
                          <Image
                            src="/assets/poduimLogo.png"
                            alt=""
                            width={100}
                            height={100}
                            className="responsive-image-amenities"
                          />
                </SlideUp>
                {/* responsive */}
                <div className="block md:hidden absolute -top-5">
                          <Image
                            src="/assets/clubhouselogo.png"
                            alt=""
                            width={100}
                            height={100}
                            className="responsive-image-amenities"
                          />
                </div>
            </div>
            <SlideUp delay={0.4}>
                <h1 className="relative text-[#22252E] font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center font-cormorant md:my-12 my-3 pt-10">
                    Retail Mix
                </h1>
            </SlideUp>
            <div>
                <RetailCards/>
            </div>
            </div>          
        </section>

        {/* Discover Business */}
        <AnimatedSection>
        <section className="relative w-full h-[396px] md:flex md:overflow-hidden md:mb-0 mb-15 rounded-none shadow-lg bg-[#010922]  justify-end items-end">
          {/* Text container */}
          <div className=" flex py-[59px] md:py-6 md:py-[74px] px-4 md:px-0 absolute md:container md:w-[90%] w-full justify-center md:justify-start mx-auto z-1 md:top-1/2 top-2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <h2
              className="!max-w-[586px] font-cormorant font-light text-white leading-[44px] md:leading-[72px] text-center md:text-left
                text-[36px] md:text-[56px]"
            >
              <span className="text-[#DE804B]">Discover  </span>where business meets 
              <span className="text-[#DE804B]"> lifestyle </span>, at the heart of
              <span className="text-[#DE804B]"> Serampore</span>.
            </h2>
          </div>

          {/* Image container */}
          <div className="hidden md:flex w-full md:w-[65%] h-full relative">
            <Image
              src="/assets/tower.jpg"
              alt="Ferry Ride"
              fill
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 md:bg-[linear-gradient(87.36deg,#010922_9.69%,rgba(2,12,34,0)_93.16%)]" />
          </div>
          {/* responsive */}
          <div className="md:hidden w-full md:w-1/2 h-full relative">
            <Image
              src="/assets/tower.jpg"
              alt="Ferry Ride"
              fill
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#010922_20.69%,rgba(2,12,34,0)_93.16%)]" />
          </div>
        </section>
      </AnimatedSection>

      {/* Commercial Mix */}
        <section className='p-[16px] md:pt-[60px] relative w-full'>
            <div className="bg-white pb-12 md:pb-0">
                <div className="flex justify-center mb-0">
                <SlideUp delay={0.2} className=" hidden md:block">
                          <Image
                            src="/assets/com-logo.svg"
                            alt=""
                            width={100}
                            height={100}
                            className="responsive-image-amenities"
                          />
                </SlideUp>
                {/* responsive */}
                <div className="block md:hidden absolute -top-5">
                          <Image
                            src="/assets/clubhouselogo.png"
                            alt=""
                            width={100}
                            height={100}
                            className="responsive-image-amenities"
                          />
                </div>
            </div>
            <SlideUp delay={0.4}>
                <h1 className="relative text-[#22252E] font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center font-cormorant md:my-5 my-3 mt-12">
                    Commercial Mix
                </h1>
            </SlideUp>
            <div>
                <CommercialCards/>
            </div>
            </div>          
        </section>

        {/* crafted growth */}
              <AnimatedSection>
                <section className="relative w-full h-full flex flex-col-reverse md:flex-row overflow-hidden shadow-lg bg-white rounded-none">
                  {/* Image (bottom on mobile, left on desktop) */}
                  <div className="w-full md:w-1/2 h-[300px] md:h-[396px] relative">
                    <Image
                      src="/assets/commercial.jpg"
                      alt="Ferry Ride"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute -inset-1 bg-[linear-gradient(180deg,#0a1628_9.69%,rgba(2,12,34,0)_93.16%)] md:bg-[linear-gradient(267.36deg,#0a1628_9.69%,rgba(2,12,34,0)_93.16%)]" />
                  </div>
        
                  {/* Text Content (top on mobile, right on desktop) */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center py-[60px] px-4 md:px-6 md:py-[74px] md:pr-[100px] bg-[#0a1628] text-center md:text-left">
                    <h2 className="text-[36px] md:text-[56px] font-cormorant text-white font-light leading-[40px] md:leading-[72px] mb-0 md:mb-7">
                      <span className="text-[#DE804B]">Crafted  </span>for brands that demand {""}
                      <span className="text-[#DE804B]">visibility</span>,
                      <span className="text-[#DE804B]"> scale</span>, and  
                      <span className="text-[#DE804B]"> growth</span>.
                    </h2>
                  </div>
                </section>
              </AnimatedSection>

        {/* Slider */}
        <section className='relative py-[0px] md:py-[80px]'>
          <div className='w-full none-md'>
                <h1 className="pb-[28px] project-overview-title !text-center pt-[60px] px-[16px]">Why bring your business to <span className="orange-color"> Triveni Omniplex</span></h1>
            </div>
            <OmniplexSlider/>
        </section>

        {/* Demographics & Catchment Area */}
        <section>
            <div className='container mx-auto pb-[60px] md:pb-[70px] z-[1] relative px-[16px] md:px-[0px]'>
                        {/* mission */}
                       <div className='flex flex-col justify-center items-center  pt-[60px] pb-[28px] none-md'>
                            <SlideUp delay={0.4} className="page-hero-title !text-[36px] !leading-[44px] text-center md:text-left">Demographics & <span className="orange-color">Catchment Area</span></SlideUp>
                       </div>
                        <div className='flex flex-col md:flex-row justify-between gap-[10px]'>
                            <SlideUp className='w-full'>
                                <Image src="/assets/group.svg" width={450} height={460} alt="mission" className="" />
                             </SlideUp>
                            <div className='w-full pt-[28px] md:pt-[0px]'>
                                <SlideUp delay={0.2} className="hide-triangle text-left pb-[48px] project-overview-title text-center mobile-title max-w-[800px]">Demographics & <br/> <span className="orange-color">Catchment Area</span></SlideUp>
                                <SlideUp delay={0.4} className='flex flex-row w-full items-start'>
                                    <Image src="/assets/blue-tri.svg" width={28} height={88} alt="blue triangle" className="" />
                                    <div className='bg-[#F3F6F8] p-[32px] flex flex-row gap-5 items-start mb-[16px]'>
                                        <Image src="/assets/peoples.svg" width={40} height={30} alt="house" className="mt-2" />
                                        <div className='flex flex-col items-baseline h-full'>
                                            <h2 className='text-[18px] leading-[24px] md:text-[24px] md:leading-[28px] font-satoshi font-[700]'>Key Demographics</h2>
                                            <p className='pt-[8px] max-w-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-satoshi font-[400]'>A population base of over 9.75 lakh within a 10 km radius, including Serampore and nearby towns.</p>
                                        </div>
                                    </div>
                                </SlideUp>
                                <SlideUp delay={0.6} className='md:pl-[74px] flex flex-row w-full items-end md:items-start'>
                                    <Image src="/assets/pink-tri.svg" width={28} height={88} alt="blue triangle" className="hide-triangle" />
                                    <div className='bg-[#FDF9F6] p-[32px] flex flex-row gap-5 items-start'>
                                        <Image src="/assets/people.svg" width={40} height={30} alt="house" className="mt-2" />
                                        <div className='flex flex-col items-baseline h-full'>
                                            <h2 className='text-[18px] leading-[24px] md:text-[24px] md:leading-[28px] font-satoshi font-[700]'>Catchment Area</h2>
                                            <p className='pt-[8px] max-w-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-satoshi font-[400]'>High footfall driven by local businesses, educational hubs, and major cultural festivities like Durga Puja, Mahesh Rath Yatra.</p>
                                        </div>
                                    </div>
                                    <Image src="/assets/pink-tri.svg" width={28} height={88} alt="blue triangle" className="rotate-180 none-md" />
                                </SlideUp>
                            </div>
                        </div>
                    </div>
        </section>

        {/* New Kolkata Trivent */}
        {/* Trivent */}
              <section className="bg-[#020C22]  mb-[30px] md:mb-[0px] md:pb-[0px]">
                    <div className="container mx-auto text-center w-full pb-12 pt-[60px] md:pt-[80px] pb-[20px] md:pb-[52px]">
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
                                <h2 className="text-center md:text-left font-satoshi text-[22px] md:text-[40px] leading-[28px] md:leading-[48px] font-[400] text-white">A landmark destination designed to  {""}
                                    <span className="orange-color">elevate shopping</span>, {""}
                                    <span className="orange-color">dining</span>, and {""}
                                    <span className="orange-color"> business experiences</span>.
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
                        <NewTriventSliders />
                      </AnimatedSection>
              </section>

    </main>
  )
}
