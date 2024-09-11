"use client";

import { useInView } from "react-intersection-observer";

const Tokenomics = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: pRef, inView: pInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: blinkerRef, inView: blinkerInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <div className="bg-p-dark border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5">
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-20">
        <div ref={h1Ref} className={`appear ${h1InView ? "animate" : ""}`}>
          <div className="md:text-[100px] text-[52px] text-center">
            <h1 className="text-p-yellow md:leading-normal leading-[60px] font-luckiest-guy-regular">
              TOKENOMICS
            </h1>
          </div>
          <div className="text-center mb-5 md:text-3xl tracking-wider font-bold text-lg max-w-[340px] md:mt-0 mt-2 md:max-w-[700px] mx-auto text-white">
            <p ref={pRef} className={`appear ${pInView ? "animate" : " "}`}>
              PONKE made 555 Million tokens but he&apos;s a{" "}
              <strong className="text-p-red">greedy son of a bitch</strong> and
              wants to keep them all to himself.
            </p>
          </div>
        </div>
        <div
          ref={imageRef}
          className={`appear ${imageInView ? "animate" : ""}`}
        >
          <div className="md:p-20 p-5 pt-10 w-full flex md:flex-row flex-col gap-10 items-center">
            <div className="relative md:w-1/2   overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 bg-transparent blink-bg right-0 z-10"></div>
              <img
                className="object-contain border-4 border-p-yellow"
                src="/images/trading.jpg"
                alt="trading"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="relative md:w-[400px] w-[200px] h-[200px] md:top-[-70px] md:block hidden">
                <img
                  alt="trading"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-contain strobe absolute h-full w-ful inset-0 text-transparent"
                  sizes="100vw"
                  src="/images/atwork-white.webp"
                />
              </div>
              <div>
                <div className="flex flex-col md:gap-5 gap-3 relative z-20">
                  <div
                    ref={card1Ref}
                    className={`appear ${card1InView ? "animate" : ""}`}
                  >
                    <div className="flex-1 f p-5 border-4 border-p-yellow bg-p-yellow text-center">
                      <div className="md:text-4xl text-xl font-luckiest-guy-regular md:mb-[-14px] mb-[-10px]">
                        TOTAL SUPPLY
                      </div>
                      <div className="md:text-xl md:mt-3 tracking-wider font-bold mt-2 break-all">
                        555,555,555 $PONKE
                      </div>
                    </div>
                  </div>
                  <div
                    ref={card2Ref}
                    className={`appear ${card2InView ? "animate" : ""}`}
                  >
                    <div className="flex-1 p-5 border-4 border-p-yellow bg-p-yellow text-center">
                      <div className="md:text-4xl text-xl font-luckiest-guy-regular md:mb-[-14px] mb-[-10px]">
                        TOKEN ADDRESS
                      </div>
                      <div className="md:text-lg text-xs md:mt-3 tracking-wider font-bold mt-2 break-all">
                        5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:absolute md:bottom-[-60px] md:mt-0 mt-10 md:left-[200px] z-10">
              <a
                href="https://jup.ag/swap/SOL-PONKE"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="font-luckiest-guy-regular md:text-3xl text-2xl border-4 rounded-0 border-black rotate-[5deg] shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all animate-bounce-fast bg-p-red text-white opacity-100 md:hover:scale-105">
                  BUY PONKE HERE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
