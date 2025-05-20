"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#010b22] shadow-lg' : 'bg-transparent'}`}>
            <div className="container max-w-7xl mx-auto py-4 flex justify-between items-center max-md:px-5 max-md:py-2 max-md:gap-7">
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="font-[Satoshi] font-medium text-[14px] leading-[19px] text-white hover:text-[#de7f4a] transition-colors">Home</a>
                        <a href="#" className="font-[Satoshi] font-medium text-[14px] leading-[19px] text-white hover:text-[#de7f4a] transition-colors">About us</a>
                        <a href="#" className="font-[Satoshi] font-medium text-[14px] leading-[19px] text-white hover:text-[#de7f4a] transition-colors">Plans</a>
                        <a href="#" className="font-[Satoshi] font-medium text-[14px] leading-[19px] text-white hover:text-[#de7f4a] transition-colors">Blogs</a>
                    </nav>
                </div>

                <div className="w-[95px] h-[44px] md:h-[75px] md:w-[161px] relative max-md:mr-auto">
                    <Image
                        className=""
                        src="/assets/logo.svg"
                        alt="Next.js logo"
                        fill
                        priority
                    />
                </div>

                <div className="block">
                    <div className="h-[48px] w-[168px] border-1 border-b-4  border-white relative rounded-xl">
                        <p className="font-[Satoshi] font-bold leading-6 text-[12px] md:text-[14px] md:leading-[19px] text-white absolute top-[13px] left-[32px]">Schedule a Visit</p>
                    </div>
                </div>

                <button className="md:hidden text-white">
                    <Image src="/assets/icons/menu.svg" height={24} width={24} alt="menu" />
                </button>
            </div>
        </header>
    );
};

export default Header;