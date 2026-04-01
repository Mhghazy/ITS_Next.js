"use client";
import { motion } from "framer-motion";
import { getAssetUrl } from '@/utils/paths';

export default function ResidentialPools() {
  return (
    <main className="flex min-h-screen flex-col pt-[48px] lg:pt-[96px]">
      <section className="relative w-full min-h-[calc(100vh-96px)] flex items-center bg-black overflow-hidden">
        {/* Background Image - 'show all image width and height' addressed with full layout and object-cover */}
        <div className="absolute inset-0 z-0">
          <img 
            src={getAssetUrl("/assets/hero.jpg")}
            alt="Residential Pools Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column: Text Content */}
          <motion.div 
            className="flex-1 text-white max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-secondary)] drop-shadow-lg capitalize">
              Residential Pools
            </h1>
            <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-200">
              Luxury, Comfort, and Personal Retreat – Right at Home
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Whether you dream of a peaceful backyard oasis or a modern pool for family fun and fitness, ITS Group brings your vision to life with expert design and execution. We build pools that are not only beautiful but engineered to last.
            </p>
          </motion.div>

          {/* Right Column: Contact Form (Replacing fluentform) */}
          <motion.div 
            className="w-full md:w-[450px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Start Your Dream Pool</h3>
              <form className="flex flex-col gap-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 focus:ring-2 focus:ring-[var(--color-primary)] placeholder-gray-500 text-gray-900 outline-none transition-all" required />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 focus:ring-2 focus:ring-[var(--color-primary)] placeholder-gray-500 text-gray-900 outline-none transition-all" required />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 focus:ring-2 focus:ring-[var(--color-primary)] placeholder-gray-500 text-gray-900 outline-none transition-all" required />
                </div>
                <div>
                  <textarea rows={4} placeholder="Tell us about your vision..." className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 focus:ring-2 focus:ring-[var(--color-primary)] placeholder-gray-500 text-gray-900 outline-none resize-none transition-all" required></textarea>
                </div>
                <button type="submit" className="w-full py-4 mt-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] text-white font-bold rounded-lg transition-all duration-300 uppercase tracking-wider shadow-lg">
                  Get a Free Quote
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
