
import React, { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "motion/react";

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

/* ---------- Reusable scroll reveal ---------- */

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount,
  });
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }
    : revealVariants;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: shouldReduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Letter reveal heading ---------- */

function LetterReveal({ lines, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });
  const shouldReduceMotion = useReducedMotion();

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.035,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 25,
      rotateX: shouldReduceMotion ? 0 : -70,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.h2
      ref={ref}
      className={className}
      aria-label={lines.join(" ")}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <span aria-hidden="true">
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => (
              <React.Fragment key={`${lineIndex}-${wordIndex}`}>
                <span className="inline-block whitespace-nowrap">
                  {Array.from(word).map((letter, letterIndex) => (
                    <motion.span
                      key={`${lineIndex}-${wordIndex}-${letterIndex}`}
                      variants={letterVariants}
                      className="inline-block"
                      style={{ transformOrigin: "bottom" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                {wordIndex !== line.split(" ").length - 1 && (
                  <span className="inline-block">{"\u00a0"}</span>
                )}
              </React.Fragment>
            ))}
          </span>
        ))}
      </span>
    </motion.h2>
  );
}

/* ---------- FAQ component ---------- */

const DigitalMarketingFaq = () => {
  const [open, setOpen] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#1c1c1c] px-5 py-16 text-white transition-colors duration-300 sm:px-8 md:py-24 lg:px-[7.5%] lg:py-28 light:bg-[#fafafa] light:text-[#1c1c1c]">
      <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24">

        {/* ---------- Left: heading ---------- */}

        <div>
          <Reveal>
            <p className="text-base font-medium uppercase text-[#fdfaf9] light:text-[#1c1c1c] sm:text-lg lg:text-xl">
              FAQs
            </p>
          </Reveal>

          <div className="mt-5">
            <LetterReveal
              lines={[
                "Frequently",
                "Asked",
                "Questions!",
              ]}
              className="font-bold leading-[1.02] text-[#fdfaf9] light:text-[#1c1c1c]"
            />
          </div>

          <Reveal delay={0.2}>
            <p
              className="mt-8 max-w-[720px] text-[#fdfaf9] light:text-[#555555] lg:mt-12"
              style={{
                fontSize: "clamp(0.95rem, 1.05vw, 1.25rem)",
                lineHeight: 1.6,
              }}
            >
              Find answers to common questions about our services, process,
              timelines, and how we help businesses achieve their digital goals.
            </p>
          </Reveal>
        </div>

        {/* ---------- Right: accordion ---------- */}

        <div className="flex flex-col gap-4 lg:gap-[30px] lg:pt-2">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <Reveal
                key={item.q}
                delay={i * 0.09}
                amount={0.15}
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { y: -3 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="w-full"
                >
                  {/* Question button */}

                  <motion.button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    whileTap={
                      shouldReduceMotion
                        ? {}
                        : { scale: 0.99 }
                    }
                    className="flex min-h-[56px] w-full items-center gap-4 rounded-md bg-white px-5 py-4 text-left text-[#1c1c1c] transition-colors duration-300 hover:bg-[#f5f5f5] sm:min-h-[64px] lg:min-h-[68px]"
                  >
                    {/* Animated plus / minus icon */}

                    <span className="flex shrink-0 items-center justify-center">
                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                          scale: isOpen ? 1.1 : 1,
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.3,
                        }}
                      >
                        {isOpen ? (
                          <Minus size={18} strokeWidth={3} />
                        ) : (
                          <Plus size={18} strokeWidth={3} />
                        )}
                      </motion.span>
                    </span>

                    <span
                      className="font-semibold leading-snug"
                      style={{
                        fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.q}
                    </span>
                  </motion.button>

                  {/* Animated answer */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        key="answer"
                        initial={
                          shouldReduceMotion
                            ? { opacity: 1, height: "auto" }
                            : {
                                opacity: 0,
                                height: 0,
                                y: -8,
                              }
                        }
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={
                          shouldReduceMotion
                            ? { opacity: 1, height: 0 }
                            : {
                                opacity: 0,
                                height: 0,
                                y: -8,
                              }
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3">
                          <div className="rounded-md border-t-2 border-[#F45132]/70 bg-white px-5 py-6 text-[#1c1c1c] sm:py-8">
                            <motion.p
                              initial={
                                shouldReduceMotion
                                  ? { opacity: 1 }
                                  : { opacity: 0, y: 10 }
                              }
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: shouldReduceMotion ? 0 : 0.35,
                                delay: shouldReduceMotion ? 0 : 0.08,
                              }}
                              style={{
                                fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
                                lineHeight: 1.55,
                                letterSpacing: "-0.02em",
                              }}
                            >
                              {item.a}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingFaq;
