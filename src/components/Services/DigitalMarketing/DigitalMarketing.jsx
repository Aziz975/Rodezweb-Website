
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/* Image source */
const HERO_IMG = "/images/shopify-custom-design.png";

/* Replace with the real number (country code + number, digits only) */
const WHATSAPP_NUMBER = "XXXXXXXXXXX";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ---------- Animation variants ---------- */

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeLeftVariants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

/* ---------- Reusable scroll reveal ---------- */

function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    up: fadeUpVariants,
    left: fadeLeftVariants,
    right: fadeRightVariants,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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

/* ---------- Letter-by-letter heading reveal ---------- */

function LetterReveal({
  text,
  className = "",
  style = {},
  as = "h2",
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });
  const shouldReduceMotion = useReducedMotion();

  const Heading = motion[as];

  const words = text.split(" ");

  return (
    <Heading
      ref={ref}
      aria-label={text}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.035,
            delayChildren: shouldReduceMotion ? 0 : delay,
          },
        },
      }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          aria-hidden="true"
          className="inline-block whitespace-nowrap"
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${letter}-${letterIndex}`}
              className="inline-block"
              variants={{
                hidden: {
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 35,
                  rotateX: shouldReduceMotion ? 0 : -45,
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
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </Heading>
  );
}

/* ---------- Brand icons (custom SVGs) ---------- */

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

export default function DigitalMarketing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#1e1e1e] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ---------- Hero banner ---------- */}

      <section className="relative h-[clamp(200px,16.8vw,330px)] min-h-[200px] w-full overflow-hidden bg-[#3a1b14]">
        <motion.img
          src={HERO_IMG}
          alt="Digital marketing services by Rodez Web Technologies"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ scale: 1.12, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Dark fade towards the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#1e1e1e] light:to-[#fafafa]" />

        <LetterReveal
          as="h1"
          text="Digital Marketing"
          className="absolute inset-x-0 top-[40%] -translate-y-1/2 px-4 text-center font-extrabold uppercase leading-none text-white"
          style={{
            fontSize: "clamp(2rem, 5.1vw, 6.25rem)",
            letterSpacing: "-0.05em",
          }}
          delay={0.2}
        />
      </section>

      {/* ---------- Intro ---------- */}

      <section className="mx-auto grid max-w-[1700px] gap-10 bg-[#1e1e1e] px-6 pb-24 pt-12 transition-colors duration-300 sm:px-10 md:pt-16 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-16 lg:px-[7%] lg:pb-32 lg:pt-[8.5vw] xl:pt-[7.5rem] light:bg-[#fafafa]">

        {/* Left: headings */}

        <div>
          <LetterReveal
            text="Digital Marketing That Drives"
            className="font-extrabold uppercase leading-[0.95] text-[#fdfaf9] light:text-[#1c1c1c]"
            style={{
              fontSize: "clamp(2.25rem, 4.7vw, 5.75rem)",
              letterSpacing: "-0.05em",
            }}
            delay={0.1}
          />

          <Reveal delay={0.25}>
            <p
              className="mt-4 font-bold uppercase text-[#a0a0a0] light:text-[#666666] lg:mt-6"
              style={{
                fontSize: "clamp(1.35rem, 2.9vw, 3.5rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Growth, Not Just Traffic
            </p>
          </Reveal>
        </div>

        {/* Right: description + actions */}

        <Reveal direction="right" delay={0.2} className="lg:pt-1">
          <p
            className="text-justify text-[#fdfaf9] light:text-[#555555]"
            style={{
              fontSize: "clamp(0.95rem, 1.05vw, 1.25rem)",
              lineHeight: 1.75,
            }}
          >
            We help businesses attract the right audience, generate qualified
            leads, increase sales, and build sustainable growth through
            data-driven digital marketing strategies.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Consultation button */}

            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -3 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                to="/contact"
                className="inline-block rounded-full bg-[#2a2a2a] px-6 py-3.5 text-base font-medium text-[#fdfaf9] transition duration-300 hover:bg-[#f15a3a] sm:px-7 sm:text-lg lg:text-[1.2rem] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#f15a3a] light:hover:text-white"
                style={{ letterSpacing: "-0.03em" }}
              >
                Book A Consultation
              </Link>
            </motion.div>

            {/* Social icons */}

            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {socials.map(({ name, href, Icon }, index) => (
                <motion.a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                          scale: 1.12,
                          rotate: 5,
                        }
                  }
                  whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a2a2a] text-[#fdfaf9] transition-colors duration-300 hover:bg-[#f15a3a] sm:h-[52px] sm:w-[52px] light:bg-[#eeeeee] light:text-[#1c1c1c] light:hover:bg-[#f15a3a] light:hover:text-white"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Floating WhatsApp consultation button ---------- */}

      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get free consultation on WhatsApp"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.8,
        }}
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                scale: 1.06,
                y: -4,
              }
        }
        whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-full bg-[#25d366] px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)] sm:bottom-5 sm:right-6 sm:gap-3 sm:px-5 sm:py-3 sm:text-lg lg:right-9"
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />
        <span className="whitespace-nowrap">
          Get Free Consultation for the Project !
        </span>
      </motion.a>

      {/* ---------- Technology banner ---------- */}

      <section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#1d1d1d] px-4 py-12 transition-colors duration-300 sm:min-h-[850px] sm:px-8 lg:min-h-[400px] light:bg-[#fafafa]">

        {/* Technology background */}

        <motion.img
          src="/images/digital-future-background-enhanced.png"
          alt="Abstract orange technology background with digital engineering graphics"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Background overlay */}

        <div className="absolute inset-0 bg-[#1d1d1d]/20" />

        {/* Optional dark vignette */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />

        {/* Background glow */}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003d33]/10 blur-[130px]"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.8, 0.4],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Phones / technology content */}

        <Reveal
          direction="up"
          className="relative mx-auto flex w-full max-w-[1200px] items-center justify-center"
        >
          {/* Keep your existing three phone mockups here */}
        </Reveal>
      </section>
    </main>
  );
}
