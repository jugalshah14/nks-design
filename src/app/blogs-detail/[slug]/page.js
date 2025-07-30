"use client";
import { SlideUp, FadeIn, AnimatedSection } from "@/components/animations";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function BlogDetail() {
  const params = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        // Fetch the specific blog by slug
        const response = await fetch(
          `https://admin.newkolkata.in/api/blog-posts?populate[0]=*&populate[1]=Postimage&populate[2]=thumbnailimage&populate[3]=Date&populate[4]=author.image&populate[5]=categories&filters[slug][$eq]=${params.slug}&pagination[limit]=1`
        );
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          setBlogData(data.data[0]);
          
          // Fetch related blogs (same category)
          const categorySlug = data.data[0].attributes.categories?.data?.[0]?.attributes?.slug;
          if (categorySlug) {
            const relatedResponse = await fetch(
              `https://admin.newkolkata.in/api/blog-posts?populate[0]=*&populate[1]=Postimage&populate[2]=thumbnailimage&populate[3]=Date&populate[4]=author.image&populate[5]=categories&filters[categories][slug][$eq]=${categorySlug}&filters[slug][$ne]=${params.slug}&pagination[limit]=3`
            );
            const relatedData = await relatedResponse.json();
            setRelatedBlogs(relatedData.data || []);
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog detail:", error);
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlogDetail();
    }
  }, [params.slug]);

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryName = () => {
    return blogData?.attributes.categories?.data?.[0]?.attributes?.categoryname || "Blog";
  };

  const getReadTime = () => {
    return blogData?.attributes.timeToRead || "5 min read";
  };

  const getAuthorName = () => {
    return blogData?.attributes.author?.data?.attributes?.name || "Alcove Team";
  };

  const getAuthorImage = () => {
    const authorImageUrl = blogData?.attributes.author?.data?.attributes?.image?.data?.attributes?.url || "/assets/person.png";
    
    // Add base URL if it's not already present and not a fallback image
    if (authorImageUrl !== "/assets/person.png" && !authorImageUrl.startsWith("http")) {
      return `https://admin.newkolkata.in${authorImageUrl}`;
    }
    
    return authorImageUrl;
  };

  // Function to parse HTML content and render it safely
  const renderHtmlContent = (htmlContent) => {
    if (!htmlContent) return null;
    
    // Decode HTML entities
    const decodedContent = htmlContent
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    return (
      <div 
        className="font-satoshi text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-[#555770]"
        dangerouslySetInnerHTML={{ __html: decodedContent }}
      />
    );
  };

  if (loading) {
    return (
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#026AA2]"></div>
            <p className="text-lg text-gray-600">Loading blog...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!blogData) {
    return (
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl">Blog not found</div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="relative max-w-7xl mx-auto gap-8 bg-white md:top-[107px] top-20 mb-20 md:mb-40 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 md:gap-[60px]">
          <div>
            {/* Meta Info */}
            <SlideUp delay={0.2}>
              <div className="flex items-center gap-3 mb-6 md:mb-[29px]">
                <a href="/blogs" className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#F5F8FA]">
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
                </a>

                <span className="bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[14px] leading-[20px] font-medium">
                  {getCategoryName()}
                </span>
                <span className="text-[#22252E] text-sm font-medium">
                  • {getReadTime()}
                </span>
              </div>
            </SlideUp>

            {/* Title */}
            <SlideUp delay={0.4}>
              <h2 className="font-normal text-[32px] md:text-[56px] leading-[40px] md:leading-[72px] font-cormorant mb-6">
                {blogData.attributes.Title}
              </h2>
            </SlideUp>

            {/* Featured Image */}
            <SlideUp delay={0.6}>
              <div className="relative w-full h-48 md:h-[494px] bg-gray-200 rounded-lg mb-8 md:mb-[49px]">
                <Image
                  src={getImageUrl(blogData.attributes.Postimage)}
                  alt={blogData.attributes.Title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SlideUp>

            {/* Blog Content */}
            <SlideUp delay={0.8}>
              <div className="mb-8 md:mb-10">
                {renderHtmlContent(blogData.attributes.PostData)}
              </div>
            </SlideUp>

            {/* Author/Share/Prev-Next Section */}
            <AnimatedSection>
              <div className="border-t border-b border-gray-200 py-6 md:py-8 mt-8 md:mt-12">
                {/* Author Info */}
                <div className="flex items-center w-full justify-between mb-4 md:mb-6">
                  <span className="block text-xs text-gray-500">Author</span>
                  <span className="text-xs text-gray-500 w-[75px]">Share on</span>
                </div>
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={getAuthorImage()}
                      alt={getAuthorName()}
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                    <span className="block font-semibold text-gray-800">
                      {getAuthorName()}
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
                  href="/blogs"
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
                  Back to Blogs
                </a>
              </div>
            </SlideUp>
          </div>

          {/* Sidebar */}
          <aside className="flex sticky flex-col gap-8 md:gap-[57px] mt-8 md:mt-[70px]">
            {/* Author Card */}
            <SlideUp delay={0.4}>
              <div className="flex flex-col items-start">
                <span className="text-sm text-[#555770] font-normal leading-[20px] mb-3">Author</span>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <Image
                    src={getAuthorImage()}
                    alt={getAuthorName()}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                  <span className="font-bold text-[#282C3F] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px]">{getAuthorName()}</span>
                </div>
                <span className="text-sm text-[#555770] font-normal leading-[20px] mb-1">Published on</span>
                <span className="text-base md:text-lg text-[#282C3F] font-normal leading-[20px] md:leading-[24px]">{formatDate(blogData.attributes.Date)}</span>
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
              <Link href="/life-@-alcove" className="overflow-hidden">
                <div className="w-full h-[120px] md:h-[144px] relative">
                  <Image
                    src="/assets/blogs-hr.png"
                    alt="Alcove amenities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="py-4 md:py-5 px-4 md:px-6 flex flex-col border border-t-none border-[#144D78] border-b-4">
                  <span className="font-bold text-[#22252E] text-[20px] md:text-[24px] leading-[24px] md:leading-[28px]">
                    Curious to see life @Alcove and world-class amenities?
                  </span>
                  <span className="items-center text-[#22252E] text-base md:text-lg font-medium mt-6 md:mt-[46px] cursor-pointer group mb-4 md:mb-5">
                    <Image
                      src="/assets/icons/arrowlong.svg"
                      alt=""
                      width={40}
                      height={3}
                    />
                  </span>
                </div>
              </Link>
            </SlideUp>
          </aside>
        </div>
      </section>

      {/* You may also like to read Section */}
      {relatedBlogs.length > 0 && (
        <section className="bg-[#f7fafc] py-12 md:py-16 h-auto md:h-[374px] md:mb-80">
          <div className="max-w-7xl mx-auto px-4 md:px-7 lg:px-0">
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
              {relatedBlogs.map((blog, index) => (
                <SlideUp key={blog.id} delay={0.7 + index * 0.1}>
                  <div className="flex flex-col">
                    <div className="relative w-full h-[200px] md:h-[240px] rounded-md overflow-hidden">
                      <Image
                        src={getThumbnailUrl(blog.attributes.thumbnailimage)}
                        alt={blog.attributes.Title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="py-4 md:py-[32px] flex flex-col gap-2 md:gap-3">
                      <span className="text-[#4F70AF] text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] font-semibold">
                        {formatDate(blog.attributes.Date)}
                      </span>
                      <div className="flex items-center justify-between">
                        <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-bold text-black">
                          {blog.attributes.Title}
                        </h3>
                        <span className="ml-auto text-white text-lg">↗</span>
                      </div>
                      <p className="text-[#5C5F68] text-[14px] md:text-base leading-[18px] md:leading-[20px] font-normal line-clamp-2">
                        {blog.attributes.ShortDescription}
                      </p>
                      <span className="w-fit font-satoshi bg-[#F5F8FA] text-[#026AA2] rounded-full px-3 py-1 text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] font-medium">
                        {blog.attributes.categories?.data?.[0]?.attributes?.categoryname || "Blog"}
                      </span>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}