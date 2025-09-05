"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ScheduleVisitModal from "./ScheduleVisitModal";

const headerClass = {
  "/": "home-page-header",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeClass, setActiveClass] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleScheduleVisit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
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

  // Determine which logo to use
  const getLogoSource = () => {
    // If it's the home page and not scrolled, use regular logo
    if (pathname === "/" && !isScrolled) {
      return "/assets/logo.svg";
    }
    // For all other cases (scrolled home page or other pages), use logo-l.svg
    return "/assets/logo-l.svg";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        } bg-white ${activeClass} ${
          activeClass &&
          isScrolled &&
          "!bg-white !backdrop-blur-sm has-scrolled"
        }`}
      >
        <div className="container mx-auto py-4 md:grid md:grid-cols-3 md:items-center flex justify-between items-center max-md:px-5 max-md:py-2 max-md:gap-3">
          <div className="hidden md:flex items-center justify-start gap-5">
            <Link
              href="/why-alcove"
              alt="Why Alcove"
              className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
            >
              Why Alcove
            </Link>
            <Link
              href="/master-plan"
              alt="Master Plan"
              className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
            >
              Master Plans
            </Link>
            <Link
              href="/amenities"
              alt="Amenities"
              className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
            >
              Amenities
            </Link>
            <Link
              href="/location"
              alt="Location"
              className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
            >
              Location
            </Link>
            <Link
              href="/life-@-alcove"
              alt="Life @ Alcove"
              className="font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
            >
              Life @Alcove
            </Link>
          </div>

          <div className="md:h-[48px] md:w-[260px] w-[141px] h-[26px] relative max-md:mr-auto md:mx-auto md:flex md:justify-center md:items-center">
            <Link href="/" alt="home">
              <Image
                className="logo-image"
                src={getLogoSource()}
                alt="logo"
                height={48}
                width={260}
                priority
                loading="eager"
              />
            </Link>
          </div>

          <div className="flex items-center gap-6 md:justify-end">
            <Link
              href="/triveni"
              alt="Triveni"
              className="max-md:hidden font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
            >
              Triveni Omniplex
            </Link>
            <Link
              href="/blogs"
              alt="Blogs"
              className="max-md:hidden font-satoshi font-medium text-[14px] leading-[19px] text-[#22252E] hover:text-[#de7f4a] transition-colors link-item "
            >
              Blogs
            </Link>
            <div className="flex items-center gap-3 md:justify-end">
            <button
              id="header-schedule-visit"
              onClick={handleScheduleVisit}
              className="h-[40px] w-[100px] md:h-[48px] md:w-[123px] border-1 border-b-4 hover:bg-white transition-all duration-300 cursor-pointer group/header-btn relative rounded-md action-button flex items-center justify-center"
            >
              <p className="font-satoshi font-bold leading-6 text-[12px] md:text-[14px] md:leading-[19px] text-[#22252E] group-hover/header-btn:!text-[#010b22]">
                Schedule Visit
              </p>
            </button>
            <Link href={"tel:+918101881018"} className="h-[24px] w-[24px] relative cursor-pointer">
            <Image
                src="/assets/phone.svg"
                  alt="logo"
                  height={24}
                  width={24}
                  priority
                  loading="eager"
                  className="logo-image"
              />
            </Link>
          </div>
          </div>

          <button id="mobile-menu-toggle" className="md:hidden text-[#22252E]" onClick={toggleDrawer}>
            <Image
              src="/assets/icons/menu.svg"
              height={24}
              width={24}
              alt="menu"
              className="invert-100 menu-button"
              loading="lazy"
            />
          </button>
        </div>
      </header>
      {/*Drawer */}
      <div
        className={`block md:hidden !overflow-hidden z-9999 fixed top-0 left-0 w-[100vw] h-[100vh] bg-white shadow-lg
                transition-transform transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="w-[141px] h-[26px] relative">
            <Link href="/" alt="home" onClick={toggleDrawer}>
              <Image
                src="/assets/logo-l.svg"
                alt="Logo"
                height={26}
                width={141}
                className="object-contain"
                priority
                loading="eager"
              />
            </Link>
          </div>
          <button
            id="mobile-menu-close"
            onClick={toggleDrawer}
            className="text-gray-600"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/why-alcove"
                alt="Why Alcove"
                className="text-gray-800 hover:text-blue-500"
                onClick={toggleDrawer}
              >
                Why Alcove
              </Link>
            </li>
            <li>
              <Link
                href="/master-plan"
                alt="Master Plan"
                className="text-gray-800 hover:text-blue-500"
                onClick={toggleDrawer}
              >
                Master Plans
              </Link>
            </li>
            <li>
              <Link
                href="/amenities"
                alt="Amenities"
                className="text-gray-800 hover:text-blue-500"
                onClick={toggleDrawer}
              >
                Amenities
              </Link>
            </li>
            <li>
              <Link
                href="/location"
                alt="Location"
                className="text-gray-800 hover:text-blue-500"
                onClick={toggleDrawer}
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                href="/life-@-alcove"
                alt="Life @Alcove"
                className="text-gray-800 hover:text-blue-500"
                onClick={toggleDrawer}
              >
                Life @Alcove
              </Link>
            </li>
            <li>
              <Link href="/triveni" alt="Triveni" className="text-gray-800 hover:text-blue-500
              onClick={toggleDrawer}">
                Triveni Omniplex
              </Link>
            </li>
            <li>
              <Link href="/blogs" alt="Blogs" className="text-gray-800 hover:text-blue-500
              onClick={toggleDrawer}">
                Blogs
              </Link>
            </li>
            <li>
              <button
                id="mobile-schedule-visit"
                onClick={handleScheduleVisit}
                className="text-gray-800 hover:text-blue-500"
              >
                Schedule Visit
              </button>
            </li>
          </ul>
        </div>
      </div>

      <ScheduleVisitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
