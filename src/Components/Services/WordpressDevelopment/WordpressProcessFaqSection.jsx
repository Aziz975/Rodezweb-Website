import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from "react-icons/fa";

const ACCENT = "bg-[#f0603a]";

const steps = [
    { title: "Discover", desc: "Understanding your business, audience, and goals." },
    { title: "Plan", desc: "Creating the structure, content, and growth strategy." },
    { title: "Design & Develop", desc: "Building a professional and user-friendly website." },
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
    const [start, setStart] = useState(0);
    const visible = steps.slice(start, start + 3);
    return (
        <section className="bg-cover bg-center py-20" style={{ backgroundImage: "linear-gradient(rgba(28,28,28,.8),rgba(28,28,28,.8)), url('/images/wordpress-process-bg.jpg')" }}> {/* TODO */}
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[400px_1fr] gap-10 items-center">
                <div className="bg-[#262626] p-10">
                    <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight">From Strategy To Launch</h2>
                    <p className="text-white mt-8 leading-8">
                        Whether you’re launching a new business or upgrading an existing presence, we create wordpress websites that align with your objectives and deliver measurable results.
                    </p>
                </div>
                <div className="relative">
                    <div className="grid sm:grid-cols-3 gap-6">
                        {visible.map((s, i) => (
                            <div key={s.title} className={`relative bg-white rounded-md p-6 text-center ${i === 1 ? "sm:mt-12" : ""}`}>
                                <h3 className="text-xl text-neutral-900">{s.title}</h3>
                                <p className="text-neutral-600 mt-3 text-sm">{s.desc}</p>
                                <span className={`absolute left-1/2 -translate-x-1/2 ${i === 1 ? "-top-10" : "-bottom-10"} w-12 h-12 rounded-full ${ACCENT} border-2 border-white text-white flex items-center justify-center font-semibold`}>
                                    {start + i + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                    <button aria-label="Previous" onClick={() => setStart(Math.max(0, start - 1))} className="absolute -left-4 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center"><FaChevronLeft /></button>
                    <button aria-label="Next" onClick={() => setStart(Math.min(Math.max(steps.length - 3, 0), start + 1))} className="absolute -right-4 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center"><FaChevronRight /></button>
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