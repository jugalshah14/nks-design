import React from 'react'
import Image from "next/image";
import { SlideUp } from './animations';


const amenities = [
    {
        number: "1",
        title: "Hypermarket",
        description: "",
        image: "/assets/r1.jpg",
        imageType: "Stock Image"
    },
    {
        number: "2",
        title: "Food Court",
        description: "",
        image: "/assets/r2.jpg",
        imageType: "Stock Image"
    },
    {
        number: "3",
        title: "Apparel",
        description: "",
        image: "/assets/r3.jpg",
        imageType: "Stock Image"
    },
    {
        number: "4",
        title: "Restaurant",
        description: "",
        image: "/assets/r4.jpg",
        imageType: "Stock Image"
    },
    {
        number: "5",
        title: "Entertainment Zone",
        description: "",
        image: "/assets/r5.jpg",
        imageType: "Stock Image"
    },
    {
        number: "6",
        title: "Movie Theatre",
        description: "(4 screens, 800 seating capacity, SVF Cinemas)",
        image: "/assets/r6.png",
        imageType: "Stock Image"
    },
];


export default function RetailCards() {
    return (
        <SlideUp delay={0.6} className="relative text-white container mx-auto justify-center items-center flex">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[40px] mb-3 md:mb-20 px-4 md:px-0 justify-center items-center w-fit">
                {amenities.map((item, index) => (
                    <div
                        key={item.number}
                        className={`relative ${index % 2 === 1 ? 'top-10' : ''} ${(index === 1 || index === 4) ? 'md:top-14' : ''} space-y-[12px] md:space-y-5 md:pl-[40px] md:pr-[10px]`}
                        >
                        <div className='absolute h-[65%] left-[-5px] md:border-l md:border-dashed md:border-gray-300'></div>
                        <div className="md:text-[30px] md:leading-[28px] max-md:text-center text-[20px] font-cormorant leading-7 orange-color font-semibold md:text-lg">{item.number}</div>
                     <h3 className="justify-center flex md:justify-start text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-satoshi leading-[24px] h-[40px] md:h-auto flex items-center">
                    {item.title}
                    </h3>

                        <div className="md:max-w-[240px] w-full h-[160px] md:h-[240px] relative overflow-hidden">
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
                        <p className="md:max-w-[240px] font-satoshi text-[14px] md:text-[16px] text-[#22252E]/60 md:text-[#22252E] font-[400] text-center md:text-left">{item.description}</p>
                    </div>
                ))}
            </div>
        </SlideUp>
    )
}
