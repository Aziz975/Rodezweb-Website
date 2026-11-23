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
  const get = () =>
    window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 3 : 2;

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

  // Auto-play (pauses on hover)
  useEffect(() => {
    if (paused || dir !== 0) return;

    const t = setTimeout(() => setDir(1), 2500);

    return () => clearTimeout(t);
  }, [paused, dir, start]);

  return (
    <div className="mt-10 flex items-center gap-4">
      <button
        aria-label="Previous"
        onClick={() => go(-1)}
        className="text-white light:text-[#555555] transition-colors hover:text-[#f0603a]"
      >
        <FaChevronLeft />
      </button>

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
            transition: dir !== 0 ? "transform 500ms ease" : "none",
          }}
        >
          {items.map((c, i) => (
            <div
              key={i}
              className="px-3 shrink-0"
              style={{ width: `${slot}%` }}
            >
              <div className="bg-white rounded-2xl border-2 border-[#f0603a] h-44 flex items-center justify-center p-4">
                <img
                  src={c.src}
                  alt={c.name}
                  className="max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Next"
        onClick={() => go(1)}
        className="text-white light:text-[#555555] transition-colors hover:text-[#f0603a]"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default function TrustedBySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24 font-['Plus_Jakarta_Sans',sans-serif] bg-[#1c1c1c] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c]">
      {/* CTA box: background photo + dark overlay */}
      <div className="relative overflow-hidden rounded-[20px] bg-[#1c1c1c] px-8 md:px-12 py-10">
        <img
          src="/images/bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-[#1c1c1c]/60" />

        <div className="relative z-10">
          <h2 className="text-white font-bold text-4xl sm:text-6xl leading-[1.1] tracking-tight">
            Let’s Build A Shopify Store That Drives Real Growth
          </h2>

          <p className="text-white mt-6 max-w-6xl leading-8">
            Whether you’re launching your first online store, migrating from
            another platform, or scaling an established brand, we’ll help you
            create a Shopify experience designed to increase sales and support
            long-term growth.
          </p>

          <a
            href="/contact"
            className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-6`}
          >
            Discuss Your Shopify Project
          </a>
        </div>
      </div>

      <p className="text-white light:text-[#1c1c1c] text-center uppercase mt-16">
        Trusted by growing businesses across industries
      </p>

      <LogoCarousel />
    </section>
  );
}