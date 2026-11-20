import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Q. How long does digital marketing take to show results?",
    a: "Some channels like paid advertising can generate results immediately, while SEO and organic growth typically take a few months to build momentum.",
  },
  {
    q: "Q. Which platform is best for my business?",
    a: "It depends on your audience, goals, and industry. We analyze where your customers spend their time and recommend the platforms that will deliver the strongest results for you.",
  },
  {
    q: "Q. Do you manage Google Ads and Meta Ads?",
    a: "Yes. We plan, launch, and optimize campaigns across Google Ads and Meta Ads, with continuous testing to improve performance and return on ad spend.",
  },
  {
    q: "Q. Will I receive reports?",
    a: "Absolutely. You'll receive clear, regular reports covering traffic, leads, and campaign performance, so you always know what's working.",
  },
  {
    q: "Q. Can digital marketing help generate more leads?",
    a: "Yes. A strategic mix of SEO, paid advertising, and content brings in the right audience and turns visitors into qualified leads and customers.",
  },
];

const DigitalMarketingFaq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 md:py-24 lg:px-[7.5%] lg:py-28">
      <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
        {/* Left: heading */}
        <div>
          <p className="text-base font-medium uppercase sm:text-lg lg:text-xl">FAQs</p>

          <h2
            className="mt-5 font-bold leading-[1.02]"
            style={{ fontSize: "clamp(2.5rem, 4.2vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Frequently
            <br />
            Asked
            <br />
            Questions!
          </h2>

          <p
            className="mt-8 max-w-[720px] text-[#fdfaf9] lg:mt-12"
            style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.25rem)", lineHeight: 1.6 }}
          >
            Find answers to common questions about our services, process, timelines, and how we help
            businesses achieve their digital goals.
          </p>
        </div>

        {/* Right: accordion */}
        <div className="flex flex-col gap-4 lg:gap-[30px] lg:pt-2">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex min-h-[56px] w-full items-center gap-4 rounded-md bg-white px-5 py-4 text-left text-[#1c1c1c] sm:min-h-[64px] lg:min-h-[68px]"
                >
                  <span className="shrink-0">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={3} />
                    ) : (
                      <Plus size={18} strokeWidth={3} />
                    )}
                  </span>
                  <span
                    className="font-semibold leading-snug"
                    style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)", letterSpacing: "-0.02em" }}
                  >
                    {item.q}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-md border-t-2 border-[#F45132]/70 bg-white px-5 py-6 text-[#1c1c1c] sm:py-8">
                      <p
                        style={{
                          fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
                          lineHeight: 1.55,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingFaq;
