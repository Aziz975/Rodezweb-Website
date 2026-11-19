import { useState } from "react";

/*
  Colours sampled from the screenshot:
  - Navbar background : #1c1c1c
  - Link text         : #ffffff
  - Logo text         : #e8552d (orange)
  - Icons             : #d4d4d4 (light grey)

  Add this once in index.html <head> for the matching font:
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
*/

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
];

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7.5" />
    <path d="M21 21l-4.5-4.5" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const iconBtn =
    "p-2 text-[#d4d4d4] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e8552d] rounded";

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#1c1c1c] font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-[1900px] items-center justify-between px-5 sm:px-6 lg:h-[80px] lg:px-6">
        {/* Logo */}
        <a
          href="/"
          className="shrink-0 text-[22px] font-normal tracking-tight text-[#e8552d] sm:text-[26px]"
        >
            <img src="" alt="" />
          Rodez Web Technologies
        </a>

        {/* Desktop links */}
        <ul className="ml-10 hidden flex-1 items-center gap-x-[70px] pl-[75px] lg:flex xl:pl-[110px]">
          {links.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setServicesOpen(true)}
              onMouseLeave={() => link.dropdown && setServicesOpen(false)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 text-[21px] text-white transition-colors hover:text-[#e8552d]"
              >
                {link.label}
                {link.dropdown && <span className="text-[24px] leading-none">+</span>}
              </a>

              {link.dropdown && servicesOpen && (
                <ul className="absolute left-0 top-full w-56 rounded-md bg-[#262626] py-2 shadow-lg">
                  {services.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="block px-4 py-2 text-[16px] text-white transition-colors hover:bg-[#333] hover:text-[#e8552d]"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className={iconBtn}
            aria-label="Toggle theme"
          >
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>
          <button type="button" className={iconBtn} aria-label="Search">
            <SearchIcon />
          </button>

          {/* Hamburger (mobile / tablet) */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`${iconBtn} lg:hidden`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-[#1c1c1c] transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[520px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-3 sm:px-6">
          {links.map((link) => (
            <li key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((s) => !s)}
                    className="flex w-full items-center justify-between py-3 text-left text-[19px] text-white"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <span className="text-[24px] leading-none">{servicesOpen ? "−" : "+"}</span>
                  </button>
                  {servicesOpen && (
                    <ul className="mb-2 ml-3 border-l border-white/15 pl-4">
                      {services.map((s) => (
                        <li key={s.label}>
                          <a
                            href={s.href}
                            className="block py-2 text-[16px] text-[#d4d4d4] hover:text-[#e8552d]"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="block py-3 text-[19px] text-white hover:text-[#e8552d]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
