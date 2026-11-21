import { useEffect, useRef, useState } from "react";

/*
  "Our Process" section — cards appear one by one while you scroll.
  Styling kept from the previous pages: Manrope font, #1c1c1c background, orange #f05a2d.

  Theme: dark by default. When the Navbar toggle adds <html class="light">,
  the variables under `html.light .pr-root` take over (bright mode).

  Font (if not already added, index.html <head>):
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  IMPORTANT: the panel uses `position: sticky`. It will NOT stick if any parent
  of this section has overflow: hidden / auto / scroll (use overflow-x-clip instead).
*/

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Deep research and discovery to uncover opportunities.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "Data-driven planning to set clear goals, channels, and a roadmap.",
  },
  {
    number: "03",
    title: "Execute",
    text: "Design, development, and campaigns brought to life with precision.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Continuous testing and improvement to drive long-term growth.",
  },
];

/* Scroll progress (0 → 1) at which cards 02, 03 and 04 appear */
const THRESHOLDS = [0.2, 0.45, 0.7];

export default function ProcessSection() {
  const trackRef = useRef(null);
  const [count, setCount] = useState(1); // how many cards are visible

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      const next = 1 + THRESHOLDS.filter((t) => progress >= t).length;
      setCount((prev) => (prev === next ? prev : next));
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
    <section className="pr-root w-full overflow-x-clip bg-[color:var(--pr-bg)] pt-12 font-['Manrope',sans-serif] text-[color:var(--pr-text)] sm:pt-16 lg:pt-8">
      <style>{`
        /* ---------- Dark mode (default) ---------- */
        .pr-root {
          --pr-bg: #1c1c1c;
          --pr-bg-0: rgba(28, 28, 28, 0);       /* transparent version of --pr-bg for fades */
          --pr-text: #ffffff;
          --pr-text-soft: rgba(255, 255, 255, 0.9);
          --pr-border: rgba(255, 255, 255, 0.8);
          --pr-panel: #5c3d5e;                  /* purple panel */
          transition: background-color .3s ease, color .3s ease;
        }

        /* ---------- Bright mode ---------- */
        html.light .pr-root {
          --pr-bg: #ffffff;
          --pr-bg-0: rgba(255, 255, 255, 0);
          --pr-text: #1c1c1c;
          --pr-text-soft: rgba(28, 28, 28, 0.85);
          --pr-border: rgba(28, 28, 28, 0.8);
          --pr-panel: #8b668d;
        }

        .pr-panel { transition: background-color .3s ease; }

        @media (prefers-reduced-motion: reduce) {
          .pr-root, .pr-panel { transition: none; }
        }
      `}</style>

      {/* Heading */}
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center px-5 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[2px] border border-[color:var(--pr-border)]" />
          <span className="text-[10px] font-bold uppercase tracking-wide text-[color:var(--pr-text-soft)] sm:text-[11px]">
            Our Process
          </span>
        </div>

        <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight">
          The Roadmap Behind Every <br className="hidden sm:block" />
          Successful Project
        </h2>

        <p className="mt-5 max-w-[900px] text-[13px] font-semibold leading-relaxed text-[color:var(--pr-text-soft)] sm:text-[15px]">
          Every successful project follows a proven path. Our collaborative process ensures that every
          solution is strategically planned, expertly executed, and continuously optimized for long-term
          growth.
        </p>
      </div>

      {/* Scroll track: its height decides how long the panel stays pinned */}
      <div ref={trackRef} className="relative mt-10 h-[280vh] lg:mt-16 lg:h-[300vh]">
        <div className="sticky top-20 px-5 sm:top-24 sm:px-6">
          <div
            className="pr-panel relative mx-auto h-[calc(100svh-6.5rem)] max-h-[760px] min-h-[520px] w-full max-w-[1200px] overflow-hidden rounded-xl bg-[color:var(--pr-panel)]"
            style={{
              backgroundImage: [
                "linear-gradient(to bottom, var(--pr-bg) 0%, var(--pr-bg-0) 45%)",
                "radial-gradient(ellipse 55% 45% at 0% 100%, var(--pr-bg) 0%, var(--pr-bg-0) 70%)",
                "radial-gradient(ellipse 45% 40% at 100% 0%, var(--pr-bg) 0%, var(--pr-bg-0) 70%)",
              ].join(", "),
            }}
          >
            {/* Cards: 2-column grid on mobile, 4 in a row on desktop */}
            <div className="grid h-full grid-cols-2 content-end gap-3 p-4 sm:p-6 lg:grid-cols-4 lg:items-center lg:content-center lg:gap-5 lg:px-8 lg:py-0">
              {steps.map((step, i) => (
                <article
                  key={step.number}
                  className={`w-full rounded-2xl bg-white p-4 text-[#1c1c1c] shadow-xl transition-all duration-700 ease-out motion-reduce:transition-none sm:p-5 lg:p-6 ${
                    i < count
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-10 opacity-0"
                  }`}
                  aria-hidden={i >= count}
                >
                  <p className="text-[clamp(2.75rem,5.2vw,4.75rem)] font-extralight leading-none">
                    {step.number}
                  </p>

                  <h3 className="mt-6 text-[16px] font-semibold sm:mt-8 lg:text-[18px]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-snug text-gray-500 lg:text-[13px]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}