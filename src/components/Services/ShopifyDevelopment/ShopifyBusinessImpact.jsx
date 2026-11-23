import { FaCheck } from "react-icons/fa";

const ACCENT = "bg-[#f0603a]";

const checklist = [
  "Increase conversions",
  "Improve average order value",
  "Build customer loyalty",
  "Reduce cart abandonment",
  "Support long-term growth",
];

const stats = [
  ["+83M", "Of businesses worldwide trust Shopify."],
  ["+287", "Businesses Empowered"],
  ["99%", "Client Satisfaction Rate"],
];

function TrafficSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center bg-[#1c1c1c] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c]">
      <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl leading-tight">
        Traffic Means Nothing If Your Store Doesn’t Convert
      </h2>

      <div className="text-white light:text-[#555555] mt-10 space-y-1">
        <p>Getting visitors to your store is only half the battle.</p>
        <p>The real challenge is turning those visitors into customers.</p>
        <p>
          A slow, confusing, or poorly designed store can lead to abandoned
          carts, lost sales, and missed opportunities.
        </p>
        <p>
          We create Shopify stores that combine great design, seamless user
          experiences, and conversion-focused strategies to help businesses
          sell more online.
        </p>
      </div>

      <div className="mt-16 flex items-center justify-around gap-6">
        <img
          src="/images/shopify-phone-store.png"
          alt="Phone showing an online store"
          className="w-1/3 max-w-[320px]"
          loading="lazy"
        />

        <img
          src="/images/shopify-bag.png"
          alt="Shopify shopping bag"
          className="w-1/3 max-w-[260px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function RevenueEngines() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20 text-center bg-[#1c1c1c] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c]">
      <h2 className="text-white light:text-[#1c1c1c] font-bold text-3xl sm:text-5xl leading-tight">
        We Don’t Just Build Shopify Stores. We Build Revenue Engines.
      </h2>

      <p className="text-white light:text-[#555555] mt-8">
        A successful eCommerce store should do more than showcase products.
      </p>

      <p className="text-white light:text-[#555555]">It should:</p>

      <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white light:text-[#555555]">
        {checklist.map((c) => (
          <li key={c} className="flex items-center gap-2">
            <FaCheck className="text-[#f0603a] shrink-0" />
            {c}
          </li>
        ))}
      </ul>

      <p className="text-white light:text-[#555555] mt-8">
        At Rodez Web Technologies, every Shopify store is designed with sales,
        scalability, and customer experience at its core.
      </p>

      <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-900 via-red-900/80 to-blue-900 px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-white">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="text-5xl md:text-7xl font-semibold">{n}</div>
            <div className="text-sm mt-1">{l}</div>
          </div>
        ))}

        <div className="col-span-2 md:col-span-1 text-xl font-bold text-left">
          Why Shopify Powers Some Of The World’s Fastest Growing Brands
        </div>
      </div>
    </section>
  );
}

export default function ShopifyBusinessImpact() {
  return (
    <div className="bg-[#1c1c1c] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c]">
      <TrafficSection />
      <RevenueEngines />
    </div>
  );
}