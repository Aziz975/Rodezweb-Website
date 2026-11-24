import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "motion/react";

/* ---------- Image Sources ---------- */
const PROCESS_BG_IMG = "/images/process-bg.png";
const COUNTER_IMG = "/images/wp-ecommerce.png";
const PHONE_IMG = "/images/Before.png";

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

const buttonStyle = {
  fontSize: "clamp(0.95rem, 1.1vw, 1.25rem)",
  letterSpacing: "-0.02em",
};

/* ---------- Animation Variants ---------- */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ---------- Reusable Scroll Reveal ---------- */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 35,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.15,
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: shouldReduceMotion ? 1 : 0,
          y: shouldReduceMotion ? 0 : y,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1],
              },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/* ---------- Letter Reveal Heading ---------- */
const LetterReveal = ({
  children,
  className = "",
  style = {},
  align = "center",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });
  const shouldReduceMotion = useReducedMotion();

  const words = children.split(" ");

  return (
    <h2
      ref={ref}
      className={className}
      style={style}
      aria-label={children}
    >
      <span className="sr-only">{children}</span>

      <span
        aria-hidden="true"
        className={`inline-flex flex-wrap ${
          align === "left" ? "justify-start" : "justify-center"
        }`}
      >
        {words.map((word, wordIndex) => (
          <span
            key={`${word}-${wordIndex}`}
            className="mr-[0.25em] inline-flex whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={`${letter}-${letterIndex}`}
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 22,
                  rotateX: shouldReduceMotion ? 0 : -60,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                      }
                    : {
                        opacity: shouldReduceMotion ? 1 : 0,
                        y: shouldReduceMotion ? 0 : 22,
                        rotateX: shouldReduceMotion ? 0 : -60,
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.45,
                        delay:
                          wordIndex * 0.12 +
                          letterIndex * 0.035,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    </h2>
  );
};

/* ---------- Process Steps ---------- */
const steps = [
  {
    title: "Discover",
    text: "Understanding your business, market, and goals.",
  },
  {
    title: "Strategize",
    text: "Building a customized growth plan.",
  },
  {
    title: "Execute",
    text: "Launching campaigns designed to drive results.",
  },
];

/* ---------- Hotspot positions ---------- */
const hotspots = [
  { no: "01", left: "26%", top: "18%" },
  { no: "02", left: "63%", top: "30%" },
  { no: "03", left: "26%", top: "47%" },
  { no: "04", left: "62%", top: "63%" },
];

/* ---------- Before and After Content ---------- */
const results = {
  before: {
    tags: ["Low Reach", "Minimal Engagement", "Slow Growth"],
    title: "Posting Without A Strategy",
    intro:
      "Most businesses struggle on Instagram because they're posting content without a clear plan.",
    listTitle: "What It Looks Like:",
    points: [
      "Low reach and visibility",
      "Inconsistent engagement",
      "Slow follower growth",
      "Content with no clear direction",
      "Few inquiries and leads",
      "Limited brand awareness",
    ],
    result:
      "Time and effort spent creating content, but little to no business growth.",
  },
  after: {
    tags: ["High Reach", "Strong Engagement", "Steady Growth"],
    title: "Posting With A Strategy",
    intro:
      "When content is planned around your audience and goals, every post works toward business growth.",
    listTitle: "What It Looks Like:",
    points: [
      "Higher reach and visibility",
      "Consistent engagement",
      "Steady follower growth",
      "Content with a clear direction",
      "More inquiries and leads",
      "Stronger brand awareness",
    ],
    result:
      "Every post supports your brand and turns attention into real business growth.",
  },
};

/* ---------- Badge ---------- */
const Badge = ({ number }) => (
  <motion.span
    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#F45132] text-xs font-bold text-white lg:h-9 lg:w-9 lg:text-sm"
    whileHover={{ scale: 1.15, rotate: 10 }}
    transition={{ duration: 0.25 }}
  >
    {number}
  </motion.span>
);

/* ---------- 1. How We Help Businesses Grow ---------- */
const HowWeHelp = () => {
  const [start, setStart] = useState(0);
  const total = steps.length;
  const shouldReduceMotion = useReducedMotion();

  const visible = [0, 1, 2].map((i) => {
    const index = (start + i) % total;
    return { ...steps[index], number: index + 1 };
  });

  const prev = () => setStart((s) => (s - 1 + total) % total);
  const next = () => setStart((s) => (s + 1) % total);

  return (
    <section className="relative overflow-hidden bg-[#3a1b17]">
      {PROCESS_BG_IMG && (
        <motion.img
          src={PROCESS_BG_IMG}
          alt="Digital marketing process for growing businesses"
          className="absolute inset-0 h-full w-full object-cover blur-[2px]"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
        />
      )}

      <div className="absolute inset-0 bg-black/45" />

      <div className={`relative ${SIDE_SPACE} py-14 md:py-20 lg:py-24`}>
        <div
          className={`${WRAP} flex flex-col items-center gap-8 md:flex-row md:gap-10 lg:gap-14`}
        >
          {/* Intro card */}
          <Reveal className="w-full max-w-md md:w-[34%] md:max-w-none md:shrink-0 lg:w-[26%]">
            <motion.div
              className="rounded-md bg-[#242424] p-6 text-white sm:p-8 lg:p-10"
              whileHover={
                shouldReduceMotion ? {} : { y: -6 }
              }
              transition={{ duration: 0.3 }}
            >
              <LetterReveal
                align="left"
                className="font-bold leading-[1.1]"
                style={{
                  fontSize: "clamp(1.6rem, 2.6vw, 3.25rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                How We Help Businesses Grow
              </LetterReveal>

              <p className="mt-5 text-[#fdfaf9]" style={smallStyle}>
                Whether you&apos;re launching a new business or upgrading an
                existing presence, we do marketing that aligns with your
                objectives and delivers measurable results.
              </p>
            </motion.div>
          </Reveal>

          {/* Steps */}
          <Reveal className="flex w-full flex-1 items-center" delay={0.15}>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous step"
              className="z-10 mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#F45132] hover:text-white lg:h-9 lg:w-9"
            >
              <motion.span
                whileHover={shouldReduceMotion ? {} : { x: -3 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
              >
                <ChevronLeft size={18} />
              </motion.span>
            </button>

            <div className="relative flex-1">
              <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-white/70 md:block" />

              <div className="relative grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-8">
                <AnimatePresence mode="wait">
                  {visible.map((step, i) => {
                    const isMiddle = i === 1;

                    return (
                      <motion.div
                        key={`${step.number}-${start}`}
                        initial={{
                          opacity: 0,
                          y: shouldReduceMotion ? 0 : 25,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: shouldReduceMotion ? 0 : -20,
                        }}
                        transition={{ duration: 0.35 }}
                        className={`${
                          i > 0 ? "hidden md:flex" : "flex"
                        } flex-col items-center justify-center gap-3 md:min-h-[210px] lg:min-h-[260px]`}
                      >
                        {isMiddle && <Badge number={step.number} />}

                        <motion.div
                          className={`w-full max-w-[260px] rounded-md bg-white px-5 py-5 text-center text-[#1c1c1c] shadow-lg transition-transform duration-300 lg:max-w-[300px] lg:py-7 ${
                            isMiddle
                              ? "md:translate-y-4"
                              : "md:-translate-y-4"
                          }`}
                          whileHover={
                            shouldReduceMotion ? {} : { y: -7, scale: 1.02 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <h3
                            className="font-semibold"
                            style={{
                              fontSize: "clamp(0.95rem, 1.2vw, 1.4rem)",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {step.title}
                          </h3>

                          <p
                            className="mt-1.5 text-gray-500"
                            style={{
                              ...smallStyle,
                              fontSize: "clamp(0.72rem, 0.85vw, 1rem)",
                            }}
                          >
                            {step.text}
                          </p>
                        </motion.div>

                        {!isMiddle && <Badge number={step.number} />}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next step"
              className="z-10 ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#F45132] hover:text-white lg:h-9 lg:w-9"
            >
              <motion.span
                whileHover={shouldReduceMotion ? {} : { x: 3 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
              >
                <ChevronRight size={18} />
              </motion.span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ---------- 2. Why Businesses Choose Rodez? ---------- */
const WhyChoose = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`bg-[#1c1c1c] ${SIDE_SPACE} py-16 text-white transition-colors duration-300 md:py-24 lg:py-28 light:bg-[#fafafa] light:text-[#1c1c1c]`}
    >
      <div
        className={`${WRAP} grid items-center gap-10 md:grid-cols-2 lg:gap-20`}
      >
        {/* Text */}
        <Reveal>
          <div>
            <LetterReveal
              align="left"
              className="font-bold leading-[1.1] text-[#fdfaf9] light:text-[#1c1c1c]"
              style={headingStyle}
            >
              Why Businesses Choose Rodez?
            </LetterReveal>

            <p
              className="mt-6 max-w-[620px] text-[#fdfaf9] light:text-[#555555]"
              style={bodyStyle}
            >
              A slow, outdated website can drive customers away before they
              even learn about your business. We create stunning,
              high-performing websites that build trust, capture attention,
              and turn visitors into customers.
            </p>

            <motion.div
              className="mt-8 inline-block"
              whileHover={
                shouldReduceMotion ? {} : { scale: 1.05, y: -3 }
              }
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="inline-block rounded-full bg-[#F45132] px-7 py-3 font-medium text-white transition hover:bg-white hover:text-black sm:px-8 sm:py-3.5"
                style={buttonStyle}
              >
                Discuss Your Business Needs
              </Link>
            </motion.div>
          </div>
        </Reveal>

        {/* Image with hotspots */}
        <Reveal delay={0.15}>
          <motion.div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#d9b99a]"
            whileHover={
              shouldReduceMotion ? {} : { scale: 1.015 }
            }
            transition={{ duration: 0.4 }}
          >
            {COUNTER_IMG && (
              <motion.img
                src={COUNTER_IMG}
                alt="Premium retail counter showcasing a strong brand experience"
                className="h-full w-full object-cover"
                whileHover={
                  shouldReduceMotion ? {} : { scale: 1.06 }
                }
                transition={{ duration: 0.7 }}
              />
            )}

            {hotspots.map((spot, i) => (
              <motion.span
                key={spot.no}
                style={{ left: spot.left, top: spot.top }}
                initial={{
                  opacity: 0,
                  scale: shouldReduceMotion ? 1 : 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.12,
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.2,
                        backgroundColor: "#F45132",
                      }
                }
                className="absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm border border-white/80 bg-black/40 text-[10px] font-semibold text-white backdrop-blur-sm sm:h-7 sm:w-7 sm:text-xs lg:h-8 lg:w-8"
              >
                {spot.no}
              </motion.span>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

/* ---------- 3. From Invisible To Unmissable ---------- */
const BeforeAfter = () => {
  const [mode, setMode] = useState("before");
  const data = results[mode];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`bg-[#1c1c1c] ${SIDE_SPACE} pb-20 pt-4 text-white transition-colors duration-300 md:pb-28 light:bg-[#fafafa] light:text-[#1c1c1c]`}
    >
      <div
        className={`${WRAP} grid items-start gap-8 md:grid-cols-[minmax(0,280px)_1fr] lg:grid-cols-[minmax(0,22%)_1fr] lg:gap-16`}
      >
        {/* Phone mockup */}
        <Reveal className="mx-auto w-full max-w-[240px] md:max-w-none">
          <motion.div
            className="aspect-[9/16] w-full overflow-hidden rounded-md bg-white"
            whileHover={
              shouldReduceMotion ? {} : { y: -7, rotate: -1 }
            }
            transition={{ duration: 0.4 }}
          >
            {PHONE_IMG && (
              <motion.img
                src={PHONE_IMG}
                alt="Instagram profile before and after a marketing strategy"
                className="h-full w-full object-cover object-top"
                whileHover={
                  shouldReduceMotion ? {} : { scale: 1.04 }
                }
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <p
              className="font-medium uppercase text-[#fdfaf9] light:text-[#1c1c1c]"
              style={{
                fontSize: "clamp(0.8rem, 1.05vw, 1.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              <span className="text-[#F45132]">■</span> Same Brand. Better
              Results.
            </p>
          </Reveal>

          <LetterReveal
            align="left"
            className="mt-3 font-bold leading-[1.1] text-[#fdfaf9] light:text-[#1c1c1c]"
            style={headingStyle}
          >
            From Invisible To Unmissable
          </LetterReveal>

          <Reveal delay={0.15}>
            <p
              className="mt-5 max-w-[900px] text-[#fdfaf9] light:text-[#555555]"
              style={bodyStyle}
            >
              The right strategy can completely change how your brand performs
              on Instagram. Here&apos;s a glimpse of what happens when
              creativity meets consistency and data-driven marketing.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:gap-4">
              {/* Toggle buttons */}
              <div className="flex gap-2 sm:w-[130px] sm:shrink-0 sm:flex-col lg:w-[160px]">
                {["before", "after"].map((key) => {
                  const active = mode === key;

                  return (
                    <motion.button
                      key={key}
                      type="button"
                      onClick={() => setMode(key)}
                      aria-pressed={active}
                      whileHover={
                        shouldReduceMotion ? {} : { scale: 1.04 }
                      }
                      whileTap={
                        shouldReduceMotion ? {} : { scale: 0.96 }
                      }
                      className={`flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-3 font-semibold capitalize transition sm:flex-none sm:py-3 lg:py-3.5 ${
                        active
                          ? "bg-[#F45132] text-white"
                          : "bg-white/90 text-gray-600 hover:bg-white"
                      }`}
                      style={{
                        fontSize: "clamp(0.8rem, 0.95vw, 1.1rem)",
                      }}
                    >
                      <motion.span
                        animate={{
                          rotate: active ? 90 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        {active ? (
                          <Plus size={14} strokeWidth={3} />
                        ) : (
                          <Minus size={14} strokeWidth={3} />
                        )}
                      </motion.span>
                      {key}
                    </motion.button>
                  );
                })}
              </div>

              {/* Result panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : -15,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex-1 rounded-md bg-[#fdfaf9] p-5 text-[#1c1c1c] sm:p-6 lg:p-8"
                >
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {data.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        variants={fadeUp}
                        className="rounded-full bg-[#3a3a3a] px-3 py-1 font-semibold uppercase tracking-wide text-white"
                        style={{
                          fontSize: "clamp(0.6rem, 0.72vw, 0.85rem)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <h3
                    className="mt-5 font-semibold"
                    style={{
                      fontSize: "clamp(1rem, 1.25vw, 1.5rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {data.title}
                  </h3>

                  <p className="mt-2 text-gray-600" style={smallStyle}>
                    {data.intro}
                  </p>

                  <p className="mt-4 font-bold" style={smallStyle}>
                    {data.listTitle}
                  </p>

                  <motion.ul
                    className="mt-2 list-disc space-y-1 pl-5 text-gray-600 marker:text-[#F45132]"
                    style={smallStyle}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {data.points.map((point) => (
                      <motion.li
                        key={point}
                        variants={fadeUp}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <p className="mt-4 font-bold" style={smallStyle}>
                    Result:
                  </p>

                  <p className="mt-1 text-gray-600" style={smallStyle}>
                    {data.result}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ---------- Export ---------- */
const WordpressProcess = () => (
  <div className="bg-[#1c1c1c] text-white transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
    <HowWeHelp />
    <WhyChoose />
    <BeforeAfter />
  </div>
);

export default WordpressProcess;