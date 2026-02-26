'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Waves, Settings, Gem, Network, Download } from 'lucide-react';
import { getAssetUrl } from '@/utils/paths';

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative py-32 border-b border-gray-100 flex items-center justify-center min-h-[400px]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={getAssetUrl("/assets/images/banisweef-1.jpg")}
                        alt="About Us Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-[#02022f]/70 mix-blend-multiply"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-200 leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <strong className="font-bold text-white">I.T.S GROUP</strong> was established in 1996 as an energetic and highly skilled company in the field of contracting services.
                    </motion.p>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Box 1 */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Staff</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Depending on more than 35 years of experience starting from chairman, executing manager, technical office engineers, site engineers to technical staff with supporting administrative departments they are capable to handle all the tasks to execute complete turnkey projects or part of it.
                            </p>
                        </motion.div>

                        {/* Box 2 */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                <Waves className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Services</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <strong className="font-bold">I.T.S Group</strong> offers full services from the initial idea, project design to construction, supply, installation, startup, commissioning, operation & maintenance phases.
                            </p>
                        </motion.div>

                        {/* Box 3 */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                <Settings className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Process</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <strong className="font-bold">I.T.S Group</strong> dedicated specialists are capable of tracking the project from the phase of feasibility evaluation, site survey, data gathering and system design through equipment selection phase, preparing the engineering documents, supply and installation of equipment and material until successful commissioning, system start-up and handing over to the client.
                            </p>
                        </motion.div>

                        {/* Box 4 */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                <Gem className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Special Designs</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <strong className="font-bold">I.T.S Group</strong> professionals can implement special designs per clients requests as tailor-made projects.
                            </p>
                        </motion.div>

                        {/* Box 5 */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                <Network className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">After Sale Services</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <strong className="font-bold">I.T.S Group</strong> offers full services after handing over starting from Operations & maintenance contracts, Equipment, spare parts & consumables delivery.
                                <br /><br />
                                Technical support for clients through site visits, inspections, technical advice & reports.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Activities & Video Section */}
            <section className="py-24 px-6 bg-gray-50 border-t border-b border-gray-100">
                <div className="max-w-[1140px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Activities List */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                            <span className="text-[var(--color-primary)]">I.T.S GROUP</span> activities covers multiple fields such as:
                        </h2>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Civil Works",
                                "Water Features",
                                "Public & Private Swimming Pools",
                                "Olympic & Training Pools",
                                "Hydro Therapy, Aquariums, Dolphinariums, Equines Pools",
                                "Water Display Systems & Fountains",
                                "Artificial Lakes & Lagoons",
                                "Aqua Parks",
                                "Water Stations",
                                "Plumbing"
                            ].map((activity, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] flex-shrink-0" />
                                    <span className="font-medium text-[15px]">{activity}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-500 italic">All related facilities.</p>
                    </motion.div>

                    {/* Right: Video Embed */}
                    <motion.div
                        className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl relative bg-black"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/U9RQGlkijhU?controls=1&rel=0"
                            title="ITS Group Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                </div>
            </section>

            {/* Starfish Meaning Section */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-[1140px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div
                        className="relative rounded-[2rem] overflow-hidden aspect-[16/10] shadow-2xl group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="https://itsgroup-co.com/wp-content/uploads/2022/07/star-copy-768x458.jpg"
                            alt="Starfish On Blue Surface"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        className="flex flex-col justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                            “Starfish Belong to the Water”
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            The Starfish is <strong className="font-bold text-gray-900">I.T.S Group’s</strong> symbol of Independency, Renewal, Regeneration, Inspiration & Guidance.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            We have chosen the starfish with its special properties as a symbol for a number of good reasons, such as:
                        </p>

                        <div className="space-y-6">
                            {[
                                "Their bodies have a five-point radial configuration, even if they have over five arms. Spiritually, five is the number of thoughts put to action, independence, non-conformity, & versatility.",
                                "Starfish can regenerate each of its limbs should they lose one, representing renewal.",
                                "Starfish have the innate ability to discern new possibilities and opportunities.",
                                "Starfish illustrates the phrase “as above, so below” perfectly, looking like the stars above."
                            ].map((point, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed font-light">{point}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA Block */}
            <section className="py-20 px-6 bg-[var(--color-primary)] text-center">
                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="#"
                        className="inline-flex items-center gap-3 bg-[var(--color-secondary)] text-[var(--color-primary)] px-10 py-5 rounded-full font-extrabold text-lg hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                        <Download className="w-6 h-6" />
                        Download Our Portfolio
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
