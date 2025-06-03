import React from 'react'
import Image from "next/image";


const amenities = [
    {
        number: "1",
        title: "Landscaped to perfection",
        description: "Immerse yourself in the tranquility of the lush landscape garden",
        image: "/assets/Amenities1.png", // replace with actual image path
    },
    {
        number: "2",
        title: "Multiple relaxation zones",
        description: "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
        image: "/assets/Amenities2.png", // replace with actual image path
    },
    {
        number: "3",
        title: "Children's play area",
        description: "Let your little ones frolic at the children's play area or the splash pool while you lounge or take a stroll",
        image: "/assets/Amenities3.png", // replace with actual image path
    },
    {
        number: "4",
        title: "Fountain plaza and Amphitheater",
        description: "Refresh your senses with the interactive fountains",
        image: "/assets/Amenities4.png", // replace with actual image path
    },
];


export default function Amenities() {
    return (
        <div className="relative text-white py-12 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                {amenities.map((item, index) => (
                    <div
                        key={item.number}
                        className={`relative ${index % 2 !== 0 && 'top-10'} space-y-4 px-4`}
                    >
                        <div className='absolute h-[65%] left-[-5px] md:border-l md:border-dashed md:border-gray-300'></div>
                        <div className="max-md:text-center text-[18px] font-[IvyMode] leading-7 text-orange-500 font-semibold md:text-lg">{item.number}</div>
                        <h3 className="text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-[Satoshi]">{item.title}</h3>
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



            {/* Footer Section */}
            <div className="text-center relative z-1">
                <div className="text-[24px] font-[700] text-[#22252E] mb-5 flex flex-col">
                    <span>
                        +
                    </span>
                    65 more
                </div>
                <button className="md:min-h-[4.75rem] min-h-[3.5rem] h-full max-md:w-[90%] bg-[#144D78] hover:bg-blue-800 transition rounded-md text-white font-medium inline-flex items-center gap-2 overflow-hidden button-primary">
                    <div className='px-6 py-3'>
                        <span className='hidden md:inline'>Explore the Riverside Sanctuary</span>
                        <span className='inline md:hidden'>Schedule a Visit</span>
                    </div>
                    <span className="px-6 flex items-center justify-center md:min-h-[4.75rem] min-h-[3.5rem] h-full text-orange-500 bg-[#002F52] text-lg ml-auto">↗</span>
                </button>
            </div>

            <div className="absolute flex justify-center bottom-0 left-1/2 transform -translate-x-1/2 w-full pointer-events-none z-0">
                <Image
                    src="/assets/AmenitiesBottomBackground.svg" // Replace with your actual image
                    alt="Decorative background"
                    width={500}
                    height={200}
                />
            </div>
        </div>
    )
}
