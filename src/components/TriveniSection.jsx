import React from 'react'
import Image from "next/image";
import { SlideUp } from './animations';


const amenities = [
    {
        number: "1",
        title: "Established Residential Hub",
        description: "An integral part of two landmark projects—New Kolkata Prayag and Sangam—offering a ready audience and sustained commercial growth.",
        image: "/assets/t1.png", 
    },
    {
        number: "2",
        title: "Built In Consumer Base",
        description: "Part of New Kolkata Prayag (1274 units, completed Jan 2022) and Sangam (3364 units, handover in progress) ensuring built-in footfall.",
        image: "/assets/t2.jpg", 
    },
    {
        number: "3",
        title: "Growing Customer Base",
        description: "Over 1,700 units from Sangam are being handed over from Sept 2024 creating a fast-growing and captive audience.",
        image: "/assets/t3.jpg", 
    },
    {
        number: "4",
        title: "Unmatched Accessibility",
        description: "Excellent road access via G.T. Road and just 45 minutes from the airport making it easily reachable for all.",
        image: "/assets/t4.jpg", 
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
                        <div className="md:text-[30px] md:leading-[28px] max-md:text-center text-[20px] font-cormorant leading-7 orange-color font-semibold md:text-lg">{item.number}</div>
                     <h3 className="text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-satoshi leading-[24px] h-[40px] md:h-auto flex items-center">
                    {item.title}
                    </h3>

                        <div className="w-full h-[160px] md:h-[240px] relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="font-satoshi text-[14px] md:text-[16px] text-[#22252E]/60 md:text-[#22252E] font-[400] text-center md:text-left">{item.description}</p>
                    </div>
                ))}
            </div>
        </SlideUp>
    )
}
