'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getAssetUrl } from '@/utils/paths';

// ── Typewriter paragraph ────────────────────────────────────────────────────
// Splits the text into word tokens (preserving bold spans) and reveals them
// one by one with a stagger, simulating the feel of text being written.
// Direction is detected at runtime from <html dir="..."> so it works for
// both English (LTR → words appear left→right) and Arabic (RTL → right→left).

type Token = { text: string; bold: boolean };

const TOKENS: Token[] = [
    { text: 'I.T.S Group', bold: true },
    { text: ' offers a great variety of services, these services are not limited only to ', bold: false },
    { text: 'Residential Sector', bold: true },
    { text: ' which includes villas owners & compounds or ', bold: false },
    { text: 'Commercial Sector', bold: true },
    { text: ' which includes real estate developers, touristic projects, social & sporting clubs, contracting companies & governmental sectors, but many more.', bold: false },
];

function TypewriterParagraph() {
    const [isRtl, setIsRtl] = useState(false);

    useEffect(() => {
        setIsRtl(document.documentElement.getAttribute('dir') === 'rtl');
    }, []);

    // For RTL we reverse the token order so words appear right→left
    const tokens = isRtl ? [...TOKENS].reverse() : TOKENS;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.06,
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 6 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.18, ease: 'easeOut' as const },
        },
    };

    return (
        <motion.p
            className="text-xl text-white leading-relaxed drop-shadow-md"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {tokens.map((token, i) =>
                token.text.split(' ').map((word, j) =>
                    word ? (
                        <motion.span
                            key={`${i}-${j}`}
                            variants={wordVariants}
                            style={{ display: 'inline-block', marginRight: '0.25em' }}
                        >
                            {token.bold ? <strong className="font-bold text-white">{word}</strong> : word}
                        </motion.span>
                    ) : null
                )
            )}
        </motion.p>
    );
}

// ── Gate-reveal heading ──────────────────────────────────────────────────────
// The wrapper clips the heading with overflow:hidden (the "gate").
// The heading slides in from fully outside: left in LTR, right in RTL.
// Because the parent clips it, it looks like it's being revealed behind a shutter.
function DirectionalHeading() {
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
                Services
            </motion.h1>
        </div>
    );
}

export default function Services() {
    return (
        <main className="min-h-screen bg-white">
            {/* ── Hero Section ── */}
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-89a1395 elementor-section-boxed elementor-section-height-default relative overflow-hidden flex items-center justify-center py-40 lg:py-48 min-h-screen"
                data-id="89a1395"
                data-element_type="section"
            >
                {/* Background Image */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    <Image
                        src={getAssetUrl('/assets/images/services-hero-pool.jpg')}
                        alt="Swimming Pool Services"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </motion.div>

                {/* Dark overlay */}
                <div className="elementor-background-overlay absolute inset-0 bg-[#02022f]/50 mix-blend-multiply z-0" />

                {/* Content */}
                <div className="elementor-container elementor-column-gap-default relative z-10 w-full max-w-[1140px] mx-auto px-4">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-03456fe" data-id="03456fe" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated text-center">

                            <div className="elementor-element elementor-element-5f7cf1a elementor-widget elementor-widget-heading" data-id="5f7cf1a" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <DirectionalHeading />
                                </div>
                            </div>

                            <div className="elementor-element elementor-element-bc2f01c elementor-widget elementor-widget-text-editor" data-id="bc2f01c" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container max-w-2xl mx-auto">
                                    <TypewriterParagraph />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── Services Cards Section ── */}
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-8fdfa76 elementor-section-content-middle elementor-section-boxed elementor-section-height-default py-20 bg-white"
                data-id="8fdfa76"
                data-element_type="section"
            >
                <div className="elementor-container elementor-column-gap-wide max-w-[1140px] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1: Water Features */}
                        <motion.div
                            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c35e8cd group flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.13)] transition-shadow duration-500"
                            data-id="c35e8cd"
                            data-element_type="column"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-56">
                                <Image
                                    src={getAssetUrl('/assets/images/P2051252-1024x768.jpg')}
                                    alt="Water Features"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#02022f]/0 group-hover:bg-[#02022f]/30 transition-colors duration-500" />
                            </div>
                            {/* Body */}
                            <div className="flex flex-col items-center text-center p-8 flex-1">
                                <h3 className="elementor-heading-title elementor-size-default text-2xl font-bold text-[#02022f] mb-6">
                                    Water Features
                                </h3>
                                <a
                                    href="https://itsgroup-co.com/water-features/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow mt-auto inline-flex items-center gap-2 px-6 py-3 bg-[#02022f] text-white text-sm font-semibold rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <span>Explore More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </motion.div>

                        {/* Card 2: General Contracting */}
                        <motion.div
                            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-51c3c3b group flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.13)] transition-shadow duration-500"
                            data-id="51c3c3b"
                            data-element_type="column"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-56">
                                <Image
                                    src={getAssetUrl('/assets/images/gen.jpg')}
                                    alt="General Contracting"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#02022f]/0 group-hover:bg-[#02022f]/30 transition-colors duration-500" />
                            </div>
                            {/* Body */}
                            <div className="flex flex-col items-center text-center p-8 flex-1">
                                <h3 className="elementor-heading-title elementor-size-default text-2xl font-bold text-[#02022f] mb-6">
                                    General Contracting
                                </h3>
                                <a
                                    href="https://itsgroup-co.com/general-contracting/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow mt-auto inline-flex items-center gap-2 px-6 py-3 bg-[#02022f] text-white text-sm font-semibold rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <span>Explore More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </motion.div>

                        {/* Card 3: Operations & Maintenance */}
                        <motion.div
                            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b262852 group flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.13)] transition-shadow duration-500"
                            data-id="b262852"
                            data-element_type="column"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-56">
                                <Image
                                    src={getAssetUrl('/assets/images/Machine-1-1024x768.jpg')}
                                    alt="Operations & Maintenance"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#02022f]/0 group-hover:bg-[#02022f]/30 transition-colors duration-500" />
                            </div>
                            {/* Body */}
                            <div className="flex flex-col items-center text-center p-8 flex-1">
                                <h3 className="elementor-heading-title elementor-size-default text-2xl font-bold text-[#02022f] mb-6">
                                    Operations &amp; Maintenance
                                </h3>
                                <a
                                    href="https://itsgroup-co.com/operation-maintenance/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow mt-auto inline-flex items-center gap-2 px-6 py-3 bg-[#02022f] text-white text-sm font-semibold rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <span>Explore More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </motion.div>

                        {/* Card 4: Artificial Lakes & Lagoons */}
                        <motion.div
                            className="group flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.13)] transition-shadow duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="relative overflow-hidden h-56">
                                <Image
                                    src={getAssetUrl('/assets/images/leasure-1024x768.jpg')}
                                    alt="Artificial Lakes & Lagoons"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#02022f]/0 group-hover:bg-[#02022f]/30 transition-colors duration-500" />
                            </div>
                            <div className="flex flex-col items-center text-center p-8 flex-1">
                                <h3 className="text-2xl font-bold text-[#02022f] mb-6">
                                    Artificial Lakes &amp; Lagoons
                                </h3>
                                <a
                                    href="https://itsgroup-co.com/artificial-lakes-lagoons/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-[#02022f] text-white text-sm font-semibold rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <span>Explore More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </motion.div>

                        {/* Card 5: Salt & Swimmable Lagoons */}
                        <motion.div
                            className="group flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.13)] transition-shadow duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="relative overflow-hidden h-56">
                                <Image
                                    src={getAssetUrl('/assets/images/DSCN2394-768x576.jpg')}
                                    alt="Salt & Swimmable Lagoons"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#02022f]/0 group-hover:bg-[#02022f]/30 transition-colors duration-500" />
                            </div>
                            <div className="flex flex-col items-center text-center p-8 flex-1">
                                <h3 className="text-2xl font-bold text-[#02022f] mb-6">
                                    Salt &amp; Swimmable Lagoons
                                </h3>
                                <a
                                    href="https://itsgroup-co.com/salt-and-swimmable-lagoons/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-[#02022f] text-white text-sm font-semibold rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <span>Explore More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </motion.div>

                        {/* Card 6: Fountain & Water Display */}
                        <motion.div
                            className="group flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.13)] transition-shadow duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="relative overflow-hidden h-56">
                                <Image
                                    src={getAssetUrl('/assets/images/fountain-1024x768.jpg')}
                                    alt="Fountain & Water Display"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#02022f]/0 group-hover:bg-[#02022f]/30 transition-colors duration-500" />
                            </div>
                            <div className="flex flex-col items-center text-center p-8 flex-1">
                                <h3 className="text-2xl font-bold text-[#02022f] mb-6">
                                    Fountain &amp; Water Display
                                </h3>
                                <a
                                    href="https://itsgroup-co.com/fountain-water-display/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-[#02022f] text-white text-sm font-semibold rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <span>Explore More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </main>

    );
}
