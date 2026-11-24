import { FaMoneyBillAlt, FaRegUser, FaUserAstronaut, FaCube } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify } from "react-icons/fa6";
import {
  FaCheck,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";

// npm i react-icons

const ACCENT = "bg-[#f0603a]";

const HERO_PARALLAX_IMG = "/images/wp-redesign.png";

/* ---------- DATA ---------- */

const features = [
  {
    title: "Modern Design",
    desc: "Clean, professional, and visually appealing designs tailored to your brand.",
    img: "/images/web-modern-design.png",
  },
  {
    title: "Mobile Responsive",
    desc: "Perfectly optimized for phones, tablets, and desktops.",
    img: "/images/web-mobile-responsive.png",
  },
  {
    title: "Fast Loading",
    desc: "Because every second of delay can cost potential customers.",
    img: "/images/web-fast-loading.png",
  },
  {
    title: "SEO Ready",
    desc: "Built with search engine best practices from day one.",
    img: "/images/wp-redesign.png",
  },
];

const benefits = [
  {
    title: "Generate More Leads",
    desc: "Convert visitors into inquiries with clear messaging and strategic design.",
    tint: "bg-indigo-900/60 text-indigo-400",
    Icon: FaMoneyBillAlt,
  },
  {
    title: "Build Trust Faster",
    desc: "Create a strong first impression that establishes credibility.",
    tint: "bg-red-900/50 text-red-400",
    Icon: FaRegUser,
  },
  {
    title: "Improve Customer Experience",
    desc: "Make it easy for customers to find information and take action.",
    tint: "bg-teal-900/60 text-teal-300",
    Icon: FaUserAstronaut,
  },
  {
    title: "Support Business Growth",
    desc: "Scale your digital presence as your business evolves.",
    tint: "bg-pink-900/50 text-pink-400",
    Icon: FaCube,
  },
];

const steps = [
  {
    title: "Discover",
    desc: "We understand your business, audience, and growth objectives.",
  },
  {
    title: "Design",
    desc: "User-focused designs that combine aesthetics with functionality.",
  },
  {
    title: "Develop",
    desc: "Fast, responsive, and scalable development tailored to your needs.",
  },
  {
    title: "Launch & Grow",
    desc: "Ongoing support and optimization to keep your website performing.",
  },
];

const faqs = [
  {
    q: "Q1. How long does it take to develop a website?",
    a: "The timeline depends on the size and complexity of the project. Most business websites are completed within 1 to 3 weeks, while larger or custom websites may require additional time.",
  },
  {
    q: "Q2. Will my website be mobile-friendly?",
    a: "Yes. Every website we build is fully responsive and optimized for phones, tablets, and desktops.",
  },
  {
    q: "Q3. Can you redesign my existing website?",
    a: "Yes. We can redesign your current website with a modern look, better speed, and improved user experience.",
  },
  {
    q: "Q4. Will my website be SEO-friendly?",
    a: "Yes. We follow search engine best practices from day one, including clean code, fast loading, and proper structure.",
  },
  {
    q: "Q5. Do you provide support after the website is launched?",
    a: "Yes. We offer post-launch support and maintenance to keep your website running smoothly.",
  },
];

const clients = [
  { name: "Banyan Paradise", src: "/images/banyan.png" },
  { name: "Swapna Srushti Water Park", src: "/images/swapna.png" },
  { name: "Dept. of Commerce", src: "/images/commerce.png" },
  { name: "CAP India", src: "/images/cap-India.png" },
  { name: "Government of Telangana", src: "/images/govrn-telangana.png" },
  { name: "KJ Institute of Engineering & Technology", src: "/images/kj-institute.png" },
  { name: "Eye-care Hospital", src: "/images/eyecare.png" },
  { name: "Sterling Cancer Hospital", src: "/images/sterling.png" },
];

/* ---------- ANIMATION HELPERS ---------- */

// Global CSS for the animations (rendered once by the page component)
const ANIMATION_CSS = `
  /* Scroll reveal */
  .reveal {
    opacity: 0;
    transition: opacity 0.8s cubic-bezier(0.22, 0.7, 0.2, 1),
                transform 0.8s cubic-bezier(0.22, 0.7, 0.2, 1);
    will-change: opacity, transform;
  }
  .reveal[data-variant="up"]    { transform: translateY(40px); }
  .reveal[data-variant="down"]  { transform: translateY(-40px); }
  .reveal[data-variant="left"]  { transform: translateX(-60px); }
  .reveal[data-variant="right"] { transform: translateX(60px); }
  .reveal[data-variant="zoom"]  { transform: scale(0.92); }
  .reveal[data-variant="fade"]  { transform: none; }
  .reveal.is-visible { opacity: 1; transform: none; }

  /* Letter reveal */
  .letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(0.7em) rotate(6deg);
    will-change: opacity, transform;
  }
  .letters-in .letter {
    animation: letterIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    animation-delay: var(--d, 0s);
  }
  @keyframes letterIn {
    0%   { opacity: 0; transform: translateY(0.7em) rotate(6deg); }
    100% { opacity: 1; transform: translateY(0) rotate(0); }
  }

  /* Banner slow zoom */
  .hero-zoom { animation: heroZoom 14s ease-out forwards; }
  @keyframes heroZoom {
    from { transform: scale(1.12); }
    to   { transform: scale(1); }
  }

  /* Gentle floating for laptops */
  .float-slow { animation: floatY 6s ease-in-out infinite; }
  .float-slow-delay { animation: floatY 6s ease-in-out infinite; animation-delay: 1.5s; }
  @keyframes floatY {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-10px); }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
    .letter { opacity: 1 !important; transform: none !important; animation: none !important; }
    .hero-zoom, .float-slow, .float-slow-delay { animation: none !important; }
  }
`;

// Fires once when the element enters the viewport
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // true when it enters the screen, false when it leaves,
        // so the animation replays every time it appears again
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// Wrapper: element animates in whenever it appears on screen
// variant: up | down | left | right | zoom | fade
function Reveal({ children, variant = "up", delay = 0, className = "", as: Tag = "div" }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

// Letter-by-letter reveal for headings. Words stay together so lines never break mid-word.
// delay is in seconds (use it to chain several segments inside one heading).
function LetterReveal({ text, delay = 0, step = 0.03, className = "" }) {
  const [ref, inView] = useInView(0.3);
  const words = text.split(" ");
  let index = 0;

  return (
    <span
      ref={ref}
      aria-label={text}
      className={`${inView ? "letters-in" : ""} ${className}`}
    >
      {words.map((word, w) => (
        <span key={w} aria-hidden="true" className="inline-block whitespace-nowrap">
          {word.split("").map((ch, c) => {
            const d = delay + Math.min(index++ * step, 1.4);
            return (
              <span key={c} className="letter" style={{ "--d": `${d.toFixed(2)}s` }}>
                {ch}
              </span>
            );
          })}
          {w < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

/* ---------- COUNT UP ---------- */

function CountUp({ value, duration = 2000 }) {
  const match = value.match(/^(\D*)([\d,]+)(\D*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseInt(match[2].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[3] : "";

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else {
          // reset so the count restarts from 0 next time it appears
          setStarted(false);
          setCount(0);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <>
      {/* Banner - remains image-based in both themes */}
      <section className="relative flex h-40 items-center justify-center overflow-hidden bg-cover bg-center sm:h-52 md:h-80">
        <img
          src="/images/Web-banner.png"
          alt="Web Development Banner"
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
        />

        <h1 className="relative z-10 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
          <LetterReveal text="Web Development" step={0.05} />
        </h1>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <h2 className="text-4xl font-extrabold uppercase leading-[1.05] text-[#fdfaf9] sm:text-5xl lg:text-6xl light:text-[#1c1c1c]">
          <LetterReveal text="Websites Built To Drive Growth," />
          <span className="mt-3 block text-3xl text-neutral-400 sm:text-4xl light:text-[#777777]">
            <LetterReveal text="Not Just Look Good" delay={0.9} />
          </span>
        </h2>

        <Reveal variant="right" delay={200}>
          <p className="text-justify leading-8 text-[#fdfaf9] light:text-[#555555]">
            We create high-performing websites that attract visitors, build trust, generate leads,
            and help businesses grow online with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className={`${ACCENT} rounded-full px-8 py-3 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#f0603a]/40`}
            >
              Build My Website
            </a>

            {[FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify].map((Icon, i) => (
              <span
                key={i}
                className="hidden h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white transition duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-[#f0603a] sm:flex"
              >
                <Icon />
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ---------- PARALLAX IMAGE ---------- */

function HeroParallaxImage() {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const wrap = wrapRef.current;
      const img = imgRef.current;

      if (!wrap || !img) return;

      const rect = wrap.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const shift =
        (rect.top + rect.height / 2 - window.innerHeight / 2) * -0.3;

      img.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Reveal variant="fade">
      <section
        ref={wrapRef}
        className="relative h-[300px] w-full overflow-hidden bg-[#c9cbc4] sm:h-[420px] md:h-[560px] lg:h-[700px]"
      >
        <img
          ref={imgRef}
          src={HERO_PARALLAX_IMG}
          alt="Person working on a laptop while sitting on a geometric structure"
          loading="eager"
          decoding="async"
          className="absolute left-0 top-[-12%] h-[124%] w-full max-w-none object-cover object-center will-change-transform"
        />
      </section>
    </Reveal>
  );
}

/* ---------- CUSTOMERS ONLINE ---------- */

function CustomersOnline() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 text-center">
      <h2 className="text-3xl font-bold text-[#fdfaf9] sm:text-5xl light:text-[#1c1c1c]">
        <LetterReveal text="Your Customers Are Looking Online." />
      </h2>

      <Reveal variant="up" delay={100}>
        <h3 className="mt-4 text-xl text-[#fdfaf9] light:text-[#333333]">
          What Are They Finding?
        </h3>
      </Reveal>

      <div className="mt-8 space-y-1 text-[#fdfaf9] light:text-[#555555]">
        <Reveal variant="up" delay={150}>
          <p>Your website is often the first impression people have of your business.</p>
        </Reveal>

        <Reveal variant="up" delay={250}>
          <p>
            A slow, outdated, or confusing website can drive potential customers away before they
            even contact you.
          </p>
        </Reveal>

        <Reveal variant="up" delay={350}>
          <p>
            Today’s customers expect fast loading speeds, seamless experiences, and instant access to
            information. Businesses that deliver those experiences earn more trust, more leads, and
            more opportunities to grow.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 flex items-center justify-center gap-0 overflow-hidden">
        <Reveal variant="left" delay={200} className="w-1/2 max-w-[520px]">
          <img
            src="https://rodezweb.com/wp-content/uploads/2026/06/Left-Mac-1.png"
            alt="Laptop showing code editor"
            className="float-slow w-full"
          />
        </Reveal>

        <Reveal variant="zoom" delay={500} className="z-10 mx-[-24px] hidden w-20 md:block">
          <img
            src="https://rodezweb.com/wp-content/uploads/2026/06/cursor.webp"
            alt=""
            className="w-full"
          />
        </Reveal>

        <Reveal variant="right" delay={200} className="hidden w-1/2 max-w-[520px] sm:block">
          <img
            src="https://rodezweb.com/wp-content/uploads/2026/06/Right-Mac.png"
            alt="Laptop showing apps"
            className="float-slow-delay w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- GROWTH PLATFORMS ---------- */

function GrowthPlatforms() {
  const points = [
    "Generate qualified leads",
    "Build credibility and trust",
    "Support your sales process",
    "Improve customer experience",
    "Create growth opportunities",
  ];

  const stats = [
    ["+3,427", "Websites Delivered"],
    ["+160", "Businesses Empowered"],
    ["99%", "Client Satisfaction Rate"],
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 className="text-3xl font-bold leading-tight text-[#fdfaf9] sm:text-5xl light:text-[#1c1c1c]">
        <LetterReveal text="We Don’t Just Build Websites. We Build Digital Growth Platforms." step={0.02} />
      </h2>

      <Reveal variant="up">
        <p className="mt-8 text-[#fdfaf9] light:text-[#555555]">
          A website should do more than exist online.
        </p>

        <p className="text-[#fdfaf9] light:text-[#555555]">It should:</p>
      </Reveal>

      <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#fdfaf9] light:text-[#444444]">
        {points.map((p, i) => (
          <Reveal as="li" key={p} variant="up" delay={i * 100} className="flex items-center gap-2">
            <FaCheck className="text-[#f0603a]" />
            {p}
          </Reveal>
        ))}
      </ul>

      <Reveal variant="up" delay={200}>
        <p className="mt-8 text-[#fdfaf9] light:text-[#555555]">
          At Rodez Web Technologies, every website is designed with one goal in mind—helping your
          business move forward.
        </p>
      </Reveal>

      {/* Stats banner - intentionally retains its gradient */}
      <Reveal variant="zoom" delay={100} className="mt-24">
        <div className="grid grid-cols-2 items-center gap-8 rounded-3xl bg-gradient-to-r from-blue-900 via-red-900/80 to-blue-900 px-6 py-10 text-white transition duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/40 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="transition duration-300 hover:-translate-y-1">
              <div className="text-5xl font-semibold tabular-nums md:text-7xl">
                <CountUp value={n} />
              </div>
              <div className="mt-1 text-sm">{l}</div>
            </div>
          ))}

          <div className="col-span-2 text-left text-xl font-bold text-white md:col-span-1">
            Why Your Website Matters More Than Ever
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- FEATURE LIST ---------- */

function FeatureList() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-6 text-center">
      <h2 className="text-3xl font-bold leading-tight text-[#fdfaf9] sm:text-5xl light:text-[#1c1c1c]">
        <LetterReveal text="We Don’t Just Build Websites. We Build Digital Growth Platforms." step={0.02} />
      </h2>

      <Reveal variant="up" delay={100}>
        <p className="mt-6 text-[#fdfaf9] light:text-[#555555]">
          Whether you’re launching a new business or upgrading an existing presence, we create
          websites that align with your objectives and deliver measurable results.
        </p>
      </Reveal>

      <div className="mt-14 space-y-4 text-left">
        {features.map((f, i) => (
          <Reveal key={f.title} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
            <div className="group rounded-lg border border-[#333333] bg-[#262626] px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f0603a] hover:shadow-xl hover:shadow-[#f0603a]/10 light:border-[#e5e5e5] light:bg-white">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                className="grid w-full grid-cols-[1fr_auto] items-center gap-4 text-left md:grid-cols-[320px_1fr_auto]"
              >
                <span className="flex items-center gap-4">
                  <span className="font-bold text-white transition-colors group-hover:text-[#f0603a] light:text-[#777777]">
                    0{i + 1}
                  </span>

                  <span className="text-xl font-bold text-white transition-transform duration-300 group-hover:translate-x-1 md:text-3xl light:text-[#1c1c1c]">
                    {f.title}
                  </span>
                </span>

                <span className="hidden text-neutral-400 md:block light:text-[#666666]">
                  {f.desc}
                </span>

                <FaArrowRight
                  className={`text-3xl text-[#f0603a] transition-transform duration-300 group-hover:scale-125 ${
                    open === i ? "" : "-rotate-45"
                  }`}
                />
              </button>

              {open === i && (
                <img
                  src={f.img}
                  alt={f.title}
                  className="mt-6 max-h-[450px] w-full rounded-md object-cover"
                />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */

function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h2 className="text-3xl font-bold leading-tight text-[#fdfaf9] sm:text-5xl light:text-[#1c1c1c]">
        <LetterReveal text="What Can A High-Performing Website Do For Your Business?" step={0.02} />
      </h2>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <Reveal key={b.title} variant="up" delay={i * 120}>
            <div className="group flex h-full flex-col items-center rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/5 hover:shadow-xl light:hover:bg-black/5">
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] ${b.tint}`}
              >
                <b.Icon className="text-2xl" />
              </span>

              <h3 className="mt-6 text-2xl text-[#fdfaf9] transition-colors group-hover:text-[#f0603a] light:text-[#1c1c1c]">
                {b.title}
              </h3>

              <p className="mt-3 max-w-xs text-neutral-300 light:text-[#666666]">
                {b.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */

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
          "linear-gradient(rgba(28,28,28,.6),rgba(28,28,28,.6)), url('/images/process-bg.jpg')",
      }}
    >
      <div className="grid gap-12 py-16 lg:min-h-[660px] lg:grid-cols-[382px_minmax(0,1fr)] lg:items-center lg:gap-0 lg:py-[90px]">
        <Reveal variant="left">
          <div className="bg-[#262626] px-6 py-12 text-white sm:px-9 sm:py-14">
            <h2 className="text-center text-4xl font-bold leading-tight text-white md:text-5xl">
              <LetterReveal text="From Vision To Launch" />
            </h2>

            <p className="mt-8 text-[1.15rem] leading-8 text-white">
              Whether you’re launching a new business or upgrading an existing presence, we create
              websites that align with your objectives and deliver measurable results.
            </p>
          </div>
        </Reveal>

        <Reveal variant="right" delay={150} className="min-w-0">
          <div className="relative h-[370px] min-w-0">
            <button
              aria-label="Previous"
              onClick={prev}
              disabled={idx === 0}
              className="absolute left-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md transition hover:scale-110 hover:bg-[#f0603a] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-neutral-900 lg:left-[13px] lg:h-[50px] lg:w-[50px]"
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
                      className={`mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-white text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-110 ${ACCENT}`}
                    >
                      {i + 1}
                    </span>
                  );

                  const card = (
                    <div className="relative z-10 rounded-md bg-white px-6 py-6 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/30">
                      <h3 className="text-xl text-neutral-900 transition-colors group-hover:text-[#f0603a]">
                        {s.title}
                      </h3>

                      <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                        {s.desc}
                      </p>
                    </div>
                  );

                  return (
                    <div
                      key={s.title}
                      data-step
                      className={`group flex h-[370px] w-[var(--cw)] shrink-0 flex-col ${
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
              className="absolute right-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md transition hover:scale-110 hover:bg-[#f0603a] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-neutral-900 lg:right-[15px] lg:h-[50px] lg:w-[50px]"
            >
              <FaChevronRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE ---------- */

function WhyChoose() {
  return (
    <section className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-20 lg:grid-cols-2">
      <div>
        <h2 className="text-4xl font-bold leading-[1.6] text-[#fdfaf9] sm:text-5xl light:text-[#1c1c1c]">
          <LetterReveal text="Why Businesses" />{" "}
          <span className="bg-[#e65c38] px-3 text-white">
            <LetterReveal text="Choose" delay={0.5} />
          </span>{" "}
          <LetterReveal text="Rodez?" delay={0.7} />
        </h2>

        <Reveal variant="up" delay={150}>
          <p className="mt-6 text-justify leading-8 text-[#fdfaf9] light:text-[#555555]">
            A slow, outdated website can drive customers away before they even learn about your
            business. We create stunning, high-performing websites that build trust, capture
            attention, and turn visitors into customers.
          </p>

          <a
            href="/contact"
            className={`${ACCENT} mt-8 inline-block rounded-full px-8 py-3 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#f0603a]/40`}
          >
            Discuss Your Website Project
          </a>
        </Reveal>
      </div>

      <Reveal variant="right" delay={150}>
        <div className="group relative">
          <img
            src="/images/why-rodezweb.png"
            alt="Website on desktop, tablet and phone"
            className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
          />

          {[
            ["01", "top-[15%] left-[10%]"],
            ["02", "top-[28%] left-[62%]"],
            ["03", "top-[48%] left-[18%]"],
            ["04", "top-[65%] left-[62%]"],
          ].map(([n, pos]) => (
            <span
              key={n}
              className={`absolute ${pos} rounded bg-white px-2 py-1 text-sm text-neutral-900 transition duration-300 hover:scale-125 hover:bg-[#f0603a] hover:text-white`}
            >
              {n}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- FAQS ---------- */

function Faqs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-2">
      <div>
        <Reveal variant="up">
          <p className="text-[#fdfaf9] light:text-[#555555]">FAQS</p>
        </Reveal>

        <h2 className="mt-4 text-5xl font-bold leading-tight text-[#fdfaf9] sm:text-6xl light:text-[#1c1c1c]">
          <LetterReveal text="Frequently Asked Questions!" />
        </h2>

        <Reveal variant="up" delay={200}>
          <p className="mt-8 max-w-md text-[#fdfaf9] light:text-[#555555]">
            Find answers to common questions about our services, process, timelines, and how we help
            businesses achieve their digital goals.
          </p>
        </Reveal>
      </div>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <Reveal key={f.q} variant="right" delay={i * 90}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="flex w-full items-center gap-4 rounded-md bg-white px-5 py-5 text-left font-semibold text-neutral-900 transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-lg"
            >
              {open === i ? <FaMinus /> : <FaPlus />}
              {f.q}
            </button>

            {open === i && (
              <div className="mt-1 animate-[fadeDown_0.35s_ease-out] rounded-md border-t-2 border-[#f0603a] bg-white px-6 py-6 leading-7 text-neutral-800">
                {f.a}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- RESPONSIVE CAROUSEL ---------- */

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

/* ---------- LOGO CAROUSEL ---------- */

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

  useEffect(() => {
    if (paused || dir !== 0) return;

    const t = setTimeout(() => setDir(1), 2500);

    return () => clearTimeout(t);
  }, [paused, dir, start]);

  return (
    <Reveal variant="up" delay={150}>
      <div className="mt-10 flex items-center gap-4">
        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="text-[#fdfaf9] transition hover:scale-125 hover:text-[#f0603a] light:text-[#555555]"
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
              <div key={i} className="shrink-0 px-3" style={{ width: `${slot}%` }}>
                <div className="flex h-44 items-center justify-center rounded-2xl border-2 border-[#f0603a] bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-xl hover:shadow-[#f0603a]/30">
                  <img
                    src={c.src}
                    alt={c.name}
                    className="max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="text-[#fdfaf9] transition hover:scale-125 hover:text-[#f0603a] light:text-[#555555]"
        >
          <FaChevronRight />
        </button>
      </div>
    </Reveal>
  );
}

/* ---------- CTA AND CLIENTS ---------- */

function CtaAndClients() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      {/* CTA retains dark overlay for image readability */}
      <Reveal variant="zoom">
        <div
          className="rounded-3xl bg-neutral-700/60 bg-cover bg-center px-8 py-14 transition duration-500 hover:shadow-2xl hover:shadow-[#f0603a]/20 md:px-12"
          style={{
            backgroundImage:
              "linear-gradient(rgba(38,38,38,.9),rgba(38,38,38,.9)), url('/images/cta-bg.jpg')",
          }}
        >
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
            <LetterReveal text="Let’s Build A Website That Works As Hard As You Do" step={0.025} />
          </h2>

          <p className="mt-6 max-w-5xl text-white">
            Whether you’re launching a new brand, upgrading an outdated website, or looking to
            generate more leads online, we’ll help you create a digital presence designed for growth.
          </p>

          <a
            href="/contact"
            className={`${ACCENT} mt-8 inline-block rounded-full px-8 py-3 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#f0603a]/40`}
          >
            Discuss Your Website Project
          </a>
        </div>
      </Reveal>

      <p className="mt-16 text-center uppercase text-[#fdfaf9] light:text-[#1c1c1c]">
        <LetterReveal text="Trusted by growing businesses across industries" step={0.02} />
      </p>

      <LogoCarousel />
    </section>
  );
}

/* ---------- PAGE ---------- */

export default function WebDevelopment() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#1c1c1c] font-sans text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
      {/* Animation styles (scroll reveal, letter reveal, banner zoom, floating) */}
      <style>{ANIMATION_CSS + `
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Hero />
      <HeroParallaxImage />
      <CustomersOnline />
      <GrowthPlatforms />
      <FeatureList />
      <Benefits />
      <Process />
      <WhyChoose />
      <Faqs />
      <CtaAndClients />
    </main>
  );
}
