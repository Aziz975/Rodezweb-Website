import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/*
  Services section – pinned scroll sequence (desktop).

  1. Page scrolls normally until this section fully fills the screen.
     At that moment the robot background is NOT visible yet.
  2. The section then stays pinned (constant) while you keep scrolling,
     and the robot image rises from the bottom, passes through the
     screen and leaves from the top.
  3. Once the robot has gone, the pin is released and the page
     continues scrolling as usual.

  On mobile / tablet the section scrolls normally with a static
  background (a pinned screen would clip the stacked content).
*/

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
    href: "/services/seo",
  },
  {
    title: "Social Media Marketing",
    tags: ["Content Strategy", "Instagram", "LinkedIn"],
    text: "We build engaging social media presences that grow your audience, strengthen your brand, and turn followers into customers.",
    href: "/services/social-media-marketing",
  },
  {
    title: "Performance Marketing",
    tags: ["Google Ads", "Meta Ads", "Conversion Tracking"],
    text: "We run measurable paid campaigns focused on leads, sales, and return on ad spend, optimised continuously with real data.",
    href: "/services/performance-marketing",
  },
  {
    title: "E-Commerce Solutions",
    tags: ["Store Setup", "Payment Gateway", "Product Management"],
    text: "We design and launch fast, secure online stores that make it easy for customers to browse, buy, and come back again.",
    href: "/services/e-commerce",
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

/* Service detail content */
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
        y: reduceMotion ? 0 : -15,
        filter: reduceMotion ? "none" : "blur(4px)",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sv-fade"
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
  const [animationKey, setAnimationKey] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  /* Pinned scroll effect only on large screens, and not for reduced motion */
  const pinned = isDesktop && !shouldReduceMotion;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /*
    Scroll progress of the tall outer wrapper:
    0 -> wrapper top touches viewport top (section fully on screen)
    1 -> wrapper bottom touches viewport bottom (pin is released)
  */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Robot: starts below the screen, rises, and leaves through the top */
  const robotY = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "-100%"]
  );

  /*
    Replay entrance animations every time the section
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
      { threshold: 0 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* Main section entrance */
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* Staggered service list entrance */
  const listItemVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -45,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : 0.12 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  /* Number animation */
  const numberVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    /* Tall outer wrapper = the scroll distance of the pinned sequence */
    <section
      ref={sectionRef}
      className={`sv-root relative w-full font-['Manrope',sans-serif] text-[color:var(--sv-text)] ${
        pinned ? "h-[300vh]" : ""
      }`}
    >
      <style>{`
        /* ---------- Dark mode (default) ---------- */
        .sv-root {
          --sv-bg: #050608;
          --sv-text: #ffffff;
          --sv-num-active: rgba(255, 255, 255, 0.8);
          --sv-num-idle: rgba(255, 255, 255, 0.4);
          --sv-title-idle: rgba(255, 255, 255, 0.45);
          --sv-title-hover: rgba(255, 255, 255, 0.7);
          --sv-chip: #f1f1f1;
          --sv-chip-text: #1c1c1c;
          --sv-overlay: linear-gradient(rgba(5, 6, 8, 0.82), rgba(5, 6, 8, 0.7));

          background-color: var(--sv-bg);
          transition:
            background-color .3s ease,
            color .3s ease;
        }

        /* ---------- Bright mode ---------- */
        html.light .sv-root {
          --sv-bg: #ffffff;
          --sv-text: #1c1c1c;
          --sv-num-active: rgba(28, 28, 28, 0.8);
          --sv-num-idle: rgba(28, 28, 28, 0.35);
          --sv-title-idle: rgba(28, 28, 28, 0.4);
          --sv-title-hover: rgba(28, 28, 28, 0.7);
          --sv-chip: #1c1c1c;
          --sv-chip-text: #ffffff;
          --sv-overlay: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.55));
        }

        .sv-title-idle:hover {
          color: var(--sv-title-hover);
        }

        .sv-service-button {
          transition: color .3s ease;
        }

        .sv-service-button:hover .sv-service-number {
          color: #f05a2d;
        }

        @media (prefers-reduced-motion: reduce) {
          .sv-root {
            transition: none !important;
          }

          .sv-service-button,
          .sv-fade {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* Sticky stage: stays fixed on screen while the wrapper scrolls */}
      <div
        className={`relative isolate w-full overflow-hidden py-14 sm:py-20 lg:py-0 ${
          pinned
            ? "sticky top-0 flex h-screen items-center"
            : ""
        }`}
      >
        {/* Robot background layer (moves up with scroll) */}
        <motion.div
          aria-hidden="true"
          style={pinned ? { y: robotY } : undefined}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/robot-bg.jpg')" }}
          />
         
        </motion.div>

        <div className="relative mx-auto grid w-full max-w-[1300px] gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">

          {/* Left: numbered service list */}
          <motion.ul
            key={`service-list-${animationKey}`}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 sm:gap-8 lg:gap-9"
          >
            {services.map((service, i) => {
              const isActive = i === active;

              return (
                <motion.li
                  key={service.title}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-pressed={isActive}
                    whileHover={
                      shouldReduceMotion ? undefined : { x: 7 }
                    }
                    className="sv-service-button flex w-full items-start gap-4 text-left sm:gap-5"
                  >
                    {/* Number */}
                    <motion.span
                      variants={numberVariants}
                      initial="hidden"
                      animate="visible"
                      className={`sv-service-number w-8 shrink-0 pt-[0.55em] text-[clamp(1.1rem,2.3vw,2.4rem)] font-light leading-none transition-colors duration-300 sm:w-12 lg:w-14 ${
                        isActive
                          ? "text-[color:var(--sv-num-active)]"
                          : "text-[color:var(--sv-num-idle)]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>

                    {/* Service title */}
                    <span
                      className={`text-[clamp(1.6rem,3.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "text-[color:var(--sv-text)]"
                          : "sv-title-idle text-[color:var(--sv-title-idle)]"
                      }`}
                    >
                      {service.title}
                    </span>
                  </motion.button>

                  {/* Mobile / tablet detail */}
                  <div className="mt-5 pl-12 sm:pl-[68px] lg:hidden">
                    <AnimatePresence mode="wait" initial={false}>
                      {isActive && (
                        <Detail
                          key={`${service.title}-${animationKey}`}
                          service={service}
                          reduceMotion={shouldReduceMotion}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Right: desktop detail panel */}
          <div className="hidden lg:flex lg:items-center">
            <AnimatePresence mode="wait" initial={false}>
              <Detail
                key={`${active}-${animationKey}`}
                service={services[active]}
                reduceMotion={shouldReduceMotion}
              />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

