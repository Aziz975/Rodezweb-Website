// const reasons = [
//   {
//     title: "Strategic Thinking",
//     text: "Every design, campaign, and digital solution is created with a clear business objective in mind. We focus on outcomes, not just aesthetics.",
//   },
//   {
//     title: "Modern & Creative Design",
//     text: "We craft visually stunning digital experiences that capture attention and strengthen brand credibility.",
//   },
//   {
//     title: "Results-Driven Approach",
//     text: "Whether it’s generating leads, increasing sales, or improving user engagement, our solutions are built to deliver measurable impact.",
//   },
//   {
//     title: "Complete Digital Solutions",
//     text: "From website development and eCommerce stores to branding, content creation, and digital marketing, everything you need is available under one roof.",
//   },
// ];

// const steps = [
//   {
//     year: "2016",
//     title: "The Beginning",
//     text: "Rodez Web Technologies was founded by Aman Singh with a passion for technology, creativity, and helping businesses establish a strong digital presence.",
//     card: "bg-white/50 lg:flex-[3.23] lg:min-h-[450px] lg:mb-[11px]",
//   },
//   {
//     year: "2018",
//     title: "Building Trust",
//     text: "Through dedication, quality work, and client referrals, the company expanded its reach, successfully delivering projects for businesses across multiple industries.",
//     card: "bg-white/[.58] lg:flex-[3.35] lg:min-h-[467px] lg:mb-[11px]",
//   },
//   {
//     year: "2021",
//     title: "Expanding Services",
//     text: "What started as web development evolved into a full-service digital agency offering web design, SEO, digital marketing, branding, and eCommerce solutions.",
//     card: "bg-white/70 lg:flex-[3.47] lg:min-h-[483px] lg:mb-[11px]",
//   },
//   {
//     year: "Today",
//     title: "Driving Digital Success",
//     text: "Today, Rodez Web Technologies helps businesses worldwide transform ideas into impactful digital experiences while continuing to innovate and grow.",
//     card: "bg-white/[.88] lg:flex-[3.59] lg:min-h-[522px]",
//   },
// ];

// // Replace 91XXXXXXXXXX with the real WhatsApp number (country code + number, no + or spaces)
// const WHATSAPP_URL =
//   "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20project";

// export default function AboutUs() {
//   return (
//     <div className="min-h-screen bg-[#1e1e1e] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9]">
//       {/* ---------- Hero ---------- */}
//       <section className="px-5 pb-16 pt-24 text-center">
//         <h2 className="text-[clamp(2rem,5.6vw,5.2rem)] font-bold leading-[1.18]">
//           We A Digital{" "}
//           <em className="font-bold text-[#ef5d39] underline underline-offset-8">
//             Marketing Agency
//           </em>
//           <br />
//           For Visually Compelling Stories.
//         </h2>
//       </section>

//       {/* This image already contains the staggered photo cards. Hidden on mobile like the original. */}
//       <section className="hidden md:block">
//         <img
//           src="https://rodezweb.com/wp-content/uploads/2026/06/rodezweb-about-us-.png"
//           alt="Rodezweb team and work"
//           width="1562"
//           height="713"
//           fetchpriority="high"
//           className="block h-auto w-full"
//         />
//       </section>

//       {/* ---------- Welcome + Why You Choose Us ---------- */}
//       <section className="px-6 pb-16 pt-10 lg:px-[7%]">
//         <div className="mx-auto grid max-w-[1620px] gap-x-[50px] gap-y-10 border-t border-[#4a4a4a] pt-6 lg:grid-cols-3 lg:gap-y-[80px]">
//           <p className="text-[1.4rem] font-light">Welcome to rodezweb</p>

//           <div className="lg:col-span-2">
//             <h1 className="mb-10 text-[clamp(2.2rem,4.8vw,4.6rem)] font-bold leading-[1.1]">
//               We Don’t Just Build Websites. We Build Growth Engines.
//             </h1>
//             <p className="max-w-[1080px] text-[1.15rem] font-light leading-[1.75] text-[#d9d9d9]">
//               At Rodezweb, we’re passionate about the digital landscape and
//               dedicated to helping businesses thrive in the online realm. With
//               a team of seasoned experts and a commitment to innovation, we
//               offer a comprehensive suite of digital marketing services
//               tailored to elevate your brand and maximize your online presence.
//             </p>
//           </div>

//           <h2 className="self-start text-[clamp(1.8rem,2.6vw,2.6rem)] font-semibold">
//             Why You Choose Us?
//           </h2>

//           {reasons.map((r, i) => (
//             <article key={r.title} className="border-t border-[#4a4a4a] pt-8">
//               <p className="mb-6 text-[1.15rem] font-light leading-normal">
//                 Reason <br /> (No. {String(i + 1).padStart(2, "0")})
//               </p>
//               <h3 className="mb-5 text-[1.9rem] font-semibold">{r.title}</h3>
//               <p className="text-[1.15rem] font-light leading-[1.75] text-[#d9d9d9]">
//                 {r.text}
//               </p>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* ---------- Journey timeline ---------- */}
//       <section className="px-6 pb-24 pt-10 lg:px-[7%]">
//         <div className="mx-auto max-w-[1620px] border-t border-[#4a4a4a] pt-6">
//           <p className="text-[1.4rem] font-light">
//             From One Vision to a Growing Digital Agency
//           </p>
//           <h2 className="mt-10 text-[clamp(2.2rem,4.6vw,4.4rem)] font-bold leading-[1.15]">
//             From One Vision
//             <br />
//             to a Growing Digital Agency
//           </h2>
//         </div>

//         <div className="mx-auto mt-10 max-w-[1620px] bg-[radial-gradient(ellipse_at_75%_45%,rgba(130,85,40,0.55),transparent_62%)] py-16 lg:px-[4%] lg:py-24">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[50px]">
//             {steps.map((s) => (
//               <article
//                 key={s.year}
//                 className={`rounded-[28px] p-10 text-[#151515] backdrop-blur-sm ${s.card}`}
//               >
//                 <h3 className="mb-6 text-[2.6rem] font-bold leading-none">
//                   {s.year}
//                 </h3>
//                 <h4 className="mb-5 text-[1.9rem] font-semibold leading-tight">
//                   {s.title}
//                 </h4>
//                 <p className="text-[1.05rem] font-light leading-[1.8] text-[#4a4a4a]">
//                   {s.text}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Send a request (CTA) ---------- */}
//       <section className="px-6 pb-28 pt-10 lg:px-[7%]">
//         <div className="mx-auto max-w-[1620px] border-t border-[#4a4a4a] pt-6">
//           <p className="text-[1.4rem] font-light">Send A Request</p>

//           <div className="relative mt-6 overflow-hidden rounded-[28px] bg-[#272727] p-8 lg:-mx-4 lg:flex lg:min-h-[380px] lg:items-center lg:justify-between lg:px-[35px]">
//             {/* Decorative glow, arcs and sphere */}
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute inset-0 hidden lg:block"
//             >
//               <div className="absolute left-[56%] top-[-60px] h-[420px] w-[420px] rounded-full bg-[#e8552b]/60 blur-[80px]" />
//               <div className="absolute bottom-[-80px] left-[36%] h-[300px] w-[300px] rounded-full bg-teal-400/50 blur-[70px]" />
//               <div className="absolute left-1/2 top-[-45px] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-white/10" />
//               <div className="absolute left-1/2 top-[25px] h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-[#ef7a50]/30" />
//               <div className="absolute left-1/2 top-[131px] h-[348px] w-[348px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#f2784f] to-[#2fe0cc]" />
//             </div>

//             <div className="relative z-10 max-w-[1060px]">
//               <h2 className="mb-6 text-[clamp(2.2rem,4.6vw,4.4rem)] font-bold leading-[1.12]">
//                 Ready to be part of
//                 <br />
//                 our next chapter?
//               </h2>
//               <p className="text-[1.15rem] font-light leading-[1.75]">
//                 Over the years, Rodez Web Technologies has grown through
//                 innovation, dedication, and the trust of businesses that chose
//                 us as their digital partner. While we’ve come a long way since
//                 our founding in 2016, we believe the most exciting
//                 opportunities still lie ahead.
//               </p>
//             </div>

//             <a
//               href="/contact"
//               className="relative z-10 mt-8 inline-block whitespace-nowrap rounded-full bg-[#ef5d39] px-9 py-4 text-[1.4rem] text-white no-underline hover:bg-[#d94e2c] lg:mr-[127px] lg:mt-0"
//             >
//               Start Your Project →
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ---------- WhatsApp floating button ---------- */}
//       <a
//         href={WHATSAPP_URL}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] p-3.5 font-[Arial,Helvetica,sans-serif] text-lg text-white no-underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-white md:py-3 md:pl-5 md:pr-7"
//       >
//         <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
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
//         <span className="hidden md:inline">
//           Get Free Consultation for the Project !
//         </span>
//       </a>
//     </div>
//   );
// }






// res


const reasons = [
  {
    title: "Strategic Thinking",
    text: "Every design, campaign, and digital solution is created with a clear business objective in mind. We focus on outcomes, not just aesthetics.",
  },
  {
    title: "Modern & Creative Design",
    text: "We craft visually stunning digital experiences that capture attention and strengthen brand credibility.",
  },
  {
    title: "Results-Driven Approach",
    text: "Whether it’s generating leads, increasing sales, or improving user engagement, our solutions are built to deliver measurable impact.",
  },
  {
    title: "Complete Digital Solutions",
    text: "From website development and eCommerce stores to branding, content creation, and digital marketing, everything you need is available under one roof.",
  },
];

const steps = [
  {
    year: "2016",
    title: "The Beginning",
    text: "Rodez Web Technologies was founded by Aman Singh with a passion for technology, creativity, and helping businesses establish a strong digital presence.",
    card: "bg-white/50 lg:flex-[3.23] lg:min-h-[450px] lg:mb-[11px]",
  },
  {
    year: "2018",
    title: "Building Trust",
    text: "Through dedication, quality work, and client referrals, the company expanded its reach, successfully delivering projects for businesses across multiple industries.",
    card: "bg-white/[.58] lg:flex-[3.35] lg:min-h-[467px] lg:mb-[11px]",
  },
  {
    year: "2021",
    title: "Expanding Services",
    text: "What started as web development evolved into a full-service digital agency offering web design, SEO, digital marketing, branding, and eCommerce solutions.",
    card: "bg-white/70 lg:flex-[3.47] lg:min-h-[483px] lg:mb-[11px]",
  },
  {
    year: "Today",
    title: "Driving Digital Success",
    text: "Today, Rodez Web Technologies helps businesses worldwide transform ideas into impactful digital experiences while continuing to innovate and grow.",
    card: "bg-white/[.88] lg:flex-[3.59] lg:min-h-[522px]",
  },
];

// Replace 91XXXXXXXXXX with the real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_URL =
  "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20project";

/*
  Responsive rules live here as plain CSS media queries.
  Screens 1280px and wider are NOT touched at all, so the desktop layout
  stays exactly as the original design.
*/
const responsiveCss = `
/* ===== Laptop / small desktop (1024px – 1279px): same row layout, just tighter ===== */
@media (min-width: 1024px) and (max-width: 1279px) {
  .au-step { padding: 1.5rem !important; border-radius: 22px !important; }
  .au-step-year { font-size: 2rem !important; margin-bottom: 1rem !important; }
  .au-step-title { font-size: 1.35rem !important; margin-bottom: 0.9rem !important; }
  .au-step-text { font-size: 0.92rem !important; line-height: 1.65 !important; }
  .au-timeline-gap { gap: 20px !important; }
  .au-cta-btn { margin-right: 0 !important; }
}

/* ===== Tablet & below (up to 1023px) ===== */
@media (max-width: 1023px) {
  .au-hero-img { display: block !important; }
  .au-step { padding: 2rem !important; }

  /* Why You Choose Us -> 2 columns */
  .au-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; column-gap: 32px !important; }
  .au-span-all { grid-column: 1 / -1 !important; }

  .au-cta-box { display: block !important; }
}

/* ===== Decorative glow / rings / sphere on tablet & mobile (desktop untouched) ===== */
@media (max-width: 1023px) {
  .au-glow1 { width: 320px !important; height: 320px !important; left: auto !important; right: -90px !important; top: -80px !important; }
  .au-glow2 { width: 260px !important; height: 260px !important; left: -70px !important; bottom: -70px !important; }
  .au-ring1 { width: 620px !important; height: 620px !important; top: auto !important; bottom: -340px !important; }
  .au-ring2 { width: 500px !important; height: 500px !important; top: auto !important; bottom: -280px !important; }
  .au-sphere { width: 300px !important; height: 300px !important; top: auto !important; bottom: -170px !important; }
}
@media (max-width: 767px) {
  .au-glow1 { width: 240px !important; height: 240px !important; right: -80px !important; top: -60px !important; }
  .au-glow2 { width: 200px !important; height: 200px !important; }
  .au-ring1 { width: 480px !important; height: 480px !important; bottom: -270px !important; }
  .au-ring2 { width: 390px !important; height: 390px !important; bottom: -220px !important; }
  .au-sphere { width: 230px !important; height: 230px !important; bottom: -130px !important; }
}
@media (max-width: 480px) {
  .au-ring1 { width: 400px !important; height: 400px !important; bottom: -230px !important; }
  .au-ring2 { width: 320px !important; height: 320px !important; bottom: -180px !important; }
  .au-sphere { width: 190px !important; height: 190px !important; bottom: -105px !important; }
}

/* ===== Mobile landscape / large phones (up to 767px) ===== */
@media (max-width: 767px) {
  .au-hero { padding-top: 4rem !important; padding-bottom: 2.5rem !important; }
  .au-br { display: none; }
  .au-label { font-size: 1.1rem !important; }
  .au-body { font-size: 1rem !important; line-height: 1.7 !important; }
  .au-grid { grid-template-columns: minmax(0, 1fr) !important; row-gap: 32px !important; }
  .au-reason-no { font-size: 1rem !important; margin-bottom: 1rem !important; }
  .au-reason-title { font-size: 1.5rem !important; margin-bottom: 0.75rem !important; }
  .au-section { padding-top: 2rem !important; }
  .au-timeline-wrap { padding-top: 2rem !important; padding-bottom: 2rem !important; }
  .au-step { padding: 1.5rem !important; border-radius: 22px !important; }
  .au-step-year { font-size: 2.2rem !important; margin-bottom: 1rem !important; }
  .au-step-title { font-size: 1.5rem !important; margin-bottom: 0.75rem !important; }
  .au-step-text { font-size: 1rem !important; line-height: 1.7 !important; }
  .au-cta-box { padding: 1.5rem !important; border-radius: 22px !important; }
  .au-cta-btn { font-size: 1.15rem !important; padding: 0.9rem 1.8rem !important; margin-top: 1.5rem !important; }
  .au-wa { right: 1rem !important; bottom: 1rem !important; }
}

/* ===== Small phones (up to 480px) ===== */
@media (max-width: 480px) {
  .au-section { padding-left: 1rem !important; padding-right: 1rem !important; }
  .au-hero { padding-left: 1rem !important; padding-right: 1rem !important; }
  .au-reason-title { font-size: 1.35rem !important; }
  .au-step-year { font-size: 2rem !important; }
  .au-step-title { font-size: 1.35rem !important; }
  .au-cta-box { padding: 1.25rem !important; }
  .au-cta-btn { display: block !important; width: 100%; white-space: normal !important; text-align: center; font-size: 1.05rem !important; }
}

/* ===== Very small phones (up to 360px) ===== */
@media (max-width: 360px) {
  .au-body, .au-step-text { font-size: 0.95rem !important; }
  .au-cta-btn { padding: 0.8rem 1rem !important; }
}
`;

export default function AboutUs() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1e1e1e] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9]">
      <style>{responsiveCss}</style>

      {/* ---------- Hero ---------- */}
      <section className="au-hero px-5 pb-16 pt-24 text-center">
        <h2 className="text-[clamp(2rem,5.6vw,5.2rem)] font-bold leading-[1.18]">
          We A Digital{" "}
          <em className="font-bold text-[#ef5d39] underline underline-offset-8">
            Marketing Agency
          </em>{" "}
          <br className="au-br" />
          For Visually Compelling Stories.
        </h2>
      </section>

      {/* This image already contains the staggered photo cards. Now also visible on mobile. */}
      <section className="au-hero-img hidden md:block">
        <img
          src="https://rodezweb.com/wp-content/uploads/2026/06/rodezweb-about-us-.png"
          alt="Rodezweb team and work"
          width="1562"
          height="713"
          fetchpriority="high"
          className="block h-auto w-full"
        />
      </section>

      {/* ---------- Welcome + Why You Choose Us ---------- */}
      <section className="au-section px-6 pb-16 pt-10 lg:px-[7%]">
        <div className="au-grid mx-auto grid max-w-[1620px] gap-x-[50px] gap-y-10 border-t border-[#4a4a4a] pt-6 lg:grid-cols-3 lg:gap-y-[80px]">
          <p className="au-label au-span-all text-[1.4rem] font-light">
            Welcome to rodezweb
          </p>

          <div className="au-span-all lg:col-span-2">
            <h1 className="mb-10 text-[clamp(2.2rem,4.8vw,4.6rem)] font-bold leading-[1.1]">
              We Don’t Just Build Websites. We Build Growth Engines.
            </h1>
            <p className="au-body max-w-[1080px] text-[1.15rem] font-light leading-[1.75] text-[#d9d9d9]">
              At Rodezweb, we’re passionate about the digital landscape and
              dedicated to helping businesses thrive in the online realm. With
              a team of seasoned experts and a commitment to innovation, we
              offer a comprehensive suite of digital marketing services
              tailored to elevate your brand and maximize your online presence.
            </p>
          </div>

          <h2 className="au-span-all self-start text-[clamp(1.8rem,2.6vw,2.6rem)] font-semibold">
            Why You Choose Us?
          </h2>

          {reasons.map((r, i) => (
            <article key={r.title} className="border-t border-[#4a4a4a] pt-8">
              <p className="au-reason-no mb-6 text-[1.15rem] font-light leading-normal">
                Reason <br /> (No. {String(i + 1).padStart(2, "0")})
              </p>
              <h3 className="au-reason-title mb-5 text-[1.9rem] font-semibold">
                {r.title}
              </h3>
              <p className="au-body text-[1.15rem] font-light leading-[1.75] text-[#d9d9d9]">
                {r.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Journey timeline ---------- */}
      <section className="au-section px-6 pb-24 pt-10 lg:px-[7%]">
        <div className="mx-auto max-w-[1620px] border-t border-[#4a4a4a] pt-6">
          <p className="au-label text-[1.4rem] font-light">
            From One Vision to a Growing Digital Agency
          </p>
          <h2 className="mt-10 text-[clamp(2.2rem,4.6vw,4.4rem)] font-bold leading-[1.15]">
            From One Vision <br className="au-br" />
            to a Growing Digital Agency
          </h2>
        </div>

        <div className="au-timeline-wrap mx-auto mt-10 max-w-[1620px] bg-[radial-gradient(ellipse_at_75%_45%,rgba(130,85,40,0.55),transparent_62%)] py-16 lg:px-[4%] lg:py-24">
          <div className="au-timeline-gap flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[50px]">
            {steps.map((s) => (
              <article
                key={s.year}
                className={`au-step rounded-[28px] p-10 text-[#151515] backdrop-blur-sm ${s.card}`}
              >
                <h3 className="au-step-year mb-6 text-[2.6rem] font-bold leading-none">
                  {s.year}
                </h3>
                <h4 className="au-step-title mb-5 text-[1.9rem] font-semibold leading-tight">
                  {s.title}
                </h4>
                <p className="au-step-text text-[1.05rem] font-light leading-[1.8] text-[#4a4a4a]">
                  {s.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Send a request (CTA) ---------- */}
      <section className="au-section px-6 pb-28 pt-10 lg:px-[7%]">
        <div className="mx-auto max-w-[1620px] border-t border-[#4a4a4a] pt-6">
          <p className="au-label text-[1.4rem] font-light">Send A Request</p>

          <div className="au-cta-box relative mt-6 overflow-hidden rounded-[28px] bg-[#272727] p-8 lg:-mx-4 lg:flex lg:min-h-[380px] lg:items-center lg:justify-between lg:px-[35px]">
            {/* Decorative glow, arcs and sphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 block"
            >
              <div className="au-glow1 absolute left-[56%] top-[-60px] h-[420px] w-[420px] rounded-full bg-[#e8552b]/60 blur-[80px]" />
              <div className="au-glow2 absolute bottom-[-80px] left-[36%] h-[300px] w-[300px] rounded-full bg-teal-400/50 blur-[70px]" />
              <div className="au-ring1 absolute left-1/2 top-[-45px] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-white/10" />
              <div className="au-ring2 absolute left-1/2 top-[25px] h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-[#ef7a50]/30" />
              <div className="au-sphere absolute left-1/2 top-[131px] h-[348px] w-[348px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#f2784f] to-[#2fe0cc]" />
            </div>

            <div className="relative z-10 max-w-[1060px]">
              <h2 className="mb-6 text-[clamp(2.2rem,4.6vw,4.4rem)] font-bold leading-[1.12]">
                Ready to be part of <br className="au-br" />
                our next chapter?
              </h2>
              <p className="au-body text-[1.15rem] font-light leading-[1.75]">
                Over the years, Rodez Web Technologies has grown through
                innovation, dedication, and the trust of businesses that chose
                us as their digital partner. While we’ve come a long way since
                our founding in 2016, we believe the most exciting
                opportunities still lie ahead.
              </p>
            </div>

            <a
              href="/contact"
              className="au-cta-btn relative z-10 mt-8 inline-block whitespace-nowrap rounded-full bg-[#ef5d39] px-9 py-4 text-[1.4rem] text-white no-underline hover:bg-[#d94e2c] lg:mr-[127px] lg:mt-0"
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </section>

      {/* ---------- WhatsApp floating button ---------- */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Free Consultation for the Project on WhatsApp"
        className="au-wa fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] p-3.5 font-[Arial,Helvetica,sans-serif] text-lg text-white no-underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-white md:py-3 md:pl-5 md:pr-7"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
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
        <span className="hidden md:inline">
          Get Free Consultation for the Project !
        </span>
      </a>
    </div>
  );
}