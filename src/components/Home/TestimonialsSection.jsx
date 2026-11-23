
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

/* Edit / add testimonials here */
const testimonials = [
  {
    quote:
      "Working with Rodez Web Technologies was one of the best decisions for our business. Their team redesigned our website and improved our online presence, resulting in more inquiries and better customer engagement.",
    name: "BrightEdge Solutions",
    role: "Founder",
    image: "/images/most_Master-Avatar-3.png",
  },
  {
    quote:
      "The team understood our vision from day one and delivered a website that exceeded our expectations. Their communication, professionalism, and attention to detail were outstanding.",
    name: "Nexus Ventures",
    role: "Director",
    image: "/images/most_Master-Avatar-2.png",
  },
  {
    quote:
      "From design to launch, the process was smooth and transparent. Our new website loads faster and looks far more professional than before.",
    name: "Company Name",
    role: "Owner",
    image: "/images/most_Master-Avatar-2.png",
  },
];

/* Responsive cards */
function useItemsPerView() {
  const [n, setN] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const update = () => setN(mq.matches ? 2 : 1);

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  return n;
}

const Chevron = ({ dir }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export default function TestimonialsSection() {
  const perView = useItemsPerView();

  const [page, setPage] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const touchX = useRef(null);
  const sectionRef = useRef(null);

  const shouldReduceMotion = useReducedMotion();

  const pages = [];

  for (let i = 0; i < testimonials.length; i += perView) {
    pages.push(testimonials.slice(i, i + perView));
  }

  /* Reset carousel when responsive layout changes */
  useEffect(() => {
    setPage(0);
  }, [perView]);

  /*
    Restart entrance animations every time the section
    enters the viewport after being outside it.
  */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1);
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const go = (p) => {
    setPage((p + pages.length) % pages.length);
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;

    const diff = e.changedTouches[0].clientX - touchX.current;

    if (Math.abs(diff) > 50) {
      go(diff < 0 ? page + 1 : page - 1);
    }

    touchX.current = null;
  };

  /* Heading animation */
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* Description / label animation */
  const labelVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  /* Testimonial card animation */
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 55,
      scale: shouldReduceMotion ? 1 : 0.94,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="ts-root w-full overflow-x-clip bg-[color:var(--ts-bg)] py-16 font-['Manrope',sans-serif] text-[color:var(--ts-text)] sm:py-20 lg:py-28"
    >
      <style>{`
        /* ---------- Dark mode ---------- */
        .ts-root {
          --ts-bg: #1c1c1c;
          --ts-text: #ffffff;
          --ts-text-soft: rgba(255, 255, 255, 0.9);
          --ts-card: #ffffff;
          --ts-card-border: transparent;
          --ts-dot: #ffffff;

          transition:
            background-color .3s ease,
            color .3s ease;
        }

        /* ---------- Bright mode ---------- */
        html.light .ts-root {
          --ts-bg: #ffffff;
          --ts-text: #1c1c1c;
          --ts-text-soft: rgba(28, 28, 28, 0.85);
          --ts-card: #f1f1f1;
          --ts-card-border: rgba(0, 0, 0, 0.06);
          --ts-dot: rgba(28, 28, 28, 0.25);
        }

        .ts-testimonial-card {
          transition:
            box-shadow .35s ease,
            background-color .3s ease;
        }

        .ts-testimonial-card:hover {
          box-shadow: 0 18px 40px rgba(0, 0, 0, .13);
        }

        .ts-avatar {
          transition: transform .35s ease;
        }

        .ts-testimonial-card:hover .ts-avatar {
          transform: scale(1.1);
        }

        .ts-arrow {
          transition:
            transform .3s ease,
            color .3s ease;
        }

        .ts-arrow:hover {
          transform: scale(1.15);
          color: #f05a2d;
        }

        @media (prefers-reduced-motion: reduce) {
          .ts-root,
          .ts-testimonial-card,
          .ts-avatar,
          .ts-arrow {
            transition: none !important;
          }

          .ts-testimonial-card:hover .ts-avatar {
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-6">

        {/* Heading */}
        <motion.div
          key={`label-${animationKey}`}
          variants={labelVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2"
        >
          <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-[#f05a2d]" />

          <span className="text-[10px] font-semibold uppercase tracking-wide text-[color:var(--ts-text-soft)] sm:text-[11px]">
            Client Testimonials
          </span>
        </motion.div>

        <motion.h2
          key={`heading-${animationKey}`}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.15] tracking-tight"
        >
          Trusted by Businesses That Want to Grow
        </motion.h2>

        {/* Carousel */}
        <div className="mt-8 flex items-center gap-1 sm:mt-10 sm:gap-3 lg:px-2">

          {/* Previous button */}
          <button
            type="button"
            onClick={() => go(page - 1)}
            aria-label="Previous testimonials"
            className="ts-arrow shrink-0 p-1 text-[color:var(--ts-text-soft)]"
          >
            <Chevron dir="left" />
          </button>

          {/* Carousel viewport */}
          <div
            className="min-w-0 flex-1 overflow-hidden"
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${page}-${animationKey}`}
                initial={{
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : 45,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : -35,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex min-w-full gap-3 sm:gap-4"
              >
                {pages[page].map((t, i) => (
                  <motion.figure
                    key={`${t.name}-${i}`}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -7,
                            transition: { duration: 0.25 },
                          }
                    }
                    className="ts-testimonial-card flex grow basis-0 flex-col justify-between rounded-xl border border-[color:var(--ts-card-border)] bg-[color:var(--ts-card)] px-5 py-5 text-center text-[#1c1c1c] sm:px-6"
                  >
                    <blockquote className="text-[13px] font-light italic leading-relaxed text-[#444] sm:text-[15px]">
                      “{t.quote}”
                    </blockquote>

                    <figcaption className="mt-5 flex items-center justify-center gap-3 text-left">
                      <img
                        src={t.image}
                        alt=""
                        loading="lazy"
                        className="ts-avatar h-9 w-9 shrink-0 rounded-full bg-gray-300 object-cover sm:h-10 sm:w-10"
                      />

                      <div className="leading-tight">
                        <p className="text-[11px] font-bold text-[#f05a2d] sm:text-[12px]">
                          {t.name}
                        </p>

                        <p className="mt-0.5 text-[11px] text-gray-600 sm:text-[12px]">
                          {t.role}
                        </p>
                      </div>
                    </figcaption>
                  </motion.figure>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={() => go(page + 1)}
            aria-label="Next testimonials"
            className="ts-arrow shrink-0 p-1 text-[color:var(--ts-text-soft)]"
          >
            <Chevron dir="right" />
          </button>
        </div>

        {/* Navigation dots */}
        <motion.div
          key={`dots-${animationKey}`}
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.3,
          }}
          className="mt-4 flex items-center justify-center"
        >
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === page}
              className="p-1.5"
            >
              <span
                className={`block h-1.5 w-1.5 rounded-full transition-colors ${
                  i === page
                    ? "bg-[#f05a2d]"
                    : "bg-[color:var(--ts-dot)]"
                }`}
              />
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
