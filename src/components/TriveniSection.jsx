import React from 'react'
import Image from "next/image";
import { SlideUp } from './animations';


const amenities = [
    {
        number: "1",
        title: "Established Residential Hub",
        image: "/assets/t1.png",
        imageType: "Actual Image"
    },
    {
        number: "2",
        title: "Built In Consumer Base",
        image: "/assets/t2.jpg",
        imageType: "Artist Impression"
    },
    {
        number: "3",
        title: "Growing Customer Base",
        image: "/assets/t3.jpg",
        imageType: "Artist Impression"
    },
    {
        number: "4",
        title: "Three-Way Connectivity",
        image: "/assets/o6.png",
        imageType: "Stock Image"
    },
];


export default function TriveniSection() {
    return (
        <SlideUp delay={0.6} className="relative text-white space-triveni md:py-12 container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3 md:mb-20 px-4 md:px-0">
                {amenities.map((item, index) => (
                    <div
                        key={item.number}
                        className={`relative ${index % 2 !== 0 ? 'top-10 md:top-14' : ''} space-y-4 md:space-y-5 md:px-4`}
                    >
                        <div className='absolute h-[65%] left-[-5px] md:border-l md:border-dashed md:border-gray-300'></div>
                        {/* <div className="md:text-[30px] md:leading-[28px] max-md:text-center text-[20px] font-cormorant leading-7 orange-color font-semibold md:text-lg">{item.number}</div> */}
                     <h3 className="text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-satoshi leading-[24px] h-[40px] md:h-auto flex items-center">
                    {item.title}
                    </h3>

                        <div className="w-full h-[160px] md:h-[240px] relative overflow-hidden">
                            {/* Info Icon */}
                            <div className="absolute top-3 right-3 cursor-pointer flex flex-row items-center rounded-xl bg-black/20 z-10 group">
                                <div className="overflow-hidden">
                                    <div className="text-[12px] text-white whitespace-nowrap opacity-0 max-w-0 group-hover:px-2 group-hover:opacity-100 group-hover:max-w-[100px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                                        {item.imageType}
                                    </div>
                                </div>
                                <Image src="/assets/icons/info.svg" alt="info" width={20} height={20} className="" />
                            </div>
                            
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* <p className="font-satoshi text-[14px] md:text-[16px] text-[#22252E]/60 md:text-[#22252E] font-[400] text-center md:text-left">{item.description}</p> */}
                    </div>
                ))}
            </div>
        </SlideUp>
    )
}
