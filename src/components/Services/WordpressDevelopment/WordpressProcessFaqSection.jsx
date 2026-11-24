import { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useInView,
    useReducedMotion,
} from "motion/react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaPlus,
    FaMinus,
} from "react-icons/fa";

const ACCENT = "bg-[#f0603a]";

const steps = [
    {
        title: "Discover",
        desc: "Understanding your business, audience, and goals.",
    },
    {
        title: "Plan",
        desc: "Creating the structure, content, and growth strategy.",
    },
    {
        title: "Design & Develop",
        desc: "Building a professional and user-friendly website.",
    },
    {
        title: "Launch & Optimize",
        desc: "Continuous improvements to support long-term success.",
    },
];

const tags = [
    "Growth-Focused Approach",
    "Custom Design & Development",
    "SEO-Ready Foundation",
    "Conversion-Focused Design",
    "Ongoing Support",
];

const faqs = [
    {
        q: "Q. Why should I choose WordPress for my website?",
        a: "WordPress is flexible, SEO-friendly, easy to manage, and suitable for almost every type of website.",
    },
    {
        q: "Q. Can I update the website myself after launch?",
        a: "Yes. We build user-friendly websites that allow you to easily manage content, images, and pages.",
    },
    {
        q: "Q. Do you create custom WordPress websites?",
        a: "Absolutely. Every website is tailored to your brand and business requirements.",
    },
    {
        q: "Q. Will my WordPress website be mobile-friendly?",
        a: "Yes. Every website we develop is fully responsive across all devices.",
    },
    {
        q: "Q. Do you provide maintenance and support?",
        a: "Yes. We offer ongoing support, updates, backups, and security monitoring.",
    },
];

const ease = [0.22, 1, 0.36, 1];

/* ---------------- REUSABLE REVEAL ---------------- */

function Reveal({
    children,
    delay = 0,
    className = "",
    y = 35,
}) {
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
            initial={false}
            animate={
                isInView
                    ? { opacity: 1, y: 0 }
                    : {
                          opacity: 0,
                          y: shouldReduceMotion ? 0 : y,
                      }
            }
            transition={
                shouldReduceMotion
                    ? { duration: 0 }
                    : {
                          duration: 0.75,
                          delay,
                          ease,
                      }
            }
        >
            {children}
        </motion.div>
    );
}

/* ---------------- LETTER REVEAL ---------------- */

function LetterReveal({
    children,
    className = "",
    delay = 0,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        amount: 0.25,
    });
    const shouldReduceMotion = useReducedMotion();

    const words = children.split(" ");

    return (
        <span
            ref={ref}
            className={`inline-block ${className}`}
            aria-label={children}
        >
            <span className="sr-only">{children}</span>

            <span
                aria-hidden="true"
                className="inline-flex flex-wrap"
            >
                {words.map((word, wordIndex) => (
                    <span
                        key={`${word}-${wordIndex}`}
                        className="inline-flex whitespace-nowrap mr-[0.25em]"
                    >
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={`${letter}-${letterIndex}`}
                                className="inline-block"
                                initial={false}
                                animate={
                                    isInView
                                        ? {
                                              opacity: 1,
                                              y: 0,
                                              rotateX: 0,
                                          }
                                        : {
                                              opacity: 0,
                                              y: shouldReduceMotion ? 0 : 22,
                                              rotateX: shouldReduceMotion ? 0 : -45,
                                          }
                                }
                                transition={
                                    shouldReduceMotion
                                        ? { duration: 0 }
                                        : {
                                              duration: 0.5,
                                              delay:
                                                  delay +
                                                  (wordIndex * 5 + letterIndex) *
                                                      0.025,
                                              ease,
                                          }
                                }
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </span>
                ))}
            </span>
        </span>
    );
}

/* ---------------- PROCESS ---------------- */

function Process() {
    const [idx, setIdx] = useState(0);
    const [maxIdx, setMaxIdx] = useState(Math.max(0, steps.length - 3));

    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const touchX = useRef(null);

    const shouldReduceMotion = useReducedMotion();

    // Calculate slider movement based on screen width
    useEffect(() => {
        const measure = () => {
            const vp = viewportRef.current;
            const tr = trackRef.current;
            const first = tr && tr.querySelector("[data-step]");

            if (!vp || !first) return;

            const card = first.offsetWidth;
            const gap = parseFloat(getComputedStyle(tr).columnGap) || 0;
            const total =
                steps.length * card + (steps.length - 1) * gap;

            const max = Math.max(
                0,
                Math.ceil(
                    (total - vp.clientWidth) / (card + gap)
                )
            );

            setMaxIdx(max);
            setIdx((i) => Math.min(i, max));
        };

        measure();

        window.addEventListener("resize", measure);

        return () => window.removeEventListener("resize", measure);
    }, []);

    const prev = () => setIdx((i) => Math.max(0, i - 1));

    const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

    // Swipe support on touch devices
    const onTouchStart = (e) => {
        touchX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        if (touchX.current === null) return;

        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;

        if (Math.abs(dx) > 40) {
            (dx < 0 ? next : prev)();
        }
    };

    return (
        <section
            className="bg-cover bg-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(28,28,28,.6),rgba(28,28,28,.6)), url('/images/wordpress-process-bg.jpg')",
            }}
        >
            <div className="grid gap-12 py-16 lg:min-h-[660px] lg:grid-cols-[382px_minmax(0,1fr)] lg:items-center lg:gap-0 lg:py-[90px]">

                {/* Process introduction card */}
                <Reveal y={40}>
                    <motion.div
                        whileHover={
                            shouldReduceMotion ? {} : { y: -5 }
                        }
                        transition={{ duration: 0.4, ease }}
                        className="bg-[#262626] px-6 py-12 sm:px-9 sm:py-14"
                    >
                        <h2 className="text-center text-4xl font-bold leading-tight text-white md:text-5xl">
                            <LetterReveal>
                                From Strategy To Launch
                            </LetterReveal>
                        </h2>

                        <Reveal delay={0.3}>
                            <p className="mt-8 text-[1.15rem] leading-8 text-white">
                                Whether you’re launching a new business or upgrading an existing presence, we create wordpress websites that align with your objectives and deliver measurable results.
                            </p>
                        </Reveal>
                    </motion.div>
                </Reveal>

                {/* Process carousel */}
                <div className="relative h-[370px] min-w-0">
                    <motion.button
                        aria-label="Previous"
                        onClick={prev}
                        disabled={idx === 0}
                        whileHover={
                            shouldReduceMotion ? {} : { scale: 1.12, x: -3 }
                        }
                        whileTap={
                            shouldReduceMotion ? {} : { scale: 0.9 }
                        }
                        className="absolute left-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md disabled:cursor-not-allowed disabled:opacity-40 lg:left-[13px] lg:h-[50px] lg:w-[50px]"
                    >
                        <FaChevronLeft />
                    </motion.button>

                    <div
                        ref={viewportRef}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                        className="relative mx-14 h-full overflow-hidden [--cw:240px] [--gap:32px] sm:[--cw:280px] sm:[--gap:40px] lg:ml-[63px] lg:mr-[39px] lg:[--cw:325px] lg:[--gap:50px]"
                    >
                        <motion.div
                            ref={trackRef}
                            className="relative flex h-full w-max gap-[var(--gap)]"
                            animate={{
                                x: `calc(-1 * ${idx} * (var(--cw) + var(--gap)))`,
                            }}
                            transition={
                                shouldReduceMotion
                                    ? { duration: 0 }
                                    : {
                                          duration: 0.5,
                                          ease,
                                      }
                            }
                        >
                            {/* Horizontal line behind markers */}
                            <div
                                aria-hidden="true"
                                className="absolute left-0 right-0 top-[163px] z-0 h-1 bg-[#d5d9e6]"
                            />

                            {steps.map((s, i) => {
                                const top = i % 2 === 0;

                                const marker = (
                                    <motion.span
                                        initial={false}
                                        whileHover={
                                            shouldReduceMotion
                                                ? {}
                                                : {
                                                      scale: 1.15,
                                                      rotate: 8,
                                                  }
                                        }
                                        transition={{ duration: 0.3 }}
                                        className={`mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-white text-lg font-semibold text-white ${ACCENT}`}
                                    >
                                        {i + 1}
                                    </motion.span>
                                );

                                const card = (
                                    <motion.div
                                        initial={false}
                                        whileHover={
                                            shouldReduceMotion
                                                ? {}
                                                : { y: -6, scale: 1.02 }
                                        }
                                        transition={{ duration: 0.3, ease }}
                                        className="relative z-10 rounded-md bg-white px-6 py-6 text-center shadow-lg"
                                    >
                                        <h3 className="text-xl text-neutral-900">
                                            {s.title}
                                        </h3>

                                        <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                                            {s.desc}
                                        </p>
                                    </motion.div>
                                );

                                return (
                                    <div
                                        key={s.title}
                                        data-step
                                        className={`flex h-[370px] w-[var(--cw)] shrink-0 flex-col ${top ? "pt-[55px]" : "pt-[27px]"}`}
                                    >
                                        {top ? (
                                            <>
                                                <Reveal delay={i * 0.12}>
                                                    {card}
                                                </Reveal>

                                                <div className="mt-6">
                                                    <Reveal delay={i * 0.12 + 0.15}>
                                                        {marker}
                                                    </Reveal>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="mb-[22px]">
                                                    <Reveal delay={i * 0.12}>
                                                        {marker}
                                                    </Reveal>
                                                </div>

                                                <Reveal delay={i * 0.12 + 0.15}>
                                                    {card}
                                                </Reveal>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    <motion.button
                        aria-label="Next"
                        onClick={next}
                        disabled={idx >= maxIdx}
                        whileHover={
                            shouldReduceMotion ? {} : { scale: 1.12, x: 3 }
                        }
                        whileTap={
                            shouldReduceMotion ? {} : { scale: 0.9 }
                        }
                        className="absolute right-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md disabled:cursor-not-allowed disabled:opacity-40 lg:right-[15px] lg:h-[50px] lg:w-[50px]"
                    >
                        <FaChevronRight />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

/* ---------------- WHY RODEZ ---------------- */

function WhyRodez() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">

                <div>
                    <Reveal>
                        <p className="text-white light:text-[#555555] uppercase">
                            Why Rodez
                        </p>
                    </Reveal>

                    <h2 className="text-white light:text-[#1c1c1c] font-bold text-4xl sm:text-6xl leading-tight mt-4">
                        <LetterReveal>
                            Why Businesses Choose Rodez For WordPress Development
                        </LetterReveal>
                    </h2>

                    <div className="text-white light:text-[#555555] mt-8 leading-8">
                        <Reveal delay={0.2}>
                            <p>
                                Many businesses rely on developers for every small update.
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <p className="text-justify">
                                With WordPress, you get the flexibility to manage your content while still having a professional, high-performing website.
                            </p>
                        </Reveal>
                    </div>
                </div>

                <div>
                    <Reveal delay={0.2}>
                        <p className="text-white light:text-[#555555]">
                            WordPress Experts Who Think Like Business Owners.
                        </p>
                    </Reveal>

                    <div className="mt-6 flex flex-wrap gap-4">
                        {tags.map((t, i) => (
                            <Reveal
                                key={t}
                                delay={i * 0.1}
                            >
                                <motion.span
                                    whileHover={
                                        shouldReduceMotion
                                            ? {}
                                            : {
                                                  y: -5,
                                                  scale: 1.04,
                                              }
                                    }
                                    whileTap={
                                        shouldReduceMotion
                                            ? {}
                                            : { scale: 0.96 }
                                    }
                                    transition={{ duration: 0.3, ease }}
                                    className="inline-block bg-neutral-800 text-white light:bg-[#eeeeee] light:text-[#1c1c1c] text-xs tracking-widest uppercase rounded-full px-5 py-4"
                                >
                                    {t}
                                </motion.span>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- FAQS ---------------- */

function Faqs() {
    const [open, setOpen] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10">

                <div>
                    <Reveal>
                        <p className="text-white light:text-[#555555]">
                            FAQS
                        </p>
                    </Reveal>

                    <h2 className="text-white light:text-[#1c1c1c] font-bold text-5xl sm:text-6xl leading-tight mt-4">
                        <LetterReveal>
                            Frequently Asked Questions!
                        </LetterReveal>
                    </h2>

                    <Reveal delay={0.25}>
                        <p className="text-white light:text-[#555555] mt-8 max-w-md">
                            Find answers to common questions about our services, process, timelines, and how we help businesses achieve their digital goals.
                        </p>
                    </Reveal>
                </div>

                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <Reveal
                            key={f.q}
                            delay={i * 0.08}
                        >
                            <motion.div
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : { y: -3 }
                                }
                                transition={{ duration: 0.25 }}
                            >
                                <button
                                    onClick={() =>
                                        setOpen(open === i ? -1 : i)
                                    }
                                    aria-expanded={open === i}
                                    className="w-full bg-white rounded-md px-5 py-5 flex items-center gap-4 text-left font-semibold text-neutral-900 hover:bg-[#f5f5f5] transition-colors duration-300"
                                >
                                    <motion.span
                                        key={open === i ? "minus" : "plus"}
                                        initial={
                                            shouldReduceMotion
                                                ? false
                                                : {
                                                      rotate: -90,
                                                      opacity: 0,
                                                  }
                                        }
                                        animate={{
                                            rotate: 0,
                                            opacity: 1,
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {open === i ? (
                                            <FaMinus />
                                        ) : (
                                            <FaPlus />
                                        )}
                                    </motion.span>

                                    {f.q}
                                </button>

                                <AnimatePresence initial={false}>
                                    {open === i && (
                                        <motion.div
                                            key="faq-answer"
                                            initial={
                                                shouldReduceMotion
                                                    ? { opacity: 0 }
                                                    : {
                                                          height: 0,
                                                          opacity: 0,
                                                          y: -8,
                                                      }
                                            }
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={
                                                shouldReduceMotion
                                                    ? { opacity: 0 }
                                                    : {
                                                          height: 0,
                                                          opacity: 0,
                                                          y: -8,
                                                      }
                                            }
                                            transition={{
                                                duration: shouldReduceMotion
                                                    ? 0
                                                    : 0.35,
                                                ease,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-white rounded-md border-t-2 border-[#f0603a] mt-1 px-6 py-6 text-neutral-800 leading-7">
                                                {f.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function WordpressProcessFaqSection() {
    return (
        <>
            <Process />
            <WhyRodez />
            <Faqs />
        </>
    );
}