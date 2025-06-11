"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { SlideUp } from './animations';
import ReviewSliderOne from './ReviewSliderOne';


export default function ReviewsOne() {
  const [swiperRef, setSwiperRef] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('2D');
  const [fade, setFade] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeBHK, setActiveBHK] = useState('3BHK');
  const [bhkFade, setBhkFade] = useState(false);

  const sectionRefs = {
    '3BHK': useRef(null),
    '2BHK': useRef(null),
    '4BHK': useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 

      // Find which section is currently in view
      Object.entries(sectionRefs).forEach(([bhk, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveBHK(bhk);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div>
        {/* Section 1 for 3BHK */}
        <div>
             {/* optional */}
            <div className='relative bg-[#020C22] w-full h-[37px] flex items-end justify-center hide-triangle'>
                <div className="absolute top-[37px] left-0 h-[37px] bg-[#020C22] w-[calc((100vw-85%)/2)]"></div>
                <div className="absolute top-[37px] right-0 h-[37px] bg-[#020C22] w-[calc((100vw-85%)/2)]"></div>
            </div>
            {/* review 1 */}
            <div className='relative'>
                <div className='z-[-1] bg-[#F3F6F8] w-[100%] md:w-[53%] h-[360px] md:h-[248px] absolute bottom-[70px] md:bottom-0 left-0'></div>
                <div className='container mx-auto'>
                    <div className="relative z-10 text-center w-full p-[48px] bg-white">
                        <SlideUp delay={0.4} className="project-overview-title text-center md:pb-[28px] md:pb-[0px]"><span className="orange-color">3 BHK's </span>Customers </SlideUp>
                    </div>
                    <SlideUp delay={0.6}>
                        <div className='flex flex-col md:flex-row px-[30px] pb-[100px]'>
                            <div className='flex flex-col md:flex-row w-full justify-between'>
                                <div className='relative flex flex-col pl-0 md:pl-[50px] p-[20px] md:p-[50px] gap-[10px] md:gap-[32px] !pb-0'>
                                    <Image src="/assets/linee.svg" alt="line" width={140} height={3} className="absolute top-0 left-0"/>
                                    <div>
                                        <h1 className='text-left text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-satoshi font-[700]'>Siddharth Das</h1>
                                        <p className='text-black/50 text-left text-[14px] md:text-[16px] leading-[20px] font-satoshi font-[400]'>Owner of flat in Serenity</p>
                                    </div>
                                    <div>
                                        <h1 className='text-black/50 text-left text-[14px] md:text-[16px] leading-[20px] font-satoshi font-[400]'>BHK Type</h1>
                                        <p className='text-left text-[18px] md:text-[24px] leading-[28px] font-satoshi font-[400]'>3BHK</p>
                                    </div>
                                    <div>
                                        <h1 className='text-black/50 text-left text-[14px] md:text-[16px] leading-[20px] font-satoshi font-[400]'>No of Family Members</h1>
                                        <p className='text-left text-[18px] md:text-[24px] leading-[28px] font-satoshi font-[400]'>5</p>
                                    </div>
                                    <div>
                                        <h1 className='text-black/50 text-left text-[14px] md:text-[16px] leading-[20px] font-satoshi font-[400]'>Unit area</h1>
                                        <p className='text-left text-[18px] md:text-[24px] leading-[28px] font-satoshi font-[400]'>56 m2  - 76 m2</p>
                                    </div>
                                </div>
                                <Image src="/assets/rev1.png" alt="people" width={321} height={357} className="object-cover object-[40%_50%] my-[30px] md:my-0"/>
                                
                            </div>
                            <div className='relative flex items-end md:pl-[64px]'>
                                <Image src="/assets/circle.svg" alt="quote" width={353} height={353} className="hide-triangle absolute top-[-100px] left-[-100px]"/>
                                <Image src="/assets/quote.svg" alt="quote" width={38} height={38} className="hide-triangle absolute top-[120px] left-[38px]"/>
                                <p className='md:pl-[38px] md:min-w-[500px] md:max-w-[500px] text-left text-[16px] md:text-[20px] leading-[28px] font-satoshi font-[400] italic'>First and foremost, the construction and design of the apartments are top-notch. The 2BHK apartment I purchased is not only spacious but also thoughtfully designed, making the most efficient use of available space. The layout is functional and provides ample natural light and ventilation, creating a comfortable and inviting living environment.</p>
                            </div>

                        </div>
                    </SlideUp>
                </div>
            </div>

            {/* review 2 */}
            <SlideUp delay={0.4} className='relative pt-[0px] md:pt-[100px]'>
                <div className='container mx-auto'>
                    <SlideUp delay={0.6}>
                        <div className='flex flex-col-reverse md:flex-row px-[30px] pb-[100px]'>
                            <div className='relative flex items-end'>
                                <Image src="/assets/circle.svg" alt="quote" width={353} height={353} className="hide-triangle absolute top-[-70px] left-[-250px]"/>
                                <Image src="/assets/quote.svg" alt="quote" width={38} height={38} className="hide-triangle absolute top-[120px] left-[-30px]"/>
                                <p className='md:pl-[38px] md:min-w-[500px] md:max-w-[500px] text-left text-[16px] md:text-[20px] leading-[28px] font-satoshi font-[400] italic'>First and foremost, the construction and design of the apartments are top-notch. The 2BHK apartment I purchased is not only spacious but also thoughtfully designed, making the most efficient use of available space. The layout is functional and provides ample natural light and ventilation, creating a comfortable and inviting living environment.</p>
                            </div>
                            <div className='md:pl-[64px] flex flex-col-reverse md:flex-row w-full justify-between'>
                                <Image src="/assets/Neha.png" alt="people" width={321} height={357} className="object-cover object-[60%_50%] my-[30px] md:my-0"/>
                                <div className='relative flex flex-col pl-0 md:pl-[50px] p-[20px] md:p-[50px] gap-[10px] md:gap-[32px] !pb-0'>
                                    <Image src="/assets/linee.svg" alt="line" width={140} height={3} className="absolute top-0 left-0"/>
                                    <div>
                                        <h1 className='text-left text-[18px] md:text-[24px] leading-[24px] md:leading-[28px] font-satoshi font-[700]'>Neha Mohapatra</h1>
                                        <p className='text-black/50 text-left text-[14px] md:text-[16px] leading-[20px] font-satoshi font-[400]'>Owner of flat in Serenity</p>
                                    </div>
                                    <div>
                                        <h1 className='text-black/50 text-left text-[14px] md:text-[16px] leading-[20px] font-satoshi font-[400]'>BHK Type</h1>
                                        <p className='text-left text-[18px] md:text-[24px] leading-[28px] font-satoshi font-[400]'>3BHK</p>
                                    </div>
                                    <div>
                                        <h1 className='text-black/50 text-left text-[14px] md:text-[16px] leading-[20px] font-satoshi font-[400]'>No of Family Members</h1>
                                        <p className='text-left text-[18px] md:text-[24px] leading-[28px] font-satoshi font-[400]'>5</p>
                                    </div>
                                    <div>
                                        <h1 className='text-black/50 text-left text-[14px] md:text-[16px] leading-[20px] font-satoshi font-[400]'>Unit area</h1>
                                        <p className='text-left text-[18px] md:text-[24px] leading-[28px] font-satoshi font-[400]'>56 m2  - 76 m2</p>
                                    </div>
                                </div>
                                
                            </div>
                            

                        </div>
                    </SlideUp>
                </div>
                <div className='z-[-1] bg-[#F3F6F8] w-[100%] md:w-[53%] h-[360px] md:h-[248px] absolute bottom-[70px] md:bottom-0 right-0'></div>
            </SlideUp>
            {/* slider */}
            <div className='realtive md:pt-[80px]'>
                <div className="w-full flex justify-center none-md pb-4">
                    <h2 className="project-overview-title text-center pb-[30px] md:pb-[28px]">
                        Other <br />
                        <span className="orange-color">Reviews</span>
                    </h2>
                </div>
                <SlideUp delay={0.4}><ReviewSliderOne /></SlideUp>
            </div>
            {/* Card */}
            <SlideUp
                delay={0.4}
                className="mt-[40px] md:mt-0 mb-[40px] md:mb-[80px] container mx-auto flex flex-row justify-center w-full md:px-[200px] group cursor-pointer transform transition-transform duration-300 hover:scale-101"
            >
                <Image
                src="/assets/faqs-detail-gif.gif"
                width={144}
                height={144}
                alt="house"
                className="img-size  md:h-[144px] md:w-[144px]"
                />
                <div
                className="bg-white relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center cursor-pointer"
                style={{ borderTopWidth: "1px", borderBottomWidth: "4px" }}
                >
                <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">
                    Embrace the beauty of your surroundings, know our neighbourhood
                </h1>
                <Image
                    src="/assets/icons/arrowlong.svg"
                    alt="1BHK"
                    width={40}
                    height={3}
                    className="absolute right-[10px] md:right-[40px]"
                />
                <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
                </div>
            </SlideUp>
        </div>
        {/* Section 1 end */}
        
    </div>
  );
}
