import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from "react-icons/fa";

const ACCENT = "bg-[#f0603a]";

// TODO: only first 3 steps are visible in the screenshot; add more if the live slider has them.
const steps = [
  { title: "Discover", desc: "Understanding your products, customers, and goals." },
  { title: "Plan", desc: "Creating a strategy for growth and conversions." },
  { title: "Design & Develop", desc: "Building a visually engaging and high-performing store." },
];

// TODO: only Q1 answer is from your screenshot; copy the rest from the live page.
const faqs = [
  { q: "Q. Why should I choose Shopify for my online store?", a: "Shopify is secure, scalable, user-friendly, and designed specifically for eCommerce businesses." },
  { q: "Q. Can you migrate my existing store to Shopify?", a: "Yes. We can help transfer products, customers, and content from other platforms." },
  { q: "Q. Will my Shopify store work on mobile devices?", a: "Absolutely. Every store we build is fully optimized for mobile shopping." },
  { q: "Q. Can I manage products and orders myself?", a: "Yes. Shopify provides an easy-to-use dashboard that allows you to manage your entire store." },
  { q: "Q. Do you provide support after launch?", a: "Yes. We offer maintenance, updates, troubleshooting, and ongoing support." },
];

function Process() {
  const [start, setStart] = useState(0);
  const visible = steps.slice(start, start + 3);
  return (
    <section className="bg-cover bg-center py-20" style={{ backgroundImage: "linear-gradient(rgba(28,28,28,.8),rgba(28,28,28,.8)), url('/images/shopify-process-bg.jpg')" }}> {/* TODO */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[400px_1fr] gap-10 items-center">
        <div className="bg-[#262626] p-10">
          <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight">From Brand Vision To Online Success</h2>
          <p className="text-white mt-8 leading-8">
            Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
          </p>
        </div>
        <div className="relative">
          <div className="grid sm:grid-cols-3 gap-6">
            {visible.map((s, i) => (
              <div key={s.title} className={`relative bg-white rounded-md p-6 text-center ${i === 1 ? "sm:mt-12" : ""}`}>
                <h3 className="text-xl text-neutral-900">{s.title}</h3>
                <p className="text-neutral-600 mt-3 text-sm">{s.desc}</p>
                <span className={`absolute left-1/2 -translate-x-1/2 ${i === 1 ? "-top-10" : "-bottom-10"} w-12 h-12 rounded-full ${ACCENT} border-2 border-white text-white flex items-center justify-center font-semibold`}>
                  {start + i + 1}
                </span>
              </div>
            ))}
          </div>
          <button aria-label="Previous" onClick={() => setStart(Math.max(0, start - 1))} className="absolute -left-4 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center"><FaChevronLeft /></button>
          <button aria-label="Next" onClick={() => setStart(Math.min(Math.max(steps.length - 3, 0), start + 1))} className="absolute -right-4 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center"><FaChevronRight /></button>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-white font-bold text-4xl sm:text-5xl leading-[1.6]">
          Why Businesses <span className="bg-[#e65c38] px-3">Choose</span> Rodez For Shopify Development
        </h2>
        <p className="text-white text-justify leading-8 mt-6">
          A slow, outdated website can drive customers away before they even learn about your business. We create stunning, high-performing websites that build trust, capture attention, and turn visitors into customers.
        </p>
        <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>Discuss Your Website Project</a>
      </div>
      <div className="relative">
        <img src="/images/why-rodezweb.png" alt="Store on desktop, tablet and phone" className="w-full" />
        {[["01", "top-[15%] left-[10%]"], ["02", "top-[28%] left-[62%]"], ["03", "top-[48%] left-[18%]"], ["04", "top-[65%] left-[62%]"]].map(([n, pos]) => (
          <span key={n} className={`absolute ${pos} bg-white text-neutral-900 text-sm px-2 py-1 rounded`}>{n}</span>
        ))}
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState(0);
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10">
      <div>
        <p className="text-white">FAQS</p>
        <h2 className="text-white font-bold text-5xl sm:text-6xl leading-tight mt-4">Frequently Asked Questions!</h2>
        <p className="text-white mt-8 max-w-md">Find answers to common questions about our services, process, timelines, and how we help businesses achieve their digital goals.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="w-full bg-white rounded-md px-5 py-5 flex items-center gap-4 text-left font-semibold text-neutral-900">
              {open === i ? <FaMinus /> : <FaPlus />} {f.q}
            </button>
            {open === i && <div className="bg-white rounded-md border-t-2 border-[#f0603a] mt-1 px-6 py-6 text-neutral-800 leading-7">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ShopifyProcessFaqSection() {
  return (
    <>
      <Process />
      <WhyChoose />
      <Faqs />
    </>
  );
}