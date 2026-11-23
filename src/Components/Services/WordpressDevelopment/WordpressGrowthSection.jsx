import { FaMoneyBillAlt, FaRegUser, FaUserAstronaut, FaCube } from "react-icons/fa";

const stats = [
    ["+78%", "Websites powered by WordPress."],
    ["+160", "Businesses Empowered"],
    ["99%", "Client Satisfaction Rate"],
];

const benefits = [
    { title: "Generate More Leads", desc: "Turn website visitors into inquiries and customers.", tint: "bg-indigo-900/60 text-indigo-400", Icon: FaMoneyBillAlt },
    { title: "Build Credibility", desc: "Create a professional online presence that inspires confidence.", tint: "bg-red-900/50 text-red-400", Icon: FaRegUser },
    { title: "Improve User Experience", desc: "Deliver seamless experiences across all devices.", tint: "bg-teal-900/60 text-teal-300", Icon: FaUserAstronaut },
    { title: "Support Long-Term Growth", desc: "Scale your website as your business evolves.", tint: "bg-pink-900/50 text-pink-400", Icon: FaCube },
];

const performance = [
    { n: "01", title: "Fast Loading Speeds", desc: "Optimized for performance and user experience.", bg: "bg-neutral-500", pos: "lg:mt-8" },
    { n: "02", title: "Mobile Responsive", desc: "Looks and performs beautifully across all devices.", bg: "bg-neutral-400", pos: "lg:mt-4" },
    { n: "03", title: "Secure Foundation", desc: "Built using industry best practices and trusted technologies.", bg: "bg-neutral-300", pos: "lg:mt-0" },
    { n: "04", title: "Conversion Focused", desc: "Designed to encourage inquiries, sales, and engagement.", bg: "bg-slate-300", pos: "lg:mt-6" },
];

function Stats() {
    return (
        <section className="bg-[#1c1c1c] light:bg-[#fafafa]">
            <div className="max-w-6xl mx-auto px-6 pb-24">
                <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-red-900/80 to-blue-900 px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-white">
                    {stats.map(([n, l]) => (
                        <div key={l}>
                            <div className="text-5xl md:text-7xl font-semibold">{n}</div>
                            <div className="text-sm mt-1">{l}</div>
                        </div>
                    ))}

                    <div className="col-span-2 md:col-span-1 text-xl font-bold text-left">
                        Why Businesses Choose WordPress
                    </div>
                </div>
            </div>
        </section>
    );
}

function Benefits() {
    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c]">
            <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl leading-tight">
                    What A Professional WordPress Website Can Do For Your Business
                </h2>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {benefits.map((b) => (
                        <div key={b.title} className="flex flex-col items-center">
                            <span className={`w-16 h-16 rounded-full flex items-center justify-center ${b.tint}`}>
                                <b.Icon className="text-2xl" />
                            </span>

                            <h3 className="text-white light:text-[#1c1c1c] text-2xl mt-6">
                                {b.title}
                            </h3>

                            <p className="text-neutral-300 light:text-[#666666] mt-3 max-w-xs">
                                {b.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Performance() {
    return (
        <section className="bg-[#1c1c1c] text-white light:bg-[#fafafa] light:text-[#1c1c1c]">
            <div className="max-w-7xl mx-auto px-6 pb-24 text-center">
                <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl">
                    Built For Performance, Security &amp; Growth
                </h2>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-start">
                    {performance.map((p) => (
                        <div
                            key={p.n}
                            className={`${p.bg} ${p.pos} rounded-2xl p-8 min-h-[420px] text-neutral-900`}
                        >
                            <div className="text-7xl font-light">{p.n}</div>

                            <h3 className="text-xl font-semibold mt-6">
                                {p.title}
                            </h3>

                            <p className="mt-4 text-neutral-700">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function WordpressGrowthSection() {
    return (
        <>
            <Stats />
            <Benefits />
            <Performance />
        </>
    );
}