import React from 'react'
import Image from "next/image";
import { SlideUp } from './animations';


const amenities = [
    {
        number: "1",
        title: "Healthcare Centre​",
        description: "",
        image: "/assets/c1.jpg", 
    },
    {
        number: "2",
        title: "Banquet Hall",
        description: "",
        image: "/assets/c2.jpg", 
    },
    {
        number: "3",
        title: "88-key hotel​",
        description: "",
        image: "/assets/c3.jpg", 
    }
];


export default function CommercialCards() {
    return (
        <SlideUp delay={0.6} className="relative text-white container mx-auto justify-center items-center flex">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[23px] md:gap-[40px] mb-3 md:mb-20 justify-center items-center w-fit">
                {amenities.map((item, index) => (
                    <div
                        key={item.number}
                        className={`relative  ${index === 2 ? 'min-w-[160px] col-span-2 mt-[40px] md:mt-0 md:col-span-1 mx-auto' : ''}  ${(index === 1 || index === 4) ? 'top-10 md:top-14' : ''} space-y-2 md:space-y-5 md:pl-[40px] md:pr-[10px]`}
                    >
                        <div className='absolute h-[65%] left-[-5px] md:border-l md:border-dashed md:border-gray-300'></div>
                        <div className="md:text-[30px] md:leading-[28px] max-md:text-center text-[18px] font-cormorant leading-7 text-orange-500 font-semibold md:text-lg">{item.number}</div>
                     <h3 className="justify-center md:justify-start text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-satoshi leading-[24px] h-[40px] md:h-auto flex items-center">
                    {item.title}
                    </h3>

                        <div className="md:!min-w-[240px] md:!max-w-[240px] w-full h-[160px] md:h-[240px] relative overflow-hidden">
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
