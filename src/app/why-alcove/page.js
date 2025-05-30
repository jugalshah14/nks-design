'use client';
import React from 'react'
import Image from "next/image";
import TeamSwiper from '@/components/TeamSwiper';
import PastProjectSwiper from '@/components/PastProjectSwiper';
import LogoSection from '@/components/LogoSection';
import { SlideUp } from '@/components/animations';

export default function MasterPlan() {
  return (
    <main>

        {/* Hero Section */}
        <SlideUp className="bg-[#F3F6F8] flex flex-col items-center px-14 pt-[150px] pb-14 padding-top">
            <SlideUp delay={0.4} className="text-sm px-4 pt-6 text-center text-gray-500">
                <span className="text-black-700 font-semibold">• Home</span>
                <span className="mx-2">—</span>
                <span className="text-gray-400">Why Alcove</span>
            </SlideUp>
            <SlideUp delay={0.6} className="relative -mb-5 page-hero-title no-negative-margin">
            Why Alcove
            </SlideUp>
        </SlideUp>

        <section className='-mt-16 no-negative-margin pb-[40px] md:pb-[0px]'>
            <SlideUp delay={0.8} className="container mx-auto">
            <div className="relative w-full h-[200px] md:h-[460px]">
            <Image src="/assets/blue-triangle.svg" width={65} height={65} alt="img" className='absolute left-0 z-10 w-[35px] h-[35px] md:w-[65px] md:h-[65px] select-none no-drag'/>
            <Image src="/assets/tri2.svg" width={65} height={65} alt="img" className='absolute right-0 bottom-0 z-10 w-[35px] h-[35px] md:w-[65px] md:h-[65px] select-none no-drag'/>
            <Image
                src="/assets/alcove-hero.png"
                alt="Hero-img"
                fill
                className="object-cover w-full h-full select-none no-drag"
                priority
                />
            </div>
            <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
                <h2 className="text-center project-overview-title text-center mobile-title max-w-[800px]">
                Where <span className="orange-color">luxury </span>meets <span className="orange-color">affordability </span>
                </h2>
            </div>
            </SlideUp>
        </section>

        {/* Founder's desk */}
        <section>
            <div className="relative certification-section pt-[40px] md:pt-20">
                <Image src="/assets/Rectangl_Left.png" width={80} height={307} alt="Rectangle_left" className="absolute top-0 h-[100%] left-0" />
                <div className="flex flex-col md:flex-row justify-between relative container mx-auto px-[16px] md:px-24 gap-[12px] md:gap-[36px] md:gap-12">
                  <div className="text-center md:text-left w-full md:pb-15">
                    <p className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
                    <h2 className="project-overview-title text-center md:text-left">From <br/><span className="orange-color"> Founder’s </span>Desk</h2>
                    <p className="max-w-[409px] text-[16px] md:text-[20px] font-satoshi font-normal leading-[20px] md:leading-[28px] text-[#22252e] md:mb-2 py-[20px] md:pt-10">As being architect of New Kolkata, I recommend this place as nice place to live. we're architecture notes. learn about the systems you use everyday from the engineers who built them</p>

                  </div>
                  <div className='flex flex-row w-full items-streach'>
                    <Image src="/assets/white-triangle.svg" width={38} height={430} alt="Rectangle_left" className="pt-7 hide-triangle flex items-end" />
                    <div className='bg-white pb-0 w-full justify-center'>
                        <div className='relative'>
                            <div className='top-[100px] left-[145px] rounded-full absolute none-md p-[25px] bg-black/30 w-auto'><Image src="/assets/play-button.svg" width={10} height={10} alt="thumbnail" className="" /></div>
                            <Image src="/assets/person.png" width={446} height={330} alt="Rectangle_left" className="w-full" />
                        </div>
                        <div className='flex flex-row gap-[10px] justify-center items-center py-[20px] md:py-0'>
                            <Image src="/assets/thumbnail-mobile.svg" width={60} height={60} alt="thumbnail" className="none-md" />
                            <div className='md:w-full p-2'>
                                <h2 className='text-center text-[#22252E] text-[18px] md:text-[24px] font-[700]'>Amar Nath Shroff</h2>
                                <p className='text-center pb-0 text-[16px] text-[#5C5F68] font-[400]'>Chairman, Alcove</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>  
        </section>

        {/* Mission and vision */}
        <section>
            <div className='container mx-auto md:pt-[149px] pb-[30px] md:pb-[70px] z-[1] relative px-[16px] md:px-[0px]'>
                {/* mission */}
               <div className='flex flex-col justify-center items-center  pt-[60px] pb-[28px] none-md'>
                    <p className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
                    <h2 className="page-hero-title !text-[36px] !leading-[44px] text-center md:text-left">Our <span className="orange-color">Mission</span></h2>
               </div>
                <div className='flex flex-col md:flex-row justify-between gap-[10px]'>
                    <div className='w-full'>
                        <Image src="/assets/mission.svg" width={450} height={460} alt="mission" className="" />
                     </div>
                    <div className='w-full pt-[28px] md:pt-[0px]'>
                        <h2 className="hide-triangle text-left pb-[48px] project-overview-title text-center mobile-title max-w-[800px]">Our <span className="orange-color">Mission </span></h2>
                        <div className='flex flex-row w-full items-start'>
                            <Image src="/assets/blue-tri.svg" width={28} height={88} alt="blue triangle" className="" />
                            <div className='bg-[#F3F6F8] p-[32px] flex flex-row gap-5 items-start mb-[16px]'>
                                <Image src="/assets/mission-icon1.svg" width={40} height={30} alt="house" className="mt-2" />
                                <div className='flex flex-col items-baseline h-full'>
                                    <h2 className='text-[18px] leading-[24px] md:text-[24px] md:leading-[28px] font-satoshi font-[700]'>Mission 1</h2>
                                    <p className='pt-[8px] max-w-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-satoshi font-[400]'>To provide affordable housing options for people from all walks of life.</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:pl-[74px] flex flex-row w-full items-end md:items-start'>
                            <Image src="/assets/pink-tri.svg" width={28} height={88} alt="blue triangle" className="hide-triangle" />
                            <div className='bg-[#FDF9F6] p-[32px] flex flex-row gap-5 items-start'>
                                <Image src="/assets/mission-icon2.svg" width={40} height={30} alt="house" className="mt-2" />
                                <div className='flex flex-col items-baseline h-full'>
                                    <h2 className='text-[18px] leading-[24px] md:text-[24px] md:leading-[28px] font-satoshi font-[700]'>Mission 2</h2>
                                    <p className='pt-[8px] max-w-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-satoshi font-[400]'>To offer high-quality amenities and services that enhance residents' quality of life.</p>
                                </div>
                            </div>
                            <Image src="/assets/pink-tri.svg" width={28} height={88} alt="blue triangle" className="rotate-180 none-md" />
                        </div>
                    </div>
                </div>

                {/* vision */}
                <div className='flex flex-col justify-center items-center  pt-[60px] pb-[28px] none-md'>
                    <p className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
                    <h2 className="page-hero-title !text-[36px] !leading-[44px] text-center md:text-left">Our <span className="orange-color">Vision</span></h2>
               </div>
                <div className='flex flex-col-reverse md:flex-row justify-between gap-[10px] md:pt-[70px] items-center w-full'>
                    <div className='w-full pb-[28px] md:pb-[0px]'>
                        <h2 className="hide-triangle text-left pb-[48px] project-overview-title text-center mobile-title max-w-[800px]">Our <span className="orange-color">Vision </span></h2>
                        <div className='flex flex-row w-full items-start'>
                            <Image src="/assets/blue-tri.svg" width={28} height={88} alt="blue triangle" className="" />
                            <div className='bg-[#F3F6F8] p-[32px] flex flex-row gap-5 items-start mb-[16px]'>
                                <Image src="/assets/mission-icon1.svg" width={40} height={30} alt="house" className="mt-2" />
                                <div className='flex flex-col items-baseline h-full'>
                                    <h2 className='text-[18px] leading-[24px] md:text-[24px] md:leading-[28px] font-satoshi font-[700]'>Vision Title</h2>
                                    <p className='pt-[8px] max-w-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-satoshi font-[400]'>As being architect of New Kolkata, I recommend this place as nice place to live. we're architecture notes. learn about the systems you use everyday from the engineers who built them</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-end pb-[28px] md:pb-[0px]'>
                        <Image src="/assets/mission.svg" width={450} height={460} alt="mission" className="" />
                     </div>
                </div>
            </div>
            <div className='relative pb-[80px]'>
                <Image src="/assets/bg-top.svg" width={180} height={245} alt="bg" className='absolute img-size !w-full top-[-85px] md:top-[-180px]'/>
                <div className="bg-[#f3f6f8] md:bg-transparent relative container mx-auto flex flex-row justify-center w-full md:px-[200px] z-[1]">
                    <Image src="/assets/sport-gif.gif" width={144} height={144} alt="house" className='img-size md:h-[144px] md:w-[144px]'/>
                    <div className="mr-[16px] md:mr-[0px] bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
                        <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">Curious to see life @Alcove and world-class amenities?</h1>
                        <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[10px] md:right-[40px]"/>
                        <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
                    </div>
                </div>
                <Image src="/assets/bg-bottom.svg" width={180} height={245} alt="bg" className='absolute img-size !w-full top-[79px]'/>
            </div>
        </section>

        {/* Past Projects */}
        <section className="overflow-x-hidden">
            <div className='relative'>
                <div className="text-center w-full">
                  <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
                  <h2 className="project-overview-title text-center md:pb-[28px] md:pb-[0px]"><span className="orange-color">Past</span> Projects</h2>
                </div>
                <div className='bg-[#F5F8FA] w-full absolute h-[315px] top-110 md:top-95'></div>
            </div>
            <PastProjectSwiper/>
        </section>

        {/* slider */}
        <section className='realtive pt-6'>
            <h2 className="project-overview-title text-center md:pb-[28px] md:pb-[0px] md:none py-[30px]">Meet The <br/><span className="orange-color">Team</span></h2>
            <TeamSwiper />
            <div className="mr-[16px] md:mr-[0px] md:ml-[100px] absolute container mx-auto flex flex-row justify-center w-full md:px-[200px] z-[1]">
                <Image src="/assets/faqs-detail-gif.gif" width={180} height={144} alt="house" className='img-size md:h-[144px] md:w-[144px]' />
                <div className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
                    <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">Embrace the beauty of your surroundings, know our neighbourhood</h1>
                    <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[10px] md:right-[40px]"/>
                    <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
                </div>
            </div>
        </section>

        {/* Blue section */}
        <section className='bg-[#020C22] py-[80px] pt-[100px] md:pt-[160px] mt-[70px] overflow-hidden px-[16px] md:px-[0px]'>
            <div className="container mx-auto">
                <div className="flex ietms-center w-full md:items-end justify-between mb-[48px]">
                    <div className='w-full'>
                    <p className="text-center md:text-start text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2">/ Amenities</p>              
                    <h2 className="project-overview-title text-center md:text-left !text-white"><span className="orange-color">Awards <br/></span>& Recognitions</h2>
                    </div>
                    <p className="hide-triangle text-[20px] md:text-[20px] font-[Satoshi] font-[400] leading-5 md:leading-[28px] text-white/50 max-w-[400px]">Experience a world of wonder and adventure. Our podium level is a playground for all ages!</p>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-[32px]'>
                    <div className='relative w-full'>
                        <Image src="/assets/award.svg" width={504} height={490} alt="award" className='w-full h-[313px] md:h-[490px] object-cover' />
                        <div className='absolute right-0 bottom-0 p-[12px] md:p-[28px] flex flex-col gap-[12px] bg-[#020C22] justify-center'>
                            <h1 className='max-w-[284px] text-[18px] md:text-[24px] font-satoshi font-[600] leading-[24px] md:leading-[28px] text-white'>PropertyGuru Asia Property Awards</h1>
                            <p className='text-[16px] font-satoshi font-[400] leading-[24px] text-white'>Apr, 22</p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-[29px]'>
                        <div className='w-full flex flex-row h-full'>
                            <Image src="/assets/award1.png" width={210} height={148} alt="award" className='img-size' />
                            <div className='w-full p-[12px] md:p-[28px] flex flex-col gap-[12px] bg-white/5 justify-center'>
                                <h1 className='text-[18px] md:text-[24px] font-satoshi font-[600] leading-[24px] md:leading-[28px] text-white'>PropertyGuru Asia Property Awards</h1>
                                <p className='text-[16px] font-satoshi font-[400] leading-[24px] text-white'>Apr, 22</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row h-full'>
                            <Image src="/assets/award2.png" width={210} height={148} alt="award" className='img-size' />
                            <div className='w-full p-[12px] md:p-[28px] flex flex-col gap-[12px] bg-white/5 justify-center'>
                                <h1 className='text-[18px] md:text-[24px] font-satoshi font-[600] leading-[24px] md:leading-[28px] text-white'>PropertyGuru Asia Property Awards</h1>
                                <p className='text-[16px] font-satoshi font-[400] leading-[24px] text-white'>Apr, 22</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row h-full'>
                            <Image src="/assets/award3.png" width={210} height={148} alt="award" className='img-size' />
                            <div className='w-full p-[12px] md:p-[28px] flex flex-col gap-[12px] bg-white/5 justify-center'>
                                <h1 className='text-[18px] md:text-[24px] font-satoshi font-[600] leading-[24px] md:leading-[28px] text-white'>PropertyGuru Asia Property Awards</h1>
                                <p className='text-[16px] font-satoshi font-[400] leading-[24px] text-white'>Apr, 22</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className='overflow-x-hidden'>
        <LogoSection/>
      </section>

    </main>
  )
}
