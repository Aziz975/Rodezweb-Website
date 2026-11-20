import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";

/* ---------- Image placeholders (left empty until assets are provided) ---------- */
const PROCESS_BG_IMG = "";
const CTA_BG_IMG = "";

/* ---------- Data ---------- */
const processSteps = [
  { title: "Discover", text: "We understand your goals and challenges." },
  { title: "Design", text: "We create experiences users love." },
  { title: "Develop", text: "Scalable and secure development." },
  { title: "Test", text: "We test across devices and real scenarios." },
  { title: "Launch", text: "We publish and support a smooth release." },
  { title: "Grow", text: "We improve continuously with real data." },
];

const reasons = [
  { no: "01", title: "Growth-First Thinking", text: "Every feature should support business objectives." },
  { no: "02", title: "Custom Solutions", text: "Built around your business—not templates." },
  { no: "03", title: "Scalable Architecture", text: "Designed to grow with your company." },
  { no: "04", title: "Long-Term Partnership", text: "Support beyond launch day." },
];

const faqs = [
  {
    q: "Q1. How long does it take to develop a mobile app?",
    a: "The development timeline depends on the complexity and features of the application. Most apps are completed within 8 to 12 weeks, while larger projects may require additional time.",
  },
  {
    q: "Q2. Do you develop apps for both Android and iOS?",
    a: "Yes. We build for Android and iOS, using native or cross-platform technology depending on what fits your product best.",
  },
  {
    q: "Q3. I only have an idea. Can you help me build the app?",
    a: "Absolutely. We help you shape the idea, define the features, design the experience, and take it all the way to launch.",
  },
  {
    q: "Q4. Will you publish my app on the App Store and Google Play Store?",
    a: "Yes. We handle store listings, submission, and approval so your app goes live without the hassle.",
  },
  {
    q: "Q5. Do you provide support after the app is launched?",
    a: "Yes. We offer maintenance, updates, and ongoing support plans so your app stays secure and performs well.",
  },
];

const clients = [
  { name: "Sterling Cancer Hospital", src: "" },
  { name: "Bhavan Paradise", src: "" },
  { name: "Water Park", src: "" },
  { name: "Government Department", src: "" },
  { name: "CAP India", src: "" },
  { name: "Telangana Government", src: "" },
];

/* ---------- 1. From Vision To Launch ---------- */
function ProcessCarousel() {
  const [start, setStart] = useState(0);
  const total = processSteps.length;

  const visible = [0, 1, 2].map((i) => {
    const index = (start + i) % total;
    return { ...processSteps[index], number: index + 1 };
  });

  const prev = () => setStart((s) => (s - 1 + total) % total);
  const next = () => setStart((s) => (s + 1) % total);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#7a0c12]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {PROCESS_BG_IMG && (
        <img
          src={PROCESS_BG_IMG}
          alt="Rodez Web Technologies app development process"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8a0f16]/90 via-[#6e0a10]/70 to-[#8a0f16]/90" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-14 md:flex-row md:items-center md:gap-10 md:py-20">
        {/* Intro card */}
        <div className="w-full max-w-sm rounded-sm bg-[#232323]/95 p-6 text-[#fdfaf9] md:w-[300px] md:shrink-0">
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", letterSpacing: "-0.03em" }}
          >
            From Vision
            <br />
            To Launch
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-[#d0d0d0]">
            Whether you&apos;re launching a new business or upgrading an existing presence, we create
            websites that align with your objectives and deliver measurable results.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex w-full flex-1 items-center">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous step"
            className="z-10 mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdfaf9] text-[#1e1e1e] transition hover:bg-[#f15a3a] hover:text-white"
          >
            <ChevronLeft size={14} />
          </button>

          <div className="relative flex-1">
            {/* connector line */}
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-[#fdfaf9]/70 md:block" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 md:gap-4">
              {visible.map((step, i) => {
                const isMiddle = i === 1;
                return (
                  <div
                    key={step.number}
                    className={`${i > 0 ? "hidden md:flex" : "flex"} flex-col items-center justify-center gap-3 md:min-h-[190px]`}
                  >
                    {isMiddle && <Badge number={step.number} />}
                    <div
                      className={`w-full max-w-[210px] rounded-sm bg-[#fdfaf9] px-4 py-4 text-center text-[#1e1e1e] shadow-lg transition-transform duration-300 hover:-translate-y-1 ${
                        isMiddle ? "md:translate-y-3" : "md:-translate-y-3"
                      }`}
                    >
                      <h3 className="text-sm font-semibold">{step.title}</h3>
                      <p className="mt-1 text-[11px] leading-snug text-[#555]">{step.text}</p>
                    </div>
                    {!isMiddle && <Badge number={step.number} />}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next step"
            className="z-10 ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdfaf9] text-[#1e1e1e] transition hover:bg-[#f15a3a] hover:text-white"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Badge({ number }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#fdfaf9] bg-[#f15a3a] text-[11px] font-bold text-white">
      {number}
    </span>
  );
}

/* ---------- 2. Why Businesses Choose Rodez? ---------- */
function WhyChoose() {
  return (
    <section
      className="bg-[#1e1e1e] px-5 py-16 md:py-20"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <h2
        className="text-center font-bold text-[#fdfaf9]"
        style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", letterSpacing: "-0.03em" }}
      >
        Why Businesses{" "}
        <span className="rounded-sm bg-[#f15a3a] px-2 py-0.5 text-white">Choose</span> Rodez?
      </h2>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item) => (
          <div
            key={item.no}
            className="rounded-lg border border-white/10 bg-[#232323] px-6 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#f15a3a]/60"
          >
            <span className="text-sm font-semibold text-[#f15a3a]">{item.no}</span>
            <h3 className="mt-1 text-base font-semibold text-[#fdfaf9]">{item.title}</h3>
            <p className="mt-1 text-xs text-[#a0a0a0]">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 3. FAQ ---------- */
function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="bg-[#1e1e1e] px-5 py-16 md:py-24"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.15fr] md:gap-12">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#d0d0d0]">FAQs</p>
          <h2
            className="mt-3 font-bold leading-tight text-[#fdfaf9]"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}
          >
            Frequently Asked Questions!
          </h2>
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#d0d0d0]">
            Find answers to common questions about our services, process, timelines, and how we help
            businesses achieve their digital goals.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-sm bg-[#fdfaf9] text-[#1e1e1e]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3 px-3 py-3 text-left text-xs font-medium"
                >
                  {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  <span>{item.q}</span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-3 pb-4 pt-1 text-[11px] leading-relaxed text-[#555]">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. CTA card ---------- */
function CtaCard() {
  return (
    <section
      className="bg-[#1e1e1e] px-5 py-12 md:py-20"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-[#2a2a2a] px-6 py-10 md:px-8 md:py-9">
        {CTA_BG_IMG && (
          <img
            src={CTA_BG_IMG}
            alt="Start your app development project with Rodez"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#232323] via-[#232323]/80 to-transparent" />

        <div className="relative max-w-3xl">
          <h2
            className="font-bold leading-tight text-[#fdfaf9]"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", letterSpacing: "-0.03em" }}
          >
            Let&apos;s Build Something That Moves Your Business Forward
          </h2>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-[#d0d0d0]">
            Whether you&apos;re launching a new product, streamlining operations, or creating better
            customer experiences, we&apos;re ready to help turn your vision into a scalable digital
            solution.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-full bg-[#f15a3a] px-5 py-2 text-[11px] font-semibold text-white transition hover:bg-[#d94a2c]"
          >
            Book A Growth Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Trusted by (logo carousel) ---------- */
function TrustedBy() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 160, behavior: "smooth" });
  };

  return (
    <section
      className="bg-[#1e1e1e] px-5 pb-16 pt-6 md:pb-24"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <p className="text-center text-[10px] font-semibold uppercase tracking-wide text-[#d0d0d0]">
        Trusted by growing businesses across industries
      </p>

      <div className="mx-auto mt-5 flex max-w-3xl items-center gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Scroll logos left"
          className="shrink-0 text-[#a0a0a0] transition hover:text-[#f15a3a]"
        >
          <ChevronLeft size={14} />
        </button>

        <div
          ref={trackRef}
          className="flex flex-1 gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-12 w-12  shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#f15a3a]/70 bg-[#fdfaf9] sm:h-14 sm:w-14 md:h-[50px] md:w-[50px]"
            >
              {client.src && (
                <img src={client.src} alt={client.name} className="h-full w-full object-contain p-1" />
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Scroll logos right"
          className="shrink-0 text-[#a0a0a0] transition hover:text-[#f15a3a]"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}

/* ---------- Page export ---------- */
export default function AppProcessFaqSection() {
  return (
    <div className="bg-[#1e1e1e]">
      <ProcessCarousel />
      <WhyChoose />
      <FaqSection />
      <CtaCard />
    </div>
  );
}
