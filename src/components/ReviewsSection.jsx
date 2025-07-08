import { AnimatedSection, SlideUp } from "@/components/animations";
import Image from "next/image";
export default function ReviewsSection() {
  return (
    <>
      {/* #1 */}
      <div>
        <SlideUp delay={0.4}>
          <div className="bg-white relative container mx-auto md:-mt-20 pt-[54px] md:pb-[70px] pb-[30px]">
            <h2 className="flex md:flex-row flex-col justify-center font-cormorant font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center">
              When Promises&nbsp;
              <span className="text-orange-500"> Arrive Early</span>
            </h2>
          </div>
        </SlideUp>
        <div class="container mx-auto flex flex-col md:flex-row relative justify-between !overflow-visible md:h-[508px] md:mb-20">
          {/* Left: Quote and Text (Now below the video on mobile) */}
          <div class="bg-[#f6f8fa] md:min-w-[807px] md:p-15 py-10 px-5 md:max-w-[807px] w-full h-fit flex flex-col z-1 order-2 md:order-1">
            <div class="text-[#22252e] max-w-[305px] text-[15px] md:text-[16px] leading-[1.6] font-satoshi">
              <Image
                src="/assets/linee.svg"
                alt="line"
                width={140}
                height={3}
                className="pb-3"
              />
              They planned for the future—but their dream home came sooner. Hear
              how early delivery made their journey unforgettable.
            </div>
          </div>

          {/* Right: Video (Now on top in mobile view) */}
          <div class="md:absolute overflow-visible md:min-w-[65%] md:h-[449px] h-[220px] aspect-video flex items-center justify-center md:mt-15 right-0 z-2 order-1 md:order-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ud9WxxZ4Ns4"
              title="Customer Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              class="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      {/* #2 */}
      <div>
        <SlideUp delay={0.4}>
          <div className="bg-white relative container mx-auto md:-mt-20 pt-[54px] md:pb-[70px] pb-[30px]">
            <h2 className="flex md:flex-row flex-col justify-center font-cormorant font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center">
              Waking Up to the&nbsp;
              <span className="text-orange-500">Ganga</span>
            </h2>
          </div>
        </SlideUp>
        <div className="container mx-auto flex flex-col md:flex-row relative justify-between !overflow-visible md:h-[508px] md:mb-20 mb-10">
          {/* Quote Image */}
          <div className="md:block hidden absolute -left-20 top-0">
            <img src="/assets/qt.svg" alt="Quote" width={168} height={241} />
          </div>
          <div className="md:block hidden md:absolute md:right-60 md:top-20">
            <img
              src="/assets/circle.svg"
              alt="Quote"
              width={353}
              height={353}
            />
          </div>
          {/* left: Video */}
          <div className="md:absolute overflow-visible md:min-w-[65%] md:h-[449px] h-[220px] aspect-video flex items-center justify-center md:mt-15 left-0 z-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9QBa840b6ik"
              title="Customer Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          {/* right: Quote and Text */}
          <div className="bg-[#f6f8fa] md:min-w-[807px] md:p-15 py-10 px-5 md:pl-100 md:max-w-[807px] w-full h-fit flex flex-col z-1 md:absolute md:right-0">
            {/* Quote Text */}
            <div className="text-[#22252e] max-w-[305px] text-[15px] md:text-[16px] leading-[1.6] font-satoshi">
              <Image
                src="/assets/linee.svg"
                alt="line"
                width={140}
                height={3}
                className="pb-3"
              />
              They planned for the future—but their dream home came sooner. Hear
              how early delivery made their journey unforgettable.
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal card */}
      <AnimatedSection className="overflow-visible">
        <div className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-101 border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto md:mt-20 md:h-[144px]">
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
      </AnimatedSection>
      {/* #3 */}
      <div>
        <SlideUp delay={0.4}>
          <div className="bg-white relative container mx-auto  pt-[54px] md:pb-[70px] pb-[30px]">
            <h2 className="flex md:flex-row flex-col justify-center font-cormorant font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center">
              A Name They Could&nbsp;
              <span className="text-orange-500">Trust</span>
            </h2>
          </div>
        </SlideUp>
        <div className="container mx-auto flex flex-col md:flex-row relative justify-between !overflow-visible md:h-[508px] md:mb-20">
          {/* Quote Image (hidden on mobile, positioned on left) */}
          <div className="absolute -right-20 top-0 transform scale-x-[-1] md:block hidden">
            <img src="/assets/qt.svg" alt="Quote" width={168} height={241} />
          </div>
          <div className="absolute left-60 top-20 md:block hidden">
            <img
              src="/assets/circle.svg"
              alt="Quote"
              width={353}
              height={353}
            />
          </div>
          {/* Left: Quote and Text */}
          <div className="bg-[#f6f8fa] md:min-w-[807px] md:p-15 py-10 px-5 md:max-w-[807px] w-full h-fit flex flex-col z-1 order-2 md:order-1">
            <div className="text-[#22252e] max-w-[305px] text-[15px] md:text-[16px] leading-[1.6] font-satoshi">
              <Image
                src="/assets/linee.svg"
                alt="line"
                width={140}
                height={3}
                className="pb-3"
              />
              It is more than just a brand. They placed their trust in New
              Kolkata—and found it was well earned.
            </div>
          </div>

          {/* Right: Video */}
          <div className="md:absolute overflow-visible md:min-w-[65%] md:h-[449px] h-[220px] aspect-video flex items-center justify-center md:mt-15 right-0 z-2 order-1 md:order-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UTXy2taEo2w"
              title="Customer Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      {/* #4 */}
      <div>
        <SlideUp delay={0.4}>
          <div className="bg-white relative container mx-auto md:-mt-20 pt-[54px] md:pb-[70px] pb-[30px]">
            <h2 className="flex md:flex-row flex-col justify-center font-cormorant font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center">
              <span className="text-orange-500">Keys</span>
              &nbsp;to a New Chapter
            </h2>
          </div>
        </SlideUp>
        <div className="container mx-auto flex flex-col md:flex-row relative justify-between !overflow-visible md:h-[508px] md:mb-20">
          {/* Quote Image (hidden on mobile, positioned on left) */}
          <div className="md:block hidden absolute -left-20 top-0">
            <img src="/assets/qt.svg" alt="Quote" width={168} height={241} />
          </div>
          <div className="md:block hidden md:absolute md:right-60 md:top-20">
            <img
              src="/assets/circle.svg"
              alt="Quote"
              width={353}
              height={353}
            />
          </div>
          {/* Right: Video */}
          <div className="md:absolute overflow-visible md:min-w-[65%] md:h-[449px] h-[220px] aspect-video flex items-center justify-center md:mt-15 left-0 z-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/diVORAg3Sp0"
              title="Customer Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Left: Quote and Text */}
          <div className="bg-[#f6f8fa] md:min-w-[807px] md:p-15 py-10 px-5 md:pl-100 md:max-w-[807px] w-full h-fit flex flex-col z-1 md:absolute md:right-0">
            <div className="text-[#22252e] max-w-[305px] text-[15px] md:text-[16px] leading-[1.6] font-satoshi">
              <Image
                src="/assets/linee.svg"
                alt="line"
                width={140}
                height={3}
                className="pb-3"
              />
              One key. One door. A lifetime of memories ahead. Watch their joy
              on handover day.
            </div>
          </div>
        </div>
      </div>
      {/* #5 */}
      <div>
        <SlideUp delay={0.4}>
        <div className="bg-white relative container mx-auto md:-mt-20 pt-[54px] md:pb-[70px] pb-[30px]">
        <h2 className="flex md:flex-row flex-col justify-center font-cormorant font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[72px] text-center">
        Hear It From&nbsp;
              <span className="text-orange-500">Our Residents</span>
            </h2>
          </div>
        </SlideUp>
        <div className="container mx-auto flex flex-col md:flex-row relative justify-between !overflow-visible md:h-[508px] md:mb-20 mb-10">
          {/* Quote Image (now hidden on mobile, positioned on left) */}
          <div className="absolute -right-20 top-0 transform scale-x-[-1] md:block hidden">
            <img src="/assets/qt.svg" alt="Quote" width={168} height={241} />
          </div>
          <div className="absolute left-60 top-20 md:block hidden">
            <img
              src="/assets/circle.svg"
              alt="Quote"
              width={353}
              height={353}
            />
          </div>

          {/* Left: Quote and Text (Now below the video on mobile) */}
          <div className="bg-[#f6f8fa] md:min-w-[807px] md:p-15 py-10 px-5 md:max-w-[807px] w-full h-fit flex flex-col z-1 order-2 md:order-1">
            <div className="text-[#22252e] max-w-[305px] text-[15px] md:text-[16px] leading-[1.6] font-satoshi">
              <Image
                src="/assets/linee.svg"
                alt="line"
                width={140}
                height={3}
                className="pb-3"
              />
              It is more than just a brand. They placed their trust in New
              Kolkata—and found it was well earned.
            </div>
          </div>

          {/* Right: Video (Now on top in mobile view) */}
          <div className="md:absolute overflow-visible md:min-w-[65%] md:h-[449px] h-[220px] aspect-video flex items-center justify-center md:mt-15 right-0 z-2 order-1 md:order-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uy6JwmlsYGI"
              title="Customer Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Horizontal card */}
      <AnimatedSection className="overflow-visible">
        <div className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-101 border-b-4 border-t-1 border-[#144D78] flex items-center bg-white rounded-none shadow-none overflow-hidden w-full max-w-4xl mx-auto md:mt-20 md:h-[144px]">
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
      </AnimatedSection>
    </>
  );
}
