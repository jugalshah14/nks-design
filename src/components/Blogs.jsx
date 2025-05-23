"use client";
import Image from "next/image";
import React from "react";

const blogPosts = [
  {
    id: 1,
    date: "Sunday , 1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tag: "Construction Update",
    tagColor: "text-[#0075FF]",
    image: "/assets/blog1.png",
  },
  {
    id: 2,
    date: "Sunday , 1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tag: "New Tower Launch",
    tagColor: "text-[#0075FF]",
    image: "/assets/blog2.jpg",
  },
  {
    id: 3,
    date: "Sunday , 1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tag: "Product",
    tagColor: "text-[#0075FF]",
    image: "/assets/blog3.jpg",
  },
];

const Blogs = () => {
  return (
    <section className="py-[80px] relative items-center md:justify-between justify-center flex flex-col">
      <div className="flex items-center justify-between md:justify-between mb-[50px] w-full">
      <div className="w-full">
        <p className="text-[14px] leading-5 md:text-[16px] font-[Satoshi] font-[400] md:leading-[22px] text-[#22252e] mb-2 text-center md:text-start">/ Location</p>
        <h2 className="project-overview-title text-center md:text-start">Recent Blogs</h2>
        </div>
        <button className="hide-triangle border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap">
          View All Blogs
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-[20px] md:gap-8 grid-cols-2">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className={`flex flex-col ${
              post.id === 3 ? "hidden md:flex" : ""
            }`}
          >
            <div className="w-full h-[160px] md:h-[240px] relative">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="flex flex-col items-start text-left">
                <p className="text-[14px] leading-[20px] font-semibold font-inter text-[#5C5C5C] pt-[32px] pb-[12px]">
                    {post.date}
                </p>
                <h3 className="text-[#22252E] text-[19px] md:text-[24px] font-[700] pb-[12px]">
                    {post.title}
                </h3>
                <p className="text-[15px] md:text-[16px] leading-[20px] font-normal font-satoshi text-[#5C5C5C] pb-[12px]">
                    {post.description}
                </p>
                <p className="text-[14px] leading-[20px] font-medium text-[#026AA2] bg-[#F5F8FA] rounded-xl px-3 py-1">
                    {post.tag}
                </p>
                <p className="text-sm font-satoshi font-medium text-[#DE804B] mt-[10px] md:mt-[24px] cursor-pointer hover:underline">
                    Read Blog →
                </p>
            </div>
            
          </div>
          
        ))}
      </div>
      <button className="none-md mt-[28px] border border-b-4 border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap">
        View All Blogs
      </button>
    </section>
  );
};

export default Blogs;
