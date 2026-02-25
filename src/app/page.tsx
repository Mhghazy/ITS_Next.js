"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, Building2, Wrench, CheckCircle2, ArrowRightCircle, Phone, Award, Check } from "lucide-react";
import { getAssetUrl } from '@/utils/paths';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-[48px] lg:pt-[96px]">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-100px)] flex items-start justify-center pt-20 bg-[var(--color-primary)] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={getAssetUrl("/assets/hero.jpg")} alt="Luxury Swimming Pool" fill className="object-cover opacity-100 object-bottom" priority />

        </div>
        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-white font-bold text-xl md:text-3xl lg:text-4xl mb-4 tracking-wider drop-shadow-lg capitalize"
            variants={fadeInUp}
          >
            Integrated Technical Service Group
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="mt-8"
          >
            <Link href="/about" className="group inline-flex items-center gap-2 text-white font-bold text-lg hover:text-[var(--color-secondary)] transition-all">
              <ArrowRightCircle className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              Learn more
            </Link>
          </motion.div>

        </motion.div>
      </section>
      {/* Intro Section - Budget & Value & Contact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-[85px]">
          {/* Card 1 - Budget */}
          <motion.div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5cbecae animated-slow animated fadeIn flex flex-col items-center text-center p-12 bg-white shadow-lg rounded-lg max-w-xs min-h-[500px]"
            data-id="5cbecae"
            data-element_type="column"
            data-settings='{"background_background":"classic","animation":"fadeIn"}'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="elementor-widget-wrap elementor-element-populated w-full h-full flex flex-col">
              <div className="elementor-background-overlay"></div>

              {/* Image Widget */}
              <div className="elementor-element elementor-element-cf4a571 elementor-widget elementor-widget-image mb-6" data-id="cf4a571" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container flex justify-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src={getAssetUrl("/assets/images/orange-money.png")}
                      alt="A Pool Within Your Budget"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Heading Widget */}
              <div className="elementor-element elementor-element-288f637 elementor-widget elementor-widget-heading mb-4" data-id="288f637" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default text-2xl font-bold text-[var(--color-primary)]">A Pool Within Your Budget</h2>
                </div>
              </div>

              {/* Text Editor Widget */}
              <div className="elementor-element elementor-element-2395918 elementor-widget elementor-widget-text-editor flex-grow" data-id="2395918" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    At ITS Group, we believe that luxury and affordability can go hand in hand. Our commitment to providing value means you get the best quality pools without exceeding your budget. With our expert craftsmanship and attention to detail, we offer a wide range of custom pool options to suit your needs, style, and financial plan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Timely */}
          <motion.div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5cbecae animated-slow animated fadeIn flex flex-col items-center text-center p-12 bg-white shadow-lg rounded-lg max-w-xs min-h-[500px]"
            data-id="5cbecae-2"
            data-element_type="column"
            data-settings='{"background_background":"classic","animation":"fadeIn"}'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="elementor-widget-wrap elementor-element-populated w-full h-full flex flex-col">
              <div className="elementor-background-overlay"></div>

              {/* Image Widget */}
              <div className="elementor-element elementor-element-cf4a571 elementor-widget elementor-widget-image mb-6" data-id="cf4a571-2" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container flex justify-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src={getAssetUrl("/assets/images/Orange-time.png")}
                      alt="Timely & Efficient Building"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Heading Widget */}
              <div className="elementor-element elementor-element-288f637 elementor-widget elementor-widget-heading mb-4" data-id="288f637-2" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default text-2xl font-bold text-[var(--color-primary)]">Timely &amp; Efficient Building</h2>
                </div>
              </div>

              {/* Text Editor Widget */}
              <div className="elementor-element elementor-element-2395918 elementor-widget elementor-widget-text-editor flex-grow" data-id="2395918-2" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    At ITS Group, we are committed to delivering your dream pool with efficiency and precision. From the design phase to the final installation, we prioritize clear communication, ensuring you are informed at every step. Our expert team works diligently to meet deadlines while maintaining the highest quality standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Contact */}
          <motion.div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5cbecae animated-slow animated fadeIn flex flex-col items-center text-center p-12 bg-[var(--color-primary)] shadow-lg rounded-lg text-white max-w-xs min-h-[500px]"
            data-id="5cbecae-3"
            data-element_type="column"
            data-settings='{"background_background":"classic","animation":"fadeIn"}'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="elementor-widget-wrap elementor-element-populated w-full h-full flex flex-col justify-center">
              <div className="elementor-background-overlay"></div>

              {/* Heading Widget */}
              <div className="elementor-element elementor-element-288f637 elementor-widget elementor-widget-heading mb-6" data-id="288f637-3" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default text-2xl font-bold text-white">Request A Free Quote!</h2>
                </div>
              </div>

              {/* Text Editor Widget */}
              <div className="elementor-element elementor-element-2395918 elementor-widget elementor-widget-text-editor mb-8" data-id="2395918-3" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p className="text-white/90 leading-relaxed text-sm">
                    Thinking about a new pool, a remodel, or another project? We're here to help! Fill out the form below, and our team will get in touch with you as soon as possible to discuss your vision and provide a personalized quote.
                  </p>
                </div>
              </div>

              {/* Button Widget */}
              <div className="elementor-element elementor-element-btn elementor-widget elementor-widget-button" data-id="btn-contact" data-element_type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <Link href="/contact-us" className="inline-flex items-center gap-2 text-white font-bold hover:text-[var(--color-secondary)] transition-colors">
                    <span className="bg-white text-[var(--color-primary)] p-2 rounded-md">
                      <Phone className="w-5 h-5" />
                    </span>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us & Stats Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-[1140px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Column: Image Accordion */}
          <motion.div
            className="flex gap-4 h-[450px] lg:h-[540px] w-full group/accordion"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Accordion Item 1 */}
            <div className="relative rounded-2xl overflow-hidden h-full w-1/2 group-hover/accordion:w-[30%] hover:!w-[70%] transition-all duration-700 ease-in-out cursor-pointer group/item">
              <Image
                src={getAssetUrl("/assets/hero.jpg")}
                alt="Luxury Pool"
                fill
                className="object-cover"
              />
              {/* Optional slight dark overlay that clears on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-500"></div>
            </div>
            {/* Accordion Item 2 */}
            <div className="relative rounded-2xl overflow-hidden h-full w-1/2 group-hover/accordion:w-[30%] hover:!w-[70%] transition-all duration-700 ease-in-out cursor-pointer group/item">
              <Image
                src={getAssetUrl("/assets/images/1-768x576.jpg")}
                alt="Residential Pool"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-500"></div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            className="flex flex-col justify-center h-full w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Boxed Text Content Area with Hover Animation */}
            <div className="relative p-[2px] rounded-3xl mb-10 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

              {/* Subtle Base Border Background (visible on hover) */}
              <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

              {/* Spinning Dark Navy gradient tail (only visible on hover; leading and trailing edges are blurred/faded) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_180deg,var(--color-primary)_270deg,transparent_360deg)] z-0 pointer-events-none" />

              {/* Default static border */}
              <div className="absolute inset-0 border border-gray-200 rounded-3xl group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />

              {/* Inner White Content Container */}
              <div className="relative z-20 bg-white p-8 md:p-10 rounded-[22px] h-full w-full">
                {/* Super Heading */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-12 h-[2px] bg-[var(--color-primary)]"></span>
                  <h2 className="text-[var(--color-primary)] font-bold text-sm md:text-base uppercase tracking-[0.2em]">About Us</h2>
                </div>

                {/* Main Heading */}
                <h3 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.15]">
                  Let’s bring your <span className="text-[var(--color-primary)]">dream pool</span> to life
                </h3>

                {/* Paragraph Description */}
                <p className="text-gray-600 mb-8 text-lg font-light leading-[1.8]">
                  At ITS Group, we bring creativity and innovation to every project. Our extensive gallery showcases a diverse range of water features, including luxurious pools, artistic water displays, and functional leisure spaces. Whether you seek relaxation or elegance, our designs transform your vision into reality.
                </p>

                {/* CTA Button */}
                <div>
                  <Link href="/about" className="group/btn inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Learn more
                    <ArrowRightCircle className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Stat Cards */}
            <div className="grid grid-cols-2 gap-6 pt-2 border-t border-gray-100">

              {/* Stat 1 */}
              <div className="group flex flex-col items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[var(--color-primary)]/20 transition-all duration-300">
                <div className="bg-[var(--color-primary)] text-white p-3.5 rounded-xl mb-4 group-hover:scale-110 group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-all duration-300 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">30+</div>
                <div className="text-gray-500 font-medium text-sm tracking-wide uppercase">Years of Experience</div>
              </div>

              {/* Stat 2 */}
              <div className="group flex flex-col items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[var(--color-primary)]/20 transition-all duration-300">
                <div className="bg-[var(--color-primary)] text-white p-3.5 rounded-xl mb-4 group-hover:scale-110 group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-all duration-300 shadow-sm">
                  <Droplets className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">500+</div>
                <div className="text-gray-500 font-medium text-sm tracking-wide uppercase">Projects Completed</div>
              </div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-[var(--color-primary)] text-white relative">
        <div className="max-w-[1140px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-secondary)] font-bold text-lg uppercase tracking-wider mb-2">Our Services</h2>
            <h3 className="text-4xl font-bold mb-16">What We Offer</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Pools',
                href: '/residential-pools',
                desc: 'Custom designs for your home. Transform your backyard into a personal oasis.',
                icon: Droplets
              },
              {
                title: 'Commercial Pools',
                href: '/commercial',
                desc: 'Large scale solutions for businesses, hotels, and clubs. Built to international standards.',
                icon: Building2
              },
              {
                title: 'Maintenance',
                href: '/services',
                desc: 'Reliable after-sales support and care. Keep your pool sparkling clean all year round.',
                icon: Wrench
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all text-left group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-4xl mb-6 bg-[var(--color-secondary)] w-16 h-16 rounded-lg flex items-center justify-center text-[var(--color-primary)]">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-secondary)] transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">{service.desc}</p>
                  <Link href={service.href} className="text-white font-semibold hover:text-[var(--color-secondary)] flex items-center gap-2">
                    Learn more &rarr;
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Partners Section */}
      <section className="py-20 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-primary)] font-bold text-lg uppercase tracking-wider mb-2">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              More Than 30 Years of Achievements & success with a lot of valued customers and individuals in residential villas and compounds.
            </p>
          </motion.div>
        </div>

        {/* Infinite Marquee */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-هايتس-العميل-e1654778620715.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/شركة-سوديك.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/palm-hills-e1654774863824.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-e1655239900843.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-إيطاليا-للأستثمار-والتطوير-العقاري-e1654774974587.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-LAKE-VIEW-e1654779166323.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-البطل-جروب-e1655239934993.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الجازى-e1654776962975.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/download-e1654778126780.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/مجدى-للمقاولات-شركة.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-توليب-التجمع-الخامس-e1654777440193.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الهيئة-الهندسية-للقوات-المسلحة-e1654777517635.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-النوبى-e1654777567844.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-المهندسون-المتحدون-العميل-e1654777670456.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الصفوة-جروب-e1654777779760.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الفنار-e1654777885730.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-e1654778334267.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/المقاولون-العرب-1.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/العميل-طلعت-مصطفى-جروب.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-MOUNTAIN-VIEW-e1654779040871.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/العميل-سيرفو-ميد.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-لأستثمارات-العميل-العقارية-e1654779274581.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-القطرية-e1655239952785.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-للتطوير-العقاري-e1654779527284.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/orascom.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/new-giza.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Mobinil-e1654781006876.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/hassan-allam-e1654781363159.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Ginza-for-Constructions-Realistic-Development-e1654781435326.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Egyptian-office-e1654781511364.jpg",
            ].map((logo, index) => (
              <div key={`logo-${index}`} className="relative w-32 h-20 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={logo} alt="Partner Logo" className="object-contain w-full h-full" />
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {[
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-هايتس-العميل-e1654778620715.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/شركة-سوديك.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/palm-hills-e1654774863824.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-e1655239900843.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-إيطاليا-للأستثمار-والتطوير-العقاري-e1654774974587.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-LAKE-VIEW-e1654779166323.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-البطل-جروب-e1655239934993.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الجازى-e1654776962975.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/download-e1654778126780.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/مجدى-للمقاولات-شركة.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-توليب-التجمع-الخامس-e1654777440193.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الهيئة-الهندسية-للقوات-المسلحة-e1654777517635.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-النوبى-e1654777567844.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-المهندسون-المتحدون-العميل-e1654777670456.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الصفوة-جروب-e1654777779760.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الفنار-e1654777885730.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-e1654778334267.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/المقاولون-العرب-1.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/العميل-طلعت-مصطفى-جروب.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-MOUNTAIN-VIEW-e1654779040871.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/العميل-سيرفو-ميد.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-لأستثمارات-العميل-العقارية-e1654779274581.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-القطرية-e1655239952785.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-للتطوير-العقاري-e1654779527284.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/orascom.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/new-giza.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Mobinil-e1654781006876.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/hassan-allam-e1654781363159.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Ginza-for-Constructions-Realistic-Development-e1654781435326.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Egyptian-office-e1654781511364.jpg",
            ].map((logo, index) => (
              <div key={`logo-dup-${index}`} className="relative w-32 h-20 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={logo} alt="Partner Logo" className="object-contain w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners in Success Section */}
      <section className="py-20 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-primary)] font-bold text-lg uppercase tracking-wider mb-2">Partners in Success</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We believe in integration & partnership in addition to business partners including corporates, consultants, and vendors.
            </p>
          </motion.div>
        </div>

        {/* Infinite Marquee - Consistent Direction */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[
              "https://itsgroup-co.com/wp-content/uploads/2022/06/HIdroten.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/etatron.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/bio-uv.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/bin-talib-e1654951048153.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/pentair.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/pina-e1654951160303.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/saci.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/مكتب-الاستشارى-الهندسى-دكتور-أحمد-عجور.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/شركة-المكتب-المصرى.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-MITO-e1654951344794.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/استشارى-معمارى-الجازى.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-معمارى-البروج-e1654951454959.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-المشروع-PMI-PROGECT-MANAGEMENT-INSTITUTE-e1654951500644.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-ProMEP-e1654951560516.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-AZURE-e1654951603922.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/sites-bouroj-consultant-e1654951648625.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/PACER-CONSULTANT-cv-e1654951706683.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/oko-plan-ستشارى-الجازى.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Home-Logo-cv-e1654951857145.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/designer-شروع-شرم-الشيخ-الديار-القطرية-e1654951904353.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/CURVE-LAND-SCAPE-استشارى-المشروع.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Shehab-Mazhar-Office.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Shaker-e1654952042345.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Sama-Consult-e1654952102370.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Saleh-Hegab-Office-e1654952191912.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/SABBOUr-e1654952245164.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Moharam-Bakhom-Office-e1654952309985.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Misr-Consult-e1654952380766.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Electromechanical-Design-Engineering-Group-e1654952424734.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/EHAF-e1654952469152.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/ECG-e1654952523861.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/ECDG-e1654952571193.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Dar-Al-Handasah-e1654952629496.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-أبناء-سعد-حنا-e1656278001165.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-يم-للهندسة-المقاول-والديكور-e1654951160303.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-مصر-اسمنت-e1656278202575.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/alamia-for-const-e1656278312583.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/yarco-المقاول-e1656278404368.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الشركة-العامة-رولان-e1656278464291.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/arab-swiss-engineering-استشارى-العملية-e1656278572564.gif",
            ].map((logo, index) => (
              <div key={`logo-p2-${index}`} className="relative w-32 h-20 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={logo} alt="Partner In Success Logo" className="object-contain w-full h-full" />
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {[
              "https://itsgroup-co.com/wp-content/uploads/2022/06/HIdroten.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/etatron.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/bio-uv.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/bin-talib-e1654951048153.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/pentair.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/pina-e1654951160303.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/saci.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/مكتب-الاستشارى-الهندسى-دكتور-أحمد-عجور.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/شركة-المكتب-المصرى.jpeg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-MITO-e1654951344794.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/استشارى-معمارى-الجازى.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-معمارى-البروج-e1654951454959.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-المشروع-PMI-PROGECT-MANAGEMENT-INSTITUTE-e1654951500644.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-ProMEP-e1654951560516.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-AZURE-e1654951603922.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/sites-bouroj-consultant-e1654951648625.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/PACER-CONSULTANT-cv-e1654951706683.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/oko-plan-ستشارى-الجازى.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Home-Logo-cv-e1654951857145.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/designer-شروع-شرم-الشيخ-الديار-القطرية-e1654951904353.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/CURVE-LAND-SCAPE-استشارى-المشروع.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Shehab-Mazhar-Office.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Shaker-e1654952042345.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Sama-Consult-e1654952102370.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Saleh-Hegab-Office-e1654952191912.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/SABBOUr-e1654952245164.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Moharam-Bakhom-Office-e1654952309985.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Misr-Consult-e1654952380766.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Electromechanical-Design-Engineering-Group-e1654952424734.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/EHAF-e1654952469152.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/ECG-e1654952523861.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/ECDG-e1654952571193.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/Dar-Al-Handasah-e1654952629496.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-أبناء-سعد-حنا-e1656278001165.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-يم-للهندسة-المقاول-والديكور-e1654951160303.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-مصر-اسمنت-e1656278202575.png",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/alamia-for-const-e1656278312583.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/yarco-المقاول-e1656278404368.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/-الشركة-العامة-رولان-e1656278464291.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/arab-swiss-engineering-استشارى-العملية-e1656278572564.gif",
            ].map((logo, index) => (
              <div key={`logo-dup-p2-${index}`} className="relative w-32 h-20 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={logo} alt="Partner In Success Logo" className="object-contain w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

          {/* Header Card with Spinning Animated Border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-[2px] rounded-2xl w-full flex-grow group shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-3 transition-all duration-500 min-h-[300px] overflow-hidden"
          >
            {/* Dark Navy Base Border Background */}
            <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

            {/* Spinning Golden Yellow gradient tail (only visible on hover; blurred edges) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_180deg,var(--color-secondary)_270deg,transparent_360deg)] z-0 pointer-events-none" />

            {/* Default static border (hidden on hover) */}
            <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />

            {/* Inner Content Container */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center p-10 bg-[var(--color-primary)] rounded-[14px] w-full h-full">
              <div className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden">
                {/* Left Yellow Line */}
                <motion.div
                  className="absolute top-0 bottom-0 w-1.5 bg-[var(--color-secondary)] z-20"
                  initial={{ left: "50%", x: "-50%", opacity: 0 }}
                  whileInView={{ left: 0, x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                />

                {/* Right Yellow Line */}
                <motion.div
                  className="absolute top-0 bottom-0 w-1.5 bg-[var(--color-secondary)] z-20"
                  initial={{ right: "50%", x: "50%", opacity: 0 }}
                  whileInView={{ right: 0, x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                />

                {/* Text Content */}
                <motion.h2
                  className="text-white font-bold text-4xl leading-tight uppercase tracking-wider relative z-10"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Why Choose us ?
                </motion.h2>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          {[
            {
              title: "Expert Project Management",
              desc: "Each project is assigned a dedicated project manager and supervisor to ensure a smooth construction process and deliver top-quality results. Our specialized permit team works to expedite city permit applications, minimizing any potential delays."
            },
            {
              title: "Custom Designs",
              desc: "At ITS Group, we bring your vision to life! Our professionals create tailor-made designs that cater to your specific needs, ensuring a unique and personalized experience."
            },
            {
              title: "Comprehensive Services",
              desc: "From initial concept and design to construction, installation, and maintenance, we provide end-to-end solutions to bring your dream pool to reality."
            },
            {
              title: "Seamless Process",
              desc: "Our experts track and manage each project from feasibility studies and site surveys to equipment selection, installation, and commissioning, ensuring every step meets the highest standards.Technical support for clients through site visits, inspections, technical advice & reports."
            },
            {
              title: "Reliable After-Sales Support",
              desc: "We offer ongoing support, including operation & maintenance contracts, equipment supply, spare parts, and technical assistance through site visits, inspections, and expert advice."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-10 bg-white shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-3 transition-all duration-500 rounded-2xl w-full flex-grow border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--color-primary)]/5 p-3">
                  <img
                    src="https://itsgroup-co.com/wp-content/uploads/2025/08/orange-check-mark-circular-tick-16216.png"
                    alt="Check"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light flex-grow">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-[1140px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Column - Image Accordion */}
          <motion.div
            className="flex gap-4 h-[450px] lg:h-[540px] w-full group/accordion order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Accordion Item 1 */}
            <div className="relative rounded-2xl overflow-hidden h-full w-1/2 group-hover/accordion:w-[30%] hover:!w-[70%] transition-all duration-700 ease-in-out cursor-pointer group/item">
              <img
                src="https://itsgroup-co.com/wp-content/uploads/2025/04/5kWRpgsp-1025x1536-1.jpeg"
                alt="Value Image 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-500"></div>
            </div>
            {/* Accordion Item 2 */}
            <div className="relative rounded-2xl overflow-hidden h-full w-1/2 group-hover/accordion:w-[30%] hover:!w-[70%] transition-all duration-700 ease-in-out cursor-pointer group/item">
              <img
                src="https://itsgroup-co.com/wp-content/uploads/2025/04/IMG_0322-1-1536x1024-1.jpg"
                alt="Value Image 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-500"></div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="flex flex-col justify-center h-full w-full order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Boxed Text Content Area with Hover Animation */}
            <div className="relative p-[2px] rounded-3xl mb-0 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

              {/* Subtle Base Border Background (visible on hover) */}
              <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

              {/* Spinning Dark Navy gradient tail (only visible on hover; leading and trailing edges are blurred/faded) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_180deg,var(--color-primary)_270deg,transparent_360deg)] z-0 pointer-events-none" />

              {/* Default static border */}
              <div className="absolute inset-0 border border-gray-200 rounded-3xl group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />

              {/* Inner White Content Container */}
              <div className="relative z-20 bg-white p-8 md:p-10 rounded-[22px] h-full w-full">
                {/* Super Heading */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-12 h-[2px] bg-[var(--color-primary)]"></span>
                  <h2 className="text-[var(--color-primary)] font-bold text-sm md:text-base uppercase tracking-[0.2em]">Our Values</h2>
                </div>

                {/* Main Heading */}
                <h3 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.15]">
                  Our Company Values
                </h3>

                {/* Paragraph Description */}
                <p className="text-gray-600 mb-8 text-lg font-light leading-[1.8]">
                  At ITS Group, our core values drive every project we undertake, ensuring:
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* List */}
                  <ul className="space-y-4">
                    {[
                      "Excellence & Innovation",
                      "Customer Satisfaction",
                      "Integrity and Transparency",
                      "Sustainability & Responsibility"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 group/li">
                        <span className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 group-hover/li:bg-[var(--color-primary)] transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-[var(--color-primary)] group-hover/li:text-white transition-colors duration-300" />
                        </span>
                        <span className="text-gray-700 font-medium group-hover/li:text-[var(--color-primary)] transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Icon Box */}
                  <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[var(--color-primary)]/20 transition-all duration-300 group/box">
                    <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-xl flex items-center justify-center mb-4 group-hover/box:scale-110 group-hover/box:bg-[var(--color-secondary)] group-hover/box:text-[var(--color-primary)] transition-all duration-300 shadow-sm">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-extrabold text-gray-900 mb-2">Quality & Craftsmanship</h4>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      We prioritize top-tier materials and expert workmanship to deliver long-lasting, high-performance pools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--color-secondary)] font-bold text-lg uppercase tracking-wider mb-2">A Visual Journey</h3>
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">Gallery</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-12">
              At ITS Group, we bring creativity and innovation to every project. Our extensive gallery showcases a diverse range of water features, including luxurious pools, artistic water displays, and functional leisure spaces.
            </p>
          </motion.div>

          <div className="max-w-[1140px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "https://itsgroup-co.com/wp-content/uploads/2022/06/P1300514-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/P1300516-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/P5190031-copy-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/P1170922-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/IMG_0117-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/DSCN2463-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/DSCN0059-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/P2210674-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/P80800111.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/P1300529-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/leasure-1-scaled.jpg",
              "https://itsgroup-co.com/wp-content/uploads/2022/06/P1300519-scaled.jpg"
            ].map((src, index) => (
              <motion.div
                key={index}
                className="relative aspect-[3/2] overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {/* Optional icon or overlay content */}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/gallery" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all transform hover:scale-105">
              <ArrowRightCircle className="w-5 h-5" />
              Explore More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Detailed Contact Section */}
      <section className="py-20 px-6 bg-[var(--color-primary)] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-[var(--color-secondary)] font-bold text-lg uppercase tracking-wider mb-2">Contact Us</h3>
            <h2 className="text-4xl font-bold mb-6">Contact Us Today</h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Get in touch with ITS Group today! Our team is ready to assist you with expert guidance, tailored solutions, and exceptional service. Whether you need a new pool, remodeling, or maintenance, we’re here to help.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 bg-[var(--color-secondary)] text-[var(--color-primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[var(--color-secondary)]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">Let's bring your dream pool to life</h2>
          <p className="text-[var(--color-primary)]/80 text-xl mb-10">
            Whether you seek relaxation or elegance, our designs transform your vision into reality.
          </p>
          <Link href="/contact-us" className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all transform inline-block">
            Contact Us Today
          </Link>
        </motion.div>
      </section>
    </main >
  );
}
