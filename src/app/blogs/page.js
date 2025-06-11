"use client";
import { AnimatedSection, SlideUp } from "@/components/animations";
import Image from "next/image";
import React, { useState } from "react";

export default function lifeAtAlcove() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedNav, setSelectedNav] = useState("Featured");

  const navTabs = ["Featured", "Residential", "Construction"];
  return (
    <main>
      <SlideUp>
        <section className="relative justify-center bg-white flex flex-col items-center md:h-[280px] md:top-[107] h-[180px] top-[50]">
          <SlideUp delay={0.4}>
            <div className="px-4 pt-6 text-center pb-4 md:pb-0">
              <span className="text-[#22252e] font-bold text-[20px]">
                • Home
              </span>
              <span className="mx-2">—</span>
              <span className="text-[#5c5f68] font-normal text-[20px]">
                Blogs
              </span>
            </div>
          </SlideUp>
          <SlideUp delay={0.6}>
            <h1 className="text-[48px] text-black leading-[52px] md:text-[#dee2e4] md:text-[150px] md:leading-[150px] font-cormorant">
              Blogs
            </h1>
          </SlideUp>
        </section>
      </SlideUp>

      {/* Navigation buttons */}
      <AnimatedSection delay={0.8}>
        <nav className="mb-10 mt-30 relative w-full mt-9 flex justify-between md:justify-center items-center border-t border-b border-[#22252e19] py-4 md:py-6 px-7 md:px-0">
          {navTabs.map((tab, idx) => (
            <React.Fragment key={tab}>
              <button
                onClick={() => {
                  setSelectedNav(tab);
                  const element = document.getElementById(
                    tab.toLowerCase().replace(/\s/g, "-")
                  );
                  if (element) {
                    const yOffset = -107; // Offset from top
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className={
                  "relative md:px-8 flex flex-col items-center focus:outline-none cursor-pointer" +
                  (selectedNav === tab
                    ? " text-black font-bold font-satoshi text-[16px] leading-[24px] md:text-[20px] md:leading-[28px]"
                    : " text-black font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] opacity-50 hover:text-grey transition")
                }
              >
                <span>{tab}</span>
                {selectedNav === tab && (
                  <div className="absolute left-1/2 -translate-x-1/2 md:bottom-[-24px] bottom-[-16px]">
                    <div className="w-[38px] h-[2px] bg-[#4F70AF] rounded"></div>
                  </div>
                )}
              </button>
              {idx !== navTabs.length - 1 && (
                <span className="mx-1 text-[#7c8ca7] text-xs select-none leading-none flex items-center">
                  &#9674;
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </AnimatedSection>
      {/* Blog Cards Section */}
      <section
        id="featured"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto mb-20"
      >
        {/* Left Large Card */}
        <SlideUp delay={0.8}>
          <div className="flex flex-col mx-7 md:mx-0">
            <div className="flex justify-center rounded-lg relative w-full h-[351px] overflow-hidden">
              <Image
                src="/assets/Blogs-1.png"
                alt="Main Blog"
                fill
                className="object-cover"
              />
            </div>
            <SlideUp delay={0.1}>
              <div className="my-7 flex flex-col gap-6">
                <div className="flex items-center gap-3 font-satoshi">
                  <span className="font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                    Construction Update
                  </span>
                  <span className="text-[#22252E] text-sm font-medium">
                    • 5 min read
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-cormorant text-black leading-[44px] font-normal">
                  Your passport to the web3 economy
                </h2>
                <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                  If you&rsquo;ve read this far and you&rsquo;re wondering what
                  &ldquo;web3&rdquo; is exactly, this is one of those
                  need-to-knows, and it&rsquo;s pretty simple. We&rsquo;ll
                  explain more below
                </p>
                <a
                  href="#"
                  className="orange-color leading-[20px] font-bold flex items-center gap-2 text-base "
                >
                  Read Article <span className="ml-2">→</span>
                </a>
              </div>
            </SlideUp>
          </div>
        </SlideUp>
        {/* Right Side Cards */}
        <SlideUp>
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <SlideUp delay={0.8}>
              <div className="flex flex-col mx-7 md:mx-0 md:flex-row gap-4 items-stretch font-satoshi">
                <div className="rounded-lg relative md:min-w-[272px] md:w-[272px] h-[201px] overflow-hidden">
                  <Image
                    src="/assets/blogs-2.png"
                    alt="Blog 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 md:py-6 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                      Construction Update
                    </span>
                    <span className="text-[#22252E] text-sm font-medium">
                      • 5 min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-black leading-[28px]">
                    How to secure have your crypto wallet
                  </h3>
                  <a
                    href="#"
                    className="orange-color leading-[20px] font-bold flex items-center gap-2 text-base "
                  >
                    Read Article <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </SlideUp>
            {/* Card 2 */}
            <SlideUp delay={1}>
              <div className="flex flex-col md:flex-row mx-7 md:mx-0 gap-4 items-stretch font-satoshi">
                <div className="rounded-lg relative md:min-w-[272px] md:w-[272px] h-[201px] overflow-hidden">
                  <Image
                    src="/assets/blogs-3.png"
                    alt="Blog 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                      Construction Update
                    </span>
                    <span className="text-[#22252E] text-sm font-medium">
                      • 5 min read
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black leading-[28px]">
                      How to secure have your crypto wallet
                    </h3>
                    <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="orange-color leading-[20px] font-bold flex items-center gap-2 text-base "
                  >
                    Read Article <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </SlideUp>
            {/* Card 3 */}
            <SlideUp delay={0.12}>
              <div className="flex flex-col md:flex-row mx-7 md:mx-0  gap-4 items-stretch font-satoshi">
                <div className="rounded-lg relative md:min-w-[272px] md:w-[272px] h-[201px] overflow-hidden">
                  <Image
                    src="/assets/blogs-4.png"
                    alt="Blog 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                      Construction Update
                    </span>
                    <span className="text-[#22252E] text-sm font-medium">
                      • 5 min read
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black leading-[28px]">
                      How to secure have your crypto wallet
                    </h3>
                    <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="orange-color leading-[20px] font-bold flex items-center gap-2 text-base "
                  >
                    Read Article <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
        </SlideUp>
      </section>

      {/* Residential Section */}
      <section
        id="residential"
        className="relative w-full pt-10 pb-10 md:pt-20 md:pb-0 bg-[#F3F6F8]"
      >
        <div className="text-center mb-12">
          <SlideUp delay={0.8}>
            <h2 className="text-[56px] leading-[72px] font-normal font-cormorant text-black">
              Residential
            </h2>
          </SlideUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-7 md:px-0">
          {/* Card 1 */}
          <SlideUp delay={0.7}>
            <div className="flex flex-col">
              <div className="relative w-full h-[240px] rounded-md overflow-hidden">
                <Image
                  src="/assets/Residential-1.png"
                  alt="Bill Walsh leadership lessons"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:py-[32px] py-[16px] flex flex-col gap-3">
                <span className="text-[#4F70AF] text-[14px] leading-[20px] font-semibold">
                  Sunday, 1 Jan 2023
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-[24px] leading-[28px] font-bold text-black">
                    Bill Walsh leadership lessons
                  </h3>
                  <span className="ml-auto text-white text-lg">↗</span>
                </div>
                <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                  Like to know the secrets of transforming a 2-14 team into a 3x
                  Super Bowl winning Dynasty?
                </p>
                <span className="w-fit font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                  Construction Update
                </span>
              </div>
            </div>
          </SlideUp>
          {/* Card 2 */}
          <SlideUp delay={0.8}>
            <div className="flex flex-col">
              <div className="relative w-full h-[240px] rounded-md overflow-hidden">
                <Image
                  src="/assets/Residential-2.png"
                  alt="PM mental models"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:py-[32px] py-[16px] flex flex-col gap-3">
                <span className="text-[#4F70AF] text-[14px] leading-[20px] font-semibold">
                  Sunday, 1 Jan 2023
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-[24px] leading-[28px] font-bold text-black">
                    PM mental models
                  </h3>
                  <span className="ml-auto text-white text-lg">↗</span>
                </div>
                <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                  Mental models are simple expressions of complex processes or
                  relationships.
                </p>
                <span className="w-fit font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                  New Tower Launch
                </span>
              </div>
            </div>
          </SlideUp>
          {/* Card 3 */}
          <SlideUp delay={1}>
            <div className="flex flex-col">
              <div className="relative w-full h-[240px] rounded-md overflow-hidden">
                <Image
                  src="/assets/Residential-3.png"
                  alt="What is Wireframing?"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:py-[32px] py-[16px] flex flex-col gap-3">
                <span className="text-[#4F70AF] text-[14px] leading-[20px] font-semibold">
                  Sunday, 1 Jan 2023
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-[24px] leading-[28px] font-bold text-black">
                    What is Wireframing?
                  </h3>
                  <span className="ml-auto text-white text-lg">↗</span>
                </div>
                <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                  Introduction to Wireframing and its Principles. Learn from the
                  best in the industry.
                </p>
                <span className="w-fit font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                  Product
                </span>
              </div>
            </div>
          </SlideUp>
        </div>
        <AnimatedSection className="overflow-visible">
          <div className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-101 md:-bottom-18 -bottom-10 border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto md:h-[144px]">
            <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
              <Image
                src="/assets/blogs-hr.png"
                alt="Room preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 md:px-11 md:py-8">
              <p className="px-5 md:px-0 md:text-[24px] font-satoshi font-bold text-[#22252E] md:leading-[28px] text-[16px] leading-[24px]">
                Curious to see life @Alcove and world-class amenities?{" "}
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

      {/* Construction Section */}
      <section
        id="construction"
        className="relative w-full md:mt-20 py-20 bg-white"
      >
        <div className="text-center mb-12">
          <SlideUp delay={0.8}>
            <h2 className="text-[56px] leading-[72px] font-normal font-cormorant text-black">
              Construction
            </h2>
          </SlideUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-10 px-7 md:px-0">
          {/* Card 1 */}
          <SlideUp delay={0.7}>
            <div className="flex flex-col">
              <div className="relative w-full h-[240px] rounded-md overflow-hidden">
                <Image
                  src="/assets/Residential-1.png"
                  alt="Bill Walsh leadership lessons"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:py-[32px] py-[16px] flex flex-col gap-3">
                <span className="text-[#4F70AF] text-[14px] leading-[20px] font-semibold">
                  Sunday, 1 Jan 2023
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-[24px] leading-[28px] font-bold text-black">
                    Bill Walsh leadership lessons
                  </h3>
                  <span className="ml-auto text-white text-lg">↗</span>
                </div>
                <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                  Like to know the secrets of transforming a 2-14 team into a 3x
                  Super Bowl winning Dynasty?
                </p>
                <span className="w-fit font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                  Construction Update
                </span>
              </div>
            </div>
          </SlideUp>
          {/* Card 2 */}
          <SlideUp delay={0.8}>
            <div className="flex flex-col">
              <div className="relative w-full h-[240px] rounded-md overflow-hidden">
                <Image
                  src="/assets/Residential-2.png"
                  alt="PM mental models"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:py-[32px] py-[16px] flex flex-col gap-3">
                <span className="text-[#4F70AF] text-[14px] leading-[20px] font-semibold">
                  Sunday, 1 Jan 2023
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-[24px] leading-[28px] font-bold text-black">
                    PM mental models
                  </h3>
                  <span className="ml-auto text-white text-lg">↗</span>
                </div>
                <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                  Mental models are simple expressions of complex processes or
                  relationships.
                </p>
                <span className="w-fit font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                  New Tower Launch
                </span>
              </div>
            </div>
          </SlideUp>
          {/* Card 3 */}
          <SlideUp delay={1}>
            <div className="flex flex-col">
              <div className="relative w-full h-[240px] rounded-md overflow-hidden">
                <Image
                  src="/assets/Residential-3.png"
                  alt="What is Wireframing?"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:py-[32px] py-[16px] flex flex-col gap-3">
                <span className="text-[#4F70AF] text-[14px] leading-[20px] font-semibold">
                  Sunday, 1 Jan 2023
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-[24px] leading-[28px] font-bold text-black">
                    What is Wireframing?
                  </h3>
                  <span className="ml-auto text-white text-lg">↗</span>
                </div>
                <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                  Introduction to Wireframing and its Principles. Learn from the
                  best in the industry.
                </p>
                <span className="w-fit font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                  Product
                </span>
              </div>
            </div>
          </SlideUp>
        </div>
        <AnimatedSection className="overflow-visible">
          <div className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-101 border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto mt-20 md:h-[144px]">
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
    </main>
  );
}
