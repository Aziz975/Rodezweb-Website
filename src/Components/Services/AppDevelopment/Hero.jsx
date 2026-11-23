
// import { useEffect, useRef } from "react";
// import {
//   Apple,
//   ArrowUpRight,
//   Smartphone,
// } from "lucide-react";

// // Add your hero image path later
// const HERO_IMAGE = "/images/wp-landing.png";

// // Replace with your WhatsApp number (country code + number, no + or spaces)
// const WHATSAPP_URL =
//   "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20project";

// const FONT_URL =
//   "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap";

// export default function Hero() {
//   const heroRef = useRef(null);
//   const imgRef = useRef(null);

//   // Subtle parallax effect for hero image
//   useEffect(() => {
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       return;
//     }

//     let frame = 0;

//     const update = () => {
//       frame = 0;

//       const hero = heroRef.current;
//       const img = imgRef.current;

//       if (!hero || !img) return;

//       const rect = hero.getBoundingClientRect();

//       if (rect.bottom < 0 || rect.top > window.innerHeight) return;

//       const distance =
//         window.innerHeight / 2 - (rect.top + rect.height / 2);

//       const max = rect.height * 0.2;
//       const y = Math.max(-max, Math.min(max, distance * 0.3));

//       img.style.transform = `translate3d(0, ${y}px, 0)`;
//     };

//     const onScroll = () => {
//       if (!frame) {
//         frame = requestAnimationFrame(update);
//       }
//     };

//     update();

//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);

//       if (frame) cancelAnimationFrame(frame);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#1e1e1e] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
//       <link rel="stylesheet" href={FONT_URL} />

//       {/* ================= HERO BANNER ================= */}
//       <section
//         ref={heroRef}
//         className="relative flex min-h-[230px] items-center justify-center overflow-hidden bg-[#1e1e1e] px-5 sm:min-h-[280px] lg:min-h-[320px]"
//       >
//         {/* Hero image */}
//         {HERO_IMAGE && (
//           <img
//             ref={imgRef}
//             src={HERO_IMAGE}
//             alt="App development background"
//             className="absolute left-0 top-[-20%] h-[140%] w-full object-cover will-change-transform"
//           />
//         )}

//         {/* Hero title */}
//         <div className="relative z-10 px-4 py-14 text-center sm:py-20">
//           <h1 className="text-[clamp(2rem,7vw,5.8rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white">
//             APP DEVELOPMENT
//           </h1>
//         </div>
//       </section>

//       {/* ================= MAIN CONTENT ================= */}
//       <section className="bg-[#1e1e1e] px-6 py-16 transition-colors duration-300 sm:px-8 sm:py-20 lg:px-[7.2%] lg:py-[130px] light:bg-[#fafafa]">
//         <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.45fr_0.9fr] lg:gap-[6%]">

//           {/* LEFT CONTENT */}
//           <div>
//             <h2 className="text-[clamp(2.5rem,5.2vw,5rem)] font-bold leading-[1.05] tracking-[-0.045em] text-[#fdfaf9] light:text-[#1c1c1c]">
//               Your Next Stage of Growth Starts
//             </h2>

//             <h3 className="mt-5 text-[clamp(1.5rem,2.8vw,2.7rem)] font-bold leading-tight tracking-[-0.04em] text-[#a0a0a0] light:text-[#666666]">
//               With the Right Application
//             </h3>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex flex-col gap-6 lg:pt-1">
//             <p className="text-[clamp(1rem,1.15vw,1.3rem)] leading-[1.75] text-[#f0eeee] light:text-[#555555]">
//               Custom web and mobile applications designed to streamline
//               operations, improve customer experiences, and unlock new
//               opportunities for growth.
//             </p>

//             {/* CTA + Platform Icons */}
//             <div className="flex flex-wrap items-center gap-3">

//               {/* Discovery call button */}
//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f15a3a] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#ff704d] hover:shadow-[0_0_25px_rgba(241,90,58,0.2)] sm:px-6 sm:text-base"
//               >
//                 Book A Discovery Call
//                 <ArrowUpRight size={18} />
//               </a>

//               {/* Android */}
//               <div
//                 title="Android Development"
//                 className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#292929] text-white transition-colors hover:bg-[#333333] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#e2e2e2]"
//               >
//                 <Smartphone size={26} strokeWidth={1.8} />
//               </div>

//               {/* AWS */}
//               <div
//                 title="AWS Cloud"
//                 className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#292929] text-white transition-colors hover:bg-[#333333] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#e2e2e2]"
//               >
//                 <span className="relative text-[17px] font-bold tracking-tight">
//                   aws
//                   <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-[22px] rounded-full bg-[#fdfaf9] light:bg-[#1c1c1c]" />
//                 </span>
//               </div>

//               {/* App Store */}
//               <div
//                 title="App Store"
//                 className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#292929] text-white transition-colors hover:bg-[#333333] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#e2e2e2]"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-[25px] w-[25px]"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M12 5.5 5 18" />
//                   <path d="m8.5 5.5 7 13" />
//                   <path d="M4.5 14.5h15" />
//                 </svg>
//               </div>

//               {/* Apple */}
//               <div
//                 title="Apple Development"
//                 className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#292929] text-white transition-colors hover:bg-[#333333] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#e2e2e2]"
//               >
//                 <Apple size={25} fill="currentColor" strokeWidth={1.5} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= TECHNOLOGY SHOWCASE ================= */}
//       <section className="relative flex min-h-[700px] w-full items-center justify-center overflow-hidden bg-[#1d1d1d] px-4 py-12 sm:min-h-[850px] sm:px-8 lg:min-h-[1000px]">

//         {/* Enhanced technology background */}
//         <img
//           src="/images/Smartphone-Display-Layout.png"
//           alt="Abstract orange technology background with digital engineering graphics"
//           className="absolute inset-0 h-full w-full py-10"
//         />

//         {/* Background overlay */}
//         <div className="absolute inset-0 bg-[#1d1d1d]/20" />

//         {/* Optional dark vignette */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />

//         {/* Background glow */}
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003d33]/10 blur-[130px]" />

//         {/* Phones */}
//         <div className="relative mx-auto flex w-full max-w-[1200px] items-center justify-center">
//           {/* Keep your existing three phone mockups here */}
//         </div>
//       </section>

//       {/* ================= WHATSAPP FLOATING BUTTON ================= */}
//       <a
//         href={WHATSAPP_URL}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Get Free Consultation for the Project on WhatsApp"
//         className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[#20bd5a] sm:right-6 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base md:bottom-7"
//       >
//         {/* WhatsApp Icon */}
//         <svg
//           viewBox="0 0 24 24"
//           width="29"
//           height="29"
//           className="shrink-0"
//           aria-hidden="true"
//         >
//           <path
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.6"
//             d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
//           />

//           <path
//             fill="currentColor"
//             d="M16.4 14.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6 6 0 0 1-3-2.6c-.2-.3.2-.3.6-1 .1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.5 2.5 0 0 0-.8 1.9c0 1.1.8 2.2.9 2.3.1.2 1.6 2.5 3.9 3.5 1.5.6 2 .6 2.7.5.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1l-.5-.3Z"
//           />
//         </svg>

//         <span className="hidden sm:inline">
//           Get Free Consultation for the Project !
//         </span>
//       </a>
//     </div>
//   );
// }




import { useEffect, useRef } from "react";
import {
  Apple,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";

// Add your hero image path later
const HERO_IMAGE = "/images/wp-landing.png";

// Replace with your WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_URL =
  "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20project";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap";

/* Reusable parallax hook.
   - wrapRef: the section (overflow-hidden)
   - imgRef: the image inside it (taller than the section)
   - speed: 0.3 = image scrolls at about 70% of the page speed
   - maxRatio: max movement as a fraction of the section height (null = automatic).
     Keep it equal to or smaller than the image's extra height on each side
     (e.g. h-[140%] top-[-20%] -> 0.2), so no gaps ever show.
   - scale: optional zoom (e.g. 1.06). Use it with images that keep their natural height:
     maxRatio should then be (scale - 1) / 2. */
function useParallax(wrapRef, imgRef, { speed = 0.3, maxRatio = 0.2, scale = 1, centerY = false } = {}) {
  useEffect(() => {
    // Respect users who prefer no motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img) return;

      const rect = wrap.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return; // off screen

      const distance = window.innerHeight / 2 - (rect.top + rect.height / 2);
      // maxRatio null = auto: use the image's real extra height on each side
      const max =
        maxRatio == null
          ? Math.max(0, (img.offsetHeight - rect.height) / 2)
          : rect.height * maxRatio;
      const y = Math.max(-max, Math.min(max, distance * speed));

      // centerY: the image sits at top-1/2, so keep it shifted up by half its own height
      const ty = centerY ? `calc(-50% + ${y}px)` : `${y}px`;
      img.style.transform = `translate3d(0, ${ty}, 0) scale(${scale})`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [wrapRef, imgRef, speed, maxRatio, scale, centerY]);
}

export default function Hero() {
  // hero banner parallax
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  useParallax(heroRef, imgRef, { speed: 0.3, maxRatio: 0.2 });

  // technology showcase parallax
  const techRef = useRef(null);
  const techImgRef = useRef(null);
  useParallax(techRef, techImgRef, { speed: 0.3, maxRatio: null, centerY: true });

  return (
    <div className="min-h-screen bg-[#1e1e1e] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
      <link rel="stylesheet" href={FONT_URL} />

      {/* ================= HERO BANNER ================= */}
      <section
        ref={heroRef}
        className="relative flex min-h-[230px] items-center justify-center overflow-hidden bg-[#1e1e1e] px-5 sm:min-h-[280px] lg:min-h-[320px]"
      >
        {/* Hero image */}
        {HERO_IMAGE && (
          <img
            ref={imgRef}
            src={HERO_IMAGE}
            alt="App development background"
            className="absolute left-0 top-[-20%] h-[140%] w-full object-cover will-change-transform"
          />
        )}

        {/* Hero title */}
        <div className="relative z-10 px-4 py-14 text-center sm:py-20">
          <h1 className="text-[clamp(2rem,7vw,5.8rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white">
            APP DEVELOPMENT
          </h1>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="bg-[#1e1e1e] px-6 py-16 transition-colors duration-300 sm:px-8 sm:py-20 lg:px-[7.2%] lg:py-[130px] light:bg-[#fafafa]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.45fr_0.9fr] lg:gap-[6%]">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[clamp(2.5rem,5.2vw,5rem)] font-bold leading-[1.05] tracking-[-0.045em] text-[#fdfaf9] light:text-[#1c1c1c]">
              Your Next Stage of Growth Starts
            </h2>

            <h3 className="mt-5 text-[clamp(1.5rem,2.8vw,2.7rem)] font-bold leading-tight tracking-[-0.04em] text-[#a0a0a0] light:text-[#666666]">
              With the Right Application
            </h3>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6 lg:pt-1">
            <p className="text-[clamp(1rem,1.15vw,1.3rem)] leading-[1.75] text-[#f0eeee] light:text-[#555555]">
              Custom web and mobile applications designed to streamline
              operations, improve customer experiences, and unlock new
              opportunities for growth.
            </p>

            {/* CTA + Platform Icons */}
            <div className="flex flex-wrap items-center gap-3">

              {/* Discovery call button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f15a3a] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#ff704d] hover:shadow-[0_0_25px_rgba(241,90,58,0.2)] sm:px-6 sm:text-base"
              >
                Book A Discovery Call
                <ArrowUpRight size={18} />
              </a>

              {/* Android */}
              <div
                title="Android Development"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#292929] text-white transition-colors hover:bg-[#333333] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#e2e2e2]"
              >
                <Smartphone size={26} strokeWidth={1.8} />
              </div>

              {/* AWS */}
              <div
                title="AWS Cloud"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#292929] text-white transition-colors hover:bg-[#333333] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#e2e2e2]"
              >
                <span className="relative text-[17px] font-bold tracking-tight">
                  aws
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-[22px] rounded-full bg-[#fdfaf9] light:bg-[#1c1c1c]" />
                </span>
              </div>

              {/* App Store */}
              <div
                title="App Store"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#292929] text-white transition-colors hover:bg-[#333333] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#e2e2e2]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[25px] w-[25px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5.5 5 18" />
                  <path d="m8.5 5.5 7 13" />
                  <path d="M4.5 14.5h15" />
                </svg>
              </div>

              {/* Apple */}
              <div
                title="Apple Development"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#292929] text-white transition-colors hover:bg-[#333333] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#e2e2e2]"
              >
                <Apple size={25} fill="currentColor" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY SHOWCASE ================= */}
      {/* Dark space above/below + a wide band showing the middle of the photo (same crop as the live site) */}
      <section className="w-full bg-[#1d1d1d] pt-12 pb-6 sm:pt-20 sm:pb-10 lg:pt-[130px] lg:pb-[80px]">
        <div
          ref={techRef}
          className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2/1] lg:aspect-[1900/710]"
        >
          {/* full width, taller than the band, centered with top-1/2 so only the middle shows */}
          <img
            ref={techImgRef}
            src="/images/Smartphone-Display-Layout.png"
            alt="Smartphone display layout showing a custom mobile app home screen"
            className="absolute left-0 top-1/2 block h-auto w-full max-w-none will-change-transform"
            style={{ transform: "translate3d(0, -50%, 0)" }}
          />
        </div>
      </section>

      {/* ================= WHATSAPP FLOATING BUTTON ================= */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Free Consultation for the Project on WhatsApp"
        className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[#20bd5a] sm:right-6 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base md:bottom-7"
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="29"
          height="29"
          className="shrink-0"
          aria-hidden="true"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
          />

          <path
            fill="currentColor"
            d="M16.4 14.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6 6 0 0 1-3-2.6c-.2-.3.2-.3.6-1 .1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.5 2.5 0 0 0-.8 1.9c0 1.1.8 2.2.9 2.3.1.2 1.6 2.5 3.9 3.5 1.5.6 2 .6 2.7.5.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1l-.5-.3Z"
          />
        </svg>

        <span className="hidden sm:inline">
          Get Free Consultation for the Project !
        </span>
      </a>
    </div>
  );
}