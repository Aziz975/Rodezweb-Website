import { useState } from "react";

// Admin avatar (same Gravatar the live site uses). You can also save it in /public and use a local path.
const AVATAR =
  "https://secure.gravatar.com/avatar/75c38e32cdecce71f0633de6f67b4272b4a1d844a7781d382931765efffd06c5?s=112&d=mm&r=g";

const posts = [
  {
    slug: "best-website-development-company-in-noida-for-business-growth-rodez-web-technology",
    title:
      "Best Website Development Company in Noida for Business Growth | Rodez Web Technology",
    image: "/images/image1.png",
    categories: ["Digital Marketing"],
    excerpt:
      "In today’s digital world, having a professional website is essential for businesses that want to build credibility, reach more customers, and increase online enquiries...",
    date: "Oct 28, 2026",
    read: "7 min read",
  },
  {
    slug: "website-redesign-services-in-noida-to-improve-user-experience-and-conversions-rodez-web-technology",
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
    slug: "wordpress-website-development-company-in-noida-for-custom-business-websites-rodez-web-technology",
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
    slug: "best-shopify-developers-in-noida-for-professional-ecommerce-website-development",
    title:
      "Best Shopify Developers in Noida for Professional Ecommerce Website Development",
    image: "/images/image4.png",
    categories: ["Business", "Digital Marketing", "Uncategorized"],
    excerpt:
      "In today’s competitive digital marketplace, having a professional ecommerce website is essential for businesses that want to sell products online and reach more customers. [...",
    date: "Oct 24, 2026",
    read: "7 min read",
  },
];

const recentPosts = [
  ...posts.map((p) => ({ slug: p.slug, title: p.title })),
  {
    slug: "best-wordpress-website-development-company-in-india-for-business-websites-rodez-web-technology",
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

// [name, slug]
const tags = [
  ["Business Growth", "business-growth"],
  ["Content Marketing", "content-marketing"],
  ["Custom Website Development", "custom-website-development"],
  ["Digital Marketing", "digital-marketing"],
  ["Digital Marketing Agency", "digital-marketing-agency"],
  ["Digital Marketing Agency Noida", "digital-marketing-agency-noida"],
  ["Digital Marketing Bangalore", "digital-marketing-bangalore"],
  ["Digital Marketing Company in Noida", "digital-marketing-company-in-noida"],
  ["Digital Marketing Company Noida", "digital-marketing-company-noida"],
  ["Digital Marketing Services", "digital-marketing-services"],
  ["E-commerce Website Development", "e-commerce-website-development"],
  ["Facebook Marketing", "facebook-marketing"],
  ["Google Ads", "google-ads"],
  ["Lead Generation", "lead-generation"],
  ["Local SEO", "local-seo"],
  ["Marketing Strategy", "marketing-strategy"],
  ["Online Business Growth", "online-business-growth"],
  ["Online Marketing", "online-marketing"],
  ["Online Marketing Agency", "online-marketing-agency"],
  ["Pay-Per-Click (PPC)", "pay-per-click-ppc"],
  ["Performance Marketing", "performance-marketing"],
  ["PPC", "ppc"],
  ["PPC Advertising", "ppc-advertising"],
  ["PPC Services", "ppc-services"],
  ["PPC Services Noida", "ppc-services-noida"],
  ["rodezWeb", "rodezweb"],
  ["Rodez Web Technologies", "rodez-web-technologies"],
  ["Rodez Web Technology", "rodez-web-technology"],
  ["Search Engine Optimization", "search-engine-optimization"],
  ["Search Engine Optimization (SEO)", "search-engine-optimization-seo"],
  ["SEO", "seo"],
  ["SEO-Friendly Websites", "seo-friendly-websites"],
  ["SEO Company Noida", "seo-company-noida"],
  ["SEO Optimized", "seo-optimized"],
  ["SEO Services", "seo-services"],
  ["SEO Services Bangalore", "seo-services-bangalore"],
  ["SEO Services Noida", "seo-services-noida"],
  ["Social media marketing", "social-media-marketing"],
  ["Social media marketing Bangalore", "social-media-marketing-bangalore"],
  ["Social Media Marketing Noida", "social-media-marketing-noida"],
  ["Technical SEO", "technical-seo"],
  ["UI UX Design", "ui-ux-design"],
  ["web development", "web-development"],
  ["Website Development", "website-development"],
  ["WordPress Development", "wordpress-development"],
];

const pages = [1, 2, 3, "…", 105];

const categoryHref = (c) => `/category/${c.toLowerCase().replace(/\s+/g, "-")}`;

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
    <div className="min-h-screen bg-[#1e1e1e] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#fdfaf9] light:bg-[#fafafa] light:text-[#1c1c1c]">
      {/* ---------- Hero ---------- */}
      <section className="flex min-h-[446px] items-center bg-[#262626] px-6 py-16 lg:px-[7.5%] light:bg-[#f0f0f0]">
        <div className="mx-auto w-full max-w-[1620px]">
          <h2 className="mb-6 text-[clamp(1.5rem,1.7vw,2rem)] font-normal text-[#ef5d39]">
            Our stories
          </h2>
          <h1 className="text-[clamp(2.6rem,4.1vw,4.9rem)] font-bold uppercase leading-none">
            We create
            <br />
            Awesome Blog
          </h1>
        </div>
      </section>

      {/* ---------- Posts + Sidebar ---------- */}
      <section className="px-6 py-16 lg:px-[7.5%] lg:py-[120px]">
        <div className="mx-auto grid max-w-[1620px] gap-16 lg:grid-cols-[1075fr_460fr] lg:gap-20">
          {/* Posts */}
          <div>
            {filtered.length === 0 && (
              <p className="text-[1.3rem] text-[#d9d9d9] light:text-[#555555]">
                No posts found.
              </p>
            )}

            {filtered.map((p) => (
              <article key={p.slug} className="mb-20">
                <a href={`/${p.slug}`} className="block">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="aspect-video w-full rounded-[45px] object-cover"
                    />
                  ) : (
                    <div className="aspect-video w-full rounded-[45px] bg-[#333] light:bg-[#e5e5e5]" />
                  )}
                </a>

                <div className="mt-8 flex flex-wrap gap-3">
                  {p.categories.map((c) => (
                    <a
                      key={c}
                      href={categoryHref(c)}
                      className="rounded-full bg-[#2a2a2a] px-4 py-2 text-[1.1rem] hover:bg-[#383838] light:bg-[#eeeeee] light:text-[#333333] light:hover:bg-[#e2e2e2]"
                    >
                      {c}
                    </a>
                  ))}
                </div>

                <a href={`/${p.slug}`} className="block">
                  <h2 className="mt-6 text-[clamp(1.8rem,2.9vw,2.9rem)] font-bold leading-[1.2] hover:text-[#ef5d39]">
                    {p.title}
                  </h2>
                </a>

                <p className="mt-6 text-[1.3rem] font-light leading-[1.65] text-[#d0d0d0] light:text-[#555555]">
                  {p.excerpt}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#333] pt-7 light:border-[#dddddd]">
                  <div className="flex items-center gap-4">
                    <a href="/author/admin">
                      <img
                        src={AVATAR}
                        alt="admin"
                        className="h-14 w-14 rounded-full object-cover"
                      />
                    </a>
                    <div>
                      <a
                        href="/author/admin"
                        className="text-[1.15rem] font-semibold leading-tight"
                      >
                        admin
                      </a>
                      <p className="text-[1.1rem] text-[#9a9a9a] light:text-[#777777]">
                        {p.date} <span className="mx-1.5">•</span> {p.read}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`/${p.slug}`}
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
              className="flex items-center justify-center gap-1 pt-4 text-[1.3rem]"
            >
              {pages.map((n, i) =>
                n === "…" ? (
                  <span
                    key={i}
                    className="hidden px-2 text-[#9a9a9a] sm:inline"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    aria-current={page === n ? "page" : undefined}
                    className={`h-[46px] min-w-[46px] items-center justify-center rounded-full px-2 transition-colors ${
                      n === 105 ? "hidden sm:flex" : "flex"
                    } ${
                      page === n
                        ? "bg-[#444] text-white light:bg-[#1c1c1c] light:text-white"
                        : "hover:bg-[#2a2a2a] light:hover:bg-[#e8e8e8]"
                    }`}
                  >
                    {n}
                  </button>
                )
              )}
              <button
                onClick={() => setPage((n) => Math.min(105, Number(n) + 1))}
                className="ml-3 px-2 text-[#9a9a9a] hover:text-white light:text-[#666666] light:hover:text-[#1c1c1c]"
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
                  className="h-14 w-full rounded-lg border border-[#444] bg-transparent pl-12 pr-4 text-[1.1rem] text-[#fdfaf9] outline-none focus:border-[#ef5d39] light:border-[#cccccc] light:text-[#1c1c1c] light:placeholder:text-[#888888]"
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
                    <a href={`/${r.slug}`} className="hover:text-[#ef5d39]">
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
              <p className="text-[1.3rem] text-[#d0d0d0] light:text-[#555555]">
                No comments to show.
              </p>
            </div>

            <div>
              <h3 className="mb-8 text-[2.2rem] font-bold leading-tight">
                Categories
              </h3>
              <ul className="list-disc space-y-3.5 pl-5 marker:text-[#777]">
                {categories.map((c) => (
                  <li key={c} className="text-[1.3rem]">
                    <a href={categoryHref(c)} className="hover:text-[#ef5d39]">
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
                {tags.map(([name, slug]) => (
                  <a
                    key={slug}
                    href={`/tag/${slug}`}
                    className="rounded-full bg-[#2a2a2a] px-4 py-2 text-[1.1rem] hover:bg-[#383838] light:bg-[#eeeeee] light:text-[#333333] light:hover:bg-[#e2e2e2]"
                  >
                    #{name}
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