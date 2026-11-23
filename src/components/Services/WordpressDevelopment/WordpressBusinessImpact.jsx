import { useState } from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const checklist = [
    "Generate more leads",
    "Improve customer trust",
    "Increase online visibility",
    "Support marketing efforts",
    "Create long-term growth opportunities",
];

const services = [
    { title: "Business Website Development", desc: "Professional websites designed to establish credibility and generate leads.", img: "/images/wp-business-website.png" },
    { title: "eCommerce Development", desc: "WooCommerce-powered online stores built for seamless shopping experiences.", img: "/images/wp-ecommerce.png" },
    { title: "Landing Page Development", desc: "High-converting pages designed for campaigns and lead generation.", img: "/images/wp-landing.png" },
    { title: "Website Redesign", desc: "Transform outdated websites into modern, conversion-focused platforms.", img: "/images/wp-redesign.png" },
    { title: "Custom WordPress Development", desc: "Advanced functionality tailored to your specific requirements.", img: "/images/wp-custom.png" },
    { title: "Maintenance & Support", desc: "Keeping your website secure, updated, and performing at its best.", img: "/images/wp-maintenance.png" },
];

function GrowingSection() {
    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c]">
            <div className="max-w-6xl mx-auto px-6 py-24 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl leading-tight">
                    Your Website Should Be Growing Your Business—Not Holding It Back
                </h2>

                <div className="text-white light:text-[#555555] mt-8 space-y-1">
                    <p>
                        Many businesses struggle with websites that are slow, difficult to manage, outdated, or simply ineffective at generating results.
                    </p>
                    <p>
                        A modern WordPress website gives you the flexibility, performance, and control needed to compete in today’s digital landscape.
                    </p>
                    <p>
                        Whether you’re launching a new business or upgrading an existing website, the right foundation can make all the difference.
                    </p>
                </div>

                <div className="mt-16 flex items-center justify-around gap-6">
                    <img
                        src="/images/spaceship.png"
                        alt="Spaceship with WordPress logo"
                        loading="lazy"
                        className="w-1/2 max-w-[560px]"
                    />
                    <img
                        src="/images/astronaut.png"
                        alt="Astronaut on the moon"
                        loading="lazy"
                        className="w-1/5 max-w-[140px]"
                    />
                </div>
            </div>
        </section>
    );
}

function DigitalAssets() {
    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c]">
            <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl leading-tight">
                    We Don’t Just Build WordPress Websites. We Build Digital Assets That Deliver Results.
                </h2>

                <p className="text-white light:text-[#555555] mt-8">
                    Your website is often your most valuable digital asset.
                </p>
                <p className="text-white light:text-[#555555]">
                    That’s why every WordPress project we build is designed to:
                </p>

                <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white light:text-[#555555]">
                    {checklist.map((c) => (
                        <li key={c} className="flex items-center gap-2">
                            <FaCheck className="text-[#f0603a] shrink-0" />
                            {c}
                        </li>
                    ))}
                </ul>

                <p className="text-white light:text-[#555555] mt-8">
                    At Rodez Web Technologies, we focus on building websites that contribute to business growth—not just online presence.
                </p>
            </div>
        </section>
    );
}

function Services() {
    const [open, setOpen] = useState(0);

    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c]">
            <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-2xl sm:text-4xl uppercase">
                    Our WordPress Services
                </h2>

                <div className="mt-14 space-y-4 text-left">
                    {services.map((s, i) => (
                        <div
                            key={s.title}
                            className="bg-[#262626] light:bg-white border border-transparent light:border-[#e5e5e5] rounded-lg px-6 py-6 transition-colors duration-300"
                        >
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
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

                                <FaArrowRight
                                    className={`text-[#f0603a] text-3xl transition-transform duration-300 ${open === i ? "" : "-rotate-45"}`}
                                />
                            </button>

                            {open === i && (
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    loading="lazy"
                                    className="mt-6 w-full max-h-[450px] object-cover rounded-md"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function WordpressBusinessImpact() {
    return (
        <>
            <GrowingSection />
            <DigitalAssets />
            <Services />
        </>
    );
}