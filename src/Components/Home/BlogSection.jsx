/*
  Styling kept from the previous pages: Manrope font, #1c1c1c background, orange #f05a2d.

  Theme: dark by default. When the Navbar toggle adds <html class="light">,
  the variables under `html.light .bl-root` take over (bright mode).

  Font (if not already added, index.html <head>):
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  All image src values are intentionally empty — fill them in later.
*/

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
    title: "Best Shopify Developers in Noida for Professional Ecommerce Website Development",
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

        @media (prefers-reduced-motion: reduce) {
          .bl-root { transition: none; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-6">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-[color:var(--bl-text-soft)] sm:text-[13px]">
          Blogs
        </p>
        <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.15] tracking-tight">
          Latest Articles &amp; Insights
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group flex flex-col overflow-hidden rounded-lg border border-[color:var(--bl-card-border)] bg-[color:var(--bl-card)] transition hover:-translate-y-1 hover:bg-[color:var(--bl-card-hover)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {/* Image */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-[color:var(--bl-img-bg)]">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-3.5 pb-4 pt-3.5">
                <span className="w-fit rounded-[3px] bg-black px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-white">
                  {post.category}
                </span>
                <h3 className="mt-3 text-[14px] font-bold leading-snug text-[color:var(--bl-text)] sm:text-[15px]">
                  {post.title}
                </h3>
                <p className="mt-auto pt-3 text-[11px] font-bold text-[color:var(--bl-text-muted)]">
                  {post.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}