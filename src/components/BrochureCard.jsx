"use client";
import Image from "next/image";

export default function BrochureSection() {
  return (
    <div className="flex flex-col align-end justify-end">
      <div className="flex flex-row justify-center w-full pl-[0px] md:pl-[200px] pr-[16px] md:pr-[350px]">
        <Image src="/assets/house.png" width={180} height={144} alt="house" className="img-size"/>
        <div className="relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center" style={{ borderTopWidth: '1px', borderBottomWidth: '4px' }}>
          <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[350px] p-[13px] md:p-6">Want to know more about Lobby, Toilets, Wall Finish, Lift, Balcony, Doors etc.?</h1>
          <div className="bg-[#E7EDF2] w-[10px] md:w-[54px] h-full"></div>
          <button className="hide-triangle group absolute right-[-150px] max-md:w-[90%] cursor-pointer bg-[#144D78] hover:bg-[#0e3a5a] transition rounded-md text-white font-medium inline-flex items-center gap-2 overflow-hidden">
              <div className="p-[25px] group-hover:text-orange-400 transition-colors duration-300">
                  <span className="hidden md:inline">Download our Brochure</span>
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
