import React from "react";

const APP_SHOWCASE_IMAGE = "";

export default function AppGrowthSection() {
  const benefits = [
    "Increase revenue",
    "Improve customer retention",
    "Reduce manual work",
    "Automate operations",
    "Create better customer experiences",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#1e1e1e] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9]">
      {/* ================= TOP CONTENT ================= */}
      <div className="mx-auto max-w-[1500px] px-5 pt-16 text-center sm:px-8 sm:pt-20 lg:px-[8%] lg:pt-[100px]">
        <h2 className="text-[clamp(1.8rem,3vw,3.5rem)] font-bold leading-tight tracking-[-0.04em]">
          Your Customers Are Already There
        </h2>

        <h3 className="mt-3 text-[clamp(1rem,1.5vw,1.65rem)] font-semibold text-[#fdfaf9]">
          Is Your Business Too?
        </h3>

        <div className="mx-auto mt-6 max-w-[1100px] space-y-2 text-[clamp(0.8rem,1vw,1.05rem)] leading-[1.8] text-[#d0d0d0]">
          <p>
            Today's customers expect convenience, speed, and accessibility.
          </p>

          <p>
            Whether they're booking services, placing orders, tracking progress,
            or interacting with your brand, mobile experiences have become the
            standard—not the advantage.
            <br className="hidden lg:block" />
            Businesses that meet customers where they are create stronger
            relationships, better experiences, and more opportunities to grow.
          </p>
        </div>
      </div>

      {/* ================= APP IMAGE SHOWCASE ================= */}
      <div className="relative mx-auto flex w-full items-center justify-center px-5 py-12 sm:py-16 lg:py-[100px]">
        <div className="relative flex w-full max-w-[1000px] items-center justify-center">
          {/* Mobile app mockup image */}
          <img
            src={APP_SHOWCASE_IMAGE}
            alt="Mobile application showcase displaying app features and business solutions"
            className="block h-auto w-full max-w-[650px] object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* ================= BOTTOM CONTENT ================= */}
      <div className="mx-auto max-w-[1500px] px-5 pb-16 text-center sm:px-8 sm:pb-20 lg:px-[8%] lg:pb-[100px]">
        <h2 className="text-[clamp(1.7rem,2.8vw,3.3rem)] font-bold leading-tight tracking-[-0.04em] text-[#fdfaf9]">
          We Don’t Just Build Apps. We Build Growth Engines.
        </h2>

        <div className="mx-auto mt-5 max-w-[900px] text-[clamp(0.85rem,1vw,1.05rem)] leading-7 text-[#d0d0d0]">
          <p>
            An application shouldn't be another business expense.
          </p>

          <p className="mt-1 font-medium text-white">
            It should:
          </p>
        </div>

        {/* ================= BENEFITS ================= */}
        <div className="mx-auto mt-6 flex max-w-[1200px] flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[clamp(0.8rem,0.95vw,1rem)] text-[#e5e5e5]"
            >
              <span className="text-[#f15a3a]">✓</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* ================= FINAL TEXT ================= */}
        <p className="mx-auto mt-7 max-w-[1000px] text-[clamp(0.8rem,0.95vw,1rem)] leading-7 text-[#b8b8b8]">
          At Rodex Web Technologies, every application is designed around
          business outcomes—not just features.
        </p>
      </div>
    </section>
  );
}