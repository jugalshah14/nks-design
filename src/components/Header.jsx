"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
        <div className="container mx-auto py-4 md:grid md:grid-cols-3 md:items-center flex justify-between items-center max-md:px-5 max-md:py-2 max-md:gap-7">
          <div className="hidden md:flex items-center space-x-8 justify-start">
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/why-alcove"
                className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
              >
                Why Alcove
              </Link>
              <Link
                href="/master-plan"
                className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
              >
                Master Plans
              </Link>
              <Link
                href="/amenities"
                className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
              >
                Amenities
              </Link>
              <Link
                href="/Location"
                className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
              >
                Location
              </Link>
              <Link
                href="/life-@-alcove"
                className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
              >
                Life @Alcove
              </Link>
            </nav>
          </div>

          <div className="w-[95px] h-[44px] md:h-[75px] md:w-[161px] relative max-md:mr-auto md:mx-auto md:flex md:justify-center md:items-center">
            <Link href="/">
              <Image
                className="invert-100 logo-image"
                src="/assets/logo.svg"
                alt="Next.js logo"
                fill
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-6 md:justify-end">
            <Link
              href="/blogs"
              className="max-md:hidden font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
            >
              Blogs
            </Link>
            <Link
              href="/"
              className="max-md:hidden font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
            >
              Schedule Visit
            </Link>{" "}
            <div className="h-[48px] w-[100px] border-1 border-b-4 hover:bg-white transition-all duration-300 cursor-pointer group/header-btn relative rounded-sm action-button">
              <p className="font-satoshi font-bold leading-6 text-[12px] md:text-[14px] md:leading-[19px] text-[#22252E] group-hover/header-btn:!text-[#010b22] absolute top-[13px] left-[22px]">
                Call Now
              </p>
            </div>
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
              <Link
                href="/why-alcove"
                className="text-gray-800 hover:text-blue-500"
              >
                Why Alcove
              </Link>
            </li>
            <li>
              <Link
                href="/master-plan"
                className="text-gray-800 hover:text-blue-500"
              >
                Master Plans
              </Link>
            </li>
            <li>
              <Link
                href="/amenities"
                className="text-gray-800 hover:text-blue-500"
              >
                Amenities
              </Link>
            </li>
            <li>
              <Link
                href="/Location"
                className="text-gray-800 hover:text-blue-500"
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                href="/life-@-alcove"
                className="text-gray-800 hover:text-blue-500"
              >
                Life @Alcove
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-gray-800 hover:text-blue-500">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-blue-500">
                Schedule Visit
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
