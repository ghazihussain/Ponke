"use client";

import { useEffect, useState } from "react";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={` ${
        isVisible
          ? "bg-p-yellow border-b-2 md:py-3 py-1 border-b-black shadow-xl px-3"
          : "bg-transparent md:py-5 py-5"
      } fixed left-0 right-0 top-0 z-[200] transition-all ease-in-out md:px-14 px-5`}
    >
      <div className="flex justify-between items-center relative z-20 max-w-[2000px] mx-auto">
        <a href="#">
          <div
            className={`${
              isVisible
                ? "md:w-[160px] md:h-12 w-[140px]"
                : "md:w-[259px] md:h-20"
            } relative  z-20 md:ml-[-20px] ml-[-5px] transition-all ease-in-out  w-[140px] h-14`}
          >
            <img
              alt="logo"
              fetchpriority="high"
              decoding="async"
              data-nimg="fill"
              classNameName="object-contain"
              src="/images/logo-nav.svg"
            />
          </div>
        </a>
        <div
          className={` ${
            isVisible ? "md:text-[20px]" : "md:text-[22px]"
          } flex gap-8 font-luckiest-guy-regular mb-[-4px] text-[16px]`}
        >
          <a href="/integrations">
            <div className="bg-p-skin md:border-[3px] border-2 border-black md:hover:scale-105 md:px-4 md:py-2 py-1 px-3 flex items-center gap-1 transition-all">
              <div className="mb-[-6px] flex">
                <span className="">INTEGRATIONS</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-arrow-right md:block hidden rotate-[-40deg] mt-[-1px] mr-[-4px]"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-arrow-right md:hidden rotate-[-40deg]"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
