"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { a } from "react-router-dom"; // Remove useNavigat/e

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickScroll = (idName) => {
    console.log(idName);
    const element = document.getElementById(idName);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="  w-full z-40 top-0 left-0 lg:px-12  pt-5 ">
      <div className="flex flex-wrap items-center justify-between lg:px-8 sm:px-4 px-5  py-4">
        <a href="/">
          <p className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8  w-10"
              viewBox="0 0 59 49"
              fill="none"
            >
              <path
                d="M47.6112 1.06079H4L26.6097 15.9122M47.6112 1.06079L55.6524 16.9538L41.9352 26.596M47.6112 1.06079L26.6097 15.9122M11.8519 47.8885L4 31.9008L17.3777 22.4407M11.8519 47.8885H55.6524L33.0426 32.8469M11.8519 47.8885L33.0426 32.8469M33.0426 32.8469L17.3777 22.4407M33.0426 32.8469L41.9352 26.596M26.6097 15.9122L17.3777 22.4407M26.6097 15.9122L41.9352 26.596"
                stroke="#D9D9D9"
                strokeWidth="2" // Corrected attribute name
              />
            </svg>
            <span className="self-center font-Montserrat text-2xl font-semibold whitespace-nowrap dark:text-white">
              Krishilantix
            </span>
          </p>
        </a>
        <div className="flex md:order-2 justify-center align-middle items-center ">
          {/* after launch recomment */}
          <a to={"/login"} className="flex justify-center align-middle">
            <button
              type="button"
              className="text-white h-6 font-Montserrat hover:bg-[#E0DDFF] hover:text-black transition-all duration-300 font-medium rounded-full lg:text-base sm:text-sm text-xs lg:px-6 px-5 lg:h-12 lg:py-1 py-0 border border-[#92929280] text-center mr-3 md:mr-0 dark:bg-[#92929280] "
            >
              Log-In/Sign-Up
            </button>
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  "
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round" // Corrected attribute name
                strokeLinejoin="round" // Corrected attribute name
                strokeWidth="2" // Corrected attribute name
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between gap-10 w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          {/* <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label> */}

          <ul className="flex flex-col  p-4 md:p-0 mt-4 text-base font-normal rounded-lg  md:flex-row md:space-x-8 md:mt-0 font-Montserrat ">
            <li onClick={() => handleClickScroll("plan-section")}>
              <p className="block py-2 pl-3 pr-4 text-white rounded  lg:hover:scale-125 cursor-pointer transition-all duration-300  md:p-0 ">
                Home
              </p>
            </li>
            <li onClick={() => handleClickScroll("service-section")}>
              <p className="block py-2 pl-3 pr-4 text-white rounded lg:hover:scale-125 cursor-pointer transition-all duration-300  md:p-0 ">
                Features
              </p>
            </li>
            {/* <li onClick={() => handleClickScroll("faq-section")}>
              <p className="block py-2 pl-3 pr-4  rounded md:p-0 text-white lg:hover:scale-125 cursor-pointer transition-all duration-300  ">

              </p>
            </li> */}

            <li onClick={() => handleClickScroll("contact-section")}>
              <p
                className="block py-2 pl-3 pr-4 text-white md:p-0 lg:hover:scale-125 cursor-pointer  border-white transition-all duration-300 "
                aria-current="page"
              >
                Contact
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
