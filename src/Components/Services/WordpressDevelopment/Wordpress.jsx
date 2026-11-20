import { Link } from "react-router-dom";

/* Image source left empty until you provide the asset */
const HERO_IMG = "";

/* Replace with the real number (country code + number, digits only) */
const WHATSAPP_NUMBER = "XXXXXXXXXXX";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ---------- Brand icons (custom SVGs, no Lucide dependency issues) ---------- */
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

export default function Wordpress() {
  return (
    <main
      className="min-h-screen bg-[#1e1e1e] text-[#fdfaf9]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ---------- Hero banner ---------- */}
      <section className="relative h-[clamp(200px,16.8vw,330px)] min-h-[200px] w-full overflow-hidden bg-[#3a1b14]">
        {HERO_IMG && (
          <img
            src={HERO_IMG}
            alt="Digital marketing services by Rodez Web Technologies"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}

        {/* dark fade towards the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#1e1e1e]" />

        <h1
          className="absolute inset-x-0 top-[40%] -translate-y-1/2 px-4 text-center font-extrabold uppercase leading-none"
          style={{ fontSize: "clamp(2rem, 5.1vw, 6.25rem)", letterSpacing: "-0.05em" }}
        >
          Digital Marketing
        </h1>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="mx-auto grid max-w-[1700px] gap-10 px-6 pb-24 pt-12 sm:px-10 md:pt-16 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-16 lg:px-[7%] lg:pb-32 lg:pt-[8.5vw] xl:pt-[7.5rem]">
        {/* Left: headings */}
        <div>
          <h2
            className="font-extrabold uppercase leading-[0.95]"
            style={{ fontSize: "clamp(2.25rem, 4.7vw, 5.75rem)", letterSpacing: "-0.05em" }}
          >
            Digital Marketing
            <br />
            That Drives
          </h2>
          <p
            className="mt-4 font-bold uppercase text-[#a0a0a0] lg:mt-6"
            style={{ fontSize: "clamp(1.35rem, 2.9vw, 3.5rem)", letterSpacing: "-0.04em" }}
          >
            Growth, Not Just Traffic
          </p>
        </div>

        {/* Right: description + actions */}
        <div className="lg:pt-1">
          <p
            className="text-justify text-[#fdfaf9]"
            style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.25rem)", lineHeight: 1.75 }}
          >
            We help businesses attract the right audience, generate qualified leads, increase sales,
            and build sustainable growth through data-driven digital marketing strategies.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#2a2a2a] px-6 py-3.5 text-base font-medium text-[#fdfaf9] transition duration-300 hover:bg-[#f15a3a] sm:px-7 sm:text-lg lg:text-[1.2rem]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Book A Consultation
            </Link>

            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a2a2a] text-[#fdfaf9] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f15a3a] sm:h-[52px] sm:w-[52px]"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Floating WhatsApp consultation button ---------- */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get free consultation on WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-full bg-[#25d366] px-4 py-2.5 text-sm font-medium text-white shadow-lg transition duration-300 hover:scale-105 sm:bottom-5 sm:right-6 sm:gap-3 sm:px-5 sm:py-3 sm:text-lg lg:right-9"
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />
        <span className="whitespace-nowrap">Get Free Consultation for the Project !</span>
      </a>
    </main>
  );
}
