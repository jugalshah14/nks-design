"use client";
import Image from "next/image";

export default function BrochureSection() {
  const handleDownloadBrochure = () => {
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "Alcove-Brochure.pdf";
    link.target = "_blank";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group cursor-pointer transform transition-transform duration-300 hover:scale-101 flex flex-col align-end justify-end">
      <div className="flex flex-row justify-center w-full pl-[0px] md:pl-[200px] pr-[16px] md:pr-[350px]">
      <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
                <Image
                  src="/assets/HB.jpg"
                  alt="Room preview"
                  fill
                  className="object-cover"
                />
              </div>
        <div
          className="relative w-full border-t border-b border-[#144D78] flex flex-row justify-between items-center"
          style={{ borderTopWidth: "1px", borderBottomWidth: "4px" }}
        >
          <h1 className="text-[#22252E] text-[16px] md:text-[24px] font-[700] max-w-[350px] p-[13px] md:px-6 md:py-4">
            Want to know more about Lobby, Toilets, Wall Finish, Lift, Balcony,
            Doors etc.?
          </h1>
          <div className="bg-[#E7EDF2] w-[10px] md:w-[54px] h-full"></div>
          <button
            id="brochure-download-desktop"
            onClick={handleDownloadBrochure}
            className="hide-triangle absolute right-[-150px] bg-[#144D78] hover:bg-blue-800 transition rounded-md text-white font-medium inline-flex items-center gap-2 overflow-hidden button-primary"
          >
            <div className="px-6 py-3">
              <span className="hidden md:inline">Download our Brochure</span>
            </div>
            <span className="px-6 py-4 orange-color bg-[#002F52] text-lg ml-auto">
              <Image src="/assets/icons/arrow-orange.svg" alt="arrow" width={20} height={20} className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
      <button
        id="brochure-download-mobile"
        onClick={handleDownloadBrochure}
        className="mt-[-3px] flex flex-row justify-between ml-[28px] mr-[16px] none-md group cursor-pointer bg-[#144D78] hover:bg-[#0e3a5a] transition text-white font-medium inline-flex items-center gap-2 overflow-hidden"
      >
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
