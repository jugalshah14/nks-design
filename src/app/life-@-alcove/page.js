"use client";
import Image from "next/image";
import { AnimatedSection, FadeIn, SlideUp } from "@/components/animations";
import Link from "next/link";

export default function lifeAtAlcove() {
  return (
    <main>
      <SlideUp>
        <section className="relative justify-center bg-[#FDF9F6] flex flex-col items-center md:h-[280px] md:top-[107] h-[180px] top-[50]">
          <SlideUp delay={0.4}>
            <div className="px-4 pt-6 text-center pb-4 md:pb-0">
              <span className="text-[#22252e] font-bold text-[20px]">
                • Home
              </span>
              <span className="mx-2">—</span>
              <span className="text-[#5c5f68] font-normal text-[20px]">
                Life @Alcove
              </span>
            </div>
          </SlideUp>
          <SlideUp delay={0.6}>
            <h1 className="text-[48px] text-black leading-[52px] md:text-[#dee2e4] md:text-[150px] md:leading-[150px] font-cormorant">
              Life @Alcove
            </h1>
          </SlideUp>
        </section>
      </SlideUp>

      <section className="mt-9">
        <SlideUp delay={0.8}>
          <div className="container md:max-w-7xl md:mx-auto">
            <div className="relative w-full md:h-[460px] h-[265px]">
              <Image
                src="/assets/life @alcove.png"
                alt="Hero-img"
                fill
                priority
              />
            </div>
            <div className="relative p-5 md:p-12 bg-white/50 -mt-12 md:mx-[80px] mx-[2%] md:backdrop-blur-[37px] backdrop-blur-[7px] mb-12">
              <h2 className="project-overview-title text-center">
                Where<span className="orange-color"> luxury</span> meets
                <span className="orange-color"> affordability</span>
              </h2>
            </div>
          </div>
        </SlideUp>
      </section>

      <section className="bg-[#020C22] flex flex-col relative text-white md-pt-20 md:pb-20 pt-20 pb-0 h-auto">
        <SlideUp delay={0.4}>
          <h2 className="flex md:flex-row flex-col items-center md:justify-center font-cormorant font-normal text-[48px] leading-[52px] md:text-[100px] md:leading-[120px] md:mt-4 md-px-0 px-[13px]">
            <span className="orange-color">Elevated</span>&nbsp;Life @Alcove
          </h2>
        </SlideUp>
        <AnimatedSection className="overflow-visible">
          {/* #1 */}
          <AnimatedSection>
            <div className="container fitness-swiper md:mb-10 w-full mx-auto flex-col lg:flex-row mt-12 lg:gap-x-8 flex">
              <div className="flex flex-col items-center w-full md:w-[804px]">
                <div className="relative w-full md:w-[804px]">
                  <div className="md:relative w-full h-[268px] md:h-[570px]">
                    <Image
                      src="/assets/triangle-blue.png"
                      width={65}
                      height={65}
                      alt="triangle"
                      className="absolute max-md:w-[36px] max-md:h-[36px] right-0 z-10"
                    />
                    <Image
                      src="/assets/fitness.png"
                      alt="Sunset view of residence near nature"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full absolute bottom-0 left-0 max-md:text-center p-3 md:p-5 backdrop-blur-md font-semibold z-10">
                    <span className="text-white md:font-bold text-[18px] md:text-[24px] md:leading-7 leading-6">
                      Fitness events to enhance your fitness level.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:justify-center h-full">
                <div className="z-20 md:relative md:-bottom-[300px] md:right-[70px] max-w-md bg-[#020C22] p-5 md:p-10 text-white font-satoshi text-[24px] md:text-[40px] font-normal leading-[28px] md:leading-[48px] text-center md:text-left flex h-auto">
                  <span>
                    Make everyday living effortless with our{" "}
                    <span className="orange-color">Convenience</span> for
                    Residence scheme.
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
          {/* #2 */}
          <AnimatedSection>
            <div className="container nature-swiper py-12 w-full mx-auto flex-col lg:flex-row lg:gap-x-8 flex max-md:bg-white">
              <div className="flex flex-col items-center w-full md:w-[804px] lg:order-2">
                <div className="relative w-full md:w-[804px]">
                  <div className="md:relative w-full h-[268px] md:h-[570px]">
                    <Image
                      src="/assets/triangle-blue.png"
                      width={65}
                      height={65}
                      alt="triangle"
                      className="hidden md:block absolute left-0 -top-1 -rotate-90 z-10"
                    />
                    <Image
                      src="/assets/white-tri.png"
                      width={65}
                      height={65}
                      alt="triangle"
                      className="md:hidden absolute max-md:w-[36px] max-md:h-[36px] left-0 z-10"
                    />
                    <Image
                      src="/assets/Ghat Eye Level.png"
                      alt="Sunset view of residence near nature"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full absolute bottom-0 left-0 max-md:text-center p-3 md:p-5 backdrop-blur-md font-semibold z-10">
                    <span className="text-white md:font-bold text-[18px] md:text-[24px] md:leading-7 leading-6 md:pl-10 pl-0">
                      Experience the thrill of our nature exploring events!
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:justify-center h-full lg:order-1">
                <div className="z-20 md:relative md:-bottom-[250px] md:left-[70px] max-w-md md:bg-[#020C22] bg-white p-5 md:p-10 md:text-white text-black font-satoshi text-[24px] md:text-[40px] font-normal leading-[28px] md:leading-[48px] text-center md:text-left flex h-auto">
                  <span>
                    Embrace the beauty of nature with us, where modern living
                    meets{" "}
                    <span className="orange-color">natural wonders</span>
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
          {/* #3 */}
          <AnimatedSection>
            <div className="container cricket-swiper md:mb-10 w-full mx-auto flex-col lg:flex-row md:mt-12 mt-0 lg:gap-x-8 flex">
              <div className="flex flex-col items-center w-full md:w-[804px]">
                <div className="relative w-full md:w-[804px]">
                  <div className="md:relative w-full h-[268px] md:h-[570px]">
                    <Image
                      src="/assets/triangle-blue.png"
                      width={65}
                      height={65}
                      alt="triangle"
                      className="hidden md:block absolute right-0 z-10"
                    />
                    <Image
                      src="/assets/white-tri.png"
                      width={65}
                      height={65}
                      alt="triangle"
                      className="md:hidden absolute right-0 max-md:w-[36px] max-md:h-[36px] -top-1 rotate-90 z-10"
                    />
                    <Image
                      src="/assets/earthday.png"
                      alt="Earth Day Activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full absolute bottom-0 left-0 max-md:text-center p-3 md:p-5 backdrop-blur-md font-semibold z-10">
                    <span className="text-white md:font-bold text-[18px] md:text-[24px] md:leading-7 leading-6">
                      Earth Day Activities
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:justify-center h-full">
                <div className="z-20 md:relative md:-bottom-[300px] md:right-[70px] max-w-md bg-[#020C22] p-5 md:p-10 text-white font-satoshi text-[24px] md:text-[40px] font-normal leading-[28px] md:leading-[48px] text-center md:text-left flex h-auto">
                  <span>
                    Join the fun and make memories with our{" "}
                    <span className="orange-color">exciting activities</span>{" "}
                    for everyone
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
        <AnimatedSection className="!overflow-visible flex w-full justify-center mt-10">
          <Link href="/location" className=" absolute group cursor-pointer transform transition-transform duration-300 hover:scale-101 border-b-4 border-t-1 border-[#144D78] flex items-center justify-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto md:h-[144px]">
            <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
              <Image
                src="/assets/neighbour.png"
                alt="Room preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 md:px-11 md:py-8">
              <p className="px-5 md:px-0 md:text-[24px] font-satoshi font-bold text-[#22252E] md:leading-[28px] text-[16px] leading-[24px]">
                Embrace the beauty of your surroundings, know our neighbourhood
              </p>
            </div>
            <div className="relative bg-[#E7EDF2] md:h-[144px] h-[100px] flex items-center md:w-13.5 w-8">
              <Image
                src="/assets/icons/arrowlong.svg"
                alt=""
                width={40}
                height={3}
                className="absolute -ml-6"
              />
            </div>
            </Link>
        </AnimatedSection>
      </section>

      <section className="py-20 pb-0 mt-20 md:mt-0 bg-white">
        <SlideUp delay={0.4}>
          <h2 className="flex justify-center font-cormorant font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] mt-4 text-center">
            <span className="orange-color">Event</span>&nbsp;Gallery
          </h2>
        </SlideUp>

        <AnimatedSection>
          {/* Desktop Grid View (unchanged) */}
          <div className="!w-full hidden md:grid mt-12 h-[466px] grid-cols-4 gap-4 md:px-19">
            {/* Image 1 */}
            <div className="relative overflow-hidden">
              <Image
                src="/assets/ig1.png"
                alt="Event 1"
                fill
                className="object-cover"
              />
            </div>
            {/* Image 2 */}
            <div className="relative row-span-3 overflow-hidden">
              <Image
                src="/assets/ig2.png"
                alt="Event 2"
                fill
                className="object-cover"
              />
            </div>
            {/* Image 3 */}
            <div className="relative row-span-2 rounded-full overflow-hidden">
              <Image
                src="/assets/ig3.png"
                alt="Event 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/ig4.png"
                  alt="Event 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/ig5.png"
                  alt="Event 5"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative row-span-2 overflow-hidden">
              <Image
                src="/assets/ig6.png"
                alt="Event 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative row-span-2 overflow-hidden">
              <Image
                src="/assets/ig7.png"
                alt="Event 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/assets/ig8.png"
                alt="Event 6"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile Marquee View: exact same grid, scrolling horizontally */}
          <div className="md:hidden w-full overflow-hidden mt-12">
            <div className="mobile-marquee flex whitespace-nowrap min-w-[900px]">
              {[1, 2].map((_, idx) => (
                <div
                  key={idx}
                  className="h-[300px] grid grid-cols-4 gap-4 px-2 w-[900px]"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src="/assets/ig1.png"
                      alt="Event 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative row-span-3 overflow-hidden">
                    <Image
                      src="/assets/ig2.png"
                      alt="Event 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative row-span-2 rounded-full overflow-hidden">
                    <Image
                      src="/assets/ig3.png"
                      alt="Event 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/assets/ig4.png"
                        alt="Event 4"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden">
                      <Image
                        src="/assets/ig5.png"
                        alt="Event 5"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative row-span-2 overflow-hidden">
                    <Image
                      src="/assets/ig6.png"
                      alt="Event 5"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative row-span-2 overflow-hidden">
                    <Image
                      src="/assets/ig7.png"
                      alt="Event 5"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      src="/assets/ig8.png"
                      alt="Event 6"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
