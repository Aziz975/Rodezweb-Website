// // import { FaMoneyBillAlt, FaRegUser, FaUserAstronaut, FaCube } from "react-icons/fa";
// // import { useState, useEffect } from "react";
// // import { FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify } from "react-icons/fa6";
// // import { FaCheck, FaArrowRight, FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from "react-icons/fa6";

// // // npm i react-icons
// // // Navbar + floating WhatsApp button: use the ones you already built (global layout).
// // // Replace image paths marked TODO with your own assets in /src/assets or /public.

// // const ACCENT = "bg-[#f0603a]";

// // /* ---------- DATA ---------- */
// // const features = [
// //   { title: "Modern Design", desc: "Clean, professional, and visually appealing designs tailored to your brand." },
// //   { title: "Mobile Responsive", desc: "Perfectly optimized for phones, tablets, and desktops." },
// //   { title: "Fast Loading", desc: "Because every second of delay can cost potential customers." },
// //   { title: "SEO Ready", desc: "Built with search engine best practices from day one." },
// // ];

// // const benefits = [
// //   { title: "Generate More Leads", desc: "Convert visitors into inquiries with clear messaging and strategic design.", tint: "bg-indigo-900/60 text-indigo-400", Icon: FaMoneyBillAlt },
// //   { title: "Build Trust Faster", desc: "Create a strong first impression that establishes credibility.", tint: "bg-red-900/50 text-red-400", Icon: FaRegUser },
// //   { title: "Improve Customer Experience", desc: "Make it easy for customers to find information and take action.", tint: "bg-teal-900/60 text-teal-300", Icon: FaUserAstronaut },
// //   { title: "Support Business Growth", desc: "Scale your digital presence as your business evolves.", tint: "bg-pink-900/50 text-pink-400", Icon: FaCube },
// // ];

// // const steps = [
// //   { title: "Discover", desc: "We understand your business, audience, and growth objectives." },
// //   { title: "Design", desc: "User-focused designs that combine aesthetics with functionality." },
// //   { title: "Develop", desc: "Fast, responsive, and scalable development tailored to your needs." },
// // ];

// // const faqs = [
// //   { q: "Q1. How long does it take to develop a website?", a: "The timeline depends on the size and complexity of the project. Most business websites are completed within 1 to 3 weeks, while larger or custom websites may require additional time." },
// //   { q: "Q2. Will my website be mobile-friendly?", a: "Yes. Every website we build is fully responsive and optimized for phones, tablets, and desktops." },
// //   { q: "Q3. Can you redesign my existing website?", a: "Yes. We can redesign your current website with a modern look, better speed, and improved user experience." },
// //   { q: "Q4. Will my website be SEO-friendly?", a: "Yes. We follow search engine best practices from day one, including clean code, fast loading, and proper structure." },
// //   { q: "Q5. Do you provide support after the website is launched?", a: "Yes. We offer post-launch support and maintenance to keep your website running smoothly." },
// // ];

// // const clients = [
// //   { name: "Banyan Paradise", src: "/images/banyan.png" },
// //   { name: "Swapna Srushti Water Park", src: "/images/swapna.png" },
// //   { name: "Dept. of Commerce", src: "/images/commerce.png" },
// //   { name: "CAP India", src: "/images/cap-India.png" },
// //   { name: "Government of Telangana", src: "/images/govrn-telangana.png" },
// //   { name: "KJ Institute of Engineering & Technology", src: "/images/kj-institute.png" },
// //   { name: "Eye-care Hospital", src: "/images/eyecare.png" },
// //   { name: "Sterling Cancer Hospital", src: "/images/sterling.png" },
// // ];

// // /* ---------- SECTIONS ---------- */
// // function Hero() {
// //   return (
// //     <>
// //       {/* banner */}
// //       <section
// //         className="h-40 sm:h-52 md:h-80 flex items-center justify-center bg-cover bg-center"
// //         style={{ backgroundImage: "url('/images/web-dev-banner.jpg')" }} // TODO
// //       >
// //         <h1 className="text-white font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight">
// //           Web Development
// //         </h1>
// //       </section>

// //       <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
// //         <h2 className="font-extrabold uppercase leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl">
// //           Websites Built To Drive Growth,
// //           <span className="block text-neutral-400 mt-3 text-3xl sm:text-4xl">Not Just Look Good</span>
// //         </h2>

// //         <div>
// //           <p className="text-white text-justify leading-8">
// //             We create high-performing websites that attract visitors, build trust, generate leads,
// //             and help businesses grow online with confidence.
// //           </p>
// //           <div className="mt-8 flex flex-wrap items-center gap-3">
// //             <a href="/contact" className={`${ACCENT} text-white rounded-full px-8 py-3`}>
// //               Build My Website
// //             </a>
// //             {[FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify].map((Icon, i) => (
// //               <span key={i} className="hidden sm:flex w-12 h-12 rounded-full bg-neutral-800 items-center justify-center text-white">
// //                 <Icon />
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // function CustomersOnline() {
// //   return (
// //     <section className="max-w-6xl mx-auto px-6 text-center pt-10">
// //       <h2 className="text-white font-bold text-3xl sm:text-5xl">Your Customers Are Looking Online.</h2>
// //       <h3 className="text-white text-xl mt-4">What Are They Finding?</h3>
// //       <div className="mt-8 text-white space-y-1">
// //         <p>Your website is often the first impression people have of your business.</p>
// //         <p>A slow, outdated, or confusing website can drive potential customers away before they even contact you.</p>
// //         <p>
// //           Today’s customers expect fast loading speeds, seamless experiences, and instant access to
// //           information. Businesses that deliver those experiences earn more trust, more leads, and more
// //           opportunities to grow.
// //         </p>
// //       </div>

// //       {/* two laptops + cursor (slide in on desktop: simple static layout, add scroll animation later) */}
// //       <div className="mt-12 flex items-center justify-center gap-0 overflow-hidden">
// //         <img src="https://rodezweb.com/wp-content/uploads/2026/06/Left-Mac-1.png" alt="Laptop showing code editor" className="w-1/2 max-w-[520px]" />
// //         <img src="https://rodezweb.com/wp-content/uploads/2026/06/cursor.webp" alt="" className="hidden md:block w-20 -mx-6 z-10" />
// //         <img src="https://rodezweb.com/wp-content/uploads/2026/06/Right-Mac.png" alt="Laptop showing apps" className="w-1/2 max-w-[520px] hidden sm:block" />
// //       </div>
// //     </section>
// //   );
// // }

// // function GrowthPlatforms() {
// //   const points = ["Generate qualified leads", "Build credibility and trust", "Support your sales process", "Improve customer experience", "Create growth opportunities"];
// //   const stats = [["+3,427", "Websites Delivered"], ["+160", "Businesses Empowered"], ["99%", "Client Satisfaction Rate"]];
// //   return (
// //     <section className="max-w-6xl mx-auto px-6 py-16 text-center">
// //       <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
// //         We Don’t Just Build Websites. We Build Digital Growth Platforms.
// //       </h2>
// //       <p className="text-white mt-8">A website should do more than exist online.</p>
// //       <p className="text-white">It should:</p>
// //       <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white">
// //         {points.map((p) => (
// //           <li key={p} className="flex items-center gap-2">
// //             <FaCheck className="text-[#f0603a]" /> {p}
// //           </li>
// //         ))}
// //       </ul>
// //       <p className="text-white mt-8">
// //         At Rodez Web Technologies, every website is designed with one goal in mind—helping your business move forward.
// //       </p>

// //       {/* stats banner */}
// //       <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-900 via-red-900/80 to-blue-900 px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-white">
// //         {stats.map(([n, l]) => (
// //           <div key={l}>
// //             <div className="text-5xl md:text-7xl font-semibold">{n}</div>
// //             <div className="text-sm mt-1">{l}</div>
// //           </div>
// //         ))}
// //         <div className="col-span-2 md:col-span-1 text-xl font-bold text-left">Why Your Website Matters More Than Ever</div>
// //       </div>
// //     </section>
// //   );
// // }

// // function FeatureList() {
// //   return (
// //     <section className="max-w-6xl mx-auto px-6 text-center">
// //       <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
// //         We Don’t Just Build Websites. We Build Digital Growth Platforms.
// //       </h2>
// //       <p className="text-white mt-6">
// //         Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
// //       </p>
// //       <div className="mt-14 space-y-4 text-left">
// //         {features.map((f, i) => (
// //           <div key={f.title} className="bg-[#262626] rounded-lg px-6 py-8 grid grid-cols-[auto_1fr_auto] md:grid-cols-[320px_1fr_auto] items-center gap-4">
// //             <div className="flex items-center gap-4">
// //               <span className="text-white font-bold">0{i + 1}</span>
// //               <span className="text-white font-bold text-xl md:text-3xl">{f.title}</span>
// //             </div>
// //             <p className="text-neutral-400 hidden md:block">{f.desc}</p>
// //             <FaArrowRight className="text-[#f0603a] text-3xl justify-self-end" />
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // function Benefits() {
// //   return (
// //     <section className="max-w-6xl mx-auto px-6 py-20 text-center">
// //       <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
// //         What Can A High-Performing Website Do For Your Business?
// //       </h2>
// //       <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
// //         {benefits.map((b) => (
// //           <div key={b.title} className="flex flex-col items-center">
// //             <span className={`w-16 h-16 rounded-full flex items-center justify-center ${b.tint}`}>
// //               <b.Icon className="text-2xl" />
// //             </span>
// //             <h3 className="text-white text-2xl mt-6">{b.title}</h3>
// //             <p className="text-neutral-300 mt-3 max-w-xs">{b.desc}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // function Process() {
// //   const [start, setStart] = useState(0);
// //   const visible = steps.slice(start, start + 3);
// //   return (
// //     <section
// //       className="bg-cover bg-center py-20"
// //       style={{ backgroundImage: "linear-gradient(rgba(28,28,28,.8),rgba(28,28,28,.8)), url('/images/process-bg.jpg')" }} // TODO
// //     >
// //       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[400px_1fr] gap-10 items-center">
// //         <div className="bg-[#262626] p-10">
// //           <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight">From Vision To Launch</h2>
// //           <p className="text-white mt-8 leading-8">
// //             Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
// //           </p>
// //         </div>

// //         <div className="relative">
// //           <div className="grid sm:grid-cols-3 gap-6">
// //             {visible.map((s, i) => (
// //               <div key={s.title} className={`relative bg-white rounded-md p-6 text-center ${i === 1 ? "sm:mt-12" : ""}`}>
// //                 <h3 className="text-xl text-neutral-900">{s.title}</h3>
// //                 <p className="text-neutral-600 mt-3 text-sm">{s.desc}</p>
// //                 <span className={`absolute left-1/2 -translate-x-1/2 ${i === 1 ? "-top-10" : "-bottom-10"} w-12 h-12 rounded-full ${ACCENT} border-2 border-white text-white flex items-center justify-center font-semibold`}>
// //                   {start + i + 1}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //           <button aria-label="Previous" onClick={() => setStart(Math.max(0, start - 1))} className="absolute -left-4 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center">
// //             <FaChevronLeft />
// //           </button>
// //           <button aria-label="Next" onClick={() => setStart(Math.min(steps.length - 1, start + 1))} className="absolute -right-4 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center">
// //             <FaChevronRight />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function WhyChoose() {
// //   return (
// //     <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-start">
// //       <div>
// //         <h2 className="text-white font-bold text-4xl sm:text-5xl leading-[1.6]">
// //           Why Businesses <span className="bg-[#e65c38] px-3">Choose</span> Rodez?
// //         </h2>
// //         <p className="text-white text-justify leading-8 mt-6">
// //           A slow, outdated website can drive customers away before they even learn about your business.
// //           We create stunning, high-performing websites that build trust, capture attention, and turn visitors into customers.
// //         </p>
// //         <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>
// //           Discuss Your Website Project
// //         </a>
// //       </div>
// //       <div className="relative">
// //         <img src="/images/why-rodezweb.png" alt="Website on desktop, tablet and phone" className="w-full" /> {/* TODO */}
// //         {[["01", "top-[15%] left-[10%]"], ["02", "top-[28%] left-[62%]"], ["03", "top-[48%] left-[18%]"], ["04", "top-[65%] left-[62%]"]].map(([n, pos]) => (
// //           <span key={n} className={`absolute ${pos} bg-white text-neutral-900 text-sm px-2 py-1 rounded`}>{n}</span>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // function Faqs() {
// //   const [open, setOpen] = useState(0);
// //   return (
// //     <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10">
// //       <div>
// //         <p className="text-white">FAQS</p>
// //         <h2 className="text-white font-bold text-5xl sm:text-6xl leading-tight mt-4">Frequently Asked Questions!</h2>
// //         <p className="text-white mt-8 max-w-md">
// //           Find answers to common questions about our services, process, timelines, and how we help businesses achieve their digital goals.
// //         </p>
// //       </div>
// //       <div className="space-y-4">
// //         {faqs.map((f, i) => (
// //           <div key={f.q}>
// //             <button
// //               onClick={() => setOpen(open === i ? -1 : i)}
// //               aria-expanded={open === i}
// //               className="w-full bg-white rounded-md px-5 py-5 flex items-center gap-4 text-left font-semibold text-neutral-900"
// //             >
// //               {open === i ? <FaMinus /> : <FaPlus />} {f.q}
// //             </button>
// //             {open === i && (
// //               <div className="bg-white rounded-md border-t-2 border-[#f0603a] mt-1 px-6 py-6 text-neutral-800 leading-7">
// //                 {f.a}
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // function useVisible() {
// //   const get = () => (window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 3 : 2);
// //   const [v, setV] = useState(get);
// //   useEffect(() => {
// //     const onResize = () => setV(get());
// //     window.addEventListener("resize", onResize);
// //     return () => window.removeEventListener("resize", onResize);
// //   }, []);
// //   return v;
// // }

// // function LogoCarousel() {
// //   const visible = useVisible();
// //   const n = clients.length;
// //   const [start, setStart] = useState(0); // first visible card
// //   const [dir, setDir] = useState(0); // 1 = next, -1 = prev, 0 = idle
// //   const [paused, setPaused] = useState(false);

// //   // 1 card before + visible cards + 1 card after (circular)
// //   const items = Array.from({ length: visible + 2 }, (_, i) => clients[(start - 1 + i + n * 5) % n]);
// //   const slot = 100 / (visible + 2); // one card width, in % of the track

// //   const go = (d) => {
// //     if (dir === 0) setDir(d);
// //   };

// //   const handleEnd = (e) => {
// //     if (e.target !== e.currentTarget) return;
// //     setStart((s) => (s + dir + n) % n);
// //     setDir(0);
// //   };

// //   // auto-play (pauses on hover)
// //   useEffect(() => {
// //     if (paused || dir !== 0) return;
// //     const t = setTimeout(() => setDir(1), 2500);
// //     return () => clearTimeout(t);
// //   }, [paused, dir, start]);

// //   return (
// //     <div className="mt-10 flex items-center gap-4">
// //       <button aria-label="Previous" onClick={() => go(-1)} className="text-white">
// //         <FaChevronLeft />
// //       </button>

// //       <div className="flex-1 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
// //         <div
// //           className="flex"
// //           onTransitionEnd={handleEnd}
// //           style={{
// //             width: `${((visible + 2) * 100) / visible}%`,
// //             transform: `translateX(-${(1 + dir) * slot}%)`,
// //             transition: dir !== 0 ? "transform 500ms ease" : "none",
// //           }}
// //         >
// //           {items.map((c, i) => (
// //             <div key={i} className="px-3 shrink-0" style={{ width: `${slot}%` }}>
// //               <div className="bg-white rounded-2xl border-2 border-[#f0603a] h-44 flex items-center justify-center p-4">
// //                 <img src={c.src} alt={c.name} className="max-h-full object-contain" />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <button aria-label="Next" onClick={() => go(1)} className="text-white">
// //         <FaChevronRight />
// //       </button>
// //     </div>
// //   );
// // }

// // function CtaAndClients() {
// //   return (
// //     <section className="max-w-7xl mx-auto px-6 pb-24">
// //       <div
// //         className="rounded-3xl bg-neutral-700/60 bg-cover bg-center px-8 md:px-12 py-14"
// //         style={{ backgroundImage: "linear-gradient(rgba(38,38,38,.9),rgba(38,38,38,.9)), url('/images/cta-bg.jpg')" }} // TODO
// //       >
// //         <h2 className="text-white font-bold text-4xl sm:text-6xl leading-tight">Let’s Build A Website That Works As Hard As You Do</h2>
// //         <p className="text-white mt-6 max-w-5xl">
// //           Whether you’re launching a new brand, upgrading an outdated website, or looking to generate more leads online, we’ll help you create a digital presence designed for growth.
// //         </p>
// //         <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>
// //           Discuss Your Website Project
// //         </a>
// //       </div>

// //       <p className="text-white text-center uppercase mt-16">Trusted by growing businesses across industries</p>
// //       <LogoCarousel />
// //     </section>
// //   );
// // }

// // /* ---------- PAGE ---------- */
// // export default function WebDevelopment() {
// //   return (
// //     <main className="bg-[#1c1c1c] font-sans overflow-x-hidden">
// //       <Hero />
// //       <CustomersOnline />
// //       <GrowthPlatforms />
// //       <FeatureList />
// //       <Benefits />
// //       <Process />
// //       <WhyChoose />
// //       <Faqs />
// //       <CtaAndClients />
// //     </main>
// //   );
// // }





// import { FaMoneyBillAlt, FaRegUser, FaUserAstronaut, FaCube } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify } from "react-icons/fa6";
// import { FaCheck, FaArrowRight, FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from "react-icons/fa6";

// // npm i react-icons
// // Navbar + floating WhatsApp button: use the ones you already built (global layout).
// // Replace image paths marked TODO with your own assets in /src/assets or /public.

// const ACCENT = "bg-[#f0603a]";

// /* ---------- DATA ---------- */
// const features = [
//   { title: "Modern Design", desc: "Clean, professional, and visually appealing designs tailored to your brand.", img: "/images/web-modern-design.png" }, // TODO (red/grey posters image)
//   { title: "Mobile Responsive", desc: "Perfectly optimized for phones, tablets, and desktops.", img: "/images/web-mobile-responsive.png" }, // TODO
//   { title: "Fast Loading", desc: "Because every second of delay can cost potential customers.", img: "/images/web-fast-loading.png" }, // TODO
//   { title: "SEO Ready", desc: "Built with search engine best practices from day one.", img: "/images/wp-redesign.png" }, // TODO
// ];

// const benefits = [
//   { title: "Generate More Leads", desc: "Convert visitors into inquiries with clear messaging and strategic design.", tint: "bg-indigo-900/60 text-indigo-400", Icon: FaMoneyBillAlt },
//   { title: "Build Trust Faster", desc: "Create a strong first impression that establishes credibility.", tint: "bg-red-900/50 text-red-400", Icon: FaRegUser },
//   { title: "Improve Customer Experience", desc: "Make it easy for customers to find information and take action.", tint: "bg-teal-900/60 text-teal-300", Icon: FaUserAstronaut },
//   { title: "Support Business Growth", desc: "Scale your digital presence as your business evolves.", tint: "bg-pink-900/50 text-pink-400", Icon: FaCube },
// ];

// const steps = [
//   { title: "Discover", desc: "We understand your business, audience, and growth objectives." },
//   { title: "Design", desc: "User-focused designs that combine aesthetics with functionality." },
//   { title: "Develop", desc: "Fast, responsive, and scalable development tailored to your needs." },
// ];

// const faqs = [
//   { q: "Q1. How long does it take to develop a website?", a: "The timeline depends on the size and complexity of the project. Most business websites are completed within 1 to 3 weeks, while larger or custom websites may require additional time." },
//   { q: "Q2. Will my website be mobile-friendly?", a: "Yes. Every website we build is fully responsive and optimized for phones, tablets, and desktops." },
//   { q: "Q3. Can you redesign my existing website?", a: "Yes. We can redesign your current website with a modern look, better speed, and improved user experience." },
//   { q: "Q4. Will my website be SEO-friendly?", a: "Yes. We follow search engine best practices from day one, including clean code, fast loading, and proper structure." },
//   { q: "Q5. Do you provide support after the website is launched?", a: "Yes. We offer post-launch support and maintenance to keep your website running smoothly." },
// ];

// const clients = [
//   { name: "Banyan Paradise", src: "/images/banyan.png" },
//   { name: "Swapna Srushti Water Park", src: "/images/swapna.png" },
//   { name: "Dept. of Commerce", src: "/images/commerce.png" },
//   { name: "CAP India", src: "/images/cap-India.png" },
//   { name: "Government of Telangana", src: "/images/govrn-telangana.png" },
//   { name: "KJ Institute of Engineering & Technology", src: "/images/kj-institute.png" },
//   { name: "Eye-care Hospital", src: "/images/eyecare.png" },
//   { name: "Sterling Cancer Hospital", src: "/images/sterling.png" },
// ];

// /* ---------- SECTIONS ---------- */
// function Hero() {
//   return (
//     <>
//       {/* banner */}
//       <section
//         className="relative h-40 sm:h-52 md:h-80 flex items-center justify-center bg-cover bg-center overflow-hidden"
//       >
//         <img src="/images/Web-banner.png" alt="Web Development Banner" className="absolute inset-0 w-full h-full object-cover" />
//         <h1 className="relative z-10 text-white font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight">
//           Web Development
//         </h1>
//       </section>

//       <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
//         <h2 className="font-extrabold uppercase leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl">
//           Websites Built To Drive Growth,
//           <span className="block text-neutral-400 mt-3 text-3xl sm:text-4xl">Not Just Look Good</span>
//         </h2>

//         <div>
//           <p className="text-white text-justify leading-8">
//             We create high-performing websites that attract visitors, build trust, generate leads,
//             and help businesses grow online with confidence.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center gap-3">
//             <a href="/contact" className={`${ACCENT} text-white rounded-full px-8 py-3`}>
//               Build My Website
//             </a>
//             {[FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify].map((Icon, i) => (
//               <span key={i} className="hidden sm:flex w-12 h-12 rounded-full bg-neutral-800 items-center justify-center text-white">
//                 <Icon />
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function CustomersOnline() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 text-center pt-10">
//       <h2 className="text-white font-bold text-3xl sm:text-5xl">Your Customers Are Looking Online.</h2>
//       <h3 className="text-white text-xl mt-4">What Are They Finding?</h3>
//       <div className="mt-8 text-white space-y-1">
//         <p>Your website is often the first impression people have of your business.</p>
//         <p>A slow, outdated, or confusing website can drive potential customers away before they even contact you.</p>
//         <p>
//           Today’s customers expect fast loading speeds, seamless experiences, and instant access to
//           information. Businesses that deliver those experiences earn more trust, more leads, and more
//           opportunities to grow.
//         </p>
//       </div>

//       {/* two laptops + cursor (slide in on desktop: simple static layout, add scroll animation later) */}
//       <div className="mt-12 flex items-center justify-center gap-0 overflow-hidden">
//         <img src="https://rodezweb.com/wp-content/uploads/2026/06/Left-Mac-1.png" alt="Laptop showing code editor" className="w-1/2 max-w-[520px]" />
//         <img src="https://rodezweb.com/wp-content/uploads/2026/06/cursor.webp" alt="" className="hidden md:block w-20 -mx-6 z-10" />
//         <img src="https://rodezweb.com/wp-content/uploads/2026/06/Right-Mac.png" alt="Laptop showing apps" className="w-1/2 max-w-[520px] hidden sm:block" />
//       </div>
//     </section>
//   );
// }

// function GrowthPlatforms() {
//   const points = ["Generate qualified leads", "Build credibility and trust", "Support your sales process", "Improve customer experience", "Create growth opportunities"];
//   const stats = [["+3,427", "Websites Delivered"], ["+160", "Businesses Empowered"], ["99%", "Client Satisfaction Rate"]];
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-16 text-center">
//       <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
//         We Don’t Just Build Websites. We Build Digital Growth Platforms.
//       </h2>
//       <p className="text-white mt-8">A website should do more than exist online.</p>
//       <p className="text-white">It should:</p>
//       <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white">
//         {points.map((p) => (
//           <li key={p} className="flex items-center gap-2">
//             <FaCheck className="text-[#f0603a]" /> {p}
//           </li>
//         ))}
//       </ul>
//       <p className="text-white mt-8">
//         At Rodez Web Technologies, every website is designed with one goal in mind—helping your business move forward.
//       </p>

//       {/* stats banner */}
//       <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-900 via-red-900/80 to-blue-900 px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-white">
//         {stats.map(([n, l]) => (
//           <div key={l}>
//             <div className="text-5xl md:text-7xl font-semibold">{n}</div>
//             <div className="text-sm mt-1">{l}</div>
//           </div>
//         ))}
//         <div className="col-span-2 md:col-span-1 text-xl font-bold text-left">Why Your Website Matters More Than Ever</div>
//       </div>
//     </section>
//   );
// }

// function FeatureList() {
//   const [open, setOpen] = useState(0); // first row open, like the live page
//   return (
//     <section className="max-w-6xl mx-auto px-6 text-center">
//       <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
//         We Don’t Just Build Websites. We Build Digital Growth Platforms.
//       </h2>
//       <p className="text-white mt-6">
//         Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
//       </p>
//       <div className="mt-14 space-y-4 text-left">
//         {features.map((f, i) => (
//           <div key={f.title} className="bg-[#262626] rounded-lg px-6 py-6">
//             <button
//               onClick={() => setOpen(open === i ? -1 : i)}
//               aria-expanded={open === i}
//               className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[320px_1fr_auto] items-center gap-4 text-left"
//             >
//               <span className="flex items-center gap-4">
//                 <span className="text-white font-bold">0{i + 1}</span>
//                 <span className="text-white font-bold text-xl md:text-3xl">{f.title}</span>
//               </span>
//               <span className="text-neutral-400 hidden md:block">{f.desc}</span>
//               <FaArrowRight className={`text-[#f0603a] text-3xl transition-transform ${open === i ? "" : "-rotate-45"}`} />
//             </button>
//             {open === i && <img src={f.img} alt={f.title} className="mt-6 w-full max-h-[450px] object-cover rounded-md" />}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Benefits() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-20 text-center">
//       <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
//         What Can A High-Performing Website Do For Your Business?
//       </h2>
//       <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {benefits.map((b) => (
//           <div key={b.title} className="flex flex-col items-center">
//             <span className={`w-16 h-16 rounded-full flex items-center justify-center ${b.tint}`}>
//               <b.Icon className="text-2xl" />
//             </span>
//             <h3 className="text-white text-2xl mt-6">{b.title}</h3>
//             <p className="text-neutral-300 mt-3 max-w-xs">{b.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Process() {
//   const [start, setStart] = useState(0);
//   const visible = steps.slice(start, start + 3);
//   return (
//     <section
//       className="bg-cover bg-center py-20"
//       style={{ backgroundImage: "linear-gradient(rgba(28,28,28,.8),rgba(28,28,28,.8)), url('/images/process-bg.jpg')" }} // TODO
//     >
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[400px_1fr] gap-10 items-center">
//         <div className="bg-[#262626] p-10">
//           <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight">From Vision To Launch</h2>
//           <p className="text-white mt-8 leading-8">
//             Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
//           </p>
//         </div>

//         <div className="relative">
//           <div className="grid sm:grid-cols-3 gap-6">
//             {visible.map((s, i) => (
//               <div key={s.title} className={`relative bg-white rounded-md p-6 text-center ${i === 1 ? "sm:mt-12" : ""}`}>
//                 <h3 className="text-xl text-neutral-900">{s.title}</h3>
//                 <p className="text-neutral-600 mt-3 text-sm">{s.desc}</p>
//                 <span className={`absolute left-1/2 -translate-x-1/2 ${i === 1 ? "-top-10" : "-bottom-10"} w-12 h-12 rounded-full ${ACCENT} border-2 border-white text-white flex items-center justify-center font-semibold`}>
//                   {start + i + 1}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <button aria-label="Previous" onClick={() => setStart(Math.max(0, start - 1))} className="absolute -left-4 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center">
//             <FaChevronLeft />
//           </button>
//           <button aria-label="Next" onClick={() => setStart(Math.min(steps.length - 1, start + 1))} className="absolute -right-4 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center">
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function WhyChoose() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-start">
//       <div>
//         <h2 className="text-white font-bold text-4xl sm:text-5xl leading-[1.6]">
//           Why Businesses <span className="bg-[#e65c38] px-3">Choose</span> Rodez?
//         </h2>
//         <p className="text-white text-justify leading-8 mt-6">
//           A slow, outdated website can drive customers away before they even learn about your business.
//           We create stunning, high-performing websites that build trust, capture attention, and turn visitors into customers.
//         </p>
//         <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>
//           Discuss Your Website Project
//         </a>
//       </div>
//       <div className="relative">
//         <img src="/images/why-rodezweb.png" alt="Website on desktop, tablet and phone" className="w-full" /> {/* TODO */}
//         {[["01", "top-[15%] left-[10%]"], ["02", "top-[28%] left-[62%]"], ["03", "top-[48%] left-[18%]"], ["04", "top-[65%] left-[62%]"]].map(([n, pos]) => (
//           <span key={n} className={`absolute ${pos} bg-white text-neutral-900 text-sm px-2 py-1 rounded`}>{n}</span>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Faqs() {
//   const [open, setOpen] = useState(0);
//   return (
//     <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10">
//       <div>
//         <p className="text-white">FAQS</p>
//         <h2 className="text-white font-bold text-5xl sm:text-6xl leading-tight mt-4">Frequently Asked Questions!</h2>
//         <p className="text-white mt-8 max-w-md">
//           Find answers to common questions about our services, process, timelines, and how we help businesses achieve their digital goals.
//         </p>
//       </div>
//       <div className="space-y-4">
//         {faqs.map((f, i) => (
//           <div key={f.q}>
//             <button
//               onClick={() => setOpen(open === i ? -1 : i)}
//               aria-expanded={open === i}
//               className="w-full bg-white rounded-md px-5 py-5 flex items-center gap-4 text-left font-semibold text-neutral-900"
//             >
//               {open === i ? <FaMinus /> : <FaPlus />} {f.q}
//             </button>
//             {open === i && (
//               <div className="bg-white rounded-md border-t-2 border-[#f0603a] mt-1 px-6 py-6 text-neutral-800 leading-7">
//                 {f.a}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function useVisible() {
//   const get = () => (window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 3 : 2);
//   const [v, setV] = useState(get);
//   useEffect(() => {
//     const onResize = () => setV(get());
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);
//   return v;
// }

// function LogoCarousel() {
//   const visible = useVisible();
//   const n = clients.length;
//   const [start, setStart] = useState(0); // first visible card
//   const [dir, setDir] = useState(0); // 1 = next, -1 = prev, 0 = idle
//   const [paused, setPaused] = useState(false);

//   // 1 card before + visible cards + 1 card after (circular)
//   const items = Array.from({ length: visible + 2 }, (_, i) => clients[(start - 1 + i + n * 5) % n]);
//   const slot = 100 / (visible + 2); // one card width, in % of the track

//   const go = (d) => {
//     if (dir === 0) setDir(d);
//   };

//   const handleEnd = (e) => {
//     if (e.target !== e.currentTarget) return;
//     setStart((s) => (s + dir + n) % n);
//     setDir(0);
//   };

//   // auto-play (pauses on hover)
//   useEffect(() => {
//     if (paused || dir !== 0) return;
//     const t = setTimeout(() => setDir(1), 2500);
//     return () => clearTimeout(t);
//   }, [paused, dir, start]);

//   return (
//     <div className="mt-10 flex items-center gap-4">
//       <button aria-label="Previous" onClick={() => go(-1)} className="text-white">
//         <FaChevronLeft />
//       </button>

//       <div className="flex-1 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
//         <div
//           className="flex"
//           onTransitionEnd={handleEnd}
//           style={{
//             width: `${((visible + 2) * 100) / visible}%`,
//             transform: `translateX(-${(1 + dir) * slot}%)`,
//             transition: dir !== 0 ? "transform 500ms ease" : "none",
//           }}
//         >
//           {items.map((c, i) => (
//             <div key={i} className="px-3 shrink-0" style={{ width: `${slot}%` }}>
//               <div className="bg-white rounded-2xl border-2 border-[#f0603a] h-44 flex items-center justify-center p-4">
//                 <img src={c.src} alt={c.name} className="max-h-full object-contain" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button aria-label="Next" onClick={() => go(1)} className="text-white">
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// }

// function CtaAndClients() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 pb-24">
//       <div
//         className="rounded-3xl bg-neutral-700/60 bg-cover bg-center px-8 md:px-12 py-14"
//         style={{ backgroundImage: "linear-gradient(rgba(38,38,38,.9),rgba(38,38,38,.9)), url('/images/cta-bg.jpg')" }} // TODO
//       >
//         <h2 className="text-white font-bold text-4xl sm:text-6xl leading-tight">Let’s Build A Website That Works As Hard As You Do</h2>
//         <p className="text-white mt-6 max-w-5xl">
//           Whether you’re launching a new brand, upgrading an outdated website, or looking to generate more leads online, we’ll help you create a digital presence designed for growth.
//         </p>
//         <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>
//           Discuss Your Website Project
//         </a>
//       </div>

//       <p className="text-white text-center uppercase mt-16">Trusted by growing businesses across industries</p>
//       <LogoCarousel />
//     </section>
//   );
// }

// /* ---------- PAGE ---------- */
// export default function WebDevelopment() {
//   return (
//     <main className="bg-[#1c1c1c] font-sans overflow-x-hidden">
//       <Hero />
//       <CustomersOnline />
//       <GrowthPlatforms />
//       <FeatureList />
//       <Benefits />
//       <Process />
//       <WhyChoose />
//       <Faqs />
//       <CtaAndClients />
//     </main>
//   );
// }


// updte 





// import { FaMoneyBillAlt, FaRegUser, FaUserAstronaut, FaCube } from "react-icons/fa";
// import { useState, useEffect, useRef } from "react";
// import { FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify } from "react-icons/fa6";
// import { FaCheck, FaArrowRight, FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from "react-icons/fa6";

// // npm i react-icons
// // Navbar + floating WhatsApp button: use the ones you already built (global layout).
// // Replace image paths marked TODO with your own assets in /src/assets or /public.

// const ACCENT = "bg-[#f0603a]";

// // Full-width parallax image (person with red cap + laptop). Put the file in /public/images/
// const HERO_PARALLAX_IMG = "/images/wp-redesign.png"; // TODO

// /* ---------- DATA ---------- */
// const features = [
//   { title: "Modern Design", desc: "Clean, professional, and visually appealing designs tailored to your brand.", img: "/images/web-modern-design.png" }, // TODO (red/grey posters image)
//   { title: "Mobile Responsive", desc: "Perfectly optimized for phones, tablets, and desktops.", img: "/images/web-mobile-responsive.png" }, // TODO
//   { title: "Fast Loading", desc: "Because every second of delay can cost potential customers.", img: "/images/web-fast-loading.png" }, // TODO
//   { title: "SEO Ready", desc: "Built with search engine best practices from day one.", img: "/images/wp-redesign.png" }, // TODO
// ];

// const benefits = [
//   { title: "Generate More Leads", desc: "Convert visitors into inquiries with clear messaging and strategic design.", tint: "bg-indigo-900/60 text-indigo-400", Icon: FaMoneyBillAlt },
//   { title: "Build Trust Faster", desc: "Create a strong first impression that establishes credibility.", tint: "bg-red-900/50 text-red-400", Icon: FaRegUser },
//   { title: "Improve Customer Experience", desc: "Make it easy for customers to find information and take action.", tint: "bg-teal-900/60 text-teal-300", Icon: FaUserAstronaut },
//   { title: "Support Business Growth", desc: "Scale your digital presence as your business evolves.", tint: "bg-pink-900/50 text-pink-400", Icon: FaCube },
// ];

// const steps = [
//   { title: "Discover", desc: "We understand your business, audience, and growth objectives." },
//   { title: "Design", desc: "User-focused designs that combine aesthetics with functionality." },
//   { title: "Develop", desc: "Fast, responsive, and scalable development tailored to your needs." },
//   { title: "Launch & Grow", desc: "Ongoing support and optimization to keep your website performing." },
// ];

// const faqs = [
//   { q: "Q1. How long does it take to develop a website?", a: "The timeline depends on the size and complexity of the project. Most business websites are completed within 1 to 3 weeks, while larger or custom websites may require additional time." },
//   { q: "Q2. Will my website be mobile-friendly?", a: "Yes. Every website we build is fully responsive and optimized for phones, tablets, and desktops." },
//   { q: "Q3. Can you redesign my existing website?", a: "Yes. We can redesign your current website with a modern look, better speed, and improved user experience." },
//   { q: "Q4. Will my website be SEO-friendly?", a: "Yes. We follow search engine best practices from day one, including clean code, fast loading, and proper structure." },
//   { q: "Q5. Do you provide support after the website is launched?", a: "Yes. We offer post-launch support and maintenance to keep your website running smoothly." },
// ];

// const clients = [
//   { name: "Banyan Paradise", src: "/images/banyan.png" },
//   { name: "Swapna Srushti Water Park", src: "/images/swapna.png" },
//   { name: "Dept. of Commerce", src: "/images/commerce.png" },
//   { name: "CAP India", src: "/images/cap-India.png" },
//   { name: "Government of Telangana", src: "/images/govrn-telangana.png" },
//   { name: "KJ Institute of Engineering & Technology", src: "/images/kj-institute.png" },
//   { name: "Eye-care Hospital", src: "/images/eyecare.png" },
//   { name: "Sterling Cancer Hospital", src: "/images/sterling.png" },
// ];

// /* ---------- SECTIONS ---------- */
// function Hero() {
//   return (
//     <>
//       {/* banner */}
//       <section
//         className="relative h-40 sm:h-52 md:h-80 flex items-center justify-center bg-cover bg-center overflow-hidden"
//       >
//         <img src="/images/Web-banner.png" alt="Web Development Banner" className="absolute inset-0 w-full h-full object-cover" />
//         <h1 className="relative z-10 text-white font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight">
//           Web Development
//         </h1>
//       </section>

//       <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
//         <h2 className="font-extrabold uppercase leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl">
//           Websites Built To Drive Growth,
//           <span className="block text-neutral-400 mt-3 text-3xl sm:text-4xl">Not Just Look Good</span>
//         </h2>

//         <div>
//           <p className="text-white text-justify leading-8">
//             We create high-performing websites that attract visitors, build trust, generate leads,
//             and help businesses grow online with confidence.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center gap-3">
//             <a href="/contact" className={`${ACCENT} text-white rounded-full px-8 py-3`}>
//               Build My Website
//             </a>
//             {[FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify].map((Icon, i) => (
//               <span key={i} className="hidden sm:flex w-12 h-12 rounded-full bg-neutral-800 items-center justify-center text-white">
//                 <Icon />
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* Full-width image section (person with laptop) with a soft parallax, ~0.7 scroll speed like the live site.
//    The section always reserves its height, so there is a space for the image even before it loads. */
// function HeroParallaxImage() {
//   const wrapRef = useRef(null);
//   const imgRef = useRef(null);

//   useEffect(() => {
//     // Respect users who prefer no motion
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

//     let raf = 0;
//     const update = () => {
//       raf = 0;
//       const wrap = wrapRef.current;
//       const img = imgRef.current;
//       if (!wrap || !img) return;

//       const rect = wrap.getBoundingClientRect();
//       if (rect.bottom < 0 || rect.top > window.innerHeight) return; // off screen

//       // 0.3 = (1 - 0.7) parallax speed
//       const shift = (rect.top + rect.height / 2 - window.innerHeight / 2) * -0.3;
//       img.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
//     };

//     const onScroll = () => {
//       if (!raf) raf = requestAnimationFrame(update);
//     };

//     update();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//       if (raf) cancelAnimationFrame(raf);
//     };
//   }, []);

//   return (
//     <section
//       ref={wrapRef}
//       className="relative w-full overflow-hidden bg-[#c9cbc4] h-[300px] sm:h-[420px] md:h-[560px] lg:h-[700px]"
//     >
//       {/* image is taller than the box so no gaps show while it moves */}
//       <img
//         ref={imgRef}
//         src={HERO_PARALLAX_IMG}
//         alt="Person working on a laptop while sitting on a geometric structure"
//         loading="eager"
//         decoding="async"
//         className="absolute left-0 top-[-12%] h-[124%] w-full max-w-none object-cover object-center will-change-transform"
//       />
//     </section>
//   );
// }

// function CustomersOnline() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 text-center pt-10">
//       <h2 className="text-white font-bold text-3xl sm:text-5xl">Your Customers Are Looking Online.</h2>
//       <h3 className="text-white text-xl mt-4">What Are They Finding?</h3>
//       <div className="mt-8 text-white space-y-1">
//         <p>Your website is often the first impression people have of your business.</p>
//         <p>A slow, outdated, or confusing website can drive potential customers away before they even contact you.</p>
//         <p>
//           Today’s customers expect fast loading speeds, seamless experiences, and instant access to
//           information. Businesses that deliver those experiences earn more trust, more leads, and more
//           opportunities to grow.
//         </p>
//       </div>

//       {/* two laptops + cursor (slide in on desktop: simple static layout, add scroll animation later) */}
//       <div className="mt-12 flex items-center justify-center gap-0 overflow-hidden">
//         <img src="https://rodezweb.com/wp-content/uploads/2026/06/Left-Mac-1.png" alt="Laptop showing code editor" className="w-1/2 max-w-[520px]" />
//         <img src="https://rodezweb.com/wp-content/uploads/2026/06/cursor.webp" alt="" className="hidden md:block w-20 -mx-6 z-10" />
//         <img src="https://rodezweb.com/wp-content/uploads/2026/06/Right-Mac.png" alt="Laptop showing apps" className="w-1/2 max-w-[520px] hidden sm:block" />
//       </div>
//     </section>
//   );
// }

// function GrowthPlatforms() {
//   const points = ["Generate qualified leads", "Build credibility and trust", "Support your sales process", "Improve customer experience", "Create growth opportunities"];
//   const stats = [["+3,427", "Websites Delivered"], ["+160", "Businesses Empowered"], ["99%", "Client Satisfaction Rate"]];
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-16 text-center">
//       <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
//         We Don’t Just Build Websites. We Build Digital Growth Platforms.
//       </h2>
//       <p className="text-white mt-8">A website should do more than exist online.</p>
//       <p className="text-white">It should:</p>
//       <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white">
//         {points.map((p) => (
//           <li key={p} className="flex items-center gap-2">
//             <FaCheck className="text-[#f0603a]" /> {p}
//           </li>
//         ))}
//       </ul>
//       <p className="text-white mt-8">
//         At Rodez Web Technologies, every website is designed with one goal in mind—helping your business move forward.
//       </p>

//       {/* stats banner */}
//       <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-900 via-red-900/80 to-blue-900 px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-white">
//         {stats.map(([n, l]) => (
//           <div key={l}>
//             <div className="text-5xl md:text-7xl font-semibold">{n}</div>
//             <div className="text-sm mt-1">{l}</div>
//           </div>
//         ))}
//         <div className="col-span-2 md:col-span-1 text-xl font-bold text-left">Why Your Website Matters More Than Ever</div>
//       </div>
//     </section>
//   );
// }

// function FeatureList() {
//   const [open, setOpen] = useState(0); // first row open, like the live page
//   return (
//     <section className="max-w-6xl mx-auto px-6 text-center">
//       <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
//         We Don’t Just Build Websites. We Build Digital Growth Platforms.
//       </h2>
//       <p className="text-white mt-6">
//         Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
//       </p>
//       <div className="mt-14 space-y-4 text-left">
//         {features.map((f, i) => (
//           <div key={f.title} className="bg-[#262626] rounded-lg px-6 py-6">
//             <button
//               onClick={() => setOpen(open === i ? -1 : i)}
//               aria-expanded={open === i}
//               className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[320px_1fr_auto] items-center gap-4 text-left"
//             >
//               <span className="flex items-center gap-4">
//                 <span className="text-white font-bold">0{i + 1}</span>
//                 <span className="text-white font-bold text-xl md:text-3xl">{f.title}</span>
//               </span>
//               <span className="text-neutral-400 hidden md:block">{f.desc}</span>
//               <FaArrowRight className={`text-[#f0603a] text-3xl transition-transform ${open === i ? "" : "-rotate-45"}`} />
//             </button>
//             {open === i && <img src={f.img} alt={f.title} className="mt-6 w-full max-h-[450px] object-cover rounded-md" />}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Benefits() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-20 text-center">
//       <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
//         What Can A High-Performing Website Do For Your Business?
//       </h2>
//       <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {benefits.map((b) => (
//           <div key={b.title} className="flex flex-col items-center">
//             <span className={`w-16 h-16 rounded-full flex items-center justify-center ${b.tint}`}>
//               <b.Icon className="text-2xl" />
//             </span>
//             <h3 className="text-white text-2xl mt-6">{b.title}</h3>
//             <p className="text-neutral-300 mt-3 max-w-xs">{b.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// function Process() {
//   const [idx, setIdx] = useState(0);
//   const [maxIdx, setMaxIdx] = useState(Math.max(0, steps.length - 3));
//   const viewportRef = useRef(null);
//   const trackRef = useRef(null);
//   const touchX = useRef(null);

//   useEffect(() => {
//     const measure = () => {
//       const vp = viewportRef.current;
//       const tr = trackRef.current;
//       const first = tr && tr.querySelector("[data-step]");
//       if (!vp || !first) return;
//       const card = first.offsetWidth;
//       const gap = parseFloat(getComputedStyle(tr).columnGap) || 0;
//       const total = steps.length * card + (steps.length - 1) * gap;
//       const max = Math.max(0, Math.ceil((total - vp.clientWidth) / (card + gap)));
//       setMaxIdx(max);
//       setIdx((i) => Math.min(i, max));
//     };
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   const prev = () => setIdx((i) => Math.max(0, i - 1));
//   const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

//   const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
//   const onTouchEnd = (e) => {
//     if (touchX.current === null) return;
//     const dx = e.changedTouches[0].clientX - touchX.current;
//     touchX.current = null;
//     if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
//   };

//   return (
//     <section
//       className="bg-cover bg-center"
//       style={{ backgroundImage: "linear-gradient(rgba(28,28,28,.6),rgba(28,28,28,.6)), url('/images/process-bg.jpg')" }}
//     >
//       <div className="grid gap-12 py-16 lg:min-h-[660px] lg:grid-cols-[382px_minmax(0,1fr)] lg:items-center lg:gap-0 lg:py-[90px]">
//         <div className="bg-[#262626] px-6 py-12 sm:px-9 sm:py-14">
//           <h2 className="text-center text-4xl font-bold leading-tight text-white md:text-5xl">From Vision To Launch</h2>
//           <p className="mt-8 text-[1.15rem] leading-8 text-white">
//             Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
//           </p>
//         </div>

//         <div className="relative h-[370px] min-w-0">
//           <button
//             aria-label="Previous"
//             onClick={prev}
//             disabled={idx === 0}
//             className="absolute left-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md disabled:cursor-not-allowed disabled:opacity-40 lg:left-[13px] lg:h-[50px] lg:w-[50px]"
//           >
//             <FaChevronLeft />
//           </button>

//           <div
//             ref={viewportRef}
//             onTouchStart={onTouchStart}
//             onTouchEnd={onTouchEnd}
//             className="relative mx-14 h-full overflow-hidden [--cw:240px] [--gap:32px] sm:[--cw:280px] sm:[--gap:40px] lg:ml-[63px] lg:mr-[39px] lg:[--cw:325px] lg:[--gap:50px]"
//           >
//             <div
//               ref={trackRef}
//               className="relative flex h-full w-max gap-[var(--gap)] transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(calc(-1 * ${idx} * (var(--cw) + var(--gap))))` }}
//             >
//               <div aria-hidden="true" className="absolute left-0 right-0 top-[163px] z-0 h-1 bg-[#d5d9e6]" />

//               {steps.map((s, i) => {
//                 const top = i % 2 === 0;
//                 const marker = (
//                   <span className={`mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-white text-lg font-semibold text-white ${ACCENT}`}>
//                     {i + 1}
//                   </span>
//                 );
//                 const card = (
//                   <div className="relative z-10 rounded-md bg-white px-6 py-6 text-center">
//                     <h3 className="text-xl text-neutral-900">{s.title}</h3>
//                     <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{s.desc}</p>
//                   </div>
//                 );
//                 return (
//                   <div
//                     key={s.title}
//                     data-step
//                     className={`flex h-[370px] w-[var(--cw)] shrink-0 flex-col ${top ? "pt-[55px]" : "pt-[27px]"}`}
//                   >
//                     {top ? (
//                       <>
//                         {card}
//                         <div className="mt-6">{marker}</div>
//                       </>
//                     ) : (
//                       <>
//                         <div className="mb-[22px]">{marker}</div>
//                         {card}
//                       </>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <button
//             aria-label="Next"
//             onClick={next}
//             disabled={idx >= maxIdx}
//             className="absolute right-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md disabled:cursor-not-allowed disabled:opacity-40 lg:right-[15px] lg:h-[50px] lg:w-[50px]"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// function WhyChoose() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-start">
//       <div>
//         <h2 className="text-white font-bold text-4xl sm:text-5xl leading-[1.6]">
//           Why Businesses <span className="bg-[#e65c38] px-3">Choose</span> Rodez?
//         </h2>
//         <p className="text-white text-justify leading-8 mt-6">
//           A slow, outdated website can drive customers away before they even learn about your business.
//           We create stunning, high-performing websites that build trust, capture attention, and turn visitors into customers.
//         </p>
//         <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>
//           Discuss Your Website Project
//         </a>
//       </div>
//       <div className="relative">
//         <img src="/images/why-rodezweb.png" alt="Website on desktop, tablet and phone" className="w-full" /> {/* TODO */}
//         {[["01", "top-[15%] left-[10%]"], ["02", "top-[28%] left-[62%]"], ["03", "top-[48%] left-[18%]"], ["04", "top-[65%] left-[62%]"]].map(([n, pos]) => (
//           <span key={n} className={`absolute ${pos} bg-white text-neutral-900 text-sm px-2 py-1 rounded`}>{n}</span>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Faqs() {
//   const [open, setOpen] = useState(0);
//   return (
//     <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10">
//       <div>
//         <p className="text-white">FAQS</p>
//         <h2 className="text-white font-bold text-5xl sm:text-6xl leading-tight mt-4">Frequently Asked Questions!</h2>
//         <p className="text-white mt-8 max-w-md">
//           Find answers to common questions about our services, process, timelines, and how we help businesses achieve their digital goals.
//         </p>
//       </div>
//       <div className="space-y-4">
//         {faqs.map((f, i) => (
//           <div key={f.q}>
//             <button
//               onClick={() => setOpen(open === i ? -1 : i)}
//               aria-expanded={open === i}
//               className="w-full bg-white rounded-md px-5 py-5 flex items-center gap-4 text-left font-semibold text-neutral-900"
//             >
//               {open === i ? <FaMinus /> : <FaPlus />} {f.q}
//             </button>
//             {open === i && (
//               <div className="bg-white rounded-md border-t-2 border-[#f0603a] mt-1 px-6 py-6 text-neutral-800 leading-7">
//                 {f.a}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function useVisible() {
//   const get = () => (window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 3 : 2);
//   const [v, setV] = useState(get);
//   useEffect(() => {
//     const onResize = () => setV(get());
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);
//   return v;
// }

// function LogoCarousel() {
//   const visible = useVisible();
//   const n = clients.length;
//   const [start, setStart] = useState(0); // first visible card
//   const [dir, setDir] = useState(0); // 1 = next, -1 = prev, 0 = idle
//   const [paused, setPaused] = useState(false);

//   // 1 card before + visible cards + 1 card after (circular)
//   const items = Array.from({ length: visible + 2 }, (_, i) => clients[(start - 1 + i + n * 5) % n]);
//   const slot = 100 / (visible + 2); // one card width, in % of the track

//   const go = (d) => {
//     if (dir === 0) setDir(d);
//   };

//   const handleEnd = (e) => {
//     if (e.target !== e.currentTarget) return;
//     setStart((s) => (s + dir + n) % n);
//     setDir(0);
//   };

//   // auto-play (pauses on hover)
//   useEffect(() => {
//     if (paused || dir !== 0) return;
//     const t = setTimeout(() => setDir(1), 2500);
//     return () => clearTimeout(t);
//   }, [paused, dir, start]);

//   return (
//     <div className="mt-10 flex items-center gap-4">
//       <button aria-label="Previous" onClick={() => go(-1)} className="text-white">
//         <FaChevronLeft />
//       </button>

//       <div className="flex-1 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
//         <div
//           className="flex"
//           onTransitionEnd={handleEnd}
//           style={{
//             width: `${((visible + 2) * 100) / visible}%`,
//             transform: `translateX(-${(1 + dir) * slot}%)`,
//             transition: dir !== 0 ? "transform 500ms ease" : "none",
//           }}
//         >
//           {items.map((c, i) => (
//             <div key={i} className="px-3 shrink-0" style={{ width: `${slot}%` }}>
//               <div className="bg-white rounded-2xl border-2 border-[#f0603a] h-44 flex items-center justify-center p-4">
//                 <img src={c.src} alt={c.name} className="max-h-full object-contain" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button aria-label="Next" onClick={() => go(1)} className="text-white">
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// }

// function CtaAndClients() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 pb-24">
//       <div
//         className="rounded-3xl bg-neutral-700/60 bg-cover bg-center px-8 md:px-12 py-14"
//         style={{ backgroundImage: "linear-gradient(rgba(38,38,38,.9),rgba(38,38,38,.9)), url('/images/cta-bg.jpg')" }} // TODO
//       >
//         <h2 className="text-white font-bold text-4xl sm:text-6xl leading-tight">Let’s Build A Website That Works As Hard As You Do</h2>
//         <p className="text-white mt-6 max-w-5xl">
//           Whether you’re launching a new brand, upgrading an outdated website, or looking to generate more leads online, we’ll help you create a digital presence designed for growth.
//         </p>
//         <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>
//           Discuss Your Website Project
//         </a>
//       </div>

//       <p className="text-white text-center uppercase mt-16">Trusted by growing businesses across industries</p>
//       <LogoCarousel />
//     </section>
//   );
// }

// /* ---------- PAGE ---------- */
// export default function WebDevelopment() {
//   return (
//     <main className="bg-[#1c1c1c] font-sans overflow-x-hidden">
//       <Hero />
//       <HeroParallaxImage />
//       <CustomersOnline />
//       <GrowthPlatforms />
//       <FeatureList />
//       <Benefits />
//       <Process />
//       <WhyChoose />
//       <Faqs />
//       <CtaAndClients />
//     </main>
//   );
// }

// hdahd




import { FaMoneyBillAlt, FaRegUser, FaUserAstronaut, FaCube } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify } from "react-icons/fa6";
import { FaCheck, FaArrowRight, FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from "react-icons/fa6";

// npm i react-icons
// Navbar + floating WhatsApp button: use the ones you already built (global layout).
// Replace image paths marked TODO with your own assets in /src/assets or /public.

const ACCENT = "bg-[#f0603a]";

// Full-width parallax image (person with red cap + laptop). Put the file in /public/images/
const HERO_PARALLAX_IMG = "/images/wp-redesign.png"; // TODO

/* ---------- DATA ---------- */
const features = [
  { title: "Modern Design", desc: "Clean, professional, and visually appealing designs tailored to your brand.", img: "/images/web-modern-design.png" }, // TODO (red/grey posters image)
  { title: "Mobile Responsive", desc: "Perfectly optimized for phones, tablets, and desktops.", img: "/images/web-mobile-responsive.png" }, // TODO
  { title: "Fast Loading", desc: "Because every second of delay can cost potential customers.", img: "/images/web-fast-loading.png" }, // TODO
  { title: "SEO Ready", desc: "Built with search engine best practices from day one.", img: "/images/wp-redesign.png" }, // TODO
];

const benefits = [
  { title: "Generate More Leads", desc: "Convert visitors into inquiries with clear messaging and strategic design.", tint: "bg-indigo-900/60 text-indigo-400", Icon: FaMoneyBillAlt },
  { title: "Build Trust Faster", desc: "Create a strong first impression that establishes credibility.", tint: "bg-red-900/50 text-red-400", Icon: FaRegUser },
  { title: "Improve Customer Experience", desc: "Make it easy for customers to find information and take action.", tint: "bg-teal-900/60 text-teal-300", Icon: FaUserAstronaut },
  { title: "Support Business Growth", desc: "Scale your digital presence as your business evolves.", tint: "bg-pink-900/50 text-pink-400", Icon: FaCube },
];

const steps = [
  { title: "Discover", desc: "We understand your business, audience, and growth objectives." },
  { title: "Design", desc: "User-focused designs that combine aesthetics with functionality." },
  { title: "Develop", desc: "Fast, responsive, and scalable development tailored to your needs." },
  { title: "Launch & Grow", desc: "Ongoing support and optimization to keep your website performing." },
];

const faqs = [
  { q: "Q1. How long does it take to develop a website?", a: "The timeline depends on the size and complexity of the project. Most business websites are completed within 1 to 3 weeks, while larger or custom websites may require additional time." },
  { q: "Q2. Will my website be mobile-friendly?", a: "Yes. Every website we build is fully responsive and optimized for phones, tablets, and desktops." },
  { q: "Q3. Can you redesign my existing website?", a: "Yes. We can redesign your current website with a modern look, better speed, and improved user experience." },
  { q: "Q4. Will my website be SEO-friendly?", a: "Yes. We follow search engine best practices from day one, including clean code, fast loading, and proper structure." },
  { q: "Q5. Do you provide support after the website is launched?", a: "Yes. We offer post-launch support and maintenance to keep your website running smoothly." },
];

const clients = [
  { name: "Banyan Paradise", src: "/images/banyan.png" },
  { name: "Swapna Srushti Water Park", src: "/images/swapna.png" },
  { name: "Dept. of Commerce", src: "/images/commerce.png" },
  { name: "CAP India", src: "/images/cap-India.png" },
  { name: "Government of Telangana", src: "/images/govrn-telangana.png" },
  { name: "KJ Institute of Engineering & Technology", src: "/images/kj-institute.png" },
  { name: "Eye-care Hospital", src: "/images/eyecare.png" },
  { name: "Sterling Cancer Hospital", src: "/images/sterling.png" },
];

/* ---------- COUNT UP ---------- */
// Counts from 0 to the number inside `value` (e.g. "+3,427", "+160", "99%")
// every time the component mounts (first load or page refresh).
function CountUp({ value, duration = 2000 }) {
  // splits "+3,427" -> prefix "+", number 3427, suffix ""
  const match = value.match(/^(\D*)([\d,]+)(\D*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseInt(match[2].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[3] : "";

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // 1) wait until the number is visible on screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setStarted(true); // old browser fallback
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // run only once per page load
        }
      },
      { threshold: 0.4 } // starts when 40% of it is visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2) run the 0 -> target animation once it is visible
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // fast at first, slows near the end
      setCount(Math.floor(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* ---------- SECTIONS ---------- */
function Hero() {
  return (
    <>
      {/* banner */}
      <section
        className="relative h-40 sm:h-52 md:h-80 flex items-center justify-center bg-cover bg-center overflow-hidden"
      >
        <img src="/images/Web-banner.png" alt="Web Development Banner" className="absolute inset-0 w-full h-full object-cover" />
        <h1 className="relative z-10 text-white font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight">
          Web Development
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <h2 className="font-extrabold uppercase leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl">
          Websites Built To Drive Growth,
          <span className="block text-neutral-400 mt-3 text-3xl sm:text-4xl">Not Just Look Good</span>
        </h2>

        <div>
          <p className="text-white text-justify leading-8">
            We create high-performing websites that attract visitors, build trust, generate leads,
            and help businesses grow online with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/contact" className={`${ACCENT} text-white rounded-full px-8 py-3`}>
              Build My Website
            </a>
            {[FaDev, FaAws, FaNodeJs, FaWordpress, FaShopify].map((Icon, i) => (
              <span key={i} className="hidden sm:flex w-12 h-12 rounded-full bg-neutral-800 items-center justify-center text-white">
                <Icon />
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* Full-width image section (person with laptop) with a soft parallax, ~0.7 scroll speed like the live site.
   The section always reserves its height, so there is a space for the image even before it loads. */
function HeroParallaxImage() {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Respect users who prefer no motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img) return;

      const rect = wrap.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return; // off screen

      // 0.3 = (1 - 0.7) parallax speed
      const shift = (rect.top + rect.height / 2 - window.innerHeight / 2) * -0.3;
      img.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative w-full overflow-hidden bg-[#c9cbc4] h-[300px] sm:h-[420px] md:h-[560px] lg:h-[700px]"
    >
      {/* image is taller than the box so no gaps show while it moves */}
      <img
        ref={imgRef}
        src={HERO_PARALLAX_IMG}
        alt="Person working on a laptop while sitting on a geometric structure"
        loading="eager"
        decoding="async"
        className="absolute left-0 top-[-12%] h-[124%] w-full max-w-none object-cover object-center will-change-transform"
      />
    </section>
  );
}

function CustomersOnline() {
  return (
    <section className="max-w-6xl mx-auto px-6 text-center pt-10">
      <h2 className="text-white font-bold text-3xl sm:text-5xl">Your Customers Are Looking Online.</h2>
      <h3 className="text-white text-xl mt-4">What Are They Finding?</h3>
      <div className="mt-8 text-white space-y-1">
        <p>Your website is often the first impression people have of your business.</p>
        <p>A slow, outdated, or confusing website can drive potential customers away before they even contact you.</p>
        <p>
          Today’s customers expect fast loading speeds, seamless experiences, and instant access to
          information. Businesses that deliver those experiences earn more trust, more leads, and more
          opportunities to grow.
        </p>
      </div>

      {/* two laptops + cursor (slide in on desktop: simple static layout, add scroll animation later) */}
      <div className="mt-12 flex items-center justify-center gap-0 overflow-hidden">
        <img src="https://rodezweb.com/wp-content/uploads/2026/06/Left-Mac-1.png" alt="Laptop showing code editor" className="w-1/2 max-w-[520px]" />
        <img src="https://rodezweb.com/wp-content/uploads/2026/06/cursor.webp" alt="" className="hidden md:block w-20 -mx-6 z-10" />
        <img src="https://rodezweb.com/wp-content/uploads/2026/06/Right-Mac.png" alt="Laptop showing apps" className="w-1/2 max-w-[520px] hidden sm:block" />
      </div>
    </section>
  );
}

function GrowthPlatforms() {
  const points = ["Generate qualified leads", "Build credibility and trust", "Support your sales process", "Improve customer experience", "Create growth opportunities"];
  const stats = [["+3,427", "Websites Delivered"], ["+160", "Businesses Empowered"], ["99%", "Client Satisfaction Rate"]];
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
        We Don’t Just Build Websites. We Build Digital Growth Platforms.
      </h2>
      <p className="text-white mt-8">A website should do more than exist online.</p>
      <p className="text-white">It should:</p>
      <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2">
            <FaCheck className="text-[#f0603a]" /> {p}
          </li>
        ))}
      </ul>
      <p className="text-white mt-8">
        At Rodez Web Technologies, every website is designed with one goal in mind—helping your business move forward.
      </p>

      {/* stats banner */}
      <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-900 via-red-900/80 to-blue-900 px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-white">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="text-5xl md:text-7xl font-semibold tabular-nums">
              <CountUp value={n} />
            </div>
            <div className="text-sm mt-1">{l}</div>
          </div>
        ))}
        <div className="col-span-2 md:col-span-1 text-xl font-bold text-left">Why Your Website Matters More Than Ever</div>
      </div>
    </section>
  );
}

function FeatureList() {
  const [open, setOpen] = useState(0); // first row open, like the live page
  return (
    <section className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
        We Don’t Just Build Websites. We Build Digital Growth Platforms.
      </h2>
      <p className="text-white mt-6">
        Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
      </p>
      <div className="mt-14 space-y-4 text-left">
        {features.map((f, i) => (
          <div key={f.title} className="bg-[#262626] rounded-lg px-6 py-6">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[320px_1fr_auto] items-center gap-4 text-left"
            >
              <span className="flex items-center gap-4">
                <span className="text-white font-bold">0{i + 1}</span>
                <span className="text-white font-bold text-xl md:text-3xl">{f.title}</span>
              </span>
              <span className="text-neutral-400 hidden md:block">{f.desc}</span>
              <FaArrowRight className={`text-[#f0603a] text-3xl transition-transform ${open === i ? "" : "-rotate-45"}`} />
            </button>
            {open === i && <img src={f.img} alt={f.title} className="mt-6 w-full max-h-[450px] object-cover rounded-md" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
        What Can A High-Performing Website Do For Your Business?
      </h2>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {benefits.map((b) => (
          <div key={b.title} className="flex flex-col items-center">
            <span className={`w-16 h-16 rounded-full flex items-center justify-center ${b.tint}`}>
              <b.Icon className="text-2xl" />
            </span>
            <h3 className="text-white text-2xl mt-6">{b.title}</h3>
            <p className="text-neutral-300 mt-3 max-w-xs">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


function Process() {
  const [idx, setIdx] = useState(0);
  const [maxIdx, setMaxIdx] = useState(Math.max(0, steps.length - 3));
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const touchX = useRef(null);

  useEffect(() => {
    const measure = () => {
      const vp = viewportRef.current;
      const tr = trackRef.current;
      const first = tr && tr.querySelector("[data-step]");
      if (!vp || !first) return;
      const card = first.offsetWidth;
      const gap = parseFloat(getComputedStyle(tr).columnGap) || 0;
      const total = steps.length * card + (steps.length - 1) * gap;
      const max = Math.max(0, Math.ceil((total - vp.clientWidth) / (card + gap)));
      setMaxIdx(max);
      setIdx((i) => Math.min(i, max));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(28,28,28,.6),rgba(28,28,28,.6)), url('/images/process-bg.jpg')" }}
    >
      <div className="grid gap-12 py-16 lg:min-h-[660px] lg:grid-cols-[382px_minmax(0,1fr)] lg:items-center lg:gap-0 lg:py-[90px]">
        <div className="bg-[#262626] px-6 py-12 sm:px-9 sm:py-14">
          <h2 className="text-center text-4xl font-bold leading-tight text-white md:text-5xl">From Vision To Launch</h2>
          <p className="mt-8 text-[1.15rem] leading-8 text-white">
            Whether you’re launching a new business or upgrading an existing presence, we create websites that align with your objectives and deliver measurable results.
          </p>
        </div>

        <div className="relative h-[370px] min-w-0">
          <button
            aria-label="Previous"
            onClick={prev}
            disabled={idx === 0}
            className="absolute left-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md disabled:cursor-not-allowed disabled:opacity-40 lg:left-[13px] lg:h-[50px] lg:w-[50px]"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={viewportRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="relative mx-14 h-full overflow-hidden [--cw:240px] [--gap:32px] sm:[--cw:280px] sm:[--gap:40px] lg:ml-[63px] lg:mr-[39px] lg:[--cw:325px] lg:[--gap:50px]"
          >
            <div
              ref={trackRef}
              className="relative flex h-full w-max gap-[var(--gap)] transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-1 * ${idx} * (var(--cw) + var(--gap))))` }}
            >
              <div aria-hidden="true" className="absolute left-0 right-0 top-[163px] z-0 h-1 bg-[#d5d9e6]" />

              {steps.map((s, i) => {
                const top = i % 2 === 0;
                const marker = (
                  <span className={`mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-white text-lg font-semibold text-white ${ACCENT}`}>
                    {i + 1}
                  </span>
                );
                const card = (
                  <div className="relative z-10 rounded-md bg-white px-6 py-6 text-center">
                    <h3 className="text-xl text-neutral-900">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{s.desc}</p>
                  </div>
                );
                return (
                  <div
                    key={s.title}
                    data-step
                    className={`flex h-[370px] w-[var(--cw)] shrink-0 flex-col ${top ? "pt-[55px]" : "pt-[27px]"}`}
                  >
                    {top ? (
                      <>
                        {card}
                        <div className="mt-6">{marker}</div>
                      </>
                    ) : (
                      <>
                        <div className="mb-[22px]">{marker}</div>
                        {card}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            aria-label="Next"
            onClick={next}
            disabled={idx >= maxIdx}
            className="absolute right-1 top-[165px] z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md disabled:cursor-not-allowed disabled:opacity-40 lg:right-[15px] lg:h-[50px] lg:w-[50px]"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}


function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-white font-bold text-4xl sm:text-5xl leading-[1.6]">
          Why Businesses <span className="bg-[#e65c38] px-3">Choose</span> Rodez?
        </h2>
        <p className="text-white text-justify leading-8 mt-6">
          A slow, outdated website can drive customers away before they even learn about your business.
          We create stunning, high-performing websites that build trust, capture attention, and turn visitors into customers.
        </p>
        <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>
          Discuss Your Website Project
        </a>
      </div>
      <div className="relative">
        <img src="/images/why-rodezweb.png" alt="Website on desktop, tablet and phone" className="w-full" /> {/* TODO */}
        {[["01", "top-[15%] left-[10%]"], ["02", "top-[28%] left-[62%]"], ["03", "top-[48%] left-[18%]"], ["04", "top-[65%] left-[62%]"]].map(([n, pos]) => (
          <span key={n} className={`absolute ${pos} bg-white text-neutral-900 text-sm px-2 py-1 rounded`}>{n}</span>
        ))}
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState(0);
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10">
      <div>
        <p className="text-white">FAQS</p>
        <h2 className="text-white font-bold text-5xl sm:text-6xl leading-tight mt-4">Frequently Asked Questions!</h2>
        <p className="text-white mt-8 max-w-md">
          Find answers to common questions about our services, process, timelines, and how we help businesses achieve their digital goals.
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="w-full bg-white rounded-md px-5 py-5 flex items-center gap-4 text-left font-semibold text-neutral-900"
            >
              {open === i ? <FaMinus /> : <FaPlus />} {f.q}
            </button>
            {open === i && (
              <div className="bg-white rounded-md border-t-2 border-[#f0603a] mt-1 px-6 py-6 text-neutral-800 leading-7">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function useVisible() {
  const get = () => (window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 3 : 2);
  const [v, setV] = useState(get);
  useEffect(() => {
    const onResize = () => setV(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return v;
}

function LogoCarousel() {
  const visible = useVisible();
  const n = clients.length;
  const [start, setStart] = useState(0); // first visible card
  const [dir, setDir] = useState(0); // 1 = next, -1 = prev, 0 = idle
  const [paused, setPaused] = useState(false);

  // 1 card before + visible cards + 1 card after (circular)
  const items = Array.from({ length: visible + 2 }, (_, i) => clients[(start - 1 + i + n * 5) % n]);
  const slot = 100 / (visible + 2); // one card width, in % of the track

  const go = (d) => {
    if (dir === 0) setDir(d);
  };

  const handleEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    setStart((s) => (s + dir + n) % n);
    setDir(0);
  };

  // auto-play (pauses on hover)
  useEffect(() => {
    if (paused || dir !== 0) return;
    const t = setTimeout(() => setDir(1), 2500);
    return () => clearTimeout(t);
  }, [paused, dir, start]);

  return (
    <div className="mt-10 flex items-center gap-4">
      <button aria-label="Previous" onClick={() => go(-1)} className="text-white">
        <FaChevronLeft />
      </button>

      <div className="flex-1 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div
          className="flex"
          onTransitionEnd={handleEnd}
          style={{
            width: `${((visible + 2) * 100) / visible}%`,
            transform: `translateX(-${(1 + dir) * slot}%)`,
            transition: dir !== 0 ? "transform 500ms ease" : "none",
          }}
        >
          {items.map((c, i) => (
            <div key={i} className="px-3 shrink-0" style={{ width: `${slot}%` }}>
              <div className="bg-white rounded-2xl border-2 border-[#f0603a] h-44 flex items-center justify-center p-4">
                <img src={c.src} alt={c.name} className="max-h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button aria-label="Next" onClick={() => go(1)} className="text-white">
        <FaChevronRight />
      </button>
    </div>
  );
}

function CtaAndClients() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div
        className="rounded-3xl bg-neutral-700/60 bg-cover bg-center px-8 md:px-12 py-14"
        style={{ backgroundImage: "linear-gradient(rgba(38,38,38,.9),rgba(38,38,38,.9)), url('/images/cta-bg.jpg')" }} // TODO
      >
        <h2 className="text-white font-bold text-4xl sm:text-6xl leading-tight">Let’s Build A Website That Works As Hard As You Do</h2>
        <p className="text-white mt-6 max-w-5xl">
          Whether you’re launching a new brand, upgrading an outdated website, or looking to generate more leads online, we’ll help you create a digital presence designed for growth.
        </p>
        <a href="/contact" className={`${ACCENT} inline-block text-white rounded-full px-8 py-3 mt-8`}>
          Discuss Your Website Project
        </a>
      </div>

      <p className="text-white text-center uppercase mt-16">Trusted by growing businesses across industries</p>
      <LogoCarousel />
    </section>
  );
}

/* ---------- PAGE ---------- */
export default function WebDevelopment() {
  return (
    <main className="bg-[#1c1c1c] font-sans overflow-x-hidden">
      <Hero />
      <HeroParallaxImage />
      <CustomersOnline />
      <GrowthPlatforms />
      <FeatureList />
      <Benefits />
      <Process />
      <WhyChoose />
      <Faqs />
      <CtaAndClients />
    </main>
  );
}