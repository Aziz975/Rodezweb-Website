
// import React from "react";

// const PhoneShowcase = () => {
//   return (
//     <section className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#1c1c1c] px-4 py-16 transition-colors duration-300 light:bg-[#fafafa]">
//       <div className="relative flex h-[clamp(420px,45vw,600px)] w-full max-w-[700px] items-start justify-center">

//         {/* Left phone */}
//         <div className="absolute left-[2%] top-0 w-[27%] -rotate-[8deg] origin-bottom">
//           <img
//             src="/images/Left-Rodez-Phone.png"
//             alt="App development phone mockup left"
//             className="h-auto w-full object-contain drop-shadow-2xl"
//           />
//         </div>

//         {/* Center phone */}
//         <div className="absolute left-1/2 top-[24%] z-10 w-[40%] -translate-x-1/2">
//           <img
//             src="/images/Mid-Rodez-Phone.png"
//             alt="Building the future phone mockup center"
//             className="h-auto w-full object-contain drop-shadow-2xl"
//           />
//         </div>

//         {/* Right phone */}
//         <div className="absolute right-[2%] top-[-1%] w-[29%] rotate-[6deg] origin-bottom">
//           <img
//             src="/images/Right-Rodez-Phone.png"
//             alt="App development phone mockup right"
//             className="h-auto w-full object-contain drop-shadow-2xl"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PhoneShowcase;

import { useEffect, useRef, useState } from "react";

export default function PhonesShowcase() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  // start the animation when the section scrolls into view (runs once)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setShow(true); // old browser fallback
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#1c1c1c] px-4 py-16 transition-colors duration-300 light:bg-[#fafafa]"
    >
      {/* floating animation (starts after the entrance finishes) */}
      <style>{`
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .phone-float { animation: none !important; }
        }
      `}</style>

      <div className="relative flex h-[clamp(420px,45vw,600px)] w-full max-w-[700px] items-start justify-center">

        {/* Left phone: comes out from behind the center phone */}
        <div className="absolute left-[2%] top-0 w-[27%] -rotate-[8deg] origin-bottom">
          <div
            className={`transition-all duration-[900ms] ease-out motion-reduce:transition-none ${
              show ? "translate-x-0 opacity-100" : "translate-x-[70%] opacity-0"
            }`}
            style={{ transitionDelay: show ? "350ms" : "0ms" }}
          >
            <div
              className="phone-float"
              style={{ animation: show ? "phoneFloat 5s ease-in-out 1.6s infinite" : "none" }}
            >
              <img
                src="/images/Left-Rodez-Phone.png"
                alt="App development phone mockup left"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Center phone: rises first */}
        <div className="absolute left-1/2 top-[24%] z-10 w-[40%] -translate-x-1/2">
          <div
            className={`transition-all duration-[900ms] ease-out motion-reduce:transition-none ${
              show ? "translate-y-0 scale-100 opacity-100" : "translate-y-24 scale-95 opacity-0"
            }`}
          >
            <div
              className="phone-float"
              style={{ animation: show ? "phoneFloat 6s ease-in-out 1.2s infinite" : "none" }}
            >
              <img
                src="/images/Mid-Rodez-Phone.png"
                alt="Building the future phone mockup center"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Right phone: comes out from behind the center phone */}
        <div className="absolute right-[2%] top-[-1%] w-[29%] rotate-[6deg] origin-bottom">
          <div
            className={`transition-all duration-[900ms] ease-out motion-reduce:transition-none ${
              show ? "translate-x-0 opacity-100" : "-translate-x-[70%] opacity-0"
            }`}
            style={{ transitionDelay: show ? "500ms" : "0ms" }}
          >
            <div
              className="phone-float"
              style={{ animation: show ? "phoneFloat 5.5s ease-in-out 1.8s infinite" : "none" }}
            >
              <img
                src="/images/Right-Rodez-Phone.png"
                alt="App development phone mockup right"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}