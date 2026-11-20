import React from "react";
import {
  TrendingUp,
  Users,
  Settings,
  Target,
} from "lucide-react";

// Add your banner image path later
const STATS_BG_IMAGE = "";

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
    icon: <TrendingUp size={18} strokeWidth={1.7} />,
    title: "Generate More Revenue",
    description:
      "Open new sales channels and increase customer lifetime value.",
    color: "bg-[#29264b] text-[#7774ff]",
  },
  {
    icon: <Users size={18} strokeWidth={1.7} />,
    title: "Improve Customer Loyalty",
    description:
      "Stay connected with customers long after the first purchase.",
    color: "bg-[#3a2525] text-[#f15a3a]",
  },
  {
    icon: <Settings size={18} strokeWidth={1.7} />,
    title: "Automate Operations",
    description:
      "Reduce repetitive tasks and free up valuable resources.",
    color: "bg-[#223b3a] text-[#2dd4bf]",
  },
  {
    icon: <Target size={18} strokeWidth={1.7} />,
    title: "Scale Efficiently",
    description:
      "Build systems that support growth without adding complexity.",
    color: "bg-[#3a2231] text-[#ec4899]",
  },
];

export default function AppBusinessImpact() {
  return (
    <section className="w-full bg-[#1e1e1e] px-5 py-14 font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] sm:px-8 sm:py-16 lg:px-[7%] lg:py-20">
      {/* ================= STATS BANNER ================= */}
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[14px] bg-gradient-to-r from-[#173653] via-[#172d48] to-[#102043] px-5 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-7">
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
        <div className="relative z-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:gap-5">
          {/* Stat 1 */}
          <div className="text-center">
            <h3 className="text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-none tracking-[-0.04em] text-white">
              1,000+
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-white/90 sm:text-xs">
              Hours Saved Through Automation
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <h3 className="text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-none tracking-[-0.04em] text-white">
              +160%
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-white/90 sm:text-xs">
              Increase in Customer Engagement
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <h3 className="text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-none tracking-[-0.04em] text-white">
              99%
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-white/90 sm:text-xs">
              Smartphone Usage Among Internet Users
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center justify-center text-center lg:text-left">
            <h3 className="max-w-[260px] text-[clamp(1.1rem,1.5vw,1.5rem)] font-semibold leading-tight text-white">
              The Impact Of Mobile-First Experiences
            </h3>
          </div>
        </div>
      </div>

      {/* ================= SECTION HEADING ================= */}
      <div className="mx-auto mt-16 max-w-[1300px] text-center sm:mt-20 lg:mt-[110px]">
        <h2 className="text-[clamp(1.8rem,3vw,3.5rem)] font-bold leading-[1.15] tracking-[-0.04em] text-[#fdfaf9]">
          What Can A Custom Application Do For Your
          <span className="block mt-1">Business?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[1100px] text-[clamp(0.85rem,1vw,1.05rem)] leading-[1.8] text-[#d0d0d0]">
          A great app isn't just installed. It's used, loved, and remembered.
          We build applications that solve real problems and create real business
          impact.
        </p>
      </div>

      {/* ================= BENEFITS GRID ================= */}
      <div className="mx-auto mt-12 grid max-w-[1500px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center"
          >
            {/* Icon circle */}
            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 sm:h-[54px] sm:w-[54px] ${item.color}`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-[clamp(1.1rem,1.4vw,1.5rem)] font-semibold leading-tight tracking-[-0.03em] text-[#fdfaf9]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 max-w-[300px] text-[clamp(0.85rem,0.95vw,1rem)] leading-[1.7] text-[#c4c4c4]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}