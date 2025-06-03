"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'

const headerClass = {
  "/": "home-page-header",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeClass, setActiveClass] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    setActiveClass(headerClass[pathname] || "");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        } bg-white ${activeClass} ${
          activeClass && isScrolled && "!bg-[#010b22]"
        }`}
      >
        <div className="container mx-auto py-4 flex justify-between items-center max-md:px-5 max-md:py-2 max-md:gap-7">
          <div className="hidden md:flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="font-[Satoshi] font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
              >
                Home
              </Link>
              <Link
                href="#"
                className="font-[Satoshi] font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
              >
                About us
              </Link>
              <Link
                href="#"
                className="font-[Satoshi] font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
              >
                Plans
              </Link>
              <Link
                href="#"
                className="font-[Satoshi] font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
              >
                Blogs
              </Link>
            </nav>
          </div>

          <div className="w-[95px] h-[44px] md:h-[75px] md:w-[161px] relative max-md:mr-auto">
            <Image
              className="invert-100 logo-image"
              src="/assets/logo.svg"
              alt="Next.js logo"
              fill
              priority
            />
          </div>

          <div className="block">
            <button className="md:px-9 px-4 md:py-3 py-2 border-1 border-b-4 hover:bg-white transition-all duration-300 cursor-pointer group/header-btn relative rounded-md action-button">
              <p className="font-[Satoshi] font-bold leading-6 text-[12px] md:text-[14px] md:leading-[19px] text-[#22252E] group-hover/header-btn:!text-[#010b22]">
                Schedule a Visit
              </p>
            </button>
          </div>

          <button className="md:hidden text-[#22252E]" onClick={toggleDrawer}>
            <Image
              src="/assets/icons/menu.svg"
              height={24}
              width={24}
              alt="menu"
              className="invert-100 menu-button"
            />
          </button>
        </div>
      </header>
      {/*Drawer */}
      <div
        className={`block md:hidden !overflow-hidden z-99999 fixed top-0 left-0 w-[100vw] h-[100vh] bg-white shadow-lg
                transition-transform transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
      >
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-gray-800 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-blue-500">
                Plans
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-blue-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={toggleDrawer}
          className="absolute top-4 right-4 text-gray-600"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Header;