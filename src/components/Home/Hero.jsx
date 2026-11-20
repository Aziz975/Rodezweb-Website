import React from "react";

const Hero = () => {
  const BANNER_IMAGE = "ggg";

  const SIDE_SPACE = "px-5 sm:px-8 lg:px-[7.5%]";
  const WRAP = "mx-auto max-w-[1700px]";

  return (
    <section className="relative w-full overflow-hidden bg-[#1c1c1c] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9]">

      {/* Banner Image */}
      <div className="relative h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[595px]">

        {BANNER_IMAGE && (
          <img
            src={images/image3.png}
            alt="Digital marketing banner"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100d20]/40 via-transparent to-transparent" />

        {/* Bottom Text */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden pb-5 sm:pb-7 lg:pb-5">
          <div className={`${SIDE_SPACE} ${WRAP}`}>
            <div className="w-full overflow-visible">
              <h1
                className="whitespace-nowrap font-semibold leading-[0.95] tracking-[-0.045em]"
                style={{
                  fontSize: "clamp(2.8rem, 7.2vw, 6.8rem)",
                }}
              >
                Your Business Lives Online
                <span className="mx-3 font-light text-white/80 sm:mx-5">
                  ◦
                </span>
                Because first impressions matter.
              </h1>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};




const Philosophy = () => {
  return (
    <section className="bg-[#1c1c1c] px-5 pb-24 pt-28 text-white sm:px-8 lg:px-12 lg:pt-40">

      <div className="mx-auto max-w-[1120px]">

        <p className="mb-5 text-[10px] font-bold uppercase tracking-wider">
          <span className="text-[#F45132]">■</span> Our Approach
        </p>

        <h2 className="max-w-[1000px] text-3xl font-bold leading-[1.25] tracking-tight sm:text-4xl lg:text-[48px]">
          Every great brand begins with a clear{" "}
          <span className="inline-block bg-[#F45132] px-3 py-1">
            vision
          </span>{" "}
          and the{" "}
          <span className="inline-block bg-[#F45132] px-3 py-1">
            courage
          </span>{" "}
          to bring it to life.
        </h2>

        {/* Image Gallery */}
        <div className="mt-10 grid min-h-[300px] grid-cols-1 gap-2 overflow-hidden rounded-md md:grid-cols-12">

          {/* Text Card */}
          <div className="flex flex-col justify-center bg-[#242424] p-7 md:col-span-4">
            <h3 className="text-lg font-bold">
              How We Think
            </h3>

            <p className="mt-4 text-xs leading-relaxed text-gray-400">
              We focus on solving business challenges, not just delivering
              projects. Every decision is guided by data, user behavior,
              and long-term objectives.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Research", "Analytics", "Planning"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-black"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="#process"
              className="mt-6 w-fit rounded-sm bg-[#F45132] px-5 py-3 text-xs font-semibold transition hover:bg-white hover:text-black"
            >
              Discover Our Process
            </a>
          </div>

          {/* Main Image */}
          <div className="min-h-[280px] overflow-hidden bg-[#d9dedb] md:col-span-4">
            <img
              src="images/redhelmet.webp"
              alt="Our workspace"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>

          {/* Secondary Image */}
          <div className="min-h-[180px] overflow-hidden bg-[#e8e8e8] md:col-span-2">
            <img
              src="images/redhelmet.webp"
              alt="Team collaboration"
              className="h-full min-h-[180px] w-full object-cover"
            />
          </div>

          {/* Third Image */}
          <div className="min-h-[180px] overflow-hidden bg-[#c8c8c8] md:col-span-2">
            <img
              src="images/redhelmet.webp"
              alt="Creative process"
              className="h-full min-h-[180px] w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};


const Solutions = () => {
  return (
    <section className="bg-[#101010] px-5 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-2 md:items-center">

        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-wider">
            <span className="text-[#F45132]">■</span> Our Services
          </p>

          <h2 className="max-w-[550px] text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[58px]">
            Digital Solutions
            <br />
            That Drive
            <br />
            Business Growth
          </h2>
        </div>

        <div>
          <p className="max-w-[490px] text-sm leading-relaxed text-gray-300">
            From building high-performing websites to executing data-driven
            marketing campaigns, we help businesses establish a stronger
            online presence, attract more customers, and achieve sustainable
            growth.
          </p>
        </div>

      </div>
    </section>
  );
};

const App = () => (
  <>
    <Hero />
    <Philosophy />
    <Solutions />
  </>
);

export default App;
