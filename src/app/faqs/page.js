"use client";

import Searchbox from "@/components/Searchbox";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatedSection, SlideUp } from "@/components/animations";

const faqsData = [
  {
    id: 1,
    label: "Project Overview & Location",
    faqs: [
      {
        id: 1,
        question:
          "What is the primary location of the New Kolkata residential project?",
        answer: (
          <>
            The New Kolkata residential project by Alcove Realty is constructed
            by the Hooghly river in Serampore. <br />
            The project is strategically located away from chaotic urban life;
            amidst the peaceful surrounding of North Kolkata. <br />
            The exact address of the residential project is as follows: <br />
            New Kolkata, 449A, 449A/1, & 449A/2, <br />
            G T Road, P.S. Serampore, Mouza – Mahesh, <br />
            Hooghly, West Bengal- 712202
          </>
        ),
      },
      {
        id: 2,
        question: "What are the areas in and around the project?",
        answer: `The areas that are adjacent to the project are as follows: Barrackpore,
                Uttarpara, Konnagar, and Rishra. They are all in close vicinity of the project.`,
      },
      {
        id: 3,
        question:
          "What is the total land area covered by the project and the number of towers included in the project?",
        answer: `The project covers a vast area of 300,000 sq. ft. and this translates to
approximately 28.684 acres. Apart from that, the construction has 21
towers within the premise of The New Kolkata residential project.`,
      },
      {
        id: 4,
        question:
          "What are the different flat sizes offered by the New Kolkata residential project?",
        answer: (
          <>
            The New Kolkata residential project provides flats of different
            sizes in Serampore, Hooghly. The sizes are as follows: 1BHK, 2BHK,
            3BHK, and 4BHK (servant quarters are available only on 4BHK). The
            categorical listing of the Carpet area and Super Built-up area for
            the differently sized flats are stated below:
            <br />
            <br />
            <table className="w-full sm:w-1/2">
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "8px",
                      borderBottom: "2px solid #ddd",
                      textAlign: "left",
                    }}
                  >
                    Flat Type
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      borderBottom: "2px solid #ddd",
                      textAlign: "right",
                    }}
                  >
                    Carpet Area <br />
                    in sq.ft.
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      borderBottom: "2px solid #ddd",
                      textAlign: "right",
                    }}
                  >
                    Super Built-Up Area <br />
                    in sq.ft.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px", textAlign: "left" }}>1BHK</td>
                  <td style={{ padding: "8px", textAlign: "right" }}>
                    320 / 314
                  </td>
                  <td style={{ padding: "8px", textAlign: "right" }}>
                    556 / 567
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", textAlign: "left" }}>2BHK</td>
                  <td style={{ padding: "8px", textAlign: "right" }}>533</td>
                  <td style={{ padding: "8px", textAlign: "right" }}>884</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", textAlign: "left" }}>3BHK</td>
                  <td style={{ padding: "8px", textAlign: "right" }}>
                    645 / 869
                  </td>
                  <td style={{ padding: "8px", textAlign: "right" }}>
                    1039 / 1400
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", textAlign: "left" }}>4BHK</td>
                  <td style={{ padding: "8px", textAlign: "right" }}>1312</td>
                  <td style={{ padding: "8px", textAlign: "right" }}>2085</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        id: 5,
        question: "What are the specialties of such apartments?",
        answer: `The New Kolkata flats in Serampore, Hooghly are elaborately designed to
update the lifestyle of its residents to a modern one. Most of these
apartments have a picturesque view of the Ganga from their
windows/balcony. The apartments are spacious and in-built with wide
windows that allow air to circulate and sunlight to penetrate. Indeed, the
project strives for a balance between a contemporary way of life and the
rejuvenating essence of Nature.`,
      },
      {
        id: 6,
        question: "How many levels / floors does this project have?",
        answer: (
          <>
            The New Kolkata residential project is a town in itself that is
            equipped with cost-effective facilities. <br />
            The number of floors that come along with this project are: <br />
            <br />
            <ul>
              <li>
                • Tower – 1, 2, 3, 9, 10, 11 G+2 P+28 | Tower – 4, 5, 6, 7 G+2
                P+27
              </li>
              <br />
              <li>• Tower – 16 G+27 | Tower – 12, 13, 14, 15 G+2 P+26</li>
            </ul>
          </>
        ),
      },
      {
        id: 7,
        question:
          "What is the total number of flats present in the New Kolkata project?",
        answer: `There are approx. 4500 residential units in the New Kolkata project.
However, this number is subject to change in the future.`,
      },
      {
        id: 8,
        question: "Is there availability of Servant's Quarter?",
        answer: `Yes, the servant quarters are available only on 4BHK.`,
      },
    ],
  },
  {
    id: 2,
    label: "Connectivity & Transportation",
    faqs: [
      {
        id: 1,
        question:
          "Owing to the location of the project in the outskirts, how can I commute from the New Kolkata residential project?",
        answer: (
          <>
            The New Kolkata residential project has flats in the Serampore,
            Hooghly area that have a convenient four-way connectivity by rail
            tracks, roads, river ways, and metro stations. <br />
            <br />
            <strong>Rails:</strong>
            <br />
            <ul>
              <li>• Rishra Railway Station - 2.7 Km</li>
              <li>• Serampore Railway Station - 3.3 Km</li>
            </ul>
            <br />
            <strong>Air:</strong>
            <br />
            <ul>
              <li>
                • Netaji Subhash Chandra Bose International Airport - 25 Km
              </li>
            </ul>
            <br />
            <strong>Road:</strong>
            <br />
            <ul>
              <li>• New Town is a 45 minutes’ drive away</li>
              <li>• Mahesh CESE Bus Stop - 12 min</li>
            </ul>
            <br />
            <strong>River:</strong>
            <br />
            <ul>
              <li>
                • Private Jetty and Ferry Service by the Shipping Corporation of
                India
              </li>
            </ul>
            <br />
            <strong>Metro:</strong>
            <br />
            <ul>
              <li>• Dakshineshwar Metro - 13.3 Km</li>
            </ul>
            <br />
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    label: "Developer Information",
    faqs: [
      {
        id: 1,
        question: "What is the oﬃcial address of Alcove Real Estate Company?",
        answer: (
          <>
            The official address of Alcove Real Estate Company is as follows:{" "}
            <br />
            <br />
            <strong>Alcove Developers - A Alcove Group Company</strong> <br />
            <strong>Corporate Office Address:</strong>
            <br />
            Ganapati (Head Office),
            <br />
            68/2, Harish Mukherjee Road, Kolkata-700025
            <br />
            Phone No: +91 81018 81018
            <br />
            Fax: +91 33 2455 7052
            <br />
            Email:{" "}
            <a href="mailto:marketing@alcoverealty.in">
              marketing@alcoverealty.in
            </a>
            <br />
            <br />
            <strong>Marketing Office Address:</strong>
            <br />
            82, Harish Mukherjee Road,
            <br />
            3rd Floor, &apos;Happy Prestige Building&apos;,
            <br />
            (Above Axis & Kotak Mahindra Bank), Kolkata-700025
            <br />
            Phone No: +91 81018 81018
            <br />
            Email:{" "}
            <a href="mailto:marketing@alcoverealty.in">
              marketing@alcoverealty.in
            </a>
          </>
        ),
      },
      {
        id: 2,
        question:
          "What are the former and currently ongoing projects by Alcove Realty?",
        answer: (
          <>
            Alcove Realty is an acclaimed real estate group based in Kolkata.
            They have left a mark throughout the city with their remarkable
            constructions. Currently, they are working on the New Kolkata
            Project in Serampore, Hooghly. Apart from this, the list of the
            former projects by Alcove Realty is mentioned below. <br />
            <br />
            <strong>Past Projects:</strong>
            <ul>
              <li>• Alcove Regency</li>
              <li>• Alcove Block 32</li>
              <li>• Alcove Tower 5</li>
              <li>• Flora Fountain</li>
              <li>• The 42</li>
            </ul>
            <strong>Ongoing Project:</strong>
            <ul>
              <li>• New Kolkata (Serampore, Hooghly)</li>
            </ul>
          </>
        ),
      },
      {
        id: 3,
        question:
          "What are the details of the principal architect and local consultant at the New Kolkata project?",
        answer: (
          <>
            Padma Bhushan Awardee and world-renowned architect Hafeez Contractor
            is lending his expertise for the New Kolkata Project. The local
            consultant being Innate. Given below are the details: <br />
            <br />
            <strong>Past Projects by Hafeez Contractor:</strong>
            <ul>
              <li>• DLF Cyber City - NCR</li>
              <li>• 23 Marina - Dubai</li>
              <li>• Akankha</li>
              <li>• Ideal Enclave</li>
              <li>• DLF New Town Heights</li>
              <li>• Ideal Greens</li>
            </ul>
            <strong>Ongoing Project by Hafeez Contractor:</strong>
            <ul>
              <li>• Ideal Unique Centre</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    id: 4,
    label: "Pricing & Finance",
    faqs: [
      {
        id: 1,
        question:
          "May I know about the price of apartments at The New Kolkata site. Besides that, do the flats come with other facilities like car parking areas?",
        answer: (
          <>
            The price of apartments in Serampore, Hooghly are given below.{" "}
            <br />
            <br />
            <strong>Base Unit Price:</strong>
            <ul>
              <li>- 1BHK: Price On Request</li>
              <li>- 2BHK: Price On Request</li>
              <li>- 3BHK: Price On Request</li>
              <li>- 4BHK: Price On Request</li>
            </ul>
            For more details regarding Parking & PLC charges, feel free to reach
            out. <br />
            <br />
            For the most accurate and updated pricing, and to know more about
            facilities like car parking, please feel free to contact the team at{" "}
            <strong>+91 81018 81018</strong> or email at{" "}
            <a href="mailto:marketing@alcoverealty.in">
              marketing@alcoverealty.in
            </a>
            . They’ll be happy to assist you.
          </>
        ),
      },
      {
        id: 2,
        question:
          "What are the registration charges involved in buying a property in New Kolkata?",
        answer: `For buying flats in New Kolkata, a registration fee of 7% on the actual
price of the apartments needs to be paid.`,
      },
      {
        id: 3,
        question:
          "Name the financial institutions who are financing the project?",
        answer: (
          <>
            The New Kolkata residential project is approved by the famous banks
            and Housing Finance companies in the market. Their names are as
            follows: <br />
            <br />
            <ul>
              <li>- State Bank of India</li>
              <li>- HDFC</li>
              <li>- ICICI Bank</li>
              <li>- PNB Housing Finance</li>
              <li>- LIC Housing Finance</li>
              <li>- L&T Finance</li>
              <li>- Aditya Birla Housing Finance</li>
              <li>- Dewan Housing Finance</li>
              <li>- IIFL</li>
              <li>- Axis Bank</li>
              <li>- Indiabulls</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    id: 5,
    label: "Booking & Handover",
    faqs: [
      {
        id: 1,
        question: "How shall I book an apartment in New Kolkata?",
        answer: `There are two ways of booking your dream apartment in The New
Kolkata residential project.
You can opt for an offline mode of booking the apartments. This service is
offered on a 'first come first serve' basis through the marketing support
using internal & external references stated under outright sale.`,
      },
      {
        id: 2,
        question:
          "What is the date of commencement for this project? What is the tentative finishing day of this project?",
        answer: `The New Kolkata project commenced on 28th January 2018. The
handover for New Kolkata Prayag was successfully completed in 2022,
while the handover process for select towers at New Kolkata Sangam
began on 20th September 2024.`,
      },
      {
        id: 3,
        question:
          "For further queries, who shall I contact regarding the New Kolkata project?",
        answer: `For additional queries regarding this project, please contact @ +91
81018 81018. You can also drop him an email at
marketing@alcoverealty.in.`,
      },
    ],
  },
];

const FaqPage = () => {
  const [searchQ, setSearchQ] = useState("");
  // Initialize an array to keep track of active FAQs in each section
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleIndex = (sectionIndex, faqIndex) => {
    // Clone the activeIndexes array to avoid direct mutation
    const newActiveIndexes = [...activeIndexes];

    // Toggle the active state of the FAQ in the current section
    if (newActiveIndexes[sectionIndex] === faqIndex) {
      newActiveIndexes[sectionIndex] = null; // Close it if it's already open
    } else {
      newActiveIndexes[sectionIndex] = faqIndex; // Open the new FAQ
    }

    // Update the activeIndexes state
    setActiveIndexes(newActiveIndexes);
  };

  // Filter FAQ data based on search query
  const filteredFaqsData = faqsData.map(section => ({
    ...section,
    faqs: section.faqs.filter(faq => {
      const searchLower = searchQ.toLowerCase();
      const questionLower = faq.question.toLowerCase();
      const answerText = typeof faq.answer === 'string' 
        ? faq.answer.toLowerCase() 
        : faq.answer.props?.children?.toString().toLowerCase() || '';
      
      return questionLower.includes(searchLower) || answerText.includes(searchLower);
    })
  })).filter(section => section.faqs.length > 0); // Only show sections that have matching FAQs

  return (
    <main className="relative">
      <AnimatedSection className="overflow-visible">
        <section className="bg-[#F4F6FE] flex flex-col items-center px-5 sm:px-14 pt-[100px] sm:pt-[150px] pb-4">
          <div className="text-sm px-4 pt-6 text-center text-gray-500">
            <Link href={"/"} className="text-black-700 font-semibold">
              • Home
            </Link>
            <span className="mx-2">—</span>
            <span className="text-gray-400">FAQs</span>
          </div>
          <SlideUp delay={0.2}>
            <h1 className="text-[#22252E] font-cormorant max-sm:text-[100px] max-sm:leading-[100px] max-sm:mt-5 font-[400] text-[150px] leading-[150px] text-center opacity-10">
              FAQs
            </h1>
          </SlideUp>
          <Searchbox
            inputProps={{
              value: searchQ,
              onChange: ({ target: { value } }) => setSearchQ(value),
            }}
          />
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section className="mx-auto pt-11 bg-white ">
          {filteredFaqsData.length > 0 ? (
            filteredFaqsData.map((item, sectionIndex) => (
              <div
                key={`${item.id}-${sectionIndex}`}
                className={`${
                  sectionIndex % 2 === 0 ? "bg-white" : "bg-[#F3F6F8]"
                }`}
              >
                <div className={`container mx-auto relative flex max-md:flex-col md:py-20 py-10 md:gap-20 gap-10`}>
                  <SlideUp delay={0.2} className="md:w-[50%] w-full max-md:text-center max-md:px-4">
                    <p className=" md:text-[56px] text-[36px] font-[400] font-cormorant md:leading-18 leading-11 text-[#22252E]">
                      {item.label}
                    </p>
                  </SlideUp>
                  <div className="flex flex-col gap-[14px] w-full max-md:px-4">
                    {item.faqs.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="rounded-md bg-white p-4 shadow-[0px_4px_4px_0px_#0000000F]"
                      >
                        <button
                          id={`faqs-accordion-${sectionIndex}-${faqIndex}`}
                          className="w-full flex justify-between text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] items-center font-satoshi font-bold text-left text-gray-900 cursor-pointer"
                          onClick={() => toggleIndex(sectionIndex, faqIndex)}
                        >
                          <span>{faq.question}</span>
                          <span>
                            {activeIndexes[sectionIndex] === faqIndex ? (
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
                            activeIndexes[sectionIndex] === faqIndex
                              ? "max-h-auto opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="mt-2 text-gray-500 text-sm font-satoshi">
                            {typeof faq.answer === "string" ? (
                              faq.answer
                            ) : (
                              <>{faq.answer}</> // Render as JSX if it's not a string
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : searchQ && (
            <div className="container mx-auto py-20 text-center">
              <div className="max-w-md mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-lg font-satoshi font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500 font-satoshi">
                  We couldn&apos;t find any FAQs matching &quot;{searchQ}&quot;. Try searching with different keywords.
                </p>
              </div>
            </div>
          )}
        </section>
      </AnimatedSection>
      <AnimatedSection>
          <Link href="/contact-us" className="group cursor-pointer transform transition-transform duration-300 hover:scale-101 border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto my-6 mb-15 md:mb-0 md:my-12 md:h-[144px]">
            <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
              <Image
                src="/assets/HB.jpg"
                alt="Room preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 md:px-11 md:py-8">
              <p className="px-5 md:px-0 md:text-[24px] font-satoshi font-bold text-[#22252E] md:leading-[28px] text-[16px] leading-[24px]">
              Still have doubts?<span className="text-[#DE804B]"> Contact us.</span>
              </p>
            </div>
            <div className="relative bg-[#E7EDF2] md:h-[144px] h-[100px] flex items-center md:w-13.5 w-8">
              <Image
                src="/assets/icons/arrowlong.svg"
                alt=""
                width={40}
                height={3}
                className="absolute -ml-6"
              />
            </div>
          </Link>
        </AnimatedSection>
    </main>
  );
};

export default FaqPage;
