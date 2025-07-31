import React, { useState } from "react";

export default function FAQAccordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 lg:px-0">
      {data.map((item, index) => (
        <div key={index} className="mb-4 rounded-md bg-white p-4">
          <button
            className="w-full flex justify-between items-center font-satoshi font-bold text-left text-gray-900 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <span>{item.question}</span>
            <span>
              {activeIndex === index ? (
                // Down arrow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                // Right arrow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? "max-h-auto opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="mt-2 text-gray-500 text-sm font-satoshi">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 