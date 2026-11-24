import { useState, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useInView,
    useReducedMotion,
} from "motion/react";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const checklist = [
    "Generate more leads",
    "Improve customer trust",
    "Increase online visibility",
    "Support marketing efforts",
    "Create long-term growth opportunities",
];

const services = [
    {
        title: "Business Website Development",
        desc: "Professional websites designed to establish credibility and generate leads.",
        img: "/images/wp-business-website.png",
    },
    {
        title: "eCommerce Development",
        desc: "WooCommerce-powered online stores built for seamless shopping experiences.",
        img: "/images/wp-ecommerce.png",
    },
    {
        title: "Landing Page Development",
        desc: "High-converting pages designed for campaigns and lead generation.",
        img: "/images/wp-landing.png",
    },
    {
        title: "Website Redesign",
        desc: "Transform outdated websites into modern, conversion-focused platforms.",
        img: "/images/wp-redesign.png",
    },
    {
        title: "Custom WordPress Development",
        desc: "Advanced functionality tailored to your specific requirements.",
        img: "/images/wp-custom.png",
    },
    {
        title: "Maintenance & Support",
        desc: "Keeping your website secure, updated, and performing at its best.",
        img: "/images/wp-maintenance.png",
    },
];

const ease = [0.22, 1, 0.36, 1];

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

/* ---------------- GROWING SECTION ---------------- */

function GrowingSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 py-24 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl leading-tight">
                    <LetterReveal>
                        Your Website Should Be Growing Your Business—Not Holding It Back
                    </LetterReveal>
                </h2>

                <div className="text-white light:text-[#555555] mt-8 space-y-1">
                    <Reveal delay={0.2}>
                        <p>
                            Many businesses struggle with websites that are slow, difficult to manage, outdated, or simply ineffective at generating results.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <p>
                            A modern WordPress website gives you the flexibility, performance, and control needed to compete in today’s digital landscape.
                        </p>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <p>
                            Whether you’re launching a new business or upgrading an existing website, the right foundation can make all the difference.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-16 flex items-center justify-around gap-6">
                    <Reveal className="w-1/2 max-w-[560px]" delay={0.2}>
                        <motion.img
                            src="/images/spaceship.png"
                            alt="Spaceship with WordPress logo"
                            loading="lazy"
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : { scale: 1.05, y: -8 }
                            }
                            transition={{ duration: 0.5, ease }}
                            className="w-full"
                        />
                    </Reveal>

                    <Reveal className="w-1/5 max-w-[140px]" delay={0.4}>
                        <motion.img
                            src="/images/astronaut.png"
                            alt="Astronaut on the moon"
                            loading="lazy"
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : { scale: 1.08, rotate: 5, y: -8 }
                            }
                            transition={{ duration: 0.5, ease }}
                            className="w-full"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ---------------- DIGITAL ASSETS SECTION ---------------- */

function DigitalAssets() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl leading-tight">
                    <LetterReveal>
                        We Don’t Just Build WordPress Websites. We Build Digital Assets That Deliver Results.
                    </LetterReveal>
                </h2>

                <Reveal delay={0.2}>
                    <p className="text-white light:text-[#555555] mt-8">
                        Your website is often your most valuable digital asset.
                    </p>
                </Reveal>

                <Reveal delay={0.3}>
                    <p className="text-white light:text-[#555555]">
                        That’s why every WordPress project we build is designed to:
                    </p>
                </Reveal>

                <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white light:text-[#555555]">
                    {checklist.map((c, i) => (
                        <motion.li
                            key={c}
                            initial={false}
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : { y: -3, scale: 1.03 }
                            }
                            transition={{ duration: 0.25 }}
                            className="flex items-center gap-2"
                        >
                            <Reveal delay={0.15 + i * 0.1}>
                                <span className="flex items-center gap-2">
                                    <FaCheck className="text-[#f0603a] shrink-0" />
                                    {c}
                                </span>
                            </Reveal>
                        </motion.li>
                    ))}
                </ul>

                <Reveal delay={0.3}>
                    <p className="text-white light:text-[#555555] mt-8">
                        At Rodez Web Technologies, we focus on building websites that contribute to business growth—not just online presence.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------- SERVICES SECTION ---------------- */

function Services() {
    const [open, setOpen] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-2xl sm:text-4xl uppercase">
                    <LetterReveal>
                        Our WordPress Services
                    </LetterReveal>
                </h2>

                <div className="mt-14 space-y-4 text-left">
                    {services.map((s, i) => (
                        <Reveal key={s.title} delay={i * 0.08}>
                            <motion.div
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : { y: -3 }
                                }
                                transition={{ duration: 0.3, ease }}
                                className="bg-[#262626] light:bg-white border border-transparent light:border-[#e5e5e5] rounded-lg px-6 py-6 transition-colors duration-300"
                            >
                                <button
                                    onClick={() =>
                                        setOpen(open === i ? -1 : i)
                                    }
                                    aria-expanded={open === i}
                                    className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[320px_1fr_auto] items-center gap-4 text-left"
                                >
                                    <span className="flex items-center gap-4">
                                        <span className="text-white light:text-[#888888] font-bold">
                                            0{i + 1}
                                        </span>

                                        <span className="text-white light:text-[#1c1c1c] font-bold text-xl md:text-3xl">
                                            {s.title}
                                        </span>
                                    </span>

                                    <span className="text-neutral-400 light:text-[#666666] hidden md:block">
                                        {s.desc}
                                    </span>

                                    <motion.span
                                        animate={{
                                            rotate: open === i ? 0 : -45,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease,
                                        }}
                                    >
                                        <FaArrowRight className="text-[#f0603a] text-3xl" />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {open === i && (
                                        <motion.div
                                            key="service-image"
                                            initial={
                                                shouldReduceMotion
                                                    ? { opacity: 1 }
                                                    : {
                                                          height: 0,
                                                          opacity: 0,
                                                          y: 15,
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
                                                          y: 10,
                                                      }
                                            }
                                            transition={{
                                                duration: shouldReduceMotion
                                                    ? 0
                                                    : 0.45,
                                                ease,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <motion.img
                                                src={s.img}
                                                alt={s.title}
                                                loading="lazy"
                                                initial={false}
                                                whileHover={
                                                    shouldReduceMotion
                                                        ? {}
                                                        : { scale: 1.025 }
                                                }
                                                transition={{
                                                    duration: 0.5,
                                                    ease,
                                                }}
                                                className="mt-6 w-full max-h-[450px] object-cover rounded-md"
                                            />
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

export default function WordpressBusinessImpact() {
    return (
        <>
            <GrowingSection />
            <DigitalAssets />
            <Services />
        </>
    );
}