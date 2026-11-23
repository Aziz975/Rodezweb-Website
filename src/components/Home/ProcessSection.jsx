
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Deep research and discovery to uncover opportunities.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "Data-driven planning to set clear goals, channels, and a roadmap.",
  },
  {
    number: "03",
    title: "Execute",
    text: "Design, development, and campaigns brought to life with precision.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Continuous testing and improvement to drive long-term growth.",
  },
];

/* Scroll progress at which cards 02, 03 and 04 appear */
const THRESHOLDS = [0.2, 0.45, 0.7];

export default function ProcessSection() {
  const trackRef = useRef(null);
  const headingRef = useRef(null);

  const [count, setCount] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  /*
    Replay the animation whenever the heading enters
    the viewport again.
  */
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1);
          setCount(1);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(heading);

    return () => observer.disconnect();
  }, []);

  /*
    Existing scroll progress logic.
    Cards appear one by one as the user scrolls.
  */
  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;

      const el = trackRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;

      const progress =
        total > 0
          ? Math.min(1, Math.max(0, -rect.top / total))
          : 0;

      const next =
        1 + THRESHOLDS.filter((t) => progress >= t).length;

      setCount((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* Heading animation */
  const headingAnimation = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* Description animation */
  const descriptionAnimation = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.2,
        ease: "easeOut",
      },
    },
  };

  /* Panel animation */
  const panelAnimation = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.94,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.9,
        delay: shouldReduceMotion ? 0 : 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* Individual process card animation */
  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 65,
      scale: shouldReduceMotion ? 1 : 0.88,
      rotateX: shouldReduceMotion ? 0 : -12,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="pr-root w-full overflow-x-clip bg-[color:var(--pr-bg)] pt-12 font-['Manrope',sans-serif] text-[color:var(--pr-text)] sm:pt-16 lg:pt-8">

      <style>{`
        /* ---------- Dark mode ---------- */
        .pr-root {
          --pr-bg: #1c1c1c;
          --pr-bg-0: rgba(28, 28, 28, 0);
          --pr-text: #ffffff;
          --pr-text-soft: rgba(255, 255, 255, 0.9);
          --pr-border: rgba(255, 255, 255, 0.8);
          --pr-panel: #5c3d5e;

          transition:
            background-color .3s ease,
            color .3s ease;
        }

        /* ---------- Bright mode ---------- */
        html.light .pr-root {
          --pr-bg: #ffffff;
          --pr-bg-0: rgba(255, 255, 255, 0);
          --pr-text: #1c1c1c;
          --pr-text-soft: rgba(28, 28, 28, 0.85);
          --pr-border: rgba(28, 28, 28, 0.8);
          --pr-panel: #8b668d;
        }

        .pr-panel {
          transition: background-color .3s ease;
        }

        .pr-step-card {
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .pr-step-card:hover {
          box-shadow: 0 20px 45px rgba(0, 0, 0, .18);
        }

        @media (prefers-reduced-motion: reduce) {
          .pr-root,
          .pr-panel {
            transition: none !important;
          }

          .pr-step-card:hover {
            transform: none !important;
          }
        }
      `}</style>

      {/* Heading and description */}
      <div
        ref={headingRef}
        className="mx-auto flex w-full max-w-[1300px] flex-col items-center px-5 text-center sm:px-6"
      >
        <motion.div
          key={`label-${animationKey}`}
          variants={headingAnimation}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-[2px] border border-[color:var(--pr-border)]" />

          <span className="text-[10px] font-bold uppercase tracking-wide text-[color:var(--pr-text-soft)] sm:text-[11px]">
            Our Process
          </span>
        </motion.div>

        <motion.h2
          key={`heading-${animationKey}`}
          variants={headingAnimation}
          initial="hidden"
          animate="visible"
          className="mt-4 text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          The Roadmap Behind Every <br className="hidden sm:block" />
          Successful Project
        </motion.h2>

        <motion.p
          key={`description-${animationKey}`}
          variants={descriptionAnimation}
          initial="hidden"
          animate="visible"
          className="mt-5 max-w-[900px] text-[13px] font-semibold leading-relaxed text-[color:var(--pr-text-soft)] sm:text-[15px]"
        >
          Every successful project follows a proven path. Our collaborative
          process ensures that every solution is strategically planned,
          expertly executed, and continuously optimized for long-term growth.
        </motion.p>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        className="relative mt-10 h-[280vh] lg:mt-16 lg:h-[300vh]"
      >
        <div className="sticky top-20 px-5 sm:top-24 sm:px-6">

          {/* Animated panel */}
          <motion.div
            key={`panel-${animationKey}`}
            variants={panelAnimation}
            initial="hidden"
            animate="visible"
            className="pr-panel relative mx-auto h-[calc(100svh-6.5rem)] max-h-[760px] min-h-[520px] w-full max-w-[1200px] overflow-hidden rounded-xl bg-[color:var(--pr-panel)]"
            style={{
              backgroundImage: [
                "linear-gradient(to bottom, var(--pr-bg) 0%, var(--pr-bg-0) 45%)",
                "radial-gradient(ellipse 55% 45% at 0% 100%, var(--pr-bg) 0%, var(--pr-bg-0) 70%)",
                "radial-gradient(ellipse 45% 40% at 100% 0%, var(--pr-bg) 0%, var(--pr-bg-0) 70%)",
              ].join(", "),
            }}
          >

            {/* Process cards */}
            <div className="grid h-full grid-cols-2 content-end gap-3 p-4 sm:p-6 lg:grid-cols-4 lg:items-center lg:content-center lg:gap-5 lg:px-8 lg:py-0">

              {steps.map((step, i) => {
                const isVisible = i < count;

                return (
                  <motion.article
                    key={`${step.number}-${animationKey}`}
                    variants={cardAnimation}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="pr-step-card w-full rounded-2xl bg-white p-4 text-[#1c1c1c] shadow-xl sm:p-5 lg:p-6"
                    style={{
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                    aria-hidden={!isVisible}
                  >
                    <p className="text-[clamp(2.75rem,5.2vw,4.75rem)] font-extralight leading-none">
                      {step.number}
                    </p>

                    <h3 className="mt-6 text-[16px] font-semibold sm:mt-8 lg:text-[18px]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-snug text-gray-500 lg:text-[13px]">
                      {step.text}
                    </p>
                  </motion.article>
                );
              })}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
