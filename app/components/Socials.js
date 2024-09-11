"use client";
import { useInView } from "react-intersection-observer";

const Socials = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div className="bg-p-yellow">
      <div className="min-h-[500px] md:pt-20 pt-12 mx-auto max-w-1500">
        <div ref={h1Ref} className={`appear ${h1InView ? "animate" : " "}`}>
          <div className="md:text-[120px] text-[50px] text-center">
            <h1 className="text-black font-luckiest-guy-regular">SOCIALS</h1>
            <div className="text-black md:text-3xl text-xl">
              Join the PONKE ARMY
            </div>
          </div>
        </div>
        <div className="flex md:gap-6 gap-3 justify-center md:pt-20 pt-10 z-[100] relative">
          <div className="relative md:size-16 w-12 h-12">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/PONKESOL"
            >
              <img
                alt="head"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                className="bg-black rotate-[-5deg] md:hover:scale-105 absolute h-full w-full inset-0 text-transparent p-2"
                sizes="100vw"
                src="/images/x-logo.png"
              />
            </a>
          </div>
          <div className="relative md:size-16 w-12 h-12 md:hover:scale-105">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/ponkesol"
            >
              <img
                alt="head"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                className="bg-black rotate-[5deg] absolute h-full w-full inset-0 text-transparent"
                sizes="100vw"
                src="/images/telegram.webp"
              />
            </a>
          </div>
          <div className="relative md:size-16 w-12 h-16 md:hover:scale-105">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/ponkesolana/"
            >
              <img
                alt="head"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                className="bg-black rotate-[-5deg] lg:p-[14px] p-3 absolute h-full w-full inset-0 text-transparent"
                src="/images/instagram.svg"
              />
            </a>
          </div>
          <div className="relative md:size-16 w-12 h-12 md:hover:scale-105">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.tiktok.com/@ponkesolana"
            >
              <img
                alt="head"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                className="bg-black rotate-[5deg] lg:p-3 p-[10px] absolute h-full w-full inset-0 text-transparent"
                src="/images/tiktok.svg"
              />
            </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-center items-center md:mt-[-140px] mt-20">
          <div>
            <div className="relative md:w-[700px] md:h-[700px] w-[250px] h-[250px]">
              <img
                alt="head"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-contain absolute h-full w-full inset-0 text-transparent"
                sizes="100vw"
                src="/images/ponke.gif"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end md:h-[300px] md:mt-36">
            <a
              href="https://jup.ag/swap/SOL-PONKE"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="font-luckiest-guy-regular text-white md:text-3xl text-2xl bg-p-red border-4 rounded-0 border-black rotate-[5deg] shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all strobe md:rotate-[-10deg] opacity-100 md:hover:scale-105">
                CLICK TO APE IN
              </button>
            </a>
            <div className="relative md:w-[300px] md:h-[90px] mt-10 z-20 md:block hidden">
              <img
                alt="logo"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                className="object-contain absolute h-full w-full inset-0 text-transparent"
                sizes="100vw"
                src="/images/logo-text-black.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
