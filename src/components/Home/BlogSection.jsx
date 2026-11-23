
import { motion, useReducedMotion } from "framer-motion";

/* Edit / add posts here */
const posts = [
  {
    category: "Business",
    title:
      "Website Redesign Services in Noida to Improve User Experience and Conversions | Rodez Web Technology",
    date: "Oct 27, 2026",
    image: "images/image2.png",
    href: "/blog/website-redesign-services-in-noida",
  },
  {
    category: "Business",
    title:
      "Best Shopify Developers in Noida for Professional Ecommerce Website Development",
    date: "Oct 24, 2026",
    image: "images/image4.png",
    href: "/blog/best-shopify-developers-in-noida",
  },
  {
    category: "Business",
    title:
      "Best Website Design and Development Company in Noida for Business Growth | Rodez Web Technology",
    date: "Oct 22, 2026",
    image: "images/RODEZ-Noida-Web-Solutions-Banner-1024x576.png",
    href: "/blog/best-website-design-company-in-noida",
  },
  {
    category: "Digital Marketing",
    title:
      "Best Web Development Services in Noida to Grow Your Online Business | Rodez Web Technology",
    date: "Oct 19, 2026",
    image: "images/website.png",
    href: "/blog/best-web-development-services-in-noida",
  },
];

export default function BlogSection() {
  const shouldReduceMotion = useReducedMotion();

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 55,
      scale: shouldReduceMotion ? 1 : 0.96,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="bl-root w-full overflow-x-clip bg-[color:var(--bl-bg)] py-16 font-['Manrope',sans-serif] text-[color:var(--bl-text)] sm:py-20 lg:py-28">
      <style>{`
        /* ---------- Dark mode (default) ---------- */
        .bl-root {
          --bl-bg: #1c1c1c;
          --bl-text: #ffffff;
          --bl-text-soft: rgba(255, 255, 255, 0.9);
          --bl-text-muted: rgba(255, 255, 255, 0.6);
          --bl-card: #171717;
          --bl-card-hover: #1f1f1f;
          --bl-card-border: transparent;
          --bl-img-bg: #2a2a2a;
          transition: background-color .3s ease, color .3s ease;
        }

        /* ---------- Bright mode ---------- */
        html.light .bl-root {
          --bl-bg: #ffffff;
          --bl-text: #1c1c1c;
          --bl-text-soft: rgba(28, 28, 28, 0.85);
          --bl-text-muted: rgba(28, 28, 28, 0.55);
          --bl-card: #f1f1f1;
          --bl-card-hover: #e8e8e8;
          --bl-card-border: rgba(0, 0, 0, 0.06);
          --bl-img-bg: #dcdcdc;
        }

        /* Orange accent underline */
        .bl-accent-line {
          display: block;
          width: 65px;
          height: 4px;
          margin-top: 18px;
          border-radius: 10px;
          background: #f05a2d;
          transform-origin: left;
        }

        /* Card hover polish */
        .bl-card {
          transition:
            transform .4s cubic-bezier(.22, 1, .36, 1),
            background-color .3s ease,
            box-shadow .4s ease;
        }

        .bl-card:hover {
          box-shadow: 0 18px 40px rgba(0, 0, 0, .16);
        }

        .bl-card-image {
          transition: transform .7s cubic-bezier(.22, 1, .36, 1);
        }

        .bl-card:hover .bl-card-image {
          transform: scale(1.08);
        }

        .bl-card-arrow {
          display: inline-block;
          transition: transform .3s ease;
        }

        .bl-card:hover .bl-card-arrow {
          transform: translateX(5px);
        }

        @media (prefers-reduced-motion: reduce) {
          .bl-root,
          .bl-card,
          .bl-card-image,
          .bl-card-arrow {
            transition: none !important;
          }

          .bl-card:hover {
            transform: none !important;
          }

          .bl-card:hover .bl-card-image {
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-6">

        {/* Section heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--bl-text-soft)] sm:text-[13px]">
            Blogs
          </p>

          <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.15] tracking-tight">
            Latest Articles <span className="text-[#f05a2d]">&amp; Insights</span>
          </h2>

          <motion.span
            className="bl-accent-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Blog cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">

          {posts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.href}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -9,
                      transition: { duration: 0.3 },
                    }
              }
              className="bl-card group flex flex-col overflow-hidden rounded-lg border border-[color:var(--bl-card-border)] bg-[color:var(--bl-card)] motion-reduce:transform-none"
            >
              {/* Image */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-[color:var(--bl-img-bg)]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="bl-card-image h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-3.5 pb-4 pt-3.5">

                <span className="w-fit rounded-[3px] bg-[#f05a2d] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
                  {post.category}
                </span>

                <h3 className="mt-3 text-[14px] font-bold leading-snug text-[color:var(--bl-text)] sm:text-[15px]">
                  {post.title}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-5">
                  <p className="text-[11px] font-bold text-[color:var(--bl-text-muted)]">
                    {post.date}
                  </p>

                  <span
                    aria-hidden="true"
                    className="bl-card-arrow text-lg font-semibold text-[#f05a2d]"
                  >
                    →
                  </span>
                </div>

              </div>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}
