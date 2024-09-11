import React from "react";

const Banner = () => {
  return (
    <div className="bg-yellow relative overflow-hidden">
      <div className="relative p-5 md:px-14 min-h-screen max-w-[2000px] mx-auto pt-[100px]">
        <div className="relative flex justify-center items-center flex-col md:pt-0 pt-[10px] z-10">
          <div className="relative md:size-[58vh] size-[50vh] z-20">
            <div className="absolute size-[200vh] left-1/2 translate-x-[-50%] top-1/2 translate-y-[-36%]">
              <img
                alt="rays"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                className=" position: absolute height: 100% width: 100% inset: 0px color: transparent"
                src="/images/rays.svg"
              />
            </div>
            <img
              alt="hero"
              fetchpriority="high"
              decoding="async"
              data-nimg="fill"
              className="object-contain absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent"
              src="/images/logo.svg"
            />
          </div>
          <div className="relative font-bold tracking-wider z-20 flex flex-col items-center">
            <div className="font-mt md:text-[27px] text-[18px] mt-5">
              The Golden Child of Solana
            </div>
            <a href="#exchanges" className="flex justify-center w-full">
              <button className="font-luckiest-guy-regular font-medium text-white md:text-3xl text-2xl bg-p-red border-4 rounded-0 border-black shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all md:mt-10 mt-10 md:rotate-[-4deg] rotate-[-2deg] w-full md:w-auto opacity-100 md:hover:scale-105">
                Explore
              </button>
            </a>
          </div>
        </div>
        <div className="md:absolute relative flex mt-14 md:mt-0 justify-center md:justify-between items-center md:bottom-14 md:left-14 md:right-14 z-[20]">
          <div className="flex gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/PONKESOL"
            >
              <div className="relative md:size-11 size-10 md:hover:scale-105 rotate-[5deg]">
                <img
                  alt="head"
                  fetchpriority="high"
                  decoding="async"
                  data-nimg="fill"
                  className="bg-black p-[7px]"
                  sizes="100vw"
                  src="/images/x-logo.png"
                />
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/ponkesol"
            >
              <div className="relative md:size-15 size-10  md:hover:scale-105 rotate-[-5deg]">
                <img
                  alt="head"
                  data-nimg="fill"
                  sizes="100vw"
                  src="\images\telegram.webp"
                  className="bg-black position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                />
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/ponkesolana/"
            >
              <div className="relative md:size-11 size-10 md:hover:scale-105 rotate-[5deg]">
                <img
                  alt="head"
                  fetchpriority="high"
                  decoding="async"
                  data-nimg="fill"
                  className="bg-black p-[10px]"
                  src="/images/instagram.svg"
                />
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.tiktok.com/@ponkesolana"
            >
              <div className="relative md:size-11 size-10 md:hover:scale-105 rotate-[-5deg]">
                <img
                  alt="head"
                  fetchpriority="high"
                  decoding="async"
                  data-nimg="fill"
                  className="bg-black md:p-[9px] p-[8px]"
                  src="/images/tiktok.svg"
                />
              </div>
            </a>
          </div>
          <a href="/helmet">
            <div className="relative md:block font-bold tracking-wider hidden md:hover:scale-105 cursor-pointer transition-all">
              <div className="absolute size-[90px] right-[-15px] top-[-35px]">
                <img
                  alt="head"
                  fetchpriority="high"
                  decoding="async"
                  data-nimg="fill"
                  className="wiggle"
                  src="/images/helmet.svg"
                />
              </div>
              <div className="bg-p-green text-white px-4 py-3 text-[18px] border-4 border-black">
                Put On a Helmet
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
