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
    {
      title: "Relax at the refreshing splash pool.",
      description: "Enjoy your leisure time and unwind",
      image: "/assets/SplashPool.png",
    },
  ],
  evening: [
    {
      title: "Experience serene walks in the garden pathways.",
      description: "Immerse yourself in nature",
      image: "/assets/GardenWalk.png",
    },
    {
      title: "Enjoy a calm evening with the community library.",
      description: "Escape into a world of books and knowledge",
      image: "/assets/Library.png",
    },
    {
      title: "Host a get-together at the rooftop lounge.",
      description: "Socialize and unwind with friends",
      image: "/assets/RooftopLounge.png",
    },
    {
      title: "Light workout at the outdoor fitness stations.",
      description: "Stay active and healthy",
      image: "/assets/OutdoorFitness.png",
    },
  ],
  night: [
    {
      title: "Stargazing from the rooftop terrace.",
      description: "Enjoy the night sky",
      image: "/assets/Stargazing.png",
    },
    {
      title: "Night swimming in the illuminated pool.",
      description: "Relax under the stars",
      image: "/assets/NightSwimming.png",
    },
    {
      title: "Quiet meditation sessions.",
      description: "Find inner peace",
      image: "/assets/NightMeditation.png",
    },
    {
      title: "Cozy movie nights in the home theater.",
      description: "Watch your favorite films in comfort",
      image: "/assets/HomeTheaterNight.png",
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

const PodiumData = [
  {
    title: "Palm garden",
    description: "Immerse yourself in the tranquility of the lush landscape garden",
    image: "/assets/PalmGarden.png",
  },
  {
    title: "Garden pavilion",
    description: "Enjoy the beauty of the lotus pond pavilion and unwind with a calming session of yoga and meditation",
    image: "/assets/GardenPavilion.png",
  },
  {
    title: "Outdoor gym",
    description: "Let your little ones frolic at the children’s play area or the splash pool while you lounge or take a stroll",
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
  { label: "Splash pool side deck with loungers", image: "/assets/podium6.png" },
  { label: "Interactive fountain", image: "/assets/podium7.png" },
  { label: "Fountain plaza", image: "/assets/podium8.png" },
  { label: "Kid’s play area", image: "/assets/podium9.png" },
  { label: "Common toilet", image: "/assets/podium10.png" },
  { label: "24/7 Power backup", image: "/assets/podium11.png" },
  { label: "CCTV", image: "/assets/podium12.png" },
  { label: "Provision for intercom", image: "/assets/podium13.png" },
  { label: "Disable access and parking", image: "/assets/podium14.png" },
  { label: "Solar panels", image: "/assets/podium15.png" },
  { label: "Admin office", image: "/assets/podium16.png" },
  { label: "Designed for natural light and ventilation", image: "/assets/podium17.png" },
  { label: "Improved air quality", image: "/assets/podium18.png" },
  { label: "Modern fire safety & firefighting equipment", image: "/assets/podium19.png" },
  { label: "Controlled noise pollution", image: "/assets/podium20.png" },
  { label: "Dedicated space for cycle, 2 wheelers, 4 wheelers", image: "/assets/podium21.png" },
  { label: "Triple height lobbies", image: "/assets/podium22.png" },
  { label: "Biometrics secured entrance", image: "/assets/podium23.png" },
  { label: "Reading room", image: "/assets/podium24.png" },
];



export default function Amenities() {
  const [selectedTab, setSelectedTab] = useState("morning");
  const [selectedNav, setSelectedNav] = useState("Club-house");

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
      <section className="relative justify-center bg-[#f3f6f8] flex flex-col items-center h-[280px] top-[107]">
        <div className="px-4 pt-6 text-center">
          <span className="text-[#22252e] font-bold text-[20px]">• Home</span>
          <span className="mx-2">—</span>
          <span className="text-[#5c5f68] font-normal text-[20px]">
            Amenities
          </span>
        </div>
        <h1 className="text-[#dee2e4] text-[150px] leading-[150px] font-[IvyMode]">
          Amenities
        </h1>
      </section>

      <section className="mt-10">
        <div className="container max-w-7xl mx-auto">
          <div className="relative w-full h-[460px]">
            <Image
              src="/assets/Amenities.png"
              alt="Hero-img"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="relative p-12 bg-white/50 -mt-12 mx-[80px] backdrop-blur-[60px] mb-12">
            <h2 className="project-overview-title text-center">
              Lead a life of<span className="orange-color"> luxury</span>.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[#010922] text-white px-6 py-12 w-full relative">
        <div className="flex justify-between max-w-7xl mx-auto h-[180px] mb-12">
          <div className="mb-10">
            <p className="text-white font-[Satoshi] font-normal text-[16px] leading-[20px] mb-4">
              / Amenities
            </p>
            <h2 className="text-[56px] font-[IvyMode] font-normal leading-[72px]">
              <span className="text-[#DE804B]">Streamline</span> Your <br />
              Daily-routine
            </h2>
          </div>
          <p className="w-[400px] text-[20px] leading-[28px] text-white opacity-60 font-normal font-[Satoshi] flex items-end">
            Experience a world of wonder and adventure. Our podium level is a
            playground for all ages!
          </p>
        </div>

        {/* Tabs */}
        <div
          className="relative flex flex-col items-center mb-12 w-[90%] mx-auto"
          style={{ minWidth: 600 }}
        >
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300 max-w-[90%] mx-auto">
          {amenities[selectedTab].map((item, index) => (
            <div
              key={index}
              className={`relative ${
                index % 2 !== 0 && "top-10"
              } space-y-4 px-4 flex flex-col items-center`}
            >
              <div className="absolute h-[70%] left-[-5px] md:border-l md:border-dashed md:border-[#E3E3E3] opacity-20"></div>
              <div className="font-[IvyMode] text-[20px] leading-[28px] text-[#DE804B] font-normal w-[240px] mb-6">
                {index + 1}
              </div>
              <h3 className="font-[Satoshi] text-[24px] leading-[28px] text-white font-bold w-[240px] mb-6">
                {item.title}
              </h3>
              <div className="w-[240px] h-[240px] md:h-[240px] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-[Satoshi] text-[16px] leading-[20px] text-white font-normal w-[240px] mt-6 opacity-50">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Amenities count */}
        <div className="text-center">
          <p className="text-[150px] text-[#DE804B] font-[IvyMode] leading-[150px] font-bold">
            65+
          </p>
          <p className="text-[48px] font-[IvyMode] leading-[60px] font-normal text-white">
            World-class Amenities
          </p>
        </div>

        {/* Navigation buttons */}
        <nav className="mb-30 relative w-full mt-9 flex justify-center items-center border-t border-b border-[#232c3d] py-6">
          {navTabs.map((tab, idx) => (
            <React.Fragment key={tab}>
              <button
                onClick={() => setSelectedNav(tab)}
                className={
                  "relative px-8 flex flex-col items-center focus:outline-none" +
                  (selectedNav === tab
                    ? " text-white font-bold font-[Satoshi] text-[20px] leading-[28px]"
                    : " text-white font-normal text-[20px] leading-[28px] opacity-50 hover:text-white transition")
                }
              >
                <span>{tab}</span>
                {selectedNav === tab && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-24px]">
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
      <section className="relative -mt-20 mx-15 bg-white">
        <div className="px-6 py-10">
          <div className="flex justify-center">
            <div className="absolute -top-12">
              <Image
                src="/assets/clubhouselogo.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
          <h1 className="relative text-[#22252E] font-normal text-[56px] leading-[72px] text-center text-4xl font-[ivyMode] mb-12 mt-12">
            Club-house
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300 max-w-[90%] mx-auto mb-[88px]">
            {clubhouseData.map((item, index) => (
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
                <div className="w-[240px] h-[240px] md:h-[240px] relative overflow-hidden">
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
            {ClubIcons.map(({ label, image }, idx) => (
              <div
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
                <p className="font-bold text-[24px] leading-[28px] font-[Satoshi] text-[#22252E] text-center ml-7">{label}</p>
              </div>
            ))}
          </div>
        </div>
        
      {/* Horizontal Card Section */}
      <div className="border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto my-12 h-[144px]">
        <div className="w-[144px] h-[144px] flex-shrink-0 relative">
          <Image
            src="/assets/clubBottom.png"
            alt="Room preview"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 px-11 py-8">
          <p className="text-[24px] font-[Satoshi] font-bold text-[#22252E] leading-[28px]">
            Seamless living in a thoughtfully designed Masterplans, check floor plans.
          </p>
        </div>
        <div className="bg-[#e9eef2] h-full flex items-center px-8">
          <Image src="/assets/icons/arrowlong.svg" alt="" width={40} height={3} />
        </div>
      </div>
      </section>

      {/* podium level */}
      <section className="relative bg-[#E7EDF2] w-full py-20 px-15">
      <div className="bg-white pb-12">
          <div className="flex justify-center">
            <div className="absolute top-7">
              <Image
                src="/assets/poduimLogo.png"
                alt=""
                width={100}
                height={100}
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
                <div className="w-[240px] h-[240px] md:h-[240px] relative overflow-hidden">
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
              <div
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
              <p className="font-bold text-[24px] leading-[28px] font-[Satoshi] text-[#22252E]">{label}</p>
            </div>
            ))}
          </div>
        </div>
        {/* Horizontal Card Section */}
      <div className="border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto my-12 h-[144px]">
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
        <div className="bg-[#e9eef2] h-full flex items-center px-8">
          <Image src="/assets/icons/arrowlong.svg" alt="" width={40} height={3} />
        </div>
      </div>
      </section>
      
      {/* ganga ghat */}
      <section className="relative w-[100%] ">
        <div className="flex">
          <div className="w-[50%] bg-black">
            dmiorjdem
          </div>
          <div className="w-[50%] h-[396px]">
            <Image src="/assets/gangaGhat.png" alt="" fill/>
          </div>
          </div>
      </section>

      {/* Plans */}
      <div>
        <div className="relative p-5 overflow-hidden">
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
                <button className="hidden mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden">
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
          <button className="inline-flex relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium md:hidden items-center gap-2 overflow-hidden">
            <div className="px-6 py-3 mr-20">Schedule a Visit</div>
            <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">
              ↗
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
