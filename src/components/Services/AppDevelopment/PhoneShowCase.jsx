
import React from "react";

const PhoneShowcase = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#1c1c1c] px-4 py-16 transition-colors duration-300 light:bg-[#fafafa]">
      <div className="relative flex h-[clamp(420px,45vw,600px)] w-full max-w-[700px] items-start justify-center">

        {/* Left phone */}
        <div className="absolute left-[2%] top-0 w-[27%] -rotate-[8deg] origin-bottom">
          <img
            src="/images/Left-Rodez-Phone.png"
            alt="App development phone mockup left"
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Center phone */}
        <div className="absolute left-1/2 top-[24%] z-10 w-[40%] -translate-x-1/2">
          <img
            src="/images/Mid-Rodez-Phone.png"
            alt="Building the future phone mockup center"
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right phone */}
        <div className="absolute right-[2%] top-[-1%] w-[29%] rotate-[6deg] origin-bottom">
          <img
            src="/images/Right-Rodez-Phone.png"
            alt="App development phone mockup right"
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default PhoneShowcase;