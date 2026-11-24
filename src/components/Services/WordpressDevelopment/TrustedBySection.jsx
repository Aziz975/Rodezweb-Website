import { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useInView,
    useReducedMotion,
} from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ACCENT = "bg-[#f0603a]";

const clients = [
    { name: "Banyan Paradise", src: "/images/banyan.png" },
    { name: "Swapna Srushti Water Park", src: "/images/swapna.png" },
    { name: "Department of Commerce", src: "/images/commerce.png" },
    { name: "CAP India", src: "/images/cap-India.png" },
    { name: "Government of Telangana", src: "/images/govrn-telangana.png" },
    { name: "KJ Institute of Engineering & Technology", src: "/images/kj-institute.png" },
    { name: "Eye-care Hospital", src: "/images/eyecare.png" },
    { name: "Sterling Cancer Hospital", src: "/images/sterling.png" },
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
        amount: 0.3,
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

function useVisible() {
    const get = () =>
        window.innerWidth >= 1024
            ? 5
            : window.innerWidth >= 640
              ? 3
              : 2;

    const [v, setV] = useState(get);

    useEffect(() => {
        const onResize = () => setV(get());

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return v;
}

function LogoCarousel() {
    const visible = useVisible();
    const shouldReduceMotion = useReducedMotion();

    const n = clients.length;
    const [start, setStart] = useState(0);
    const [dir, setDir] = useState(0);
    const [paused, setPaused] = useState(false);

    const items = Array.from(
        { length: visible + 2 },
        (_, i) => clients[(start - 1 + i + n * 5) % n]
    );

    const slot = 100 / (visible + 2);

    const go = (d) => {
        if (dir === 0) setDir(d);
    };

    const handleEnd = (e) => {
        if (e.target !== e.currentTarget) return;

        setStart((s) => (s + dir + n) % n);
        setDir(0);
    };

    useEffect(() => {
        if (paused || dir !== 0) return;

        const t = setTimeout(() => setDir(1), 2500);

        return () => clearTimeout(t);
    }, [paused, dir, start]);

    return (
        <Reveal delay={0.15}>
            <div className="mt-10 flex items-center gap-4">
                <motion.button
                    aria-label="Previous"
                    onClick={() => go(-1)}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.2, x: -3 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                    className="text-white light:text-[#555555] transition-colors duration-300 hover:text-[#f0603a]"
                >
                    <FaChevronLeft />
                </motion.button>

                <div
                    className="flex-1 overflow-hidden"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div
                        className="flex"
                        onTransitionEnd={handleEnd}
                        style={{
                            width: `${((visible + 2) * 100) / visible}%`,
                            transform: `translateX(-${(1 + dir) * slot}%)`,
                            transition:
                                dir !== 0 && !shouldReduceMotion
                                    ? "transform 500ms ease"
                                    : "none",
                        }}
                    >
                        {items.map((c, i) => (
                            <div
                                key={`${c.name}-${i}`}
                                className="px-3 shrink-0"
                                style={{ width: `${slot}%` }}
                            >
                                <motion.div
                                    initial={false}
                                    animate={{ opacity: 1, y: 0 }}
                                    whileHover={
                                        shouldReduceMotion
                                            ? {}
                                            : {
                                                  y: -7,
                                                  scale: 1.025,
                                              }
                                    }
                                    transition={{
                                        duration: 0.35,
                                        ease,
                                    }}
                                    className="bg-white rounded-2xl border-2 border-[#f0603a] h-44 flex items-center justify-center p-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
                                >
                                    <motion.img
                                        src={c.src}
                                        alt={c.name}
                                        loading="lazy"
                                        className="max-h-full object-contain"
                                        whileHover={
                                            shouldReduceMotion
                                                ? {}
                                                : { scale: 1.06 }
                                        }
                                        transition={{
                                            duration: 0.4,
                                            ease,
                                        }}
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.button
                    aria-label="Next"
                    onClick={() => go(1)}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.2, x: 3 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                    className="text-white light:text-[#555555] transition-colors duration-300 hover:text-[#f0603a]"
                >
                    <FaChevronRight />
                </motion.button>
            </div>
        </Reveal>
    );
}

export default function TrustedBySection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="w-full bg-[#1c1c1c] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 pb-24 font-['Plus_Jakarta_Sans',sans-serif]">

                {/* CTA box */}
                <Reveal>
                    <motion.div
                        whileHover={
                            shouldReduceMotion
                                ? {}
                                : { y: -4 }
                        }
                        transition={{ duration: 0.4, ease }}
                        className="relative overflow-hidden rounded-[20px] bg-[#1c1c1c] px-8 md:px-12 py-10"
                    >
                        {/* background photo */}
                        <motion.img
                            src="/images/bg.png"
                            alt=""
                            aria-hidden="true"
                            initial={false}
                            animate={{ scale: 1 }}
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : { scale: 1.05 }
                            }
                            transition={{
                                duration: 1.2,
                                ease,
                            }}
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />

                        {/* dark overlay retained for text readability */}
                        <div className="absolute inset-0 bg-[#1c1c1c]/60" />

                        <div className="relative z-10">
                            <h2 className="text-white font-bold text-4xl sm:text-6xl leading-[1.1] tracking-tight">
                                <LetterReveal>
                                    Let’s Build A WordPress Website That Grows With Your Business
                                </LetterReveal>
                            </h2>

                            <Reveal delay={0.25}>
                                <p className="text-white mt-6 max-w-6xl leading-8">
                                    Whether you need a professional business website, a powerful eCommerce store, or a custom WordPress solution, we’ll help you create a digital presence designed for long-term success.
                                </p>
                            </Reveal>

                            <Reveal delay={0.4}>
                                <motion.a
                                    href="/contact"
                                    whileHover={
                                        shouldReduceMotion
                                            ? {}
                                            : {
                                                  scale: 1.05,
                                                  y: -3,
                                              }
                                    }
                                    whileTap={
                                        shouldReduceMotion
                                            ? {}
                                            : { scale: 0.96 }
                                    }
                                    className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-6 transition-all duration-300 hover:bg-[#d94c2c]`}
                                >
                                    Discuss Your WordPress Project
                                </motion.a>
                            </Reveal>
                        </div>
                    </motion.div>
                </Reveal>

                {/* trusted heading */}
                <Reveal delay={0.1}>
                    <p className="text-white light:text-[#1c1c1c] text-center uppercase mt-16">
                        Trusted by growing businesses across industries
                    </p>
                </Reveal>

                {/* logo carousel */}
                <LogoCarousel />
            </div>
        </section>
    );
}