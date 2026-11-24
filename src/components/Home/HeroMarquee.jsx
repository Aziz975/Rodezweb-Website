import { useEffect, useState } from "react";

/*
  Hero with a starting image, then a background video + continuously
  scrolling text (right → left).

  Flow: when the Home page opens, the image is shown. After
  VIDEO_DELAY_MS (5 seconds) the video starts and fades in over the image.

  Font (add once in index.html <head>), same as the navbar:
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
*/

const MESSAGE = " Because first impressions now happen online ";

// Image shown first (file lives in /public/images). Change it to any image you like.
const HERO_IMAGE = "/images/heroimg.png";

// Time (ms) the image is shown before the video starts
const VIDEO_DELAY_MS = 4000;

const VIDEO_SRC =
  "https://www.youtube-nocookie.com/embed/Hgg7M3kSqyE?autoplay=1&mute=1&loop=1&playlist=Hgg7M3kSqyE&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3";

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
  // false = image only, true = start loading/playing the video
  const [startVideo, setStartVideo] = useState(false);
  // true once the video iframe has loaded, so we can fade it in smoothly
  const [videoReady, setVideoReady] = useState(false);

  // Start the video 5 seconds after the hero appears (every time Home opens)
  useEffect(() => {
    const timer = setTimeout(() => setStartVideo(true), VIDEO_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Small delay after load so YouTube's own start-up flash is not visible
  const handleVideoLoad = () => {
    setTimeout(() => setVideoReady(true), 1200);
  };

  return (
    <section className="relative flex h-[65vh] min-h-[360px] w-full items-end overflow-hidden bg-[#050b14] lg:h-[600px]">
      {/* Keyframes live here so the component is self-contained */}
      <style>{`
        @keyframes marquee-rtl {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-rtl 60s linear infinite;
        }
        @media (max-width: 640px) {
          .marquee-track { animation-duration: 20s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      {/* Starting image (always underneath, visible for the first 5 seconds) */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Background video — YouTube embed, mounted only after the delay */}
      {startVideo && (
        <div
          className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <iframe
            src={VIDEO_SRC}
            title="Background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            tabIndex={-1}
            aria-hidden="true"
            onLoad={handleVideoLoad}
            className="absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 border-0"
          />
        </div>
      )}

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
