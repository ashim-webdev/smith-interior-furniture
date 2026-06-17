
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import leavingRoom from "../images/leavingRoom.jpg"
import TVWall1 from "../images/TVWall1.jpg"
import TVWall2 from "../images/TVWall2.jpg"
import TVWall3 from "../images/TVWall3.jpg"
import Video1 from "../videos/VID-20260614-WA0010.mp4"
import Video2 from "../videos/VID-20260614-WA0011.mp4"






const stats = [
  { value: '6+', label: 'Years Crafting Furniture' },
  { value: '4K+', label: 'Furniture Pieces Delivered' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '12+', label: 'Furniture Collections' },
];

export default function About() {
  return (
    <section id="about" className="md:scroll-mt-20 scroll-mt-50 md:my-30 my-20 lg:mt-2 lg:mb-15 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image collage */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[480px] h-[500px]">
              {/* Large rectangle */}
              <div className="absolute left-0 top-0 w-[58%] h-[68%] rounded-[2rem] overflow-hidden shadow-float border border-white">
                <video
                  src={Video1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='metadata'
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top-right rectangle */}
              <div className="absolute right-1 top-0 w-[38%] h-[44%] rounded-[1.5rem] overflow-hidden shadow-card border border-white">
                <img
                  src={leavingRoom}
                  alt="Cleaning supplies"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-right circle */}
              <div className="absolute right-4 bottom-4 w-[44%] h-[44%] rounded-full overflow-hidden shadow-float border-4 border-white">
                <video
                  src={Video2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='metadata'
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-left small circle */}
              <div className="absolute left-0 -bottom-5 w-[55%] h-[35%] rounded-full overflow-hidden border-4 border-white shadow-card">
                <img
                  src={TVWall1}
                  alt="Mopping floor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience badge */}
              <div
                id="collage-experience-badge"
                className="absolute top-[45%] left-[65%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-brand-900 via-slate-900 to-brand-950 text-white rounded-full p-6 w-33 h-33 flex flex-col items-center justify-center text-center shadow-2xl border-2 border-brand-300 animate-bounce-slow float-1"
              >
                {/* Glowing halo */}
                <div className="absolute -inset-1 rounded-full border animate-ping opacity-45 pointer-events-none" />
                
                <span className="font-mono text-xs font-black text-brand-300 leading-none">EST. 2019</span>
                <span className="font-sans font-black text-3xl text-white tracking-tight block my-0.5 leading-none">6+</span>
                <span className="font-sans text-[8px] font-bold text-slate-100 uppercase tracking-widest leading-none">Years of Craftmanship</span>
              </div>

              {/* Floating Statistic Card 1 - Satisfaction */}
              <div
                id="floating-card-metric"
                className="glassHoverCard absolute -top-25 left-15 p-4 rounded-3xl border border-slate-100 shadow-2xl float-1 z-10 hover:-translate-y-1 transition-transform duration-300 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-extrabold text-[10px] text-emerald-600 uppercase tracking-widest leading-none">
                    Quality Assured
                  </span>
                </div>
                <span className="font-sans font-black text-xl font-800 gradient-text block leading-tight">
                  99.8% Rate
                </span>
                <span className="font-sans text-[10px] font-medium text-slate-900 block leading-tight mt-0.5">
                  Customer satisfaction across all furniture collections.
                </span>
              </div>

              {/* Floating Statistic Card 2 - Homes Detailed */}
              <div
                id="floating-card-volume"
                className="glassHoverCard float-1 z-10 absolute -bottom-25 right-10 p-4 rounded-3xl border border-slate-100 shadow-2xl hover:translate-y-1 transition-transform duration-300 max-w-[190px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 fill-brand-300 text-emerald-600" />
                  </div>
                  <span className="font-sans font-extrabold text-[9px] text-emerald-600 uppercase tracking-widest leading-none ">
                    Crafted Collection
                  </span>
                </div>
                <span className="font-sans font-black  text-xl font-800 gradient-text block leading-tight">
                  4k+ Pieces
                </span>
                <span className="font-sans text-[10px] font-medium text-slate-900 block leading-tight mt-0.5">
                  Beautiful furniture pieces delivered to happy customers.
                </span>
              </div>

              {/* Top left */}
              <div className="absolute -top-8 -left-8 w-35 h-35 rounded-full overflow-hidden border-4 border-white shadow-card">
                <img
                  src={TVWall2}
                  alt="Mopping floor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom right */}
              <div className="absolute -bottom-4 -right-8 w-30 h-30 rounded-full overflow-hidden border-4 border-white shadow-card">
                <img
                  src={TVWall3}
                  alt="Mopping floor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className='mt-10'>
            <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-600 text-teal-600">Our Story</span>
            </div>
              <h2 className="text-5xl font-800 tracking-tight text-slate-900 mb-6 leading-tight">
                Bringing Comfort And Style To{' '}
                <span className="gradient-text italic">Every Living Space</span>
              </h2>

              <p className="text-slate-500 leading-relaxed mb-5">
                Furnish was founded with a passion for creating furniture that combines timeless design, exceptional craftsmanship, and everyday comfort. From elegant living room pieces to functional bedroom and dining collections, we help transform houses into beautiful homes.
              </p>

              <p className="text-slate-500 leading-relaxed mb-10">
                Every piece we create is carefully designed using premium materials and attention to detail. Our mission is to provide furniture that not only enhances your space but also delivers lasting quality, comfort, and value for years to come.
              </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="bg-brand-50 rounded-2xl px-5 py-5">
                  <div className="text-3xl font-800 gradient-text mb-1">{s.value}</div>
                  <div className="text-sm text-slate-500 font-500">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#collection"
              className="btn-shine inline-flex items-center gap-2.5 gradient-bg text-white font-700 px-7 py-4 rounded-2xl shadow-blue hover:opacity-90 transition-all"
            >
              Explore Our Collection
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

