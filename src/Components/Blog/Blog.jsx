import { useState } from "react";

// Put your blog images in the "public/blog" folder and write the path here, e.g. "/blog/post-1.jpg".
// If "image" is empty, a grey placeholder is shown.
const AVATAR = ""; // e.g. "/blog/admin.jpg"

const posts = [
  {
    slug: "best-website-development-company-in-noida-for-business-growth",
    title:
      "Best Website Development Company in Noida for Business Growth | Rodez Web Technology",
    image:"/images/image1.png",
    categories: ["Digital Marketing"],
    excerpt:
      "In today’s digital world, having a professional website is essential for businesses that want to build credibility, reach more customers, and increase online enquiries...",
    date: "Oct 28, 2026",
    read: "7 min read",
  },
  {
    slug: "website-redesign-services-in-noida",
    title:
      "Website Redesign Services in Noida to Improve User Experience and Conversions | Rodez Web Technology",
    image: "/images/image2.png",
    categories: ["Business", "Digital Marketing", "Uncategorized"],
    excerpt:
      "In today’s competitive digital landscape, your website plays an important role in attracting potential customers and building trust in your business. However, an outdated...",
    date: "Oct 27, 2026",
    read: "9 min read",
  },
  {
    slug: "wordpress-website-development-company-in-noida",
    title:
      "WordPress Website Development Company in Noida for Custom Business Websites | Rodez Web Technology",
    image: "/images/image3.png",
    categories: ["Business", "Digital Marketing"],
    excerpt:
      "A professional website helps businesses build credibility, attract potential customers, and grow their online presence. Choosing the right WordPress website development company in Noida...",
    date: "Oct 26, 2026",
    read: "5 min read",
  },
  {
    slug: "best-shopify-developers-in-noida",
    title:
      "Best Shopify Developers in Noida for Professional Ecommerce Website Development",
    image: "/images/image4.png",
    categories: ["Business", "Digital Marketing", "Uncategorized"],
    excerpt:
      "In today’s competitive digital marketplace, having a professional ecommerce website is essential for businesses that want to sell products online and reach more customers. [...]",
    date: "Oct 24, 2026",
    read: "7 min read",
  },
];

const recentPosts = [
  ...posts.map((p) => ({ slug: p.slug, title: p.title })),
  {
    slug: "best-wordpress-website-development-company-in-noida",
    title:
      "Best WordPress Website Development Company in Noida for Business Websites | Rodez Web Technology",
  },
];

const categories = [
  "Branding",
  "Business",
  "Design",
  "Digital Marketing",
  "Education",
  "Fashion",
  "Food",
  "Health",
  "Plugin",
  "Theme",
  "Travel",
  "Uncategorized",
  "WordPress",
];

const tags = [
  "Business Growth",
  "Content Marketing",
  "Custom Website Development",
  "Digital Marketing",
  "Digital Marketing Agency",
  "Digital Marketing Agency Noida",
  "Digital Marketing Bangalore",
  "Digital Marketing Company in Noida",
  "Digital Marketing Company Noida",
  "Digital Marketing Services",
  "E-commerce Website Development",
  "Facebook Marketing",
  "Google Ads",
  "Lead Generation",
  "Local SEO",
  "Marketing Strategy",
  "Online Business Growth",
  "Online Marketing",
  "Online Marketing Agency",
  "Pay-Per-Click (PPC)",
  "Performance Marketing",
  "PPC",
  "PPC Advertising",
  "PPC Services",
  "PPC Services Noida",
  "rodezWeb",
  "Rodez Web Technologies",
  "Rodez Web Technology",
  "Search Engine Optimization",
  "Search Engine Optimization (SEO)",
  "SEO",
  "SEO Company Noida",
  "SEO Optimized",
  "SEO Services",
  "SEO Services Bangalore",
  "SEO Services Noida",
  "Social media marketing",
  "Social media marketing Bangalore",
  "Social Media Marketing Noida",
  "Technical SEO",
  "UI UX Design",
  "web development",
  "Website Development",
  "WordPress Development",
];

const pages = [1, 2, 3, "…", 105];

// Replace 91XXXXXXXXXX with the real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_URL =
  "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20project";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1e1e1e] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9]">
      {/* ---------- Hero ---------- */}
      <section className="bg-[#262626] px-6 pb-20 pt-16 lg:px-[7.5%] lg:pb-[120px] lg:pt-[110px]">
        <div className="mx-auto max-w-[1620px]">
          <p className="mb-6 text-[clamp(1.5rem,2.2vw,2.2rem)] text-[#ef5d39]">
            Our stories
          </p>
          <h1 className="max-w-[820px] text-[clamp(2.6rem,6vw,5.6rem)] font-bold uppercase leading-[1.05]">
            We create awesome blog
          </h1>
        </div>
      </section>

      {/* ---------- Posts + Sidebar ---------- */}
      <section className="px-6 py-16 lg:px-[7.5%] lg:py-[120px]">
        <div className="mx-auto grid max-w-[1620px] gap-16 lg:grid-cols-[1075fr_460fr] lg:gap-20">
          {/* Posts */}
          <div>
            {filtered.length === 0 && (
              <p className="text-[1.3rem] text-[#d9d9d9]">No posts found.</p>
            )}

            {filtered.map((p) => (
              <article key={p.slug} className="mb-20">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="aspect-[1075/605] w-full rounded-[45px] object-cover"
                  />
                ) : (
                  <div className="aspect-[1075/605] w-full rounded-[45px] bg-[#333]" />
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  {p.categories.map((c) => (
                    <a
                      key={c}
                      href={`/category/${c.toLowerCase().replace(/\s+/g, "-")}`}
                      className="rounded-full bg-[#2a2a2a] px-4 py-2 text-[1.1rem] hover:bg-[#383838]"
                    >
                      {c}
                    </a>
                  ))}
                </div>

                <h2 className="mt-6 text-[clamp(1.8rem,2.9vw,2.9rem)] font-bold leading-[1.2]">
                  <a href={`/blog/${p.slug}`} className="hover:text-[#ef5d39]">
                    {p.title}
                  </a>
                </h2>

                <p className="mt-6 text-[1.3rem] font-light leading-[1.65]">
                  {p.excerpt}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#333] pt-7">
                  <div className="flex items-center gap-4">
                    {AVATAR ? (
                      <img
                        src={AVATAR}
                        alt="admin"
                        className="h-14 w-14 rounded-full object-cover"
                      />
                    ) : (
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#444] text-lg font-semibold">
                        A
                      </span>
                    )}
                    <div>
                      <p className="text-[1.15rem] font-semibold leading-tight">
                        admin
                      </p>
                      <p className="text-[1.1rem] text-[#9a9a9a]">
                        {p.date} <span className="mx-1.5">•</span> {p.read}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`/blog/${p.slug}`}
                    className="text-[1.15rem] text-[#ef5d39] hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <nav
              aria-label="Pagination"
              className="flex items-center justify-center gap-5 pt-4 text-[1.3rem]"
            >
              {pages.map((n, i) =>
                n === "…" ? (
                  <span key={i} className="text-[#9a9a9a]">
                    …
                  </span>
                ) : (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    aria-current={page === n ? "page" : undefined}
                    className={`flex h-11 min-w-11 items-center justify-center rounded-full px-2 ${
                      page === n ? "bg-[#444]" : "hover:bg-[#2a2a2a]"
                    }`}
                  >
                    {n}
                  </button>
                )
              )}
              <button
                onClick={() => setPage((n) => Math.min(105, Number(n) + 1))}
                className="px-2 text-[#9a9a9a] hover:text-white"
              >
                Next
              </button>
            </nav>
          </div>

          {/* Sidebar */}
          <aside className="space-y-16">
            <div>
              <h3 className="mb-8 text-[2.2rem] font-bold leading-tight">
                Search
              </h3>
              <label className="relative block max-w-[300px]">
                <span className="sr-only">Search posts</span>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#bbb]"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-14 w-full rounded-lg border border-[#444] bg-transparent pl-12 pr-4 text-[1.1rem] outline-none focus:border-[#ef5d39]"
                />
              </label>
            </div>

            <div>
              <h3 className="mb-8 text-[2.2rem] font-bold leading-tight">
                Recent Posts
              </h3>
              <ul className="list-disc space-y-4 pl-5 marker:text-[#777]">
                {recentPosts.map((r) => (
                  <li key={r.slug} className="text-[1.3rem] leading-[1.15]">
                    <a href={`/blog/${r.slug}`} className="hover:text-[#ef5d39]">
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-8 text-[2.2rem] font-bold leading-tight">
                Recent Comments
              </h3>
              <p className="text-[1.3rem]">No comments to show.</p>
            </div>

            <div>
              <h3 className="mb-8 text-[2.2rem] font-bold leading-tight">
                Categories
              </h3>
              <ul className="list-disc space-y-3.5 pl-5 marker:text-[#777]">
                {categories.map((c) => (
                  <li key={c} className="text-[1.3rem]">
                    <a
                      href={`/category/${c.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-[#ef5d39]"
                    >
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-8 text-[2.2rem] font-bold leading-tight">
                Tags
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                {tags.map((t) => (
                  <a
                    key={t}
                    href={`/tag/${t.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-full bg-[#2a2a2a] px-4 py-2 text-[1.1rem] hover:bg-[#383838]"
                  >
                    #{t}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- WhatsApp floating button (remove if you add it once in a shared layout) ---------- */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
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
      </a>
    </div>
  );
}