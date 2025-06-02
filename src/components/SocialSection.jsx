import React from 'react'
import Image from "next/image";
import { SlideUp } from './animations';


const amenities = [
    {
        number: "1",
        title: "Plant a tree in New Kolkata",
        description: "Everybody longs for a lifestyle that relishes their body.",
        image: "/assets/corporate.png", // replace with actual image path
    },
    {
        number: "2",
        title: "Save the Ganges ",
        description: "Everybody longs for a lifestyle that relishes their body.",
        image: "/assets/corporate1.png", // replace with actual image path
    },
    {
        number: "3",
        title: "The water affair",
        description: "Everybody longs for a lifestyle that relishes their body.",
        image: "/assets/corporate2.png", // replace with actual image path
    },
    {
        number: "4",
        title: "Plant a tree in New Kolkata",
        description: "Everybody longs for a lifestyle that relishes their body.",
        image: "/assets/corporate3.png", // replace with actual image path
    },
];


export default function SocialSection() {
    return (
        <SlideUp delay={0.6} className="relative text-white py-12 container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3 md:mb-20">
                {amenities.map((item, index) => (
                    <div
                        key={item.number}
                        className={`relative ${index % 2 !== 0 ? 'md:top-14' : ''} space-y-4 md:space-y-5 px-4`}
                    >
                        <div className='absolute h-[65%] left-[-5px] md:border-l md:border-dashed md:border-gray-300'></div>
                        <div className="max-md:text-center text-[18px] font-[IvyMode] leading-7 text-orange-500 font-semibold md:text-lg">{item.number}</div>
                     <h3 className="text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-[Satoshi] leading-[24px] h-[40px] md:h-auto flex items-center">
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
                        <p className="font-[Satoshi] text-[14px] md:text-[16px] text-[#22252E] font-[400]">{item.description}</p>
                    </div>
                ))}
            </div>
        </SlideUp>
    )
}
