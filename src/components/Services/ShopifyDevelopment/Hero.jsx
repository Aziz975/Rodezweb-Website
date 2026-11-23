import { FaShopify, FaGoogle, FaAmazon } from "react-icons/fa";

const ACCENT = "bg-[#f0603a]";

export default function Hero() {
  return (
    <>
      <section
        className="h-40 sm:h-52 md:h-[340px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 60%, #1c1c1c 100%), url('/images/shopify-banner.png')",
        }}
      >
        <h1 className="text-white font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight text-center">
          Shopify Development
        </h1>
      </section>

      <section className="bg-[#1c1c1c] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <h2 className="font-extrabold uppercase leading-[1.05] text-white light:text-[#1c1c1c] text-4xl sm:text-5xl lg:text-6xl">
            Shopify Stores Built
            <span className="block text-neutral-400 light:text-[#777777] mt-3 text-3xl sm:text-4xl">
              To Sell, Scale &amp; Succeed
            </span>
          </h2>

          <div>
            <p className="text-white light:text-[#555555] text-justify leading-8">
              From startup brands to growing eCommerce businesses, we build
              Shopify stores designed to attract customers, increase
              conversions, and drive sustainable growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className={`${ACCENT} text-white rounded-full px-8 py-3`}
              >
                Book A Discovery Call
              </a>

              <span className="flex-1" />

              {[FaShopify, FaGoogle, FaAmazon].map((Icon, i) => (
                <span
                  key={i}
                  className="w-12 h-12 rounded-full bg-neutral-800 light:bg-[#eeeeee] flex items-center justify-center text-white light:text-[#1c1c1c]"
                >
                  <Icon />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Shopify visual strip */}
      <img
        src="/images/shopify-strip.png"
        alt="Shopify logo on a stack of phones"
        className="w-full max-h-[710px] object-cover"
        loading="lazy"
      />
    </>
  );
}