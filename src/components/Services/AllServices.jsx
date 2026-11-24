
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

// Same hero photo the original site uses
const HERO_IMAGE =
  "https://theme.madsparrow.me/most/wp-content/uploads/2022/11/stock-photo-1040234435.jpg";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap";

// Replace with your real WhatsApp number
const WHATSAPP_URL =
  "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20project";

// Icon drawings (24x24, outline style)
const iconProps = {
  viewBox: "0 0 24 24",
  width: 38,
  height: 38,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const icons = {
  code: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M3 9h18" />
      <path d="m10 13.5-2 2 2 2M14 13.5l2 2-2 2" />
    </svg>
  ),
  layers: (
    <svg {...iconProps}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12.5 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  ),
  align: (
    <svg {...iconProps}>
      <path d="M12 3v18" />
      <rect x="6" y="6" width="12" height="4" rx="1.5" />
      <rect x="8" y="14" width="8" height="4" rx="1.5" />
    </svg>
  ),
  camera: (
    <svg {...iconProps}>
      <path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  ),
  reel: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M3 9h18" />
      <path d="m10 13 4 2.5-4 2.5v-5Z" />
    </svg>
  ),
};

const colors = {
  indigo: "bg-[#2b2a4f] text-[#5a5cf0]",
  red: "bg-[#3a2323] text-[#ef4444]",
  teal: "bg-[#223a3a] text-[#2dd4bf]",
  pink: "bg-[#3a2231] text-[#ec4899]",
  green: "bg-[#203a31] text-[#34d399]",
  orange: "bg-[#3a2622] text-[#f4623a]",
};

const services = [
  {
    title: "Website Development",
    text: "Build fast, secure, and scalable websites that combine functionality with performance to support your business growth.",
    icon: icons.code,
    color: colors.indigo,
    glow: "rgba(90,92,240,0.18)",
    borderGlow: "hover:border-[#5a5cf0]",
  },
  {
    title: "Website Design",
    text: "Create visually stunning, user-focused designs that capture attention and deliver exceptional experiences across every device.",
    icon: icons.layers,
    color: colors.red,
    glow: "rgba(239,68,68,0.16)",
    borderGlow: "hover:border-[#ef4444]",
  },
  {
    title: "Search Engine Optimization (SEO)",
    text: "Increase your visibility on search engines and attract high-quality traffic with proven optimization strategies.",
    icon: icons.code,
    color: colors.teal,
    glow: "rgba(45,212,191,0.16)",
    borderGlow: "hover:border-[#2dd4bf]",
  },
  {
    title: "Performance Marketing",
    text: "Generate leads, drive conversions, and maximize return on investment through data-driven advertising campaigns.",
    icon: icons.align,
    color: colors.pink,
    glow: "rgba(236,72,153,0.16)",
    borderGlow: "hover:border-[#ec4899]",
  },
  {
    title: "Branding & Identity",
    text: "Develop a memorable brand identity that communicates your values and sets you apart from competitors.",
    icon: icons.camera,
    color: colors.green,
    glow: "rgba(52,211,153,0.16)",
    borderGlow: "hover:border-[#34d399]",
  },
  {
    title: "Social Media Marketing",
    text: "Strengthen your brand presence and connect with your audience through engaging social media campaigns.",
    icon: icons.reel,
    color: colors.orange,
    glow: "rgba(244,98,58,0.16)",
    borderGlow: "hover:border-[#f4623a]",
  },
  {
    title: "E-Commerce Solutions",
    text: "Launch and scale online stores designed to provide seamless shopping experiences and higher conversions.",
    icon: icons.layers,
    color: colors.red,
    glow: "rgba(239,68,68,0.16)",
    borderGlow: "hover:border-[#ef4444]",
  },
  {
    title: "Content Marketing",
    text: "Create valuable content that educates, engages, and converts your audience while strengthening your brand authority.",
    icon: icons.code,
    color: colors.teal,
    glow: "rgba(45,212,191,0.16)",
    borderGlow: "hover:border-[#2dd4bf]",
  },
  {
    title: "Mobile App Development",
    text: "Powerful mobile applications that deliver seamless user experiences across iOS and Android platforms.",
    icon: icons.code,
    color: colors.indigo,
    glow: "rgba(90,92,240,0.18)",
    borderGlow: "hover:border-[#5a5cf0]",
  },
];

// Reusable scroll reveal animation
function Reveal({
  children,
  className = "",
  delay = 0,
  y = 45,
  duration = 0.7,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// Letter-by-letter heading reveal
function LetterReveal({ text, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  const letters = Array.from(text);

  return (
    <span className={className} aria-label={text} role="text">
      <span
        aria-hidden="true"
        className="inline-flex flex-wrap justify-center"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            className="inline-block whitespace-pre"
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0, rotateX: 0 }
                : { opacity: 0, y: 45, rotateX: -75 }
            }
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              delay: shouldReduceMotion ? 0 : index * 0.035,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default function AllServices() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax effect
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;

      const hero = heroRef.current;
      const img = imgRef.current;

      if (!hero || !img) return;

      const rect = hero.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const distance =
        window.innerHeight / 2 - (rect.top + rect.height / 2);

      const max = rect.height * 0.2;
      const y = Math.max(-max, Math.min(max, distance * 0.3));

      img.style.transform = `translate3d(0, ${y}px, 0)`;
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
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#222222]">
      <link rel="stylesheet" href={FONT_URL} />

      {/* ---------- Hero ---------- */}
      <section
        ref={heroRef}
        className="relative flex min-h-[461px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#d99a55] via-[#e0831f] to-[#8a4a14] px-6 text-center"
      >
        <motion.img
          ref={imgRef}
          src={HERO_IMAGE}
          alt=""
          initial={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.12 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-[-20%] h-[140%] w-full max-w-none object-cover will-change-transform"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 py-16 text-white">
          <Reveal y={25} duration={0.8}>
            <h1 className="mb-5 text-[clamp(1.1rem,1.2vw,1.4rem)] font-normal uppercase tracking-[0.2em]">
              Services
            </h1>
          </Reveal>

          <h2 className="text-[clamp(2.4rem,3.9vw,4.6rem)] font-bold leading-[1.1]">
            <LetterReveal text="Services That Help Your" />
            <br />
            <LetterReveal text="Business Grow Online" />
          </h2>
        </div>
      </section>

      {/* ---------- Services grid ---------- */}
      <section className="bg-[#1e1e1e] px-6 py-16 transition-colors duration-300 light:bg-[#fafafa] lg:px-[8%] lg:py-[100px]">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-[50px]">
          {services.map((s, index) => (
            <Reveal
              key={s.title}
              delay={(index % 3) * 0.12}
              y={55}
              duration={0.75}
              className="h-full"
            >
              <motion.article
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -12,
                        scale: 1.025,
                        transition: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
                className={`group relative isolate h-full overflow-hidden rounded-[30px] border border-[#333333] bg-[#232323] px-8 pb-8 pt-6 text-center transition-all duration-500 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)] ${s.borderGlow} light:border-[#eeeeee] light:bg-white light:hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]`}
                style={{
                  "--card-glow": s.glow,
                }}
              >
                {/* Animated background glow */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, var(--card-glow), transparent 65%)",
                  }}
                />

                {/* Subtle animated top highlight */}
                <motion.div
                  className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 rounded-full bg-current opacity-0 transition-all duration-500 group-hover:w-2/3 group-hover:opacity-100"
                  style={{ color: "var(--card-glow)" }}
                />

                {/* Icon */}
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, scale: 1, rotate: 0 }
                      : { opacity: 0, scale: 0.65, rotate: -15 }
                  }
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.6,
                    delay: shouldReduceMotion ? 0 : 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.13,
                          rotate: 8,
                          transition: { duration: 0.3 },
                        }
                  }
                  className={`relative z-10 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full transition-shadow duration-500 group-hover:shadow-[0_0_30px_var(--card-glow)] ${s.color}`}
                >
                  {s.icon}
                </motion.div>

                {/* Title */}
                <h3 className="relative z-10 mb-3 text-[clamp(1.4rem,1.5vw,1.75rem)] font-bold leading-tight text-[#fdfaf9] transition-colors duration-300 group-hover:text-white light:text-[#222222] light:group-hover:text-[#222222]">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-[clamp(1.05rem,1.1vw,1.3rem)] leading-[1.7] text-[#bdbdbd] transition-colors duration-300 group-hover:text-[#eeeeee] light:text-[#555555] light:group-hover:text-[#333333]">
                  {s.text}
                </p>

                {/* Bottom decorative line */}
                <div className="mx-auto mt-6 h-[2px] w-0 rounded-full bg-current opacity-0 transition-all duration-500 group-hover:w-12 group-hover:opacity-100" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WhatsApp floating button ---------- */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get a free project consultation on WhatsApp"
        initial={
          shouldReduceMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.7 }
        }
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          delay: shouldReduceMotion ? 0 : 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={
          shouldReduceMotion ? {} : { scale: 1.07 }
        }
        whileTap={
          shouldReduceMotion ? {} : { scale: 0.95 }
        }
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] p-3.5 font-[Arial,Helvetica,sans-serif] text-lg text-white no-underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-white md:py-3 md:pl-5 md:pr-7"
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
      </motion.a>
    </div>
  );
}
