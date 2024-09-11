"use client";
import { useInView } from "react-intersection-observer";

const Exchanges = () => {
  const inView = true;
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: pRef, inView: pInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images1Ref, inView: images1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images12Ref, inView: images12InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images13Ref, inView: images13InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images2Ref, inView: images2InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images22Ref, inView: images22InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images23Ref, inView: images23InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images3Ref, inView: images3InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images32Ref, inView: images32InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images33Ref, inView: images33InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images4Ref, inView: images4InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images42Ref, inView: images42InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: images43Ref, inView: images43InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: bottomTextRef, inView: bottomTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div
      className="border-b-4 bg-p-dark border-b-black md:pb-32 pb-20 md:px-0 px-2 relative z-[30] md:pt-0 pt-8"
      id="exchanges"
    >
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-14">
        <div className={`appear ${h1InView ? "animate" : ""}`}>
          <div className="md:text-[100px] text-[52px] text-center">
            <h1
              ref={h1Ref}
              className={`text-p-yellow font-luckiest-guy-regular md:leading-normal leading-[60px] appear ${
                h1InView ? "animate" : ""
              }`}
            >
              EXCHANGES
            </h1>
          </div>
        </div>
        <div className={`appear ${pInView ? "animate" : ""}`}>
          <div className="text-center mb-5 md:text-3xl text-lg md:max-w-[600px] max-w-[340px] mx-auto text-white">
            <p ref={pRef} className="md:leading-[45px]">
              Ponke is available for trading on major exchanges.
            </p>
          </div>
        </div>
        <div className="grid min-[900px]:grid-cols-3 grid-cols-2 max-w-[1200px] min-[1200px]:grid-cols-3 w-full mx-auto md:pt-20 pt-10 md:gap-5 gap-2 max-[1200px]:gap-2 px-5">
          <div
            ref={images1Ref}
            className={`appear d1 ${images1InView ? "animate" : ""}`}
          >
            <a
              href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/bybit.svg"
                    className="object-contain w-full h-full"
                    alt="Bybit"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images12Ref}
            className={`appear d2 ${images12InView ? "animate" : ""}`}
          >
            <a
              href="https://crypto.com/exchange/trade/PONKE_USD"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/cdc.svg"
                    className="object-contain w-full h-full"
                    alt="CDC"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images13Ref}
            className={`appear d3 ${images13InView ? "animate" : ""}`}
          >
            {" "}
            <a
              href="https://www.okx.com/web3/dex-swap#inputChain=501&amp;inputCurrency=11111111111111111111111111111111&amp;outputChain=501&amp;outputCurrency=5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/okx-dex.svg"
                    className="object-contain w-full h-full"
                    alt="OKX"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images2Ref}
            className={`appear d1 ${images2InView ? "animate" : ""}`}
          >
            <a
              href="https://www.gate.io/trade/PONKE_USDT"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/gate.png"
                    className="object-contain w-full h-full"
                    alt="Gate"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images22Ref}
            className={`appear d2 ${images22InView ? "animate" : ""}`}
          >
            {" "}
            <a
              href="https://www.htx.com/en-us/trade/ponke_usdt?type=spot"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/htx.svg"
                    className="object-contain w-full h-full"
                    alt="HTX"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images23Ref}
            className={`appear d3 ${images23InView ? "animate" : ""}`}
          >
            <a
              href="https://www.bitget.com/en-GB/spot/PONKEUSDT"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/bitget.svg"
                    className="object-contain w-full h-full"
                    alt="Bitget"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images3Ref}
            className={`appear d1 ${images3InView ? "animate" : ""}`}
          >
            <a
              href="https://x.woo.org/en/trade/PONKE_USDT"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/woox.webp"
                    className="object-contain w-full h-full"
                    alt="Woox"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images32Ref}
            className={`appear d2 ${images32InView ? "animate" : ""}`}
          >
            <a
              href="https://poloniex.com/trade/PONKE_USDT/?type=spot"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/poloniex.svg"
                    className="object-contain w-full h-full"
                    alt="Poloniex"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images33Ref}
            className={`appear d3 ${images33InView ? "animate" : ""}`}
          >
            <a
              href="https://www.bitmart.com/trade/en-US?symbol=PONKE_USDT&amp;layout=basic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/bitmart.svg"
                    className="object-contain w-full h-full"
                    alt="Bitmart"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images4Ref}
            className={`appear d1 ${images4InView ? "animate" : ""}`}
          >
            <a
              href="https://www.lbank.com/trade/ponke_usdt/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/lbank.svg"
                    className="object-contain w-full h-full"
                    alt="LBank"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images42Ref}
            className={`appear d2 ${images42InView ? "animate" : ""}`}
          >
            <a
              href="https://www.bitrue.com/trade/ponke_usdt?inviteCode=EWHZTGL"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/bitrue.png"
                    className="object-contain w-full h-full"
                    alt="Bitrue"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={images43Ref}
            className={`appear d3 ${images43InView ? "animate" : ""}`}
          >
            <a
              href="https://www.mexc.com/exchange/PONKE_USDT"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <img
                    src="/images/exchanges/mexc.svg"
                    className="object-contain w-full h-full"
                    alt="MEXC"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          ref={bottomTextRef}
          className={`appear ${bottomTextInView ? "animate" : ""}`}
        >
          <div className="text-center md:mt-24 mt-20 md:text-2xl text-xl mx-auto text-white md:max-w-[600px] max-w-[300px]">
            <p>More exchange listings are on the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
