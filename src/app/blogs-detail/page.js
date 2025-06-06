"use client";
import { SlideUp, FadeIn, AnimatedSection } from "@/components/animations";
import Image from "next/image";
import { blogDetailData } from "@/data/blogDetail";

export default function BlogsDetail() {
  const {
    meta,
    title,
    featuredImage,
    keyTakeaways,
    content,
    relatedPosts,
    sidebar
  } = blogDetailData;

  return (
    <main>
      <section className="relative max-w-7xl mx-auto gap-8 bg-white md:top-[107px] top-20 mb-20 md:mb-40 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 md:gap-[60px]">
          <div>
            {/* Meta Info */}
            <SlideUp delay={0.2}>
              <div className="flex items-center gap-3 mb-6 md:mb-[29px]">
                <span className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#F5F8FA]">
                  <svg width="16" height="12" fill="none" viewBox="0 0 24 24">
                    {/* Arrowhead */}
                    <path
                      d="M15 6L9 12L15 18"
                      stroke="#22252E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Horizontal line */}
                    <path
                      d="M9 12H21"
                      stroke="#22252E"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <span className="bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                  {meta.category}
                </span>
                <span className="text-[#22252E] text-sm font-medium">
                  • {meta.readTime}
                </span>
              </div>
            </SlideUp>
            {/* Title */}
            <SlideUp delay={0.4}>
              <h2 className="font-normal text-[32px] md:text-[56px] leading-[40px] md:leading-[72px] font-cormorant mb-6">
                {title}
              </h2>
            </SlideUp>
            {/* Image Placeholder */}
            <SlideUp delay={0.6}>
              <div className="relative w-full h-48 md:h-[494px] bg-gray-200 rounded-lg mb-8 md:mb-[49px]">
                <Image
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  fill
                  className=" rounded-lg"
                />
              </div>
            </SlideUp>
            {/* Key Takeaways */}
            <SlideUp delay={0.8}>
              <div className="mb-6">
                <h2 className="font-bold font-satoshi text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] mb-4 md:mb-5">
                  {keyTakeaways.title}
                </h2>
                <div className="mb-8 md:mb-10 font-satoshi text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-[#555770]">
                  <p className="mb-3">{keyTakeaways.description}</p>
                  <ul className="list-disc pl-4 space-y-1">
                    {keyTakeaways.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SlideUp>
            {/* Content Section */}
            {content.map((section, index) => (
              <SlideUp key={index} delay={1 + index * 0.2}>
                <div>
                  <h3 className="font-bold font-satoshi text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] mb-4 md:mb-5">
                    {section.title}
                  </h3>
                  <p className="mb-8 md:mb-10 font-satoshi text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-[#555770]">
                    {section.text}
                  </p>
                  {section.list && (
                    <ul className="list-disc pl-4 md:pl-6 mb-6 font-satoshi text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#555770]">
                      {section.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.additionalText?.map((text, idx) => (
                    <p key={idx} className="mb-6 font-satoshi text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-[#555770]">
                      {text}
                    </p>
                  ))}
                  {section.image && (
                    <div className="relative w-full h-48 md:h-[358px]">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                      />
                    </div>
                  )}
                </div>
              </SlideUp>
            ))}

            {/* Author/Share/Prev-Next Section */}
            <AnimatedSection>
              <div className="border-t border-b border-gray-200 py-6 md:py-8 mt-8 md:mt-12">
                {/* Author Info */}
                <div className="flex items-center w-full justify-between mb-4 md:mb-6">
                  <span className="block text-xs text-gray-500">Author</span>
                  <span className="text-xs text-gray-500 mr-2">Share on</span>
                </div>
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={meta.author.image}
                      alt={meta.author.name}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <span className="block font-semibold text-gray-800">
                      {meta.author.name}
                    </span>
                  </div>
                  {/* Social Share */}
                  <div className="flex items-center gap-2">
                    <a href="#" className="text-gray-500 hover:text-blue-700">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.195-1.767 2.429v4.688h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v4.725z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-700">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.322-.593 1.322-1.326v-21.349c0-.734-.593-1.326-1.326-1.326z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-700">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.138a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <SlideUp delay={1.2}>
              <div className="flex items-center justify-between w-full mt-6">
                <a
                  href="#"
                  className="flex items-center text-[#F27E38] hover:underline text-sm font-medium mr-4 md:mr-8"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="mr-1"
                  >
                    <path
                      d="M15 6L9 12L15 18"
                      stroke="#F27E38"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Previous Post
                </a>
                <a
                  href="#"
                  className="flex items-center text-[#F27E38] hover:underline text-sm font-medium"
                >
                  Next Post
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="ml-1"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="#F27E38"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </SlideUp>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8 md:gap-[57px] mt-8 md:mt-[70px]">
            {/* Author Card */}
            <SlideUp delay={0.4}>
              <div className="flex flex-col items-start">
                <span className="text-sm text-[#555770] font-normal leading-[20px] mb-3">Author</span>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <Image
                    src={meta.author.image}
                    alt={meta.author.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                  <span className="font-bold text-[#282C3F] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px]">{meta.author.name}</span>
                </div>
                <span className="text-sm text-[#555770] font-normal leading-[20px] mb-1">Published on</span>
                <span className="text-base md:text-lg text-[#282C3F] font-normal leading-[20px] md:leading-[24px]">{meta.publishDate}</span>
                <span className="text-sm text-[#555770] font-normal leading-[20px] mt-6 md:mt-8">Share on</span>
                <div className="flex gap-6 md:gap-8 mt-3">
                  <a href="#" className="w-6 h-6">
                    <svg width="20" height="20" fill="#555770" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.195-1.767 2.429v4.688h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v4.725z" />
                    </svg>
                  </a>
                  <a href="#" className="w-6 h-6">
                    <svg width="20" height="20" fill="#555770" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.322-.593 1.322-1.326v-21.349c0-.734-.593-1.326-1.326-1.326z" />
                    </svg>
                  </a>
                  <a href="#" className="w-6 h-6">
                    <svg width="20" height="20" fill="#555770" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.138a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" />
                    </svg>
                  </a>
                </div>
              </div>
            </SlideUp>
            {/* Sidebar Card */}
            <SlideUp delay={0.6}>
              <div className="overflow-hidden">
                <div className="w-full h-[120px] md:h-[144px] relative">
                  <Image
                    src={sidebar.cta.image}
                    alt="Alcove amenities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="py-4 md:py-5 px-4 md:px-6 flex flex-col border border-t-none border-[#144D78] border-b-4">
                  <span className="font-bold text-[#22252E] text-[20px] md:text-[24px] leading-[24px] md:leading-[28px]">
                    {sidebar.cta.title}
                  </span>
                  <span className="items-center text-[#22252E] text-base md:text-lg font-medium mt-6 md:mt-[46px] cursor-pointer group mb-4 md:mb-5">
                    <Image
                      src={sidebar.cta.arrowIcon}
                      alt=""
                      width={40}
                      height={3}
                    />
                  </span>
                </div>
              </div>
            </SlideUp>
          </aside>
        </div>
      </section>

      {/* You may also like to read Section */}
      <section className="bg-[#f7fafc] py-12 md:py-16 h-auto md:h-[374px] md:mb-80">
        <div className="max-w-7xl mx-auto px-4 md:px-7 lg:px-0">
          <SlideUp delay={0.2}>
            <div className="text-[#22252E] text-[14px] md:text-[16px] mb-2 font-normal">/ Location</div>
          </SlideUp>
          <SlideUp delay={0.4}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8 md:mb-10">
              <div>
                <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-cormorant text-black leading-[1.1]">
                  You may also like to read
                </h2>
              </div>
              <a
                href="/blogs"
                className="border border-[#22252E] rounded-md px-4 md:px-6 py-2 md:py-3 font-satoshi text-[14px] md:text-[16px] font-medium hover:bg-[#22252E] hover:text-white transition"
              >
                View All Blogs
              </a>
            </div>
          </SlideUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mt-12 md:mt-20 relative z-10">
            {relatedPosts.map((post, index) => (
              <SlideUp key={index} delay={0.7 + index * 0.1}>
                <div className="flex flex-col">
                  <div className="relative w-full h-[200px] md:h-[240px] rounded-md overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="py-4 md:py-[32px] flex flex-col gap-2 md:gap-3">
                    <span className="text-[#4F70AF] text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] font-semibold">
                      {post.date}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-bold text-black">
                        {post.title}
                      </h3>
                      <span className="ml-auto text-white text-lg">↗</span>
                    </div>
                    <p className="text-[#5C5F68] text-[14px] md:text-base leading-[18px] md:leading-[20px] font-normal">
                      {post.description}
                    </p>
                    <span className="w-fit font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
