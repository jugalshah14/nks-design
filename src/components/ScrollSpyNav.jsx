import Image from 'next/image'
import React from 'react'

export default function ScrollSpyNav() {
    return (
        <div className="sticky z-999 top-0 bg-white flex justify-center gap-10 space-x-8 border-t border-b border-[#22252e19] py-10 pb-12">
            <button className="cursor-pointer flex flex-col justify-center items-center gap-2 text-[20px] font-satoshi font-bold leading-[27px] text-[#22252e] relative m-0">
                Amenities
                <div className="absolute bottom-[-16px] w-[38px] h-1 bg-[#4f70af]"></div>
            </button>
            <Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" />

            <button className="cursor-pointer flex flex-col justify-center items-center gap-2 text-[20px] font-satoshi font-bold leading-[27px] text-[#22252e7f] relative m-0">Project Plans</button>
            <Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" />

            <button className="cursor-pointer flex flex-col justify-center items-center gap-2 text-[20px] font-satoshi font-bold leading-[27px] text-[#22252e7f] relative m-0">Ganga</button>
            <Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" />

            <button className="cursor-pointer flex flex-col justify-center items-center gap-2 text-[20px] font-satoshi font-bold leading-[27px] text-[#22252e7f] relative m-0">Why Serampore?</button>
        </div>
    )
}
