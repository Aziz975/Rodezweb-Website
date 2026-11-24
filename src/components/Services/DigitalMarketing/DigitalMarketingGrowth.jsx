import React, { useRef, useState } from "react";
import { ArrowRight, PieChart, User, Navigation } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "motion/react";

/* ---------- Image Sources ---------- */
const BANNER_IMG = "";

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

const cardTitleStyle = {
  fontSize: "clamp(0.95rem, 1.2vw, 1.45rem)",
  letterSpacing: "-0.02em",
};

/* ---------- Animation Variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
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
  as: Tag = "h2",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });
  const shouldReduceMotion = useReducedMotion();

  const words = children.split(" ");

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      aria-label={children}
    >
      <span className="sr-only">{children}</span>

      <span aria-hidden="true" className="inline-flex flex-wrap justify-center">
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
    </Tag>
  );
};

/* ---------- Google G Icon ---------- */
const GoogleG = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.64 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.7 12 2.7 6.92 2.7 2.8 6.82 2.8 11.9S6.92 21.1 12 21.1c5.28 0 8.78-3.71 8.78-8.94 0-.6-.07-1.06-.15-1.06z" />
  </svg>
);

/* ---------- Stats ---------- */
const stats = [
  {
    value: "+81%",
    label: "Customers Research Online Before Purchase",
  },
  {
    value: "+160",
    label: "Businesses Empowered",
  },
  {
    value: "99%",
    label: "Client Satisfaction Rate",
  },
];

/* ---------- Services with Individual Images ---------- */
const services = [
  {
    no: "01",
    title: "Search Engine Optimization (SEO)",
    text: "Increase visibility and attract customers actively searching for your services.",
    src: "/images/home-one-featured-img.webp",
  },
  {
    no: "02",
    title: "Social Media Marketing",
    text: "Build awareness, engagement, and meaningful customer relationships.",
    src: "/images/why-rodezweb.png",
  },
  {
    no: "03",
    title: "Paid Advertising",
    text: "Reach the right audience and accelerate business growth through targeted campaigns.",
    src: "/images/web-fast-loading.png",
  },
  {
    no: "04",
    title: "Content Marketing",
    text: "Create valuable content that educates, engages, and converts.",
    src: "/images/wp-redesign.png",
  },
  {
    no: "05",
    title: "Marketing Strategy & Consulting",
    text: "A growth roadmap built around your business objectives.",
    src: "/images/wp-redesign.png",
  },
];

/* ---------- Benefits ---------- */
const benefits = [
  {
    title: "Generate More Leads",
    text: "Reach people actively looking for your products or services.",
    Icon: PieChart,
    color: "text-[#5b6cff]",
    bg: "bg-[#5b6cff]/20",
  },
  {
    title: "Increase Brand Awareness",
    text: "Stay visible and top-of-mind within your industry.",
    Icon: GoogleG,
    color: "text-[#ff4d4d]",
    bg: "bg-[#ff4d4d]/20",
  },
  {
    title: "Improve Customer Acquisition",
    text: "Attract the right audience and convert them into customers.",
    Icon: User,
    color: "text-[#2dd4bf]",
    bg: "bg-[#2dd4bf]/20",
  },
  {
    title: "Drive Sustainable Growth",
    text: "Build long-term visibility and consistent opportunities.",
    Icon: Navigation,
    color: "text-[#ec4899]",
    bg: "bg-[#ec4899]/20",
  },
];

const DigitalMarketingGrowth = () => {
  const [open, setOpen] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`bg-[#1c1c1c] ${SIDE_SPACE} py-16 text-white transition-colors duration-300 md:py-24 lg:py-28 light:bg-[#fafafa] light:text-[#1c1c1c]`}
    >
      <div className={WRAP}>
        {/* ---------- Stats Banner ---------- */}
        <Reveal>
          <motion.div
            className="relative overflow-hidden rounded-md bg-gradient-to-r from-[#1a2a7a] via-[#1d3a9e] to-[#0f1f5c]"
            whileHover={
              shouldReduceMotion ? {} : { scale: 1.01 }
            }
            transition={{ duration: 0.4 }}
          >
            {BANNER_IMG && (
              <motion.img
                src={BANNER_IMG}
                alt="Why digital marketing matters"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2 }}
              />
            )}

            <div className="absolute inset-0 bg-black/30" />

            <motion.div
              className="relative grid grid-cols-1 items-center gap-8 px-6 py-9 text-center text-white sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-10 lg:py-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.value}
                  variants={fadeUp}
                  whileHover={
                    shouldReduceMotion ? {} : { y: -6 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="font-bold leading-none"
                    style={{
                      fontSize: "clamp(2.5rem, 3.9vw, 4.75rem)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="mx-auto mt-3 max-w-[230px] font-semibold text-gray-100"
                    style={{
                      fontSize: "clamp(0.7rem, 0.85vw, 1rem)",
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}

              <motion.h3
                variants={fadeUp}
                className="font-bold leading-tight sm:col-span-2 lg:col-span-1 lg:text-left"
                style={{
                  fontSize: "clamp(1.25rem, 1.7vw, 2.1rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Why Digital Marketing Matters
              </motion.h3>
            </motion.div>
          </motion.div>
        </Reveal>

        {/* ---------- Growth Solutions Heading ---------- */}
        <div className="mt-16 text-center lg:mt-24">
          <LetterReveal
            className="font-bold leading-[1.1] text-[#fdfaf9] light:text-[#1c1c1c]"
            style={headingStyle}
          >
            Growth Solutions Tailored To Your Business
          </LetterReveal>

          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-5 max-w-[760px] text-[#fdfaf9] light:text-[#555555]"
              style={bodyStyle}
            >
              No two businesses grow the same way. That&apos;s why we create
              customized strategies based on your goals, audience, and market.
            </p>
          </Reveal>
        </div>

        {/* ---------- Services Accordion ---------- */}
        <div className="mt-10 flex flex-col gap-3 lg:mt-14 lg:gap-4">
          {services.map((item, i) => {
            const isOpen = open === i;

            return (
              <Reveal key={item.no} delay={i * 0.06}>
                <motion.div
                  className={`rounded-md bg-[#242424] transition-all duration-300 light:bg-white light:border light:border-[#e5e5e5] ${
                    isOpen ? "p-3 sm:p-4 lg:p-5" : "sm:mx-3 lg:mx-6"
                  }`}
                  whileHover={
                    shouldReduceMotion ? {} : { y: -3 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    whileTap={
                      shouldReduceMotion ? {} : { scale: 0.99 }
                    }
                    className="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 px-2 py-3 text-left md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-8 md:py-3.5 lg:px-4 lg:py-4"
                  >
                    <span className="flex items-center gap-3 lg:gap-5">
                      <span
                        className="font-bold text-gray-300 light:text-[#888888]"
                        style={smallStyle}
                      >
                        {item.no}
                      </span>

                      <span
                        className={`font-bold leading-tight ${
                          isOpen
                            ? "text-white light:text-[#1c1c1c]"
                            : "text-gray-200 light:text-[#333333]"
                        }`}
                        style={cardTitleStyle}
                      >
                        {item.title}
                      </span>
                    </span>

                    <span
                      className="order-3 col-span-2 text-gray-400 light:text-[#666666] md:order-none md:col-span-1"
                      style={smallStyle}
                    >
                      {item.text}
                    </span>

                    <motion.span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#F45132] text-[#F45132] transition-all duration-300 hover:bg-[#F45132] hover:text-white lg:h-11 lg:w-11"
                      animate={{
                        backgroundColor: isOpen
                          ? "#F45132"
                          : "transparent",
                        color: isOpen ? "#ffffff" : "#F45132",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        animate={{
                          rotate: isOpen ? -45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight size={18} strokeWidth={3} />
                      </motion.span>
                    </motion.span>
                  </motion.button>

                  {/* ---------- Individual Service Image ---------- */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="service-image"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="h-[clamp(180px,26vw,440px)] w-full overflow-hidden rounded-sm bg-[#d9dedb]"
                          initial={{ scale: 0.97 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.src && (
                            <motion.img
                              src={item.src}
                              alt={item.title}
                              loading="lazy"
                              className="h-full w-full object-cover"
                              whileHover={
                                shouldReduceMotion
                                  ? {}
                                  : { scale: 1.04 }
                              }
                              transition={{ duration: 0.5 }}
                            />
                          )}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* ---------- Benefits Heading ---------- */}
        <div className="mt-20 text-center lg:mt-32">
          <LetterReveal
            className="mx-auto max-w-[1000px] font-bold leading-[1.1] text-[#fdfaf9] light:text-[#1c1c1c]"
            style={headingStyle}
          >
            What Effective Digital Marketing Can Do For Your Business
          </LetterReveal>
        </div>

        {/* ---------- Benefits Cards ---------- */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {benefits.map(({ title, text, Icon, color, bg }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="flex flex-col items-center rounded-md bg-[#242424] px-5 py-7 text-center transition duration-300 light:bg-white light:border light:border-[#e5e5e5] lg:px-7 lg:py-10"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -9,
                      scale: 1.02,
                    }
              }
              whileTap={
                shouldReduceMotion ? {} : { scale: 0.98 }
              }
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className={`flex h-11 w-11 items-center justify-center rounded-full lg:h-14 lg:w-14 ${bg}`}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotate: 12,
                        scale: 1.12,
                      }
                }
                transition={{ duration: 0.35 }}
              >
                <Icon className={`h-5 w-5 lg:h-6 lg:w-6 ${color}`} />
              </motion.span>

              <h3
                className="mt-4 font-bold leading-snug text-[#fdfaf9] light:text-[#1c1c1c]"
                style={cardTitleStyle}
              >
                {title}
              </h3>

              <p
                className="mt-2 max-w-[280px] text-gray-400 light:text-[#666666]"
                style={smallStyle}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketingGrowth;