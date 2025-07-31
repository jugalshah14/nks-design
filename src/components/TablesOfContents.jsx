import React from "react";
import seramporeProperties from "../data/typologyDetails.js";

export function TableOfContents({ propertyId }) {
  // Find the property data based on propertyId
  const propertyData = seramporeProperties.find(
    (property) => property.propertyId === propertyId
  );

  // Extract questions from questionAnswerDetails to create table of contents
  const tableOfContents = propertyData?.questionAnswerDetails?.map(
    (item) => item.question
  ) || [];

  return (
    <div className="w-full lg:max-w-[270px] flex flex-col gap-4">
      <h2 className="text-lg font-satoshi text-[18px] font-bold leading-[24px] text-[#666666]">
        Table of Contents
      </h2>
      <div className="flex flex-col gap-2">
        {tableOfContents.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-5 text-[14px] text-[#2B2B2B] font-inter leading-[20px] tracking-[-0.056px]">
              {index + 1}.
            </div>
            <div className="flex-1 font-satoshi text-[14px] text-[#2B2B2B] leading-[20px]">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}