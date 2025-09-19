"use client";
import { useEffect, useState, use } from "react";
import { SlideUp } from "@/components/animations";
import Image from "next/image";
import { TableOfContents } from "@/components/TablesOfContents";
import { ArticleContent } from "@/components/article-content/ArticleContent";
import FAQAccordion from "@/components/FAQAccordion";
import seramporeProperties from "@/data/typologyDetails";
import Link from "next/link";

export default function PropertyPage({ params }) {
  const { propertyId } = use(params);
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        // Simulate API call delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 500));

        const data = seramporeProperties.find(
          (prop) => prop.propertyId === propertyId
        );
        setPropertyData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching property data:", error);
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [propertyId]);

  if (loading) {
    return (
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#026AA2]"></div>
            <p className="text-lg text-gray-600">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!propertyData) {
    return (
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-gray-600">Property not found</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <SlideUp>
        <section className="relative justify-center bg-[#F3F6F8] flex flex-col items-center md:h-[220px] md:top-[65] h-[180px] top-[50]">
          <SlideUp delay={0.4}>
            <div className="text-center pb-4 md:pb-0">
              <span className="text-[#22252e] font-bold text-[16px]">
                • Home
              </span>
              <span className="mx-2">—</span>
              <span className="text-[#5c5f68] font-normal text-[16px]">
                {typeof propertyData.projectOverview.heading === "string"
                  ? propertyData.projectOverview.heading
                  : `${propertyData.projectOverview.heading.main} ${propertyData.projectOverview.heading.highlight}`}
              </span>
            </div>
          </SlideUp>
        </section>
      </SlideUp>
      <section className=" no-negative-margin">
        <SlideUp delay={0.8}>
          <div className="container mx-auto">
            <div className="relative w-full md:h-[460px] h-[265px]">
              <Image
                src="/assets/typology-hero.png"
                alt="Hero-img"
                fill
                priority
              />
            </div>
            <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
              <h2 className="text-center project-overview-title mobile-title max-w-[800px]">
                {typeof propertyData.projectOverview.heading === "string" ? (
                  <span className="orange-color">
                    {propertyData.projectOverview.heading}
                  </span>
                ) : (
                  <>
                    <span className="orange-color">
                      {propertyData.projectOverview.heading.main}
                    </span>
                    <span className="text-black">
                      {" "}
                      {propertyData.projectOverview.heading.highlight}
                    </span>
                  </>
                )}
              </h2>
            </div>
          </div>
        </SlideUp>
      </section>

      <section className="relative overflow-hidden no-negative-margin pb-[140px] md:pb-[0px]">
        <div className="relative flex items-center justify-center px-4 lg:px-0">
          <div className="w-full container mx-auto relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-start gap-7 lg:gap-8">
              <SlideUp
                delay={0.4}
                className="w-full lg:w-auto lg:flex-shrink-0 relative"
              >
                <div className="w-[140px] h-[1px] bg-[#282C3F] md:mb-4 mb-0 max-md:mt-10"></div>
                <div className="lg:max-w-[339px]">
                  <h1 className="text-[16px] lg:text-[24px] font-bold leading-[24px] lg:leading-[28px] text-[#22252E] font-satoshi lg:mb-4 mt-12">
                    {propertyData.projectOverview.headline}
                  </h1>
                  <button id="typology-master-plan-link" className="hidden lg:flex items-center gap-[10px] group mt-12 pt-[2px]">
                    <Link
                      href="/master-plan"
                      className="text-[#002F52] font-satoshi text-base font-bold leading-5"
                    >
                      {propertyData.projectOverview.callToAction}
                    </Link>
                    <svg
                      width="41"
                      height="8"
                      viewBox="0 0 41 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4V4.5H40V4V3.5H0V4Z"
                        fill="#002F52"
                      />
                    </svg>
                  </button>
                </div>
              </SlideUp>
              <div className="flex-1 order-first lg:order-none relative">
                <SlideUp delay={0.6}>
                  <div className="relative w-full h-[486px] overflow-visible">
                    <Image
                      src="/assets/typology-buildings.png"
                      alt={`${propertyData.projectOverview.title} in Serampore`}
                      className="w-full h-full object-cover"
                      width={100}
                      height={100}
                    />
                    <div className="absolute -bottom-30 right-0 lg:right-0 md:bottom-0 left-1/2 translate-x-[-50%] lg:left-auto lg:translate-x-0 bg-white  px-8 py-7 max-w-xs w-full">
                      <div className="flex flex-col gap-5">
                        <div className="flex lg:flex-col gap-5">
                          <div className="">
                            <div className="text-theme-dark font-satoshi md:text-[16px] text-[14px] leading-[20px] md:leading-[20px] font-normal text-[#22252E] opacity-50 mb-1">
                              Location
                            </div>
                            <div className="text-theme-dark font-satoshi md:text-[24px] text-[16px] leading-[20px] md:leading-[28px] font-normal text-[#22252E]">
                              Serampore
                            </div>
                          </div>
                          <div className="">
                            <div className="text-theme-dark font-satoshi md:text-[16px] text-[14px] leading-[20px] md:leading-[20px] font-normal text-[#22252E] opacity-50 mb-1">
                              BHK
                            </div>
                            <div className="text-theme-dark font-satoshi md:text-[24px] text-[16px] leading-[20px] md:leading-[28px] font-normal text-[#22252E]">
                              {propertyData.projectOverview.title}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-theme-dark font-satoshi md:text-[16px] text-[14px] leading-[20px] md:leading-[20px] font-normal opacity-50 mb-1">
                            Unit area
                          </div>
                          <div className="text-theme-dark font-satoshi md:text-[24px] text-[16px] leading-[20px] md:leading-[28px] font-normal text-[#22252E]">
                            {propertyData.projectOverview.specifications}
                          </div>
                          <div className="text-theme-dark font-satoshi md:text-[24px] text-[16px] leading-[20px] md:leading-[28px] font-normal text-[#22252E]">
                            (Super Built-up Area)
                          </div>
                        </div>
                      </div>
                      <SlideUp delay={0.8}>
                        <Link
                          href="/master-plan"
                          className="flex lg:hidden items-center justify-center w-full gap-[10px] group mt-7 pt-[2px]"
                        >
                          <span className="text-[#002F52] font-satoshi text-base font-bold leading-5">
                            {propertyData.projectOverview.callToAction}
                          </span>
                          <svg
                            width="41"
                            height="8"
                            viewBox="0 0 41 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform group-hover:translate-x-1"
                          >
                            <path
                              d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4V4.5H40V4V3.5H0V4Z"
                              fill="#002F52"
                            />
                          </svg>
                        </Link>
                      </SlideUp>
                    </div>
                  </div>
                </SlideUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-visible no-negative-margin mt-[80px] h-full">
        <div className="relative bg-white px-4 lg:px-0 w-full container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[62px] items-start">
          <SlideUp
            delay={0.4}
            className="md:sticky md:top-[100px] md:overflow-hidden"
          >
            <TableOfContents propertyId={propertyId} />
          </SlideUp>
          <div className="flex-1 max-w-none">
            <div className="flex flex-col gap-15">
              {propertyData.questionAnswerDetails.map((item, index) => (
                <SlideUp
                  delay={index * 0.1}
                  key={index}
                  className="flex items-start gap-2 min-h-8"
                >
                  <ArticleContent item={item} index={index} />
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#F8FAFB] md:py-20 md:px-25 flex justify-center h-full mt-[80px]">
        <div className="flex md:flex-row flex-col w-[100%] md:justify-between gap-[40px]">
          <div className="max-md:col-span-2 md:p-2 pt-10 md:pt-0 px-4 lg:px-0">
            <SlideUp delay={0.4}>
              <h2 className="font-cormorant text-[36px] max-md:text-center md:leading-[72px] md:font-[400] md:text-[56px] text-black">
                Frequently
                <br className="max-md:hidden" /> Asked
                <br className="max-md:hidden" />{" "}
                <span className="orange-color">Questions</span>
              </h2>
            </SlideUp>
          </div>
          <div className="flex flex-col md:w-[70%] w-full">
            <FAQAccordion data={propertyData.faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
