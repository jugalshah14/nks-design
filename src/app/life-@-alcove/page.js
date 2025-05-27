import Image from "next/image";

export default function lifeAtAlcove() {
  return (
    <main>
      <section className="relative justify-center bg-[#FDF9F6] flex flex-col items-center md:h-[280px] md:top-[107] h-[180px] top-[50]">
        <div className="px-4 pt-6 text-center pb-4 md:pb-0">
          <span className="text-[#22252e] font-bold text-[20px]">• Home</span>
          <span className="mx-2">—</span>
          <span className="text-[#5c5f68] font-normal text-[20px]">
            Life @Alcove
          </span>
        </div>
        <h1 className="text-[48px] text-black leading-[52px] md:text-[#dee2e4] md:text-[150px] md:leading-[150px] font-[IvyMode]">
          Life @Alcove
        </h1>
      </section>

      <section className="mt-10">
        <div className="container md:max-w-7xl md:mx-auto">
          <div className="relative w-full md:h-[460px] h-[265px]">
            <Image
              src="/assets/life @alcove.png"
              alt="Hero-img"
              fill
              priority
            />
          </div>
          <div className="relative p-5 md:p-12 bg-white/50 -mt-12 md:mx-[80px] mx-[2%] md:backdrop-blur-[37px] backdrop-blur-[7px] mb-12">
            <h2 className="project-overview-title text-center">
              Where<span className="orange-color"> luxury</span> meets
              <span className="orange-color"> affordability</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[#020C22] text-white py-20">
        <div className="flex justify-center font-[Satoshi] font-normal text-[16px] leading-[20px]">
          / Amenities
        </div>
        <h2 className="flex justify-center font-[IvyMode] font-normal md:text-[100px] md:leading-[120px] md:mt-4">
          <span className="orange-color">Elevated</span> &nbsp;Life @Alcove
        </h2>
        <div className="container mb-10 h-[570px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
          <div className="relative w-full">
            {/* <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem> */}
            <div className="relative md:w-[804px] md:h-[570px]">
              <Image
                src="/assets/fitness.png"
                alt="Fitness center with people working out"
                className="object-cover rounded-md"
                fill
              />
              <div className="absolute bottom-0 left-0 p-4 backdrop-blur-[34px] w-full">
                <p className="text-white text-lg">
                  Fitness events to enhance your fitness level.
                </p>
              </div>
            </div>
            {/* </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  <Image
                    src="/assets/fitness.png"
                    alt="Yoga class"
                              className="w-full h-[350px] object-cover rounded-md"
                              fill
                  />
                  <div className="absolute bottom-0 left-0 p-4 bg-black/50 w-full">
                    <p className="text-white text-lg">
                      Regular yoga sessions for mental peace.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent> */}
            <div className="absolute bottom-4 right-15 flex gap-1">
              <button className="bg-gray-600/50 hover:bg-gray-700/70 rounded-full p-1.5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className="bg-gray-600/50 hover:bg-gray-700/70 rounded-full p-1.5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            {/* </Carousel> */}
          </div>

          <div className="w-full px-4">
            <div className="w-[476px] relative bg-[#020C22] top-36 right-22 p-10">
              <h2 className="text-3xl mb-4 font-normal text-[40px] leading-[48px] font-[Satoshi]">
                Make everyday living effortless with our{" "}
                <span className="orange-color">Convenience</span> for Residence
                scheme.
              </h2>
            </div>
          </div>
        </div>

        {/* Nature Section */}
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-8 py-10">
          <div className="relative w-full">
            {/* <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem> */}
            <div className="relative md:w-[804px] md:h-[570px]">
              <Image
                src="/assets/gangaGhat.png"
                alt="Residential complex exterior"
                className="object-cover rounded-md"
                fill
              />
              <div className="absolute bottom-0 left-0 p-4 pl-12 backdrop-blur-[34px] w-full">
                <p className="text-white text-lg">
                  Experience the thrill of our nature exploring events!
                </p>
              </div>
            </div>
            {/* </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Garden area"
                              className="w-full h-[350px] object-cover rounded-md"
                              fill
                  />
                  <div className="absolute bottom-0 left-0 p-4 bg-black/50 w-full">
                    <p className="text-white text-lg">
                      Beautiful garden spaces to relax.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent> */}
            <div className="absolute bottom-4 right-4 flex gap-1">
              <button className="bg-gray-600/50 hover:bg-gray-700/70 rounded-full p-1.5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className="bg-gray-600/50 hover:bg-gray-700/70 rounded-full p-1.5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            {/* </Carousel> */}
          </div>

          <div className="w-full px-4">
            <div className="w-[476px] relative bg-[#020C22] top-29.5 left-22 p-10">
              <h2 className="text-3xl mb-4 font-normal text-[40px] leading-[48px] font-[Satoshi]">
                Embrace the beauty of nature with us, where modern living meets{" "}
                <span className="orange-color">natural wonders</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
          <div className="relative w-full">
            {/* <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem> */}
            <div className="relative md:w-[804px] md:h-[570px]">
              <Image
                src="/assets/box-cricket.png"
                alt="Box cricket tournament"
                className="object-cover rounded-md"
                fill
              />
              <div className="absolute bottom-0 left-0 p-4 bg-black/50 w-full">
                <p className="text-white text-lg">Box cricket tournament</p>
              </div>
            </div>
            {/* </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Sports activities"
                              className="w-full h-[350px] object-cover rounded-md"
                              fill
                  />
                  <div className="absolute bottom-0 left-0 p-4 bg-black/50 w-full">
                    <p className="text-white text-lg">
                      Various sports facilities available.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent> */}
            <div className="absolute bottom-4 right-15 flex gap-1">
              <button className="bg-gray-600/50 hover:bg-gray-700/70 rounded-full p-1.5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className="bg-gray-600/50 hover:bg-gray-700/70 rounded-full p-1.5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            {/* </Carousel> */}
          </div>

          <div className="w-full px-4">
            <div className="w-[476px] relative bg-[#020C22] top-36 right-22 p-10">
              <h2 className="text-3xl mb-4 font-normal text-[40px] leading-[48px] font-[Satoshi]">
                Join the fun and make memories with our{" "}
                <span className="orange-color">exciting activities</span> for
                everyone
              </h2>
            </div>
          </div>
        </div>
        <div className="relative border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto -bottom-33 md:h-[104px] z-1">
          <div className="w-[100px] h-[100px] md:w-[144px] md:h-[144px] flex-shrink-0 relative">
            <Image
              src="/assets/neighbour.png"
              alt="Room preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 md:px-11 md:py-8">
            <p className="px-5 md:px-0 md:text-[24px] font-[Satoshi] font-bold text-[#22252E] md:leading-[28px] text-[16px] leading-[24px]">
              Embrace the beauty of your surroundings, know our neighbourhood
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

      <section className="py-20 pb-0 bg-white">
        {/* Section Label */}
        <div className="mt-10 flex text-black justify-center font-[Satoshi] font-normal text-[16px] leading-[20px]">
          / Magnificent
        </div>

        {/* Section Title */}
        <h2 className="flex justify-center font-[IvyMode] font-normal md:text-[56px] md:leading-[72px] md:mt-4 text-center">
          <span className="text-orange-500">Event</span>&nbsp;Gallery
        </h2>

        {/* Image Grid */}
        <div className="mt-12 h-[466px] grid md:grid-cols-4 gap-4 px-19">
          {/* Image 1 */}
          <div className="relative overflow-hidden">
            <Image
              src="/assets/gellary1.png"
              alt="Event 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="relative row-span-3 overflow-hidden">
            <Image
              src="/assets/gellary2.png"
              alt="Event 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="relative row-span-2 rounded-full overflow-hidden">
            <Image
              src="/assets/gellary3.png"
              alt="Event 3"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden">
              <Image
                src="/assets/gellary4.png"
                alt="Event 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/assets/gellary5.png"
                alt="Event 5"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative row-span-2 overflow-hidden">
            <Image
              src="/assets/gellary6.png"
              alt="Event 5"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative row-span-2 overflow-hidden">
            <Image
              src="/assets/gellary7.png"
              alt="Event 5"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/assets/gellary8.png"
              alt="Event 6"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
