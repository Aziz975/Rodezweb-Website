import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "All Services", href: "/services" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  {
    label: "WordPress Website Development",
    href: "/services/wordpress-development",
  },
  {
    label: "Shopify Website Development",
    href: "/services/shopify-development",
  },
];

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
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
  >
    <circle cx="11" cy="11" r="7.5" />
    <path d="M21 21l-4.5-4.5" />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // dark = true  -> dark mode (default)
  // dark = false -> bright mode
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") !== "light";
    } catch {
      return true;
    }
  });

  // Adds/removes the "light" class on <html> and remembers the choice
  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [dark]);

  const iconBtn =
    "rounded p-2 text-[#d4d4d4] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e8552d]";

  return (
    <header className="theme-header sticky top-0 z-50 w-full bg-[#1c1c1c] font-['Plus_Jakarta_Sans',sans-serif]">

      <nav className="mx-auto flex h-[72px] w-full max-w-[1900px] items-center justify-between px-5 sm:px-6 lg:h-[80px] lg:px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 text-white"
          onClick={() => {
            setOpen(false);
            setServicesOpen(false);
          }}
        >
          <img
            src="/images/rodezlogo.png"
            alt="Rodex Web Technologies"
            className="h-10 w-auto object-contain"
          />

          <span className="text-sm font-semibold sm:text-base">
            Rodez Web Technologies
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="ml-40 hidden flex-1 items-center gap-x-8 pl-8 lg:flex xl:gap-x-[55px] xl:pl-[70px]">

          {links.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => {
                if (link.dropdown) setServicesOpen(true);
              }}
              onMouseLeave={() => {
                if (link.dropdown) setServicesOpen(false);
              }}
            >
              <Link
                to={link.href}
                className="flex items-center gap-1 whitespace-nowrap text-[15px] text-white transition-colors hover:text-[#e8552d] xl:text-[17px]"
              >
                {link.label}

                {link.dropdown && (
                  <span className="text-[22px] leading-none">+</span>
                )}
              </Link>

              {/* Services Dropdown */}
              {link.dropdown && servicesOpen && (
                <ul className="absolute left-0 top-full w-64 rounded-md bg-[#262626] py-2 shadow-xl">

                  {services.map((service) => (
                    <li key={service.label}>
                      <Link
                        to={service.href}
                        className="block px-4 py-3 text-sm text-white transition-colors hover:bg-[#333] hover:text-[#e8552d]"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}

                </ul>
              )}
            </li>
          ))}

        </ul>

        {/* Right Icons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">

          {/* Theme toggle: moon -> go dark, sun -> go bright */}
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            className={iconBtn}
            aria-label={dark ? "Switch to bright mode" : "Switch to dark mode"}
            title={dark ? "Bright mode" : "Dark mode"}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className={iconBtn}
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
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

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-[#1c1c1c] transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[600px] border-t border-white/10"
            : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-3 sm:px-6">

          {links.map((link) => (
            <li key={link.label}>

              {link.dropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((value) => !value)}
                    className="flex w-full items-center justify-between py-3 text-left text-lg text-white"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}

                    <span className="text-2xl leading-none">
                      {servicesOpen ? "−" : "+"}
                    </span>
                  </button>

                  {servicesOpen && (
                    <ul className="mb-2 ml-3 border-l border-white/15 pl-4">

                      {services.map((service) => (
                        <li key={service.label}>
                          <Link
                            to={service.href}
                            className="block py-2 text-sm text-[#d4d4d4] transition-colors hover:text-[#e8552d]"
                            onClick={() => {
                              setOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}

                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  className="block py-3 text-lg text-white transition-colors hover:text-[#e8552d]"
                  onClick={() => {
                    setOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              )}

            </li>
          ))}

        </ul>
      </div>

    </header>
  );
};

export default Navbar;