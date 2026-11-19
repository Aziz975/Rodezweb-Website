/*
  Styling kept from the previous pages: Manrope font, #1c1c1c background, orange #f05a2d.
  Font (if not already added, index.html <head>):
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
*/

/* ok: true = orange tick, ok: false = grey cross */
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
  <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-[#f05a2d]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

const Cross = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export default function WhyChooseSection() {
  return (
    <section className="w-full overflow-x-clip bg-[#1c1c1c] py-16 font-['Manrope',sans-serif] text-white sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-wide text-white/90 sm:text-[12px]">
          Partner with Rodez Web Technologies.
        </p>
        <h2 className="mt-3 max-w-[760px] text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.15] tracking-tight">
          Why Clients Choose Rodez Web Technologies
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-20 lg:gap-5">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className="flex flex-col rounded-2xl bg-white p-5 text-[#1c1c1c] sm:p-6"
            >
              <h3 className="text-[20px] font-normal sm:text-[22px]">{plan.title}</h3>

              <ul className="mt-6 flex flex-1 flex-col gap-3.5">
                {plan.items.map((item) => (
                  <li
                    key={item.text}
                    className={`flex items-center gap-3 text-[12px] sm:text-[13px] ${
                      item.ok ? "text-[#2a2a2a]" : "text-gray-500"
                    }`}
                  >
                    {item.ok ? <Tick /> : <Cross />}
                    {item.text}
                  </li>
                ))}
              </ul>

              {plan.highlight ? (
                <a
                  href={plan.href}
                  className="mt-7 block rounded-md bg-[#f05a2d] py-2.5 text-center text-[12px] font-semibold text-white transition hover:brightness-110 sm:text-[13px]"
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
