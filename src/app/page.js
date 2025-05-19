import Amenities from "@/components/Amenities";
import AmenitiesSwiper from "@/components/AmenitiesSwiper";
import GangaWaves from "@/components/GangaWaves";
import HeroSectionWaves from "@/components/HeroSectionWaves";
import PlansSwiper from "@/components/PlansSwiper";
import RiversideLivingSwiper from "@/components/RiversideLivingSwiper";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import SeramporeSwiper from "@/components/SeramporeSwiper";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";


export const metadata = {
  title: "New Kolkata",
  description: "Alcove Realty presents New Kolkata Sangam a riverside project where the beauty of nature meets the artistry of modern architecture. Your dream home awaits by the riverside. Explore now!",
  keywords: "Apartments/Flat In Serampore New Kolkata, Serampore Flats For Sale, Serampore Flat Price | Serampore Flat - New Kolkata",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="Hero_Section" className="relative h-screen">
        <Image
          className="inset-0 w-full h-full object-cover dark:invert"
          src="/assets/Riverview.png"
          alt="Riverside Luxury Residences"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container max-w-7xl mx-auto">
            <h1 className="hero-section-title text-white text-[100px] font-normal leading-[100px] max-w-[635px]">
              Affordable Luxury by the Riverside
            </h1>
          </div>
        </div>
        <div className="absolute backdrop-blur-[20px] bottom-[-60px] z-10 right-8 bg-[#FFFFFF33] rounded-full w-[133px] h-[133px] flex flex-col items-center justify-center">
          <p className="text-white text-[16px] font-satoshi font-bold leading-[20px] text-center max-w-[93px]">
            Why Riverside Living?
          </p>
        </div>
      </section>
      <section className="relative">
        <HeroSectionWaves />
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Magnificent</p>
            <h2 className="project-overview-title text-center">Project overview</h2>
          </div>
        </div>
        <div className="container max-w-7xl mx-auto relative mb-16">
          <div className="relative">
            <div className="flex justify-center relative h-[70vh]">
              <div className="absolute top-[-30px] flex justify-center z-1 mb-4">
                <span className="text-[52px] font-ivy-mode font-bold leading-[66px] text-[#de7f4a]">1</span>
                <span className="text-[52px] font-ivy-mode font-bold leading-[66px] text-[#de7f4a]">/</span>
                <span className="text-[52px] font-ivy-mode font-bold leading-[66px] text-[#de7f4a]">12</span>
              </div>
              <Image
                src="/assets/project_overview_image_1.png"
                alt="Aerial view of Riverside Residences"
                className="rounded-lg"
                fill
              />
              <div className="absolute inset-0 rounded-lg">
                <h3 className="absolute bottom-16 left-11 text-[48px] font-satoshi font-normal leading-[65px] text-white">
                  Aerial view
                </h3>
              </div>
            </div>

            <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-md flex items-center justify-between w-[260px] h-[96px]">
              <div className="w-1/2 h-full flex items-center justify-center">
                <button className="focus:outline-none  cursor-pointer" disabled>
                  <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={35} width={36} className="invert-75 transform rotate-180" />
                </button>
              </div>
              <div className="h-12 w-px bg-[#20202019]"></div>
              <div className="w-1/2 h-full flex items-center justify-center">
                <button className="focus:outline-none cursor-pointer">
                  <Image src="/assets/icons/arrow-right.svg" alt="Next" height={35} width={36} className="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 bg-white">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image src="/assets/icons/connectivity.svg" width={68} height={68} alt="Connectivity" className="" />
            </div>
            <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-1">3 way</h3>
            <p className="text-[20px] font-satoshi font-normal leading-[27px] text-[#22252e] text-center">Connectivity</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image src="/assets/icons/residential.svg" width={68} height={68} alt="Clubhouse" className="" />
            </div>
            <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-1">56,000 sq.ft.</h3>
            <p className="text-[20px] font-satoshi font-normal leading-[28px] text-[#22252e] text-center">{`Hooghly's largest Residential Clubhouse`}</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image src="/assets/icons/area_of_project.svg" width={68} height={68} alt="Project Area" className="" />
            </div>
            <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-1">19 acres</h3>
            <p className="text-[20px] font-satoshi font-normal leading-[27px] text-[#22252e] text-center">Area of Project</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image src="/assets/icons/jetty.svg" width={68} height={68} alt="Garden and Ghat" className="" />
            </div>
            <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-1">50,000 sq.ft.</h3>
            <p className="text-[20px] font-satoshi font-normal leading-[28px] text-[#22252e] text-center">of Garden and Ghat by the Ganges</p>
          </div>
        </div>
      </section>


      {/* Certification Information */}
      <section>
        <div className="relative certification-section pt-20 pb-30">
          <Image src="/assets/Rectangl_Left.png" width={80} height={307} alt="Rectangle_left" className="absolute top-0 h-[100%] left-0" />
          <Image src="/assets/Rectangle_right.png" width={80} height={307} alt="Rectangle_left" className="absolute top-0 h-[100%] right-0" />
          <div className="relative container max-w-7xl mx-auto px-6">
            <div className="text-center">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Trust</p>
              <h2 className="project-overview-title text-center"><span className="orange-color">Certified</span> by</h2>
            </div>
          </div>
        </div>
        <div className="relative top-[-75px] container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-center">
            <div className="relative w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/RERA.png" fill alt="RERA Approved" className="object-none" />
            </div>
            <h3 className="text-[24px] font-satoshi font-bold leading-[33px] text-[#22252e] mb-2 text-center">RERA Approved</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/RERAAward.png" fill alt="RERA Approved" className="object-none" />
            </div>
            <h3 className="text-[24px] font-satoshi font-bold leading-[33px] text-[#22252e] mb-2 text-center">RERA Approved</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/WBHIRA.png" fill alt="WBHIRA Approved" className="object-none" />
            </div>
            <h3 className="text-[24px] font-satoshi font-bold leading-[33px] text-[#22252e] mb-2 text-center">WBHIRA Approved</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/IGBC.png" fill alt="IGBC Approved" className="object-none" />
            </div>
            <h3 className="text-[24px] font-satoshi font-bold leading-[33px] text-[#22252e] mb-2 text-center">IGBC Certified</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image src="/assets/RERA.png" fill alt="RERA Approved" className="object-none" />
            </div>
            <h3 className="text-[24px] font-satoshi font-bold leading-[33px] text-[#22252e] mb-2 text-center">RERA Approved</h3>
            <Image height={24} width={24} src="/assets/icons/GreenCheck.svg" alt="Verified" />
          </div>
        </div>
      </section>


      {/* Subnav with scroll spy*/}
      <ScrollSpyNav />

      {/* Amenities */}
      <section className="container max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-2 gap-10 px-24 mb-14">
          <div className="">
            <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Podium</p>
            <h2 className="project-overview-title text-[56px]">Enjoy <span className="orange-color">world-class Amenities</span> by the Ganges</h2>
          </div>
          <div className="flex items-end">
            <p className="text-[20px] font-satoshi leading-[22px] text-[#22252E]">Experience a world of wonder and adventure. Our podium level is a playground for all ages!</p>
          </div>
        </div>
        <Amenities />
        <div className="container max-w-7xl mx-auto relative mb-16">
          <div className="relative">
            <div className="flex w-full h-[558px] justify-center relative">
              <Image
                fill
                src="/assets/bitmap.png"
                alt="Aerial view of Riverside Residences"
                className="rounded-lg object-cover"
              />
              <div className="flex flex-col justify-center items-center bitmap absolute inset-0 rounded-lg">
                <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2">/ Podium</p>
                <h2 className="w-[50%] text-center project-overview-title !text-white text-[56px]">Elevate to <span className="orange-color">Award winning</span> Architectural Brilliance</h2>
              </div>
            </div>
          </div>
        </div>
      </section >
      <AmenitiesSwiper />


      {/* Plans Section */}
      <div className="bg-[#020C22]">
        <section className="container max-w-7xl mx-auto">
          <div className="relative container max-w-7xl mx-auto px-6">
            <div className="text-center pt-20 flex flex-col justify-center items-center">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2">/ Plans</p>
              <h2 className="w-[55%] project-overview-title text-center !text-white">The perfect sangam of <span className="orange-color">life</span> and <span className="orange-color">lifestyle</span></h2>
            </div>
          </div>
        </section>
        <PlansSwiper />
      </div>

      {/* Plans Types */}
      <section className="bg-white">
        <div className="container max-w-7xl mx-auto relative certification-section !bg-white pt-20">
          <div className="relative container max-w-7xl mx-auto">
            <div className="text-center">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Subtitle</p>
              <h2 className="project-overview-title text-center"><span className="orange-color">Comfortable </span>living, simplified</h2>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-12">
              <div className="bg-[#fdf6f2] p-5">
                <Image src="/assets/icons/1bhk.svg" alt="1BHK" width={36} height={36} className="mb-12" />
                <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-2">1BHK</h3>
                <p className="text-[20px] font-satoshi font-normal leading-[27px] text-[#22252eb2] mb-8">314 - 645 sq. ft.</p>
                <a href="#" className="flex items-center gap-2 text-[16px] font-satoshi font-bold leading-[22px] text-[#134c78]">
                  View
                  <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                </a>
              </div>
              <div className="bg-[#fdf6f2] p-5">
                <Image src="/assets/icons/2bhk.svg" alt="2BHK" width={36} height={36} className="mb-12" />
                <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-2">1BHK</h3>
                <p className="text-[20px] font-satoshi font-normal leading-[27px] text-[#22252eb2] mb-8">314 - 645 sq. ft.</p>
                <a href="#" className="flex items-center gap-2 text-[16px] font-satoshi font-bold leading-[22px] text-[#134c78]">
                  View
                  <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                </a>
              </div>
              <div className="bg-[#fdf6f2] p-5">
                <Image src="/assets/icons/3bhk.svg" alt="3BHK" width={37} height={40} className="mb-12" />
                <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-2">1BHK</h3>
                <p className="text-[20px] font-satoshi font-normal leading-[27px] text-[#22252eb2] mb-8">314 - 645 sq. ft.</p>
                <a href="#" className="flex items-center gap-2 text-[16px] font-satoshi font-bold leading-[22px] text-[#134c78]">
                  View
                  <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                </a>
              </div>
              <div className="bg-[#fdf6f2] p-5">
                <Image src="/assets/icons/4bhk.svg" alt="4BHK" width={43} height={39} className="mb-12" />
                <h3 className="text-[40px] font-satoshi font-normal leading-[54px] text-[#22252e] mb-2">1BHK</h3>
                <p className="text-[20px] font-satoshi font-normal leading-[27px] text-[#22252eb2] mb-8">314 - 645 sq. ft.</p>
                <a href="#" className="flex items-center gap-2 text-[16px] font-satoshi font-bold leading-[22px] text-[#134c78]">
                  View
                  <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 px-24 mt-20">
            <div className="">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/Why Riverside Living</p>
              <h2 className="project-overview-title text-[56px]">
                Discover yourself by the <span className="orange-color">sacred</span> and <span className="orange-color">tranquil rhythms</span> of the Ganges
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[20px] text-[#22252E] font-[400]">Riverside living offers a tranquil environment with picturesque views alongside soothing sounds of flowing water and chirping birds, which, supported by scientific evidence, promotes relaxation, rejuvenation, and overall well-being for the mind, body, and soul. By embracing the healing power of nature, riverside living provides a harmonious lifestyle.</p>
            </div>
          </div>
        </div>
        <RiversideLivingSwiper />
        <div className="container max-w-7xl mx-auto relative flex flex-col items-center">
          <div className="relative px-17 pt-9 pb-16 mt-4">
            <div className="absolute -left-[4.5%] top-0 w-[80%] h-[100%] bg-[#DE804B] -skew-x-12"></div>
            <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-[#020C22] skew-x-12"></div>
            <p className="relative text-[40px] font-[400] transforming-text">Take the 1st step to transforming your life</p>
          </div>
          <button className="relative -top-7 bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden">
            <div className='px-6 py-3 mr-20'>
              Schedule a Visit
            </div>
            <span className="px-6 py-3 text-orange-500 bg-[#002F52] text-lg">↗</span>
          </button>
        </div>
      </section>

      {/* Ganga Video */}
      <div className="mt-10">
        <div className="">
          <div className="flex justify-center items-end p-10 relative h-[90vh] honouring_component">
            <video
              src="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.mp4"
              autoPlay
              muted
              loop
            >
              <source src="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.mp4" type="video/mp4" />
              <source src="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.webm" type="video/webm" />
              <p>Sorry, Your Browser Doesn't Support Videos. Here's the <a href="https://cdn.prod.website-files.com/646f15c1aa7d264b3d897823/646f15c1aa7d264b3d89786e_Alcove%20Realty%20%20-%20Ganga%20Arti-transcode.mp4">Link to the video</a></p>
            </video>
            <div className="honouring-lightbox-overlay h-[100%] w-[100%] absolute top-0 left-0" />
            <div className="relative z-1 flex justify-center items-center flex-col">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white mb-2">/ Amenities</p>
              <h2 className="project-overview-title text-center text-[56px] !text-white">
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
        <div className="relative p-5 overflow-hidden">
          <GangaWaves />
          <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
          <div className="relative container max-w-7xl mx-auto py-15">
            <div className="grid grid-cols-3 gap-4 ">
              <div className="col-span-2 p-2">
                <p className="text-[20px] font-satoshi font-[700] text-white mb-4">Did you know?</p>
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
                    <p className="text-[20px] font-satoshi font-[700] text-white mb-6">Want to Dive into Riverside Bliss?</p>
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

      {/* Why Serampore */}
      <section className="bg-white">
        <div className="container max-w-7xl mx-auto relative certification-section !bg-white pt-20">
          <div className="grid grid-cols-2 gap-10 px-24">
            <div className="">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Location</p>
              <h2 className="project-overview-title text-[56px]">
                Why <br /><span className="orange-color">Serampore?</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[20px] text-[#22252E] font-[400]">Serampore is situated about 20 kilometers north of Kolkata, providing easy access to urban amenities, job opportunities, and transportation networks.</p>
            </div>
          </div>
          <div className="relative mx-24 h-[400px] mt-7">
            <Image src="/assets/seramporemap.png" fill className="object-cover" alt="serampore map" />
          </div>
        </div>

        <SeramporeSwiper />
      </section>

      {/* Connectivity */}
      <div className="relative p-5 overflow-hidden">
        <GangaWaves />
        <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
        <div className="relative px-24 container max-w-7xl mx-auto py-15">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="p-2">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] !text-white mb-2">/ Connectivity</p>
              <h2 className="project-overview-title text-[56px] !text-white">
                Serampore, next <br /><span className="orange-color">Investment hub</span>
              </h2>
              <button className="mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden">
                <div className='px-6 py-3 mr-20'>
                  Learn More
                </div>
                <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">↗</span>
              </button>
            </div>
            <div className="p-2 flex gap-10 items-center">
              <div className="mb-12">
                <div className="space-y-11">
                  <div className="flex items-center gap-9">
                    <div className="relative w-[48px] h-[48px]">
                      <Image src="/assets/icons/railroad-metro.svg" alt="metro" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white/50 mb-1">Nearest Metro-station</p>
                      <p className="text-[24px] font-satoshi font-normal leading-[33px] text-white">Dakshineshwar • 12km</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-9">
                    <div className="relative w-[48px] h-[48px]">
                      <Image src="/assets/icons/airport-road.svg" alt="metro" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white/50 mb-1">Nearest Airport</p>
                      <p className="text-[24px] font-satoshi font-normal leading-[33px] text-white">Airport • 21.4km</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-9">
                    <div className="relative w-[48px] h-[48px]">
                      <Image src="/assets/icons/railroad-train.svg" alt="metro" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-[16px] font-satoshi font-normal leading-[22px] text-white/50 mb-1">Nearest Railway Station</p>
                      <p className="text-[24px] font-satoshi font-normal leading-[33px] text-white">Rishra • 1.8km</p>
                      <p className="text-[24px] font-satoshi font-normal leading-[33px] text-white">Serampore • 2.4km</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[#FFFFFF] opacity-10" />
        <marquee>
          <div className="gap-10 py-4 pt-10 flex justify-between overflow-hidden">
            <div className="w-[30px] h-[30px] relative">
              <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
            </div>
            <div className="flex items-center">
              <p className="text-[24px] font-satoshi font-normal leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">New Town • 32km</p>
            </div>

            <div className="w-[30px] h-[30px] relative">
              <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
            </div>
            <div className="flex items-center">
              <p className="text-[24px] font-satoshi font-normal leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">Esplanade • 22.3km</p>
            </div>

            <div className="w-[30px] h-[30px] relative">
              <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
            </div>
            <div className="flex items-center">
              <p className="text-[24px] font-satoshi font-normal leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">Sector V • 27.3km</p>
            </div>

            <div className="w-[30px] h-[30px] relative">
              <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
            </div>
            <div className="flex items-center">
              <p className="text-[24px] font-satoshi font-normal leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">Dakshineshwar • 12km</p>
            </div>
          </div>
        </marquee>
      </div>

      {/*  Testimonials */}
      <section className="bg-white">
        <div className="container max-w-7xl mx-auto relative certification-section !bg-white pt-20">
          <div className="grid grid-cols-2 gap-10 px-24">
            <div className="">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] text-[#22252e] mb-2">/ Testimonials</p>
              <h2 className="project-overview-title text-[56px]">
                Building a <span className="orange-color">Brighter?</span><br />Tomorrow
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[20px] text-[#22252E] font-[400]">Hear from Our 2800+ Happy Homebuyers</p>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>


      {/* Plans */}
      <div className="relative p-5 overflow-hidden">
        <GangaWaves />
        <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
        <div className="relative px-24 container max-w-7xl mx-auto py-15">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="p-2">
              <p className="text-[16px] font-satoshi font-normal leading-[22px] !text-white mb-2">/ Plans</p>
              <h2 className="project-overview-title text-[56px] !text-white">
                Your <span className="orange-color">Safety</span> &<br /> <span className="orange-color">Security</span>, Our<br /> Priority
              </h2>
              <button className="mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden">
                <div className='px-6 py-3 mr-20'>
                  Schedule a Visit
                </div>
                <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">↗</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-6">
              <div className="flex flex-col items-center">
                <Image height={68} width={68} src="/assets/icons/surveillance-cctv.svg" alt="Security Systems" className="w-[68px] h-[68px] mb-4" />
                <p className="text-[20px] font-satoshi font-normal leading-[28px] text-white text-center">
                  24 hours security systems
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Image height={68} width={68} src="/assets/icons/desktop-computer.svg" alt="Monitoring Systems" className="w-[68px] h-[68px] mb-4" />
                <p className="text-[20px] font-satoshi font-normal leading-[28px] text-white text-center">
                  Central monitoring systems
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Image height={68} width={68} src="/assets/icons/security-officer-gate.svg" alt="Surveillance" className="w-[68px] h-[68px] mb-4" />
                <p className="text-[20px] font-satoshi font-normal leading-[27px] text-white text-center">
                  24 hours surveillance
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Image height={68} width={68} src="/assets/icons/surveillance-cctv.svg" alt="Emergency Buttons" className="w-[68px] h-[68px] mb-4" />
                <p className="text-[20px] font-satoshi font-normal leading-[27px] text-white text-center">
                  Emergency Buttons
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
