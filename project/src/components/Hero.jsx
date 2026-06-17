import { ArrowRight, Star } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import chair from "../images/Chair.jpg"
import hoverChair from "../images/hoverChair.webp"
// import pinkChairR from "../images/pinkChairR.png"
import pinkChairR from "../images/pinkChairR.webp"
import gray from "../images/gray.avif"


export default function Hero() {
  const heroRef = useRef(null);

  const isInView = useInView(heroRef, {
    amount: 0.35,
  });

  return (
    <section ref={heroRef} id="home" className="pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 pb-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Card */}
        <div
          className="relative overflow-hidden rounded-[2.5rem] bg-[#0B5D6E]"
          style={{ minHeight: '520px' }}
        >
          {/* Background organic shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #1A8CA8, transparent)' }}
            />
            <div
              className="absolute bottom-0 -left-16 w-72 h-72 rounded-full opacity-15"
              style={{ background: 'radial-gradient(circle, #0A6C85, transparent)' }}
            />
          </div>

          {/* White bottom-center bump */}
          <div
            className="hidden lg:block absolute -bottom-16 right-0 -translate-x-1/2 bg-white"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '100% 100% 0 0',
            }}
          />

          {/* Top-right white notch */}
          <div
            className="absolute top-0 right-0 bg-white"
            style={{
              width: '100px',
              height: '80px',
              borderRadius: '0 0 0 100%',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-8 lg:px-16 py-12 lg:py-16 gap-8">
            {/* Left text */}
            <div className="text-white text-center lg:text-left flex-shrink-0 lg:w-64">
              <div className="flex items-center gap-1 justify-center lg:justify-start mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" className="text-yellow-400" />
                ))}
                <span className="text-xs ml-1 text-white/70">4.9 (2.4k reviews)</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
                Discover<br />
                <span className="text-teal-300">Your Perfect</span><br />
                Space
              </h1>
              <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-xs">
                Explore our curated collection of timeless contemporary pieces designed to elevate every living space.
              </p>
              <div className="flex items-center gap-3 mt-6 justify-center lg:justify-start">
                <a href='#gallery' className="bg-white text-teal-700 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-50 transition-all duration-200 flex items-center gap-2 hover:gap-4 whitespace-nowrap">
                  Gallery <ArrowRight size={14} />
                </a>
                <a href='#collection' className="border border-white/40 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-200">
                  Explore
                </a>
              </div>
            </div>

            {/* Center sofa image */}
            <div className="flex-1 flex justify-center items-end relative" style={{ minHeight: '340px' }}>
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Luxury White Sofa"
                className="sm:block hidden w-full max-w-2xl object-cover object-center rounded-2xl"
                style={{ height: '380px', objectPosition: 'center 30%' }}
              />
              
              <div className="sm:hidden flex-1 flex justify-center items-end relative w-full h-110 mt-4" >
                <img
                  src={gray}
                  alt="Luxury chair"
                  className="w-full h-110 max-w-2xl object-cover object-center rounded-2xl"
                  style={{ objectPosition: 'center 30%' }}
                />

                <motion.img
                  src={pinkChairR}
                  alt="Luxury chair"
                  animate={
                    isInView
                      ? {
                          x: 0,
                          opacity: 1,
                          rotate: 0,
                          scale: 1,
                        }
                      : {
                          x: 250,
                          opacity: 0,
                          rotate: 12,
                          scale: 0.8,
                        }
                  }
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                  className="absolute -top-12 -right-21 w-100 drop-shadow-[0_0_8px_rgba(59,130,246,1)]"
                />
                <motion.img
                  src={hoverChair}
                  alt="Luxury chair"
                  animate={
                    isInView
                      ? {
                          x: 0,
                          opacity: 1,
                          rotate: 0,
                          scale: 1,
                        }
                      : {
                          x: -250,
                          opacity: 0,
                          rotate: -12,
                          scale: 0.8,
                        }
                  }
                  transition={{
                    duration: 0.9,
                    delay: 0.15,
                    ease: "easeOut",
                  }}
                  className="absolute -bottom-8 -left-24 w-100 drop-shadow-[0_0_8px_rgba(59,130,246,1)]"
                />
              </div>
              {/* Floating price badge */}
              <div className="absolute sm:block hidden top-6 left-6 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs text-[#6B7280] font-medium">Starting from</p>
                <p className="text-lg font-black text-teal-700">200K<span className="text-sm font-normal text-[#6B7280]">/item</span></p>
              </div>
              {/* Floating price badge */}
              <div className="absolute sm:hidden -top-1 left-2 bg-white rounded-2xl px-2.5 py-2 shadow-lg">
                <p className="text-xs text-[#6B7280] font-medium">Starting from</p>
                <p className="text-md font-black text-teal-700">$100<span className="text-sm font-normal text-[#6B7280]">/item</span></p>
              </div>
              {/* Floating category tag */}
              <div className="absolute bottom-5 -right-4 bg-white/90 backdrop-blur rounded-xl px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-[#222222]">New Collection 2024</p>
                <p className="text-xs text-[#6B7280]">500+ items available</p>
              </div>
            </div>

            {/* Right stats */}
            <div className="hidden xl:flex flex-col gap-4 flex-shrink-0 w-48 text-white">
              {[
                { value: '500+', label: 'Premium Products' },
                { value: '12k+', label: 'Happy Customers' },
                { value: '15+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-2xl p-4 backdrop-blur">
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-xs text-white/70 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
