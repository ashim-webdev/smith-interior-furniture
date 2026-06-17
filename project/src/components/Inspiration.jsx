import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TVWall1 from "../images/TVWall1.jpg"
import TVWall2 from "../images/TVWall2.jpg"
import TVWall3 from "../images/TVWall3.jpg"
import TVWall4 from "../images/TVWall4.jpg"
import TVWall5 from "../images/TVWall5.jpg"
import TVWall5i from "../images/TVWall5i.jpg"
import TVWall6 from "../images/TVWall6.webp"
import TVWall7 from "../images/TVWall7.avif"
import TVWall8 from "../images/TVWall8.jpg"
import TVWall9 from "../images/TVWall9.avif"
import TVWall10 from "../images/TVWall10.jpg"



const inspirations = [
  {
    id: 1,
    title: "Floating TV Wall Panel",
    tag: "Modern Design",
    image: TVWall1,
  },
  {
    id: 2,
    title: "Luxury Marble TV Unit",
    tag: "Premium Finish",
    image: TVWall2,
  },
  {
    id: 3,
    title: "Wood Slat Feature Wall",
    tag: "Contemporary",
    image: TVWall3,
  },
  {
    id: 4,
    title: "Built-In Entertainment Center",
    tag: "Custom Installation",
    image: TVWall4,
  },
  {
    id: 5,
    title: "Minimalist TV Console Wall",
    tag: "Modern Living",
    image: TVWall5i,
  },
  {
    id: 6,
    title: "Luxury Media Wall",
    tag: "Premium Interior",
    image: TVWall6,
  },
  {
    id: 7,
    title: "LED Accent TV Wall",
    tag: "Smart Lighting",
    image: TVWall7,
  },
  {
    id: 8,
    title: "Custom Wooden TV Unit",
    tag: "Woodwork",
    image: TVWall8,
  },
  {
    id: 9,
    title: "Modern Entertainment Wall",
    tag: "Luxury Design",
    image: TVWall9,
  },
  {
    id: 10,
    title: "Floor-to-Ceiling TV Feature",
    tag: "Bespoke Installation",
    image: TVWall10,
  },
];

export default function Inspiration() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(inspirations.length / 5);

  const visibleImages = inspirations.slice(
    page * 5,
    page * 5 + 5
  );

  return (
    <section id="gallery" className="scroll-mt-20 py-10 px-4 sm:px-6 lg:px-8 bg-[#F7F8F9]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-3">
              TV Wall Designs
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-[#222222] mb-4">
              70+ Stunning
              <br />
              <span className="text-teal-600">
                TV Wall Installations
              </span>
            </h2>

            <p className="text-[#6B7280] text-sm leading-relaxed mb-6 max-w-md">
              Explore our collection of custom TV wall units, floating panels, media walls, and entertainment centers crafted for homes across Nigeria.
            </p>

            <span className="flex justify-start">
              <a href="#contact" className="bg-teal-700 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-teal-800 transition-all flex items-center gap-2 hover:gap-4 cursor-pointer">
                Let's Connect
                <ArrowRight size={14} />
              </a>
            </span>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              onClick={() =>
                setPage((prev) =>
                  prev === 0
                    ? totalPages - 1
                    : prev - 1
                )
              }
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2
                ${
                  page === 0
                    ? "bg-teal-700 text-white scale-110 shadow-lg border-2 border-white"
                    : "bg-teal-500 text-white hover:bg-teal-700"
                }
              `}
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={() =>
                setPage((prev) =>
                  prev === totalPages - 1
                    ? 0
                    : prev + 1
                )
              }
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                ${
                  page === totalPages - 1
                    ? "bg-teal-700 text-white scale-110 shadow-lg border-2 border-white"
                    : "bg-teal-500 text-white hover:bg-teal-700"
                }
              `}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -80,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            {/* TOP ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleImages
                .slice(0, 3)
                .map((item, i) => (
                  <div
                    key={item.id}
                    className="relative rounded-[30px] overflow-hidden group cursor-pointer shadow-lg shadow-black/40"
                    style={{
                      height:
                        i === 1
                          ? "420px"
                          : "360px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-100 backdrop-blur text-emerald-700 text-xs px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              {visibleImages
                .slice(3)
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-[30px] overflow-hidden group cursor-pointer shadow-lg shadow-black/40"
                    style={{
                      height: "420px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-100 backdrop-blur text-emerald-700 text-xs px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map(
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  setPage(index)
                }
                className={`transition-all duration-300 rounded-full ${
                  page === index
                    ? "w-6 h-2 bg-teal-700"
                    : "w-2 h-2 bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}