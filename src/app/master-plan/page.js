import React from 'react'
import Image from "next/image";
import MasterplanSwiper from '@/components/MasterplanSwiper';
import BrochureSection from '@/components/BrochureCard';
import ProjectViewSlides from '@/components/ProjectViewSlides';
import SangamSliders from '@/components/SangamSliders';
import ProjectSwiper from '@/components/ProjectSwiper';
import Blogs from '@/components/Blogs';
import ConstructionSlider from '@/components/ConstructionSlider';

export default function MasterPlan() {
  return (
    <main>

      {/* Hero Section */}
       <section className="bg-[#FDF9F6] flex flex-col items-center px-14 pt-[150px] pb-14">
        <div className="text-sm px-4 pt-6 text-center text-gray-500">
          <span className="text-black-700 font-semibold">• Home</span>
          <span className="mx-2">—</span>
          <span className="text-gray-400">Masterplans</span>
        </div>
        <h1 className="page-hero-title">
          Masterplans
        </h1>
      </section>

      <section className='-mt-21'>
        <div className="container max-w-7xl mx-auto">
          <div className="relative w-full h-[460px]">
            <Image
              src="/assets/masterplan-hero.png"
              alt="Hero-img"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="relative p-12 -mt-12 mx-[80px] bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80">
            <h2 className="project-overview-title text-center">
              Seamless living in a thoughtfully <br />
              designed <span className="orange-color">Masterplans</span>
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="container max-w-7xl px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 bg-white">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                    <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="" />
                  </div>
                  <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-1">15</h3>
                  <p className="text-[20px] font-satoshi font-normal leading-[27px] text-[#22252e] text-center">Total Towers</p>
                </div>
      
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                    <Image src="/assets/icons/residential.svg" width={68} height={68} alt="Clubhouse" className="" />
                  </div>
                  <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-1">27</h3>
                  <p className="text-[20px] font-satoshi font-normal leading-[28px] text-[#22252e] text-center">Highest number of <br/> Floors</p>
                </div>
      
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                    <Image src="/assets/icons/area_of_project.svg" width={68} height={68} alt="Project Area" className="" />
                  </div>
                  <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-1">65+</h3>
                  <p className="text-[20px] font-satoshi font-normal leading-[27px] text-[#22252e] text-center">Amenities</p>
                </div>
      
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                    <Image src="/assets/icons/jetty.svg" width={68} height={68} alt="Garden and Ghat" className="" />
                  </div>
                  <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-1">4</h3>
                  <p className="text-[20px] font-satoshi font-normal leading-[28px] text-[#22252e] text-center">Types of BHKs</p>
                </div>
          </div>
        </div>
      </section>

      {/* Architect Eye Section */}
      <section>
        <div className="relative certification-section pt-20 mb-15">
            <Image src="/assets/Rectangl_Left.png" width={80} height={307} alt="Rectangle_left" className="absolute top-0 h-[100%] left-0" />
            <div className="flex flex-row justify-between relative container max-w-7xl mx-auto px-24 gap-12">
              <div className="text-left w-full pb-30">
                <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Amenities</p>
                <h2 className="project-overview-title text-left">From <br/><span className="orange-color"> Architect’s </span> Eye</h2>
              </div>
              <div className='flex flex-row'>
                <Image src="/assets/Rectangle_right.png" width={80} height={307} alt="Rectangle_left" className="h-[100%]" />
                <div className='bg-white pb-0 p-12 w-full'>
                  <div className='flex flex-row gap-8'>
                    <div>
                      <Image src="/assets/hafeez.svg" width={60} height={60} alt="img"/>
                    </div>
                    <div>
                      <h2 className='text-[#22252E] text-[24px] font-[700]'>Hafeez Contractor</h2>
                      <p className='pb-0 text-[16px] text-[#5C5F68] font-[400]'>Architect, Alcove</p>
                    </div>

                  </div>
                  <p className="text-[20px] font-satoshi font-normal leading-[28px] text-[#22252e] mb-2 pt-10">As being architect of New Kolkata, I recommend this place as nice place to live. we're architecture notes. learn about the systems you use everyday from the engineers who built them</p>
                </div>
              </div>
            </div>
        </div>  
      </section>
      <MasterplanSwiper />

      {/* map section */}
      <section>
        <div className='container max-w-7xl px-10 mx-auto'>
            <div className="text-center w-full pb-12">
                <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Magnificent</p>
                <h2 className="project-overview-title text-center">NewKolkata’s <span className="orange-color">Masterplan</span></h2>
            </div>
        </div>
        <div className="relative w-full h-[auto] aspect-[2/1]">
          <Image
            src="/assets/map.png"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* specifications */}
      <section>
        <div className='container max-w-7xl mx-auto py-20 gap-12 flex flex-col'>
          <div className="text-center w-full">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Magnificent</p>
              <h2 className="project-overview-title text-center">NewKolkata’s <span className="orange-color">Specifications</span></h2>
          </div>
          <div>
            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Structure */}
              <div className="p-10 pt-3 md:border-l md:border-dashed md:border-gray-300">
                <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="mb-6" />
                <h3 className="font-satoshi font-semibold text-xl mb-6">Structure</h3>
                <ul className="list-disc pl-4">
                  <li>Pile Foundation for durability & stability.</li>
                  <li>Earthquake resistant RCC Superstructure.</li>
                </ul>
              </div>

              {/* Electricals */}
              <div className="p-10 pt-3 md:border-l md:border-dashed md:border-gray-300">
                <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="mb-6" />
                <h3 className="font-satoshi font-semibold text-xl mb-6">Electricals</h3>
                <ul className="list-disc pl-4">
                  <li>Copper PVC coated wiring in concealed conduits with repute make switches.</li>
                  <li>AC point, TV point & telephone socket in living/dining & all bedrooms.</li>
                  <li>Sufficient electrical points.</li>
                  <li>Electrical points for geyser, exhaust, washing machine, microwave, refrigerator, water purifier, grinder, computer, mobile charging.</li>
                </ul>
              </div>

              {/* Kitchen */}
              <div className="p-10 pt-3 md:border-l md:border-dashed md:border-gray-300">
                <Image src="/assets/icons/area_of_project.svg" width={68} height={68} alt="Project Area" className="mb-6" />
                <h3 className="font-satoshi font-semibold text-xl mb-6">Kitchen</h3>
                <ul className="list-disc pl-4">
                  <li>Cuddapah counter with stainless steel sink and taps of repute make.</li>
                  <li>Ceramic tiles dado up to 2 ft. above working platform (Size – 18” X 12”).</li>
                  <li>Provision for water inlet for filter.</li>
                  <li>Exhaust provision</li>
                </ul>
              </div>

              {/* Flooring */}
              <div className="p-10 pt-3 md:border-l md:border-dashed md:border-gray-300">
                <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="mb-6" />
                <h3 className="font-satoshi font-semibold text-xl mb-6">Flooring</h3>
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
      <section className='bg-[#020C22] pb-[80px]'>
        <div className="text-center w-full pb-12 pt-[80px] pb-[52px]">
            <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2">/ Amenities</p>
            <h1 className='text-center hero-section-title text-white leading-13 text-[48px] md:text-[150px] font-[400] md:leading-[150px]'>Sangam</h1>
        </div>
        <div className='w-full items-center justify-center flex flex-row gap-10 border-t border-b border-white/10 mb-[52px]'>
          <div className='text-[20px] font-[Satoshi] font-normal leading-[28px] text-white/50 py-[20px]'>3BHK</div>
          <Image src="/assets/dot.svg" width={10} height={10} alt="dot" />
          <div className='text-[20px] font-[Satoshi] font-normal leading-[28px] text-white/50 py-[20px]'>2BHK</div>
          <Image src="/assets/dot.svg" width={10} height={10} alt="dot" />
          <div className='text-[20px] font-[Satoshi] font-normal leading-[28px] text-white/50 py-[20px]'>4BHK</div>
        </div>
        <SangamSliders />
      </section>

      {/* Past Projects */}
      <section>
        <div className="container max-w-7xl mx-auto flex flex-row justify-center w-full px-[200px] -mt-18">
            <Image src="/assets/house.png" width={180} height={144} alt="house" />
            <div className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
              <h1 className="text-[#22252E] text-[24px] font-[700] max-w-[548px] p-6">Curious to see life @Alcove and world-class amenities?</h1>
              <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[40px]"/>
              <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
            </div>
        </div>
        <div className='relative pt-[172px]'>
            <div className="text-center w-full">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Magnificent</p>
              <h2 className="project-overview-title text-center"><span className="orange-color">Past</span> Projects</h2>
            </div>
            <div className='bg-[#F5F8FA] w-full absolute h-[315px] top-135'></div>
        </div>
        <ProjectSwiper/>
        <div className="container max-w-7xl mx-auto flex flex-row justify-center w-full px-[200px] pt-10">
            <Image src="/assets/sport.png" width={180} height={144} alt="house" />
            <div className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
              <h1 className="text-[#22252E] text-[24px] font-[700] max-w-[548px] p-6">Embrace the beauty of your surroundings, know our neighbourhood</h1>
              <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[40px]"/>
              <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
            </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="pb-2 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-7 md:mb-16">
            <p className="text-[14px] leading-5 md:text-[16px] font-[Satoshi] font-[400] md:leading-[22px] text-[#22252e] mb-2">/ Magnificent</p>
            <h2 className="project-overview-title text-center"><span className="orange-color">Image</span> Gallery</h2>
          </div>
        </div>
        <div className="container max-w-7xl mx-auto relative">
          <div className="relative max-md:pt-5">
            <ProjectViewSlides />
          </div>
        </div>     
      </section> 

      {/* Blogs Section */}
      <section className='relative'>
        <div className='bg-[#F5F8FA] w-full absolute h-[374px] top-0'></div>
        <div className="container max-w-7xl mx-auto">
          <Blogs />
        </div>
      </section>

      {/* Construction Updates Section */}
      <section className='bg-[#020C22] py-[80px]'>
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-[48px]">
            <div>
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2">/ Amenities</p>              
              <h2 className="project-overview-title text-left !text-white"><span className="orange-color">Construction <br/></span>Updates</h2>
            </div>
            <p className="text-[20px] md:text-[20px] font-[Satoshi] font-[400] leading-5 md:leading-[28px] text-white/50 max-w-[400px]">Experience a world of wonder and adventure. Our podium level is a playground for all ages!</p>
          </div>
        </div>
        <ConstructionSlider />
      </section>

    </main>
  )
}
