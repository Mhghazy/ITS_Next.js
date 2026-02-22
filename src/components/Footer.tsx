import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Smartphone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#02022f] text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Logo & Contact */}
                    <div className="space-y-6">
                        <div className="mb-6">
                            <img
                                src="https://itsgroup-co.com/wp-content/uploads/2025/04/itsgroup-Logo-psd-1.png"
                                alt="ITS Group Logo"
                                className="w-48 h-auto object-contain bg-white/10 p-2 rounded-lg"
                            />
                        </div>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:20237618910" className="flex items-center gap-3 text-gray-300 hover:text-[#ffc107] transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffc107] group-hover:text-[#02022f] transition-all">
                                        <Phone className="w-4 h-4" />
                                    </span>
                                    <span>20237618910</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:20233378374" className="flex items-center gap-3 text-gray-300 hover:text-[#ffc107] transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffc107] group-hover:text-[#02022f] transition-all">
                                        <Phone className="w-4 h-4" />
                                    </span>
                                    <span>20233378374</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:201001611579" className="flex items-center gap-3 text-gray-300 hover:text-[#ffc107] transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffc107] group-hover:text-[#02022f] transition-all">
                                        <Smartphone className="w-4 h-4" />
                                    </span>
                                    <span>01001611579</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:201000155419" className="flex items-center gap-3 text-gray-300 hover:text-[#ffc107] transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffc107] group-hover:text-[#02022f] transition-all">
                                        <Smartphone className="w-4 h-4" />
                                    </span>
                                    <span>01000155419</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@itsgroup-co.com" className="flex items-center gap-3 text-gray-300 hover:text-[#ffc107] transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffc107] group-hover:text-[#02022f] transition-all">
                                        <Mail className="w-4 h-4" />
                                    </span>
                                    <span>info@itsgroup-co.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:tech5@itsgroup-co.com" className="flex items-center gap-3 text-gray-300 hover:text-[#ffc107] transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffc107] group-hover:text-[#02022f] transition-all">
                                        <Mail className="w-4 h-4" />
                                    </span>
                                    <span>tech5@itsgroup-co.com</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 group">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffc107] group-hover:text-[#02022f] transition-all mt-1 flex-shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </span>
                                <span className="text-sm leading-6">44A, Misr Insurance Bldg., – Dokki St. – Giza – Egypt</span>
                            </li>
                        </ul>
                        {/* Social Icons */}
                        <div className="flex gap-4 pt-4">
                            <a href="https://www.facebook.com/its.group.swimming.pools" target="_blank" className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <Facebook className="w-5 h-5 fill-current" />
                            </a>
                            <a href="https://www.instagram.com/its.group.swimming.pools/" target="_blank" className="w-10 h-10 rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.youtube.com/@its.group.swimmingpools" target="_blank" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <Youtube className="w-5 h-5 fill-current" />
                            </a>
                            <a href="https://wa.me/201001611579" target="_blank" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <Phone className="w-5 h-5 fill-current" />
                            </a>
                            <a href="https://x.com/itsgroup91" target="_blank" className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <Twitter className="w-5 h-5 fill-current" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative pb-3 border-b-2 border-[#ffc107] inline-block">Quick Link</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Services', href: '/services' },
                                { name: 'Gallery', href: '/gallery' },
                                { name: 'Products', href: '/products' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact', href: '/contact-us' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-gray-300 hover:text-[#ffc107] hover:pl-2 transition-all block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Top Service */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative pb-3 border-b-2 border-[#ffc107] inline-block">Top Service</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Residential Pools', href: '/residential-pools' },
                                { name: 'Commercial', href: '/commercial' },
                                { name: 'Electromechanical', href: '/electromechanical' },
                                { name: 'Civil', href: '#' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-gray-300 hover:text-[#ffc107] hover:pl-2 transition-all block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Top Products */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative pb-3 border-b-2 border-[#ffc107] inline-block">Top Products</h3>
                        <ul className="space-y-3">
                            {[
                                'Pumps',
                                'Filters',
                                'Accessories',
                                'Maintenance case',
                            ].map((item, idx) => (
                                <li key={idx} className="text-gray-300 hover:text-[#ffc107] transition-colors cursor-default">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} ITS GROUP. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
