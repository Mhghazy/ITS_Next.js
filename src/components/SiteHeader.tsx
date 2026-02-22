"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

// Navigation Data
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact-us' },
];

// Services Dropdown Menu Structure
const servicesMenu = [
    {
        title: 'Swimming Pool',
        href: '/water-features',
        subItems: [
            { name: 'Residential Pools', href: '/residential-pools' },
            { name: 'Commercial', href: '/commercial' },
            { name: 'Olympic Pools', href: '/olympic-pools' },
        ]
    },
    {
        title: 'General Contracting',
        href: '/general-contracting',
        subItems: [
            { name: 'Civil', href: '/civil' },
            { name: 'Electromechanical', href: '/electromechanical' },
        ]
    },
    {
        title: 'Artificial Lakes & lagoons',
        href: '/artificial-lakes',
        subItems: []
    },
    {
        title: 'Salt and Swimmable Lagoons',
        href: '/salt-and-swimmable-lagoons',
        subItems: []
    },
    {
        title: 'Foundation and Water Display',
        href: '/foundation-and-water-display',
        subItems: [
            { name: 'Fountains', href: '/fountains' },
            { name: 'Water Falls', href: '/water-falls' },
            { name: 'Dancing And Music Fountains', href: '/dancing-and-music-fountains' },
        ]
    },
    {
        title: 'Operation & Maintenance',
        href: '/operation-maintenance',
        subItems: []
    },
];

export default function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 bg-gradient-to-b from-[#343458] to-[#1a1a2e] text-white shadow-xl">
            <div className="px-4 lg:px-8 py-1.5 relative flex items-center justify-center">
                {/* Language Button - Absolute Right */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block z-50">
                    <button className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white border border-white/40 rounded-full hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">
                        English
                    </button>
                </div>

                {/* LEFT: Logo - Hidden on mobile, handled by mobile menu header */}
                <div className="flex-shrink-0 hidden lg:block mr-[100px] -mt-4 relative">
                    <Link href="/">
                        <Image
                            className="h-28 w-auto object-contain"
                            src="/assets/logo-full.png"
                            alt="ITS Group"
                            width={220}
                            height={112}
                            priority
                        />
                    </Link>
                </div>

                {/* CENTER: Title, Subtitle, Navigation */}
                <div className="flex flex-col items-center text-center z-10">
                    <div className="mb-1.5 hidden lg:block">
                        <h1 className="text-4xl font-bold tracking-wide">I.T.S - Group</h1>
                        <p className="text-2xl font-light tracking-wide text-gray-300 font-serif">Your Pleasure Is Our Aim</p>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-x-6 mt-4">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-white hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    {item.name}
                                    {item.hasDropdown && (
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Services Dropdown - Vertical List */}
                                {item.hasDropdown && (
                                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                                        <div className="bg-[#1a1a2e] text-white text-left shadow-2xl py-2 min-w-[200px] border border-white">
                                            {/* Swimming Pool */}
                                            <div className="group/submenu relative">
                                                <Link
                                                    href="/water-features"
                                                    className="flex items-center justify-between px-4 py-4 text-base hover:text-[var(--color-secondary)] transition-colors"
                                                >
                                                    <span>Swimming Pool</span>
                                                    <svg className="w-4 h-4 transform group-hover/submenu:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>

                                                {/* Styles for Nested Submenu */}
                                                <div className="absolute left-full top-0 bg-[#1a1a2e] border border-white min-w-[200px] py-2 shadow-xl -ml-[1px] opacity-0 invisible -translate-x-2 transition-all duration-300 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-x-0">
                                                    <Link href="/residential-pools" className="block px-4 py-4 text-sm hover:text-[var(--color-secondary)] transition-colors">
                                                        Residential Pools
                                                    </Link>
                                                    <Link href="/commercial" className="block px-4 py-4 text-sm hover:text-[var(--color-secondary)] transition-colors">
                                                        Commercial
                                                    </Link>
                                                    <Link href="/olympic-pools" className="block px-4 py-4 text-sm hover:text-[var(--color-secondary)] transition-colors">
                                                        Olympic Pools
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* General Contracting */}
                                            <div className="group/submenu relative">
                                                <Link
                                                    href="/general-contracting"
                                                    className="flex items-center justify-between px-4 py-4 text-base hover:text-[var(--color-secondary)] transition-colors"
                                                >
                                                    <span>General Contracting</span>
                                                    <svg className="w-4 h-4 transform group-hover/submenu:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>

                                                {/* Styles for Nested Submenu */}
                                                <div className="absolute left-full top-0 bg-[#1a1a2e] border border-white min-w-[200px] py-2 shadow-xl -ml-[1px] opacity-0 invisible -translate-x-2 transition-all duration-300 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-x-0">
                                                    <Link href="/civil" className="block px-4 py-4 text-sm hover:text-[var(--color-secondary)] transition-colors">
                                                        Civil
                                                    </Link>
                                                    <Link href="/electromechanical" className="block px-4 py-4 text-sm hover:text-[var(--color-secondary)] transition-colors">
                                                        Electromechanical
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Artificial Lakes & lagoons */}
                                            <Link
                                                href="/artificial-lakes"
                                                className="block px-4 py-4 text-base hover:text-[var(--color-secondary)] transition-colors"
                                            >
                                                Artificial Lakes & lagoons
                                            </Link>

                                            {/* Salt and Swimmable Lagoons */}
                                            <Link
                                                href="/salt-and-swimmable-lagoons"
                                                className="block px-4 py-4 text-base hover:text-[var(--color-secondary)] transition-colors"
                                            >
                                                Salt and Swimmable Lagoons
                                            </Link>

                                            {/* Foundation and Water Display */}
                                            <div className="group/submenu relative">
                                                <Link
                                                    href="/foundation-and-water-display"
                                                    className="flex items-center justify-between px-4 py-4 text-base hover:text-[var(--color-secondary)] transition-colors"
                                                >
                                                    <span>Foundation and Water Display</span>
                                                    <svg className="w-4 h-4 transform group-hover/submenu:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>

                                                {/* Styles for Nested Submenu */}
                                                <div className="absolute left-full top-0 bg-[#1a1a2e] border border-white min-w-[200px] py-2 shadow-xl -ml-[1px] opacity-0 invisible -translate-x-2 transition-all duration-300 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-x-0">
                                                    <Link href="/fountains" className="block px-4 py-4 text-sm hover:text-[var(--color-secondary)] transition-colors">
                                                        Fountains
                                                    </Link>
                                                    <Link href="/water-falls" className="block px-4 py-4 text-sm hover:text-[var(--color-secondary)] transition-colors">
                                                        Water Falls
                                                    </Link>
                                                    <Link href="/dancing-and-music-fountains" className="block px-4 py-4 text-sm hover:text-[var(--color-secondary)] transition-colors">
                                                        Dancing and Musical Fountains
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Operation & Maintenance */}
                                            <Link
                                                href="/operation-maintenance"
                                                className="block px-4 py-4 text-base hover:text-[var(--color-secondary)] transition-colors"
                                            >
                                                Operation & Maintenance
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    {/* Mobile Logo (Visible only on mobile) */}
                    <div className="lg:hidden flex items-center">
                        <Link href="/">
                            <Image className="h-12 w-auto" src="/assets/logo-full.png" alt="ITS Group" width={150} height={48} />
                        </Link>
                    </div>
                </div>

                {/* RIGHT: Sea Star & Socials */}
                <div className="flex-shrink-0 hidden lg:flex flex-col items-center ml-[100px] -mt-8 relative">

                    {/* Sea Star Image */}
                    <div className="relative h-40 w-40 mb-2 -z-10">
                        <Image
                            src="/assets/sea-star.png"
                            alt="Sea Star"
                            fill
                            className="object-contain drop-shadow-md"
                        />
                        {/* Fallback text if image missing (for dev) */}
                        <span className="sr-only">Sea Star</span>
                    </div>

                    {/* Social Icons - under sea star */}
                    <div className="flex items-center gap-2 -mt-12">
                        <a href="https://www.facebook.com/its.group.swimming.pools" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors bg-white/10 p-1.5 rounded-full hover:bg-white/20">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/its.group.swimming.pools/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors bg-white/10 p-1.5 rounded-full hover:bg-white/20">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@its.group.swimmingpools" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors bg-white/10 p-1.5 rounded-full hover:bg-white/20">
                            <span className="sr-only">YouTube</span>
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a href="https://wa.me/201001611579" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors bg-white/10 p-1.5 rounded-full hover:bg-white/20">
                            <span className="sr-only">WhatsApp</span>
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.012 2.01c-5.506 0-9.989 4.478-9.993 9.984a9.96 9.96 0 001.332 4.986L2 22l5.06-1.319a9.954 9.954 0 004.952 1.316h.005c5.508 0 9.99-4.48 9.994-9.986a9.97 9.97 0 00-2.924-7.066A9.958 9.958 0 0012.012 2.01zm0 18.32a8.31 8.31 0 01-4.242-1.158l-.304-.18-3.15.822.842-3.057-.197-.315a8.312 8.312 0 01-1.265-4.444c.003-4.582 3.737-8.311 8.322-8.311a8.28 8.28 0 015.889 2.436 8.284 8.284 0 012.44 5.887c-.004 4.583-3.738 8.312-8.335 8.32zM16.57 14.2c-.25-.125-1.482-.729-1.712-.813-.229-.083-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.167-.291.188-.541.063-.25-.125-1.055-.389-2.01-1.238-.739-.656-1.237-1.467-1.383-1.716-.145-.25-.015-.386.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.416.084-.167.042-.313-.02-.438-.063-.125-.563-1.354-.771-1.854-.203-.49-.406-.416-.562-.416-.146 0-.313 0-.479 0-.167 0-.438.062-.667.312-.229.25-.875.854-.875 2.083s.896 2.417 1.021 2.584c.125.167 1.76 2.673 4.256 3.765 2.496 1.092 2.496.729 2.954.688.458-.042 1.482-.604 1.688-1.188.208-.583.208-1.083.146-1.187-.063-.105-.229-.167-.479-.292z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://x.com/itsgroup91" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors bg-white/10 p-1.5 rounded-full hover:bg-white/20">
                            <span className="sr-only">X (Twitter)</span>
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="https://www.snapchat.com/add/its.group?share_id=at-kFzJlwJA&locale=en-US" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors bg-white/10 p-1.5 rounded-full hover:bg-white/20">
                            <span className="sr-only">Snapchat</span>
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.005 2.012c-4.321 0-5.835 2.185-5.918 4.23-.008.204.148.273.284.225.215-.078.653-.223 1.157-.223 1.258 0 1.637.766 1.637 1.574 0 .979-.766 1.487-1.42 1.666-.341.094-.654.127-.723.473-.082.41.364.557.575.641.341.135 1.543.514 1.705 1.791.077.604-.337 1.711-1.479 2.219-1.078.479-2.583.15-2.791-.018-.179-.145-.295-.084-.298.055-.008.385.093.535.485.629.471.111 2.203.279 2.502.738.252.385-.436 1.846-3.722 1.889-1.285.016-1.576.248-1.58.428-.006.215.344.385.928.385.908 0 2.213-.242 4.016-1.35 1.354-.834 2.871-.85 4.364.025 1.674 1.018 2.924 1.3 3.903 1.326.697.02 1.055-.205 1.05-.445-.008-.225-.332-.422-1.554-.457-3.197-.09-3.95-1.523-3.69-1.928.307-.478 2.067-.629 2.535-.74.394-.093.493-.244.484-.628-.008-.139-.12-.201-.299-.056-.208.169-1.713.499-2.792.02-1.141-.508-1.556-1.615-1.478-2.219.162-1.277 1.364-1.656 1.705-1.791.211-.084.657-.231.575-.642-.069-.345-.382-.379-.723-.473-.654-.179-1.42-.686-1.42-1.666 0-.809.379-1.574 1.637-1.574.504 0 .942.146 1.157.223.136.049.292-.021.284-.225-.083-2.045-1.597-4.23-5.918-4.23z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button - Positioned absolutely on the right for mobile */}
                <div className="flex lg:hidden ml-auto">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
            {/* Mobile Menu Dialog */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">ITS Group</span>
                            <Image className="h-12 w-auto" src="/assets/logo-full.png" alt="ITS Group" width={150} height={48} />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-1.4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
