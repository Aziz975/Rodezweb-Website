import { motion, useReducedMotion } from "framer-motion";

const WHATSAPP_NUMBER = "918149845323";
const MESSAGE = "Hi, I want a free consultation for my project";

export default function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Get Free Consultation for the Project on WhatsApp"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="theme-fixed fixed bottom-4 right-4 z-[9999] flex items-center gap-3 rounded-full bg-[#25c35a] px-4 py-3 font-['Manrope',sans-serif] text-[15px] font-semibold text-white shadow-lg transition hover:brightness-110 sm:bottom-5 sm:right-5 sm:px-6 sm:text-[17px]"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22l5.9-2z" />
        <path
          d="M9 9.5c.5 2 2.5 4 5 5l1.5-1.5-2-1-1 .8c-.8-.4-1.5-1.1-1.9-1.9l.8-1-1-2L9 9.5z"
          fill="currentColor"
          stroke="none"
        />
      </svg>

      <span className="hidden sm:inline">
        Get Free Consultation for the Project
      </span>
    </motion.a>
  );
}