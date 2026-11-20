import React, { useState } from "react";
import { ArrowRight, PieChart, User, Navigation } from "lucide-react";

/* Image sources left empty until you provide the assets */
const BANNER_IMG = ""; // stats banner background (blue/orange swirl)
const SEO_IMG = ""; // image shown inside the open accordion item

/* ---------- Shared sizing (same scale as DigitalMarketingCta / Faq / Process) ---------- */
const SIDE_SPACE = "px-5 sm:px-8 lg:px-[7.5%]"; // left & right space
const WRAP = "mx-auto max-w-[1700px]";

const headingStyle = {
  fontSize: "clamp(1.9rem, 3.6vw, 4.25rem)",
  letterSpacing: "-0.03em",
};
const bodyStyle = {
  fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
  lineHeight: 1.7,
  letterSpacing: "-0.02em",
};
const smallStyle = {
  fontSize: "clamp(0.8rem, 0.95vw, 1.1rem)",
  lineHeight: 1.6,
  letterSpacing: "-0.02em",
};
const cardTitleStyle = {
  fontSize: "clamp(0.95rem, 1.2vw, 1.45rem)",
  letterSpacing: "-0.02em",
};

/* Custom Google "G" icon (Lucide has no brand icons) */
const GoogleG = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.64 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.7 12 2.7 6.92 2.7 2.8 6.82 2.8 11.9S6.92 21.1 12 21.1c5.28 0 8.78-3.71 8.78-8.94 0-.6-.07-1.06-.15-1.06z" />
  </svg>
);

const stats = [
  { value: "+81%", label: "Customers Research Online Before Purchase" },
  { value: "+160", label: "Businesses Empowered" },
  { value: "99%", label: "Client Satisfaction Rate" },
];

const services = [
  {
    no: "01",
    title: "Search Engine Optimization (SEO)",
    text: "Increase visibility and attract customers actively searching for your services.",
  },
  {
    no: "02",
    title: "Social Media Marketing",
    text: "Build awareness, engagement, and meaningful customer relationships.",
  },
  {
    no: "03",
    title: "Paid Advertising",
    text: "Reach the right audience and accelerate business growth through targeted campaigns.",
  },
  {
    no: "04",
    title: "Content Marketing",
    text: "Create valuable content that educates, engages, and converts.",
  },
  {
    no: "05",
    title: "Marketing Strategy & Consulting",
    text: "A growth roadmap built around your business objectives.",
  },
];

const benefits = [
  {
    title: "Generate More Leads",
    text: "Reach people actively looking for your products or services.",
    Icon: PieChart,
    color: "text-[#5b6cff]",
    bg: "bg-[#5b6cff]/20",
  },
  {
    title: "Increase Brand Awareness",
    text: "Stay visible and top-of-mind within your industry.",
    Icon: GoogleG,
    color: "text-[#ff4d4d]",
    bg: "bg-[#ff4d4d]/20",
  },
  {
    title: "Improve Customer Acquisition",
    text: "Attract the right audience and convert them into customers.",
    Icon: User,
    color: "text-[#2dd4bf]",
    bg: "bg-[#2dd4bf]/20",
  },
  {
    title: "Drive Sustainable Growth",
    text: "Build long-term visibility and consistent opportunities.",
    Icon: Navigation,
    color: "text-[#ec4899]",
    bg: "bg-[#ec4899]/20",
  },
];

const WordpressGrowth = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className={`bg-[#1c1c1c] ${SIDE_SPACE} py-16 text-white md:py-24 lg:py-28`}>
      <div className={WRAP}>
        {/* ---------- Stats banner ---------- */}
        <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-[#1a2a7a] via-[#1d3a9e] to-[#0f1f5c]">
          {BANNER_IMG && (
            <img
              src={BANNER_IMG}
              alt="Why digital marketing matters"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative grid grid-cols-1 items-center gap-8 px-6 py-9 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-10 lg:py-10">
            {stats.map((stat) => (
              <div key={stat.value}>
                <h3
                  className="font-bold leading-none"
                  style={{ fontSize: "clamp(2.5rem, 3.9vw, 4.75rem)", letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </h3>
                <p
                  className="mx-auto mt-3 max-w-[230px] font-semibold text-gray-100"
                  style={{ fontSize: "clamp(0.7rem, 0.85vw, 1rem)", lineHeight: 1.4 }}
                >
                  {stat.label}
                </p>
              </div>
            ))}

            <h3
              className="font-bold leading-tight sm:col-span-2 lg:col-span-1 lg:text-left"
              style={{ fontSize: "clamp(1.25rem, 1.7vw, 2.1rem)", letterSpacing: "-0.03em" }}
            >
              Why Digital Marketing Matters
            </h3>
          </div>
        </div>

        {/* ---------- Growth solutions accordion ---------- */}
        <div className="mt-16 text-center lg:mt-24">
          <h2 className="font-bold leading-[1.1]" style={headingStyle}>
            Growth Solutions Tailored To Your Business
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[#fdfaf9]" style={bodyStyle}>
            No two businesses grow the same way. That&apos;s why we create customized strategies based
            on your goals, audience, and market.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 lg:mt-14 lg:gap-4">
          {services.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.no}
                className={`rounded-md bg-[#242424] transition-all duration-300 ${
                  isOpen ? "p-3 sm:p-4 lg:p-5" : "sm:mx-3 lg:mx-6"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 px-2 py-3 text-left md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-8 md:py-3.5 lg:px-4 lg:py-4"
                >
                  <span className="flex items-center gap-3 lg:gap-5">
                    <span className="font-bold text-gray-300" style={smallStyle}>
                      {item.no}
                    </span>
                    <span
                      className={`font-bold leading-tight ${isOpen ? "text-white" : "text-gray-200"}`}
                      style={cardTitleStyle}
                    >
                      {item.title}
                    </span>
                  </span>

                  <span
                    className="order-3 col-span-2 text-gray-400 md:order-none md:col-span-1"
                    style={smallStyle}
                  >
                    {item.text}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#F45132] text-[#F45132] transition-all duration-300 hover:bg-[#F45132] hover:text-white lg:h-11 lg:w-11">
                    <ArrowRight
                      size={18}
                      strokeWidth={3}
                      className={`transition-transform duration-300 ${isOpen ? "-rotate-45" : ""}`}
                    />
                  </span>
                </button>

                {/* Image panel */}
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr] pt-2" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="h-[clamp(180px,26vw,440px)] w-full overflow-hidden rounded-sm bg-[#d9dedb]">
                      {SEO_IMG && (
                        <img
                          src={SEO_IMG}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------- What effective digital marketing can do ---------- */}
        <div className="mt-20 text-center lg:mt-32">
          <h2 className="mx-auto max-w-[1000px] font-bold leading-[1.1]" style={headingStyle}>
            What Effective Digital Marketing Can Do For Your Business
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {benefits.map(({ title, text, Icon, color, bg }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-md bg-[#242424] px-5 py-7 text-center transition duration-300 hover:-translate-y-1 lg:px-7 lg:py-10"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-full lg:h-14 lg:w-14 ${bg}`}>
                <Icon className={`h-5 w-5 lg:h-6 lg:w-6 ${color}`} />
              </span>
              <h3 className="mt-4 font-bold leading-snug" style={cardTitleStyle}>
                {title}
              </h3>
              <p className="mt-2 max-w-[280px] text-gray-400" style={smallStyle}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordpressGrowth;
