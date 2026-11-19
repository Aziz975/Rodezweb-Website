/*
  Styling kept from the previous pages: Manrope font, #1c1c1c background, orange #f05a2d.
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
    image: "",
    href: "/blog/website-redesign-services-in-noida",
  },
  {
    category: "Business",
    title: "Best Shopify Developers in Noida for Professional Ecommerce Website Development",
    date: "Oct 24, 2026",
    image: "",
    href: "/blog/best-shopify-developers-in-noida",
  },
  {
    category: "Business",
    title:
      "Best Website Design and Development Company in Noida for Business Growth | Rodez Web Technology",
    date: "Oct 22, 2026",
    image: "",
    href: "/blog/best-website-design-company-in-noida",
  },
  {
    category: "Digital Marketing",
    title:
      "Best Web Development Services in Noida to Grow Your Online Business | Rodez Web Technology",
    date: "Oct 19, 2026",
    image: "",
    href: "/blog/best-web-development-services-in-noida",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full overflow-x-clip bg-[#1c1c1c] py-16 font-['Manrope',sans-serif] text-white sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-6">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-white/90 sm:text-[13px]">
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
              className="group flex flex-col overflow-hidden rounded-lg bg-[#171717] transition hover:-translate-y-1 hover:bg-[#1f1f1f] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {/* Image */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#2a2a2a]">
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
                <h3 className="mt-3 text-[14px] font-bold leading-snug text-white sm:text-[15px]">
                  {post.title}
                </h3>
                <p className="mt-auto pt-3 text-[11px] font-bold text-white/60">{post.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
