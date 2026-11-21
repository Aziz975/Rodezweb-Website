
import { useState } from "react";

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

const logos = [
  { src: "images/img1.png", alt: "Client 1" },
  { src: "images/img2.png", alt: "Client 2" },
  { src: "images/img3.png", alt: "Client 3" },
  { src: "images/img4.png", alt: "Client 4" },
  { src: "images/img5.png", alt: "Client 5" },
  { src: "images/img6.png", alt: "Client 6" },
  { src: "images/kj-institute.png", alt: "Client 7" },
  { src: "images/sterling.png", alt: "Client 8" },
];

function Label({ children, variant = "corner" }) {
  return (
    <div className="flex items-center gap-2">
      {variant === "square" ? (
        <span className="h-2.5 w-2.5 rounded-[2px] border-[1.5px] border-[#f05a2d]" />
      ) : (
        <span className="h-2.5 w-2.5 rounded-tl-[3px] border-l-[1.5px] border-t-[1.5px] border-[#f05a2d]" />
      )}

      <span className="text-[10px] font-semibold uppercase tracking-wide text-[color:var(--faq-label)] sm:text-[11px]">
        {children}
      </span>
    </div>
  );
}

const Icon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 shrink-0 text-[#f05a2d]"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    {!open && <path d="M12 5v14" />}
  </svg>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-root min-h-screen w-full overflow-x-hidden pb-24 font-['Manrope',sans-serif] lg:pb-40">
      <style>{`
        /* ================= FAQ THEME ================= */

        .faq-root {
          --faq-bg: #1c1c1c;
          --faq-text: #ffffff;
          --faq-soft: rgba(255, 255, 255, 0.9);
          --faq-label: rgba(255, 255, 255, 0.9);

          --faq-card-open: #ffffff;
          --faq-card-closed: #f1f1f1;
          --faq-card-text: #1c1c1c;
          --faq-answer: #2a2a2a;

          background-color: var(--faq-bg);
          color: var(--faq-text);
          transition: background-color 0.35s ease, color 0.35s ease;
        }

        /* LIGHT MODE */
        html.light .faq-root {
          --faq-bg: #ffffff;
          --faq-text: #1c1c1c;
          --faq-soft: rgba(28, 28, 28, 0.85);
          --faq-label: rgba(28, 28, 28, 0.85);

          --faq-card-open: #ffffff;
          --faq-card-closed: #f1f1f1;
          --faq-card-text: #1c1c1c;
          --faq-answer: #2a2a2a;
        }

        /* ================= ANIMATIONS ================= */

        @keyframes dm-fade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        .dm-fade {
          animation: dm-fade 0.45s ease both;
        }

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
          .dm-fade,
          .logo-scroll-track {
            animation: none;
          }
        }
      `}</style>

      {/* ===================== FAQ ===================== */}

      <section className="mx-auto mt-16 w-full max-w-[1300px] px-5 sm:mt-20 sm:px-6 lg:mt-28">
        <Label>FAQs</Label>

        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          {/* Left Side */}
          <div>
            <h2 className="text-[clamp(2rem,4.2vw,4rem)] font-extrabold leading-[1.08] tracking-tight">
              Frequently <br className="hidden sm:block" />
              Asked <br className="hidden sm:block" />
              <span className="inline-block rounded-md bg-[#f05a2d] px-3 leading-[1.25] text-white sm:px-4">
                Questions!
              </span>
            </h2>

            <p className="mt-6 max-w-[440px] text-[13px] font-medium leading-relaxed text-[color:var(--faq-soft)] sm:text-[15px] lg:mt-10">
              Find answers to common questions about our services, process, timelines, and how we
              help businesses achieve their{" "}
              <span className="text-[#f05a2d]">digital goals</span>.
            </p>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {faqs.map((item, i) => {
              const open = openIndex === i;

              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-[10px] text-[color:var(--faq-card-text)] transition-colors duration-300 ${
                    open
                      ? "bg-[color:var(--faq-card-open)]"
                      : "bg-[color:var(--faq-card-closed)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left text-[13px] font-bold sm:text-[15px] lg:px-5"
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
                      <p className="px-4 pb-5 pl-[42px] pr-5 text-[12px] leading-relaxed text-[color:var(--faq-answer)] sm:text-[14px] lg:pl-[46px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CLIENT LOGO MARQUEE ===================== */}

      <section className="relative mt-24 w-full overflow-hidden pb-20 sm:pb-24 lg:mt-48 lg:pb-8">
        <div className="mx-auto mb-10 w-full max-w-[1300px] px-5 sm:px-6 lg:mb-14">
          <Label variant="square">Our Clients</Label>
        </div>

        <div className="logo-scroll w-full overflow-hidden">
          <div className="logo-scroll-track flex w-max">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10"
                aria-hidden={group === 1}
              >
                {logos.map((logo) => (
                  <div
                    key={`${group}-${logo.alt}`}
                    className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:h-[100px] sm:w-[100px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
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
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.77.47 3.49 1.37 5.01L2 22l5.12-1.34a9.96 9.96 0 0 0 4.92 1.29h.01c5.52 0 10.01-4.49 10.01-10.01A9.96 9.96 0 0 0 12.04 2Zm0 18.24a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.04.8.81-2.96-.2-.31a8.22 8.22 0 1 1 6.91 3.8Zm4.51-6.15c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.97-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.23-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
          </svg>

          <span>Get Free Consultation for the Project!</span>
        </a>
      </section>
    </div>
  );
}
