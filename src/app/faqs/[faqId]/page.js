import React from 'react'
import Image from 'next/image'
import Faqs from './Components/Faqs'

export default function FAQSDetail() {
    return (
        <main className='relative'>
            <div className="absolute px-20 pt-[150px] pb-70 w-full bg-[#F4F6FE] top-0 left-0 max-md:px-5 max-md:max-w-full" />
            <section className='container mx-auto pt-[90px] md:pt-[150px]'>
                <Faqs />
            </section>
            <div className='md:container relative pt-10 sm:pt-20 mx-auto max-sm:mx-5'>
                <div className="relative md:container md:mx-auto flex flex-row justify-center md:w-full !max-w-[824px] z-[1]">
                    <div className='!h-[144px] min-h-[144px] min-w-[144px] !w-[144px] relative overflow-hidden'>
                        <Image src="/assets/faqs-detail-gif.gif" fill alt="gif" className='!h-[163px] !w-[163px] min-h-[163px] min-w-[163px]' />
                    </div>
                    <div className="bg-white relative w-full border-[#144D78] flex flex-row justify-between items-center border-t-1 border-b-4">
                        <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[548px] p-2 md:p-6">Embrace the beauty of your surroundings, know our neighbourhood</h1>
                        <Image src="/assets/icons/arrowlong.svg" alt="1BHK" width={40} height={3} className="absolute right-[10px] md:right-[40px]" />
                        <div className="bg-[#E7EDF2] w-[54px] h-full"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
