import React from "react";
import heroVideo from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="w-full h-full absolute object-cover -z-10"
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white text-center px-4">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          <span className="text-[var(--primary-blue)]">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div className="space-x-4">
          <button>Use Defi</button>
          <button>Use Defi</button>
        </div>
      </div>
        <div>
            <p className="text-2xl font-bold text-center text-white">
                Total Volume Secured: $42,104,783,662.47
            </p>
        </div>
    </div>
  );
};

export default Hero;
