"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SlideIn, SlideUp } from "./animations";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch featured blogs for the recent blogs section
        const response = await fetch(
          "https://admin.newkolkata.in/api/blog-posts?populate[0]=*&populate[1]=Postimage&populate[2]=thumbnailimage&populate[3]=Date&populate[4]=author.image&populate[5]=categories&filters[categories][slug][$eq]=featured&pagination[limit]=3"
        );
        const data = await response.json();
        
        if (data.data) {
          setBlogPosts(data.data);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const getImageUrl = (imageData) => {
    if (!imageData?.data?.attributes?.formats) return "/assets/blog1.png";
    
    const imageUrl = imageData.data.attributes.formats.medium?.url || 
           imageData.data.attributes.formats.small?.url || 
           imageData.data.attributes.url || 
           "/assets/blog1.png";
    
    // Add base URL if it's not already present and not a fallback image
    if (imageUrl !== "/assets/blog1.png" && !imageUrl.startsWith("http")) {
      return `https://admin.newkolkata.in${imageUrl}`;
    }
    
    return imageUrl;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryName = (blog) => {
    return blog.attributes.categories?.data?.[0]?.attributes?.categoryname || "Blog";
  };

  if (loading) {
    return (
      <section className="py-[80px] relative items-center md:justify-between justify-center flex flex-col">
        <div className="flex justify-center items-center h-32">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#026AA2]"></div>
            <p className="text-sm text-gray-600">Loading blogs...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[80px] relative items-center md:justify-between justify-center flex flex-col">
      <div className="flex items-center justify-between md:justify-between mb-[50px] w-full">
      <div className="w-full">
        <SlideUp delay={0.6} className="project-overview-title text-center md:text-start">Recent Blogs</SlideUp>
        </div>
        <SlideUp delay={0.8}>
        <a href="/blogs" className="hide-triangle border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
          View All Blogs
        </a>
         </SlideUp>
      </div>

      <SlideUp delay={0.6} className="grid md:grid-cols-3 gap-[20px] md:gap-8 grid-cols-2">
        {blogPosts.map((post, index) => (
          <a
            key={post.id}
            href={`/blogs-detail/${post.attributes.slug}`}
            className="flex flex-col hover:opacity-90 transition-opacity"
          >
            <div className="w-full h-[160px] md:h-[240px] relative">
              <Image
                src={getImageUrl(post.attributes.thumbnailimage)}
                alt={post.attributes.Title}
                fill
                className="object-cover transform transition-transform duration-300 ease-in-out hover:scale-98"
              />
            </div>
            <div className="flex flex-col items-start text-left">
                <p className="text-[14px] leading-[20px] font-semibold font-inter text-[#4F70AF] pt-[32px] pb-[12px]">
                    {formatDate(post.attributes.Date)}
                </p>
                <h3 className="text-[#22252E] text-[19px] md:text-[24px] font-[700] pb-[12px] line-clamp-2">
                    {post.attributes.Title}
                </h3>
                <p className="text-[15px] md:text-[16px] leading-[20px] font-normal font-satoshi text-[#5C5C5C] pb-[12px] overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {post.attributes.ShortDescription}
                </p>
                <p className="text-[14px] leading-[20px] font-medium text-[#026AA2] bg-[#F5F8FA] rounded-xl px-3 py-1">
                    {getCategoryName(post)}
                </p>
                <p className="text-sm font-satoshi font-medium text-[#DE804B] mt-[10px] md:mt-[24px] cursor-pointer hover:underline">
                    Read Blog →
                </p>
            </div>
          </a>
        ))}
      </SlideUp>

      <SlideUp delay={0.4}>
        <a href="/blogs" className="flex items-center justify-center min-w-[129px] none-md mt-[28px] border border-b-4 border-black px-4 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
          View All
        </a>
      </SlideUp>
    </section>
  );
};

export default Blogs;
