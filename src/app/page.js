"use client";

import { lazy, Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

// Lazy load animation components to reduce initial bundle
const AnimatedSection = lazy(() => import("@/components/animations").then(module => ({ default: module.AnimatedSection })));
const FadeIn = lazy(() => import("@/components/animations").then(module => ({ default: module.FadeIn })));
const SlideIn = lazy(() => import("@/components/animations").then(module => ({ default: module.SlideIn })));
const SlideUp = lazy(() => import("@/components/animations").then(module => ({ default: module.SlideUp })));

// Lazy load heavy components with better error handling and loading states
const AmenitiesSwiper = lazy(() => import("@/components/AmenitiesSwiper"));
const GangaVideoSection = lazy(() => import("@/components/GangaVideoSection"));
const GangaWaves = lazy(() => import("@/components/GangaWaves"));
const HeroSectionWaves = lazy(() => import("@/components/HeroSectionWaves"));
const PlansSection = lazy(() => import("@/components/PlansSection"));
const PlansSwiper = lazy(() => import("@/components/PlansSwiper"));
const PlanTypesSwiper = lazy(() => import("@/components/PlanTypesSwiper"));
const ProjectViewSlides = lazy(() => import("@/components/ProjectViewSlides"));
const RiversideLivingSwiper = lazy(() => import("@/components/RiversideLivingSwiper"));
const ScheduleVisitModal = lazy(() => import("@/components/ScheduleVisitModal"));
const ScrollSpyNav = lazy(() => import("@/components/ScrollSpyNav"));
const SeramporeMarqueeSlides = lazy(() => import("@/components/SeramporeMarqueeSlides"));
const SeramporeSwiper = lazy(() => import("@/components/SeramporeSwiper"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const WhyRiversideFloatingButton = lazy(() => import("@/components/WhyRiversideFloatingButton"));
const SafetySecuritySection = lazy(() => import("@/components/SafetySecuritySection"));
const CertificationSection = lazy(() => import("@/components/CertificationSection"));
const LegacySwiper = lazy(() => import("@/components/LegacySwiper"));

// Optimized loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-8">
    <div className="bg-gray-200 h-8 w-32 rounded"></div>
  </div>
);

// Performance-optimized animation wrapper with reduced JS execution
const OptimizedAnimation = ({ children, delay = 0, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  if (!isVisible) {
    return <div className="opacity-0">{children}</div>;
  }
  
  return (
    <Suspense fallback={<div className="opacity-0">{children}</div>}>
      <SlideUp delay={0} {...props}>
        {children}
      </SlideUp>
    </Suspense>
  );
};

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

export default function Home() {
  const [isModalOpens, setIsModalOpens] = useState(false);
  const handleScheduleVisit = (e) => {
    e.preventDefault();
    setIsModalOpens(true);
  };
  
  return (
    <>
      <main>
        {/* Hero Section - Optimized for LCP */}
        <section id="Hero_Section" className="relative h-screen">
          <Image
            className="max-md:hidden inset-0 object-[50%_25%] w-full h-full object-cover"
            src="/assets/Riverview.webp"
            alt="Riverside Luxury Residences"
            fill
            priority
            sizes="100vw"
            quality={95}
            fetchPriority="high"
          />
          <Image
            className="md:hidden inset-0 w-full h-full object-cover"
            src="/assets/Riverviewmobile.webp"
            alt="Riverside Luxury Residences"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 0vw"
            quality={95}
            fetchPriority="high"
          />
          <div className="md:hidden hero-section-bg h-[100%] w-[100%] top-0 left-0" />
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="container mx-auto">
                <h1 className="max-md:px-9 max-md:text-center hero-section-title text-white leading-13 text-[48px] md:text-[100px] font-[400] md:leading-[100px] md:max-w-[635px]">
                  Affordable riverside luxury by the creators of &apos;The
                  <span className="md:text-[150px] text-[100px]"> 42</span>&apos;
                </h1>
            </div>
          </div>

          {/* Bottom corner information */}
          <div className="absolute bottom-12 left-4 md:bottom-0 md:left-30 max-md: pb-3">
            <p className="font-satoshi text-[#FFFFFF] font-[400] text-[12px] md:text-[14px] leading-5 animate-fade-in-delay">
              HIRA/P/HOO/2019/000635
            </p>
          </div>

          <div className="absolute bottom-12 right-4 md:bottom-0 md:right-45 max-md: pb-3">
            <p className="font-satoshi text-[#FFFFFF] font-[400] text-[12px] md:text-[14px] leading-5 animate-fade-in-delay">
              <Link
                href="https://www.rera.wb.gov.in"
                target="_blank"
                className="text-[#FFFFFF] hover:underline"
              >
                www.rera.wb.gov.in
              </Link>
            </p>
          </div>
          <Suspense fallback={<div />}>
            <WhyRiversideFloatingButton />
          </Suspense>
        </section>
        
        <section className="relative">
          <Suspense fallback={<div />}>
            <HeroSectionWaves />
          </Suspense>
        </section>

        {/* Stats Section - Reduced animation delays */}
        <section className="bg-white">
          <div className="container py-7 px-4 lg:px-10 mx-auto grid grid-cols-2 xl:grid-cols-4 gap-8 md:py-20 bg-white">
            <div className="order-1 flex flex-col items-center animate-slide-up">
              <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                <Image
                  src="/assets/icons/connectivity.svg"
                  width={68}
                  height={68}
                  alt="Connectivity"
                  className=""
                  priority
                  quality={90}
                />
              </div>
              <h2 className="block md:text-[40px] text-[24px] font-satoshi font-[400] md:leading-[54px] leading-[28px] text-[#22252e] mb-1">
                3 way
              </h2>
              <p className="block md:text-[20px] text-[18px] font-satoshi font-[400] md:leading-[27px] leading-6 text-[#22252e] text-center">
                Connectivity
              </p>
            </div>

            <div className="order-2 flex flex-col items-center animate-slide-up-delay">
              <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                <Image
                  src="/assets/icons/residential.svg"
                  width={68}
                  height={68}
                  alt="Clubhouse"
                  className=""
                />
              </div>
              <h2 className="block md:text-[40px] text-[24px] font-satoshi font-[400] md:leading-[54px] leading-[28px] text-[#22252e] mb-1">
                56,000 sq.ft.
              </h2>
              <p className="block md:text-[20px] text-[18px] font-satoshi font-[400] md:leading-[28px] leading-6 text-[#22252e] text-center">{`Hooghly's largest Residential Clubhouse`}</p>
            </div>

            <div className="order-3 flex flex-col items-center animate-slide-up-delay">
              <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                <Image
                  src="/assets/icons/area_of_project.svg"
                  width={68}
                  height={68}
                  alt="Project Area"
                  className=""
                />
              </div>
              <h2 className="block md:text-[40px] text-[24px] font-satoshi font-[400] md:leading-[54px] leading-[28px] text-[#22252e] mb-1">
                19 acres
              </h2>
              <p className="block md:text-[20px] text-[18px] font-satoshi font-[400] md:leading-[27px] leading-6 text-[#22252e] text-center">
                Area of Project
              </p>
            </div>

            <div className="order-4 flex flex-col items-center animate-slide-up-delay">
              <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
                <Image
                  src="/assets/icons/family-icon.svg"
                  width={68}
                  height={68}
                  alt="Garden and Ghat"
                  className=""
                />
              </div>
              <h2 className="block md:text-[40px] text-[24px] font-satoshi font-[400] md:leading-[54px] leading-[28px] text-[#22252e] mb-1">
                3500+
              </h2>
              <p className="block md:text-[20px] text-[18px] font-satoshi font-[400] md:leading-[28px] leading-6 text-[#22252e] text-center">
                Happy Families
              </p>
            </div>
          </div>
        </section>
        {/* Legacy Section */}
        <section>
          <Suspense fallback={<LoadingFallback />}>
            <LegacySwiper />
          </Suspense>
        </section>

        {/* Certification Information */}
        <Suspense fallback={<LoadingFallback />}>
          <CertificationSection />
        </Suspense>
        {/* Ganga Video Section */}
        <Element name="section-Ganga">
          {/* Ganga Video */}
          <div>
            <Suspense fallback={<LoadingFallback />}>
              <GangaVideoSection />
            </Suspense>

            <div className="hidden md:block relative p-5 overflow-hidden">
              <GangaWaves />
              <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
              <div className="relative container  mx-auto py-15">
                <div className="grid grid-cols-4 lg:grid-cols-3 gap-4 ">
                  <div className="col-span-2 p-2">
                    <SlideUp delay={0.4}>
                      <div className="text-[20px] font-satoshi font-[700] leading-[28px] mb-4 text-white">
                        Did you know?
                      </div>
                      <p className="w-[100%] transforming-text !font-satoshi font-[300] text-[56px] leading-[72px] lg:text-[40px] lg:leading-[48px]">
                        {`Feel the divine aura of Banaras now in Serampore! Own a Home Where You’re Blessed by Ganga Aarti, Every Single Day We’re proud to be India’s only riverside township where the sacred Ganga Aarti happens daily.`}
                      </p>
                    </SlideUp>
                  </div>
                  <div className="max-lg:col-span-2 p-2 flex gap-10 items-center">
                    <div className="flex gap-14 items-center">
                      <div className="flex flex-col gap-3">
                        <Image
                          src={"/assets/icons/verticalwaves.svg"}
                          width={15}
                          height={15}
                          alt="verticalwaves"
                          className="opacity-[0.15]"
                        />
                        <Image
                          src={"/assets/icons/verticalwaves.svg"}
                          width={15}
                          height={15}
                          alt="verticalwaves"
                          className="opacity-[0.15]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <SlideUp delay={0.6}>
                          <p className="text-[20px] font-satoshi font-[700] text-white mb-6">
                            Want to Dive into Riverside Bliss?
                          </p>
                        </SlideUp>
                        <SlideUp delay={0.8} className="w-full">
                          <button
                            id="hero-schedule-visit"
                            onClick={handleScheduleVisit}
                            className="w-full md:min-h-[4rem] min-h-[3.5rem] h-full relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden button-primary"
                          >
                            <div className="px-6 py-3">
                              <span>Schedule a Visit</span>
                            </div>
                            <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full ml-auto orange-color bg-[#002F52] text-lg">
                              <Image src="/assets/icons/arrow-orange.svg" alt="arrow" width={20} height={20} className="w-5 h-5" />
                            </span>
                          </button>
                        </SlideUp>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AnimatedSection className="md:container  mx-auto relative flex flex-col items-center py-10 max-md:bg-[#DE804B17]">
            <div className="hidden md:block relative px-10 lg:px-17 pt-9 pb-16 mt-4">
              <div className="absolute -left-[4.5%] top-0 w-[60%] h-[100%] lg:w-[80%] lg:h-[100%] bg-[#DE804B] -skew-x-12"></div>
              <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-[#020C22] skew-x-12"></div>
              <p className="relative text-[36px] lg:text-[40px] font-[400] transforming-text !font-satoshi text-center">
                Take the 1st step to transforming your life
              </p>
            </div>
            <p className="enough-reasons-text block md:hidden font-[400] text-[24px] leading-8 w-[85%] text-center mb-8">
              Take the 1st step to transforming your life
            </p>
            <button
              id="transforming-life-schedule-visit"
              onClick={handleScheduleVisit}
              className="md:min-h-[4rem] min-h-[3.5rem] h-full relative md:-top-7 bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden button-primary"
            >
              <div className="px-6 py-3 mr-20">
                <span>Schedule a Visit</span>
              </div>
              <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full orange-color bg-[#002F52] text-lg">
                <Image src="/assets/icons/arrow-orange.svg" alt="arrow" width={20} height={20} className="w-5 h-5" />
              </span>
            </button>
          </AnimatedSection>
        </Element>
        {/* Project Overview */}
        <section className="bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-7 md:mb-10 max-md:pt-7">
              <SlideUp delay={0.1}>
                <h2 className="project-overview-title max-md:!text-[36px] max-md:!leading-11 max-md:font-[400] text-center">
                  Project
                  <span className="orange-color"> Overview</span>
                </h2>
              </SlideUp>
            </div>
          </div>
          <AnimatedSection className="container overflow-visible mx-auto relative mb-16">
            <div className="relative">
              <Suspense fallback={<LoadingFallback />}>
              <ProjectViewSlides />
            </Suspense>
            </div>
          </AnimatedSection>
        </section>

        <section className="relative md:mt-[12px] mt-[60px]">
          {/* Subnav with scroll spy*/}
          <ScrollSpyNav />

          <Element name="section-Amenities" id="Amenities">
            {/* Amenities */}
            <section className="container  mx-auto mt-5">
              <div className="container mx-auto !w-[100%] relative md:mb-16">
                <div className="flex flex-col justify-center items-center pb-5">
                  <SlideUp delay={0.1}>
                    <h2 className="w-full md:mt-10 text-center text-black md:text-[56px] text-[36px] font-cormorant md:leading-[72px] leading-[44px] font-[400] max-md:px-5">
                      Elevate to{" "}
                      <span className="orange-color">Award winning </span>
                      Architectural Brilliance
                    </h2>
                  </SlideUp>
                </div>
                <AnimatedSection className="block relative">
                  <div
                    className={
                      "absolute top-5 right-5 cursor-pointer flex flex-row items-center rounded-xl bg-black/20 z-10 group"
                    }
                  >
                    <div className="overflow-hidden">
                      <div className="text-[12px] text-white whitespace-nowrap opacity-0 max-w-0 group-hover:px-2 group-hover:opacity-100 group-hover:max-w-[100px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                        {"Actual Image"}
                      </div>
                    </div>
                    <Image
                      alt=""
                      src="/assets/icons/info.svg"
                      height={25}
                      width={25}
                      className=""
                    />
                  </div>
                  <div className="flex w-full h-[167px] md:h-[558px] justify-center relative">
                    <Image
                      fill
                      src="/assets/bitmap.jpeg"
                      alt="Aerial view of Riverside Residences"
                      className=" object-cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      quality={85}
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                </AnimatedSection>
                <div className="block md:hidden relative">
                  <div className="h-[160px] bg-[#061026]">
                    <div className="flex justify-center items-center">
                      <hr className="border-[#FFFFFF] w-[100%] opacity-20 absolute" />
                      <SlideUp delay={0.15}>
                        <p className="p-2 z-1 bg-[#061026] font-satoshi text-[16px] font-[700] leading-6 text-center text-white">
                          65+ <br />
                          World-class <br />
                          Amenities
                        </p>
                      </SlideUp>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Suspense fallback={<LoadingFallback />}>
              <AmenitiesSwiper />
            </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <SafetySecuritySection />
          </Suspense>
          </Element>

          <Element name="section-Plans">
            {/* Plans Section */}
            <div className="bg-[#F5F8FA]">
              <section className="container  mx-auto">
                <div className="relative md:py-[80px]">
                  <div className="flex text-center flex-col justify-center items-center">
                    <SlideUp
                      delay={0.1}
                      className="flex justify-center items-center"
                    >
                      <h2 className="max-w-[600px] w-[100%] lg:w-[100%] project-overview-title !font-[300] text-center pb-[48px] pt-[60px] md:pt-0">
                        The perfect sangam of{" "}
                        <span className="orange-color">life </span>
                        and <span className="orange-color">lifestyle</span>.
                      </h2>
                    </SlideUp>
                  </div>
                  <Suspense fallback={<LoadingFallback />}>
                    <PlansSection />
                  </Suspense>
                </div>
              </section>
              {/* <PlansSwiper /> */}
            </div>

            {/* Plans Types */}
            <section className="bg-white">
              <div className=" container mx-auto relative certification-section !bg-white md:pt-20 pt-10 max-md:px-5">
                <div className="relative container mx-auto"></div>
                <div className="md:grid md:grid-cols-2 gap-10 justify-baseline">
                  <div className="">
                    <SlideUp delay={0.1}>
                      <h2 className="project-overview-title text-[56px] text-center md:text-left">
                        Comfortable Living, Simplified — Discover Yourself by
                        the <span className="orange-color">Sacred</span> and{" "}
                        <span className="orange-color">Tranquil Rhythms</span>{" "}
                        of the Ganga
                      </h2>
                    </SlideUp>
                  </div>
                  <div className="hidden md:flex items-baseline">
                    <SlideUp delay={0.15}>
                      <p className="text-[20px] text-[#22252E] font-[400]">
                        Riverside living offers a tranquil environment with
                        picturesque views alongside soothing sounds of flowing
                        water and chirping birds, which, supported by scientific
                        evidence, promotes relaxation, rejuvenation, and overall
                        well-being for the mind, body, and soul. By embracing
                        the healing power of nature, riverside living provides a
                        harmonious lifestyle.
                      </p>
                    </SlideUp>
                  </div>
                </div>
              </div>
              <Suspense fallback={<LoadingFallback />}>
                <RiversideLivingSwiper />
              </Suspense>
            </section>
         

          {/*  Testimonials */}
          <section className="bg-white cv-auto contain-layout">
            <div className="container  mx-auto relative certification-section !bg-white pt-10 md:pt-20">
              <div className="grid grid-cols-2 gap-10 md:px-8 lg:px-24">
                <div className="max-md:col-span-2">
                  <SlideUp delay={0.1}>
                    <h2 className="hidden md:block project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px]">
                      Building a <span className="orange-color">Brighter?</span>
                      <br />
                      Tomorrow
                    </h2>
                    <h2 className="block md:hidden project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:text-[56px]">
                      What our{" "}
                      <span className="orange-color">customer says</span>
                    </h2>
                  </SlideUp>
                </div>
                <div className="md:mt-20 flex md:items-end max-md:col-span-2 max-md:justify-center max-md:text-center">
                  <SlideUp delay={0.15}>
                    <p className="text-[20px] text-[#22252E] font-[400]">
                      Hear From Few of Our 3500+ Happy Home Buyers
                    </p>
                    <Link href="/testimonials">
                      <button id="read-all-testimonials" className="mt-5 border border-[#22252E] rounded-md px-8 py-3 font-satoshi font-bold text-[14px] leading-6 transition hover:bg-[#f5f5f5] cursor-pointer">
                        Read All Testimonials
                      </button>
                    </Link>{" "}
                  </SlideUp>
                </div>
              </div>
              <Suspense fallback={<LoadingFallback />}>
                <Testimonials />
              </Suspense>
            </div>
          </section>
          {/* Connectivity */}
          <div>
            <div className="relative md:p-5 overflow-hidden max-md:pb-5">
              <Suspense fallback={<div />}>
                <GangaWaves />
              </Suspense>
              <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
              <div className="max-md:px-5">
                <div className="relative md:px-8 lg:px-24 container  mx-auto max-md:pt-10 md:py-20">
                  <div className="grid grid-cols-2 gap-4 ">
                    <div className="max-md:col-span-2 md:p-2">
                      <SlideUp delay={0.1}>
                        <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px] !text-white">
                          Serampore, next <br className="max-md:hidden" />
                          <span className="orange-color">Investment hub</span>
                        </h2>
                      </SlideUp>
                      <SlideUp delay={0.15}>
                        <Link href="/location">
                          <button id="serampore-learn-more" className="hidden md:min-h-[4rem] min-h-[3.5rem] mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden button-primary">
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
                            delay={0.05}
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
                            delay={0.1}
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
                            delay={0.15}
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
              <Suspense fallback={<LoadingFallback />}>
                <SeramporeMarqueeSlides />
              </Suspense>
            </div>
                          <SlideUp delay={0.2}>
                <div className="flex md:hidden justify-center relative -top-7">
                  <button
                    id="mobile-schedule-visit-bottom"
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
            </Element>

          {/* Why Serampore */}
          <Element name="section-WhySerampore">
            <>
              <section className="bg-white overflow-x-hidden cv-auto contain-layout">
                <div className="container  mx-auto relative certification-section !bg-white pt-10 md:pt-20">
                  <div className="grid grid-cols-2 gap-10 md:px-8 lg:px-24">
                    <div className="max-md:col-span-2">
                      <SlideUp delay={0.1}>
                        <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px]">
                          Why <br className="hidden md:block" />
                          <span className="orange-color">Serampore?</span>
                        </h2>
                      </SlideUp>
                    </div>
                    <div className="hidden md:flex items-end">
                      <SlideUp delay={0.15}>
                        <p className="text-[20px] text-[#22252E] font-[400]">
                          Serampore is situated about 20 kilometers north of
                          Kolkata, providing easy access to urban amenities, job
                          opportunities, and transportation networks.
                        </p>
                      </SlideUp>
                    </div>
                  </div>
                </div>

                <Suspense fallback={<LoadingFallback />}>
                  <SeramporeSwiper data={seramporeData} />
                </Suspense>
              </section>
            </>
          </Element>
        </section>
      </main>
      <ScheduleVisitModal
        isOpen={isModalOpens}
        onClose={() => setIsModalOpens(false)}
      />
    </>
  );
}
