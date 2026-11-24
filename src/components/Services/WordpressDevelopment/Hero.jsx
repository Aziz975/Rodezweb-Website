import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaWordpress, FaShopify, FaFigma } from "react-icons/fa";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

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

/* ---------- Hero Component ---------- */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ---------- Banner ---------- */}
      <section className="relative flex h-40 items-center justify-center overflow-hidden sm:h-52 md:h-[340px]">
        {/* Background image */}
        <motion.img
          src="/images/space-man.png"
          alt="WordPress Development Banner"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{
            scale: shouldReduceMotion ? 1 : 1.12,
            opacity: shouldReduceMotion ? 1 : 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Fade into page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-[#1c1c1c] light:to-[#fafafa]" />

        {/* Hero heading */}
        <motion.h1
          className="relative z-10 text-center text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="sr-only">WordPress Development</span>

          <span aria-hidden="true" className="inline-flex">
            {"WordPress Development".split("").map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                className="inline-block"
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 25,
                  rotateX: shouldReduceMotion ? 0 : -60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : 0.35 + i * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>
      </section>

      {/* ---------- Intro Section ---------- */}
      <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr]">
          {/* Intro heading */}
          <Reveal>
            <LetterReveal
              align="left"
              className="text-4xl font-extrabold uppercase leading-[1.05] text-white light:text-[#1c1c1c] sm:text-5xl lg:text-6xl"
            >
              Powerful WordPress Websites Built For Business Growth
            </LetterReveal>
          </Reveal>

          {/* Intro content */}
          <div>
            <Reveal delay={0.15}>
              <p className="text-justify leading-8 text-white light:text-[#555555]">
                From business websites to high-converting eCommerce stores,
                we build WordPress solutions that help brands attract
                customers, generate leads, and scale with confidence.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* CTA button */}
              <Reveal delay={0.25}>
                <motion.div
                  whileHover={
                    shouldReduceMotion ? {} : { scale: 1.05, y: -3 }
                  }
                  whileTap={
                    shouldReduceMotion ? {} : { scale: 0.96 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="inline-block rounded-full bg-neutral-800 px-8 py-3 text-white transition-colors duration-300 hover:bg-[#f15a3a] hover:text-white light:bg-[#eeeeee] light:text-[#1c1c1c]"
                  >
                    Book A Discovery Call
                  </Link>
                </motion.div>
              </Reveal>

              <span className="flex-1" />

              {/* Technology icons */}
              {[FaWordpress, FaShopify, FaFigma].map((Icon, i) => (
                <Reveal key={i} delay={0.3 + i * 0.1}>
                  <motion.span
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-800 text-white transition-colors duration-300 hover:bg-[#f15a3a] hover:text-white light:bg-[#eeeeee] light:text-[#1c1c1c]"
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.15,
                            rotate: 8,
                            y: -5,
                          }
                    }
                    whileTap={
                      shouldReduceMotion ? {} : { scale: 0.9 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={21} />
                  </motion.span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Full-width WordPress Logo Strip ---------- */}
      <Reveal y={45}>
        <motion.div
          className="w-full overflow-hidden"
          whileHover={
            shouldReduceMotion ? {} : { scale: 1.01 }
          }
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/images/wordpress-strip.png"
            alt="WordPress"
            loading="lazy"
            className="max-h-[710px] w-full object-cover"
            initial={{
              scale: shouldReduceMotion ? 1 : 1.06,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{ once: false }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </Reveal>
    </>
  );
}