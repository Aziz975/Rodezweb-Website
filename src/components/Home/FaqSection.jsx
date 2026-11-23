
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

/* ================= FAQ DATA ================= */

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

/* ================= CLIENT LOGOS ================= */

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

/* ================= ANIMATION VARIANTS ================= */

const headingReveal = {
  hidden: {
    opacity: 0,
    y: 55,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const leftReveal = {
  hidden: {
    opacity: 0,
    x: -65,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightReveal = {
  hidden: {
    opacity: 0,
    x: 65,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerFAQ = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const faqReveal = {
  hidden: {
    opacity: 0,
    x: 35,
    y: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ================= LABEL ================= */

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

/* ================= FAQ ICON ================= */

const Icon = ({ open }) => (
  <motion.svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 shrink-0 text-[#f05a2d]"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    aria-hidden="true"
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <path d="M5 12h14" />
    {!open && <path d="M12 5v14" />}
  </motion.svg>
);

/* ================= MAIN COMPONENT ================= */

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  const viewport = {
    once: true,
    amount: 0.15,
  };

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport,
      };

  const entrance = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <div className="faq-root min-h-screen w-full overflow-x-hidden pb-24 font-['Manrope',sans-serif] lg:pb-40">

      {/* ================= THEME & CSS ================= */}

      <style>{`
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

          transition:
            background-color 0.35s ease,
            color 0.35s ease;
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

        /* LOGO MARQUEE */

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
          will-change: transform;
        }

        .logo-scroll:hover .logo-scroll-track {
          animation-play-state: paused;
        }

        /* WHATSAPP PULSE */

        @keyframes whatsapp-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(32, 207, 104, 0.3);
          }
          50% {
            box-shadow: 0 0 0 9px rgba(32, 207, 104, 0);
          }
        }

        .whatsapp-pulse {
          animation: whatsapp-pulse 2.5s ease-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-scroll-track {
            animation: none !important;
          }

          .whatsapp-pulse {
            animation: none !important;
          }

          .faq-root {
            transition: none;
          }
        }
      `}</style>

      {/* ===================== FAQ SECTION ===================== */}

      <section className="mx-auto mt-16 w-full max-w-[1300px] px-5 sm:mt-20 sm:px-6 lg:mt-28">

        {/* Section Label */}

        <motion.div
          {...reveal}
          variants={headingReveal}
        >
          <Label>FAQs</Label>
        </motion.div>

        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">

          {/* ---------- LEFT SIDE ---------- */}

          <div>

            <motion.h2
              {...entrance}
              variants={headingReveal}
              className="text-[clamp(2rem,4.2vw,4rem)] font-extrabold leading-[1.08] tracking-tight"
            >
              Frequently <br className="hidden sm:block" />
              Asked <br className="hidden sm:block" />

              <motion.span
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, scale: 0.8, y: 20 }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={viewport}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: "backOut",
                }}
                className="inline-block rounded-md bg-[#f05a2d] px-3 leading-[1.25] text-white sm:px-4"
              >
                Questions!
              </motion.span>
            </motion.h2>

            <motion.p
              {...reveal}
              variants={leftReveal}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-[440px] text-[13px] font-medium leading-relaxed text-[color:var(--faq-soft)] sm:text-[15px] lg:mt-10"
            >
              Find answers to common questions about our services, process,
              timelines, and how we help businesses achieve their{" "}
              <span className="text-[#f05a2d]">
                digital goals
              </span>.
            </motion.p>

            {/* Decorative Accent */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { width: 0, opacity: 0 }
              }
              whileInView={{
                width: 90,
                opacity: 1,
              }}
              viewport={viewport}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="mt-7 h-[3px] rounded-full bg-[#f05a2d]"
            />

          </div>

          {/* ---------- RIGHT SIDE: FAQ ACCORDION ---------- */}

          <motion.div
            className="flex flex-col gap-3 lg:gap-4"
            variants={staggerFAQ}
            {...reveal}
          >
            {faqs.map((item, i) => {
              const open = openIndex === i;

              return (
                <motion.div
                  key={item.q}
                  variants={faqReveal}
                  layout={!shouldReduceMotion}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: 4,
                          transition: { duration: 0.2 },
                        }
                  }
                  className={`overflow-hidden rounded-[10px] text-[color:var(--faq-card-text)] transition-colors duration-300 ${
                    open
                      ? "bg-[color:var(--faq-card-open)]"
                      : "bg-[color:var(--faq-card-closed)]"
                  }`}
                >

                  {/* Question */}

                  <motion.button
                    type="button"
                    onClick={() =>
                      setOpenIndex(open ? -1 : i)
                    }
                    aria-expanded={open}
                    whileTap={
                      shouldReduceMotion
                        ? {}
                        : { scale: 0.99 }
                    }
                    className="flex w-full items-center gap-3 px-4 py-4 text-left text-[13px] font-bold sm:text-[15px] lg:px-5"
                  >
                    <Icon open={open} />

                    <span className="flex-1">
                      {i + 1}. {item.q}
                    </span>

                    <motion.span
                      animate={{
                        scale: open ? 1.1 : 1,
                      }}
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f05a2d]"
                    />
                  </motion.button>

                  {/* Animated Answer */}

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="answer"
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={
                            shouldReduceMotion
                              ? false
                              : { y: 12, opacity: 0 }
                          }
                          animate={{
                            y: 0,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: 0.08,
                          }}
                          className="px-4 pb-5 pl-[42px] pr-5 text-[12px] leading-relaxed text-[color:var(--faq-answer)] sm:text-[14px] lg:pl-[46px]"
                        >
                          {item.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ===================== CLIENT LOGO MARQUEE ===================== */}

      <section className="relative mt-24 w-full overflow-hidden pb-20 sm:pb-24 lg:mt-48 lg:pb-8">

        {/* Heading */}

        <div className="mx-auto mb-10 w-full max-w-[1300px] px-5 sm:px-6 lg:mb-14">
          <motion.div
            {...reveal}
            variants={leftReveal}
          >
            <Label variant="square">Our Clients</Label>
          </motion.div>
        </div>

        {/* Logo Animation */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.8,
          }}
          className="logo-scroll w-full overflow-hidden"
        >
          <div className="logo-scroll-track flex w-max">

            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10"
                aria-hidden={group === 1}
              >
                {logos.map((logo) => (
                  <motion.div
                    key={`${group}-${logo.alt}`}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.12,
                            y: -8,
                            rotate: 3,
                          }
                    }
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 shadow-sm sm:h-[100px] sm:w-[100px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}

          </div>
        </motion.div>

        {/* ===================== WHATSAPP BUTTON ===================== */}

        <motion.a
          href="https://wa.me/0000000000"
          target="_blank"
          rel="noopener noreferrer"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 60,
                  scale: 0.8,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.06,
                  y: -4,
                }
          }
          whileTap={{
            scale: 0.95,
          }}
          className="whatsapp-pulse absolute bottom-3 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-[#20cf68] px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-colors hover:bg-[#18b957] sm:bottom-5 sm:right-6 sm:px-6 sm:py-3 sm:text-sm"
        >

          <motion.svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    rotate: [0, -8, 8, -8, 0],
                  }
            }
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.77.47 3.49 1.37 5.01L2 22l5.12-1.34a9.96 9.96 0 0 0 4.92 1.29h.01c5.52 0 10.01-4.49 10.01-10.01A9.96 9.96 0 0 0 12.04 2Zm0 18.24a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.04.8.81-2.96-.2-.31a8.22 8.22 0 1 1 6.91 3.8Zm4.51-6.15c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.97-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.23-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
          </motion.svg>

          <span>
            Get Free Consultation for the Project!
          </span>

        </motion.a>

      </section>

    </div>
  );
}
