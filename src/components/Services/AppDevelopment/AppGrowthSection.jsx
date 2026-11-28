import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const APP_SHOWCASE_IMAGE = "/images/Left-Rodez-Phone.png";

/* ---------- Shared sizing (same scale as DigitalMarketingCta / Faq / Process / Growth) ---------- */
const SIDE_SPACE = "px-5 sm:px-8 lg:px-[7.5%]";
const WRAP = "mx-auto max-w-[1700px]";

const headingStyle = {
  fontSize: "clamp(1.9rem, 3.6vw, 4.25rem)",
  letterSpacing: "-0.03em",
};

const subHeadingStyle = {
  fontSize: "clamp(1.1rem, 1.7vw, 2.1rem)",
  letterSpacing: "-0.02em",
};

const bodyStyle = {
  fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
  lineHeight: 1.7,
  letterSpacing: "-0.02em",
};

const smallStyle = {
  fontSize: "clamp(0.85rem, 1vw, 1.2rem)",
  lineHeight: 1.6,
  letterSpacing: "-0.02em",
};

const ease = [0.22, 1, 0.36, 1];

/* ---------------- REUSABLE REVEAL ---------------- */

function Reveal({ children, delay = 0, className = "", y = 35 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: shouldReduceMotion ? 0 : y }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.75, delay, ease }
      }
    >
      {children}
    </motion.div>
  );
}

/* ---------------- LETTER REVEAL ---------------- */

function LetterReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  const words = children.split(" ");
  let letterCount = 0; // running index so the delay continues smoothly across words

  return (
    <span ref={ref} className={`inline-block ${className}`} aria-label={children}>
      <span className="sr-only">{children}</span>

      <span aria-hidden="true" className="inline-flex flex-wrap justify-center">
        {words.map((word, wordIndex) => (
          <span
            key={`${word}-${wordIndex}`}
            className="mr-[0.25em] inline-flex whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => {
              const order = letterCount++;
              return (
                <motion.span
                  key={`${letter}-${letterIndex}`}
                  className="inline-block"
                  initial={false}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, rotateX: 0 }
                      : {
                          opacity: 0,
                          y: shouldReduceMotion ? 0 : 22,
                          rotateX: shouldReduceMotion ? 0 : -45,
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.5,
                          delay: delay + Math.min(order, 40) * 0.025,
                          ease,
                        }
                  }
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        ))}
      </span>
    </span>
  );
}

/* ---------------- TOP PART (shown before the phones on the live page) ---------------- */

export function AppCustomersSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1c1c1c] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
      <div className={`${SIDE_SPACE} pt-16 sm:pt-20 lg:pt-28`}>
        <div className={`${WRAP} text-center`}>
          <h2 className="font-bold leading-[1.1]" style={headingStyle}>
            <LetterReveal>Your Customers Are Already There</LetterReveal>
          </h2>

          <Reveal delay={0.2}>
            <h3
              className="mt-3 font-semibold text-[#fdfaf9] light:text-[#1c1c1c]"
              style={subHeadingStyle}
            >
              Is Your Business Too?
            </h3>
          </Reveal>

          <div
            className="mx-auto mt-6 max-w-[1200px] space-y-2 text-[#fdfaf9] light:text-[#555555]"
            style={bodyStyle}
          >
            <Reveal delay={0.3}>
              <p>Today&apos;s customers expect convenience, speed, and accessibility.</p>
            </Reveal>

            <Reveal delay={0.4}>
              <p>
                Whether they&apos;re booking services, placing orders, tracking progress, or
                interacting with your brand, mobile experiences have become the standard—not the
                advantage.
                <br className="hidden lg:block" />
                Businesses that meet customers where they are create stronger relationships,
                better experiences, and more opportunities to grow.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function AppGrowthSection() {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    "Increase revenue",
    "Improve customer retention",
    "Reduce manual work",
    "Automate operations",
    "Create better customer experiences",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#1c1c1c] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
      {/* ================= TOP CONTENT ================= */}


      {/* ================= BOTTOM CONTENT ================= */}
      <div className={`${SIDE_SPACE} pb-16 sm:pb-20 lg:pb-28`}>
        <div className={`${WRAP} text-center`}>
          <h2
            className="mx-auto max-w-[1400px] font-bold leading-[1.1]"
            style={headingStyle}
          >
            <LetterReveal>
              We Don’t Just Build Apps. We Build Growth Engines.
            </LetterReveal>
          </h2>

          <div
            className="mx-auto mt-6 max-w-[1000px] text-[#fdfaf9] light:text-[#555555]"
            style={bodyStyle}
          >
            <Reveal delay={0.2}>
              <p>An application shouldn&apos;t be another business expense.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-1 font-semibold light:text-[#1c1c1c]">It should:</p>
            </Reveal>
          </div>

          {/* ================= BENEFITS ================= */}
          <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:gap-x-9">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={0.35 + i * 0.1} y={25}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.04 }}
                  transition={{ duration: 0.3, ease }}
                  className="flex items-center gap-2 font-semibold text-[#fdfaf9] light:text-[#1c1c1c]"
                  style={smallStyle}
                >
                  <span className="text-[#F45132]">✓</span>
                  <span>{benefit}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* ================= FINAL TEXT ================= */}
          <Reveal delay={0.4}>
            <p
              className="mx-auto mt-8 max-w-[1100px] text-gray-300 light:text-[#666666]"
              style={smallStyle}
            >
              At Rodez Web Technologies, every application is designed around business
              outcomes—not just features.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}













// import React from "react";

// const APP_SHOWCASE_IMAGE = "/images/Left-Rodez-Phone.png";

// /* ---------- Shared sizing (same scale as DigitalMarketingCta / Faq / Process / Growth) ---------- */
// const SIDE_SPACE = "px-5 sm:px-8 lg:px-[7.5%]";
// const WRAP = "mx-auto max-w-[1700px]";

// const headingStyle = {
//   fontSize: "clamp(1.9rem, 3.6vw, 4.25rem)",
//   letterSpacing: "-0.03em",
// };

// const subHeadingStyle = {
//   fontSize: "clamp(1.1rem, 1.7vw, 2.1rem)",
//   letterSpacing: "-0.02em",
// };

// const bodyStyle = {
//   fontSize: "clamp(0.9rem, 1.05vw, 1.25rem)",
//   lineHeight: 1.7,
//   letterSpacing: "-0.02em",
// };

// const smallStyle = {
//   fontSize: "clamp(0.85rem, 1vw, 1.2rem)",
//   lineHeight: 1.6,
//   letterSpacing: "-0.02em",
// };

// export default function AppGrowthSection() {
//   const benefits = [
//     "Increase revenue",
//     "Improve customer retention",
//     "Reduce manual work",
//     "Automate operations",
//     "Create better customer experiences",
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-[#1c1c1c] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">
//       {/* ================= TOP CONTENT ================= */}
//       <div className={`${SIDE_SPACE} pt-16 sm:pt-20 lg:pt-28`}>
//         <div className={`${WRAP} text-center`}>
//           <h2 className="font-bold leading-[1.1]" style={headingStyle}>
//             Your Customers Are Already There
//           </h2>

//           <h3 className="mt-3 font-semibold text-[#fdfaf9] light:text-[#1c1c1c]" style={subHeadingStyle}>
//             Is Your Business Too?
//           </h3>

//           <div className="mx-auto mt-6 max-w-[1200px] space-y-2 text-[#fdfaf9] light:text-[#555555]" style={bodyStyle}>
//             <p>Today&apos;s customers expect convenience, speed, and accessibility.</p>

//             <p>
//               Whether they&apos;re booking services, placing orders, tracking progress, or
//               interacting with your brand, mobile experiences have become the standard—not the
//               advantage.
//               <br className="hidden lg:block" />
//               Businesses that meet customers where they are create stronger relationships, better
//               experiences, and more opportunities to grow.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ================= BOTTOM CONTENT ================= */}
      
//     </section>
//   );
// }


      {/* ================= BOTTOM CONTENT ================= */}


// <div className={`${SIDE_SPACE} pb-16 sm:pb-20 lg:pb-28`}>
//         <div className={`${WRAP} text-center`}>
//           <h2 className="mx-auto max-w-[1400px] font-bold leading-[1.1]" style={headingStyle}>
//             We Don’t Just Build Apps. We Build Growth Engines.
//           </h2>

//           <div className="mx-auto mt-6 max-w-[1000px] text-[#fdfaf9] light:text-[#555555]" style={bodyStyle}>
//             <p>An application shouldn&apos;t be another business expense.</p>
//             <p className="mt-1 font-semibold light:text-[#1c1c1c]">It should:</p>
//           </div>

//           {/* ================= BENEFITS ================= */}
//           <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:gap-x-9">
//             {benefits.map((benefit) => (
//               <div
//                 key={benefit}
//                 className="flex items-center gap-2 font-semibold text-[#fdfaf9] light:text-[#1c1c1c]"
//                 style={smallStyle}
//               >
//                 <span className="text-[#F45132]">✓</span>
//                 <span>{benefit}</span>
//               </div>
//             ))}
//           </div>

//           {/* ================= FINAL TEXT ================= */}
//           <p className="mx-auto mt-8 max-w-[1100px] text-gray-300 light:text-[#666666]" style={smallStyle}>
//             At Rodex Web Technologies, every application is designed around business outcomes—not
//             just features.
//           </p>
//         </div>
//       </div>
