'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export default function FAQHeader({ title }) {

    return (
        <div className='max-md:w-[100%] max-lg:w-[40%] flex flex-col items-start pb-10 md:pb-20 text-base font-bold leading-none mr-auto'>
            <Link href="/faqs" className="text-[16px] font-[700] font-[Satoshi] leading-5 flex gap-3 items-center text-[#22252E] hover:text-zinc-600">
                <Image
                    src="/assets/icons/back.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    alt="Back"
                    height={24}
                    width={24}
                />
                <span className="self-stretch my-auto">Back to FAQs</span>
            </Link>
            <h1 className="max-md:w-full mt-5 md:mt-9 ml-9 text-[56px] leading-18 text-center text-[#22252E] font-[400] font-[IvyMode] max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
                {title}
            </h1>
            <div className="w-full max-md:items-center flex flex-col mt-5 md:mt-10 ml-9 max-w-full md:w-[400px] max-md:ml-2.5">
                <h2 className="text-[24px] font-[700] font-[Satoshi] leading-7 text-[#22252E]">
                    Still have doubts?
                </h2>
                <p className="mt-2 text-[16px] font-[400] font-[Satoshi] leading-5 text-[#22252E]">
                    No worries contact us directly
                </p>
                <Link
                    href="/contact-us"
                    className="contact-us-link text-[16px] font-[700] font-[Satoshi] leading-5 flex gap-2.5 items-center mt-2 text-[#DE804B] hover:text-orange-500"
                >
                    <span>Contact us</span>
                    <Image
                        src="/assets/icons/arrowlong.svg"
                        className="object-contain w-[40px] orange-arrow-filter"
                        alt="Arrow"
                        width={40}
                        height={3}
                    />
                </Link>
            </div>
        </div>
    )
}
