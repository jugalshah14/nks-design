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
            <div className="container max-w-7xl mx-auto py-4 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="font-satoshi font-medium text-[14px] leading-[19px] text-white hover:text-[#de7f4a] transition-colors">Home</a>
                        <a href="#" className="font-satoshi font-medium text-[14px] leading-[19px] text-white hover:text-[#de7f4a] transition-colors">About us</a>
                        <a href="#" className="font-satoshi font-medium text-[14px] leading-[19px] text-white hover:text-[#de7f4a] transition-colors">Plans</a>
                        <a href="#" className="font-satoshi font-medium text-[14px] leading-[19px] text-white hover:text-[#de7f4a] transition-colors">Blogs</a>
                    </nav>
                </div>

                <div className="h-[75px] w-[161px] relative">
                    <div className="absolute top-0 left-0">
                        <Image
                            className="dark:invert"
                            src="/assets/logo.svg"
                            alt="Next.js logo"
                            height={75}
                            width={161}
                            priority
                        />
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="h-[48px] w-[168px] border-1 border-b-4  border-white relative rounded-xl">
                        <p className="font-satoshi font-bold text-[14px] leading-[19px] text-white absolute top-[13px] left-[32px]">Schedule a Visit</p>
                    </div>
                </div>

                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;