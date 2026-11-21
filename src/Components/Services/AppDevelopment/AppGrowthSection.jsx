import React from "react";

const APP_SHOWCASE_IMAGE = "/images/Left-Rodez-Phone.png";

/* ---------- Shared sizing (same scale as DigitalMarketingCta / Faq / Process / Growth) ---------- */
const SIDE_SPACE = "px-5 sm:px-8 lg:px-[7.5%]"; // left & right space
const WRAP = "mx-auto max-w-[1700px]";

const headingStyle = {
  fontSize: "clamp(1.9rem, 3.6vw, 4.25rem)",
  letterSpacing: "-0.03em",
};
const subHeadingStyle = {
  fontSize: "clamp(1.1rem, 1.7vw, 2.1rem)",
  letterSpacing: "-0.02em",
};
const bodyStyle = {
  fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
  lineHeight: 1.7,
  letterSpacing: "-0.02em",
};
const smallStyle = {
  fontSize: "clamp(0.85rem, 1vw, 1.2rem)",
  lineHeight: 1.6,
  letterSpacing: "-0.02em",
};

export default function AppGrowthSection() {
  const benefits = [
    "Increase revenue",
    "Improve customer retention",
    "Reduce manual work",
    "Automate operations",
    "Create better customer experiences",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#1c1c1c] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9]">
      {/* ================= TOP CONTENT ================= */}
      <div className={`${SIDE_SPACE} pt-16 sm:pt-20 lg:pt-28`}>
        <div className={`${WRAP} text-center`}>
          <h2 className="font-bold leading-[1.1]" style={headingStyle}>
            Your Customers Are Already There
          </h2>

          <h3 className="mt-3 font-semibold text-[#fdfaf9]" style={subHeadingStyle}>
            Is Your Business Too?
          </h3>

          <div className="mx-auto mt-6 max-w-[1200px] space-y-2 text-[#fdfaf9]" style={bodyStyle}>
            <p>Today&apos;s customers expect convenience, speed, and accessibility.</p>

            <p>
              Whether they&apos;re booking services, placing orders, tracking progress, or
              interacting with your brand, mobile experiences have become the standard—not the
              advantage.
              <br className="hidden lg:block" />
              Businesses that meet customers where they are create stronger relationships, better
              experiences, and more opportunities to grow.
            </p>
          </div>
        </div>
      </div>



      {/* ================= BOTTOM CONTENT ================= */}
      <div className={`${SIDE_SPACE} pb-16 sm:pb-20 lg:pb-28`}>
        <div className={`${WRAP} text-center`}>
          <h2 className="mx-auto max-w-[1400px] font-bold leading-[1.1]" style={headingStyle}>
            We Don’t Just Build Apps. We Build Growth Engines.
          </h2>

          <div className="mx-auto mt-6 max-w-[1000px] text-[#fdfaf9]" style={bodyStyle}>
            <p>An application shouldn&apos;t be another business expense.</p>
            <p className="mt-1 font-semibold">It should:</p>
          </div>

          {/* ================= BENEFITS ================= */}
          <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:gap-x-9">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 font-semibold text-[#fdfaf9]"
                style={smallStyle}
              >
                <span className="text-[#F45132]">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* ================= FINAL TEXT ================= */}
          <p className="mx-auto mt-8 max-w-[1100px] text-gray-300" style={smallStyle}>
            At Rodex Web Technologies, every application is designed around business outcomes—not
            just features.
          </p>
        </div>
      </div>
    </section>
  );
}
