import { Sparkles, ArrowRight, Phone, Mail, MapPin, Pin } from 'lucide-react';
import {
  FaXTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";



export function CtaBanner() {
  return (
    <section id="contact" className="scroll-mt-20 font-serif pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative gradient-bg rounded-[2.5rem] overflow-hidden p-14 text-center shadow-teal">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/8 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <div className="absolute top-1/2 right-24 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col justify-center items-center gap-4 ">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-7">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-600 text-white whitespace-nowrap">Discover Your Perfect Furniture</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-800 text-white mb-5 leading-tight tracking-tight">
              Ready To Transform Your Living Space?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">
              From elegant sofas and dining sets to modern bedroom collections, we create furniture designed to bring comfort, style, and lasting quality into your home. Explore our collection today and discover pieces crafted for modern living.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+2347085336695"
                className="flex items-center gap-3 bg-white text-brand-600 font-700 px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-float whitespace-nowrap"
              >
                <div className='animate-UpDown'>
                  <Phone className="w-5 h-5" />
                </div>
                +234 708 533 6695
              </a>
              <a
                href="#collection"
                className="btn-shine flex items-center gap-2.5 bg-white/15 backdrop-blur border-2 border-white/40 text-white font-700 px-8 py-4 rounded-2xl hover:bg-white/25 transition-all duration-300 whitespace-nowrap"
              >
                Browse Collection
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="blog" className="relative bg-[#005F6F] text-slate-100 overflow-hidden">

      {/* 2. CORE FOOTER INFO BLOCK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 -mt-10" id="footer-links-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8" id="footer-links-grid">
          
          {/* COL 1: LOGO & ABOUT */}
          <div className="flex flex-col gap-6" id="footer-brand-column">
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <a href='#home' className='w-45 bg-white mb-2 py-1 px-2 rounded-full'>
                <img src='/smithLogo.png' loading="lazy" alt='Logo'  />
              </a>
            </div>
            
            <p className=" text-slate-100 text-xs font-semibold leading-relaxed max-w-xs">
              Crafting premium furniture that combines timeless design, exceptional comfort, and lasting durability. From modern living spaces to elegant interiors, we help turn houses into beautiful homes.
            </p>

            {/* Social rows */}
            <div className="flex items-center gap-3 text-slate-100" id="footer-social-row">
              <a href="https://www.tiktok.com/@layefaojukurowei?_r=1&_t=ZS-97zoH5kwsIn" aria-label="SunBeam WhatsApp Link" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                <FaTiktok className="w-4 h-4" />
              </a>

              <a href="https://x.com/ojsmithinterior?s=11" aria-label="SunBeam Facebook Link" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                <FaXTwitter className="w-4 h-4" />
              </a>

              <a href="https://www.instagram.com/ojsmithinteriors?utm_source=qr" aria-label="SunBeam WhatsApp Link" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>

            </div>
          </div>

          {/* COL 2: CORE SERVICES */}
          <div className="flex flex-col gap-4 lg:pl-12" id="footer-services-column">
            <h4 className=" font-extrabold text-sm text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-100 font-semibold" id="footer-services-links">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#collection" className="hover:text-white transition-colors">Collection</a>
              <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              <a href="#appointment" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          {/* COL 3: COVERAGE AREA */}
          <div className="flex flex-col gap-4" id="footer-coverage-column">
            <h4 className=" font-extrabold text-sm text-white tracking-wide uppercase">
              Furniture Categories
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-100 font-semibold whitespace-nowrap" id="footer-coverage-links">
              <span className="flex items-center gap-1.5"><Pin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
              Living Room Furniture</span>
              <span className="flex items-center gap-1.5"><Pin className="w-3.5 h-3.5 text-brand-500 shrink-0" /> Bedroom Furniture</span>
              <span className="flex items-center gap-1.5"><Pin className="w-3.5 h-3.5 text-brand-500 shrink-0" /> Dining Room Furniture</span>
              <span className="flex items-center gap-1.5"><Pin className="w-3.5 h-3.5 text-brand-500 shrink-0" /> Office Furniture</span>
              <span className="flex items-center gap-1.5"><Pin className="w-3.5 h-3.5 text-brand-500 shrink-0" /> Outdoor Furniture</span>
              <span className="flex items-center gap-1.5"><Pin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
              Custom Furniture
              <span className='ml-2'>etc...</span>
              </span>
            </div>
          </div>

          {/* COL 4: DISPATCH CONTACT */}
          <div className="flex flex-col gap-4" id="footer-contact-column">
            <h4 className=" font-extrabold text-sm text-white tracking-wide uppercase">
              Client Concierge
            </h4>
            <div className="flex flex-col gap-4 text-xs text-slate-100 font-semibold" id="footer-contact-details">
              <a href="tel:+2347085336695" className="flex items-center gap-2 hover:text-white transition-colors">
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-brand-500 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+234 708 533 6695</span>
              </a>

              <a href="mailto:ojukuroweilayefa@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-brand-500 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className='line-clamp-1'>ojukuroweilayefa@gmail.com</span>
              </a>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-brand-500 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>furniture market water board line (Kugbo) Abuja, Nigeria.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. CAPABILITIES BAR */}
      <div className="bg-slate-1000 py-6 border-t border-white/20 mt-5" id="footer-bottom-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-200 text-[11px] font-mono uppercase font-bold" id="footer-bottom-flex">
          <span>&copy; {currentYear} Furnish. All Rights Reserved.</span>

          <div className="flex items-center gap-4 relative">

            <Popover className="relative">
              <PopoverButton className="hover:text-slate-300 transition-colors cursor-pointer outline-none">
                Privacy Guard
              </PopoverButton>

              <PopoverPanel
                className="absolute bottom-8 -left-2"
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className='w-80 z-50 rounded-2xl border border-white/50 bg-[#005F6F] p-5 shadow-2xl'
                  >
                    <h4 className="text-white font-bold mb-2 text-sm">
                      Privacy Guard
                    </h4>

                    <p className="text-slate-300 text-xs leading-relaxed normal-case">
                      Your privacy is important to us. Any information submitted through our contact forms, product inquiries, or customer support channels is used solely to respond to requests, process orders, and improve your shopping experience.

                      <br /><br />

                      We do not sell, rent, or share customer information with third parties for marketing purposes. All information is handled securely and accessed only when necessary to provide our services.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </PopoverPanel>
            </Popover>

            <span>&bull;</span>

            <Popover className="relative">
              <PopoverButton className="hover:text-slate-300 transition-colors cursor-pointer outline-none">
                Satisfaction Promise
              </PopoverButton>

              <PopoverPanel className="absolute bottom-8 -right-24">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className='w-80 z-50 rounded-2xl border border-white/50 bg-[#005F6F] p-5 shadow-2xl'
                  >
                    <h4 className="text-white font-bold mb-2 text-sm">
                      SATISFACTION PROMISE
                    </h4>

                    <p className="text-slate-300 text-xs leading-relaxed normal-case">
                      We take pride in the quality of every piece we create. If your furniture arrives with any manufacturing defects or quality concerns, please contact us promptly and our team will work with you to resolve the issue.

                      <br /><br />

                      Our goal is to ensure every customer enjoys furniture that meets the highest standards of craftsmanship, comfort, and durability.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </PopoverPanel>
            </Popover>

            <span>&bull;</span>

            <Popover className="relative">
              <PopoverButton className="hover:text-slate-300 transition-colors cursor-pointer outline-none">
                Service Terms
              </PopoverButton>

              <PopoverPanel className="absolute bottom-8 -right-2">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className='w-80 z-50 rounded-2xl border border-white/50 bg-[#005F6F] p-5 shadow-2xl'
                  >
                    <h4 className="text-white font-bold mb-2 text-sm">
                      Service Terms
                    </h4>

                    <p className="text-slate-300 text-xs leading-relaxed normal-case">
                      By placing an order through our website, you agree to provide accurate contact, delivery, and payment information.

                      <br /><br />

                      Product availability, pricing, delivery timelines, and customization options may vary depending on inventory and production schedules. We are committed to delivering premium furniture and exceptional customer service throughout your purchasing experience.

                      <br /><br />

                      Continued use of our website and services constitutes acceptance of these terms.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </PopoverPanel>
            </Popover>

          </div>

        </div>
      </div>

    </footer>
  );
}

