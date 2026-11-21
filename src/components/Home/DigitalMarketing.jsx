
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

/* ---------- Animation Variants ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ---------- Approach Cards ---------- */

const approachCards = [
  {
    title: "Strategy & Vision",
    text: "We begin with a clear understanding of your business, goals, audience, and long-term vision to build a strong foundation for growth.",
    tags: ["Strategy", "Research", "Vision"],
    button: "Explore Strategy",
    image: "/images/homeimg1.png",
  },
  {
    title: "Creative & Design",
    text: "We transform ideas into meaningful visual experiences through creative design, thoughtful branding, and engaging digital interfaces.",
    tags: ["Branding", "UI/UX", "Creative"],
    button: "Explore Design",
    image: "/images/homeimg2.png",
  },
  {
    title: "Development & Growth",
    text: "We bring ideas to life with modern technology, scalable development, and digital experiences designed for long-term growth.",
    tags: ["Development", "Technology", "Growth"],
    button: "Explore Development",
    image: "/images/homeimg3.png",
  },
];

/* ---------- Section Label ---------- */

function Label({ children, variant = "corner" }) {
  return (
    <div className="flex items-center gap-2">
      {variant === "square" ? (
        <span className="h-2.5 w-2.5 rounded-[2px] border-[1.5px] border-[#f05a2d]" />
      ) : (
        <span className="h-2.5 w-2.5 rounded-tl-[3px] border-l-[1.5px] border-t-[1.5px] border-[#f05a2d]" />
      )}

      <span className="text-[10px] font-semibold uppercase tracking-wide text-[color:var(--dm-text-soft)] sm:text-[11px]">
        {children}
      </span>
    </div>
  );
}

/* ---------- Icons ---------- */

const QuoteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7 text-[#f05a2d] lg:h-9 lg:w-9"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4.5 6.5C2.6 8 2 10 2 12.5V18h6.5v-6H5.2c0-1.7.6-2.9 1.9-3.8L4.5 6.5zm10.5 0c-1.9 1.5-2.5 3.5-2.5 6V18H19v-6h-3.3c0-1.7.6-2.9 1.9-3.8L15 6.5z" />
  </svg>
);

const TrophyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-[#f05a2d] lg:h-5 lg:w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
    <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
  </svg>
);

/* ---------- Main Component ---------- */

export default function DigitalMarketing() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
      };

  const entrance = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <div className="dm-root min-h-screen w-full overflow-x-hidden bg-[color:var(--dm-bg)] pb-24 font-['Manrope',sans-serif] text-[color:var(--dm-text)] lg:pb-40">

      <style>{`
        .dm-root {
          --dm-bg: #1c1c1c;
          --dm-card: #242424;
          --dm-text: #ffffff;
          --dm-text-soft: rgba(255, 255, 255, 0.9);
          --dm-text-muted: rgba(255, 255, 255, 0.8);
          --dm-border: rgba(255, 255, 255, 0.9);
          --dm-panel: #ffffff;
          --dm-panel-text: #1c1c1c;
          --dm-panel-muted: #6b7280;
          --dm-chip: #f1f1f1;
          --dm-chip-text: #1c1c1c;
          --dm-img-bg: #f1f1f1;
          transition: background-color .3s ease, color .3s ease;
        }

        html.light .dm-root {
          --dm-bg: #ffffff;
          --dm-card: #f1f1f1;
          --dm-text: #1c1c1c;
          --dm-text-soft: rgba(28, 28, 28, 0.85);
          --dm-text-muted: rgba(28, 28, 28, 0.75);
          --dm-border: rgba(28, 28, 28, 0.85);
          --dm-panel: #1c1c1c;
          --dm-panel-text: #ffffff;
          --dm-panel-muted: #a3a3a3;
          --dm-chip: #1c1c1c;
          --dm-chip-text: #ffffff;
          --dm-img-bg: #e4e4e4;
        }

        .dm-fade {
          animation: dm-fade .5s ease both;
        }

        @keyframes dm-fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dm-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .dm-float {
          animation: dm-float 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .dm-fade,
          .dm-float {
            animation: none !important;
          }

          .dm-root {
            transition: none;
          }
        }
      `}</style>

      {/* ===================== HERO ===================== */}

      <section className="mx-auto w-full max-w-[1140px] px-5 pt-10 sm:px-6 lg:pt-16">

        <motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
          variants={staggerContainer}
          {...entrance}
        >
          <div>
            <motion.div variants={fadeUp}>
              <Label>Full-Service Digital Agency</Label>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-[clamp(2.1rem,4.6vw,3.9rem)] font-extrabold leading-[1.08] tracking-tight"
            >
              Your Growth Starts <br className="hidden sm:block" />
              With Better Digital <br className="hidden sm:block" />
              Marketing
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[440px] text-[13px] font-medium leading-relaxed text-[color:var(--dm-text-soft)] sm:text-[15px]"
            >
              From SEO and paid advertising to web development and branding,
              we help businesses{" "}
              <span className="text-[#f05a2d]">attract</span> more customers,
              generate qualified{" "}
              <span className="text-[#f05a2d]">leads</span>, and{" "}
              <span className="text-[#f05a2d]">scale faster</span> in today’s
              competitive digital landscape.
            </motion.p>
          </div>

          <motion.a
            href="/contact"
            variants={fadeRight}
            whileHover={
              shouldReduceMotion
                ? {}
                : { scale: 1.06, y: -3, boxShadow: "0px 12px 30px rgba(240,90,45,0.3)" }
            }
            whileTap={{ scale: 0.96 }}
            className="inline-flex w-fit items-center rounded-full bg-[#f05a2d] px-5 py-2.5 text-[12px] font-bold text-white transition hover:brightness-110 sm:text-[13px] lg:mt-[150px]"
          >
            + Get a Free Consultation
          </motion.a>
        </motion.div>

        {/* ---------- Bento Grid ---------- */}

        <motion.div
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:h-[560px] lg:grid-cols-3 lg:gap-8"
          variants={staggerContainer}
          {...reveal}
        >

          {/* Left Column */}

          <motion.div
            variants={cardReveal}
            className="flex flex-col gap-3 lg:gap-5"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
              className="flex items-center gap-3 rounded-[10px] bg-[color:var(--dm-panel)] p-4 text-[color:var(--dm-panel-text)] lg:min-h-0 lg:flex-[40] lg:px-5"
            >
              <div className="flex shrink-0">
                {[0, 1, 2].map((n) => (
                  <img
                    key={n}
                    src="/images/avtar.png"
                    alt=""
                    className="-ml-3 h-9 w-9 rounded-full border-2 border-[color:var(--dm-panel)] bg-gray-300 object-cover first:ml-0 lg:h-11 lg:w-11"
                  />
                ))}
              </div>

              <div>
                <p className="text-[14px] font-bold leading-tight lg:text-[16px]">
                  200+ Businesses
                  <br />
                  Empowered
                </p>

                <p className="mt-1 text-[10px] leading-snug text-[color:var(--dm-panel-muted)] lg:text-[11px]">
                  Helping brands across industries build a stronger digital
                  presence.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="flex min-h-[230px] flex-col justify-between rounded-[10px] border border-[color:var(--dm-border)] p-4 lg:min-h-0 lg:flex-[128] lg:p-6"
            >
              <div>
                <QuoteIcon />

                <p className="mt-3 text-[13px] font-bold leading-snug lg:text-[15px]">
                  Every strategy is backed by insights, analytics, and
                  measurable performance.
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold lg:text-5xl">92%</p>
                <p className="mt-1 text-[11px] text-[color:var(--dm-text-soft)] lg:text-[12px]">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Center Column */}

          <motion.div
            variants={cardReveal}
            className="flex flex-col gap-3 lg:gap-4"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
              className="min-h-[340px] overflow-hidden rounded-[10px] bg-[color:var(--dm-img-bg)] lg:min-h-0 lg:flex-[138]"
            >
              <motion.img
                src="/images/redhelmet.webp"
                alt=""
                className="h-full min-h-[340px] w-full object-cover lg:min-h-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.07 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="flex items-center justify-between rounded-[10px] bg-[#f05a2d] px-4 py-4 text-white lg:min-h-0 lg:flex-[29] lg:px-5 lg:py-0"
            >
              <div>
                <p className="text-xl font-bold leading-none lg:text-2xl">
                  20+
                </p>
                <p className="mt-1 text-[10px] font-semibold lg:text-[12px]">
                  Global Awards
                </p>
              </div>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white lg:h-10 lg:w-10">
                <TrophyIcon />
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column */}

          <motion.div
            variants={cardReveal}
            className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1 lg:my-1 lg:gap-4"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="flex min-h-[230px] flex-col justify-between rounded-[10px] border border-[color:var(--dm-border)] p-4 lg:min-h-0 lg:flex-[125] lg:p-6"
            >
              <p className="text-[13px] font-bold leading-snug lg:text-[15px]">
                We create{" "}
                <span className="text-[#f05a2d]">
                  powerful digital experiences
                </span>{" "}
                through strategic marketing, creative design, and innovative
                technology that help businesses grow online.
              </p>

              <div>
                <p className="text-4xl font-bold lg:text-5xl">5K+</p>
                <p className="mt-1 text-[11px] text-[color:var(--dm-text-soft)] lg:text-[12px]">
                  Projects Delivered
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              className="flex items-center justify-center gap-3 rounded-[10px] bg-[color:var(--dm-panel)] px-4 py-4 text-[color:var(--dm-panel-text)] lg:min-h-0 lg:flex-[27] lg:py-0"
            >
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#f05a2d]/40">
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-[#f05a2d]"
                />
              </span>

              <span className="text-[12px] font-semibold lg:text-[14px]">
                Available For Work
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== OUR APPROACH ===================== */}

      <section className="mx-auto mt-24 w-full max-w-[1300px] px-5 sm:px-6 lg:mt-48">

        <motion.div {...reveal} variants={fadeUp}>
          <Label variant="square">Our Approach</Label>
        </motion.div>

        <motion.h2
          {...reveal}
          variants={fadeUp}
          className="mt-4 text-[clamp(1.6rem,3.5vw,3.5rem)] font-extrabold leading-[1.45] tracking-tight"
        >
          Every great brand begins with a clear{" "}
          <motion.span
            whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
            className="inline-block rounded-md bg-[#f05a2d] px-3 leading-[1.25] text-white sm:px-4"
          >
            vision
          </motion.span>{" "}
          and the{" "}
          <motion.span
            whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
            className="inline-block rounded-md bg-[#f05a2d] px-3 leading-[1.25] text-white sm:px-4"
          >
            courage
          </motion.span>{" "}
          to bring it to life.
        </motion.h2>

        {/* ---------- Animated Approach Cards ---------- */}

        <motion.div
          className="mt-8 flex flex-col gap-2 lg:mt-10 lg:h-[500px] lg:flex-row lg:gap-3"
          {...reveal}
          variants={staggerContainer}
        >
          {approachCards.map((card, i) =>
            i === active ? (
              <motion.article
                key={card.title}
                layout
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, scale: 0.96, x: -20 }
                }
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex min-h-[400px] flex-col overflow-hidden rounded-xl bg-[color:var(--dm-card)] lg:min-h-0 lg:flex-1 lg:flex-row"
              >
                {/* Content */}

                <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:w-[45%] lg:p-12">
                  <motion.h3
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-xl font-bold sm:text-2xl"
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="max-w-[420px] text-[13px] leading-relaxed text-[color:var(--dm-text-muted)] sm:text-[15px]"
                  >
                    {card.text}
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={
                          shouldReduceMotion ? false : { opacity: 0, y: 10 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="rounded-full bg-[color:var(--dm-chip)] px-3 py-1 text-[11px] font-semibold text-[color:var(--dm-chip-text)]"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    type="button"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-1 w-fit rounded-md bg-[#f05a2d] px-4 py-2 text-[12px] font-bold text-white transition hover:brightness-110 sm:text-[13px]"
                  >
                    {card.button}
                  </motion.button>
                </div>

                {/* Active Image */}

                <div className="h-64 overflow-hidden bg-[color:var(--dm-img-bg)] sm:h-80 lg:h-auto lg:w-[55%]">
                  <motion.img
                    initial={
                      shouldReduceMotion ? false : { scale: 1.12, opacity: 0 }
                    }
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    src={card.image}
                    alt={`${card.title} visual`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.article>
            ) : (
              /* Collapsed Image Panels */

              <motion.button
                key={card.title}
                layout
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${card.title}`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                className="theme-fixed group relative h-20 shrink-0 overflow-hidden rounded-xl bg-[color:var(--dm-img-bg)] transition-all duration-500 hover:brightness-95 lg:h-auto lg:w-[12%] lg:flex-none"
              >
                <motion.img
                  src={card.image}
                  alt={`${card.title} preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.12 }}
                  transition={{ duration: 0.7 }}
                />

                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

                <span className="theme-fixed absolute inset-0 hidden rotate-180 items-center justify-center p-3 text-center text-sm font-bold text-white drop-shadow-lg lg:flex [writing-mode:vertical-rl]">
                  {card.title}
                </span>

                <span className="theme-fixed absolute inset-0 flex items-center justify-center px-4 text-sm font-bold text-white drop-shadow-lg lg:hidden">
                  {card.title}
                </span>
              </motion.button>
            )
          )}
        </motion.div>
      </section>

      {/* ===================== OUR SERVICES ===================== */}

      <section className="mx-auto mt-24 w-full max-w-[1300px] px-5 sm:px-6 lg:mt-48">

        <motion.div {...reveal} variants={fadeUp}>
          <Label>Our Services</Label>
        </motion.div>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">

          <motion.h2
            {...reveal}
            variants={fadeLeft}
            className="text-[clamp(2rem,4.2vw,4rem)] font-extrabold leading-[1.08] tracking-tight"
          >
            Digital Solutions <br className="hidden sm:block" />
            That Drive <br className="hidden sm:block" />
            Business Growth
          </motion.h2>

          <motion.p
            {...reveal}
            variants={fadeRight}
            className="max-w-[520px] text-[13px] font-medium leading-relaxed text-[color:var(--dm-text-soft)] sm:text-[15px] lg:self-center"
          >
            From building high-performing websites to executing data-driven
            marketing campaigns, we help businesses establish a stronger
            online presence, attract more customers, and achieve measurable
            growth.
          </motion.p>

        </div>
      </section>

    </div>
  );
}
