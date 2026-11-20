
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";

/* ---------- Shared Styling (Rodex Design System) ---------- */

const SIDE_SPACE = "px-5 sm:px-8 lg:px-[7.5%]";
const WRAP = "mx-auto max-w-[1700px]";

const headingStyle = {
  fontSize: "clamp(1.9rem, 3.6vw, 4.25rem)",
  letterSpacing: "-0.03em",
};

const subHeadingStyle = {
  fontSize: "clamp(1.1rem, 1.7vw, 2.1rem)",
  letterSpacing: "-0.02em",
};

const bodyStyle = {
  fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
  lineHeight: 1.7,
  letterSpacing: "-0.02em",
};

const smallStyle = {
  fontSize: "clamp(0.85rem, 1vw, 1.2rem)",
  lineHeight: 1.6,
  letterSpacing: "-0.02em",
};

const sectionStyle = {
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
};

/* ---------- Image Placeholders ---------- */

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
  {
    no: "01",
    title: "Growth-First Thinking",
    text: "Every feature should support business objectives.",
  },
  {
    no: "02",
    title: "Custom Solutions",
    text: "Built around your business—not templates.",
  },
  {
    no: "03",
    title: "Scalable Architecture",
    text: "Designed to grow with your company.",
  },
  {
    no: "04",
    title: "Long-Term Partnership",
    text: "Support beyond launch day.",
  },
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

/* ============================================================
   1. FROM VISION TO LAUNCH
============================================================ */

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
      style={sectionStyle}
    >
      {PROCESS_BG_IMG && (
        <img
          src={PROCESS_BG_IMG}
          alt="Rodex Web Technologies app development process"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8a0f16]/90 via-[#6e0a10]/70 to-[#8a0f16]/90" />

      <div className={`${SIDE_SPACE} relative py-16 sm:py-20 lg:py-28`}>
        <div
          className={`${WRAP} flex flex-col items-center gap-8 md:flex-row md:gap-10 lg:gap-14`}
        >
          {/* Intro Card */}
          <div className="w-full max-w-sm rounded-lg border border-white/10 bg-[#232323]/95 p-6 text-[#fdfaf9] sm:p-8 md:w-[300px] md:shrink-0">
            <h2
              className="font-bold leading-[1.1] tracking-[-0.03em]"
              style={headingStyle}
            >
              From Vision
              <br />
              To Launch
            </h2>

            <p className="mt-4 text-[#d0d0d0]" style={smallStyle}>
              Whether you're launching a new business or upgrading an existing
              presence, we create websites that align with your objectives and
              deliver measurable results.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative flex w-full min-w-0 flex-1 items-center">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous step"
              className="z-10 mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdfaf9] text-[#1e1e1e] transition duration-300 hover:bg-[#f15a3a] hover:text-white sm:h-10 sm:w-10"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="relative min-w-0 flex-1">
              {/* Connector Line */}
              <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-[#fdfaf9]/70 md:block" />

              <div className="relative grid grid-cols-1 md:grid-cols-3 md:gap-4">
                {visible.map((step, i) => {
                  const isMiddle = i === 1;

                  return (
                    <div
                      key={step.number}
                      className={`${
                        i > 0 ? "hidden md:flex" : "flex"
                      } flex-col items-center justify-center gap-3 md:min-h-[220px]`}
                    >
                      {isMiddle && <Badge number={step.number} />}

                      <div
                        className={`w-full max-w-[230px] rounded-lg bg-[#fdfaf9] px-4 py-5 text-center text-[#1e1e1e] shadow-lg transition-transform duration-300 hover:-translate-y-1 ${
                          isMiddle ? "md:translate-y-3" : "md:-translate-y-3"
                        }`}
                      >
                        <h3
                          className="font-semibold"
                          style={subHeadingStyle}
                        >
                          {step.title}
                        </h3>

                        <p className="mt-2 text-[#555]" style={smallStyle}>
                          {step.text}
                        </p>
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
              className="z-10 ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdfaf9] text-[#1e1e1e] transition duration-300 hover:bg-[#f15a3a] hover:text-white sm:h-10 sm:w-10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process Badge ---------- */

function Badge({ number }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#fdfaf9] bg-[#f15a3a] text-xs font-bold text-white">
      {number}
    </span>
  );
}

/* ============================================================
   2. WHY BUSINESSES CHOOSE RODEX
============================================================ */

function WhyChoose() {
  return (
    <section
      className={`${SIDE_SPACE} bg-[#1c1c1c] py-16 sm:py-20 lg:py-28`}
      style={sectionStyle}
    >
      <div className={`${WRAP}`}>
        <h2
          className="text-center font-bold leading-[1.1] text-[#fdfaf9]"
          style={headingStyle}
        >
          Why Businesses{" "}
          <span className="inline-block rounded-md bg-[#f15a3a] px-3 py-1 text-white">
            Choose
          </span>{" "}
          Rodex?
        </h2>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {reasons.map((item) => (
            <div
              key={item.no}
              className="rounded-lg border border-white/10 bg-[#232323] px-6 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#f15a3a]/60 hover:shadow-[0_10px_30px_rgba(241,90,58,0.08)] sm:px-7"
            >
              <span className="font-bold text-[#f15a3a]" style={smallStyle}>
                {item.no}
              </span>

              <h3
                className="mt-3 font-semibold leading-tight text-[#fdfaf9]"
                style={subHeadingStyle}
              >
                {item.title}
              </h3>

              <p className="mt-3 text-[#a0a0a0]" style={smallStyle}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. FREQUENTLY ASKED QUESTIONS
============================================================ */

function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      className={`${SIDE_SPACE} bg-[#1c1c1c] py-16 sm:py-20 lg:py-28`}
      style={sectionStyle}
    >
      <div
        className={`${WRAP} grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14 lg:gap-20`}
      >
        {/* FAQ Intro */}
        <div>
          <p
            className="font-semibold uppercase tracking-[0.12em] text-[#f15a3a]"
            style={smallStyle}
          >
            FAQs
          </p>

          <h2
            className="mt-4 font-bold leading-[1.1] text-[#fdfaf9]"
            style={headingStyle}
          >
            Frequently Asked Questions!
          </h2>

          <p className="mt-5 max-w-lg text-[#d0d0d0]" style={bodyStyle}>
            Find answers to common questions about our services, process,
            timelines, and how we help businesses achieve their digital goals.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#232323] transition duration-300 hover:border-[#f15a3a]/40"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-[#fdfaf9] transition sm:px-6 sm:py-5"
                >
                  <span
                    className="font-semibold leading-relaxed"
                    style={smallStyle}
                  >
                    {item.q}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f15a3a]/10 text-[#f15a3a]">
                    {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-4 pb-5 text-[#a0a0a0] sm:px-6"
                      style={bodyStyle}
                    >
                      {item.a}
                    </p>
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

/* ============================================================
   4. CALL TO ACTION CARD
============================================================ */

function CtaCard() {
  return (
    <section
      className={`${SIDE_SPACE} bg-[#1c1c1c] py-14 sm:py-20 lg:py-24`}
      style={sectionStyle}
    >
      <div className={`${WRAP}`}>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#232323] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* CTA Background Image */}
          {CTA_BG_IMG && (
            <img
              src={CTA_BG_IMG}
              alt="Start your app development project with Rodex"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
          )}

          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#232323] via-[#232323]/90 to-[#232323]/50" />

          <div className="relative max-w-4xl">
            <h2
              className="font-bold leading-[1.1] text-[#fdfaf9]"
              style={headingStyle}
            >
              Let's Build Something That Moves Your Business Forward
            </h2>

            <p className="mt-5 max-w-3xl text-[#d0d0d0]" style={bodyStyle}>
              Whether you're launching a new product, streamlining operations,
              or creating better customer experiences, we're ready to help turn
              your vision into a scalable digital solution.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f15a3a] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff704d] hover:shadow-[0_8px_25px_rgba(241,90,58,0.2)]"
              style={smallStyle}
            >
              Book A Growth Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   MAIN PAGE COMPONENT
============================================================ */

export default function AppProcessFaqSection() {
  return (
    <div
      className="w-full overflow-hidden bg-[#1c1c1c] text-[#fdfaf9]"
      style={sectionStyle}
    >
      <ProcessCarousel />
      <WhyChoose />
      <FaqSection />
      <CtaCard />
    </div>
  );
}
