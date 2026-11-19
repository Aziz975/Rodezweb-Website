import { useEffect, useRef, useState } from "react";

/*
  Styling kept from the previous pages: Manrope font, #1c1c1c background, orange #f05a2d.
  Font (if not already added, index.html <head>):
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
*/

/* Edit / add testimonials here (the first two are from your screenshot) */
const testimonials = [
  {
    quote:
      "Working with Rodez Web Technologies was one of the best decisions for our business. Their team redesigned our website and improved our online presence, resulting in more inquiries and better customer engagement.",
    name: "BrightEdge Solutions",
    role: "Founder",
    image: "",
  },
  {
    quote:
      "The team understood our vision from day one and delivered a website that exceeded our expectations. Their communication, professionalism, and attention to detail were outstanding.",
    name: "Nexus Ventures",
    role: "Director",
    image: "",
  },
  {
    quote:
      "From design to launch, the process was smooth and transparent. Our new website loads faster and looks far more professional than before.",
    name: "Company Name",
    role: "Owner",
    image: "",
  },
  {
    quote:
      "Their digital marketing work brought us a steady flow of qualified leads within a few months. We are very happy with the results.",
    name: "Company Name",
    role: "Marketing Head",
    image: "",
  },
  {
    quote:
      "Responsive, creative, and reliable. They handled our e-commerce store build and every change we asked for along the way.",
    name: "Company Name",
    role: "Co-Founder",
    image: "",
  },
  {
    quote:
      "We now have a website that truly represents our brand. The support after launch has been excellent as well.",
    name: "Company Name",
    role: "CEO",
    image: "",
  },
];

/* 1 card per view on mobile, 2 from the md breakpoint */
function useItemsPerView() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setN(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return n;
}

const Chevron = ({ dir }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export default function TestimonialsSection() {
  const perView = useItemsPerView();
  const [page, setPage] = useState(0);
  const touchX = useRef(null);

  const pages = [];
  for (let i = 0; i < testimonials.length; i += perView) {
    pages.push(testimonials.slice(i, i + perView));
  }

  // Go back to the first slide when the layout changes (mobile <-> desktop)
  useEffect(() => setPage(0), [perView]);

  const go = (p) => setPage((p + pages.length) % pages.length);

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(diff) > 50) go(diff < 0 ? page + 1 : page - 1);
    touchX.current = null;
  };

  return (
    <section className="w-full overflow-x-clip bg-[#1c1c1c] py-16 font-['Manrope',sans-serif] text-white sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-6">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-[#f05a2d]" />
          <span className="text-[10px] font-semibold uppercase tracking-wide text-white/90 sm:text-[11px]">
            Client Testimonials
          </span>
        </div>
        <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.15] tracking-tight">
          Trusted by Businesses That Want to Grow
        </h2>

        {/* Carousel */}
        <div className="mt-8 flex items-center gap-1 sm:mt-10 sm:gap-3 lg:px-2">
          <button
            type="button"
            onClick={() => go(page - 1)}
            aria-label="Previous testimonials"
            className="shrink-0 p-1 text-white/90 transition hover:text-[#f05a2d]"
          >
            <Chevron dir="left" />
          </button>

          <div
            className="min-w-0 flex-1 overflow-hidden"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, pi) => (
                <div
                  key={pi}
                  className="flex min-w-full gap-3 sm:gap-4"
                  aria-hidden={pi !== page}
                >
                  {group.map((t, i) => (
                    <figure
                      key={`${t.name}-${i}`}
                      className="flex grow basis-0 flex-col justify-between rounded-xl bg-white px-5 py-5 text-center text-[#1c1c1c] sm:px-6"
                    >
                      <blockquote className="text-[13px] font-light italic leading-relaxed text-[#444] sm:text-[15px]">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="mt-5 flex items-center justify-center gap-3 text-left">
                        <img
                          src={t.image}
                          alt=""
                          className="h-9 w-9 shrink-0 rounded-full bg-gray-300 object-cover sm:h-10 sm:w-10"
                        />
                        <div className="leading-tight">
                          <p className="text-[11px] font-bold text-[#f05a2d] sm:text-[12px]">{t.name}</p>
                          <p className="mt-0.5 text-[11px] text-gray-600 sm:text-[12px]">{t.role}</p>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(page + 1)}
            aria-label="Next testimonials"
            className="shrink-0 p-1 text-white/90 transition hover:text-[#f05a2d]"
          >
            <Chevron dir="right" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === page}
              className="p-1.5"
            >
              <span
                className={`block h-1.5 w-1.5 rounded-full transition-colors ${
                  i === page ? "bg-[#f05a2d]" : "bg-white"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
