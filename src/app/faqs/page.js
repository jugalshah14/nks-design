"use client";

import Searchbox from '@/components/Searchbox'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const faqsData = [
    {
        id: 1,
        label: "Residence",
        data: [
            { label: 'Flooring', id: 1 },
            { label: 'Kitchen', id: 2 },
            { label: 'Views', id: 3 },
            { label: 'Electricals', id: 4 },
            { label: 'Maintenance', id: 5 },
            { label: 'Lift', id: 6 },
            { label: 'Flooring', id: 7 },
            { label: 'Kitchen', id: 8 },
            { label: 'Views', id: 9 },
        ]
    },
    {
        id: 2,
        label: "Towers & Wings",
        data: [
            { label: 'Flooring', id: 1 },
            { label: 'Kitchen', id: 2 },
            { label: 'Views', id: 3 },
            { label: 'Electricals', id: 4 },
            { label: 'Maintenance', id: 5 },
            { label: 'Lift', id: 6 },
            { label: 'Flooring', id: 7 },
            { label: 'Kitchen', id: 8 },
            { label: 'Views', id: 9 },
        ]
    },
    {
        id: 3,
        label: "Locality",
        data: [
            { label: 'Flooring', id: 1 },
            { label: 'Kitchen', id: 2 },
            { label: 'Views', id: 3 },
            { label: 'Electricals', id: 4 },
            { label: 'Maintenance', id: 5 },
            { label: 'Lift', id: 6 },
            { label: 'Flooring', id: 7 },
            { label: 'Kitchen', id: 8 },
            { label: 'Views', id: 9 },
        ]
    },
];

const FaqPage = () => {
    const [searchQ, setSearchQ] = useState('');

    return (
        <main className='relative'>
            <section className="bg-[#F4F6FE] flex flex-col items-center px-5 sm:px-14 pt-[100px] sm:pt-[150px] pb-4">
                <div className="text-sm px-4 pt-6 text-center text-gray-500">
                    <Link href={"/"} className="text-black-700 font-semibold">• Home</Link>
                    <span className="mx-2">—</span>
                    <span className="text-gray-400">FAQs</span>
                </div>
                <h1 className="text-[#22252E] font-cormorant max-sm:text-[100px] max-sm:leading-[100px] max-sm:mt-5 font-[400] text-[150px] leading-[150px] text-center opacity-10">
                    FAQs
                </h1>
                <Searchbox
                    inputProps={{
                        value: searchQ,
                        onChange: ({ target: { value } }) => setSearchQ(value)
                    }}
                />
            </section>
            <section className='mx-auto pt-11 bg-white '>
                {faqsData.map((item, i) => (
                    <div key={`${item.id}-${i}`} className={`${i % 2 == 0 ? 'bg-white' : 'bg-[#F3F6F8]'}`}>
                        <div className={`container mx-auto px-4 lg:px-24 py-20 relative flex items-center flex-col`}>
                            <p className='text-center text-[56px] font-[400] font-cormorant leading-18 text-[#22252E]'>{item.label}</p>
                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full md:w-[95%]">
                                {item.data.map((faq, ind) => (
                                    <Link
                                        href={`/faqs/${faq.id}`}
                                        className='flex justify-between items-center p-4 bg-[#FFFFFF] shadow-[0px_4px_4px_0px_#0000000F]'
                                        key={`${faq.id}-${ind}-${i}`}>
                                        <div className='flex items-center justify-start gap-2 overflow-hidden'>
                                            <Image alt="item-icon" src={'/assets/icons/Yoga Meditation Pose.svg'} height={24} width={24} className='h-6 w-6' />
                                            <p className='font-satoshi font-[600] text-[20px] leading-7 text-[#22252E] truncate'>{faq.label}</p>
                                        </div>
                                        <Image alt="item-go" src={'/assets/icons/ChevronNext.svg'} height={24} width={24} className='h-6 w-6 ml-10' />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <div className='md:container relative mx-auto max-sm:mx-5'>
                <div className="relative md:container md:mx-auto flex flex-row justify-center md:w-full !max-w-[824px] z-[1]">
                    <div className='!h-[144px] min-h-[144px] min-w-[144px] !w-[144px] relative overflow-hidden'>
                        <Image src="/assets/faqs-detail-gif.gif" fill alt="gif" className='!h-[163px] !w-[163px] min-h-[163px] min-w-[163px]' />
                    </div>
                    <div className="bg-white relative w-full border-[#144D78] flex flex-row justify-between items-center border-t-1 border-b-4">
                        <h1 className="text-[#22252E] font-satoshi text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">
                            Still have doubts? 
                            <Link
                                href="/contact-us"
                                className="contact-us-link text-[#DE804B] hover:text-orange-500"
                            >
                                <span> Contact us.</span>
                            </Link>
                        </h1>
                        <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[10px] md:right-[40px]" />
                        <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FaqPage;
