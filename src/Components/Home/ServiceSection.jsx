import { useState } from "react";

/*
  Section only — drop <ServicesSection /> anywhere inside your existing page.
  Styling kept from the previous page: Manrope font, orange #f05a2d.

  Theme: dark by default (#050608). When the Navbar toggle adds <html class="light">,
  the variables under `html.light .sv-root` take over (bright mode).
  Change --sv-bg in the dark block to #1c1c1c if you want it to match the rest of your page.

  Font (if not already added, index.html <head>):
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
*/

const services = [
  {
    title: "Website Design & Development",
    tags: ["UI/UX Design", "WordPress", "Shopify"],
    text: "We create modern, responsive, and conversion-focused websites that deliver exceptional user experiences and help businesses grow online.",
    href: "/services/web-development",
  },
  {
    title: "S.E.O",
    tags: ["On-Page SEO", "Technical SEO", "Link Building"],
    text: "We improve your search visibility with data-driven SEO strategies that bring qualified traffic and long-term organic growth.",
    href: "/services/seo",
  },
  {
    title: "Social Media Marketing",
    tags: ["Content Strategy", "Instagram", "LinkedIn"],
    text: "We build engaging social media presences that grow your audience, strengthen your brand, and turn followers into customers.",
    href: "/services/social-media-marketing",
  },
  {
    title: "Performance Marketing",
    tags: ["Google Ads", "Meta Ads", "Conversion Tracking"],
    text: "We run measurable paid campaigns focused on leads, sales, and return on ad spend, optimised continuously with real data.",
    href: "/services/performance-marketing",
  },
  {
    title: "E-Commerce Solutions",
    tags: ["Store Setup", "Payment Gateway", "Product Management"],
    text: "We design and launch fast, secure online stores that make it easy for customers to browse, buy, and come back again.",
    href: "/services/e-commerce",
  },
];

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* Tags + description + Learn More (used on the right on desktop, under the title on mobile) */
function Detail({ service }) {
  return (
    <div className="sv-fade">
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[color:var(--sv-chip)] px-5 py-2.5 text-[13px] font-medium text-[color:var(--sv-chip-text)] sm:px-6 sm:py-3 sm:text-[15px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-6 max-w-[600px] text-[15px] font-medium leading-[1.8] text-[color:var(--sv-text)] sm:text-[17px] lg:mt-9 lg:text-[clamp(1.05rem,1.45vw,1.4rem)]">
        {service.text}
      </p>

      <a
        href={service.href}
        className="mt-6 inline-flex items-center gap-3 text-[15px] font-semibold text-[#f05a2d] transition hover:gap-4 sm:text-[17px] lg:mt-10"
      >
        Learn More <ArrowRight />
      </a>
    </div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="sv-root w-full overflow-x-hidden bg-[color:var(--sv-bg)] py-14 font-['Manrope',sans-serif] text-[color:var(--sv-text)] sm:py-20 lg:py-24">
      <style>{`
        /* ---------- Dark mode (default) ---------- */
        .sv-root {
          --sv-bg: #050608;
          --sv-text: #ffffff;
          --sv-num-active: rgba(255, 255, 255, 0.8);
          --sv-num-idle: rgba(255, 255, 255, 0.4);
          --sv-title-idle: rgba(255, 255, 255, 0.45);
          --sv-title-hover: rgba(255, 255, 255, 0.7);
          --sv-chip: #f1f1f1;
          --sv-chip-text: #1c1c1c;
          transition: background-color .3s ease, color .3s ease;
        }

        /* ---------- Bright mode ---------- */
        html.light .sv-root {
          --sv-bg: #ffffff;
          --sv-text: #1c1c1c;
          --sv-num-active: rgba(28, 28, 28, 0.8);
          --sv-num-idle: rgba(28, 28, 28, 0.35);
          --sv-title-idle: rgba(28, 28, 28, 0.4);
          --sv-title-hover: rgba(28, 28, 28, 0.7);
          --sv-chip: #1c1c1c;
          --sv-chip-text: #ffffff;
        }

        .sv-title-idle:hover { color: var(--sv-title-hover); }

        @keyframes sv-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .sv-fade { animation: sv-fade .4s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .sv-fade { animation: none; }
          .sv-root { transition: none; }
        }
      `}</style>

      <div className="mx-auto grid w-full max-w-[1300px] gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: numbered list */}
        <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-9">
          {services.map((service, i) => {
            const isActive = i === active;
            return (
              <li key={service.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={isActive}
                  className="flex w-full items-start gap-4 text-left sm:gap-5"
                >
                  <span
                    className={`w-8 shrink-0 pt-[0.55em] text-[clamp(1.1rem,2.3vw,2.4rem)] font-light leading-none transition-colors duration-300 sm:w-12 lg:w-14 ${
                      isActive
                        ? "text-[color:var(--sv-num-active)]"
                        : "text-[color:var(--sv-num-idle)]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[clamp(1.6rem,3.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight transition-colors duration-300 ${
                      isActive
                        ? "text-[color:var(--sv-text)]"
                        : "sv-title-idle text-[color:var(--sv-title-idle)]"
                    }`}
                  >
                    {service.title}
                  </span>
                </button>

                {/* Mobile / tablet: detail opens under the active title */}
                {isActive && (
                  <div className="mt-5 pl-12 sm:pl-[68px] lg:hidden">
                    <Detail service={service} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right: detail panel (desktop) */}
        <div className="hidden lg:flex lg:items-center">
          <Detail key={active} service={services[active]} />
        </div>
      </div>
    </section>
  );
}

/* Optional: floating green consultation button (place once, e.g. in App/Layout).
   Green with white text in both modes, so no theme changes are needed. */
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918149845323" /* change to your WhatsApp number */
      target="_blank"
      rel="noreferrer"
      aria-label="Get Free Consultation for the Project on WhatsApp"
      className="theme-fixed fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-full bg-[#25c35a] px-4 py-3 font-['Manrope',sans-serif] text-[15px] font-semibold text-white shadow-lg transition hover:brightness-110 sm:bottom-5 sm:right-5 sm:px-6 sm:text-[17px]"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22l5.9-2z" />
        <path d="M9 9.5c.5 2 2.5 4 5 5l1.5-1.5-2-1-1 .8c-.8-.4-1.5-1.1-1.9-1.9l.8-1-1-2L9 9.5z" fill="currentColor" stroke="none" />
      </svg>
      <span className="hidden sm:inline">Get Free Consultation for the Project</span>
    </a>
  );
}