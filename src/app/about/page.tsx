'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetUrl } from '@/utils/paths';
import { Users, Waves, Settings, Gem, Network, CheckCircle2, Star, Download } from 'lucide-react';

// ── Gate-reveal heading ───────────────────────────────────────────────────────
// Wraps the heading in overflow:hidden (the "gate") so the text slides in from
// fully off-screen — left in LTR (English), right in RTL (Arabic).
function GateHeading({ text }: { text: string }) {
    const [slideX, setSlideX] = useState('-110%');

    useEffect(() => {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        setSlideX(isRtl ? '110%' : '-110%');
    }, []);

    return (
        <div style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.h1
                className="elementor-heading-title elementor-size-default text-5xl md:text-6xl font-extrabold text-white mb-6"
                initial={{ x: slideX }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                {text}
            </motion.h1>
        </div>
    );
}

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-eedf4fc elementor-section-boxed elementor-section-height-default elementor-section-height-default relative overflow-hidden flex items-center justify-center py-40 lg:py-48 min-h-screen"
                data-id="eedf4fc"
                data-element_type="section"
                data-settings='{"background_background":"classic","_ha_eqh_enable":false}'
            >
                {/* Background Image */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <Image
                        src={getAssetUrl("/assets/images/banisweef-1.jpg")}
                        alt="About Us Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </motion.div>

                <div className="elementor-background-overlay absolute inset-0 bg-[#02022f]/40 mix-blend-multiply z-0"></div>

                <div className="elementor-container elementor-column-gap-default relative z-10 w-full max-w-[1600px] mx-auto px-4">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a2406a5" data-id="a2406a5" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated text-center">

                            <div className="elementor-element elementor-element-c0c1e31 elementor-widget elementor-widget-heading" data-id="c0c1e31" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <GateHeading text="About Us" />
                                </div>
                            </div>

                            <div className="elementor-element elementor-element-fdf7333 elementor-widget elementor-widget-text-editor" data-id="fdf7333" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <motion.p
                                        className="text-xl text-white leading-relaxed drop-shadow-md"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    >
                                        <b className="font-bold text-white">I.T.S GROUP</b> was established in 1996 as an energetic and highly skilled company in the field of contracting services.
                                    </motion.p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-[#fafafa]">
                <div className="container mx-auto px-4 max-w-[1140px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

                        {/* Box 1: Staff */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="w-16 h-16 bg-[#02022f]/5 text-[#02022f] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#02022f] group-hover:text-white transition-colors duration-300">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Staff</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Depending on more than 35 years of experience starting from chairman, executing manager, technical office engineers, site engineers to technical staff with supporting administrative departments they are capable to handle all the tasks to execute complete turnkey projects or part of it.
                            </p>
                        </motion.div>

                        {/* Box 2: Services */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="w-16 h-16 bg-[#02022f]/5 text-[#02022f] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#02022f] group-hover:text-white transition-colors duration-300">
                                <Waves className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Services</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <strong className="font-semibold text-gray-900">I.T.S Group</strong> offers full services from the initial idea, project design to construction, supply, installation, startup, commissioning, operation &amp; maintenance phases.
                            </p>
                        </motion.div>

                        {/* Box 3: Process */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="w-16 h-16 bg-[#02022f]/5 text-[#02022f] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#02022f] group-hover:text-white transition-colors duration-300">
                                <Settings className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Process</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <strong className="font-semibold text-gray-900">I.T.S Group</strong> dedicated specialists are capable of tracking the project from feasibility evaluation to system design through equipment selection until successful commissioning and handing over to the client.
                            </p>
                        </motion.div>

                        {/* Box 4: Special Designs */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="w-16 h-16 bg-[#02022f]/5 text-[#02022f] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#02022f] group-hover:text-white transition-colors duration-300">
                                <Gem className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Special Designs</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <strong className="font-semibold text-gray-900">I.T.S Group</strong> professionals can implement special designs per clients requests as tailor-made projects.
                            </p>
                        </motion.div>

                        {/* Box 5: After Sale Services */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="w-16 h-16 bg-[#02022f]/5 text-[#02022f] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#02022f] group-hover:text-white transition-colors duration-300">
                                <Network className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">After Sale Services</h3>
                            <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                                <p><strong className="font-semibold text-gray-900">I.T.S Group</strong> offers full services after handing over starting from Operations &amp; maintenance contracts, Equipment, spare parts &amp; consumables delivery.</p>
                                <p>Technical support for clients through site visits, inspections, technical advice &amp; reports.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Activities & Video Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-[1140px]">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Column: Text & List */}
                        <motion.div
                            className="w-full lg:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative mb-10">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
                                    <motion.span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#02022f] via-blue-600 to-[#02022f] bg-[length:200%_auto]"
                                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                                    >
                                        I.T.S GROUP
                                    </motion.span><br />
                                    <span className="font-light">Activities</span>
                                </h2>
                                <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                                    Our comprehensive expertise covers highly specialized engineering and construction fields:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    "Civil Works",
                                    "Water Features",
                                    "Public & Private Swimming Pools",
                                    "Olympic & Training Pools",
                                    "Hydro Therapy & Aquariums",
                                    "Water Display & Fountains",
                                    "Artificial Lakes & Lagoons",
                                    "Aqua Parks",
                                    "Water Stations",
                                    "Plumbing"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(2,2,47,0.08)] hover:border-[#02022f]/20 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#02022f] transition-colors duration-300">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <span className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors duration-300 text-sm leading-tight">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#02022f]/5 to-transparent px-6 py-4 rounded-xl border-l-4 border-[#02022f]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <p className="text-[#02022f] font-semibold text-lg italic">
                                    And all related facilities.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Video */}
                        <motion.div
                            className="w-full lg:w-1/2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border border-gray-100 group bg-gray-900">
                                <iframe
                                    className="w-full h-full absolute inset-0"
                                    src="https://www.youtube.com/embed/U9RQGlkijhU?controls=1&rel=0"
                                    title="I.T.S Movie"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Starfish Section (Light Theme UI) */}
            <section className="py-24 bg-white relative overflow-hidden text-gray-900 border-t border-gray-50">

                {/* Decorative Animated Stars Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {[
                        { top: '15%', left: '10%', size: 24, delay: 0 },
                        { top: '25%', left: '85%', size: 16, delay: 1.2 },
                        { top: '80%', left: '8%', size: 20, delay: 0.5 },
                        { top: '85%', left: '90%', size: 28, delay: 2.1 },
                        { top: '45%', left: '50%', size: 12, delay: 1.5 },
                        { top: '12%', left: '45%', size: 18, delay: 0.8 },
                    ].map((star, i) => (
                        <motion.div
                            key={`bg-star-${i}`}
                            className="absolute text-yellow-300"
                            style={{ top: star.top, left: star.left }}
                            animate={{
                                opacity: [0, 0.3, 0],
                                scale: [0.8, 1.2, 0.8],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 10 + (i % 3) * 2,
                                delay: star.delay,
                                ease: "linear"
                            }}
                        >
                            <Star size={star.size} className="fill-yellow-300/50" />
                        </motion.div>
                    ))}
                </div>

                <div className="container mx-auto px-4 max-w-[1140px] relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Column: Image */}
                        <motion.div
                            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        >
                            <motion.div
                                className="relative inline-block scale-95 md:scale-100 lg:scale-[1.05] xl:scale-110 transform origin-center my-8 md:my-0"
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                            >
                                <img
                                    src="https://itsgroup-co.com/wp-content/uploads/2022/07/star-copy-768x458.jpg"
                                    alt="Starfish Symbolism"
                                    width={768}
                                    height={458}
                                    className="max-w-full h-auto block mix-blend-multiply"
                                />
                                {/* Physical white vignette overlay to forcefully hide the JPEG's harsh borders */}
                                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,white_85%)]"></div>
                                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_20px_white]"></div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Text & Features */}
                        <motion.div
                            className="w-full lg:w-1/2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#02022f] mb-6 leading-tight font-serif tracking-wide">
                                        “Starfish Belong to the Water”
                                    </h2>
                                    <div className="w-16 h-1 bg-yellow-400 mb-6 rounded-full"></div>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                        The Starfish is <strong className="text-[#02022f] font-bold">I.T.S Group’s</strong> symbol of Independency, Renewal, Regeneration, Inspiration &amp; Guidance.
                                    </p>
                                    <p className="text-gray-500 mb-8">
                                        We have chosen the starfish with its special properties as a symbol for a number of good reasons, such as:
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    {[
                                        "Their bodies have a five-point radial configuration, even if they have over five arms. Spiritually, five is the number of thoughts put to action, independence, non-conformity, & versatility.",
                                        "Starfish can regenerate each of its limbs should they lose one, representing renewal.",
                                        "Starfish have the innate ability to discern new possibilities and opportunities.",
                                        "Starfish illustrates the phrase “as above, so below” perfectly, looking like the stars above."
                                    ].map((text, index) => (
                                        <motion.div
                                            key={index}
                                            className="group flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#D4AF37]/30 transition-all duration-300"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                        >
                                            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-1 relative overflow-hidden transition-colors duration-[1000ms]">
                                                <motion.div
                                                    className="absolute inset-0 bg-[#D4AF37]/20 rounded-full"
                                                    animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                                />
                                                <motion.div
                                                    animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
                                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                                    className="group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-[1200ms] ease-out"
                                                >
                                                    <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]/30 group-hover:fill-[#D4AF37]/60 relative z-10 transition-all duration-[1000ms]" />
                                                </motion.div>
                                            </div>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                {text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Download Portfolio CTA */}
            <section className="py-24 relative overflow-hidden bg-[#02022f]">
                {/* Animated Gradient Background Loop */}
                <motion.div
                    className="absolute inset-0 z-0 opacity-80"
                    style={{
                        background: "linear-gradient(-45deg, #02022f, #172554, #424c6dff, #02022f)",
                        backgroundSize: "400% 400%"
                    }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                />

                {/* Ambient circular glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3 z-0"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3 z-0"></div>

                <div className="container mx-auto px-4 max-w-[900px] relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
                    >
                        {/* Gleam top border */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                        >
                            <Download className="w-10 h-10 text-[#D4AF37]" />
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-serif tracking-wide">
                            Explore Our Complete Journey
                        </h2>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                            Download the official <strong className="text-white">I.T.S Group Company Profile</strong> to discover our rich history, specialized services, and an extensive track record of engineering excellence.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-gradient-to-r from-[#D4AF37] to-yellow-500 rounded-full text-[#02022f] font-bold text-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Download Portfolio (PDF)</span>
                            <Download className="w-6 h-6 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
                            {/* Animated gleam container */}
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </motion.button>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}
