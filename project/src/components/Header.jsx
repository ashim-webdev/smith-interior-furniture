import { useState, useEffect } from 'react';
import { Search, Heart, ShoppingCart, Bell, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion"



const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Collection", href: "#collection" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact Us", href: "#appointment" },
];;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="relative max-w-7xl mx-auto lg:px-6 px-12">
        <div
          className={`py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'shadow-soft' : 'shadow-card'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden lg:flex w-43 rounded-lg items-center justify-center">
              <img src='/smithFullLogo.svg' alt='Smith furniture logo' />
            </div>

            <div className="lg:hidden w-8 rounded-lg flex items-center justify-center">
              <img src='/smithRealLogoSVG.svg' alt='Smith furniture logo' />
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-500 text-slate-600 hover:text-brand-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-shine gradient-bg text-white text-sm font-600 px-5 py-2.5 rounded-xl shadow-blue hover:opacity-90 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-brand-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden mt-2 bg-white border border-emerald-500  absolute top-17.5 left-0 right-0 mx-4 rounded-2xl p-4 shadow-float"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2.5 rounded-xl text-sm font-500 text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 transition-all`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 gradient-bg text-white text-sm font-600 px-4 py-3 rounded-xl text-center shadow-blue"
                  onClick={() => setMenuOpen(false)}
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    </>
  );
}
