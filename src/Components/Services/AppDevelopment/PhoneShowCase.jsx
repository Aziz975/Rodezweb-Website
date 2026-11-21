import React from "react";

const PhoneShowcase = () => {
  return (
    <section className="w-full min-h-screen bg-[#1c1c1c] flex items-center justify-center overflow-hidden px-4 py-16">
      <div className="relative flex items-start justify-center w-full max-w-[700px] h-[clamp(420px,45vw,600px)]">
        {/* Left phone */}
        <div className="absolute left-[2%] top-0 w-[27%] -rotate-[8deg] origin-bottom">
          <img
            src="/images/Left-Rodez-Phone.png"
            alt="App development phone mockup left"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Center phone */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[24%] w-[40%] z-10">
          <img
            src="/images/Mid-Rodez-Phone.png"
            alt="Building the future phone mockup center"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right phone */}
        <div className="absolute right-[2%] top-[-1%] w-[29%] rotate-[6deg] origin-bottom">
          <img
            src="/images/Right-Rodez-Phone.png"
            alt="App development phone mockup right"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PhoneShowcase;