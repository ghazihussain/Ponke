"use client";
import { useInView } from "react-intersection-observer";

const HowToBuy = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const { ref: pRef, inView: pInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div
      className="border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5 bg-p-dark"
      id="buy"
    >
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-20 ">
        <div ref={h1Ref} className={`appear ${h1InView ? "animate" : ""}`}>
          <div className="md:text-[100px] text-[52px] text-center ">
            <h1 className="text-p-yellow md:leading-normal font-luckiest-guy-regular leading-[60px]">
              HOW TO BUY
            </h1>
          </div>
        </div>
        <div ref={pRef} className={`appear ${pInView ? "animate" : ""}`}>
          <div className="text-center mb-5 md:text-3xl font-bold tracking-wider text-xl max-w-[600px] mx-auto text-white">
            <p className="md:leading-[45px]">
              Follow these easy steps to become a Ponke holder.
            </p>
          </div>
        </div>
        <div className="md:flex md:px-12 xl:px-0">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:mt-20 mt-16 text-white px-3 md:px-0 md:w-1/2">
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white font-luckiest-guy-regular md:text-3xl text-2xl mb-2">
                <strong className="text-p-yellow">1.</strong> Create a wallet
                with Phantom
              </div>
              <p className="text-white/80 cursor-pointer font-bold tracking-wider md:text-base text-sm">
                Visit{" "}
                <a
                  className="underline text-p-red"
                  href="https://phantom.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  phantom.app
                </a>{" "}
                and follow the simple steps to create a new account with the
                Phantom app or browser extension.
              </p>
            </div>
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white font-luckiest-guy-regular md:text-3xl text-2xl mb-2">
                <strong className="text-p-yellow">2.</strong> Get some $SOL
              </div>
              <p className="text-white/80 md:text-base font-bold tracking-wider text-sm">
                Tap the button in the app to purchase Solana, or deposit $SOL to
                your Phantom wallet from the crypto exchange of your choice.
              </p>
            </div>
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white font-luckiest-guy-regular md:text-3xl text-2xl mb-2">
                <strong className="text-p-yellow">3.</strong> Swap $SOL for
                $PONKE
              </div>
              <p className="text-white/80 md:text-base font-bold tracking-wider text-sm">
                Tap the icon in your Phantom wallet and paste the $PONKE token
                address. Swap your $SOL for $PONKE.
              </p>
            </div>
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white font-luckiest-guy-regular md:text-3xl text-2xl mb-2">
                <strong className="text-p-yellow">4.</strong> You are now a
                $PONKE holder!
              </div>
              <p className="text-white/80 md:text-base font-bold tracking-wider text-sm">
                Welcome to the #Ponke Army!
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-5 mb-[-50px] md:w-1/2">
            <img
              src="/images/teacher.png"
              className="lg:w-[500px] w-[240px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
