// /*
//   Styling kept from the previous pages: Manrope font, dark theme, orange/red accent.
//   Font (if not already added, index.html <head>):
//   <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
// */

// const offices = [
//   {
//     title: "Head Office:",
//     city: "Greater Noida",
//     lines: ["Plot no -7, Sector Techzone 4,", "Patwari,", "Greater Noida,", "Uttar Pradesh 201308"],
//   },
//   {
//     title: "Branch Office 1:",
//     city: "Raebareli",
//     lines: ["OPP LIC Building , Canal Rd,", "Nirala Nagar,", "Raebareli,", "Uttar pradesh, 229001"],
//   },
//   {
//     title: "Branch Office 2:",
//     city: "Dehradun",
//     lines: ["Street no. 1, opposite brothers", "hostel, Suddhowala,", "Dehradun,", "Uttarakhand , 248007"],
//   },
//   {
//     title: "Branch Office 3:",
//     city: "Bengaluru",
//     lines: ["The Pavilion, 62/63, Church St,", "Shanthala Nagar, Ashok Nagar", "Bengaluru,", "Karnataka, 560001"],
//   },
//   {
//     title: "Branch Office 4:",
//     city: "Lucknow",
//     lines: ["Kathauta chauraha Rd, Vibhuti", "Khand, Gomti nagar ,", "Lucknow ,", "Uttar pradesh, 226010"],
//   },
// ];

// const links = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Services +", href: "/services", caret: true },
//   { label: "Blog", href: "/blog" },
//   { label: "Contact", href: "/contact" },
// ];

// const socials = [
//   {
//     name: "Facebook",
//     handle: "@rodezweb",
//     href: "#",
//     icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm-3 5c2 .5 3.500 2 4 4m-6 0c3-1 6 0 8 2m-7 4c1-3 3-4 6-4" />,
//   },
//   {
//     name: "Twitter",
//     handle: "@rodezweb",
//     href: "#",
//     icon: <path d="M21 6.500a7 7 0 01-2 .6 3.500 3.500 0 001.500-2 7 7 0 01-2.200.9 3.500 3.500 0 00-6 3.200A10 10 0 014 5.500a3.500 3.500 0 001.100 4.700 3.500 3.500 0 01-1.600-.4 3.500 3.500 0 002.800 3.500 3.500 3.500 0 01-1.600.1 3.500 3.500 0 003.300 2.400A7 7 0 013 17.200 10 10 0 008.400 19c6.600 0 10.200-5.500 10.200-10.200v-.5A7 7 0 0021 6.500z" />,
//   },
//   {
//     name: "Instagram",
//     handle: "@rodezweb",
//     href: "#",
//     icon: (
//       <>
//         <rect x="5" y="5" width="14" height="14" rx="4" />
//         <circle cx="12" cy="12" r="3.200" />
//         <circle cx="16.200" cy="7.800" r=".6" />
//       </>
//     ),
//   },
//   {
//     name: "Linkedin",
//     handle: "@rodez-web-technologies",
//     href: "#",
//     icon: <path d="M7 10v7M7 7v.01M11 17v-7m0 3c0-2 1.500-3 3-3s3 1 3 3v4" />,
//   },
// ];

// const Caret = () => (
//   <svg viewBox="0 0 10 6" className="ml-1.5 inline-block h-1.5 w-2 fill-current" aria-hidden="true">
//     <path d="M0 0h10L5 6z" />
//   </svg>
// );

// export default function Footer() {
//   return (
//     <footer className="relative w-full overflow-x-clip bg-black font-['Manrope',sans-serif] text-white">
//       {/* Background image (src left empty) */}
//       <img
//         src=""
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom opacity-30"
//       />

//       <div className="relative mx-auto w-full max-w-[1100px] px-5 pb-14 pt-14 sm:px-6 lg:pt-20">
//         {/* Heading */}
//         <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
//           <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.3] tracking-tight">
//             Got a <span className="font-extrabold">PROJECT</span>
//             <br className="hidden sm:block" />
//             <span className="font-extrabold sm:ml-2">IN MIND?</span>
//           </h2>
//           <a
//             href="/contact"
//             className="rounded-full border border-white/70 px-7 py-2.5 text-[14px] font-medium text-white transition hover:bg-white hover:text-black sm:px-8 sm:text-[16px]"
//           >
//             Let&apos;s Talk
//           </a>
//         </div>

//         {/* Offices */}
//         <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
//           {offices.map((o) => (
//             <div key={o.title} className="border-t border-white/80 pt-4">
//               <h3 className="text-[16px] font-normal text-[#f5431f]">{o.title}</h3>
//               <p className="mt-1 text-[14px] font-medium">{o.city}</p>
//               <address className="mt-1 text-[12px] not-italic leading-[1.55] text-white/60">
//                 {o.lines.map((l) => (
//                   <span key={l} className="block">
//                     {l}
//                   </span>
//                 ))}
//               </address>
//             </div>
//           ))}
//         </div>

//         {/* International */}
//         <div className="mt-8 border-t border-white/80 pt-5 lg:mt-0 lg:border-t-0">
//           <h3 className="text-[16px] font-normal text-[#f5431f]">International Branch Office</h3>
//           <p className="mt-1 text-[14px] font-medium">Dubai, U.A.E.</p>
//           <address className="mt-1 text-[12px] not-italic leading-[1.55] text-white/60">
//             {["T-06 ,R-Floor", "Sheikha building", "Al Ras , Dubai", "UAE"].map((l) => (
//               <span key={l} className="block">
//                 {l}
//               </span>
//             ))}
//           </address>
//         </div>

//         {/* Services / Contact / Quick link */}
//         <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
//           <div>
//             <h3 className="text-[17px] font-normal text-[#f5431f]">Services</h3>
//             <ul className="mt-2 flex flex-col gap-2.5 text-[13px] text-white/60">
//               {links.map((l, i) => (
//                 <li key={l.label}>
//                   <a href={l.href} className={`transition hover:text-white ${i === 0 ? "font-semibold text-white" : ""}`}>
//                     {l.label}
//                     {l.caret && <Caret />}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="sm:text-center">
//             <h3 className="text-[17px] font-normal text-[#f5431f]">Contact Us</h3>
//             <p className="mt-2 text-[13px]">
//               <span className="font-bold">Email:</span>{" "}
//               <a href="mailto:info@rodezweb.com" className="text-white/70 hover:text-white">
//                 info@rodezweb.com
//               </a>
//             </p>
//             <p className="mt-1.5 text-[13px]">
//               <span className="font-bold">Phone No.:</span>{" "}
//               <a href="tel:+918149845323" className="text-white/70 hover:text-white">
//                 +91-81498 45323
//               </a>
//             </p>
//           </div>

//           <div className="sm:text-right">
//             <h3 className="text-[17px] font-normal text-[#f5431f]">Quick link</h3>
//             <ul className="mt-2 flex flex-col gap-2.5 text-[13px] text-white/60 sm:items-end">
//               {links.map((l, i) => (
//                 <li key={l.label}>
//                   <a href={l.href} className={`transition hover:text-white ${i === 0 ? "font-semibold text-white" : ""}`}>
//                     {l.label}
//                     {l.caret && <Caret />}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Socials */}
//         <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {socials.map((s) => (
//             <div key={s.name} className="flex items-start justify-between gap-4 lg:pr-4">
//               <div>
//                 <h3 className="text-[17px] font-normal text-[#f5431f]">{s.name}</h3>
//                 <p className="mt-1 text-[12px] text-white/60">{s.handle}</p>
//               </div>
//               <a
//                 href={s.href}
//                 aria-label={s.name}
//                 className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white/70 transition hover:bg-[#f5431f] hover:text-white"
//               >
//                 <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//                   {s.icon}
//                 </svg>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="relative bg-[#2b2b2b]">
//         <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between gap-3 px-5 py-5 text-[12px] text-white/70 sm:px-6 md:flex-row">
//           <p>©2026 Rodez Web Technologies. All Rights Reserved.</p>
//           <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
//             {links.map((l, i) => (
//               <span key={l.label} className="flex items-center gap-2">
//                 {i > 0 && <span className="h-2.5 w-px bg-white/40" aria-hidden="true" />}
//                 <a href={l.href} className="hover:text-white">
//                   {l.label}
//                   {l.caret && <Caret />}
//                 </a>
//               </span>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// }
