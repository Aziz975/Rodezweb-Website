
import { motion, useReducedMotion } from "motion/react";

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

const WHATSAPP_URL =
  "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20project";

const ease = [0.22, 1, 0.36, 1];

// Responsive CSS - original styling retained
const responsiveCss = `
@media (min-width: 1024px) and (max-width: 1279px) {
  .au-step { padding: 1.5rem !important; border-radius: 22px !important; }
  .au-step-year { font-size: 2rem !important; margin-bottom: 1rem !important; }
  .au-step-title { font-size: 1.35rem !important; margin-bottom: 0.9rem !important; }
  .au-step-text { font-size: 0.92rem !important; line-height: 1.65 !important; }
  .au-timeline-gap { gap: 20px !important; }
  .au-cta-btn { margin-right: 0 !important; }
}

@media (max-width: 1023px) {
  .au-hero-img { display: block !important; }
  .au-step { padding: 2rem !important; }
  .au-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; column-gap: 32px !important; }
  .au-span-all { grid-column: 1 / -1 !important; }
  .au-cta-box { display: block !important; }
}

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

@media (max-width: 480px) {
  .au-section { padding-left: 1rem !important; padding-right: 1rem !important; }
  .au-hero { padding-left: 1rem !important; padding-right: 1rem !important; }
  .au-reason-title { font-size: 1.35rem !important; }
  .au-step-year { font-size: 2rem !important; }
  .au-step-title { font-size: 1.35rem !important; }
  .au-cta-box { padding: 1.25rem !important; }
  .au-cta-btn { display: block !important; width: 100%; white-space: normal !important; text-align: center; font-size: 1.05rem !important; }
}

@media (max-width: 360px) {
  .au-body, .au-step-text { font-size: 0.95rem !important; }
  .au-cta-btn { padding: 0.8rem 1rem !important; }
}
`;

// Reusable scroll reveal
function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  reducedMotion = false,
}) {
  const directions = {
    up: { x: 0, y: 45 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...(reducedMotion ? { x: 0, y: 0 } : directions[direction]),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.15,
        margin: "0px 0px -60px 0px",
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.8,
        ease,
        delay: reducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// Letter-by-letter heading animation
function LetterReveal({
  text,
  className = "",
  delay = 0,
  reducedMotion = false,
  as = "h2",
}) {
  const Tag = motion[as] || motion.h2;

  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
        margin: "0px 0px -50px 0px",
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reducedMotion ? 0 : 0.035,
            delayChildren: reducedMotion ? 0 : delay,
          },
        },
      }}
    >
      <span aria-hidden="true">
        {text.split(" ").map((word, wordIndex, words) => (
          <span
            key={`${word}-${wordIndex}`}
            className="inline-block whitespace-nowrap"
          >
            {Array.from(word).map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                className="inline-block"
                variants={{
                  hidden: {
                    opacity: reducedMotion ? 1 : 0,
                    y: reducedMotion ? 0 : 28,
                    rotateX: reducedMotion ? 0 : -45,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                      duration: reducedMotion ? 0 : 0.55,
                      ease,
                    },
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex !== words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </Tag>
  );
}

export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion();

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 0.8,
        ease,
      };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1e1e1e] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] transition-colors duration-300 light:bg-[#fafafa] light:text-[#1c1c1c]">

      <style>{responsiveCss}</style>

      {/* HERO */}

      <section className="au-hero relative overflow-hidden px-5 pb-16 pt-24 text-center">

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#ef5d39]/10 blur-[100px]"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.7, 0.3],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1500px]">

          <LetterReveal
            as="h2"
            text="We A Digital Marketing Agency For Visually Compelling Stories."
            reducedMotion={shouldReduceMotion}
            className="text-[clamp(2rem,5.6vw,5.2rem)] font-bold leading-[1.18]"
          />

          <Reveal
            delay={0.35}
            reducedMotion={shouldReduceMotion}
          >
            <p className="mt-6 text-lg font-light text-[#d9d9d9] light:text-[#555555]">
              Creative thinking. Strategic execution. Digital growth.
            </p>
          </Reveal>

        </div>

      </section>

      {/* HERO IMAGE */}

      <section className="au-hero-img hidden overflow-hidden md:block">

        <motion.img
          src="https://rodezweb.com/wp-content/uploads/2026/06/rodezweb-about-us-.png"
          alt="Rodezweb team and work"
          width="1562"
          height="713"
          fetchPriority="high"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, scale: 1.12, y: 35 }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            ...transition,
            duration: 1.2,
            delay: 0.4,
          }}
          className="block h-auto w-full"
        />

      </section>

      {/* WELCOME + REASONS */}

      <section className="au-section px-6 pb-16 pt-10 lg:px-[7%]">

        <div className="au-grid mx-auto grid max-w-[1620px] gap-x-[50px] gap-y-10 border-t border-[#4a4a4a] pt-6 light:border-[#dedede] lg:grid-cols-3 lg:gap-y-[80px]">

          <Reveal
            className="au-span-all"
            reducedMotion={shouldReduceMotion}
          >
            <p className="au-label text-[1.4rem] font-light">
              Welcome to rodezweb
            </p>
          </Reveal>

          <div className="au-span-all lg:col-span-2">

            <LetterReveal
              as="h1"
              text="We Don’t Just Build Websites. We Build Growth Engines."
              reducedMotion={shouldReduceMotion}
              className="mb-10 text-[clamp(2.2rem,4.8vw,4.6rem)] font-bold leading-[1.1]"
            />

            <Reveal
              delay={0.12}
              reducedMotion={shouldReduceMotion}
            >
              <p className="au-body max-w-[1080px] text-[1.15rem] font-light leading-[1.75] text-[#d9d9d9] light:text-[#555555]">
                At Rodezweb, we’re passionate about the digital landscape and
                dedicated to helping businesses thrive in the online realm.
                With a team of seasoned experts and a commitment to innovation,
                we offer a comprehensive suite of digital marketing services
                tailored to elevate your brand and maximize your online
                presence.
              </p>
            </Reveal>

          </div>

          <Reveal
            direction="left"
            reducedMotion={shouldReduceMotion}
          >
            <h2 className="au-span-all self-start text-[clamp(1.8rem,2.6vw,2.6rem)] font-semibold">
              Why You Choose Us?
            </h2>
          </Reveal>

          {/* REASON CARDS */}

          {reasons.map((r, i) => (

            <motion.article
              key={r.title}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 65,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
                margin: "0px 0px -50px 0px",
              }}
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : i * 0.13,
              }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { y: -7 }
              }
              className="border-t border-[#4a4a4a] pt-8 light:border-[#dedede]"
            >

              <p className="au-reason-no mb-6 text-[1.15rem] font-light leading-normal">
                Reason <br /> (No. {String(i + 1).padStart(2, "0")})
              </p>

              <h3 className="au-reason-title mb-5 text-[1.9rem] font-semibold">
                {r.title}
              </h3>

              <p className="au-body text-[1.15rem] font-light leading-[1.75] text-[#d9d9d9] light:text-[#555555]">
                {r.text}
              </p>

            </motion.article>

          ))}

        </div>

      </section>

      {/* JOURNEY TIMELINE */}

      <section className="au-section px-6 pb-24 pt-10 lg:px-[7%]">

        <div className="mx-auto max-w-[1620px] border-t border-[#4a4a4a] pt-6 light:border-[#dedede]">

          <Reveal reducedMotion={shouldReduceMotion}>
            <p className="au-label text-[1.4rem] font-light">
              From One Vision to a Growing Digital Agency
            </p>
          </Reveal>

          <LetterReveal
            as="h2"
            text="From One Vision to a Growing Digital Agency"
            reducedMotion={shouldReduceMotion}
            delay={0.1}
            className="mt-10 text-[clamp(2.2rem,4.6vw,4.4rem)] font-bold leading-[1.15]"
          />

        </div>

        <div className="au-timeline-wrap relative mx-auto mt-10 max-w-[1620px] overflow-hidden bg-[radial-gradient(ellipse_at_75%_45%,rgba(130,85,40,0.55),transparent_62%)] py-16 lg:px-[4%] lg:py-24">

          <div className="au-timeline-gap relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[50px]">

            {steps.map((s, i) => (

              <motion.article
                key={s.year}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 90,
                  scale: shouldReduceMotion ? 1 : 0.93,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                  margin: "0px 0px -60px 0px",
                }}
                transition={{
                  ...transition,
                  duration: 0.9,
                  delay: shouldReduceMotion ? 0 : i * 0.17,
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -10,
                        scale: 1.015,
                      }
                }
                className={`au-step relative overflow-hidden rounded-[28px] p-10 text-[#151515] shadow-lg shadow-black/10 backdrop-blur-sm ${s.card}`}
              >

                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-black/10"
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { rotate: 360 }
                  }
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <h3 className="au-step-year relative mb-6 text-[2.6rem] font-bold leading-none">
                  {s.year}
                </h3>

                <h4 className="au-step-title relative mb-5 text-[1.9rem] font-semibold leading-tight">
                  {s.title}
                </h4>

                <p className="au-step-text relative text-[1.05rem] font-light leading-[1.8] text-[#4a4a4a]">
                  {s.text}
                </p>

              </motion.article>

            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="au-section px-6 pb-28 pt-10 lg:px-[7%]">

        <div className="mx-auto max-w-[1620px] border-t border-[#4a4a4a] pt-6 light:border-[#dedede]">

          <Reveal reducedMotion={shouldReduceMotion}>
            <p className="au-label text-[1.4rem] font-light">
              Send A Request
            </p>
          </Reveal>

          <div className="au-cta-box relative mt-6 overflow-hidden rounded-[28px] bg-[#272727] p-8 lg:-mx-4 lg:flex lg:min-h-[380px] lg:items-center lg:justify-between lg:px-[35px]">

            {/* ANIMATED BACKGROUND */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >

              <motion.div
                className="au-glow1 absolute left-[56%] top-[-60px] h-[420px] w-[420px] rounded-full bg-[#e8552b]/60 blur-[80px]"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        x: [0, 40, -20, 0],
                        y: [0, 25, -20, 0],
                      }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="au-glow2 absolute bottom-[-80px] left-[36%] h-[300px] w-[300px] rounded-full bg-teal-400/50 blur-[70px]"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        x: [0, -35, 25, 0],
                        scale: [1, 1.2, 0.9, 1],
                      }
                }
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="au-ring1 absolute left-1/2 top-[-45px] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-white/10"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { rotate: 360 }
                }
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="au-ring2 absolute left-1/2 top-[25px] h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-[#ef7a50]/30"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { rotate: -360 }
                }
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="au-sphere absolute left-1/2 top-[131px] h-[348px] w-[348px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#f2784f] to-[#2fe0cc]"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -25, 0],
                        scale: [1, 1.06, 1],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </div>

            {/* CTA CONTENT */}

            <motion.div
              className="relative z-10 max-w-[1060px]"
              initial={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={transition}
            >

              <LetterReveal
                as="h2"
                text="Ready to be part of our next chapter?"
                reducedMotion={shouldReduceMotion}
                className="mb-6 text-[clamp(2.2rem,4.6vw,4.4rem)] font-bold leading-[1.12]"
              />

              <p className="au-body text-[1.15rem] font-light leading-[1.75]">
                Over the years, Rodez Web Technologies has grown through
                innovation, dedication, and the trust of businesses that chose
                us as their digital partner. While we’ve come a long way since
                our founding in 2016, we believe the most exciting
                opportunities still lie ahead.
              </p>

            </motion.div>

            <motion.a
              href="/contact"
              initial={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : 45,
                scale: shouldReduceMotion ? 1 : 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                ...transition,
                delay: 0.15,
              }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.07,
                      y: -5,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? {}
                  : { scale: 0.96 }
              }
              className="au-cta-btn relative z-10 mt-8 inline-block whitespace-nowrap rounded-full bg-[#ef5d39] px-9 py-4 text-[1.4rem] text-white no-underline transition-colors hover:bg-[#d94e2c] lg:mr-[127px] lg:mt-0"
            >
              Start Your Project →
            </motion.a>

          </div>

        </div>

      </section>

      {/* WHATSAPP FLOATING BUTTON */}

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Free Consultation for the Project on WhatsApp"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.5,
                y: 30,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          ...transition,
          delay: 0.8,
        }}
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                scale: 1.08,
                y: -5,
              }
        }
        whileTap={
          shouldReduceMotion
            ? {}
            : { scale: 0.93 }
        }
        className="au-wa fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] p-3.5 font-[Arial,Helvetica,sans-serif] text-lg text-white shadow-xl shadow-black/20 no-underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-white md:py-3 md:pl-5 md:pr-7"
      >

        <motion.svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotate: [0, -8, 8, -5, 0],
                }
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 4,
          }}
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

        </motion.svg>

        <span className="hidden md:inline">
          Get Free Consultation for the Project !
        </span>

      </motion.a>

    </div>
  );
}
