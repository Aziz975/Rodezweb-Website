
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

/* Image sources */
const CTA_BG_IMG = "/images/growth-banner.png";

const clients = [
  { name: "Sterling Cancer Hospitals", src: "/images/sterling.png" },
  { name: "Banyan Paradise The Resort", src: "/images/banyan.png" },
  { name: "Swapna Srushti Water Park", src: "/images/swapna.png" },
  { name: "Department of Commerce, Government of India", src: "/images/commerce.png" },
  { name: "CAP India Chemicals & Plastics Exhibition", src: "/images/cap-India.png" },
  { name: "Government of Telangana", src: "/images/govrn-telangana.png" },
  { name: "Eye-care Hospital", src: "/images/eyecare.png" },
  { name: "K.J. Institute of Engineering & Technology", src: "/images/kj-institute.png" },
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

/* ---------- Letter-by-letter heading reveal ---------- */

function LetterReveal({
  text,
  className = "",
  amount = 0.3,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount,
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
      y: shouldReduceMotion ? 0 : 24,
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

  const words = text.split(" ");

  return (
    <motion.h2
      ref={ref}
      className={className}
      aria-label={text}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <React.Fragment key={`${word}-${wordIndex}`}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((letter, letterIndex) => (
                <motion.span
                  key={`${letter}-${letterIndex}`}
                  className="inline-block"
                  variants={letterVariants}
                  style={{ transformOrigin: "bottom" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            {wordIndex !== words.length - 1 && " "}
          </React.Fragment>
        ))}
      </span>
    </motion.h2>
  );
}

/* ---------- CTA card ---------- */

const CtaCard = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -5,
            }
      }
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[22px] bg-[#2b2b2b] shadow-lg sm:rounded-[28px]"
    >
      {CTA_BG_IMG && (
        <motion.img
          src={CTA_BG_IMG}
          alt="Digital marketing strategy consultation"
          initial={{ opacity: 0.6, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            ease: "easeOut",
          }}
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
      )}

      {/* Dark overlay retained for readability over the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c]/90 via-[#1c1c1c]/60 to-[#1c1c1c]/20" />

      <div className="relative px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-9">
        <LetterReveal
          text="Let's Build A Growth Strategy That Delivers Results"
          className="max-w-[1250px] font-bold leading-[1.05]"
          amount={0.25}
        />

        <Reveal delay={0.15}>
          <p
            className="mt-5 max-w-[1400px] text-[#fdfaf9]"
            style={{
              fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
              lineHeight: 1.7,
              letterSpacing: "-0.02em",
            }}
          >
            Whether you're looking to generate more leads, increase sales,
            strengthen your brand, or expand your reach, we'll help you create
            a digital marketing strategy built around measurable business growth.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.06, y: -3 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
            transition={{ type: "spring", stiffness: 250, damping: 16 }}
            className="mt-7 inline-block"
          >
            <Link
              to="/contact"
              className="inline-block rounded-full bg-[#F45132] px-7 py-3 font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black sm:px-8 sm:py-3.5"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 1.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Book A Growth Consultation
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </motion.div>
  );
};

/* ---------- Trusted by carousel ---------- */

const TrustedBy = () => {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const getStep = () => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 1;
    return track.children[1].offsetLeft - track.children[0].offsetLeft;
  };

  const updateActive = () => {
    const track = trackRef.current;
    if (!track) return;

    const index = Math.round(track.scrollLeft / getStep());
    setActive(Math.min(Math.max(index, 0), clients.length - 1));
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateActive, {
      passive: true,
    });

    return () => track.removeEventListener("scroll", updateActive);
  }, []);

  const goTo = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const safe = Math.min(Math.max(index, 0), clients.length - 1);

    track.scrollTo({
      left: safe * getStep(),
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="mt-14 md:mt-20">
      <Reveal>
        <h3
          className="text-center font-medium uppercase text-[#fdfaf9] transition-colors duration-300 light:text-[#1c1c1c]"
          style={{
            fontSize: "clamp(0.8rem, 1.05vw, 1.25rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Trusted by growing businesses across industries
        </h3>
      </Reveal>

      <div className="mt-8 flex items-center gap-2 md:mt-12 md:gap-3">
        {/* Previous button */}

        <motion.button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous logos"
          whileHover={shouldReduceMotion ? {} : { scale: 1.2, x: -3 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
          className="shrink-0 text-[#fdfaf9] transition-colors duration-300 hover:text-[#F45132] light:text-[#555555]"
        >
          <ChevronLeft size={26} strokeWidth={2.5} />
        </motion.button>

        {/* Logo carousel */}

        <div
          ref={trackRef}
          className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] sm:gap-6 lg:gap-[3.7vw] [&::-webkit-scrollbar]:hidden"
        >
          {clients.map((client, index) => (
            <Reveal
              key={client.name}
              delay={index * 0.07}
              amount={0.2}
              className="shrink-0"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -8,
                        scale: 1.045,
                        boxShadow: "0px 12px 25px rgba(244,81,50,0.2)",
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 16,
                }}
                className="flex aspect-square w-[130px] snap-start items-center justify-center overflow-hidden rounded-xl border-2 border-[#F45132] bg-white p-3 transition-colors duration-300 sm:w-[150px] lg:w-[9.6vw] lg:min-w-[150px] lg:max-w-[190px]"
              >
                {client.src ? (
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-center text-[10px] font-medium text-[#1c1c1c]/50 sm:text-xs">
                    {client.name}
                  </span>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Next button */}

        <motion.button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next logos"
          whileHover={shouldReduceMotion ? {} : { scale: 1.2, x: 3 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
          className="shrink-0 text-[#fdfaf9] transition-colors duration-300 hover:text-[#F45132] light:text-[#555555]"
        >
          <ChevronRight size={26} strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* Dots */}

      <Reveal delay={0.15}>
        <div className="mt-3 flex items-center justify-center gap-3">
          {clients.map((client, i) => (
            <motion.button
              key={client.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to logo ${i + 1}`}
              aria-current={active === i}
              whileHover={shouldReduceMotion ? {} : { scale: 1.5 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.85 }}
              animate={{
                scale: active === i ? 1.3 : 1,
              }}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                active === i
                  ? "bg-[#fdfaf9] light:bg-[#1c1c1c]"
                  : "bg-[#fdfaf9]/15 hover:bg-[#fdfaf9]/40 light:bg-[#1c1c1c]/15 light:hover:bg-[#1c1c1c]/40"
              }`}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
};

/* ---------- Export ---------- */

const DigitalMarketingCta = () => (
  <section className="bg-[#1c1c1c] px-5 pb-16 pt-8 text-white transition-colors duration-300 sm:px-8 md:pb-24 lg:px-[7.5%] light:bg-[#fafafa] light:text-[#1c1c1c]">
    <div className="mx-auto max-w-[1700px]">
      <CtaCard />
      <TrustedBy />
    </div>
  </section>
);

export default DigitalMarketingCta;
