import { useState, useEffect } from "react";
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

function useVisible() {
    const get = () => (window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 3 : 2);
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
    const n = clients.length;
    const [start, setStart] = useState(0); // first visible card
    const [dir, setDir] = useState(0); // 1 = next, -1 = prev, 0 = idle
    const [paused, setPaused] = useState(false);

    // 1 card before + visible cards + 1 card after (circular)
    const items = Array.from({ length: visible + 2 }, (_, i) => clients[(start - 1 + i + n * 5) % n]);
    const slot = 100 / (visible + 2); // one card width, in % of the track

    const go = (d) => {
        if (dir === 0) setDir(d);
    };

    const handleEnd = (e) => {
        if (e.target !== e.currentTarget) return;
        setStart((s) => (s + dir + n) % n);
        setDir(0);
    };

    // auto-play (pauses on hover)
    useEffect(() => {
        if (paused || dir !== 0) return;
        const t = setTimeout(() => setDir(1), 2500);
        return () => clearTimeout(t);
    }, [paused, dir, start]);

    return (
        <div className="mt-10 flex items-center gap-4">
            <button aria-label="Previous" onClick={() => go(-1)} className="text-white">
                <FaChevronLeft />
            </button>

            <div className="flex-1 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                <div
                    className="flex"
                    onTransitionEnd={handleEnd}
                    style={{
                        width: `${((visible + 2) * 100) / visible}%`,
                        transform: `translateX(-${(1 + dir) * slot}%)`,
                        transition: dir !== 0 ? "transform 500ms ease" : "none",
                    }}
                >
                    {items.map((c, i) => (
                        <div key={i} className="px-3 shrink-0" style={{ width: `${slot}%` }}>
                            <div className="bg-white rounded-2xl border-2 border-[#f0603a] h-44 flex items-center justify-center p-4">
                                <img src={c.src} alt={c.name} className="max-h-full object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button aria-label="Next" onClick={() => go(1)} className="text-white">
                <FaChevronRight />
            </button>
        </div>
    );
}

export default function TrustedBySection() {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-24">
            <div className="rounded-3xl bg-cover bg-center px-8 md:px-12 py-14" style={{ backgroundImage: "linear-gradient(rgba(38,38,38,.9),rgba(38,38,38,.9)), url('/images/cta-bg.jpg')" }}> {/* TODO */}
                <h2 className="text-white font-bold text-4xl sm:text-6xl leading-tight">Let’s Build A Shopify Store That Drives Real Growth</h2>
                <p className="text-white mt-6 max-w-5xl">
                    Whether you’re launching your first online store, migrating from another platform, or scaling an established brand, we’ll help you create a Shopify experience designed to increase sales and support long-term growth.
                </p>
                <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>Discuss Your Shopify Project</a>
            </div>

            <p className="text-white text-center uppercase mt-16">Trusted by growing businesses across industries</p>
            <LogoCarousel />
        </section>
    );
}