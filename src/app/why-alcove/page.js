import React from 'react'
import Image from "next/image";
import MasterplanSwiper from '@/components/MasterplanSwiper';
import BrochureSection from '@/components/BrochureCard';
import ProjectViewSlides from '@/components/ProjectViewSlides';
import SangamSliders from '@/components/SangamSliders';
import ProjectSwiper from '@/components/ProjectSwiper';
import Blogs from '@/components/Blogs';
import ConstructionSlider from '@/components/ConstructionSlider';
import AmenitiesSwiper from '@/components/AmenitiesSwiper';
import TeamSwiper from '@/components/TeamSwiper';

export default function MasterPlan() {
  return (
    <main>

        {/* Hero Section */}
        <section className="bg-[#F3F6F8] flex flex-col items-center px-14 pt-[150px] pb-14 padding-top">
            <div className="text-sm px-4 pt-6 text-center text-gray-500">
            <span className="text-black-700 font-semibold">• Home</span>
            <span className="mx-2">—</span>
            <span className="text-gray-400">Why Alcove</span>
            </div>
            <h1 className="relative -mb-5 page-hero-title no-negative-margin">
            Why Alcove
            </h1>
        </section>

        <section className='-mt-16 no-negative-margin'>
            <div className="container max-w-7xl mx-auto">
            <div className="relative w-full h-[200px] md:h-[460px]">
            <Image src="/assets/blue-triangle.svg" width={65} height={65} alt="img" className='absolute left-0 z-10 w-[35px] h-[35px] md:w-[65px] md:h-[65px]'/>
            <Image src="/assets/tri2.svg" width={65} height={65} alt="img" className='absolute right-0 bottom-0 z-10 w-[35px] h-[35px] md:w-[65px] md:h-[65px]'/>
            <Image
                src="/assets/alcove-hero.png"
                alt="Hero-img"
                fill
                className="object-cover w-full h-full"
                priority
                />
            </div>
            <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
                <h2 className="text-center project-overview-title text-center mobile-title max-w-[800px]">
                Where <span className="orange-color">luxury </span>meets <span className="orange-color">affordability </span>
                </h2>
            </div>
            </div>
        </section>

        {/* Founder's desk */}
        <section>
            <div className="relative certification-section pt-[40px] md:pt-20">
                <Image src="/assets/Rectangl_Left.png" width={80} height={307} alt="Rectangle_left" className="absolute top-0 h-[100%] left-0 hide-triangle" />
                <div className="flex flex-col md:flex-row justify-between relative container max-w-7xl mx-auto px-[16px] md:px-24 gap-[36px] md:gap-12">
                  <div className="text-center md:text-left w-full md:pb-15">
                    <p className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
                    <h2 className="project-overview-title text-center md:text-left">From <br/><span className="orange-color"> Founder’s </span>Desk</h2>
                    <p className="max-w-[409px] text-[16px] md:text-[20px] font-satoshi font-normal leading-[20px] md:leading-[28px] text-[#22252e] mb-2 py-[20px] md:pt-10">As being architect of New Kolkata, I recommend this place as nice place to live. we're architecture notes. learn about the systems you use everyday from the engineers who built them</p>

                  </div>
                  <div className='flex flex-row w-full items-streach'>
                    <Image src="/assets/white-triangle.svg" width={38} height={400} alt="Rectangle_left" className="pt-2 hide-triangle flex items-end" />
                    <div className='bg-white pb-0 w-full justify-center'>
                        <Image src="/assets/person.png" width={446} height={330} alt="Rectangle_left" className="w-full" />
                        <div className='w-full p-2'>
                            <h2 className='text-center text-[#22252E] text-[18px] md:text-[24px] font-[700]'>Amar Nath Shroff</h2>
                            <p className='text-center pb-0 text-[16px] text-[#5C5F68] font-[400]'>Chairman, Alcove</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>  
        </section>

        {/* Mission and vision */}
        <section>
            <div className='container max-w-7xl mx-auto pt-[149px] pb-[70px] z-[1] relative'>
                {/* mission */}
                <div className='flex flex-row justify-between gap-[10px]'>
                    <div className='w-full'>
                        <Image src="/assets/mission.svg" width={450} height={460} alt="mission" className="" />
                     </div>
                    <div className='w-full'>
                        <h2 className="text-left pb-[48px] project-overview-title text-center mobile-title max-w-[800px]">Our <span className="orange-color">Mission </span></h2>
                        <div className='flex flex-row w-full items-start'>
                            <Image src="/assets/blue-tri.svg" width={28} height={88} alt="blue triangle" className="" />
                            <div className='bg-[#F3F6F8] p-[32px] flex flex-row gap-5 items-start mb-[16px]'>
                                <Image src="/assets/mission-icon1.svg" width={40} height={30} alt="house" className="mt-2" />
                                <div className='flex flex-col items-baseline h-full'>
                                    <h2 className='text-[24px] leading-[28px] font-satoshi font-[700]'>Mission 1</h2>
                                    <p className='pt-[8px] max-w-[400px] text-[20px] leading-[28px] font-satoshi font-[400]'>To provide affordable housing options for people from all walks of life.</p>
                                </div>
                            </div>
                        </div>
                        <div className='pl-[74px] flex flex-row w-full items-start'>
                            <Image src="/assets/pink-tri.svg" width={28} height={88} alt="blue triangle" className="" />
                            <div className='bg-[#FDF9F6] p-[32px] flex flex-row gap-5 items-start'>
                                <Image src="/assets/mission-icon2.svg" width={40} height={30} alt="house" className="mt-2" />
                                <div className='flex flex-col items-baseline h-full'>
                                    <h2 className='text-[24px] leading-[28px] font-satoshi font-[700]'>Mission 2</h2>
                                    <p className='pt-[8px] max-w-[400px] text-[20px] leading-[28px] font-satoshi font-[400]'>To offer high-quality amenities and services that enhance residents' quality of life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* vision */}
                <div className='flex flex-row justify-between gap-[10px] pt-[70px] items-center w-full'>
                    <div className='w-full'>
                        <h2 className="text-left pb-[48px] project-overview-title text-center mobile-title max-w-[800px]">Our <span className="orange-color">Vision </span></h2>
                        <div className='flex flex-row w-full items-start'>
                            <Image src="/assets/blue-tri.svg" width={28} height={88} alt="blue triangle" className="" />
                            <div className='bg-[#F3F6F8] p-[32px] flex flex-row gap-5 items-start mb-[16px]'>
                                <Image src="/assets/mission-icon1.svg" width={40} height={30} alt="house" className="mt-2" />
                                <div className='flex flex-col items-baseline h-full'>
                                    <h2 className='text-[24px] leading-[28px] font-satoshi font-[700]'>Vision Title</h2>
                                    <p className='pt-[8px] max-w-[400px] text-[20px] leading-[28px] font-satoshi font-[400]'>As being architect of New Kolkata, I recommend this place as nice place to live. we're architecture notes. learn about the systems you use everyday from the engineers who built them</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-end'>
                        <Image src="/assets/mission.svg" width={450} height={460} alt="mission" className="" />
                     </div>
                </div>
            </div>
            <div className='relative pb-[80px]'>
                <Image src="/assets/bg-top.svg" width={180} height={245} alt="bg" className='absolute img-size w-full top-[-180px]'/>
                <div className="relative container max-w-7xl mx-auto flex flex-row justify-center w-full md:px-[200px] z-[1]">
                    <Image src="/assets/sport.png" width={180} height={144} alt="house" className='img-size'/>
                    <div className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
                        <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">Curious to see life @Alcove and world-class amenities?</h1>
                        <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[10px] md:right-[40px]"/>
                        <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
                    </div>
                </div>
                <Image src="/assets/bg-bottom.svg" width={180} height={245} alt="bg" className='absolute img-size w-full top-[79px]'/>
            </div>
        </section>

        {/* Past Projects */}
        <section>
            <div className='relative'>
                <div className="text-center w-full">
                  <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
                  <h2 className="project-overview-title text-center pb-[28px] md:pb-[0px]"><span className="orange-color">Past</span> Projects</h2>
                </div>
                <div className='bg-[#F5F8FA] w-full absolute h-[315px] top-90'></div>
            </div>
            <ProjectSwiper/>
        </section>

        {/* slider */}
        <section className='realtive'>
            <TeamSwiper />
            <div className="ml-[100px] absolute container max-w-7xl mx-auto flex flex-row justify-center w-full md:px-[200px] z-[1]">
                <Image src="/assets/house.png" width={180} height={144} alt="house" className='img-size' />
                <div className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
                    <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">Embrace the beauty of your surroundings, know our neighbourhood</h1>
                    <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[10px] md:right-[40px]"/>
                    <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
                </div>
            </div>
        </section>

        {/* Blue section */}
        <section className='bg-[#020C22] py-[80px] pt-[160px] mt-[70px]'>
            <div className="container max-w-7xl mx-auto">
                <div className="flex ietms-center w-full md:items-end justify-between mb-[48px]">
                    <div className='w-full'>
                    <p className="text-center md:text-start text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2">/ Amenities</p>              
                    <h2 className="project-overview-title text-center md:text-left !text-white"><span className="orange-color">Awards <br/></span>& Recognitions</h2>
                    </div>
                    <p className="hide-triangle text-[20px] md:text-[20px] font-[Satoshi] font-[400] leading-5 md:leading-[28px] text-white/50 max-w-[400px]">Experience a world of wonder and adventure. Our podium level is a playground for all ages!</p>
                </div>
                <div className='flex flex-row w-full gap-[32px]'>
                    <div className='relative w-full'>
                        <Image src="/assets/award.svg" width={504} height={490} alt="award" className='w-full img-size' />
                        <div className='absolute right-0 bottom-0 p-[28px] flex flex-col gap-[12px] bg-[#020C22] justify-center'>
                            <h1 className='max-w-[284px] text-[24px] font-satoshi font-[600] leading-[28px] text-white'>PropertyGuru Asia Property Awards</h1>
                            <p className='text-[16px] font-satoshi font-[400] leading-[24px] text-white'>Apr, 22</p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-[29px]'>
                        <div className='w-full flex flex-row h-full'>
                            <Image src="/assets/award1.png" width={210} height={148} alt="award" className='img-size' />
                            <div className='w-full p-[28px] flex flex-col gap-[12px] bg-white/5 justify-center'>
                                <h1 className='text-[24px] font-satoshi font-[600] leading-[28px] text-white'>PropertyGuru Asia Property Awards</h1>
                                <p className='text-[16px] font-satoshi font-[400] leading-[24px] text-white'>Apr, 22</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row h-full'>
                            <Image src="/assets/award2.png" width={210} height={148} alt="award" className='img-size' />
                            <div className='w-full p-[28px] flex flex-col gap-[12px] bg-white/5 justify-center'>
                                <h1 className='text-[24px] font-satoshi font-[600] leading-[28px] text-white'>PropertyGuru Asia Property Awards</h1>
                                <p className='text-[16px] font-satoshi font-[400] leading-[24px] text-white'>Apr, 22</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row h-full'>
                            <Image src="/assets/award3.png" width={210} height={148} alt="award" className='img-size' />
                            <div className='w-full p-[28px] flex flex-col gap-[12px] bg-white/5 justify-center'>
                                <h1 className='text-[24px] font-satoshi font-[600] leading-[28px] text-white'>PropertyGuru Asia Property Awards</h1>
                                <p className='text-[16px] font-satoshi font-[400] leading-[24px] text-white'>Apr, 22</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* logo section */}
      <section className=' bg-[#E7EDF2]'>
        <div className='py-[44px] container max-w-7xl mx-auto'>
            <p className='pb-[28px] text-center text-[16px] font-satoshi font-[400] leading-[20px] text-[#22252E]'>In the news</p>
            <div className='w-full gap-[48px] flex flex-row'>
                <Image src="/assets/logo1.svg" width={243} height={64} alt="logo" className='' />
                <Image src="/assets/logo2.svg" width={138} height={64} alt="logo" className='' />
                <Image src="/assets/logo3.svg" width={226} height={64} alt="logo" className='' />
                <Image src="/assets/logo4.svg" width={121} height={64} alt="logo" className='' />
                <Image src="/assets/logo5.svg" width={288} height={64} alt="logo" className='' />
            </div>
        </div>
      </section>

    </main>
  )
}
