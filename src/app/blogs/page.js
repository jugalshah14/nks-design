"use client";
import { AnimatedSection, SlideUp } from "@/components/animations";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function LifeAtAlcove() {
  const [selectedNav, setSelectedNav] = useState("Featured");
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [residentialBlogs, setResidentialBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navTabs = ["Featured", "Residential"];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch Featured Blogs
        const featuredResponse = await fetch(
          "https://admin.newkolkata.in/api/blog-posts?populate[0]=*&populate[1]=Postimage&populate[2]=thumbnailimage&populate[3]=Date&populate[4]=author.image&populate[5]=categories&filters[categories][slug][$eq]=featured&pagination[limit]=-1&sort[0]=Date:desc"
        );
        const featuredData = await featuredResponse.json();
        setFeaturedBlogs(featuredData.data || []);

        // Fetch Residential Blogs
        const residentialResponse = await fetch(
          "https://admin.newkolkata.in/api/blog-posts?populate[0]=*&populate[1]=Postimage&populate[2]=thumbnailimage&populate[3]=Date&populate[4]=author.image&populate[5]=categories&filters[categories][slug][$eq]=residential&pagination[limit]=-1&sort[0]=Date:desc"
        );
        const residentialData = await residentialResponse.json();
        setResidentialBlogs(residentialData.data || []);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getImageUrl = (imageData) => {
    if (!imageData?.data?.attributes?.formats) return "/assets/Blogs-1.png";
    
    const imageUrl = imageData.data.attributes.formats.medium?.url || 
           imageData.data.attributes.formats.small?.url || 
           imageData.data.attributes.url || 
           "/assets/Blogs-1.png";
    
    // Add base URL if it's not already present and not a fallback image
    if (imageUrl !== "/assets/Blogs-1.png" && !imageUrl.startsWith("http")) {
      return `https://admin.newkolkata.in${imageUrl}`;
    }
    
    return imageUrl;
  };

  const getThumbnailUrl = (thumbnailData) => {
    if (!thumbnailData?.data?.attributes?.formats) return "/assets/blogs-2.png";
    
    const thumbnailUrl = thumbnailData.data.attributes.formats.thumbnail?.url || 
           thumbnailData.data.attributes.formats.small?.url || 
           thumbnailData.data.attributes.url || 
           "/assets/blogs-2.png";
    
    // Add base URL if it's not already present and not a fallback image
    if (thumbnailUrl !== "/assets/blogs-2.png" && !thumbnailUrl.startsWith("http")) {
      return `https://admin.newkolkata.in${thumbnailUrl}`;
    }
    
    return thumbnailUrl;
  };

  const getCategoryName = (blog) => {
    return blog.attributes.categories?.data?.[0]?.attributes?.categoryname || "Featured";
  };

  const getReadTime = (blog) => {
    return blog.attributes.timeToRead || "5 min read";
  };

  // Blog Card Component
  const BlogCard = ({ blog, variant = "side", delay = 0, showDescription = true, categoryBgColor = null }) => {
    if (variant === "side") {
      return (
        <SlideUp delay={delay}>
          <a href={`/blogs-detail/${blog.attributes.slug}`} className="block">
            <div className="flex flex-col mx-7 md:mx-0 md:flex-row gap-4 items-stretch font-satoshi hover:opacity-90 transition-opacity">
              <div className="md:mt-7 relative md:min-w-[272px] md:w-[272px] h-[201px] overflow-hidden">
                <Image
                  src={getThumbnailUrl(blog.attributes.thumbnailimage)}
                  alt={blog.attributes.Title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 md:pt-6 gap-4">
                <div className="flex items-center gap-3">
                  <span className={`${categoryBgColor || 'bg-[#F5F8FA]'} text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium`}>
                    {getCategoryName(blog)}
                  </span>
                  <span className="text-[#22252E] text-sm font-medium">
                    • {getReadTime(blog)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-black leading-[28px]">
                  {blog.attributes.Title}
                </h3>
                {showDescription && (
                  <p className="text-[#5C5F68] text-base leading-[20px] font-normal line-clamp-3">
                    {blog.attributes.ShortDescription}
                  </p>
                )}
                <span className="orange-color leading-[20px] font-bold flex items-center gap-2 text-base">
                  Read Article <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </a>
        </SlideUp>
      );
    }

    if (variant === "grid") {
      return (
        <SlideUp delay={delay}>
          <a href={`/blogs-detail/${blog.attributes.slug}`} className="block">
            <div className="flex flex-col hover:opacity-90 transition-opacity cursor-pointer">
              <div className="relative w-full h-[240px] overflow-hidden">
                <Image
                  src={getThumbnailUrl(blog.attributes.thumbnailimage)}
                  alt={blog.attributes.Title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:py-[32px] py-[16px] flex flex-col gap-3">
                <span className="text-[#4F70AF] text-[14px] leading-[20px] font-semibold">
                  {formatDate(blog.attributes.Date)}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-[24px] leading-[28px] font-bold text-black">
                    {blog.attributes.Title}
                  </h3>
                  <span className="ml-auto text-white text-lg"><Image src="/assets/icons/arrow-orange.svg" alt="arrow" width={20} height={20} className="w-5 h-5" /></span>
                </div>
                <p className="text-[#5C5F68] text-base leading-[20px] font-normal line-clamp-2">
                  {blog.attributes.ShortDescription}
                </p>
                <span className={`w-fit font-satoshi ${categoryBgColor || 'bg-white'} text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium`}>
                  {getCategoryName(blog)}
                </span>
              </div>
            </div>
          </a>
        </SlideUp>
      );
    }

    return null;
  };

  if (loading) {
    return (
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#026AA2]"></div>
            <p className="text-lg text-gray-600">Loading blogs...</p>
          </div>
        </div>
      </main>
    );
  }

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
        <nav className="mb-10 md:mt-30 relative w-full mt-10 flex max-md:gap-10 justify-center items-center border-t border-b border-[#22252e19] py-4 md:py-6 px-7 md:px-0">
          {navTabs.map((tab, idx) => (
            <React.Fragment key={tab}>
              <button
                id={`blogs-nav-${tab.toLowerCase().replace(/\s/g, "-")}`}
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
        {featuredBlogs.length > 0 && (
        <SlideUp delay={0.8}>
          <div className="flex flex-col mx-7 md:mx-0">
              <div className="flex justify-center md:mt-7 relative w-full h-[351px] overflow-hidden">
              <Image
                  src={getImageUrl(featuredBlogs[0].attributes.Postimage)}
                  alt={featuredBlogs[0].attributes.Title}
                fill
                className="object-cover"
              />
            </div>
            <SlideUp delay={0.1}>
              <div className="my-7 flex flex-col gap-6">
                <div className="flex items-center gap-3 font-satoshi">
                  <span className="font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                      {getCategoryName(featuredBlogs[0])}
                    </span>
                    <span className="text-[#22252E] text-sm font-medium">
                      • {getReadTime(featuredBlogs[0])}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-cormorant text-black leading-[44px] font-normal">
                    {featuredBlogs[0].attributes.Title}
                  </h2>
                    <p className="text-[#5C5F68] text-base leading-[20px] font-normal">
                    {featuredBlogs[0].attributes.ShortDescription}
                    </p>
                  <a
                    href={`/blogs-detail/${featuredBlogs[0].attributes.slug}`}
                    className="orange-color leading-[20px] font-bold flex items-center gap-2 text-base "
                  >
                    Read Article <span className="ml-2">→</span>
                  </a>
                </div>
              </SlideUp>
              </div>
            </SlideUp>
        )}

        {/* Right Side Cards - Using Mapping */}
        <SlideUp>
          <div className="flex flex-col gap-6">
            {featuredBlogs.slice(1, 4).map((blog, index) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                variant="side"
                delay={index}
                // showDescription={index === 1} // Only show description for second card
              />
            ))}
          </div>
        </SlideUp>
      </section>

      {/* Additional Featured Blogs Grid */}
      {featuredBlogs.length > 4 && (
        <section className="w-full max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-7 md:mx-0">
            {featuredBlogs.slice(4).map((blog, index) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                variant="grid"
                delay={index}
                categoryBgColor="bg-[#F5F8FA]"
              />
            ))}
          </div>
        </section>
      )}

      {/* Residential Section */}
      <section
        id="residential"
        className="relative w-full pt-10 pb-10 md:pt-20 md:pb-0 bg-[#F3F6F8]"
      >
        <div className="text-center md:mb-12 mb-6">
          <SlideUp delay={0.8}>
            <h2 className="text-[56px] leading-[72px] font-normal font-cormorant text-black">
              Residential
            </h2>
          </SlideUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-7 md:px-0">
          {residentialBlogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              variant="grid"
              delay={index * 0}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
