import Image from 'next/image';
import React from 'react';

const FAQAccordionItem = ({
  title,
  content,
  isExpanded,
  onToggle,
  id
}) => {
  return (
    <div className="mt-3.5 w-full rounded-md">
      <div
        className={`w-full bg-white shadow-[0px_4px_4px_0px_#0000000F] rounded-md`}
      >
        <button
          className="flex gap-2.5 items-center p-6 w-full text-left max-md:px-5"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={`panel-${id}`}
        >
          <div className="flex flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto w-full basis-0 min-w-60">
            <h3 className="flex-1 shrink self-stretch my-auto text-[#000000] font-[Satoshi] font-[700] text-[20px] leading-7 basis-0 min-w-60">
              {title}
            </h3>
            <div className="flex gap-2.5 items-start self-stretch my-auto w-4">
              <Image
                src={isExpanded ? "/assets/icons/chevron.down.svg" : "/assets/icons/chevron.svg"}
                className="object-contain  aspect-square"
                alt={isExpanded ? "Collapse" : "Expand"}
                height={20}
                width={20}
                aria-hidden="true"
              />
            </div>
          </div>
        </button>
        {isExpanded && (
          <div
            id={`panel-${id}`}
            role="region"
            aria-labelledby={`heading-${id}`}
            className="px-6 pb-5 w-full text-[#5C5F68] font-[Satoshi] font-[400] text-[18px] leading-6"
          >
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQAccordionItem;
