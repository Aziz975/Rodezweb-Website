import { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const ACCENT = "bg-[#f0603a]";

const steps = [
  {
    title: "Discover",
    desc: "Understanding your products, customers, and goals.",
  },
  {
    title: "Plan",
    desc: "Creating a strategy for growth and conversions.",
  },
  {
    title: "Design & Develop",
    desc: "Building a visually engaging and high-performing store.",
  },
  {
    title: "Launch & Optimize",
    desc: "Continuous improvements based on customer behavior and performance.",
  },
];

const faqs = [
  {
    q: "Q. Why should I choose Shopify for my online store?",
    a: "Shopify is secure, scalable, user-friendly, and designed specifically for eCommerce businesses.",
  },
  {
    q: "Q. Can you migrate my existing store to Shopify?",
    a: "Yes. We can help transfer products, customers, and content from other platforms.",
  },
  {
    q: "Q. Will my Shopify store work on mobile devices?",
    a: "Absolutely. Every store we build is fully optimized for mobile shopping.",
  },
  {
    q: "Q. Can I manage products and orders myself?",
    a: "Yes. Shopify provides an easy-to-use dashboard that allows you to manage your entire store.",
  },
  {
    q: "Q. Do you provide support after launch?",
    a: "Yes. We offer maintenance, updates, troubleshooting, and ongoing support.",
  },
];

function Process() {
  const [idx, setIdx] = useState(0);
  const [maxIdx, setMaxIdx] = useState(Math.max(0, steps.length - 3));

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const touchX = useRef(null);

  useEffect(() => {
    const measure = () => {
      const vp = viewportRef.current;
      const tr = trackRef.current;
      const first = tr && tr.querySelector("[data-step]");

      if (!vp || !first) return;

      const card = first.offsetWidth;
      const gap = parseFloat(getComputedStyle(tr).columnGap) || 0;
      const total = steps.length * card + (steps.length - 1) * gap;

      const max = Math.max(
        0,
        Math.ceil((total - vp.clientWidth) / (card + gap))
      );

      setMaxIdx(max);
      setIdx((i) => Math.min(i, max));
    };

    measure();

    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;

    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;

    if (Math.abs(dx) > 40) {
      (dx < 0 ? next : prev)();
    }
  };

  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(28,28,28,.6),rgba(28,28,28,.6)), url('/images/shopify-process-bg.jpg')",
      }}
    >
      <div className="grid gap-12 py-16 lg:min-h-[660px] lg:grid-cols-[382px_minmax(0,1fr)] lg:items-center lg:gap-0 lg:py-[90px]">
        <div className="bg-[#262626] px-6 py-12 sm:px-9 sm:py-14">
          <h2 className="text-center text-4xl font-bold leading-tight text-white md:text-5xl">
            From Brand Vision To Online Success
          </h2>

          <p className="mt-8 text-[1.15rem] leading-8 text-white">
            Whether you’re launching a new business or upgrading an existing
            presence, we create websites that align with your objectives and
            deliver measurable results.
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
              style={{
                transform: `translateX(calc(-1 * ${idx} * (var(--cw) + var(--gap))))`,
              }}
            >
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-[163px] z-0 h-1 bg-[#d5d9e6]"
              />

              {steps.map((s, i) => {
                const top = i % 2 === 0;

                const marker = (
                  <span
                    className={`mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-white text-lg font-semibold text-white ${ACCENT}`}
                  >
                    {i + 1}
                  </span>
                );

                const card = (
                  <div className="relative z-10 rounded-md bg-white px-6 py-6 text-center">
                    <h3 className="text-xl text-neutral-900">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                      {s.desc}
                    </p>
                  </div>
                );

                return (
                  <div
                    key={s.title}
                    data-step
                    className={`flex h-[370px] w-[var(--cw)] shrink-0 flex-col ${
                      top ? "pt-[55px]" : "pt-[27px]"
                    }`}
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

function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-start bg-[#1c1c1c] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c]">
      <div>
        <h2 className="text-white light:text-[#1c1c1c] font-bold text-4xl sm:text-5xl leading-[1.6]">
          Why Businesses{" "}
          <span className="bg-[#e65c38] px-3 text-white">
            Choose
          </span>{" "}
          Rodez For Shopify Development
        </h2>

        <p className="text-white light:text-[#555555] text-justify leading-8 mt-6">
          A slow, outdated website can drive customers away before they even
          learn about your business. We create stunning, high-performing
          websites that build trust, capture attention, and turn visitors into
          customers.
        </p>

        <a
          href="/contact"
          className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}
        >
          Discuss Your Website Project
        </a>
      </div>

      <div className="relative">
        <img
          src="/images/why-rodezweb.png"
          alt="Store on desktop, tablet and phone"
          className="w-full"
          loading="lazy"
        />

        {[
          ["01", "top-[15%] left-[10%]"],
          ["02", "top-[28%] left-[62%]"],
          ["03", "top-[48%] left-[18%]"],
          ["04", "top-[65%] left-[62%]"],
        ].map(([n, pos]) => (
          <span
            key={n}
            className={`absolute ${pos} bg-white text-neutral-900 text-sm px-2 py-1 rounded`}
          >
            {n}
          </span>
        ))}
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10 bg-[#1c1c1c] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c]">
      <div>
        <p className="text-white light:text-[#555555]">FAQS</p>

        <h2 className="text-white light:text-[#1c1c1c] font-bold text-5xl sm:text-6xl leading-tight mt-4">
          Frequently Asked Questions!
        </h2>

        <p className="text-white light:text-[#555555] mt-8 max-w-md">
          Find answers to common questions about our services, process,
          timelines, and how we help businesses achieve their digital goals.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="w-full bg-white rounded-md px-5 py-5 flex items-center gap-4 text-left font-semibold text-neutral-900"
            >
              {open === i ? <FaMinus /> : <FaPlus />}
              {f.q}
            </button>

            {open === i && (
              <div className="bg-white rounded-md border-t-2 border-[#f0603a] mt-1 px-6 py-6 text-neutral-800 leading-7">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ShopifyProcessFaqSection() {
  return (
    <div className="bg-[#1c1c1c] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c]">
      <Process />
      <WhyChoose />
      <Faqs />
    </div>
  );
}