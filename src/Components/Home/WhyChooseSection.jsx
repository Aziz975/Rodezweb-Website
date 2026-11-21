/*
  Styling:
  Manrope font
  Dark background: #1c1c1c
  Light background: #ffffff
  Accent: #f05a2d

  Theme automatically changes when Navbar adds/removes:
  <html class="light">
*/

const plans = [
  {
    title: "Freelancer",
    items: [
      { text: "Affordable for small tasks", ok: true },
      { text: "Direct communication", ok: true },
      { text: "Flexible availability", ok: true },
      { text: "Limited resources", ok: false },
      { text: "Single skill specialization", ok: false },
      { text: "Capacity constraints", ok: false },
      { text: "Limited scalability", ok: false },
    ],
    button: "Common Choice",
  },
  {
    title: "Traditional Agency",
    items: [
      { text: "Multiple specialists", ok: true },
      { text: "Established processes", ok: true },
      { text: "Larger team support", ok: true },
      { text: "Broader service offerings", ok: true },
      { text: "Higher costs", ok: false },
      { text: "Longer turnaround times", ok: false },
      { text: "Less personalized attention", ok: false },
    ],
    button: "Agency Model",
  },
  {
    title: "Rodez Web",
    highlight: true,
    items: [
      { text: "Dedicated project team", ok: true },
      { text: "Personalized client experience", ok: true },
      { text: "Design + Development + Marketing", ok: true },
      { text: "Transparent communication", ok: true },
      { text: "Faster turnaround times", ok: true },
      { text: "Scalable solutions", ok: true },
      { text: "Long-term growth partnership", ok: true },
    ],
    button: "Start Your Project",
    href: "/contact",
  },
];

const Tick = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3 w-3 shrink-0 text-[#f05a2d]"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

const Cross = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3 w-3 shrink-0 text-gray-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export default function WhyChooseSection() {
  return (
    <section className="wc-root w-full overflow-x-clip bg-[color:var(--wc-bg)] py-16 font-['Manrope',sans-serif] text-[color:var(--wc-text)] sm:py-20 lg:py-28">
      <style>{`
        /* Dark mode - default */
        .wc-root {
          --wc-bg: #1c1c1c;
          --wc-text: #ffffff;
          --wc-text-soft: rgba(255, 255, 255, 0.9);
          --wc-card: #ffffff;
          --wc-card-text: #1c1c1c;
          --wc-card-border: transparent;
          --wc-muted: #6b7280;
          transition: background-color .3s ease, color .3s ease;
        }

        /* Light mode */
        html.light .wc-root {
          --wc-bg: #ffffff;
          --wc-text: #1c1c1c;
          --wc-text-soft: rgba(28, 28, 28, 0.85);
          --wc-card: #f1f1f1;
          --wc-card-text: #1c1c1c;
          --wc-card-border: rgba(0, 0, 0, 0.06);
          --wc-muted: #6b7280;
        }

        @media (prefers-reduced-motion: reduce) {
          .wc-root {
            transition: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-6">
        {/* Section heading */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-[color:var(--wc-text-soft)] sm:text-[12px]">
            Partner with Rodez Web Technologies.
          </p>

          <h2 className="mt-3 max-w-[760px] text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.15] tracking-tight">
            Why Clients Choose Rodez Web Technologies
          </h2>
        </div>

        {/* Comparison cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-20 lg:gap-5">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className="flex flex-col rounded-2xl border border-[color:var(--wc-card-border)] bg-[color:var(--wc-card)] p-5 text-[color:var(--wc-card-text)] transition-colors duration-300 sm:p-6"
            >
              <h3 className="text-[20px] font-normal sm:text-[22px]">
                {plan.title}
              </h3>

              <ul className="mt-6 flex flex-1 flex-col gap-3.5">
                {plan.items.map((item) => (
                  <li
                    key={item.text}
                    className={`flex items-center gap-3 text-[12px] sm:text-[13px] ${
                      item.ok ? "text-[#2a2a2a]" : "text-gray-500"
                    }`}
                  >
                    {item.ok ? <Tick /> : <Cross />}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Plan button */}
              {plan.highlight ? (
                <a
                  href={plan.href}
                  className="mt-7 block rounded-md bg-[#f05a2d] py-2.5 text-center text-[12px] font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 sm:text-[13px]"
                >
                  {plan.button}
                </a>
              ) : (
                <div className="mt-7 rounded-md bg-[#f05a2d]/55 py-2.5 text-center text-[12px] font-semibold text-white sm:text-[13px]">
                  {plan.button}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}