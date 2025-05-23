/* eslint-disable react/no-unescaped-entities */
"use client";
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
      description: "Let your little ones frolic at the children’s play area or the splash pool while you lounge or take a stroll",
      image: "/assets/noon1.png",
    },
    {
      title: "Unleash your playful side in our dynamic indoor games room.",
      description:
        "Refresh your senses with the interactive fountains",
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
      title: "Elevate your lifestyle in our clubhouse, offering diverse amenities for your enjoyment",
      description: "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
      image: "/assets/noon4.png",
    },
  ],
  evening: [
    {
      title: "Indulge in opulent travel with our private ferry service, redefining luxury and convenience.",
      description: "Let your little ones frolic at the children’s play area or the splash pool while you lounge or take a stroll",
      image: "/assets/evening1.png",
    },
    {
      title: "Unleash your agility and finesse on our top-notch badminton court, designed for exhilarating rallies and competitive play.",
      description: "Refresh your senses with the interactive fountains",
      image: "/assets/evening2.png",
    },
    {
      title: "Escape to a secluded waterfront oasis at our private ghat.",
      description: "Immerse yourself in the tranquility of the lush landscape garden",
      image: "/assets/evening3.png",
    },
    {
      title: "Explore the depths of spirituality",
      description: "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
      image: "/assets/evening4.png",
    },
  ],
  night: [
    {
      title: "Indulge in the grandeur of exquisite architecture, luxurious seating & captivating artwork.",
      description: "Let your little ones frolic at the children’s play area or the splash pool while you lounge or take a stroll",
      image: "/assets/night1.png",
    },
    {
      title: "Unforgettable events in elegant spaces await at our banquet facilities.",
      description: "Refresh your senses with the interactive fountains",
      image: "/assets/night2.png",
    },
    {
      title: "Retail bliss awaits at our outlet facility with diverse stores, exclusive discounts, and a vibrant atmosphere",
      description: "Immerse yourself in the tranquility of the lush landscape garden",
      image: "/assets/night3.png",
    },
    {
      title: "Elevate your nights with breathtaking views from our viewing deck, offering a panorama, cozy seating, and enchanting ambiance",
      description: "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
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
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
      <section className="relative justify-center bg-[#f3f6f8] flex flex-col items-center md:h-[280px] md:top-[107] h-[180px] top-[50]">
        <div className="px-4 pt-6 text-center pb-4 md:pb-0">
          <span className="text-[#22252e] font-bold text-[20px]">• Home</span>
          <span className="mx-2">—</span>
          <span className="text-[#5c5f68] font-normal text-[20px]">
            Amenities
          </span>
        </div>
        <h1 className="text-[48px] text-black leading-[52px] md:text-[#dee2e4] md:text-[150px] md:leading-[150px] font-[IvyMode]">
          Amenities
        </h1>
      </section>

      <section className="mt-10">
        <div className="container md:max-w-7xl md:mx-auto">
          <div className="relative w-full md:h-[460px] h-[265px]">
            <Image src="/assets/Amenities.png" alt="Hero-img" fill priority />
          </div>
          <div className="relative p-5 md:p-12 bg-white/50 -mt-12 md:mx-[80px] mx-[2%] md:backdrop-blur-[37px] backdrop-blur-[7px] mb-12">
            <h2 className="project-overview-title text-center">
              Lead a life of<span className="orange-color"> luxury</span>.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[#010922] text-white px-6 py-12 w-full relative">
        <div className="flex w-full md:justify-between justify-center md:max-w-7xl md:mx-auto md:text-left text-center md:h-[180px] md:mb-12">
          <div className="mb-10">
            <p className="text-white font-[Satoshi] font-normal text-[16px] leading-[20px] mb-4">
              / Amenities
            </p>
            <h2 className="md:text-[56px] text-[36px] font-[IvyMode] font-normal leading-[72px]">
              <span className="text-[#DE804B]">Streamline</span> Your <br />
              Daily-routine
            </h2>
          </div>
          <p className="hidden md:w-[400px] md:text-[20px] md:leading-[28px] md:text-white md:opacity-60 md:font-normal md:font-[Satoshi] md:flex md:items-end">
            Experience a world of wonder and adventure. Our podium level is a
            playground for all ages!
          </p>
        </div>

        {/* Tabs */}
        <div className="relative flex flex-col items-center mb-12 w-[90%] mx-auto">
          <div className="flex justify-between w-full items-center">
            {tabs.map(({ id, label, image }, idx) => (
              <div
                key={id}
                className="flex flex-col items-center cursor-pointer z-20 w-1/4"
                onClick={() => setSelectedTab(id)}
              >
                <div className="relative w-12 h-12 mb-1">
                  <Image
                    src={image}
                    alt={label}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <span
                  className={`font-semibold text-[20px] mt-1 transition-all
                  ${selectedTab === id ? "text-white" : "text-white opacity-40"}
                `}
                >
                  {label}
                </span>
                {/* Circle, perfectly centered */}
                <div className="relative flex justify-center w-full z-10 mt-6">
                  <div
                    className={`w-5 h-5 rounded-full absolute left-1/2 -translate-x-1/2 z-10
                    ${
                      selectedTab === id
                        ? "bg-white"
                        : "border-2 border-white bg-transparent"
                    }
                  `}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          {/* Lines below circles, with gap */}
          <div
            className="relative w-full flex items-center mt-10"
            style={{ height: "12px" }}
          >
            {/* Background line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-600 opacity-30 z-0"></div>
            {/* Progress line */}
            <div
              className="absolute top-1/2 h-0.5 bg-white z-0 transition-all duration-300"
              style={{
                left: 0,
                width: `calc(${
                  (tabs.findIndex((tab) => tab.id === selectedTab) /
                    (tabs.length - 1)) *
                  100
                }% )`,
                transform: "translateY(-50%)",
              }}
            ></div>
            {/* Circles as overlays for correct z-index, invisible, just for spacing */}
            {tabs.map((tab, idx) => (
              <div
                key={tab.id}
                className="w-1/4 flex justify-center relative"
                style={{ height: "12px" }}
              ></div>
            ))}
          </div>
        </div>
        {/* Content Grid for selected tab */}
        <div className="relative text-white py-12 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {amenities[selectedTab].map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 !== 0 && "top-10"
                } space-y-4 px-4`}
              >
                <div className="absolute h-[65%] left-[-5px] md:border-l md:border-dashed md:border-gray-300 opacity-20"></div>
                <div className="text-[20px] font-[IvyMode] leading-7 text-orange-500 font-normal md:text-lg mb-6">
                  {index + 1}
                </div>
                <h3 className="text-white text-left text-[18px] md:text-[24px] font-bold font-[Satoshi] mb-6">
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
                <p className="font-[Satoshi] text-[14px] md:text-[16px] text-white font-normal mt-6 opacity-50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities count */}
        <div className="hidden md:flex flex-col text-center">
          <p className="text-[150px] text-[#DE804B] font-[IvyMode] leading-[150px] font-bold">
            65+
          </p>
          <p className="text-[48px] font-[IvyMode] leading-[60px] font-normal text-white">
            World-class Amenities
          </p>
        </div>

        {/* Responsive Amenities Count */}
        <div className="flex md:hidden flex-col items-center text-center text-white relative">
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
          <p className="text-[16px] font-[Satoshi] font-bold leading-[20px] relative z-10">
            65+
          </p>
          <p className="text-[16px] font-[Satoshi] font-bold leading-[20px] relative z-10">
            World-class <br /> Amenities
          </p>
        </div>

        {/* Navigation buttons */}
        <nav className="mb-30 relative w-full mt-9 flex justify-center items-center border-t border-b border-[#232c3d] py-4 md:py-6">
          {navTabs.map((tab, idx) => (
            <React.Fragment key={tab}>
              <button
                onClick={() => setSelectedNav(tab)}
                className={
                  "relative md:px-8 flex flex-col items-center focus:outline-none" +
                  (selectedNav === tab
                    ? " text-white font-bold font-[Satoshi] text-[16px] leading-[24px] md:text-[20px] md:leading-[28px]"
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
      </section>

      {/* Club house */}
      <section className="relative -mt-20 md:mx-15 mx-1 bg-white">
        <div className="px-6 py-10">
          <div className="flex justify-center">
            <div className="absolute md:-top-12 -top-6">
              <Image
                src="/assets/clubhouselogo.png"
                alt=""
                width={100}
                height={100}
                className="responsive-image"
              />
            </div>
          </div>
          <h1 className="relative text-[#22252E] font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center font-[ivyMode] md:my-12 my-3">
            Club-house
          </h1>
          <div className="relative text-white md:py-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {clubhouseData.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 !== 0 && "top-10"
                } space-y-4 px-4`}
              >
                <div className="absolute h-[65%] left-[-5px] md:border-l md:border-dashed md:border-gray-300"></div>
                <div className="max-md:text-center text-[18px] font-[IvyMode] leading-7 text-orange-500 font-semibold md:text-lg">
                  {index + 1}
                </div>
                <h3 className="text-[#22252E] max-md:text-center text-[18px] md:text-[24px] font-[700] font-[Satoshi]">
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
                <p className="font-[Satoshi] text-[14px] md:text-[16px] text-[#22252E] font-[400]">
                  {item.description}
                </p>
              </div>
            ))}
            </div>
            </div>

          <div className="hidden md:grid max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {ClubIcons.map(({ label, image }, idx) => (
              <div key={idx} className="flex items-center space-y-3">
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
                <p className="font-bold text-[24px] leading-[28px] font-[Satoshi] text-[#22252E] text-center ml-7">
                  {label}
                </p>
              </div>
            ))}
          </div>
          {/* responsive */}
          <div className="md:hidden flex max-w-7xl mx-auto grid grid-cols-2 gap-5">
            {ClubIconsRes.map(({ label, image }, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-3">
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
                <p className="font-normal text-[18px] leading-[24px] font-[Satoshi] text-[#22252E] text-center">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Card Section */}
        <div className="border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto my-6 mb-15 md:mb-0 md:my-12 md:h-[144px]">
          <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
            <Image
              src="/assets/clubBottom.png"
              alt="Room preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 md:px-11 md:py-8">
            <p className="px-5 md:px-0 md:text-[24px] font-[Satoshi] font-bold text-[#22252E] md:leading-[28px] text-[16px] leading-[24px]">
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
      </section>

      {/* podium level */}
      <section className="relative bg-[#E7EDF2] w-full py-2 px-1 md:py-20 md:px-15">
        <div className="bg-white pb-12">
          <div className="flex justify-center">
            <div className="absolute md:top-7 -top-5">
              <Image
                src="/assets/poduimLogo.png"
                alt=""
                width={100}
                height={100}
                className="responsive-image"
              />
            </div>
          </div>
          <h1 className="relative text-[#22252E] font-normal text-[56px] leading-[72px] text-center text-4xl font-[ivyMode] mb-12 mt-12">
            Podium Level
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300 max-w-[90%] mx-auto mb-[88px]">
            {PodiumData.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 !== 0 && "top-10"
                } space-y-4 px-4 flex flex-col items-center`}
              >
                <div className="absolute h-[70%] left-[-5px] md:border-l md:border-dashed md:border-[#E3E3E3]"></div>
                <div className="font-[IvyMode] text-[20px] leading-[28px] text-[#DE804B] font-normal w-[240px] mb-6">
                  {index + 1}
                </div>
                <h3 className="font-[Satoshi] text-[24px] leading-[28px] text-[#22252E] font-bold w-[240px] mb-6">
                  {item.title}
                </h3>
                <div className="w-[240px] h-[240px] md:h-[240px] relative overflow-hidden mb-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-[Satoshi] text-[16px] leading-[20px] text-[#22252E] font-normal w-[240px] mt-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
            {PodiumIcons.map(({ label, image }, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full">
                  <Image
                    src={image}
                    alt={label}
                    width={92}
                    height={92}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-bold text-[24px] leading-[28px] font-[Satoshi] text-[#22252E]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Horizontal Card Section */}
        <div className="border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden mb-0 w-full max-w-4xl mx-auto my-12 h-[144px]">
          <div className="w-[144px] h-[144px] flex-shrink-0 relative">
            <Image
              src="/assets/podiumBar.png"
              alt="Room preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 px-11 py-8">
            <p className="text-[24px] font-[Satoshi] font-bold text-[#22252E] leading-[28px]">
              Curious to see life @Alcove and world-class amenities?
            </p>
          </div>
          <div className="relative bg-[#D8E6F1] h-full flex items-center w-13.5">
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

      {/* ganga ghat */}
      <section className="relative w-full h-[524px] flex overflow-hidden my-12 rounded-none shadow-lg">
        <div className="w-1/2 flex justify-end items-center py-[74px] bg-[#0a1628]">
          <h2 className="text-[56px] font-[IvyMode] text-white font-light leading-[72px]">
            <span className="text-[#DE804B]">Devote </span>
            your evening to
            <br />
            experiencing the<span className="text-[#DE804B]"> Ganga</span>
            <br />
            <span className="text-[#DE804B]">Ghat.</span>
          </h2>
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src="/assets/gangaGhat.png"
            alt="Ferry Ride"
            fill
            className="object-cover"
            priority
          />
          {/* Optional: Add a dark gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-[linear-gradient(87.36deg,#0a1628_9.69%,rgba(2,12,34,0)_93.16%)]" />
        </div>
      </section>

      {/* Ground level */}
      <section className="relative bg-white w-full py-20 px-15">
        <div className="bg-white pb-12">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/assets/clubhouselogo.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
          <h1 className="relative text-[#22252E] font-normal text-[56px] leading-[72px] text-center text-4xl font-[ivyMode] mb-12 mt-2">
            Ground Level
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300 max-w-[90%] mx-auto mb-[88px]">
            {groundData.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 !== 0 && "top-10"
                } space-y-4 px-4 flex flex-col items-center`}
              >
                <div className="absolute h-[70%] left-[-5px] md:border-l md:border-dashed md:border-[#E3E3E3]"></div>
                <div className="font-[IvyMode] text-[20px] leading-[28px] text-[#DE804B] font-normal w-[240px] mb-6">
                  {index + 1}
                </div>
                <h3 className="font-[Satoshi] text-[24px] leading-[28px] text-[#22252E] font-bold w-[240px] mb-6">
                  {item.title}
                </h3>
                <div className="w-[240px] h-[240px] md:h-[240px] relative overflow-hidden mb-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-[Satoshi] text-[16px] leading-[20px] text-[#22252E] font-normal w-[240px] mt-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
            {groundIcons.map(({ label, image }, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full">
                  <Image
                    src={image}
                    alt={label}
                    width={92}
                    height={92}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-bold text-[24px] leading-[28px] font-[Satoshi] text-[#22252E]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ferry ride */}
      <section className="relative w-full h-[524px] flex overflow-hidden rounded-none shadow-lg">
        {/* Left: Ferry Image */}
        <div className="w-1/2 h-full relative">
          <Image
            src="/assets/ferry-ride.png"
            alt="Ferry Ride"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(267.36deg,#0a1628_9.69%,rgba(2,12,34,0)_93.16%)]" />
        </div>
        {/* Right: Content */}
        <div className="w-1/2 h-full flex flex-col justify-center py-[74px] pr-[100px] bg-[#0a1628]">
          <h2 className="text-[56px] font-[IvyMode] text-white font-light mb-7 leading-[72px]">
            Indulge in the <span className="text-[#DE804B]">ferry ride</span>
            <br />
            departing from our
            <br />
            location.
          </h2>
          <p className="text-white font-[Satoshi] font-bold text-[20px] leading-[28px] mb-7">
            Ferry solely for potential clients and current customers.
          </p>
          <button className="hidden mt-88 absolute bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden mb-0">
            <div className="px-20 py-6">Book Now</div>
            <span className="px-8 py-6 ml-auto text-orange-500 bg-[#002F52] text-lg">
              ↗
            </span>
          </button>
        </div>
      </section>

      {/* certified section */}
      <section className="relative w-full bg-[#E7F2EB] py-20 px-15">
        <div className="bg-white relative w-full py-20 px-10 mt-12 text-center">
          {/* IGBC Logo */}
          <div className="flex justify-center">
            <div className="absolute -top-12">
              <Image
                src="/assets/IGBC.png"
                alt="IGBC Logo"
                width={152}
                height={152}
                priority
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[56px] font-[ivyMode] font-normal leading-[72px] mt-10 mb-10">
            Pre-Certified <br />
            Platinum-Rated by <br />
            <span className="text-[#DE804B]">IGBC</span>
          </h2>

          {/* Features List */}
          <div className="hidden md:flex justify-between w-full gap-20">
            {features.map(({ image, title, bgColor }, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-4 text-center max-w-[235px]"
              >
                <div className="flex-shrink-0 flex items-center justify-center rounded-full mb-0">
                  <Image src={image} alt={title} width={92} height={92} />
                </div>
                <p className="mt-7 font-[Satoshi] font-bold text-[20px] leading-7 text-[#22252E]">
                  {title}
                </p>
              </div>
            ))}
          </div>

          {/* View Certification Button */}
          <div className="flex justify-center">
            <button className=" absolute bg-[#144D78] mt-12 hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex gap-2 overflow-hidden mb-0">
              <div className="pl-8 pr-15 py-4">View Certification</div>
              <span className="px-8 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">
                ↗
              </span>
            </button>
          </div>
        </div>
        {/* Horizontal Card Section */}
        <div className="border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden mb-0 w-full max-w-4xl mx-auto my-12 h-[144px]">
          <div className="w-[144px] h-[144px] flex-shrink-0 relative">
            <Image
              src="/assets/podiumBar.png"
              alt="Room preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 px-11 py-8">
            <p className="text-[24px] font-[Satoshi] font-bold text-[#22252E] leading-[28px]">
              Curious to see life @Alcove and world-class amenities?
            </p>
          </div>
          <div className="relative bg-[#D8E6F1] h-full flex items-center w-13.5">
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

      {/* Plans */}
      <div>
        <div className="relative p-5 overflow-hidden mb-0">
          <GangaWaves />
          <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
          <div className="relative md:px-24 container max-w-7xl mx-auto py-5 max-md:pb-15 md:py-15">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="max-md:col-span-2 md:p-2">
                <p className="max-md:text-center text-[14px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] !text-white mb-2">
                  / Plans
                </p>
                <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:text-[56px] !text-white">
                  Your <span className="orange-color">Safety</span> &
                  <br className="max-md:hidden" />{" "}
                  <span className="orange-color">Security</span>, Our
                  <br className="max-md:hidden" /> Priority
                </h2>
                <button className="hidden mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden mb-0">
                  <div className="px-6 py-3 mr-20">Schedule a Visit</div>
                  <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">
                    ↗
                  </span>
                </button>
              </div>
              <div className="max-md:col-span-2 grid grid-cols-2 md:gap-x-20 gap-y-9 md:gap-y-12 mt-9 md:mt-6">
                <div className="flex flex-col items-center">
                  <Image
                    height={68}
                    width={68}
                    src="/assets/icons/surveillance-cctv.svg"
                    alt="Security Systems"
                    className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
                  />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-[Satoshi] font-[400] leading-6 md:leading-[28px] text-white text-center">
                    24 hours security systems
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    height={68}
                    width={68}
                    src="/assets/icons/desktop-computer.svg"
                    alt="Monitoring Systems"
                    className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
                  />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-[Satoshi] font-[400] leading-6 md:leading-[28px] text-white text-center">
                    Central monitoring systems
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    height={68}
                    width={68}
                    src="/assets/icons/security-officer-gate.svg"
                    alt="Surveillance"
                    className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
                  />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-[Satoshi] font-[400] leading-6 md:leading-[28px] text-white text-center">
                    24 hours surveillance
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    height={68}
                    width={68}
                    src="/assets/icons/surveillance-cctv.svg"
                    alt="Emergency Buttons"
                    className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
                  />
                  <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-[Satoshi] font-[400] leading-6 md:leading-[28px] text-white text-center">
                    Emergency Buttons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-center relative -top-7">
          <button className="inline-flex relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium md:hidden items-center gap-2 overflow-hidden mb-0">
            <div className="px-6 py-3 mr-20">Schedule a Visit</div>
            <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">
              ↗
            </span>
          </button>
        </div>
      </div>

      {/* Question Section */}
      <section className="hidden relative w-full bg-[#F8FAFB] py-20 px-25 flex justify-center">
        <div className="flex w-[100%] justify-between">
          <div className="max-md:col-span-2 md:p-2">
            <p className="max-md:text-center text-[16px] md:text-[16px] font-[Satoshi] font-[400] leading-5 md:leading-[22px] text-black mb-2">
              / Amenities
            </p>
            <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:text-[56px] text-black">
              Frequently
              <br className="max-md:hidden" /> Asked
              <br className="max-md:hidden" />{" "}
              <span className="orange-color">Questions</span>
            </h2>
          </div>
          <div className="flex flex-col w-[70%]">
            <div className="flex space-x-8 mb-6 text-gray-400 relative">
              <button
                className={`relative font-semibold pb-1 ${
                  activeIndex === 0 ? "text-black" : ""
                }`}
                onClick={() => setActiveIndex(0)}
              >
                Category 1
              </button>

              <button className="relative font-semibold pb-1 text-gray-400 cursor-not-allowed">
                Category 2
              </button>

              <button className="relative font-semibold pb-1 text-gray-400 cursor-not-allowed">
                Category 3
              </button>
            </div>
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`mb-4 rounded-md bg-white p-4 ${
                  activeIndex === index ? "shadow-md" : ""
                }`}
              >
                <button
                  className="w-full flex justify-between items-center font-[Satoshi] font-bold text-left text-gray-900"
                  onClick={() => toggleIndex(index)}
                >
                  <span>{item.question}</span>
                  <span>
                    {activeIndex === index ? (
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
                          d="M6 18L18 6M6 6l12 12"
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
                {activeIndex === index && item.answer && (
                  <p className="mt-2 text-gray-500 text-sm font-[Satoshi]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute border-b-4 border-t-1 border-[#144D78] flex justify-center items-center bg-white rounded-none shadow-none overflow-hidden mb-0 w-full max-w-4xl mx-auto -bottom-13 h-[104px]">
          <div className="w-[144px] h-[144px] flex-shrink-0 relative">
            <Image
              src="/assets/podiumBar.png"
              alt="Room preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 px-11 py-8">
            <p className="text-[24px] font-[Satoshi] font-bold text-[#22252E] leading-[28px]">
              Have more questions? Contact us now.
            </p>
          </div>
          <div className="relative bg-[#D8E6F1] h-full flex items-center w-13.5">
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
