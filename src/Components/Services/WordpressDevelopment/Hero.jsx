import { FaWordpress, FaShopify, FaFigma } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            {/* banner */}
            <section
                className="h-40 sm:h-52 md:h-[340px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 60%, #1c1c1c 100%), url('/images/wordpress-banner.jpg')" }} // TODO
            >
                <h1 className="text-white font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight text-center">
                    WordPress Development
                </h1>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
                <h2 className="font-extrabold uppercase leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl">
                    Powerful WordPress Websites
                    <span className="block text-neutral-400 mt-3 text-3xl sm:text-4xl">Built For Business Growth</span>
                </h2>
                <div>
                    <p className="text-white text-justify leading-8">
                        From business websites to high-converting eCommerce stores, we build WordPress solutions that help brands attract customers, generate leads, and scale with confidence.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a href="/contact" className="bg-neutral-800 text-white rounded-full px-8 py-3">Book A Discovery Call</a>
                        <span className="flex-1" />
                        {[FaWordpress, FaShopify, FaFigma].map((Icon, i) => (
                            <span key={i} className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white"><Icon /></span>
                        ))}
                    </div>
                </div>
            </section>

            {/* full-width WordPress logo strip */}
            <img src="/images/wordpress-strip.png" alt="WordPress" className="w-full max-h-[710px] object-cover" /> {/* TODO */}
        </>
    );
}