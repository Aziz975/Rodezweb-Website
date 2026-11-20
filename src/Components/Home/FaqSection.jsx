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
const logos = Array.from({ length: 8 }, (_, i) => ({ id: i, src: "images/image4.png", alt: `Client logo ${i + 1}` }));

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



{/* Client Logo Marquee Section */}
<section className="relative w-full overflow-hidden bg-[#1c1c1c] py-10 sm:py-12 lg:py-16">

  <style>
    {`
      @keyframes logo-scroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }

      .logo-scroll-track {
        animation: logo-scroll 35s linear infinite;
      }

      .logo-scroll:hover .logo-scroll-track {
        animation-play-state: paused;
      }

      @media (prefers-reduced-motion: reduce) {
        .logo-scroll-track {
          animation: none;
        }
      }
    `}
  </style>

  {/* Logo Images */}
  <div className="logo-scroll w-full overflow-hidden mt-40">

    <div className="logo-scroll-track flex w-max">

      {[0, 1].map((group) => (
        <div
          key={group}
          className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10"
          aria-hidden={group === 1}
        >

          {/* Logo 1 */}
          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:h-[100px] sm:w-[100px]">
            <img
              src="images/img1.png"
              alt="Client 1"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:h-[100px] sm:w-[100px]">
            <img
              src="images/img2.png"
              alt="Client 2"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Logo 3 */}
          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:h-[100px] sm:w-[100px]">
            <img
              src="images/img3.png"
              alt="Client 3"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Logo 4 */}
          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:h-[100px] sm:w-[100px]">
            <img
              src="images/img4.png"
              alt="Client 4"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Logo 5 */}
          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:h-[100px] sm:w-[100px]">
            <img
              src="images/img5.png"
              alt="Client 5"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Logo 6 */}
          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:h-[100px] sm:w-[100px]">
            <img
              src="images/img6.png"
              alt="Client 6"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Logo 7 */}
          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:h-[100px] sm:w-[100px]">
            <img
              src="images/kj-institute.png"
              alt="Client 7"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Logo 8 */}
          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:h-[100px] sm:w-[100px]">
            <img
              src="images/sterling.png"
              alt="Client 8"
              className="h-full w-full object-contain"
            />
          </div>

        </div>
      ))}

    </div>
  </div>

  {/* WhatsApp Consultation Button */}
  <a
    href="https://wa.me/0000000000"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-3 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-[#20cf68] px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:bg-[#18b957] sm:bottom-5 sm:right-6 sm:px-6 sm:py-3 sm:text-sm"
  >
    {/* WhatsApp Icon */}
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
    >
      <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.77.47 3.49 1.37 5.01L2 22l5.12-1.34a9.96 9.96 0 0 0 4.92 1.29h.01c5.52 0 10.01-4.49 10.01-10.01A9.96 9.96 0 0 0 12.04 2Zm0 18.24a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.04.8.81-2.96-.2-.31a8.22 8.22 0 1 1 6.91 3.8Zm4.51-6.15c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.97-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.23-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>

    <span>Get Free Consultation for the Project!</span>
  </a>

</section>

 
    </section>




  );
}
