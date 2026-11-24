import { useRef } from "react";
import {
    motion,
    useInView,
    useReducedMotion,
} from "motion/react";
import {
    FaMoneyBillAlt,
    FaRegUser,
    FaUserAstronaut,
    FaCube,
} from "react-icons/fa";

const stats = [
    ["+78%", "Websites powered by WordPress."],
    ["+160", "Businesses Empowered"],
    ["99%", "Client Satisfaction Rate"],
];

const benefits = [
    {
        title: "Generate More Leads",
        desc: "Turn website visitors into inquiries and customers.",
        tint: "bg-indigo-900/60 text-indigo-400",
        Icon: FaMoneyBillAlt,
    },
    {
        title: "Build Credibility",
        desc: "Create a professional online presence that inspires confidence.",
        tint: "bg-red-900/50 text-red-400",
        Icon: FaRegUser,
    },
    {
        title: "Improve User Experience",
        desc: "Deliver seamless experiences across all devices.",
        tint: "bg-teal-900/60 text-teal-300",
        Icon: FaUserAstronaut,
    },
    {
        title: "Support Long-Term Growth",
        desc: "Scale your website as your business evolves.",
        tint: "bg-pink-900/50 text-pink-400",
        Icon: FaCube,
    },
];

const performance = [
    {
        n: "01",
        title: "Fast Loading Speeds",
        desc: "Optimized for performance and user experience.",
        bg: "bg-neutral-500",
        pos: "lg:mt-8",
    },
    {
        n: "02",
        title: "Mobile Responsive",
        desc: "Looks and performs beautifully across all devices.",
        bg: "bg-neutral-400",
        pos: "lg:mt-4",
    },
    {
        n: "03",
        title: "Secure Foundation",
        desc: "Built using industry best practices and trusted technologies.",
        bg: "bg-neutral-300",
        pos: "lg:mt-0",
    },
    {
        n: "04",
        title: "Conversion Focused",
        desc: "Designed to encourage inquiries, sales, and engagement.",
        bg: "bg-slate-300",
        pos: "lg:mt-6",
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

/* ---------------- STATS ---------------- */

function Stats() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#1c1c1c] light:bg-[#fafafa] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 pb-24">
                <motion.div
                    initial={false}
                    whileHover={
                        shouldReduceMotion
                            ? {}
                            : { y: -4 }
                    }
                    transition={{ duration: 0.4, ease }}
                    className="rounded-3xl bg-gradient-to-r from-blue-900 via-red-900/80 to-blue-900 px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-white"
                >
                    {stats.map(([n, l], i) => (
                        <Reveal
                            key={l}
                            delay={i * 0.15}
                        >
                            <motion.div
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : { scale: 1.05, y: -4 }
                                }
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-5xl md:text-7xl font-semibold">
                                    {n}
                                </div>

                                <div className="text-sm mt-1">
                                    {l}
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}

                    <Reveal delay={0.45}>
                        <div className="col-span-2 md:col-span-1 text-xl font-bold text-left">
                            Why Businesses Choose WordPress
                        </div>
                    </Reveal>
                </motion.div>
            </div>
        </section>
    );
}

/* ---------------- BENEFITS ---------------- */

function Benefits() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl leading-tight">
                    <LetterReveal>
                        What A Professional WordPress Website Can Do For Your Business
                    </LetterReveal>
                </h2>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {benefits.map((b, i) => (
                        <Reveal
                            key={b.title}
                            delay={i * 0.12}
                        >
                            <motion.div
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : { y: -10 }
                                }
                                transition={{ duration: 0.35, ease }}
                                className="flex flex-col items-center h-full"
                            >
                                <motion.span
                                    whileHover={
                                        shouldReduceMotion
                                            ? {}
                                            : {
                                                  scale: 1.15,
                                                  rotate: 8,
                                              }
                                    }
                                    whileTap={
                                        shouldReduceMotion
                                            ? {}
                                            : { scale: 0.95 }
                                    }
                                    transition={{
                                        duration: 0.35,
                                        ease,
                                    }}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center ${b.tint}`}
                                >
                                    <b.Icon className="text-2xl" />
                                </motion.span>

                                <h3 className="text-white light:text-[#1c1c1c] text-2xl mt-6">
                                    {b.title}
                                </h3>

                                <p className="text-neutral-300 light:text-[#666666] mt-3 max-w-xs">
                                    {b.desc}
                                </p>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- PERFORMANCE ---------------- */

function Performance() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 pb-24 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl">
                    <LetterReveal>
                        Built For Performance, Security &amp; Growth
                    </LetterReveal>
                </h2>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-start">
                    {performance.map((p, i) => (
                        <Reveal
                            key={p.n}
                            delay={i * 0.12}
                            y={45}
                        >
                            <motion.div
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                              y: -10,
                                              scale: 1.02,
                                          }
                                }
                                transition={{
                                    duration: 0.35,
                                    ease,
                                }}
                                className={`${p.bg} ${p.pos} rounded-2xl p-8 min-h-[420px] text-neutral-900`}
                            >
                                <motion.div
                                    initial={false}
                                    whileHover={
                                        shouldReduceMotion
                                            ? {}
                                            : { x: 8 }
                                    }
                                    className="text-7xl font-light"
                                >
                                    {p.n}
                                </motion.div>

                                <h3 className="text-xl font-semibold mt-6">
                                    {p.title}
                                </h3>

                                <p className="mt-4 text-neutral-700">
                                    {p.desc}
                                </p>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function WordpressGrowthSection() {
    return (
        <>
            <Stats />
            <Benefits />
            <Performance />
        </>
    );
}