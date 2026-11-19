import { useState } from "react";

/*
  Styling kept from the previous pages: Manrope font, #1c1c1c background, orange #f05a2d.
  Font (if not already added, index.html <head>):
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
*/

const faqs = [
  {
    q: "What services does Rodez Web Technologies offer?",
    a: "We provide website design and development, SEO, digital marketing, branding, social media management, eCommerce solutions, and performance marketing tailored to your business needs.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on the scope. A standard business website usually takes 3–6 weeks, while larger eCommerce or custom projects can take longer.",
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "Yes. We work with startups, small businesses, and established companies, and tailor our approach to each one's goals and budget.",
  },
  {
    q: "Can you help improve my existing website?",
    a: "Absolutely. We can audit your current site and improve its design, speed, SEO, and conversions without rebuilding from scratch.",
  },
  {
    q: "Do you offer ongoing support after project completion?",
    a: "Yes. We offer maintenance and support plans covering updates, security, performance monitoring, and ongoing improvements.",
  },
];

/* Leave src empty; add your logo images later. */
const logos = Array.from({ length: 8 }, (_, i) => ({ id: i, src: "", alt: `Client logo ${i + 1}` }));

const Icon = ({ open }) => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
    <path d="M5 12h14" />
    {!open && <path d="M12 5v14" />}
  </svg>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full overflow-x-clip bg-[#1c1c1c] py-16 font-['Manrope',sans-serif] text-white sm:py-20 lg:py-28">
      <style>{`
        @keyframes faq-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .faq-marquee-track { animation: faq-marquee 30s linear infinite; }
        .faq-marquee:hover .faq-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .faq-marquee-track { animation: none; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[880px] px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.85fr_1fr] md:gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <p className="text-[11px] font-bold sm:text-[12px]">FAQS</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-tight">
              Frequently Asked Questions!
            </h2>
            <p className="mt-9 max-w-[380px] text-[12px] font-medium leading-snug text-white/90 sm:text-[13px]">
              Find answers to common questions about our services, process, timelines, and how we help businesses achieve their digital goals.
            </p>
          </div>

          {/* Right accordion */}
          <div className="flex flex-col gap-3.5">
            {faqs.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.q} className="overflow-hidden rounded-[3px] bg-white text-[#1c1c1c]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-2.5 px-3 py-[11px] text-left text-[11px] font-bold sm:text-[12px]"
                  >
                    <Icon open={open} />
                    <span>
                      {i + 1}. {item.q}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-3 pb-4 pt-2 text-[11px] leading-[1.45] text-[#2a2a2a] sm:text-[12px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Logo circles: continuous right-to-left marquee */}
      <div className="faq-marquee mt-16 w-full overflow-hidden sm:mt-24 lg:mt-40">
        <div className="faq-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
              {logos.map((logo) => (
                <div
                  key={`${copy}-${logo.id}`}
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white sm:h-[62px] sm:w-[62px]"
                >
                  <img src={logo.src} alt={copy === 0 ? logo.alt : ""} className="h-full w-full object-contain p-1.5" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
