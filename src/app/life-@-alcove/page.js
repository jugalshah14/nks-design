"use client";
import Image from "next/image";
import AlocveSwiper from "@/components/AlocveSwiper";
import { AnimatedSection, FadeIn, SlideUp } from "@/components/animations";

export default function lifeAtAlcove() {
  return (
    <main>
      <SlideUp>
        <section className="relative justify-center bg-[#FDF9F6] flex flex-col items-center md:h-[280px] md:top-[107] h-[180px] top-[50]">
          <SlideUp delay={0.4}>
            <div className="px-4 pt-6 text-center pb-4 md:pb-0">
              <span className="text-[#22252e] font-bold text-[20px]">• Home</span>
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

      <section className="mt-10">
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

      <section className="bg-[#020C22] relative text-white md-pt-20 md:pb-20 pt-20 pb-0 h-auto">
        <SlideUp delay={0.4}>
          <h2 className="flex md:flex-row flex-col items-center md:justify-center font-cormorant font-normal text-[48px] leading-[52px] md:text-[100px] md:leading-[120px] md:mt-4 md-px-0 px-[13px]">
            <span className="orange-color">Elevated</span>&nbsp;Life @Alcove
          </h2>
        </SlideUp>
        <AnimatedSection className="overflow-visible">
          <AlocveSwiper/>
        </AnimatedSection>
        <AnimatedSection className="overflow-visible">
          <div className="md:relative absolute group cursor-pointer transform transition-transform duration-300 hover:scale-101 -bottom-38 border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto mt-20 md:h-[144px]">
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
          </div>
        </AnimatedSection>
      </section>

      <section className="py-20 pb-0 mt-20 md:mt-0 bg-white">

        <SlideUp delay={0.4}>
          <h2 className="flex justify-center font-cormorant font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] mt-4 text-center">
            <span className="text-orange-500">Event</span>&nbsp;Gallery
          </h2>
        </SlideUp>

        <AnimatedSection>
          {/* Desktop Grid View (unchanged) */}
          <div className="!w-full hidden md:grid mt-12 h-[466px] grid-cols-4 gap-4 md:px-19">
            {/* Image 1 */}
            <div className="relative overflow-hidden">
              <Image src="/assets/gellary1.png" alt="Event 1" fill className="object-cover" />
            </div>
            {/* Image 2 */}
            <div className="relative row-span-3 overflow-hidden">
              <Image src="/assets/gellary2.png" alt="Event 2" fill className="object-cover" />
            </div>
            {/* Image 3 */}
            <div className="relative row-span-2 rounded-full overflow-hidden">
              <Image src="/assets/gellary3.png" alt="Event 3" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden">
                <Image src="/assets/gellary4.png" alt="Event 4" fill className="object-cover" />
              </div>
              <div className="relative overflow-hidden">
                <Image src="/assets/gellary5.png" alt="Event 5" fill className="object-cover" />
              </div>
            </div>
            <div className="relative row-span-2 overflow-hidden">
              <Image src="/assets/gellary6.png" alt="Event 5" fill className="object-cover" />
            </div>
            <div className="relative row-span-2 overflow-hidden">
              <Image src="/assets/gellary7.png" alt="Event 5" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <Image src="/assets/gellary8.png" alt="Event 6" fill className="object-cover" />
            </div>
          </div>

          {/* Mobile Marquee View: exact same grid, scrolling horizontally */}
          <div className="md:hidden w-full overflow-hidden mt-12">
            <div className="mobile-marquee flex whitespace-nowrap min-w-[900px]">
              {[1,2].map((_, idx) => (
                <div key={idx} className="h-[300px] grid grid-cols-4 gap-4 px-2 w-[900px]">
                  <div className="relative overflow-hidden">
                    <Image src="/assets/gellary1.png" alt="Event 1" fill className="object-cover" />
                  </div>
                  <div className="relative row-span-3 overflow-hidden">
                    <Image src="/assets/gellary2.png" alt="Event 2" fill className="object-cover" />
                  </div>
                  <div className="relative row-span-2 rounded-full overflow-hidden">
                    <Image src="/assets/gellary3.png" alt="Event 3" fill className="object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden">
                      <Image src="/assets/gellary4.png" alt="Event 4" fill className="object-cover" />
                    </div>
                    <div className="relative overflow-hidden">
                      <Image src="/assets/gellary5.png" alt="Event 5" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="relative row-span-2 overflow-hidden">
                    <Image src="/assets/gellary6.png" alt="Event 5" fill className="object-cover" />
                  </div>
                  <div className="relative row-span-2 overflow-hidden">
                    <Image src="/assets/gellary7.png" alt="Event 5" fill className="object-cover" />
                  </div>
                  <div className="relative overflow-hidden">
                    <Image src="/assets/gellary8.png" alt="Event 6" fill className="object-cover" />
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
