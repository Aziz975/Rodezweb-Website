/*
  Hero with background video + continuously scrolling text (right → left).

  Font (add once in index.html <head>), same as the navbar:
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
*/

const MESSAGE = " Because first impressions now happen online ";

// One "group" = the message repeated with a hollow-circle separator.
// Two identical groups are rendered so the loop is seamless (-50% translate).
function MarqueeGroup({ ariaHidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex shrink-0 items-center">
          <span className="whitespace-nowrap">{MESSAGE}</span>
          <span
            className="mx-[0.45em] inline-block h-[0.32em] w-[0.32em] shrink-0 rounded-full border-[0.06em] border-white"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}

export default function HeroMarquee() {
  return (
    <section className="relative flex h-[65vh] min-h-[360px] w-full items-end overflow-hidden bg-[#050b14] lg:h-[600px]">
      {/* Keyframes live here so the component is self-contained */}
      <style>{`
        @keyframes marquee-rtl {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-rtl 30s linear infinite;
        }
        @media (max-width: 640px) {
          .marquee-track { animation-duration: 20s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      {/* Background video — add your src */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/images/video.mp4" type="" />
      </video>

      {/* Bottom fade so the text stays readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Scrolling text */}
      <div className="relative w-full overflow-hidden pb-2 sm:pb-3 lg:pb-4">
        <div
          className="marquee-track flex w-max font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[1.1] tracking-tight text-white"
          style={{ fontSize: "clamp(2.25rem, 7.2vw, 7rem)" }}
        >
          <MarqueeGroup />
          <MarqueeGroup ariaHidden />
        </div>
      </div>
    </section>
  );
}
