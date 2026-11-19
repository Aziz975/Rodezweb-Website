import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#1c1c1c] text-white">
      <div className="mx-auto max-w-[1120px] px-5 pt-16 sm:px-8 lg:px-12 lg:pt-24">

        {/* Hero Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-[520px]">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider">
              <span className="text-[#F45132]">■</span> Full Service Digital Agency
            </p>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[58px]">
              Your Growth Starts
              <br />
              With Better Digital
              <br />
              Marketing
            </h1>

            <p className="mt-5 max-w-[440px] text-xs leading-relaxed text-gray-300 sm:text-sm">
              From SEO and paid advertising to web development and branding,
              we help businesses attract more customers, generate qualified
              leads, and scale faster in today's competitive digital landscape.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F45132] px-7 py-3 text-xs font-semibold transition hover:bg-white hover:text-black"
          >
            + Get a Free Consultation
          </a>
        </div>

        {/* Statistics Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <div className="flex min-h-[115px] items-center gap-4 rounded-md bg-white p-5 text-black">
              {/* Logo image */}
              <img
                src="/images/rodezlogo.png"
                alt="Rodez logo"
                className="h-10 w-auto shrink-0 object-contain"
              />

              {/* Team image */}
              <div className="h-14 w-24 shrink-0 overflow-hidden rounded-full bg-gray-200">
                <img
                  src="images/redhelmet.webp"
                  alt="Our team"
                  className="h-full w-full "
                />
              </div>

              <div>
                <h3 className="text-sm font-bold">
                  200+ Businesses Empowered
                </h3>
                <p className="mt-2 text-[10px] leading-relaxed text-gray-500">
                  Helping brands achieve measurable growth and digital success.
                </p>
              </div>
            </div>

            <div className="flex min-h-[280px] flex-col justify-between rounded-md border border-white/80 p-5">
              <div>
                <span className="text-4xl font-bold text-[#F45132]">“</span>
                <p className="max-w-[250px] text-sm font-semibold leading-relaxed">
                  Every strategy is backed by insights, analytics, and
                  measurable performance.
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">92%</h2>
                <p className="text-[10px] text-gray-400">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-4">
            <div className="flex h-[280px] items-center justify-center overflow-hidden rounded-md bg-[#f5f5f5]">
              {/* Portrait image */}
              <img
                src="/images/redhelmet.webp"
                alt="Portrait"
                className="h-full w-full rounded-md object-cover"
              />
            </div>

            <div className="flex min-h-[65px] items-center justify-between rounded-md bg-[#F45132] px-5">
              <div>
                <h2 className="text-3xl font-bold">20+</h2>
                <p className="text-[10px]">Global Awards</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#F45132]">
                ★
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <div className="flex min-h-[280px] flex-col justify-between rounded-md border border-white/80 p-5">
              <p className="max-w-[250px] text-sm font-semibold leading-relaxed">
                We create{" "}
                <span className="text-[#F45132]">powerful digital experiences</span>{" "}
                through strategic marketing, creative design, and innovative
                technology that help businesses grow online.
              </p>

              <div>
                <h2 className="text-5xl font-bold">5K+</h2>
                <p className="text-[10px] text-gray-400">
                  Projects Delivered
                </p>
              </div>
            </div>

            <div className="flex min-h-[65px] items-center gap-4 rounded-md bg-white px-5 text-black">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0eb] text-[#F45132]">
                ●
              </span>
              <p className="flex-1 text-center text-xs font-medium">
                Available For Work
              </p>
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
