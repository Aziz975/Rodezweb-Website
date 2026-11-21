import { useState } from "react";

/*
  Colours (sampled from the screenshots):
  - Page background : #1c1c1c
  - Dark cards      : #242424
  - Accent orange   : #f05a2d
  - Light cards     : #ffffff / #f1f1f1

  Font (add once in index.html <head>):
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  All <img src=""> are intentionally empty — fill them in later.
*/

const approachCards = [
  {
    title: "Strategy & Vision",
    text: "We begin with a clear understanding of your business, goals, audience, and long-term vision to build a strong foundation for growth.",
    tags: ["Strategy", "Research", "Vision"],
    button: "Explore Strategy",
    image: "/images/homeimg1.png",
  },
  {
    title: "Creative & Design",
    text: "We transform ideas into meaningful visual experiences through creative design, thoughtful branding, and engaging digital interfaces.",
    tags: ["Branding", "UI/UX", "Creative"],
    button: "Explore Design",
    image: "/images/homeimg2.png",
  },
  {
    title: "Development & Growth",
    text: "We bring ideas to life with modern technology, scalable development, and digital experiences designed for long-term growth.",
    tags: ["Development", "Technology", "Growth"],
    button: "Explore Development",
    image: "/images/homeimg3.png",
  },
];

/* Small section label with an orange icon */
function Label({ children, variant = "corner" }) {
  return (
    <div className="flex items-center gap-2">
      {variant === "square" ? (
        <span className="h-2.5 w-2.5 rounded-[2px] border-[1.5px] border-[#f05a2d]" />
      ) : (
        <span className="h-2.5 w-2.5 rounded-tl-[3px] border-l-[1.5px] border-t-[1.5px] border-[#f05a2d]" />
      )}
      <span className="text-[10px] font-semibold uppercase tracking-wide text-white/90 sm:text-[11px]">
        {children}
      </span>
    </div>
  );
}

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#f05a2d] lg:h-9 lg:w-9" fill="currentColor" aria-hidden="true">
    <path d="M4.5 6.5C2.6 8 2 10 2 12.5V18h6.5v-6H5.2c0-1.7.6-2.9 1.9-3.8L4.5 6.5zm10.5 0c-1.9 1.5-2.5 3.5-2.5 6V18H19v-6h-3.3c0-1.7.6-2.9 1.9-3.8L15 6.5z" />
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#f05a2d] lg:h-5 lg:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
    <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
  </svg>
);

export default function DigitalMarketing() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#1c1c1c] pb-24 font-['Manrope',sans-serif] text-white lg:pb-40">
      <style>{`
        @keyframes dm-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        .dm-fade { animation: dm-fade .45s ease both; }
        @media (prefers-reduced-motion: reduce) { .dm-fade { animation: none; } }
      `}</style>

      {/* ===================== HERO ===================== */}
      <section className="mx-auto w-full max-w-[1140px] px-5 pt-10 sm:px-6 lg:pt-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Label>Full-Service Digital Agency</Label>
            <h1 className="mt-4 text-[clamp(2.1rem,4.6vw,3.9rem)] font-extrabold leading-[1.08] tracking-tight">
              Your Growth Starts <br className="hidden sm:block" />
              With Better Digital <br className="hidden sm:block" />
              Marketing
            </h1>
            <p className="mt-6 max-w-[440px] text-[13px] font-medium leading-relaxed text-white/90 sm:text-[15px]">
              From SEO and paid advertising to web development and branding, we help businesses{" "}
              <span className="text-[#f05a2d]">attract</span> more customers, generate qualified{" "}
              <span className="text-[#f05a2d]">leads</span>, and{" "}
              <span className="text-[#f05a2d]">scale faster</span> in today’s competitive digital landscape.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex w-fit items-center rounded-full bg-[#f05a2d] px-5 py-2.5 text-[12px] font-bold text-white transition hover:brightness-110 sm:text-[13px] lg:mt-[150px]"
          >
            + Get a Free Consultation
          </a>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:h-[560px] lg:grid-cols-3 lg:gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-3 lg:gap-5">
            <div className="flex items-center gap-3 rounded-[10px] bg-white p-4 text-[#1c1c1c] lg:min-h-0 lg:flex-[40] lg:px-5">
              <div className="flex shrink-0">
                {[0, 1, 2].map((n) => (
                  <img
                    key={n}
                    src="images/avtar.png"
                    alt=""
                    className="-ml-3 h-9 w-9 rounded-full border-2 border-white bg-gray-300 object-cover first:ml-0 lg:h-11 lg:w-11"
                  />
                ))}
              </div>
              <div>
                <p className="text-[14px] font-bold leading-tight lg:text-[16px]">
                  200+ Businesses
                  <br />
                  Empowered
                </p>
                <p className="mt-1 text-[10px] leading-snug text-gray-500 lg:text-[11px]">
                  Helping brands across industries build a stronger digital presence.
                </p>
              </div>
            </div>

            <div className="flex min-h-[230px] flex-col justify-between rounded-[10px] border border-white/90 p-4 lg:min-h-0 lg:flex-[128] lg:p-6">
              <div>
                <QuoteIcon />
                <p className="mt-3 text-[13px] font-bold leading-snug lg:text-[15px]">
                  Every strategy is backed by insights, analytics, and measurable performance.
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold lg:text-5xl">92%</p>
                <p className="mt-1 text-[11px] text-white/90 lg:text-[12px]">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Center column */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="min-h-[340px] overflow-hidden rounded-[10px] bg-[#f1f1f1] lg:min-h-0 lg:flex-[138]">
              <img src="images/redhelmet.webp" alt="" className="h-full min-h-[340px] w-full object-cover lg:min-h-0" />
            </div>
            <div className="flex items-center justify-between rounded-[10px] bg-[#f05a2d] px-4 py-4 lg:min-h-0 lg:flex-[29] lg:px-5 lg:py-0">
              <div>
                <p className="text-xl font-bold leading-none lg:text-2xl">20+</p>
                <p className="mt-1 text-[10px] font-semibold lg:text-[12px]">Global Awards</p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white lg:h-10 lg:w-10">
                <TrophyIcon />
              </span>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1 lg:my-1 lg:gap-4">
            <div className="flex min-h-[230px] flex-col justify-between rounded-[10px] border border-white/90 p-4 lg:min-h-0 lg:flex-[125] lg:p-6">
              <p className="text-[13px] font-bold leading-snug lg:text-[15px]">
                We create{" "}
                <span className="text-[#f05a2d]">powerful digital experiences</span> through strategic
                marketing, creative design, and innovative technology that help businesses grow online.
              </p>
              <div>
                <p className="text-4xl font-bold lg:text-5xl">5K+</p>
                <p className="mt-1 text-[11px] text-white/90 lg:text-[12px]">Projects Delivered</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-[10px] bg-white px-4 py-4 text-[#1c1c1c] lg:min-h-0 lg:flex-[27] lg:py-0">
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#f05a2d]/40">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f05a2d]" />
              </span>
              <span className="text-[12px] font-semibold lg:text-[14px]">Available For Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OUR APPROACH ===================== */}
  <section className="mx-auto mt-24 w-full max-w-[1300px] px-5 sm:px-6 lg:mt-48">
  <Label variant="square">Our Approach</Label>

  <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,3.5rem)] font-extrabold leading-[1.45] tracking-tight">
    Every great brand begins with a clear{" "}
    <span className="inline-block rounded-md bg-[#f05a2d] px-3 leading-[1.25] sm:px-4">
      vision
    </span>{" "}
    and the{" "}
    <span className="inline-block rounded-md bg-[#f05a2d] px-3 leading-[1.25] sm:px-4">
      courage
    </span>{" "}
    to bring it to life.
  </h2>

  <div className="mt-8 flex flex-col gap-2 lg:mt-10 lg:h-[500px] lg:flex-row lg:gap-3">
    {approachCards.map((card, i) =>
      i === active ? (
        <article
          key={card.title}
          className="dm-fade flex min-h-[400px] flex-col overflow-hidden rounded-xl bg-[#242424] lg:min-h-0 lg:flex-1 lg:flex-row"
        >
          {/* Content */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:w-[45%] lg:p-12">
            <h3 className="text-xl font-bold sm:text-2xl">
              {card.title}
            </h3>

            <p className="max-w-[420px] text-[13px] leading-relaxed text-white/80 sm:text-[15px]">
              {card.text}
            </p>

            <div className="flex flex-wrap gap-2">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f1f1f1] px-3 py-1 text-[11px] font-semibold text-[#1c1c1c]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="mt-1 w-fit rounded-md bg-[#f05a2d] px-4 py-2 text-[12px] font-bold text-white transition hover:brightness-110 sm:text-[13px]"
            >
              {card.button}
            </button>
          </div>

          {/* Active image */}
          <div className="h-64 overflow-hidden bg-[#f1f1f1] sm:h-80 lg:h-auto lg:w-[55%]">
            <img
              src={card.image}
              alt={`${card.title} visual`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </article>
      ) : (
        /* Collapsed image panels */
        <button
          key={card.title}
          type="button"
          onClick={() => setActive(i)}
          aria-label={`Show ${card.title}`}
          className="group relative h-20 shrink-0 overflow-hidden rounded-xl bg-[#f1f1f1] transition-all duration-500 hover:brightness-95 lg:h-auto lg:w-[12%] lg:flex-none"
        >
          <img
            src={card.image}
            alt={`${card.title} preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />

          {/* Vertical title on desktop */}
          <span className="absolute inset-0 hidden items-center justify-center p-3 text-center text-sm font-bold text-white drop-shadow-lg lg:flex [writing-mode:vertical-rl] rotate-180">
            {card.title}
          </span>

          {/* Title on mobile */}
          <span className="absolute inset-0 flex items-center justify-center px-4 text-sm font-bold text-white drop-shadow-lg lg:hidden">
            {card.title}
          </span>
        </button>
      )
    )}
  </div>
</section>

      {/* ===================== OUR SERVICES ===================== */}
      <section className="mx-auto mt-24 w-full max-w-[1300px] px-5 sm:px-6 lg:mt-48">
        <Label>Our Services</Label>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <h2 className="text-[clamp(2rem,4.2vw,4rem)] font-extrabold leading-[1.08] tracking-tight">
            Digital Solutions <br className="hidden sm:block" />
            That Drive <br className="hidden sm:block" />
            Business Growth
          </h2>
          <p className="max-w-[520px] text-[13px] font-medium leading-relaxed text-white/90 sm:text-[15px] lg:self-center">
            From building high-performing websites to executing data-driven marketing campaigns, we help
            businesses establish a stronger online presence, attract more customers, and achieve
            measurable growth.
          </p>
        </div>
      </section>
    </div>
  );
}
