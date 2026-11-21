import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from "react-icons/fa";

const ACCENT = "bg-[#f0603a]";

const steps = [
    { title: "Discover", desc: "Understanding your business, audience, and goals." },
    { title: "Plan", desc: "Creating the structure, content, and growth strategy." },
    { title: "Design & Develop", desc: "Building a professional and user-friendly website." },
    { title: "Launch & Optimize", desc: "Continuous improvements to support long-term success." },
];

const tags = ["Growth-Focused Approach", "Custom Design & Development", "SEO-Ready Foundation", "Conversion-Focused Design", "Ongoing Support"];

// TODO: only Q1 answer is from your screenshot; copy the rest from the live page.
const faqs = [
    { q: "Q. Why should I choose WordPress for my website?", a: "WordPress is flexible, SEO-friendly, easy to manage, and suitable for almost every type of website." },
    { q: "Q. Can I update the website myself after launch?", a: "Yes. We build user-friendly websites that allow you to easily manage content, images, and pages." },
    { q: "Q. Do you create custom WordPress websites?", a: "Absolutely. Every website is tailored to your brand and business requirements." },
    { q: "Q. Will my WordPress website be mobile-friendly?", a: "Yes. Every website we develop is fully responsive across all devices." },
    { q: "Q. Do you provide maintenance and support?", a: "Yes. We offer ongoing support, updates, backups, and security monitoring." },
];

function Process() {
    const [idx, setIdx] = useState(0);
    const [maxIdx, setMaxIdx] = useState(Math.max(0, steps.length - 3));
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const touchX = useRef(null);

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
    const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    };

    return (
        <section
            className="bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(rgba(28,28,28,.6),rgba(28,28,28,.6)), url('/images/wordpress-process-bg.jpg')" }} // TODO
        >
            <div className="grid gap-12 py-16 lg:min-h-[660px] lg:grid-cols-[382px_minmax(0,1fr)] lg:items-center lg:gap-0 lg:py-[90px]">
                <div className="bg-[#262626] px-6 py-12 sm:px-9 sm:py-14">
                    <h2 className="text-center text-4xl font-bold leading-tight text-white md:text-5xl">From Strategy To Launch</h2>
                    <p className="mt-8 text-[1.15rem] leading-8 text-white">
                        Whether you’re launching a new business or upgrading an existing presence, we create wordpress websites that align with your objectives and deliver measurable results.
                    </p>
                </div>

                <div className="relative h-[370px] min-w-0">
                    <button
                        aria-label="Previous"
                        onClick={prev}
                        disabled={idx === 0}
                        className="absolute left-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md disabled:cursor-not-allowed disabled:opacity-40 lg:left-[13px] lg:h-[50px] lg:w-[50px]"
                    >
                        <FaChevronLeft />
                    </button>

                    <div
                        ref={viewportRef}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                        className="relative mx-14 h-full overflow-hidden [--cw:240px] [--gap:32px] sm:[--cw:280px] sm:[--gap:40px] lg:ml-[63px] lg:mr-[39px] lg:[--cw:325px] lg:[--gap:50px]"
                    >
                        <div
                            ref={trackRef}
                            className="relative flex h-full w-max gap-[var(--gap)] transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(calc(-1 * ${idx} * (var(--cw) + var(--gap))))` }}
                        >
                            {/* horizontal line behind the markers */}
                            <div aria-hidden="true" className="absolute left-0 right-0 top-[163px] z-0 h-1 bg-[#d5d9e6]" />

                            {steps.map((s, i) => {
                                const top = i % 2 === 0;
                                const marker = (
                                    <span className={`mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-white text-lg font-semibold text-white ${ACCENT}`}>
                                        {i + 1}
                                    </span>
                                );
                                const card = (
                                    <div className="relative z-10 rounded-md bg-white px-6 py-6 text-center">
                                        <h3 className="text-xl text-neutral-900">{s.title}</h3>
                                        <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{s.desc}</p>
                                    </div>
                                );
                                return (
                                    <div
                                        key={s.title}
                                        data-step
                                        className={`flex h-[370px] w-[var(--cw)] shrink-0 flex-col ${top ? "pt-[55px]" : "pt-[27px]"}`}
                                    >
                                        {top ? (
                                            <>
                                                {card}
                                                <div className="mt-6">{marker}</div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="mb-[22px]">{marker}</div>
                                                {card}
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        aria-label="Next"
                        onClick={next}
                        disabled={idx >= maxIdx}
                        className="absolute right-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md disabled:cursor-not-allowed disabled:opacity-40 lg:right-[15px] lg:h-[50px] lg:w-[50px]"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}

function WhyRodez() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
                <p className="text-white uppercase">Why Rodez</p>
                <h2 className="text-white font-bold text-4xl sm:text-6xl leading-tight mt-4">Why Businesses Choose Rodez For WordPress Development</h2>
                <div className="text-white mt-8 leading-8">
                    <p>Many businesses rely on developers for every small update.</p>
                    <p className="text-justify">With WordPress, you get the flexibility to manage your content while still having a professional, high-performing website.</p>
                </div>
            </div>
            <div>
                <p className="text-white">WordPress Experts Who Think Like Business Owners.</p>
                <div className="mt-6 flex flex-wrap gap-4">
                    {tags.map((t) => (
                        <span key={t} className="bg-neutral-800 text-white text-xs tracking-widest uppercase rounded-full px-5 py-4">{t}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Faqs() {
    const [open, setOpen] = useState(0);
    return (
        <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10">
            <div>
                <p className="text-white">FAQS</p>
                <h2 className="text-white font-bold text-5xl sm:text-6xl leading-tight mt-4">Frequently Asked Questions!</h2>
                <p className="text-white mt-8 max-w-md">Find answers to common questions about our services, process, timelines, and how we help businesses achieve their digital goals.</p>
            </div>
            <div className="space-y-4">
                {faqs.map((f, i) => (
                    <div key={f.q}>
                        <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="w-full bg-white rounded-md px-5 py-5 flex items-center gap-4 text-left font-semibold text-neutral-900">
                            {open === i ? <FaMinus /> : <FaPlus />} {f.q}
                        </button>
                        {open === i && <div className="bg-white rounded-md border-t-2 border-[#f0603a] mt-1 px-6 py-6 text-neutral-800 leading-7">{f.a}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function WordpressProcessFaqSection() {
    return (
        <>
            <Process />
            <WhyRodez />
            <Faqs />
        </>
    );
}