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

/* ---------------- DATA (from the live app-development page) ---------------- */

const steps = [
    { title: "Discover", desc: "We understand your goals and challenges." },
    { title: "Design", desc: "We create experiences users love." },
    { title: "Develop", desc: "Scalable and secure development." },
    // TODO: copy the 4th step (and any more) from the live page
    { title: "Launch", desc: "We launch, support, and keep improving your app." },
];

const reasons = [
    { no: "01", title: "Growth-First Thinking", desc: "Every feature should support business objectives." },
    { no: "02", title: "Custom Solutions", desc: "Built around your business—not templates." },
    { no: "03", title: "Scalable Architecture", desc: "Designed to grow with your company." },
    { no: "04", title: "Long-Term Partnership", desc: "Support beyond launch day." },
];

// TODO: only the Q1 answer is from the live page screenshot; copy Q2 to Q5 answers from the live page.
const faqs = [
    {
        q: "Q1. How long does it take to develop a mobile app?",
        a: "The development timeline depends on the complexity and features of the application. Most apps are completed within 4 to 12 weeks, while larger projects may require additional time.",
    },
    {
        q: "Q2. Do you develop apps for both Android and iOS?",
        a: "Yes. We build apps for Android and iOS, so your product reaches users on both platforms.", // TODO
    },
    {
        q: "Q3. I only have an idea. Can you help me build the app?",
        a: "Absolutely. We help you shape the idea, plan the features, and turn it into a working app.", // TODO
    },
    {
        q: "Q4. Will you publish my app on the App Store and Google Play Store?",
        a: "Yes. We handle the publishing process on both the App Store and Google Play Store.", // TODO
    },
    {
        q: "Q5. Do you provide support after the app is launched?",
        a: "Yes. We offer ongoing support, updates, and maintenance after launch.", // TODO
    },
];

const ease = [0.22, 1, 0.36, 1];

/* ---------------- REUSABLE REVEAL ---------------- */

function Reveal({ children, delay = 0, className = "", y = 35 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.15 });
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={false}
            animate={
                isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: shouldReduceMotion ? 0 : y }
            }
            transition={
                shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.75, delay, ease }
            }
        >
            {children}
        </motion.div>
    );
}

/* ---------------- LETTER REVEAL ---------------- */

function LetterReveal({ children, className = "", delay = 0, justify = "justify-start" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.25 });
    const shouldReduceMotion = useReducedMotion();

    const words = children.split(" ");
    let letterCount = 0; // running index so the delay continues across words

    return (
        <span ref={ref} className={`inline-block ${className}`} aria-label={children}>
            <span className="sr-only">{children}</span>

            <span aria-hidden="true" className={`inline-flex flex-wrap ${justify}`}>
                {words.map((word, wordIndex) => (
                    <span
                        key={`${word}-${wordIndex}`}
                        className="mr-[0.25em] inline-flex whitespace-nowrap"
                    >
                        {word.split("").map((letter, letterIndex) => {
                            const order = letterCount++;
                            return (
                                <motion.span
                                    key={`${letter}-${letterIndex}`}
                                    className="inline-block"
                                    initial={false}
                                    animate={
                                        isInView
                                            ? { opacity: 1, y: 0, rotateX: 0 }
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
                                                  delay: delay + Math.min(order, 40) * 0.025,
                                                  ease,
                                              }
                                    }
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
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

    // works out how many times the slider can move, based on the screen width
    useEffect(() => {
        const measure = () => {
            const vp = viewportRef.current;
            const tr = trackRef.current;
            const first = tr && tr.querySelector("[data-step]");

            if (!vp || !first) return;

            const card = first.offsetWidth;
            const gap = parseFloat(getComputedStyle(tr).columnGap) || 0;
            const total = steps.length * card + (steps.length - 1) * gap;
            const max = Math.max(0, Math.ceil((total - vp.clientWidth) / (card + gap)));

            setMaxIdx(max);
            setIdx((i) => Math.min(i, max));
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const prev = () => setIdx((i) => Math.max(0, i - 1));
    const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

    // swipe support on touch devices
    const onTouchStart = (e) => {
        touchX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    };

    return (
        <section
            className="bg-cover bg-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(28,28,28,.25),rgba(28,28,28,.25)), url('/images/image8.png')", // TODO: red blurred photo from the live page
            }}
        >
            <div className="grid gap-12 py-16 lg:min-h-[660px] lg:grid-cols-[382px_minmax(0,1fr)] lg:items-center lg:gap-0 lg:py-[90px]">

                {/* intro card: heading is left aligned on the live page */}
                <Reveal y={40}>
                    <motion.div
                        whileHover={shouldReduceMotion ? {} : { y: -5 }}
                        transition={{ duration: 0.4, ease }}
                        className="bg-[#262626] px-6 py-12 sm:px-9 sm:py-14"
                    >
                        <h2 className="text-left text-4xl font-bold leading-tight text-white md:text-5xl">
                            <LetterReveal>From Vision To Launch</LetterReveal>
                        </h2>

                        <Reveal delay={0.3}>
                            <p className="mt-8 text-[1.15rem] leading-8 text-white">
                                Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
                            </p>
                        </Reveal>
                    </motion.div>
                </Reveal>

                {/* slider */}
                <div className="relative h-[370px] min-w-0">
                    <motion.button
                        aria-label="Previous"
                        onClick={prev}
                        disabled={idx === 0}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.12, x: -3 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
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
                            animate={{ x: `calc(-1 * ${idx} * (var(--cw) + var(--gap)))` }}
                            transition={
                                shouldReduceMotion
                                    ? { duration: 0 }
                                    : { duration: 0.5, ease }
                            }
                        >
                            {/* horizontal line behind the markers */}
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
                                            shouldReduceMotion ? {} : { scale: 1.15, rotate: 8 }
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
                                            shouldReduceMotion ? {} : { y: -6, scale: 1.02 }
                                        }
                                        transition={{ duration: 0.3, ease }}
                                        className="relative z-10 rounded-md bg-white px-6 py-6 text-center shadow-lg"
                                    >
                                        <h3 className="text-xl text-neutral-900">{s.title}</h3>
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
                                                <Reveal delay={i * 0.12}>{card}</Reveal>
                                                <div className="mt-6">
                                                    <Reveal delay={i * 0.12 + 0.15}>{marker}</Reveal>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="mb-[22px]">
                                                    <Reveal delay={i * 0.12}>{marker}</Reveal>
                                                </div>
                                                <Reveal delay={i * 0.12 + 0.15}>{card}</Reveal>
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
                        whileHover={shouldReduceMotion ? {} : { scale: 1.12, x: 3 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                        className="absolute right-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md disabled:cursor-not-allowed disabled:opacity-40 lg:right-[15px] lg:h-[50px] lg:w-[50px]"
                    >
                        <FaChevronRight />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

/* ---------------- WHY BUSINESSES CHOOSE RODEZ ---------------- */

function WhyRodez() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#1c1c1c] text-white transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
            <div className="mx-auto max-w-[1700px] px-5 py-20 sm:px-8 lg:px-[1.5%]">

                {/* centered heading with the highlighted "Choose" */}
                <Reveal className="text-center">
                    <h2 className="text-4xl font-bold leading-[1.6] text-white sm:text-5xl lg:text-6xl light:text-[#1c1c1c]">
                        Why Businesses{" "}
                        <span className="relative inline-block px-3 sm:px-4">
                            <motion.span
                                aria-hidden="true"
                                className="absolute inset-0 origin-left bg-[#f0603a]"
                                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: false, amount: 0.8 }}
                                transition={
                                    shouldReduceMotion
                                        ? { duration: 0 }
                                        : { duration: 0.7, delay: 0.3, ease }
                                }
                            />
                            <span className="relative">Choose</span>
                        </span>{" "}
                        Rodez?
                    </h2>
                </Reveal>

                {/* 4 reason cards */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((r, i) => (
                        <Reveal key={r.no} delay={i * 0.12}>
                            <motion.div
                                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                                transition={{ duration: 0.3, ease }}
                                className="h-full rounded-[22px] border-l-[3px] border-[#d9532f] bg-[#262626] px-6 py-5 text-center shadow-lg light:bg-[#eeeeee]"
                            >
                                <p className="text-5xl font-normal leading-none text-[#f0603a] sm:text-[3.25rem]">
                                    {r.no}
                                </p>
                                <h3 className="mt-2 text-2xl font-medium leading-tight text-white sm:text-[1.75rem] light:text-[#1c1c1c]">
                                    {r.title}
                                </h3>
                                <p className="mt-3 text-base leading-snug text-[#e8e6e5] light:text-[#555555]">
                                    {r.desc}
                                </p>
                            </motion.div>
                        </Reveal>
                    ))}
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
        <section className="bg-[#1c1c1c] text-white transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-24 lg:grid-cols-2">

                <div>
                    <Reveal>
                        <p className="text-white light:text-[#555555]">FAQS</p>
                    </Reveal>

                    <h2 className="mt-4 text-5xl font-bold leading-tight text-white sm:text-6xl light:text-[#1c1c1c]">
                        <LetterReveal>Frequently Asked Questions!</LetterReveal>
                    </h2>

                    <Reveal delay={0.25}>
                        <p className="mt-8 max-w-md text-white light:text-[#555555]">
                            Find answers to common questions about our services, process, timelines, and how we help businesses achieve their digital goals.
                        </p>
                    </Reveal>
                </div>

                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <Reveal key={f.q} delay={i * 0.08}>
                            <motion.div
                                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                                transition={{ duration: 0.25 }}
                            >
                                <button
                                    onClick={() => setOpen(open === i ? -1 : i)}
                                    aria-expanded={open === i}
                                    className="flex w-full items-center gap-4 rounded-md bg-white px-5 py-5 text-left font-semibold text-neutral-900 transition-colors duration-300 hover:bg-[#f5f5f5]"
                                >
                                    <motion.span
                                        key={open === i ? "minus" : "plus"}
                                        initial={
                                            shouldReduceMotion
                                                ? false
                                                : { rotate: -90, opacity: 0 }
                                        }
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {open === i ? <FaMinus /> : <FaPlus />}
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
                                                    : { height: 0, opacity: 0, y: -8 }
                                            }
                                            animate={{ height: "auto", opacity: 1, y: 0 }}
                                            exit={
                                                shouldReduceMotion
                                                    ? { opacity: 0 }
                                                    : { height: 0, opacity: 0, y: -8 }
                                            }
                                            transition={{
                                                duration: shouldReduceMotion ? 0 : 0.35,
                                                ease,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-1 rounded-md border-t-2 border-[#f0603a] bg-white px-6 py-6 leading-7 text-neutral-800">
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

export default function AppProcessFaqSection() {
    return (
        <div className="font-['Plus_Jakarta_Sans',system-ui,sans-serif]">
            <Process />
            <WhyRodez />
            <Faqs />
        </div>
    );
}

















// import React from "react";

// const APP_SHOWCASE_IMAGE = "/images/Left-Rodez-Phone.png";

// /* ---------- Shared sizing (same scale as DigitalMarketingCta / Faq / Process / Growth) ---------- */
// const SIDE_SPACE = "px-5 sm:px-8 lg:px-[7.5%]";
// const WRAP = "mx-auto max-w-[1700px]";

// const headingStyle = {
//   fontSize: "clamp(1.9rem, 3.6vw, 4.25rem)",
//   letterSpacing: "-0.03em",
// };

// const subHeadingStyle = {
//   fontSize: "clamp(1.1rem, 1.7vw, 2.1rem)",
//   letterSpacing: "-0.02em",
// };

// const bodyStyle = {
//   fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
//   lineHeight: 1.7,
//   letterSpacing: "-0.02em",
// };

// const smallStyle = {
//   fontSize: "clamp(0.85rem, 1vw, 1.2rem)",
//   lineHeight: 1.6,
//   letterSpacing: "-0.02em",
// };

// export default function AppGrowthSection() {
//   const benefits = [
//     "Increase revenue",
//     "Improve customer retention",
//     "Reduce manual work",
//     "Automate operations",
//     "Create better customer experiences",
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-[#1c1c1c] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
//       {/* ================= TOP CONTENT ================= */}
     

//       {/* ================= BOTTOM CONTENT ================= */}
//       <div className={`${SIDE_SPACE} pb-16 sm:pb-20 lg:pb-28`}>
//         <div className={`${WRAP} text-center`}>
//           <h2 className="mx-auto max-w-[1400px] font-bold leading-[1.1]" style={headingStyle}>
//             We Don’t Just Build Apps. We Build Growth Engines.
//           </h2>

//           <div className="mx-auto mt-6 max-w-[1000px] text-[#fdfaf9] light:text-[#555555]" style={bodyStyle}>
//             <p>An application shouldn&apos;t be another business expense.</p>
//             <p className="mt-1 font-semibold light:text-[#1c1c1c]">It should:</p>
//           </div>

//           {/* ================= BENEFITS ================= */}
//           <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:gap-x-9">
//             {benefits.map((benefit) => (
//               <div
//                 key={benefit}
//                 className="flex items-center gap-2 font-semibold text-[#fdfaf9] light:text-[#1c1c1c]"
//                 style={smallStyle}
//               >
//                 <span className="text-[#F45132]">✓</span>
//                 <span>{benefit}</span>
//               </div>
//             ))}
//           </div>

//           {/* ================= FINAL TEXT ================= */}
//           <p className="mx-auto mt-8 max-w-[1100px] text-gray-300 light:text-[#666666]" style={smallStyle}>
//             At Rodex Web Technologies, every application is designed around business outcomes—not
//             just features.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


//       ================= TOP CONTENT =================


//  <div className={`${SIDE_SPACE} pt-16 sm:pt-20 lg:pt-28`}>
//         <div className={`${WRAP} text-center`}>
//           <h2 className="font-bold leading-[1.1]" style={headingStyle}>
//             Your Customers Are Already There
//           </h2>

//           <h3 className="mt-3 font-semibold text-[#fdfaf9] light:text-[#1c1c1c]" style={subHeadingStyle}>
//             Is Your Business Too?
//           </h3>

//           <div className="mx-auto mt-6 max-w-[1200px] space-y-2 text-[#fdfaf9] light:text-[#555555]" style={bodyStyle}>
//             <p>Today&apos;s customers expect convenience, speed, and accessibility.</p>

//             <p>
//               Whether they&apos;re booking services, placing orders, tracking progress, or
//               interacting with your brand, mobile experiences have become the standard—not the
//               advantage.
//               <br className="hidden lg:block" />
//               Businesses that meet customers where they are create stronger relationships, better
//               experiences, and more opportunities to grow.
//             </p>
//           </div>
//         </div>
//       </div>