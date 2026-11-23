
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Logo sources */
const clients = [
  { name: "Government of Telangana", src: "/images/img1.png" },
  { name: "K.J. Institute of Engineering & Technology, Savli", src: "/images/img2.png" },
  { name: "Eye-care Hospital", src: "/images/img3.png" },
  { name: "Sterling Cancer Hospitals", src: "/images/img4.png" },
  { name: "Banyan Paradise The Resort", src: "/images/img5.png" },
  { name: "Swapna Srushti Water Park", src: "/images/img6.png" },
  { name: "Client 7", src: "/images/cap-India.png" },
  { name: "Client 8", src: "/images/img2.png" },
];

export default function TrustedBySection() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Distance between the start of one card and the next
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
    <section
      className="bg-[#1e1e1e] px-4 py-14 transition-colors duration-300 md:py-20 light:bg-[#fafafa]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Heading */}
      <h2
        className="text-center font-medium uppercase text-[#fdfaf9] transition-colors duration-300 light:text-[#1c1c1c]"
        style={{
          fontSize: "clamp(0.85rem, 1.4vw, 1.2rem)",
          letterSpacing: "-0.02em",
        }}
      >
        Trusted by growing businesses across industries
      </h2>

      <div className="mx-auto mt-8 flex max-w-[1500px] items-center gap-2 md:mt-10 md:gap-4">

        {/* Previous Button */}
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous logos"
          className="shrink-0 rounded-full p-1 text-[#d0d0d0] transition-colors hover:text-[#f15a3a] light:text-[#555555]"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        {/* Logo Carousel */}
        <div
          ref={trackRef}
          className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex aspect-square w-[140px] shrink-0 snap-start items-center justify-center overflow-hidden rounded-2xl border-2 border-[#f15a3a] bg-[#fdfaf9] p-3 transition-transform duration-300 hover:-translate-y-1 sm:w-[160px] lg:w-[190px] xl:w-[200px]"
            >
              {client.src ? (
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-center text-xs font-medium text-[#1e1e1e]/50">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next logos"
          className="shrink-0 rounded-full p-1 text-[#d0d0d0] transition-colors hover:text-[#f15a3a] light:text-[#555555]"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex items-center justify-center gap-2.5">
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
                : "bg-[#fdfaf9]/20 hover:bg-[#fdfaf9]/50 light:bg-[#1c1c1c]/20 light:hover:bg-[#1c1c1c]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
