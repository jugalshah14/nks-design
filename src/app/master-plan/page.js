import React from 'react'
import Image from "next/image";
import MasterplanSwiper from '@/components/MasterplanSwiper';
import BrochureSection from '@/components/BrochureCard';
import ProjectViewSlides from '@/components/ProjectViewSlides';
import SangamSliders from '@/components/SangamSliders';
import ProjectSwiper from '@/components/ProjectSwiper';
import Blogs from '@/components/Blogs';
import ConstructionSlider from '@/components/ConstructionSlider';
import PastProjectSwiper from '@/components/PastProjectSwiper';

export default function MasterPlan() {
  return (
    <main>

      {/* Hero Section */}
       <section className="bg-[#FDF9F6] flex flex-col items-center px-14 pt-[150px] pb-14 padding-top">
        <div className="text-sm px-4 pt-6 text-center text-gray-500">
          <span className="text-black-700 font-semibold">• Home</span>
          <span className="mx-2">—</span>
          <span className="text-gray-400">Masterplans</span>
        </div>
        <h1 className="relative -mb-5 page-hero-title no-negative-margin select-none no-drag">
          Masterplans
        </h1>
      </section>

      <section className='-mt-16 no-negative-margin'>
        <div className="container mx-auto">
          <div className="relative w-full h-[200px] md:h-[460px]">
          <Image src="/assets/tri1.svg" width={65} height={65} alt="img" className='absolute left-0 z-10 w-[35px] h-[35px] md:w-[65px] md:h-[65px]'/>
          <Image src="/assets/tri2.svg" width={65} height={65} alt="img" className='absolute right-0 bottom-0 z-10 w-[35px] h-[35px] md:w-[65px] md:h-[65px]'/>
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
              Seamless living in a thoughtfully designed <span className="orange-color">Masterplans</span>
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="container px-[16px] md:px-10 mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 py-[60px] md:py-20 bg-white">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                    <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]" />
                  </div>
                  <h3 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">15</h3>
                  <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[27px] text-[#22252e] text-center">Total Towers</p>
                </div>
      
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                    <Image src="/assets/icons/residential.svg" width={68} height={68} alt="Clubhouse" className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]" />
                  </div>
                  <h3 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">27</h3>
                  <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[28px] text-[#22252e] text-center">Highest number of <br/> Floors</p>
                </div>
      
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                    <Image src="/assets/icons/area_of_project.svg" width={68} height={68} alt="Project Area" className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]" />
                  </div>
                  <h3 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">65+</h3>
                  <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[27px] text-[#22252e] text-center">Amenities</p>
                </div>
      
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                    <Image src="/assets/icons/jetty.svg" width={68} height={68} alt="Garden and Ghat" className="w-[52px] h-[52px] md:w-[68px] md:h-[68px]" />
                  </div>
                  <h3 className="text-[24px] md:text-[40px] font-satoshi font-normal leading-[28px] md:leading-[54px] text-[#22252e] mb-1">4</h3>
                  <p className="text-[18px] md:text-[20px] font-satoshi font-normal leding-[24px] md:leading-[28px] text-[#22252e] text-center">Types of BHKs</p>
                </div>
          </div>
        </div>
      </section>

      {/* Architect Eye Section */}
      <section>
        <div className="relative certification-section pt-[40px] md:pt-20 mb-15">
            <Image src="/assets/Rectangl_Left.png" width={80} height={307} alt="Rectangle_left" className="absolute top-0 h-[100%] left-0 hide-triangle" />
            <div className="flex flex-col md:flex-row justify-between relative container mx-auto px-[16px] md:px-24 gap-[36px] md:gap-12">
              <div className="text-center md:text-left w-full md:pb-30">
                <p className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
                <h2 className="project-overview-title text-center md:text-left">From <br/><span className="orange-color"> Architect’s </span> Eye</h2>
              </div>
              <div className='flex flex-row'>
                <Image src="/assets/Rectangle_right.png" width={80} height={307} alt="Rectangle_left" className="h-[100%] hide-triangle" />
                <div className='bg-white pb-0 p-[24px] md:p-12 w-full'>
                  <div className='flex flex-row gap-8'>
                    <div>
                      <Image src="/assets/hafeez.svg" width={60} height={60} alt="img"/>
                    </div>
                    <div>
                      <h2 className='text-[#22252E] text-[18px] md:text-[24px] font-[700]'>Hafeez Contractor</h2>
                      <p className='pb-0 text-[16px] text-[#5C5F68] font-[400]'>Architect, Alcove</p>
                    </div>

                  </div>
                  <p className="text-[16px] md:text-[20px] font-satoshi font-normal leading-[20px] md:leading-[28px] text-[#22252e] mb-2 py-[20px] md:pt-10">As being architect of New Kolkata, I recommend this place as nice place to live. we're architecture notes. learn about the systems you use everyday from the engineers who built them</p>
                </div>
              </div>
            </div>
        </div>  
      </section>
      <MasterplanSwiper />

      {/* map section */}
      <section>
        <div className='container px-10 mx-auto'>
            <div className="text-center w-full pb-12">
                <p className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[20px] md:leading-[22px] text-[#22252e] mb-2">/ Magnificent</p>
                <h2 className="project-overview-title text-center">NewKolkata’s <span className="orange-color">Masterplan</span></h2>
            </div>
        </div>
        <div className="relative w-full h-[auto] aspect-[2/1]">
          <Image
            src="/assets/map.png"
            alt="img"
            fill
            className="object-cover select-none no-drag"
          />
        </div>
      </section>

      {/* specifications */}
      <section>
        <div className='container mx-auto py-20 gap-[37px] md:gap-12 flex flex-col'>
          <div className="text-center w-full">
              <p className="text-[14px] md:text-[16px] font-satoshi font-normal leading-[20px] md:leading-[22px] text-[#22252e] mb-2">/ Magnificent</p>
              <h2 className="project-overview-title text-center">NewKolkata’s <span className="orange-color">Specifications</span></h2>
          </div>
          <div>
            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-10">
              {/* Structure */}
              <div className=" p-[16px] md:p-10 pt-3 md:border-l md:border-dashed md:border-gray-300">
                <div className='flex flex-row md:flex-col gap-[12px] md:gap-[0px] items-center justify-center md:items-start md:justify-start'>
                  <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="mb-6 w-[30px] md:w-[68px] h-[30px] md:h-[68px]" />
                  <h3 className="font-satoshi font-semibold text-xl mb-6">Structure</h3>
                </div>
                <ul className="list-disc pl-4">
                  <li>Pile Foundation for durability & stability.</li>
                  <li>Earthquake resistant RCC Superstructure.</li>
                </ul>
              </div>

              {/* Electricals */}
              <div className=" p-[16px] md:p-10 pt-3 md:border-l md:border-dashed md:border-gray-300">
                <div className='flex flex-row md:flex-col gap-[12px] md:gap-[0px] items-center justify-center md:items-start md:justify-start'>
                  <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="mb-6 w-[30px] md:w-[68px] h-[30px] md:h-[68px]" />
                  <h3 className="font-satoshi font-semibold text-xl mb-6">Electricals</h3>
                </div>
                <ul className="list-disc pl-4">
                  <li>Copper PVC coated wiring in concealed conduits with repute make switches.</li>
                  <li>AC point, TV point & telephone socket in living/dining & all bedrooms.</li>
                  <li>Sufficient electrical points.</li>
                  <li>Electrical points for geyser, exhaust, washing machine, microwave, refrigerator, water purifier, grinder, computer, mobile charging.</li>
                </ul>
              </div>

              {/* Kitchen */}
              <div className=" p-[16px] md:p-10 pt-3 md:border-l md:border-dashed md:border-gray-300">
                <div className='flex flex-row md:flex-col gap-[12px] md:gap-[0px] items-center justify-center md:items-start md:justify-start'>
                  <Image src="/assets/icons/area_of_project.svg" width={68} height={68} alt="Project Area" className="mb-6 w-[30px] md:w-[68px] h-[30px] md:h-[68px]" />
                  <h3 className="font-satoshi font-semibold text-xl mb-6">Kitchen</h3>
                </div>
                <ul className="list-disc pl-4">
                  <li>Cuddapah counter with stainless steel sink and taps of repute make.</li>
                  <li>Ceramic tiles dado up to 2 ft. above working platform (Size – 18” X 12”).</li>
                  <li>Provision for water inlet for filter.</li>
                  <li>Exhaust provision</li>
                </ul>
              </div>

              {/* Flooring */}
              <div className=" p-[16px] md:p-10 pt-3 md:border-l md:border-dashed md:border-gray-300">
                <div className='flex flex-row md:flex-col gap-[12px] md:gap-[0px] items-center justify-center md:items-start md:justify-start'>
                  <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="mb-6 w-[30px] md:w-[68px] h-[30px] md:h-[68px]" />
                  <h3 className="font-satoshi font-semibold text-xl mb-6">Flooring</h3>
                </div>
                <ul className="list-disc pl-4">
                  <li>Ceramic tiles in all bedrooms. (Size – 16’’ X 16”)</li>
                  <li>Vitrified tiles in living/dining space. (Size – 24” X 24”)</li>
                  <li>Anti–skid ceramic tiles in kitchen & toilets. (Size – 12” X 12”)</li>
                  <li>Ceramic Tiles in Balcony attached to bedroom, if any (Size – 16" X 16”)</li>
                  <li>Vitrified Mat finish tiles in Balcony attached to living/dining space, if any (Size – 24" X 24”)</li>
                </ul>
              </div>
            </div>

          </div>
          <div>
            <BrochureSection />
          </div>
        </div>
      </section>

      {/* sangam */}
      <section className='bg-[#020C22] md:pb-[80px]'>
        <div className="text-center w-full pb-12 pt-[80px] pb-[20px] md:pb-[52px]">
            <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2">/ Amenities</p>
            <h1 className='text-[14px] md:text-center hero-section-title text-white leading-13 text-[48px] md:text-[150px] font-[400] md:leading-[150px]'>Sangam</h1>
        </div>
        <div className='w-full items-center justify-center flex flex-row  gap-4 md:gap-10 border-t border-b border-white/10 mb-[52px]'>
          <div className='text-[16px] md:text-[20px] font-[Satoshi] font-normal leading-[28px] text-white/50 py-[20px] cursor-pointer'>3BHK</div>
          <Image src="/assets/dot.svg" width={10} height={10} alt="dot" />
          <div className='text-[16px] md:text-[20px] font-[Satoshi] font-normal leading-[28px] text-white/50 py-[20px] cursor-pointer'>2BHK</div>
          <Image src="/assets/dot.svg" width={10} height={10} alt="dot" />
          <div className='text-[16px] md:text-[20px] font-[Satoshi] font-normal leading-[28px] text-white/50 py-[20px] cursor-pointer'>4BHK</div>
        </div>
        <SangamSliders />
      </section>

      {/* Past Projects */}
      <section>
        <div className="container mx-auto flex flex-row justify-center w-full md:px-[200px] md:-mt-18">
            <Image src="/assets/house.png" width={180} height={144} alt="house" className='img-size'/>
            <div className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center cursor-pointer" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
              <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">Curious to see life @Alcove and world-class amenities?</h1>
              <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[10px] md:right-[40px]"/>
              <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
            </div>
        </div>
        <div className='relative pt-[30px] md:pt-[100px]'>
            <div className="text-center w-full">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
              <h2 className="project-overview-title text-center pb-[28px] md:pb-[0px]"><span className="orange-color">Past</span> Projects</h2>
            </div>
            <div className='bg-[#F5F8FA] w-full absolute h-[315px] top-120'></div>
        </div>
        <PastProjectSwiper />
        <div className="container mx-auto flex flex-row justify-center w-full md:px-[200px] pt-5 md:pt-10 cursor-pointer">
            <Image src="/assets/sport.png" width={180} height={144} alt="house" className='img-size'/>
            <div className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
              <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">Embrace the beauty of your surroundings, know our neighbourhood</h1>
              <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[10px] md:right-[40px]"/>
              <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
            </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="pb-2 md:py-20 bg-white pt-[60px] md:pt-[80px]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-7 md:mb-16">
            <p className="text-[14px] leading-5 md:text-[16px] font-[Satoshi] font-[400] md:leading-[22px] text-[#22252e] mb-2">/ Magnificent</p>
            <h2 className="project-overview-title text-center"><span className="orange-color">Image</span> Gallery</h2>
          </div>
        </div>
        <div className="container mx-auto relative">
          <div className="relative max-md:pt-5">
            <ProjectViewSlides />
          </div>
        </div>     
      </section> 

      {/* Blogs Section */}
      <section className='relative'>
        <div className='hide-triangle bg-[#F5F8FA] w-full absolute h-[374px] md:top-[-20px]'></div>
        <div className="container mx-auto  px-[16px] md:px-[0px]">
          <Blogs />
        </div>
      </section>

      {/* Construction Updates Section */}
      <section className='bg-[#020C22] py-[80px]'>
        <div className="container mx-auto">
          <div className="flex ietms-center w-full md:items-end justify-between mb-[48px]">
            <div className='w-full'>
              <p className="text-center md:text-start text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2">/ Amenities</p>              
              <h2 className="project-overview-title text-center md:text-left !text-white"><span className="orange-color">Construction <br/></span>Updates</h2>
            </div>
            <p className="hide-triangle text-[20px] md:text-[20px] font-[Satoshi] font-[400] leading-5 md:leading-[28px] text-white/50 max-w-[400px]">Experience a world of wonder and adventure. Our podium level is a playground for all ages!</p>
          </div>
        </div>
        <ConstructionSlider />
      </section>

    </main>
  )
}
