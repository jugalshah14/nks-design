"use client";
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Footer() {
    const pathname = usePathname();

    if (pathname === "/contact-us") return '';

    return (
        <div className='relative'>
            <div className='container mx-auto px-4 lg:px-8 lg:px-24 py-10 lg:py-20 lg:pb-30 bg-white relative'>
                <div className='grid grid-cols-2 lg:gap-30'>
                    <div className='max-lg:col-span-2 order-2 lg:order-1'>
                        <h2 className="hidden lg:block project-overview-title text-[56px] !text-[#22252E] mb-8">
                            <span className="orange-color">Contact </span>Us
                        </h2>
                        <p className="hidden lg:block font-[400] text-[14px] leading-5 !text-[#5C5F68]">
                            Whether you're interested in creating a custom space, or want to learn more about what New Kolkata can do for you, we would love to chat.
                        </p>

                        <h2 className="max-lg:text-center text-[18px] leading-6 font-stoshi font-[700] lg:leading-7 lg:text-[24px] !text-[#22252E] mt-12 mb-4">
                            Alcove Realty
                        </h2>
                        <p className="max-lg:text-center font-[400]  text-[14px] leading-5 !text-[#5C5F68]">
                            Ganapati 68/2, Harish Mukherjee Road, Bhowanipore, Kolkata, West Bengal 700025
                        </p>
                        <Link href={"tel:918017012374"} className='flex items-center gap-4 px-4 py-3 border border-[#EDEDED] mt-8 cursor-pointer'>
                            <div className='relative h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] overflow-hidden'>
                                <Image src="/assets/icons/call.svg" fill alt="call" className="object-center" />
                            </div>
                            <span className='font-[700] text-[16px] leading-5 text-[#22252E]'>Call Us</span>
                            <span className='text-[18px] leading-5 ml-auto font-[400] lg:text-[20px] lg:leading-7 text-[#144D78]'>+91 80124 13411</span>
                        </Link>
                        <Link href={"mailto:marketing@alcoverealty.in"} className='flex items-center gap-4 px-4 py-3 border border-[#EDEDED] mt-4 cursor-pointer'>
                            <div className='relative h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] overflow-hidden'>
                                <Image src="/assets/icons/email.svg" fill alt="e-mail" className="object-center" />
                            </div>
                            <span className='font-[700] text-[16px] leading-5 text-[#22252E]'>Mail Us</span>
                            <span className='text-[18px] leading-5 ml-auto font-[400] lg:text-[20px] lg:leading-7 text-[#144D78]'>inquire@alcove.in</span>
                        </Link>
                    </div>
                    <div className='max-lg:col-span-2 order-1 lg:order-2'>
                        <p className='hidden lg:block text-[#222222] font-[700] text-[20px] leading-7 mb-7'>Write to us</p>
                        <p className='block lg:hidden text-[#22252E] font-[400] text-[14px] leading-5 text-center'>/ Amenities</p>
                        <h2 className="block lg:hidden project-overview-title font-[400] text-[36px] !text-[#22252E] mb-8 text-center">
                            <span className="orange-color">Contact </span>Us
                        </h2>
                        <form action={"#"} className='flex flex-col'>
                            <div className='grid grid-cols-2 gap-7'>
                                <div>
                                    <label htmlFor="name" className='form-label px-4 py-2'>
                                        <input className='form-input mt-2' type="text" id="name" placeholder="Name" />
                                        <span className="truncate">Name</span>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="company" className='form-label px-4 py-2'>
                                        <input className='form-input mt-2' type="text" id="company" placeholder="Company Name" />
                                        <span className="truncate">Company Name</span>
                                    </label>
                                </div>
                                <div className='hidden lg:block'>
                                    <label htmlFor="email" className='form-label px-4 py-2'>
                                        <input className='form-input mt-2' type="text" id="email" placeholder="Your Email Address" />
                                        <span className="truncate">Your Email Address</span>
                                    </label>
                                </div>
                                <div className='max-lg:col-span-2'>
                                    <label htmlFor="phoneNumber" className='form-label px-4 py-2'>
                                        <input className='form-input mt-2' type="text" id="phoneNumber" placeholder="Phone Number" />
                                        <span className="truncate">Phone Number</span>
                                    </label>
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="requirements" className='form-label !h-auto px-4 py-2'>
                                        <textarea rows={3} className='form-input mt-2' type="text" id="requirements" placeholder="Your Requirements" />
                                        <span className="truncate">Your Requirements</span>
                                    </label>
                                </div>
                            </div>
                            <button type='submit' className="max-lg:mx-auto w-[90%] mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden">
                                <div className='px-6 py-3 mr-20'>
                                    Submit
                                </div>
                                <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">↗</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className='mt-7 lg:mt-30 max-lg:flex-col flex justify-between items-center max-lg:gap-9'>
                    <div className='order-1 flex gap-10'>
                        <Link href={'#'} className='font-[500] text-[14px] leading-6 text-[#5C5F68]'>Terms of Service</Link>
                        <Link href={'#'} className='font-[500] text-[14px] leading-6 text-[#5C5F68]'>Privacy Policy</Link>
                    </div>
                    <p className='order-3 lg:order-2 font-[400] text-[14px] leading-5 text-[#5C5F68]'>All rights reserved © Alcove Realty</p>
                    <div className='order-2 lg:order-3 flex items-center gap-10'>
                        <Link href={"https://www.youtube.com/@NewKolkatasangam"} className='relative h-6 w-6 flex justify-center items-center'>
                            <Image src="/assets/icons/social-youtube.svg" height={16} width={22} className='object-cover' alt="YouTube" />
                        </Link>
                        <Link href={"https://www.facebook.com/NewKolkata"} className='relative h-6 w-6 flex justify-center items-center'>
                            <Image src="/assets/icons/social-facebook.svg" height={24} width={24} className='object-cover' alt="Facebook" />
                        </Link>
                        <Link href="https://twitter.com/new_kolkata" className='relative h-6 w-6 flex justify-center items-center'>
                            <Image src="/assets/icons/social-twitter.svg" height={19} width={24} className='object-cover' alt="Twitter" />
                        </Link>
                        <Link href={"https://www.instagram.com/new_kolkata/"} className='relative h-6 w-6 flex justify-center items-center'>
                            <Image src="/assets/icons/social-instagram.svg" height={22} width={22} className='object-cover' alt="Instagarm" />
                        </Link>
                    </div>
                </div>
            </div>
            <Image src={"/assets/icons/footerwaves.svg"} height={83} width={990} className='bottom-0 absolute !w-[100%] object-cover' alt="waves" />
            <Link href={"http://wa.me/918017012374"} className='block lg:hidden fixed bottom-5 right-5 p-4 z-999 rounded-4xl whatsapp-image'>
                <Image src={"/assets/icons/messaging-whatsapp.svg"} height={24} width={24} className='h-[24px] w-[24px] object-cover' alt="waves" />
            </Link>
        </div>
    )
}
