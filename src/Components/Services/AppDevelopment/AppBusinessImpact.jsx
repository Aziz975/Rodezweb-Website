import React from "react";
import { TrendingUp, Users, Settings, Target } from "lucide-react";

// Add your banner image path later
const STATS_BG_IMAGE = "";

/* ---------- Shared sizing ---------- */
const SIDE_SPACE = "px-5 sm:px-8 lg:px-[7.5%]";
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
  fontSize: "clamp(1.05rem, 1.35vw, 1.6rem)",
  letterSpacing: "-0.02em",
};

const stats = [
  {
    value: "1,000+",
    label: "Hours Saved Through Automation",
  },
  {
    value: "+160%",
    label: "Increase in Customer Engagement",
  },
  {
    value: "99%",
    label: "Smartphone Usage Among Internet Users",
  },
];

const benefits = [
  {
    Icon: TrendingUp,
    title: "Generate More Revenue",
    description: "Open new sales channels and increase customer lifetime value.",
    color: "bg-[#29264b] text-[#7774ff]",
  },
  {
    Icon: Users,
    title: "Improve Customer Loyalty",
    description: "Stay connected with customers long after the first purchase.",
    color: "bg-[#3a2525] text-[#F45132]",
  },
  {
    Icon: Settings,
    title: "Automate Operations",
    description: "Reduce repetitive tasks and free up valuable resources.",
    color: "bg-[#223b3a] text-[#2dd4bf]",
  },
  {
    Icon: Target,
    title: "Scale Efficiently",
    description: "Build systems that support growth without adding complexity.",
    color: "bg-[#3a2231] text-[#ec4899]",
  },
];

export default function AppBusinessImpact() {
  return (
    <section
      className={`w-full bg-[#1c1c1c] ${SIDE_SPACE} py-14 font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c] sm:py-16 lg:py-24`}
    >
      <div className={WRAP}>
        {/* ================= STATS BANNER ================= */}
        <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-[#173653] via-[#172d48] to-[#102043]">
          {/* Background image */}
          {STATS_BG_IMAGE && (
            <img
              src={STATS_BG_IMAGE}
              alt="Abstract technology background"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          )}

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#173653]/80 via-[#101c35]/65 to-[#101f45]/90" />

          {/* Stats content */}
          <div className="relative z-10 grid grid-cols-1 gap-8 px-6 py-9 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:gap-6 lg:px-10 lg:py-10">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <h3
                  className="font-bold leading-none text-white"
                  style={{
                    fontSize: "clamp(2.5rem, 3.9vw, 4.75rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.value}
                </h3>

                <p
                  className="mx-auto mt-3 max-w-[260px] font-semibold text-white/90"
                  style={{
                    fontSize: "clamp(0.75rem, 0.9vw, 1.05rem)",
                    lineHeight: 1.45,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Stat 4 (heading) */}
            <div className="flex items-center justify-center text-center sm:col-span-2 lg:col-span-1 lg:justify-start lg:text-left">
              <h3
                className="max-w-[340px] font-bold leading-tight text-white"
                style={{
                  fontSize: "clamp(1.25rem, 1.7vw, 2.1rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                The Impact Of Mobile-First Experiences
              </h3>
            </div>
          </div>
        </div>

        {/* ================= SECTION HEADING ================= */}
        <div className="mx-auto mt-16 max-w-[1200px] text-center sm:mt-20 lg:mt-28">
          <h2 className="font-bold leading-[1.1]" style={headingStyle}>
            What Can A Custom Application Do For Your Business?
          </h2>

          <p
            className="mx-auto mt-5 max-w-[900px] text-[#fdfaf9] light:text-[#555555]"
            style={bodyStyle}
          >
            A great app isn&apos;t just installed. It&apos;s used, loved, and
            remembered. We build applications that solve real problems and create
            real business impact.
          </p>
        </div>

        {/* ================= BENEFITS GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-10">
          {benefits.map(({ Icon, title, description, color }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 sm:h-14 sm:w-14 lg:h-16 lg:w-16 ${color}`}
              >
                <Icon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.7} />
              </div>

              {/* Title */}
              <h3
                className="font-semibold leading-tight text-[#fdfaf9] light:text-[#1c1c1c]"
                style={cardTitleStyle}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="mt-3 max-w-[320px] text-gray-300 light:text-[#666666]"
                style={smallStyle}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}