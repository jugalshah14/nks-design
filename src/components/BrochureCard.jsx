"use client";
import Image from "next/image";

export default function BrochureSection() {
  return (
    <div className="group cursor-pointer transform transition-transform duration-300 hover:scale-101 flex flex-col align-end justify-end">
      <div className="flex flex-row justify-center w-full pl-[0px] md:pl-[200px] pr-[16px] md:pr-[350px]">
        <Image src="/assets/faqs-detail-gif.gif" width={144} height={144} alt="house" className="img-size md:h-[144px] md:w-[144px]"/>
        <div className="relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
          <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[350px] p-[13px] md:px-6 md:py-4">Want to know more about Lobby, Toilets, Wall Finish, Lift, Balcony, Doors etc.?</h1>
          <div className="bg-[#E7EDF2] w-[10px] md:w-[54px] h-full"></div>
          <button className="hide-triangle absolute right-[-150px] bg-[#144D78] hover:bg-blue-800 transition rounded-md text-white font-medium inline-flex items-center gap-2 overflow-hidden button-primary">
            <div className='px-6 py-3'>
                <span className='hidden md:inline'>Download our Brochure</span>
            </div>
                <span className="px-6 py-4 text-orange-500 bg-[#002F52] text-lg ml-auto">↗</span>
          </button>
        </div>
      </div>
      <button className="mt-[-4px] flex flex-row justify-between ml-[28px] mr-[16px] none-md group cursor-pointer bg-[#144D78] hover:bg-[#0e3a5a] transition text-white font-medium inline-flex items-center gap-2 overflow-hidden">
            <div className="p-[25px] group-hover:text-orange-400 transition-colors duration-300">
                <span className="inline md:inline">Download our Brochure</span>
            </div>
            <div className="bg-[#002F52] p-[30px] h-full flex items-center justify-center">
                <Image
                src="/assets/arrow.png"
                width={15}
                height={15}
                alt="arrow"
                className="transition-transform duration-300 group-hover:rotate-45"
                />
            </div>
      </button>
    </div>
    
  );
}
