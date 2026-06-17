import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blackMen1 from "../images/blackMen1.jpg"
import blackMan2 from "../images/blackMan2.jpg"
import blackMan3 from "../images/blackMan3.jpg"
import blackMan4 from "../images/blackMan4.jpg"
import blackMan5 from "../images/blackMan6.jpg"
import blackMan6 from "../images/blackMan7.jpg"
import blackMan7 from "../images/blackMan8.avif"

import blackWoman1 from "../images/blackWoman1.jpg"
import blackWoman2 from "../images/blackWoman2.webp"
import blackWoman3 from "../images/blackWoman3.jpg"
import blackWoman4 from "../images/blackWoman4.webp"
import blackWoman5 from "../images/blackWoman5.jpg"
import blackWoman6 from "../images/blackWoman6.jpg"
import blackWoman7 from "../images/blackWoman7.jpg"
import blackWoman10 from "../images/blackWoman10.jpg"




const testimonials = [
  {
    id: 1,
    name: "chukuma Samuel",
    role: "Kitchen Cabinet",
    text: "The quality of Furnish's pieces is simply outstanding. Every item I've purchased has exceeded my expectations.",
    rating: 5,
    image:
      blackMen1,
    featured: true,
  },
  {
    id: 2,
    name: "Gabriel Christopher",
    role: "Couch Set",
    text: "I've been furnishing homes for over a decade and Furnish consistently delivers premium quality.",
    rating: 5,
    image:
      blackMan2,
  },
  {
    id: 3,
    name: "Chuka Suleman",
    role: "Sofa Purchase",
    text: "The sofa I ordered arrived perfectly packaged and looks even better in person.",
    rating: 5,
    image:
      blackMan3,
  },
  {
    id: 4,
    name: "David Okonkwo",
    role: "Wooden Doors Installation",
    text: "Furnish transformed my apartment completely. Beautiful and functional pieces.",
    rating: 4,
    image:
      blackMan4,
  },

  {
    id: 5,
    name: "Hamida Jannat",
    role: "Kitchen Cabinet & TV Wall Installation",
    text: "Elegant furniture and excellent customer service. Highly recommended.",
    rating: 5,
    image:
      blackWoman1,
  },
  {
    id: 6,
    name: "Jasmine Okoko",
    role: "Wardrobe & Center Table",
    text: "The craftsmanship is exceptional. Worth every penny.",
    rating: 5,
    image:
      blackWoman2,
  },
  {
    id: 7,
    name: "Amina Yusuf",
    role: "Couch Purchase",
    text: "My living room now feels luxurious thanks to Furnish.",
    rating: 5,
    image:
      blackWoman3,
  },
  {
    id: 8,
    name: "Valerie Somto",
    role: "Kitchen Cabinet & Set Of Couch Purchase",
    text: "Modern designs that fit perfectly into contemporary homes.",
    rating: 5,
    image:
      blackWoman4,
  },

  {
    id: 9,
    name: "Grace Wilson",
    role: "Wooden Lamp",
    text: "Beautiful wooden lamp with attention to every detail.",
    rating: 5,
    image:
      blackMan5,
  },
  {
    id: 10,
    name: "Venus Okoro",
    role: "Dinning Table",
    text: "The quality exceeded my expectations. Amazing experience.",
    rating: 5,
    image:
      blackMan6,
  },
  {
    id: 11,
    name: "Zainab Ndubuisi",
    role: "Set Of Chairs",
    text: "Stylish, comfortable, and delivered on time.",
    rating: 4,
    image:
      blackMan7,
  },
  {
    id: 12,
    name: "Sofia Asada",
    role: "Wardrobe Set",
    text: "Fantastic collection and very easy delivery experience.",
    rating: 5,
    image:
      blackWoman7,
  },
];

const ITEMS_PER_PAGE = 4;

export default function Testimonials() {
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const [page, setPage] = useState(0);

  const visibleTestimonials = testimonials.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="scroll-mt-15 py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex sm:flex-row flex-col gap-2 items-end justify-between mb-5 sm:mb-10">
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Testimonials
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-[#222222] max-w-md">
              Our Clients Beautiful Words For Furnish
            </h2>
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

        {/* Testimonials */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {visibleTestimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                className={`rounded-[32px] p-6 flex flex-col transition-all duration-300 ${
                  t.featured
                    ? "bg-[#0B5D6E] text-white"
                    : "bg-[#F7F8F9] text-[#222222] hover:shadow-lg"
                }`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      fill="currentColor"
                      className={
                        j < t.rating
                          ? "text-yellow-400"
                          : t.featured
                          ? "text-white/30"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <div
                  className={`mb-4 ${
                    t.featured ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  <Quote size={24} />
                </div>

                <p
                  className={`text-sm leading-relaxed flex-1 mb-6 ${
                    t.featured ? "text-white/90" : "text-[#6B7280]"
                  }`}
                >
                  {t.text}
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className={`w-11 h-11 rounded-full object-cover border-2 ${
                      t.featured
                        ? "border-teal-400"
                        : "border-gray-200"
                    }`}
                  />

                  <div>
                    <p
                      className={`text-sm font-bold ${
                        t.featured
                          ? "text-white"
                          : "text-[#222222]"
                      }`}
                    >
                      {t.name}
                    </p>

                    <p
                      className={`text-xs ${
                        t.featured
                          ? "text-teal-300"
                          : "text-[#6B7280]"
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`rounded-full transition-all duration-300 ${
                page === i
                  ? "w-8 h-2 bg-teal-700"
                  : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}