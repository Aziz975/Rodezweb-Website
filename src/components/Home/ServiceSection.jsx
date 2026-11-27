
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const services = [
  {
    title: "Website Design & Development",
    tags: ["UI/UX Design", "WordPress", "Shopify"],
    text: "We create modern, responsive, and conversion-focused websites that deliver exceptional user experiences and help businesses grow online.",
    href: "/services/web-development",
  },
  {
    title: "S.E.O",
    tags: ["On-Page SEO", "Technical SEO", "Link Building"],
    text: "We improve your search visibility with data-driven SEO strategies that bring qualified traffic and long-term organic growth.",
    href: "/services/shopify-development",
  },
  {
    title: "Social Media Marketing",
    tags: ["Content Strategy", "Instagram", "LinkedIn"],
    text: "We build engaging social media presences that grow your audience, strengthen your brand, and turn followers into customers.",
    href: "/services/app-development",
  },
  {
    title: "Performance Marketing",
    tags: ["Google Ads", "Meta Ads", "Conversion Tracking"],
    text: "We run measurable paid campaigns focused on leads, sales, and return on ad spend, optimised continuously with real data.",
    href: "/services/digital-marketing",
  },
  {
    title: "E-Commerce Solutions",
    tags: ["Store Setup", "Payment Gateway", "Product Management"],
    text: "We design and launch fast, secure online stores that make it easy for customers to browse, buy, and come back again.",
    href: "/services/wordpress-development",
  },
];

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Detail({ service, reduceMotion }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 25,
        filter: reduceMotion ? "none" : "blur(5px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: reduceMotion ? 0 : -20,
        filter: reduceMotion ? "none" : "blur(4px)",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {service.tags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.35,
              delay: reduceMotion ? 0 : index * 0.07,
            }}
            className="rounded-full bg-[color:var(--sv-chip)] px-5 py-2.5 text-[13px] font-medium text-[color:var(--sv-chip-text)] sm:px-6 sm:py-3 sm:text-[15px]"
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <p className="mt-6 max-w-[600px] text-[15px] font-medium leading-[1.8] text-[color:var(--sv-text)] sm:text-[17px] lg:mt-9 lg:text-[clamp(1.05rem,1.45vw,1.4rem)]">
        {service.text}
      </p>

      <motion.a
        href={service.href}
        whileHover={reduceMotion ? undefined : { x: 5 }}
        className="mt-6 inline-flex items-center gap-3 text-[15px] font-semibold text-[#f05a2d] transition sm:text-[17px] lg:mt-10"
      >
        Learn More <ArrowRight />
      </motion.a>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const pinned = isDesktop && !shouldReduceMotion;

  // Detect desktop screens
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    const update = () => setIsDesktop(mq.matches);

    update();

    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  // Track the complete pinned scroll sequence
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Robot enters from bottom and moves towards top
  const robotY = useTransform(
    scrollYProgress,
    [0, 1],
    ["100vh", "-100vh"]
  );

  // Change service automatically while scrolling
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!pinned) return;

    const index = Math.min(
      services.length - 1,
      Math.floor(progress * services.length)
    );

    setActive(index);
  });

  // Reset the first service when section is entered again
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio > 0 &&
          entry.boundingClientRect.top >= 0
        ) {
          setActive(0);
        }
      },
      { threshold: 0 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`sv-root relative w-full font-['Manrope',sans-serif] text-[color:var(--sv-text)] ${
        pinned ? "h-[600vh]" : ""
      }`}
    >
      <style>{`
        .sv-root {
          --sv-bg: #050608;
          --sv-text: #ffffff;
          --sv-num-active: rgba(255,255,255,.9);
          --sv-num-idle: rgba(255,255,255,.35);
          --sv-title-idle: rgba(255,255,255,.38);
          --sv-title-hover: rgba(255,255,255,.75);
          --sv-chip: #f1f1f1;
          --sv-chip-text: #1c1c1c;

          background-color: var(--sv-bg);
          overflow: clip;
        }

        html.light .sv-root {
          --sv-bg: #ffffff;
          --sv-text: #1c1c1c;
          --sv-num-active: rgba(28,28,28,.85);
          --sv-num-idle: rgba(28,28,28,.3);
          --sv-title-idle: rgba(28,28,28,.35);
          --sv-title-hover: rgba(28,28,28,.7);
          --sv-chip: #1c1c1c;
          --sv-chip-text: #ffffff;
        }

        .sv-service-button {
          transition: color .35s ease, opacity .35s ease;
        }

        .sv-title-idle:hover {
          color: var(--sv-title-hover);
        }

        .sv-service-button:hover .sv-service-number {
          color: #f05a2d;
        }

        @media (prefers-reduced-motion: reduce) {
          .sv-root *,
          .sv-root *::before,
          .sv-root *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Sticky screen */}
      <div
        className={`relative isolate w-full overflow-hidden ${
          pinned
            ? "sticky top-0 flex h-screen min-h-screen items-center"
            : "py-14 sm:py-20"
        }`}
       
      >

        {/* FULL SCREEN ROBOT BACKGROUND */}
        {pinned && (
          <motion.div
            aria-hidden="true"
            style={{
              y: robotY,
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            className="pointer-events-none z-0 flex items-center justify-center"
          >
            <img
              src="/images/robot-bg.jpg"
              alt=""
              draggable="false"
              className="block h-full w-full"
              style={{
                width: "100%",
                height: "180%",
                objectFit: "cover",
                objectPosition: "center center",
                maxWidth: "none",
              }}
            />
          </motion.div>
        )}


        {/* Main content */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1300px] gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">

          {/* Left: Services list */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="mb-9"
            >
              <span className="mb-4 block text-sm font-semibold uppercase tracking-[.25em] text-[#f05a2d]">
                What We Do
              </span>

              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Our Services
              </h2>
            </motion.div>

            <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-9">
              {services.map((service, i) => {
                const isActive = i === active;
                const isPassed = i < active;

                return (
                  <motion.li
                    key={service.title}
                    initial={{
                      opacity: 0,
                      x: shouldReduceMotion ? 0 : -35,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.08,
                    }}
                  >
                    <motion.button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => {
                        if (!pinned) setActive(i);
                      }}
                      onFocus={() => setActive(i)}
                      aria-pressed={isActive}
                      whileHover={
                        shouldReduceMotion ? undefined : { x: 7 }
                      }
                      className="sv-service-button flex w-full items-start gap-4 text-left sm:gap-5"
                      style={{
                        opacity: isActive ? 1 : isPassed ? 0.58 : 0.32,
                      }}
                    >
                      {/* Number */}
                      <span
                        className="sv-service-number w-8 shrink-0 pt-[.55em] text-[clamp(1.1rem,2.3vw,2.4rem)] font-light leading-none transition-colors duration-300 sm:w-12 lg:w-14"
                        style={{
                          color: isActive
                            ? "var(--sv-num-active)"
                            : "var(--sv-num-idle)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Title */}
                      <span
                        className="text-[clamp(1.4rem,3vw,3.2rem)] font-bold leading-[1.05] tracking-tight transition-colors duration-300"
                        style={{
                          color: isActive
                            ? "var(--sv-text)"
                            : "var(--sv-title-idle)",
                        }}
                      >
                        {service.title}
                      </span>

                    </motion.button>

                    {/* Mobile service details */}
                    <div className="mt-5 pl-12 sm:pl-[68px] lg:hidden">
                      <AnimatePresence mode="wait" initial={false}>
                        {isActive && (
                          <Detail
                            key={service.title}
                            service={service}
                            reduceMotion={shouldReduceMotion}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Right: Desktop service details */}
          <div className="hidden lg:flex lg:items-center">
            <div className="w-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  className="w-full"
                  initial={{
                    opacity: 0,
                    x: shouldReduceMotion ? 0 : 30,
                    filter: shouldReduceMotion ? "none" : "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    x: shouldReduceMotion ? 0 : -20,
                    filter: shouldReduceMotion ? "none" : "blur(4px)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Detail
                    service={services[active]}
                    reduceMotion={shouldReduceMotion}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
