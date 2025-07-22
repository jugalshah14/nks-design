"use client";

import { AnimatedSection, SlideIn, SlideUp } from "@/components/animations";
import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="relative h-[100vh] flex flex-col">
      <section className="bg-[#FDF9F6] flex flex-col items-center px-5 sm:px-14 pt-[100px] sm:pt-[150px] pb-40">
        <SlideUp delay={0.4}>
          <div className="px-4 pt-6 text-center pb-4 md:pb-0">
            <span className="text-[#22252e] font-bold text-[20px]">• Home</span>
            <span className="mx-2">—</span>
            <span className="text-[#5c5f68] font-normal text-[20px]">
              Contact Us
            </span>
          </div>
        </SlideUp>
        <SlideUp delay={0.6}>
          <h1 className="text-[48px] text-black leading-[52px] md:text-[#dee2e4] md:text-[150px] md:leading-[150px] font-cormorant">
            Contact Us
          </h1>
        </SlideUp>
      </section>
      <section className="container relative mx-2 sm:mx-auto p-7 md:p-15 -top-[185px] sm:-top-[195px] lg:-top-[190px] bg-white">
        <div className="grid grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-30">
          <AnimatedSection
            delay={0.8}
            className="col-span-4 lg:col-span-2 xl:col-span-3"
          >
            <p className="block text-[#222222] font-[700] text-[20px] leading-7 mb-7">
              Write to us
            </p>
            <ContactUsForm />
          </AnimatedSection>
          <AnimatedSection
            delay={0.8}
            className="max-lg:mt-15 col-span-4 lg:col-span-2 xl:col-span-2"
          >
            <p className="font-satoshi block text-[#222222] font-[700] text-[20px] leading-7 mb-7">
              Office
            </p>
            <p className="font-satoshi block text-[#5C5F68] font-[400] text-[16px] leading-5 mb-12">
              Ganapati 68/2, Harish Mukherjee Road, Bhowanipore, Kolkata, West
              Bengal 700025
            </p>
            <p className="font-satoshi block text-[#222222] font-[700] text-[20px] leading-7 mb-7">
              For quick inquiries
            </p>
            <Link
              href={"tel:918017012374"}
              className="flex items-center gap-4 px-4 py-3 border border-[#EDEDED] mt-8 cursor-pointer"
            >
              <div className="relative h-[24px] w-[24px] md:h-[32px] md:w-[32px] overflow-hidden">
                <Image
                  src="/assets/icons/call.svg"
                  fill
                  alt="call"
                  className="object-center"
                />
              </div>
              <span className="font-[700] text-[16px] leading-5 text-[#22252E]">
                Call Us
              </span>
              <span className="text-[18px] leading-5 ml-auto font-[400] md:text-[20px] md:leading-7 text-[#144D78]">
                +91 80124 13411
              </span>
            </Link>
            <Link
              href={"mailto:marketing@alcoverealty.in"}
              className="flex items-center gap-4 px-4 py-3 border border-[#EDEDED] mt-4 cursor-pointer"
            >
              <div className="relative h-[24px] w-[24px] md:h-[32px] md:w-[32px] overflow-hidden">
                <Image
                  src="/assets/icons/email.svg"
                  fill
                  alt="e-mail"
                  className="object-center"
                />
              </div>
              <span className="font-[700] text-[16px] leading-5 text-[#22252E]">
                Mail Us
              </span>
              <span className="text-[18px] leading-5 ml-auto font-[400] md:text-[20px] md:leading-7 text-[#144D78]">
                inquire@alcove.in
              </span>
            </Link>
            <p className="font-satoshi block text-[#222222] font-[700] text-[20px] leading-7 mt-12">
              Join our newsletter
            </p>
            <div className="mt-7 flex sm:w-[80%]">
              <label
                htmlFor="newsletter-email"
                className="form-label px-4 py-2 flex-1"
              >
                <input
                  className="form-input mt-2"
                  type="text"
                  id="newsletter-email"
                  placeholder="Your Email Address*"
                />
                <span>Your Email Address*</span>
              </label>
              <button className="px-6 py-3 ml-auto orange-color bg-[#002F52] text-lg relative flex items-center justify-center">
                <Image
                  src="/assets/icons/white-check.svg"
                  alt="white-check"
                  height={20}
                  width={20}
                />
              </button>
            </div>
          </AnimatedSection>
        </div>
        {/* Footer Bottom */}
        <div className="absolute w-[100%] md:-bottom-20 left-0 mt-7 md:mt-30 max-md:flex-col flex justify-between items-center max-md:gap-9">
          <div className="order-1 flex gap-10">
            <Link
              href={"#"}
              className="font-[500] text-[14px] leading-6 text-[#5C5F68] md:text-center"
            >
              Terms of Service
            </Link>
            <Link
              href={"#"}
              className="font-[500] text-[14px] leading-6 text-[#5C5F68] md:text-center"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="order-3 md:order-2 font-[400] text-[14px] leading-5 text-[#5C5F68] md:text-center">
            All rights reserved © Alcove Realty
          </p>
          <div className="order-2 md:order-3 flex items-center gap-10">
            <Link
              href={"https://www.youtube.com/@NewKolkatasangam"}
              className="relative h-6 w-6 flex justify-center items-center"
            >
              <Image
                src="/assets/icons/social-youtube.svg"
                height={16}
                width={22}
                className="object-cover"
                alt="YouTube"
              />
            </Link>
            <Link
              href={"https://www.facebook.com/NewKolkata"}
              className="relative h-6 w-6 flex justify-center items-center"
            >
              <Image
                src="/assets/icons/social-facebook.svg"
                height={24}
                width={24}
                className="object-cover"
                alt="Facebook"
              />
            </Link>
            <Link
              href="https://twitter.com/new_kolkata"
              className="relative h-6 w-6 flex justify-center items-center"
            >
              <Image
                src="/assets/icons/social-twitter.svg"
                height={19}
                width={24}
                className="object-cover"
                alt="Twitter"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/new_kolkata/"}
              className="relative h-6 w-6 flex justify-center items-center"
            >
              <Image
                src="/assets/icons/social-instagram.svg"
                height={22}
                width={22}
                className="object-cover"
                alt="Instagarm"
              />
            </Link>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/icons/footerwaves.svg"}
        height={83}
        width={990}
        className="mt-auto !w-[100%] object-cover"
        alt="waves"
      />
      <Link
        href={"http://wa.me/918017012374"}
        className="block md:hidden fixed bottom-5 right-5 p-4 z-999 rounded-4xl whatsapp-image"
      >
        <Image
          src={"/assets/icons/messaging-whatsapp.svg"}
          height={24}
          width={24}
          className="h-[24px] w-[24px] object-cover"
          alt="waves"
        />
      </Link>
    </main>
  );
}
