import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ACCENT = "bg-[#f0603a]";

const features = [
  { title: "Custom Store Design", desc: "A unique shopping experience built around your brand.", img: "/images/shopify-custom-design.png" }, // TODO image
  { title: "Mobile Optimized", desc: "Designed for customers who shop on the go.", img: "/images/shopify-mobile.png" }, // TODO
  { title: "Secure Checkout", desc: "Fast and trusted payment experiences that reduce cart abandonment.", img: "/images/shopify-checkout.png" }, // TODO
  { title: "Easy Store Management", desc: "Manage products, orders, and customers with ease.", img: "/images/shopify-manage.png" }, // TODO
];

// TODO: only tab 01 is from your screenshot. Click 02, 03, 04 on the live page and copy the real text.
const tabs = [
  { title: "Increase Sales", desc: "Create shopping experiences that encourage more purchases." },
  { title: "Build Brand Trust", desc: "Add title 02 here." },
  { title: "Improve Customer Experience", desc: "Add title 03 here." },
  { title: "Scale Your Store", desc: "Add title 04 here." },
];

function Solutions() {
  const [open, setOpen] = useState(0);
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20 text-center">
      <h2 className="text-white font-bold text-3xl sm:text-5xl">Shopify Solutions Designed For Growth</h2>
      <p className="text-white mt-6">Whether you’re launching a new brand or scaling an established business, we build Shopify experiences tailored to your goals.</p>
      <div className="mt-14 space-y-4 text-left">
        {features.map((f, i) => (
          <div key={f.title} className="bg-[#262626] rounded-lg px-6 py-6">
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[320px_1fr_auto] items-center gap-4 text-left">
              <span className="flex items-center gap-4">
                <span className="text-white font-bold">0{i + 1}</span>
                <span className="text-white font-bold text-xl md:text-3xl">{f.title}</span>
              </span>
              <span className="text-neutral-400 hidden md:block">{f.desc}</span>
              <FaArrowRight className={`text-[#f0603a] text-3xl transition-transform ${open === i ? "" : "-rotate-45"}`} />
            </button>
            {open === i && <img src={f.img} alt={f.title} className="mt-6 w-full max-h-[450px] object-cover rounded-md" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20 text-center">
      <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">What A High-Performing Shopify Store Can Do For Your Business</h2>
      <div className="mt-14 grid md:grid-cols-[180px_1fr] gap-10 items-start">
        <div className="flex md:flex-col gap-3">
          {tabs.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`flex-1 md:flex-none h-16 rounded ${active === i ? `${ACCENT} text-white` : "bg-neutral-100 text-neutral-700"}`}>
              0{i + 1}
            </button>
          ))}
        </div>
        <div>
          <span className="mx-auto w-16 h-16 rounded-full bg-indigo-900/60 text-indigo-400 flex items-center justify-center">
            <span className="w-4 h-4 rounded-sm border-2 border-current" />
          </span>
          <h3 className="text-white text-3xl mt-6">{t.title}</h3>
          <p className="text-neutral-200 mt-3">{t.desc}</p>
          <div className="mt-8 rounded-full bg-neutral-600 py-3 text-white text-xs tracking-widest uppercase">Shopify Store Development</div>
        </div>
      </div>
    </section>
  );
}

export default function ShopifyGrowthSection() {
  return (
    <>
      <Solutions />
      <Benefits />
    </>
  );
}