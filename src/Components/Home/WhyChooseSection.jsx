
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

const plans = [
  {
    title: "Freelancer",
    items: [
      { text: "Affordable for small tasks", ok: true },
      { text: "Direct communication", ok: true },
      { text: "Flexible availability", ok: true },
      { text: "Limited resources", ok: false },
      { text: "Single skill specialization", ok: false },
      { text: "Capacity constraints", ok: false },
      { text: "Limited scalability", ok: false },
    ],
    button: "Common Choice",
  },
  {
    title: "Traditional Agency",
    items: [
      { text: "Multiple specialists", ok: true },
      { text: "Established processes", ok: true },
      { text: "Larger team support", ok: true },
      { text: "Broader service offerings", ok: true },
      { text: "Higher costs", ok: false },
      { text: "Longer turnaround times", ok: false },
      { text: "Less personalized attention", ok: false },
    ],
    button: "Agency Model",
  },
  {
    title: "Rodez Web",
    highlight: true,
    items: [
      { text: "Dedicated project team", ok: true },
      { text: "Personalized client experience", ok: true },
      { text: "Design + Development + Marketing", ok: true },
      { text: "Transparent communication", ok: true },
      { text: "Faster turnaround times", ok: true },
      { text: "Scalable solutions", ok: true },
      { text: "Long-term growth partnership", ok: true },
    ],
    button: "Start Your Project",
    href: "/contact",
  },
];

const Tick = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3 w-3 shrink-0 text-[#f05a2d]"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

const Cross = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3 w-3 shrink-0 text-gray-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 65,
    scale: 0.94,
    filter: "blur(8px)",
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      delay: index * 0.16,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseSection() {
  const sectionRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Restart the animation whenever the section enters the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let wasVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible) {
          wasVisible = true;
          setAnimationKey((prev) => prev + 1);
        } else if (!entry.isIntersecting) {
          wasVisible = false;
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const headingMotion = prefersReducedMotion
    ? {}
    : {
        variants: headingVariants,
        initial: "hidden",
        animate: "visible",
      };

  const cardMotion = prefersReducedMotion
    ? {}
    : {
        variants: cardVariants,
        initial: "hidden",
        animate: "visible",
      };

  return (
    <section
      ref={sectionRef}
      className="wc-root w-full overflow-x-clip bg-[color:var(--wc-bg)] py-16 font-['Manrope',sans-serif] text-[color:var(--wc-text)] sm:py-20 lg:py-28"
    >
      <style>{`
        /* Dark mode - default */
        .wc-root {
          --wc-bg: #1c1c1c;
          --wc-text: #ffffff;
          --wc-text-soft: rgba(255, 255, 255, 0.9);
          --wc-card: #ffffff;
          --wc-card-text: #1c1c1c;
          --wc-card-border: transparent;
          --wc-muted: #6b7280;
          transition: background-color .3s ease, color .3s ease;
        }

        /* Light mode */
        html.light .wc-root {
          --wc-bg: #ffffff;
          --wc-text: #1c1c1c;
          --wc-text-soft: rgba(28, 28, 28, 0.85);
          --wc-card: #f1f1f1;
          --wc-card-text: #1c1c1c;
          --wc-card-border: rgba(0, 0, 0, 0.06);
          --wc-muted: #6b7280;
        }

        @media (prefers-reduced-motion: reduce) {
          .wc-root,
          .wc-root * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-6">
        {/* Section heading */}
        <motion.div
          key={`heading-${animationKey}`}
          {...headingMotion}
        >
          <p className="text-[11px] font-bold uppercase tracking-wide text-[color:var(--wc-text-soft)] sm:text-[12px]">
            Partner with Rodez Web Technologies.
          </p>

          <h2 className="mt-3 max-w-[760px] text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.15] tracking-tight">
            Why Clients Choose Rodez Web Technologies
          </h2>

          {!prefersReducedMotion && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "90px" }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: "easeOut",
              }}
              className="mt-5 h-1 rounded-full bg-[#f05a2d]"
            />
          )}
        </motion.div>

        {/* Comparison cards */}
        <div
          key={`cards-${animationKey}`}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-20 lg:gap-5"
        >
          {plans.map((plan, index) => (
            <motion.article
              key={plan.title}
              custom={index}
              {...cardMotion}
              className="group flex flex-col rounded-2xl border border-[color:var(--wc-card-border)] bg-[color:var(--wc-card)] p-5 text-[color:var(--wc-card-text)] transition-colors duration-300 sm:p-6"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -8,
                      transition: { duration: 0.3 },
                    }
              }
            >
              <motion.h3
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 15 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.16 + 0.25,
                }}
                className="text-[20px] font-normal sm:text-[22px]"
              >
                {plan.title}
              </motion.h3>

              <ul className="mt-6 flex flex-1 flex-col gap-3.5">
                {plan.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.text}
                    initial={
                      prefersReducedMotion
                        ? false
                        : { opacity: 0, x: -15 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: prefersReducedMotion
                        ? 0
                        : index * 0.16 + 0.35 + itemIndex * 0.055,
                      ease: "easeOut",
                    }}
                    className={`flex items-center gap-3 text-[12px] sm:text-[13px] ${
                      item.ok ? "text-[#2a2a2a]" : "text-gray-500"
                    }`}
                  >
                    {item.ok ? <Tick /> : <Cross />}
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Plan button */}
              {plan.highlight ? (
                <motion.a
                  href={plan.href}
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, y: 15 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: prefersReducedMotion
                      ? 0
                      : index * 0.16 + 0.85,
                  }}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -4, scale: 1.02 }
                  }
                  whileTap={
                    prefersReducedMotion
                      ? undefined
                      : { scale: 0.98 }
                  }
                  className="mt-7 block rounded-md bg-[#f05a2d] py-2.5 text-center text-[12px] font-semibold text-white transition hover:brightness-110 sm:text-[13px]"
                >
                  {plan.button}
                </motion.a>
              ) : (
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, y: 15 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: prefersReducedMotion
                      ? 0
                      : index * 0.16 + 0.85,
                  }}
                  className="mt-7 rounded-md bg-[#f05a2d]/55 py-2.5 text-center text-[12px] font-semibold text-white sm:text-[13px]"
                >
                  {plan.button}
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
