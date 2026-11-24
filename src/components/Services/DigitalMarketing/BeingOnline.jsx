
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";

/* Image sources */
const HERO_IMG = "";
const TURTLE_IMG = "/images/Fast-Marketing-Tortoise.png";
const HAND_IMG = "/images/Rodez-Growth-Hand.png";

const goals = [
  "More qualified leads",
  "More sales opportunities",
  "Better customer acquisition",
  "Stronger brand visibility",
  "Sustainable business growth",
];

/* WhatsApp number */
const WHATSAPP_NUMBER = "XXXXXXXXXXX";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ---------- Animation variants ---------- */

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------- Reusable scroll reveal ---------- */

function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.18,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount,
  });
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }
    : revealVariants;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: shouldReduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Letter-by-letter heading reveal ---------- */

function LetterReveal({
  lines,
  className = "",
  as: Component = motion.h2,
  amount = 0.35,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount,
  });
  const shouldReduceMotion = useReducedMotion();

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.035,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
      rotateX: shouldReduceMotion ? 0 : -70,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Component
      ref={ref}
      className={className}
      aria-label={lines.join(" ")}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <span aria-hidden="true">
        {lines.map((line, lineIndex) => (
          <span
            key={lineIndex}
            className="block"
          >
            {line.split(" ").map((word, wordIndex) => (
              <span
                key={`${lineIndex}-${wordIndex}`}
                className="inline-block whitespace-nowrap"
              >
                {Array.from(word).map((letter, letterIndex) => (
                  <motion.span
                    key={`${lineIndex}-${wordIndex}-${letterIndex}`}
                    className="inline-block"
                    variants={letterVariants}
                    style={{ transformOrigin: "bottom" }}
                  >
                    {letter}
                  </motion.span>
                ))}

                {wordIndex !== line.split(" ").length - 1 && (
                  <span className="inline-block">{"\u00a0"}</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </span>
    </Component>
  );
}

/* ---------- Brand icons ---------- */

const GoogleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.64 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.7 12 2.7 6.92 2.7 2.8 6.82 2.8 11.9S6.92 21.1 12 21.1c5.28 0 8.78-3.71 8.78-8.94 0-.6-.07-1.06-.15-1.06z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95 0-5.52-4.48-10-10-10z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67V9.75h2.67v8.59zM7 8.57a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.77h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.25H10V9.75h2.56v1.17h.04c.36-.68 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.09v4.72z" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21l1.65-4.85A8.5 8.5 0 1 1 8 19.4L3 21z"
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M9.2 7.8c-.2-.45-.4-.46-.6-.47h-.5c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15 0 1.26.92 2.49 1.05 2.66.13.17 1.8 2.86 4.43 3.9 2.19.86 2.63.69 3.1.65.48-.04 1.53-.63 1.75-1.23.21-.6.21-1.12.15-1.23-.07-.1-.24-.17-.5-.3-.26-.13-1.53-.76-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.67.84-.82 1.01-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.29-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.58-1.4-.8-1.92z"
    />
  </svg>
);

const socials = [
  { name: "Google", href: "#", Icon: GoogleIcon },
  { name: "Instagram", href: "#", Icon: InstagramIcon },
  { name: "Facebook", href: "#", Icon: FacebookIcon },
  { name: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

/* ---------- Main component ---------- */

export default function BeingOnline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#1e1e1e] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ---------- Being Online Isn't Enough ---------- */}

      <section className="px-6 pb-16 pt-4 sm:px-10 md:pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <LetterReveal
            lines={["Being Online Isn't Enough Anymore"]}
            className="font-bold text-[#fdfaf9] light:text-[#1c1c1c]"
            amount={0.3}
          />

          <Reveal delay={0.15}>
            <div
              className="mx-auto mt-5 max-w-4xl space-y-1 font-medium text-[#fdfaf9] light:text-[#555555]"
              style={{
                fontSize: "clamp(0.8rem, 0.95vw, 1.05rem)",
                lineHeight: 1.7,
              }}
            >
              <p>Your website is often the first impression people have of your business.</p>
              <p>
                A slow, outdated, or confusing website can drive potential customers away before they
                even contact you.
              </p>
              <p>
                Today's customers expect fast loading speeds, seamless experiences, and instant
                access to information. Businesses that deliver those experiences earn more trust, more
                leads, and more opportunities to grow.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Turtle + hand images */}

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-center gap-10 sm:flex-row sm:items-center sm:gap-12 md:mt-20 lg:gap-28">
          <Reveal className="w-[min(78%,340px)] sm:w-[40%] sm:max-w-[340px]" delay={0.1}>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -10, scale: 1.045, rotate: -1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            >
              {TURTLE_IMG ? (
                <img
                  src={TURTLE_IMG}
                  alt="Turtle riding a skateboard representing a slow website"
                  className="h-auto w-full object-contain"
                />
              ) : (
                <div className="aspect-[5/3] w-full rounded-lg border border-dashed border-white/10 light:border-[#e5e5e5]" />
              )}
            </motion.div>
          </Reveal>

          <Reveal className="w-[min(40%,150px)] sm:w-[52%] sm:max-w-[160px]" delay={0.25}>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -10, scale: 1.06, rotate: 2 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            >
              {HAND_IMG ? (
                <img
                  src={HAND_IMG}
                  alt="Hand making an OK gesture representing fast, seamless experiences"
                  className="h-auto w-full object-contain"
                />
              ) : (
                <div className="aspect-square w-full rounded-lg border border-dashed border-white/10 light:border-[#e5e5e5]" />
              )}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ---------- We Create Growth Opportunities ---------- */}

      <section className="px-6 pb-32 pt-2 sm:px-10 md:pb-40">
        <div className="mx-auto max-w-5xl text-center">
          <LetterReveal
            lines={[
              "We Don't Just Run Campaigns.",
              "We Create Growth Opportunities.",
            ]}
            className="font-bold text-[#fdfaf9] light:text-[#1c1c1c]"
            amount={0.25}
          />

          <Reveal delay={0.12}>
            <div
              className="mt-4 space-y-0.5 font-medium text-[#d0d0d0] light:text-[#555555]"
              style={{
                fontSize: "clamp(0.8rem, 0.95vw, 1.05rem)",
                lineHeight: 1.7,
              }}
            >
              <p>Clicks, impressions, and followers are important.</p>
              <p>But they're not the goal.</p>
              <p>The real goal is:</p>
            </div>
          </Reveal>

          {/* Animated goal items */}

          <ul className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
            {goals.map((goal, index) => (
              <Reveal
                key={goal}
                delay={index * 0.08}
                amount={0.5}
              >
                <motion.li
                  whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.045 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  className="flex cursor-default items-center gap-1.5 rounded-lg px-2 py-1 font-semibold text-[#fdfaf9] transition-colors duration-300 hover:bg-white/5 light:text-[#1c1c1c] light:hover:bg-black/5"
                  style={{ fontSize: "clamp(0.75rem, 0.9vw, 1rem)" }}
                >
                  <Check
                    className="h-3.5 w-3.5 shrink-0 text-[#f15a3a]"
                    strokeWidth={3}
                  />
                  {goal}
                </motion.li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <p
              className="mt-5 text-[#d0d0d0] light:text-[#555555]"
              style={{
                fontSize: "clamp(0.75rem, 0.9vw, 1rem)",
                lineHeight: 1.7,
              }}
            >
              Every strategy we create is designed to connect marketing efforts with measurable
              business outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Floating WhatsApp consultation button ---------- */}

      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get free consultation on WhatsApp"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.7,
          delay: shouldReduceMotion ? 0 : 0.8,
        }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.07, y: -4 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-full bg-[#25d366] px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)] sm:bottom-5 sm:right-6 sm:gap-3 sm:px-5 sm:py-3 sm:text-lg lg:right-9"
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />
        <span className="whitespace-nowrap">
          Get Free Consultation for the Project !
        </span>
      </motion.a>
    </main>
  );
}
