import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Image sources */
const CTA_BG_IMG = "/images/growth-banner.png";

const clients = [
  { name: "Sterling Cancer Hospitals", src: "/images/sterling.png" },
  { name: "Banyan Paradise The Resort", src: "/images/banyan.png" },
  { name: "Swapna Srushti Water Park", src: "/images/swapna.png" },
  { name: "Department of Commerce, Government of India", src: "/images/commerce.png" },
  { name: "CAP India Chemicals & Plastics Exhibition", src: "/images/cap-India.png" },
  { name: "Government of Telangana", src: "/images/govrn-telangana.png" },
  { name: "Eye-care Hospital", src: "/images/eyecare.png" },
  { name: "K.J. Institute of Engineering & Technology", src: "/images/kj-institute.png" },
];

/* ---------- CTA card ---------- */
const CtaCard = () => (
  <div className="relative overflow-hidden rounded-[22px] bg-[#2b2b2b] sm:rounded-[28px]">
    {CTA_BG_IMG && (
      <img
        src={CTA_BG_IMG}
        alt="Digital marketing strategy consultation"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
    )}

    {/* Dark overlay retained for readability over the image */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c]/90 via-[#1c1c1c]/60 to-[#1c1c1c]/20" />

    <div className="relative px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-9">
      <h2
        className="max-w-[1250px] font-bold leading-[1.05]"
        style={{ fontSize: "clamp(1.9rem, 3.6vw, 4.25rem)", letterSpacing: "-0.03em" }}
      >
        Let&apos;s Build A Growth Strategy That Delivers Results
      </h2>

      <p
        className="mt-5 max-w-[1400px] text-[#fdfaf9]"
        style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)", lineHeight: 1.7, letterSpacing: "-0.02em" }}
      >
        Whether you&apos;re looking to generate more leads, increase sales, strengthen your brand,
        or expand your reach, we&apos;ll help you create a digital marketing strategy built around
        measurable business growth.
      </p>

      <Link
        to="/contact"
        className="mt-7 inline-block rounded-full bg-[#F45132] px-7 py-3 font-medium text-white transition hover:bg-white hover:text-black sm:px-8 sm:py-3.5"
        style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.25rem)", letterSpacing: "-0.02em" }}
      >
        Book A Growth Consultation
      </Link>
    </div>
  </div>
);

/* ---------- Trusted by carousel ---------- */
const TrustedBy = () => {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const getStep = () => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 1;
    return track.children[1].offsetLeft - track.children[0].offsetLeft;
  };

  const updateActive = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / getStep());
    setActive(Math.min(Math.max(index, 0), clients.length - 1));
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateActive, { passive: true });

    return () => track.removeEventListener("scroll", updateActive);
  }, []);

  const goTo = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const safe = Math.min(Math.max(index, 0), clients.length - 1);
    track.scrollTo({ left: safe * getStep(), behavior: "smooth" });
  };

  return (
    <div className="mt-14 md:mt-20">
      <h3
        className="text-center font-medium uppercase text-[#fdfaf9] transition-colors duration-300 light:text-[#1c1c1c]"
        style={{ fontSize: "clamp(0.8rem, 1.05vw, 1.25rem)", letterSpacing: "-0.03em" }}
      >
        Trusted by growing businesses across industries
      </h3>

      <div className="mt-8 flex items-center gap-2 md:mt-12 md:gap-3">
        {/* Previous button */}
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous logos"
          className="shrink-0 text-[#fdfaf9] transition hover:text-[#F45132] light:text-[#555555]"
        >
          <ChevronLeft size={26} strokeWidth={2.5} />
        </button>

        {/* Logo carousel */}
        <div
          ref={trackRef}
          className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] sm:gap-6 lg:gap-[3.7vw] [&::-webkit-scrollbar]:hidden"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex aspect-square w-[130px] shrink-0 snap-start items-center justify-center overflow-hidden rounded-xl border-2 border-[#F45132] bg-white p-3 transition-transform duration-300 hover:-translate-y-1 sm:w-[150px] lg:w-[9.6vw] lg:min-w-[150px] lg:max-w-[190px]"
            >
              {client.src ? (
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-center text-[10px] font-medium text-[#1c1c1c]/50 sm:text-xs">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next logos"
          className="shrink-0 text-[#fdfaf9] transition hover:text-[#F45132] light:text-[#555555]"
        >
          <ChevronRight size={26} strokeWidth={2.5} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-3">
        {clients.map((client, i) => (
          <button
            key={client.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to logo ${i + 1}`}
            aria-current={active === i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              active === i
                ? "bg-[#fdfaf9] light:bg-[#1c1c1c]"
                : "bg-[#fdfaf9]/15 hover:bg-[#fdfaf9]/40 light:bg-[#1c1c1c]/15 light:hover:bg-[#1c1c1c]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ---------- Export ---------- */
const DigitalMarketingCta = () => (
  <section className="bg-[#1c1c1c] px-5 pb-16 pt-8 text-white transition-colors duration-300 sm:px-8 md:pb-24 lg:px-[7.5%] light:bg-[#fafafa] light:text-[#1c1c1c]">
    <div className="mx-auto max-w-[1700px]">
      <CtaCard />
      <TrustedBy />
    </div>
  </section>
);

export default DigitalMarketingCta;