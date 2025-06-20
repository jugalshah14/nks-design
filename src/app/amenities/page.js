"use client";

import { AnimatedSection, SlideUp } from "@/components/animations";
import GangaWaves from "@/components/GangaWaves";
import Image from "next/image";
import React, { useState } from "react";

const amenities = {
  morning: [
    {
      title: "Embrace the new day with open arms.",
      description:
        "Let your little ones frolic at the children's play area or the splash pool while you lounge or take a stroll",
      image: "/assets/Sunrise.png",
    },
    {
      title: "Find peace within: unlock the power of meditation.",
      description: "Refresh your senses with the interactive fountains",
      image: "/assets/Yoga.png",
    },
    {
      title: "Keep yourself fit with our gym & fitness centre",
      description:
        "Immerse yourself in the tranquility of the lush landscape garden",
      image: "/assets/GYM.png",
    },
    {
      title:
        "Stay fit and active at Jogging Park with its pristine trails, fitness stations, and revitalizing amenities",
      description:
        "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
      image: "/assets/Jogging.png",
    },
  ],
  noon: [
    {
      title: "Escape into a tranquil sanctuary of books and relaxation.",
      description:
        "Let your little ones frolic at the children's play area or the splash pool while you lounge or take a stroll",
      image: "/assets/noon1.png",
    },
    {
      title: "Unleash your playful side in our dynamic indoor games room.",
      description: "Refresh your senses with the interactive fountains",
      image: "/assets/noon2.png",
    },
    {
      title:
        "Immerse yourself in cinematic bliss with our deluxe home theater amenities.",
      description:
        "Immerse yourself in the tranquility of the lush landscape garden",
      image: "/assets/noon3.png",
    },
    {
      title:
        "Elevate your lifestyle in our clubhouse, offering diverse amenities for your enjoyment",
      description:
        "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
      image: "/assets/noon4.png",
    },
  ],
  evening: [
    {
      title:
        "Indulge in opulent travel with our private ferry service, redefining luxury and convenience.",
      description:
        "Let your little ones frolic at the children's play area or the splash pool while you lounge or take a stroll",
      image: "/assets/evening1.png",
    },
    {
      title:
        "Unleash your agility and finesse on our top-notch badminton court, designed for exhilarating rallies and competitive play.",
      description: "Refresh your senses with the interactive fountains",
      image: "/assets/evening2.png",
    },
    {
      title: "Escape to a secluded waterfront oasis at our private ghat.",
      description:
        "Immerse yourself in the tranquility of the lush landscape garden",
      image: "/assets/evening3.png",
    },
    {
      title: "Explore the depths of spirituality",
      description:
        "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
      image: "/assets/evening4.png",
    },
  ],
  night: [
    {
      title:
        "Indulge in the grandeur of exquisite architecture, luxurious seating & captivating artwork.",
      description:
        "Let your little ones frolic at the children's play area or the splash pool while you lounge or take a stroll",
      image: "/assets/night1.png",
    },
    {
      title:
        "Unforgettable events in elegant spaces await at our banquet facilities.",
      description: "Refresh your senses with the interactive fountains",
      image: "/assets/night2.png",
    },
    {
      title:
        "Retail bliss awaits at our outlet facility with diverse stores, exclusive discounts, and a vibrant atmosphere",
      description:
        "Immerse yourself in the tranquility of the lush landscape garden",
      image: "/assets/night3.png",
    },
    {
      title:
        "Elevate your nights with breathtaking views from our viewing deck, offering a panorama, cozy seating, and enchanting ambiance",
      description:
        "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
      image: "/assets/night4.png",
    },
  ],
};

const clubhouseData = [
  {
    title: "Swimming pool",
    description:
      "Immerse yourself in the tranquility of the lush landscape garden",
    image: "/assets/Swimming-pool.png",
  },
  {
    title: "Viewing deck",
    description:
      "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
    image: "/assets/Viewing-deck.png",
  },
  {
    title: "Badminton court",
    description:
      "Let your little ones frolic at the children's play area or the splash pool while you lounge or take a stroll",
    image: "/assets/Badminton-court.png",
  },
  {
    title: "Poolside deck with lounger",
    description: "Refresh your senses with the interactive fountains",
    image: "/assets/Poolside-deck.png",
  },
];

const ClubIcons = [
  {
    label: "Convenience store",
    image: "/assets/club1.png",
  },
  {
    label: "Multi purpose hall",
    image: "/assets/club2.png",
  },
  {
    label: "Hi-tech gym",
    image: "/assets/club3.png",
  },
  {
    label: "Snacks Corner",
    image: "/assets/club4.png",
  },
  {
    label: "Indoor kinds playing zone",
    image: "/assets/club5.png",
  },
  {
    label: "Squash court",
    image: "/assets/club6.png",
  },
  {
    label: "AC indoor games",
    image: "/assets/club7.png",
  },
  {
    label: "AC home theatre",
    image: "/assets/club8.png",
  },
  {
    label: "Kids pool",
    image: "/assets/club9.png",
  },
];

const ClubIconsRes = [
  {
    label: "Convenience store",
    image: "/assets/club1.png",
  },
  {
    label: "Multi purpose hall",
    image: "/assets/club2.png",
  },
  {
    label: "Hi-tech gym",
    image: "/assets/club3.png",
  },
  {
    label: "Snacks Corner",
    image: "/assets/club4.png",
  },
  {
    label: "Indoor kinds playing zone",
    image: "/assets/club5.png",
  },
  {
    label: "Squash court",
    image: "/assets/club6.png",
  },
];

const PodiumData = [
  {
    title: "Palm garden",
    description:
      "Immerse yourself in the tranquility of the lush landscape garden",
    image: "/assets/PalmGarden.png",
  },
  {
    title: "Garden pavilion",
    description:
      "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
    image: "/assets/GardenPavilion.png",
  },
  {
    title: "Outdoor gym",
    description:
      "Let your little ones frolic at the children's play area or the splash pool while you lounge or take a stroll",
    image: "/assets/OutdoorGym.png",
  },
  {
    title: "Lotus pond and pavilion",
    description: "Refresh your senses with the interactive fountains",
    image: "/assets/LotusPond.png",
  },
];

const PodiumIcons = [
  { label: "Yoga/meditation lawn", image: "/assets/podium1.png" },
  { label: "Reflexology path", image: "/assets/podium2.png" },
  { label: "Floating stage", image: "/assets/podium3.png" },
  { label: "Amphitheater", image: "/assets/podium4.png" },
  { label: "Splash pool", image: "/assets/podium5.png" },
  {
    label: "Splash pool side deck with loungers",
    image: "/assets/podium6.png",
  },
  { label: "Interactive fountain", image: "/assets/podium7.png" },
  { label: "Fountain plaza", image: "/assets/podium8.png" },
  { label: "Kid's play area", image: "/assets/podium9.png" },
  { label: "Common toilet", image: "/assets/podium10.png" },
  { label: "24/7 Power backup", image: "/assets/podium11.png" },
  { label: "CCTV", image: "/assets/podium12.png" },
  { label: "Provision for intercom", image: "/assets/podium13.png" },
  { label: "Disable access and parking", image: "/assets/podium14.png" },
  { label: "Solar panels", image: "/assets/podium15.png" },
  { label: "Admin office", image: "/assets/podium16.png" },
  {
    label: "Designed for natural light and ventilation",
    image: "/assets/podium17.png",
  },
  { label: "Improved air quality", image: "/assets/podium18.png" },
  {
    label: "Modern fire safety & firefighting equipment",
    image: "/assets/podium19.png",
  },
  { label: "Controlled noise pollution", image: "/assets/podium20.png" },
  {
    label: "Dedicated space for cycle, 2 wheelers, 4 wheelers",
    image: "/assets/podium21.png",
  },
  { label: "Triple height lobbies", image: "/assets/podium22.png" },
  { label: "Biometrics secured entrance", image: "/assets/podium23.png" },
  { label: "Reading room", image: "/assets/podium24.png" },
];

const groundData = [
  {
    title: "Cycling track",
    description:
      "Immerse yourself in the tranquility of the lush landscape garden",
    image: "/assets/cycling-track.png",
  },
  {
    title: "Mandir",
    description:
      "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
    image: "/assets/mandir.png",
  },
  {
    title: "Floating fountain",
    description:
      "Let your little ones frolic at the children's play area or the splash pool while you lounge or take a stroll",
    image: "/assets/Floating-fountain.png",
  },
  {
    title: "Kid's play area",
    description: "Refresh your senses with the interactive fountains",
    image: "/assets/kids-play.png",
  },
];

const groundIcons = [
  { label: "Footpath/jogging Track", image: "/assets/ground1.png" },
  { label: "Pet park", image: "/assets/ground2.png" },
  { label: "Underpass 1", image: "/assets/ground3.png" },
  { label: "Hibiscus garden", image: "/assets/ground4.png" },
  { label: "Skating ring", image: "/assets/ground5.png" },
  { label: "Lotus pond", image: "/assets/ground6.png" },
  { label: "Private jetty & ferry service", image: "/assets/ground7.png" },
  { label: "Riverside Gazebo", image: "/assets/ground8.png" },
  { label: "Deepmala", image: "/assets/ground9.png" },
  { label: "Drivers seating area", image: "/assets/ground10.png" },
  { label: "Mygate service", image: "/assets/ground11.png" },
  { label: "Visitor car parking space", image: "/assets/ground12.png" },
  { label: "Composter Facility", image: "/assets/ground13.png" },
  { label: "Drip irrigation system", image: "/assets/ground14.png" },
  { label: "Water treatment plant", image: "/assets/ground15.png" },
  { label: "ATM space", image: "/assets/ground16.png" },
  { label: "Private ghat", image: "/assets/ground17.png" },
  { label: "Multiway connectivity", image: "/assets/ground18.png" },
  { label: "Provision for intercom", image: "/assets/ground19.png" },
  { label: "Restaurant", image: "/assets/ground20.png" },
  { label: "240,000 Sq. ft. landscaped podium", image: "/assets/ground21.png" },
];

const features = [
  {
    image: "/assets/podium1.png",
    title: "Reduction in energy and water consumption",
  },
  {
    image: "/assets/podium2.png",
    title: "Improved health & hygiene",
  },
  {
    image: "/assets/podium3.png",
    title: "Better ventilation and light in the dwellings",
  },
  {
    image: "/assets/podium3.png",
    title: "Better sanitation",
  },
  {
    image: "/assets/podium3.png",
    title:
      "Fuel savings in transit of people to workplaces and associated pollution",
  },
];

const accordionData = [
  {
    question: "Can I choose my meals?",
    answer:
      "Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.",
  },
  {
    question: "When will I receive my order?",
    answer:
      "Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.",
  },
  {
    question: "Can I skip a delivery?",
    answer:
      "Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.",
  },
  {
    question: "Can I add Extras to my delivery?",
    answer:
      "Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.",
  },
];

export default function Amenities() {
  const [selectedTab, setSelectedTab] = useState("morning");
  const [selectedNav, setSelectedNav] = useState("Club-house");
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0); // New state for selected category

  // Accordion data for each category
  const accordionData = [
    [
      {
        question: "Cat 1 - Question 1",
        answer: "Answer for Cat 1 - Question 1",
      },
      {
        question: "Cat 1 - Question 2",
        answer: "Answer for Cat 1 - Question 2",
      },
      {
        question: "Cat 1 - Question 3",
        answer: "Answer for Cat 1 - Question 1",
      },
      {
        question: "Cat 1 - Question 4",
        answer: "Answer for Cat 1 - Question 2",
      },
    ],
    [
      {
        question: "Cat 2 - Question 1",
        answer: "Answer for Cat 2 - Question 1",
      },
      {
        question: "Cat 2 - Question 2",
        answer: "Answer for Cat 2 - Question 2",
      },
      {
        question: "Cat 2 - Question 3",
        answer: "Answer for Cat 1 - Question 1",
      },
      {
        question: "Cat 2 - Question 4",
        answer: "Answer for Cat 1 - Question 2",
      },
    ],
    [
      {
        question: "Cat 3 - Question 1",
        answer: "Answer for Cat 3 - Question 1",
      },
      {
        question: "Cat 3 - Question 2",
        answer: "Answer for Cat 3 - Question 2",
      },
      {
        question: "Cat 3 - Question 3",
        answer: "Answer for Cat 1 - Question 1",
      },
      {
        question: "Cat 3 - Question 4",
        answer: "Answer for Cat 1 - Question 2",
      },
    ],
  ];

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const tabs = [
    { id: "morning", label: "In Morning", image: "/assets/rise.png" },
    { id: "noon", label: "In Noon", image: "/assets/noon.png" },
    { id: "evening", label: "In Evening", image: "/assets/evening.png" },
    { id: "night", label: "In Night", image: "/assets/night.png" },
  ];

  const navTabs = [
    "Club-house",
    "Podium Level",
    "Ground Level",
    "Green Features",
  ];

  return (
    <main>
      <SlideUp>
        <section className="relative justify-center bg-[#f3f6f8] flex flex-col items-center md:h-[280px] md:top-[107] h-[180px] top-[50]">
          <SlideUp delay={0.4}>
            <div className="px-4 pt-6 text-center pb-4 md:pb-0">
              <span className="text-[#22252e] font-bold text-[20px]">
                • Home
              </span>
              <span className="mx-2">—</span>
              <span className="text-[#5c5f68] font-normal text-[20px]">
                Amenities
              </span>
            </div>
          </SlideUp>
          <SlideUp delay={0.6}>
            <h1 className="text-[48px] text-black leading-[52px] md:text-[#dee2e4] md:text-[150px] md:leading-[150px] font-cormorant">
              Amenities
            </h1>
          </SlideUp>
        </section>
      </SlideUp>

      <section className="mt-10">
        <SlideUp delay={0.8}>
          <div className="container md:max-w-7xl md:mx-auto">
            <div className="relative w-full md:h-[460px] h-[265px]">
              <Image src="/assets/Amenities.png" alt="Hero-img" fill priority />
            </div>
            <div className="z-20 flex text-center items-center justify-center md:mx-[80px] mx-[2%] relative p-[10px] -mt-12 mx-2 md:mx-[80px] mb-12  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
              <h2 className="project-overview-title text-center">
                Lead a life of<span className="orange-color"> luxury</span>.
              </h2>
            </div>
          </div>
        </SlideUp>
      </section>

      <section className="bg-[#010922] text-white md:px-16 py-12 w-full relative">
        <div className="flex w-full md:justify-between justify-center md:max-w-7xl md:mx-auto md:text-left text-center md:h-[180px] md:mb-12">
          <div className="md:mb-10 mb-5">
            <SlideUp delay={0.4}>
              <h2 className="md:text-[56px] text-[36px] leading-[44px] font-cormorant font-normal md:leading-[72px]">
                <span className="text-[#DE804B]">Streamline</span> Your <br />
                Daily-routine
              </h2>
            </SlideUp>
          </div>
          <SlideUp delay={0.6} className="hidden md:flex md:items-end">
            <p className="md:w-[400px] md:text-[20px] md:leading-[28px] md:text-white md:opacity-60 md:font-normal md:font-satoshi">
              Experience a world of wonder and adventure. Our podium level is a
              playground for all ages!
            </p>
          </SlideUp>
        </div>

        {/* Tabs */}
        <AnimatedSection className="relative flex flex-col items-center px-4 md:px-0 md:w-[90%] mx-auto md:mb-12 mb-6">
          <div className="flex justify-between w-full items-center overflow-x-auto gap-2">
            {tabs.map(({ id, label, image }) => (
              <div
                key={id}
                className="flex flex-col md:items-center items-start cursor-pointer w-1/4 z-20"
                onClick={() => setSelectedTab(id)}
              >
                <div className="relative mb-1">
                  <Image
                    src={image}
                    alt={label}
                    width={48}
                    height={48}
                    className="rounded object-cover md:w-12 md:h-12 w-8 h-8"
                  />
                </div>
                <span
                  className={`font-semibold text-[16px] md:text-[20px] mt-1 transition-all whitespace-nowrap
                ${selectedTab === id ? "text-white" : "text-white opacity-40"}
              `}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="relative w-full flex justify-between items-center mt-6">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className="relative flex flex-col items-start md:items-center w-1/4"
              >
                {/* Line segment to the right (except last) */}
                <div
                  className={`absolute top-1/2 md:left-1/2 left-0 h-0.5 z-0`}
                  style={{
                    width: "100%",
                    backgroundColor:
                      index < tabs.findIndex((t) => t.id === selectedTab) ||
                      index === tabs.findIndex((t) => t.id === selectedTab)
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.3)",
                    transform: "translateX(0%)",
                  }}
                ></div>

                {index === 0 && (
                  <div
                    className={`hidden md:block absolute top-1/2 left-0 h-0.5 z-0 w-1/2 bg-white`}
                  ></div>
                )}

                {/* Dot */}
                <div className="relative z-1 flex justify-center items-center w-5 md:w-15 bg-[#010922]">
                  <div
                    className={`md:w-4 md:h-4 w-2 h-2 rounded-full z-10 ${
                      index <= tabs.findIndex((t) => t.id === selectedTab)
                        ? "bg-white"
                        : "border-2 border-white bg-transparent"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Content Grid for selected tab */}
        <div className="relative text-white md:pt-10 px-4 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {amenities[selectedTab].map((item, index) => (
              <SlideUp
                delay={index * 0.2}
                key={index}
                className={`relative ${
                  index % 2 !== 0 && "top-10"
                } space-y-4 md:px-5 px-0`}
              >
                <div className="absolute h-[65%] left-[-10px] md:border-l md:border-dashed md:border-gray-300 opacity-20"></div>
                <div className="text-[20px] font-cormorant leading-7 text-orange-500 font-normal md:text-lg md:mb-6 mb-3">
                  {index + 1}
                </div>
                <h3 className="text-white text-left text-[18px] md:text-[24px] font-bold font-satoshi md:mb-6 mb-3">
                  {item.title}
                </h3>
                <div className="w-full h-[160px] md:h-[240px] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-satoshi text-[14px] md:text-[16px] text-white font-normal md:mt-6 mt-3 opacity-50">
                  {item.description}
                </p>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* Amenities count */}
        <div className="hidden md:flex flex-col text-center">
          <SlideUp
            delay={0.4}
            className="text-[150px] text-[#DE804B] font-cormorant leading-[150px] font-bold"
          >
            65+
          </SlideUp>
          <SlideUp
            delay={0.6}
            className="text-[48px] font-cormorant leading-[60px] font-normal text-white"
          >
            World-class Amenities
          </SlideUp>
        </div>

        {/* Responsive Amenities Count */}
        <SlideUp
          delay={0.4}
          className="flex md:hidden flex-col items-center text-center text-white relative"
        >
          {/* Horizontal lines */}
          <div
            className="absolute top-1/2 left-0 right-0 flex items-center"
            style={{ height: "1px" }}
          >
            <div className="flex-grow border-t border-gray-600"></div>
            <div className="px-15"></div>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Text content with spacing to clear lines */}
          <p className="text-[16px] font-satoshi font-bold leading-[20px] relative z-10">
            65+
          </p>
          <p className="text-[16px] font-satoshi font-bold leading-[20px] relative z-10">
            World-class <br /> Amenities
          </p>
        </SlideUp>

        {/* Navigation buttons */}
        <AnimatedSection delay={0.8}>
          <nav className="mb-30 relative w-full mt-9 flex justify-center items-center border-t border-b border-[#232c3d] px-1 md:px-0 py-4 md:py-6">
            {navTabs.map((tab, idx) => (
              <React.Fragment key={tab}>
                <button
                  onClick={() => {
                    setSelectedNav(tab);
                    const element = document.getElementById(
                      tab.toLowerCase().replace(/\s/g, "-")
                    );
                    if (element) {
                      const yOffset = -107; // Offset from top
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className={
                    "relative md:px-8 flex flex-col items-center focus:outline-none cursor-pointer" +
                    (selectedNav === tab
                      ? " text-white font-bold font-satoshi text-[16px] leading-[24px] md:text-[20px] md:leading-[28px]"
                      : " text-white font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] opacity-50 hover:text-white transition")
                  }
                >
                  <span>{tab}</span>
                  {selectedNav === tab && (
                    <div className="absolute left-1/2 -translate-x-1/2 md:bottom-[-24px] bottom-[-16px]">
                      <div className="w-[38px] h-[2px] bg-[#4F70AF] rounded"></div>
                    </div>
                  )}
                </button>
                {idx !== navTabs.length - 1 && (
                  <span className="mx-1 text-[#7c8ca7] text-xs select-none leading-none flex items-center">
                    &#9674;
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </AnimatedSection>
      </section>

      {/* Club house */}
      <section
        id="club-house"
        className="relative -mt-20 md:mx-15 mx-1 md:pb-10 bg-white"
      >
        <div className="md:px-6 px-3 py-10">
          <div className="flex justify-center">
            <SlideUp delay={0.2} className="absolute md:-top-12 -top-6">
              <Image
                src="/assets/clubhouselogo.png"
                alt=""
                width={100}
                height={100}
                className="responsive-image-amenities"
              />
            </SlideUp>
          </div>
          <SlideUp delay={0.4}>
            <h1 className="relative text-[#22252E] font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center font-cormorant md:my-12 my-3">
              Club-house
            </h1>
          </SlideUp>
          <div className="relative text-white md:py-10 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
              {clubhouseData.map((item, index) => (
                <SlideUp
                  delay={index * 0.2}
                  key={index}
                  className={`relative ${
                    index % 2 !== 0 && "top-10"
                  } md:space-y-4 md:px-5 px-0`}
                >
                  <div className="absolute h-[65%] left-[-10px] md:border-l md:border-dashed md:border-gray-300"></div>
                  <div className="max-md:text-center text-[18px] font-cormorant leading-7 text-orange-500 font-semibold md:text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-satoshi">
                    {item.title}
                  </h3>
                  <div className="w-full h-[160px] md:h-[240px] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-satoshi text-[14px] md:text-[16px] text-[#22252E] font-[400]">
                    {item.description}
                  </p>
                </SlideUp>
              ))}
            </div>
          </div>

          <div className="hidden md:grid max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {ClubIcons.map(({ label, image }, idx) => (
              <SlideUp
                delay={idx * 0.2}
                key={idx}
                className="flex items-center space-y-3"
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-full mb-0
                  }`}
                >
                  <Image
                    src={image}
                    alt={label}
                    width={92}
                    height={92}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-bold text-[24px] leading-[28px] font-satoshi text-[#22252E] text-center ml-7">
                  {label}
                </p>
              </SlideUp>
            ))}
          </div>
          {/* responsive */}
          <div className="md:hidden flex max-w-7xl mx-auto grid grid-cols-2 gap-5">
            {ClubIconsRes.map(({ label, image }, idx) => (
              <SlideUp
                delay={idx * 0.2}
                key={idx}
                className="flex flex-col items-center space-y-3"
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-full mb-0
                  }`}
                >
                  <Image
                    src={image}
                    alt={label}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-normal text-[18px] leading-[24px] font-satoshi text-[#22252E] text-center">
                  {label}
                </p>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* Horizontal Card Section */}
        <AnimatedSection>
          <div className="group cursor-pointer transform transition-transform duration-300 hover:scale-101 border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto my-6 mb-15 md:mb-0 md:my-12 md:h-[144px]">
            <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
              <Image
                src="/assets/faqs-detail-gif.gif"
                alt="Room preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 md:px-11 md:py-8">
              <p className="px-5 md:px-0 md:text-[24px] font-satoshi font-bold text-[#22252E] md:leading-[28px] text-[16px] leading-[24px]">
                Seamless living in a thoughtfully designed Masterplans, check
                floor plans.
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
          </div>
        </AnimatedSection>
      </section>

      {/* podium level */}
      <section
        id="podium-level"
        className="relative bg-[#E7EDF2] w-full py-2 px-1 md:py-20 md:px-15"
      >
        <div className="bg-white pb-12">
          <div className="flex justify-center">
            <SlideUp delay={0.2} className=" hidden md:block absolute md:top-7">
              <Image
                src="/assets/poduimLogo.png"
                alt=""
                width={100}
                height={100}
                className="responsive-image-amenities"
              />
            </SlideUp>
            {/* responsive */}
            <div className="block md:hidden absolute -top-5">
              <Image
                src="/assets/clubhouselogo.png"
                alt=""
                width={100}
                height={100}
                className="responsive-image-amenities"
              />
            </div>
          </div>
          <SlideUp delay={0.4}>
            <h1 className="relative text-[#22252E] font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center font-cormorant md:my-12 my-3 mt-10">
              Podium Level
            </h1>
          </SlideUp>

          <div className="relative text-white md:px-8 md:py-10 py-4 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
              {PodiumData.map((item, index) => (
                <SlideUp
                  delay={index * 0.2}
                  key={index}
                  className={`relative ${
                    index % 2 !== 0 && "top-10"
                  } md:space-y-4 md:px-5 px-0`}
                >
                  <div className="absolute h-[65%] left-[-10px] md:border-l md:border-dashed md:border-gray-300"></div>
                  <div className="max-md:text-center text-[18px] font-cormorant leading-7 text-orange-500 font-semibold md:text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-satoshi">
                    {item.title}
                  </h3>
                  <div className="w-full h-[160px] md:h-[240px] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-satoshi text-[14px] md:text-[16px] text-[#22252E] font-[400]">
                    {item.description}
                  </p>
                </SlideUp>
              ))}
            </div>
          </div>

          <div className="hidden md:grid max-w-7xl mx-auto md:grid-cols-3 gap-10 px-8 ">
            {PodiumIcons.map(({ label, image }, idx) => (
              <SlideUp
                delay={idx * 0.2}
                key={idx}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full">
                  <Image
                    src={image}
                    alt={label}
                    width={92}
                    height={92}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-bold text-[24px] leading-[28px] font-satoshi text-[#22252E]">
                  {label}
                </p>
              </SlideUp>
            ))}
          </div>
          {/* responsive */}
          <div className="md:hidden flex max-w-7xl mx-auto grid grid-cols-2 gap-5">
            {ClubIconsRes.map(({ label, image }, idx) => (
              <SlideUp
                delay={idx * 0.1}
                key={idx}
                className="flex flex-col items-center space-y-3"
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-full mb-0
                  }`}
                >
                  <Image
                    src={image}
                    alt={label}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-normal text-[18px] leading-[24px] font-satoshi text-[#22252E] text-center">
                  {label}
                </p>
              </SlideUp>
            ))}
          </div>
        </div>
        {/* Horizontal Card Section */}
        <AnimatedSection>
          <div className="group cursor-pointer transform transition-transform duration-300 hover:scale-101 border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto md:my-12 md:h-[144px]">
            <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
              <Image
                src="/assets/sport-gif.gif"
                alt="Room preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 md:px-11 md:py-8">
              <p className="px-5 md:px-0 md:text-[24px] font-satoshi font-bold text-[#22252E] md:leading-[28px] text-[16px] leading-[24px]">
                Curious to see life @Alcove and world-class amenities?
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
          </div>
        </AnimatedSection>
      </section>

      {/* ganga ghat */}
      <AnimatedSection>
        <section className="relative w-full h-[524px] md:flex md:overflow-hidden md:my-0 my-12 rounded-none shadow-lg bg-[#010922]  justify-end items-end">
          {/* Text container */}
          <div className=" flex py-6 md:py-[74px] px-4 md:px-0 absolute md:container md:w-[90%] w-full justify-center md:justify-start mx-auto z-1 md:top-1/2 top-2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <h2
              className="font-cormorant font-light text-white leading-[44px] md:leading-[72px] text-center md:text-left
      text-[36px] md:text-[56px]"
            >
              <span className="text-[#DE804B]">Devote </span>
              your evening to
              <br />
              experiencing the<span className="text-[#DE804B]"> Ganga</span>
              <br />
              <span className="text-[#DE804B]">Ghat</span>.
            </h2>
          </div>

          {/* Image container */}
          <div className="hidden md:flex w-full md:w-[65%] h-full relative">
            <Image
              src="/assets/gangaGhat.png"
              alt="Ferry Ride"
              fill
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 md:bg-[linear-gradient(87.36deg,#010922_9.69%,rgba(2,12,34,0)_93.16%)]" />
          </div>
          {/* responsive */}
          <div className="md:hidden w-full md:w-1/2 h-full relative">
            <Image
              src="/assets/ganga-responsive.png"
              alt="Ferry Ride"
              fill
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#010922_20.69%,rgba(2,12,34,0)_93.16%)]" />
          </div>
        </section>
      </AnimatedSection>

      {/* Ground level */}
      <section
        id="ground-level"
        className="relative bg-white w-full md:py-12 md:px-15"
      >
        <div className="bg-white pb-12">
          <div className="flex justify-center">
            <SlideUp delay={0.2} className="relative">
              <Image
                src="/assets/clubhouselogo.png"
                alt=""
                width={100}
                height={100}
                className="responsive-image-amenities"
              />
            </SlideUp>
          </div>
          <SlideUp delay={0.4}>
            <h1 className="relative text-[#22252E] font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center font-cormorant md:my-12 my-3 mt-5 md:mt-0">
              Ground Level
            </h1>
          </SlideUp>

          <div className="relative text-white md:py-10 py-6 px-4 md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
              {groundData.map((item, index) => (
                <SlideUp
                  delay={index * 0.2}
                  key={index}
                  className={`relative ${
                    index % 2 !== 0 && "top-10"
                  } md:space-y-4 md:px-5 px-0`}
                >
                  <div className="absolute h-[65%] left-[-10px] md:border-l md:border-dashed md:border-gray-300"></div>
                  <div className="max-md:text-center text-[18px] font-cormorant leading-7 text-orange-500 font-semibold md:text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-satoshi">
                    {item.title}
                  </h3>
                  <div className="w-full h-[160px] md:h-[240px] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-satoshi text-[14px] md:text-[16px] text-[#22252E] font-[400]">
                    {item.description}
                  </p>
                </SlideUp>
              ))}
            </div>
          </div>

          <div className="hidden md:grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
            {groundIcons.map(({ label, image }, idx) => (
              <SlideUp
                delay={idx * 0.1}
                key={idx}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full">
                  <Image
                    src={image}
                    alt={label}
                    width={92}
                    height={92}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-bold text-[24px] leading-[28px] font-satoshi text-[#22252E]">
                  {label}
                </p>
              </SlideUp>
            ))}
          </div>
          {/* responsive */}
          <div className="md:hidden flex max-w-7xl mx-auto grid grid-cols-2 gap-5 px-4">
            {ClubIconsRes.map(({ label, image }, idx) => (
              <SlideUp
                delay={idx * 0.1}
                key={idx}
                className="flex flex-col items-center space-y-3"
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-full mb-0
                  }`}
                >
                  <Image
                    src={image}
                    alt={label}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-normal text-[18px] leading-[24px] font-satoshi text-[#22252E] text-center">
                  {label}
                </p>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* ferry ride */}
      <AnimatedSection>
        <section className="relative w-full h-full flex flex-col-reverse md:flex-row overflow-hidden shadow-lg bg-white pb-15 md:pb-0 rounded-none">
          {/* Image (bottom on mobile, left on desktop) */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[524px] relative">
            <Image
              src="/assets/ferry-ride.png"
              alt="Ferry Ride"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute -inset-1 bg-[linear-gradient(180deg,#0a1628_9.69%,rgba(2,12,34,0)_93.16%)] md:bg-[linear-gradient(267.36deg,#0a1628_9.69%,rgba(2,12,34,0)_93.16%)]" />
          </div>

          {/* Text Content (top on mobile, right on desktop) */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center py-10 px-4 md:px-6 md:py-[74px] md:pr-[100px] bg-[#0a1628] text-center md:text-left">
            <h2 className="text-[36px] md:text-[56px] font-cormorant text-white font-light leading-[40px] md:leading-[72px] mb-6 md:mb-7">
              Indulge in the <span className="text-[#DE804B]">ferry ride </span>
              <br className="hidden md:block" />
              departing from our <br className="hidden md:block" />
              location.
            </h2>
            <p className="text-white font-satoshi font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] mb-6 md:mb-7">
              Ferry solely for potential clients and current customers.
            </p>
            <button className="md:min-h-[4rem] min-h-[3.5rem] h-full md:-top-7 bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden button-primary">
              <div className="px-6 py-3 mr-20">
                <span>Book Now</span>
              </div>
              <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full text-orange-500 bg-[#002F52] text-lg">
                ↗
              </span>
            </button>
          </div>
        </section>
      </AnimatedSection>

      {/* certified section */}
      <AnimatedSection className='overflow-visible'>
  <section className="relative w-full bg-[#E7F2EB] px-2 md:pt-[130px] md:pb-20 pt-1 pb-1 md:px-15 bg-cover bg-center md:bg-top">
    <div className="md:!w-[92%] w-[96%] h-[720px] absolute z-10">
      <Image src={"/assets/certifed.svg"} alt="" fill className="object-cover w-full h-full" />
    </div>
    <div className="z-11 relative w-full md:py-20 md:px-10 mb:mt-12 text-center">
      {/* IGBC Logo */}
      <div className="flex justify-center z-11">
        <SlideUp delay={0.6} className="absolute -top-12 z-11">
          <Image
            src="/assets/IGBC.png"
            alt="IGBC Logo"
            width={152}
            height={152}
            priority
            className="responsive-IGBC-image"
          />
        </SlideUp>
      </div>

      {/* Heading */}
      <SlideUp delay={0.8}>
        <h2 className="md:text-[56px] text-[36px] leading-[44px] font-cormorant font-normal md:leading-[72px] my-10">
          Pre-Certified <br />
          Platinum-Rated by <br />
          <span className="text-[#DE804B]">IGBC</span>
        </h2>
      </SlideUp>

      {/* Features List - Desktop */}
      <div className="hidden md:flex justify-between w-full gap-20 pb-20 md:pb-0">
        {features.map(({ image, title }, i) => (
          <SlideUp
            delay={i * 0.2}
            key={i}
            className="flex flex-col items-center md:space-y-4 px-4 md:px-0 text-center max-w-[235px]"
          >
            <div className="flex-shrink-0 flex items-center justify-center rounded-full mb-0">
              <Image
                src={image}
                alt={title}
                width={92}
                height={92}
                className="icon-image"
              />
            </div>
            <p className="md:mt-7 mt-4 font-satoshi font-bold text-[16px] md:text-[20px] leading:6 md:leading-7 text-[#22252E]">
              {title}
            </p>
          </SlideUp>
        ))}
      </div>

      {/* Features List - Mobile */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:hidden pb-15 px-3">
        {features.slice(0, 2).map(({ image, title }, i) => (
          <SlideUp
            delay={i * 0.2}
            key={i}
            className="flex flex-col items-center text-center"
          >
            <Image src={image} alt={title} width={60} height={60} />
            <p className="mt-3 font-satoshi font-bold text-[16px] leading-[24px] text-[#22252E]">
              {title}
            </p>
          </SlideUp>
        ))}
        {features.slice(2, 4).map(({ image, title }, i) => (
          <SlideUp
            delay={(i + 2) * 0.2}
            key={i + 2}
            className="flex flex-col items-center text-center"
          >
            <Image src={image} alt={title} width={60} height={60} />
            <p className="mt-3 font-satoshi font-bold text-[16px] leading-[24px] text-[#22252E]">
              {title}
            </p>
          </SlideUp>
        ))}
        {/* Center the last item */}
        <div className="col-span-2 flex justify-center">
          <SlideUp
            delay={4 * 0.2}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={features[4].image}
              alt={features[4].title}
              width={60}
              height={60}
            />
            <p className="mt-3 font-satoshi font-bold px-15 text-[16px] leading-[24px] text-[#22252E]">
              {features[4].title}
            </p>
          </SlideUp>
        </div>
      </div>

      {/* View Certification Button */}
      <AnimatedSection className="flex justify-center relative bottom-7 md:bottom-0 md:top-27 overflow-visible">
        <button className="md:min-h-[4rem] min-h-[3.5rem] h-full absolute md:static bg-[#144D78] hover:bg-blue-800 transition rounded-md text-white font-medium inline-flex items-center gap-2 overflow-hidden mb-0 button-primary">
          <div className="px-6 py-3 mr-20">View Certification</div>
          <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full text-orange-500 bg-[#002F52] text-lg">
            ↗
          </span>
        </button>
      </AnimatedSection>
    </div>
    {/* Horizontal Card Section */}
    <AnimatedSection>
      <div className="group cursor-pointer transform transition-transform duration-300 hover:scale-101 border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto mt-20 md:h-[144px]">
        <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
          <Image
            src="/assets/sport-gif.gif"
            alt="Room preview"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 md:px-11 md:py-8">
          <p className="px-5 md:px-0 md:text-[24px] font-satoshi font-bold text-[#22252E] md:leading-[28px] text-[16px] leading-[24px]">
            Curious to see life @Alcove and world-class amenities?
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
      </div>
    </AnimatedSection>
  </section>
</AnimatedSection>

      {/* Plans */}
      <AnimatedSection className="overflow-visible">
        <div className="relative p-5 overflow-hidden mb-0">
          <GangaWaves />
          <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
          <div className="relative md:px-24 container max-w-7xl mx-auto py-5 max-md:pb-15 md:py-15">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="max-md:col-span-2 md:p-2">
                <SlideUp delay={0.4}>
                  <h2 className="font-cormorant text-[36px] md:leading-[72px] max-md:text-center md:font-[300] md:text-[56px] text-white">
                    Your <span className="orange-color">Safety</span> &
                    <br className="max-md:hidden" />{" "}
                    <span className="orange-color">Security</span>, Our
                    <br className="max-md:hidden" /> Priority
                  </h2>
                </SlideUp>
                <SlideUp delay={0.6}>
                  <button className="hidden mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-md text-white font-medium md:inline-flex items-center gap-2 overflow-hidden mb-0 button-primary">
                    <div className="px-6 py-3 mr-20">Schedule a Visit</div>
                    <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">
                      ↗
                    </span>
                  </button>
                </SlideUp>
              </div>
              <div className="max-md:col-span-2 grid grid-cols-2 md:gap-x-20 gap-y-9 md:gap-y-12 mt-9 md:mt-6">
                <SlideUp delay={0.2} className="flex flex-col items-center">
                  <Image
                    height={68}
                    width={68}
                    src="/assets/icons/surveillance-cctv.svg"
                    alt="Security Systems"
                    className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
                  />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-satoshi font-[400] leading-6 md:leading-[28px] text-white text-center">
                    24 hours security systems
                  </p>
                </SlideUp>

                <SlideUp delay={0.3} className="flex flex-col items-center">
                  <Image
                    height={68}
                    width={68}
                    src="/assets/icons/desktop-computer.svg"
                    alt="Monitoring Systems"
                    className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
                  />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-satoshi font-[400] leading-6 md:leading-[28px] text-white text-center">
                    Central monitoring systems
                  </p>
                </SlideUp>

                <SlideUp delay={0.5} className="flex flex-col items-center">
                  <Image
                    height={68}
                    width={68}
                    src="/assets/icons/security-officer-gate.svg"
                    alt="Surveillance"
                    className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
                  />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-satoshi font-[400] leading-6 md:leading-[28px] text-white text-center">
                    24 hours surveillance
                  </p>
                </SlideUp>

                <SlideUp delay={0.6} className="flex flex-col items-center">
                  <Image
                    height={68}
                    width={68}
                    src="/assets/icons/surveillance-cctv.svg"
                    alt="Emergency Buttons"
                    className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
                  />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-satoshi font-[400] leading-6 md:leading-[28px] text-white text-center">
                    Emergency Buttons
                  </p>
                </SlideUp>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-center relative -top-7">
          <button className="inline-flex relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium md:hidden items-center gap-2 overflow-hidden mb-0 button-primary">
            <div className="px-6 py-3 mr-20">Schedule a Visit</div>
            <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">
              ↗
            </span>
          </button>
        </div>
      </AnimatedSection>

      {/* Question Section */}
      <section className="relative w-full bg-[#F8FAFB] md:py-20 md:px-25 flex justify-center h-[650px] md:h-full mb-[50px] md:mb-0">
        <div className="flex md:flex-row flex-col w-[100%] md:justify-between">
          <div className="max-md:col-span-2 md:p-2 pt-10 md:pt-0">
            <SlideUp delay={0.4}>
              <h2 className="font-cormorant text-[36px] max-md:text-center md:leading-[72px] md:font-[400] md:text-[56px] text-black">
                Frequently
                <br className="max-md:hidden" /> Asked
                <br className="max-md:hidden" />{" "}
                <span className="orange-color">Questions</span>
              </h2>
            </SlideUp>
          </div>
          <div className="flex flex-col md:w-[70%] w-full">
            {/* Category Buttons */}
            <div className="flex gap-5 md:gap-10 items-center mb-8 mt-6 md:mt-0 text-gray-400 relative py-4 px-6 md:py-0 md:px-0 md:border-none border-y-1 border-dashed border-[#ebedef]">
              {["Category 1", "Category 2", "Category 3"].map(
                (label, idx, arr) => (
                  <React.Fragment key={idx}>
                    <button
                      className={`relative font-semibold pb-1 cursor-pointer transition-colors duration-200 ${
                        activeCategory === idx ? "text-black" : "text-gray-400"
                      }`}
                      onClick={() => {
                        setActiveCategory(idx);
                        setActiveIndex(null); // Reset open accordion
                      }}
                    >
                      {label}
                      {activeCategory === idx && (
                        <span className="absolute left-0 -bottom-[17px] w-[30px] h-[2px] bg-[#4F70AF] rounded-sm"></span>
                      )}
                    </button>

                    {/* CSS Diamond */}
                    {idx < arr.length - 1 && (
                      <span className="w-1 h-1 border border-black rotate-45 mx-[12px]"></span>
                    )}
                  </React.Fragment>
                )
              )}
            </div>

            {/* Accordion Items */}
            {accordionData[activeCategory].map((item, index) => (
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
                      ? "max-h-40 opacity-100"
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
        </div>
        <div className="group cursor-pointer transform transition-transform duration-300 hover:scale-101 absolute border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto mt-20 -bottom-13 md:h-[104px] z-1">
          <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
            <Image
              src="/assets/faqs-detail-gif.gif"
              alt="Room preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 md:px-11 md:py-8">
            <p className="px-5 md:px-0 md:text-[24px] font-satoshi font-bold text-[#22252E] md:leading-[28px] text-[16px] leading-[24px]">
              Have more questions? Contact us now.
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
        </div>
      </section>
    </main>
  );
}
