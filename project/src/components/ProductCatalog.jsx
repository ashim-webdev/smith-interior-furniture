import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sofa1 from "../images/sofa1.jpeg"
import lamp from "../images/lamp.png"
import woodenLamp from "../images/woodenLamp.webp"
import table1 from "../images/table1.jpg"
import table2 from "../images/table2.jpg"
import table3 from "../images/table3.jpg"

const products = [
  // SOFAS
  {
    id: 1,
    name: "White Fabric Sofa",
    category: "Sofa",
    price: 312,
    oldPrice: 420,
    rating: 4.8,
    reviews: 128,
    badge: "New",
    badgeColor: "bg-teal-700",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Deep Blue Sofa Set",
    category: "Sofa",
    price: 448.5,
    oldPrice: 590,
    rating: 4.9,
    reviews: 94,
    badge: "Hot",
    badgeColor: "bg-orange-500",
    image:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Gray Fabric Sofa",
    category: "Sofa",
    price: 219,
    oldPrice: 299,
    rating: 4.7,
    reviews: 72,
    badge: "Sale",
    badgeColor: "bg-red-500",
    image:
      sofa1,
  },

  // CHAIRS
  {
    id: 4,
    name: "Comfort Chair",
    category: "Chair",
    price: 152,
    oldPrice: null,
    rating: 4.6,
    reviews: 56,
    badge: null,
    badgeColor: "",
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    name: "Aristocrat Chair",
    category: "Chair",
    price: 178,
    oldPrice: 220,
    rating: 4.8,
    reviews: 61,
    badge: "New",
    badgeColor: "bg-teal-700",
    image:
      "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 6,
    name: "Luxury Lounge Chair",
    category: "Chair",
    price: 240,
    oldPrice: 300,
    rating: 4.9,
    reviews: 44,
    badge: "Hot",
    badgeColor: "bg-orange-500",
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400",
  },

  // LAMPS
  {
    id: 7,
    name: "Luxury Lamp",
    category: "Lamp",
    price: 89,
    oldPrice: 120,
    rating: 4.5,
    reviews: 43,
    badge: null,
    badgeColor: "",
    image:
      lamp,
  },
  {
    id: 8,
    name: "Golden Floor Lamp",
    category: "Lamp",
    price: 135,
    oldPrice: 180,
    rating: 4.7,
    reviews: 52,
    badge: "Sale",
    badgeColor: "bg-red-500",
    image:
      "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 9,
    name: "Modern Lamp",
    category: "Lamp",
    price: 110,
    oldPrice: null,
    rating: 4.8,
    reviews: 31,
    badge: null,
    badgeColor: "",
    image:
      woodenLamp
  },

  // TABLES
  {
    id: 10,
    name: "Wooden Coffee Table",
    category: "Table",
    price: 199,
    oldPrice: 260,
    rating: 4.8,
    reviews: 87,
    badge: "Hot",
    badgeColor: "bg-orange-500",
    image:
      table1,
  },
  {
    id: 11,
    name: "Minimal Table",
    category: "Table",
    price: 155,
    oldPrice: 190,
    rating: 4.6,
    reviews: 41,
    badge: null,
    badgeColor: "",
    image:
      table2,
  },
  {
    id: 12,
    name: "Luxury Side Table",
    category: "Table",
    price: 225,
    oldPrice: 290,
    rating: 4.9,
    reviews: 66,
    badge: "New",
    badgeColor: "bg-teal-700",
    image:
      table3,
  },
];

function ProductCard({ product }) {
  const [wished, setWished] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl overflow-hidden group hover:shadow-xl border-r border-b border-[#007A71]"
    >
      <div className="relative overflow-hidden bg-[#F7F8F9] h-[220px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full bg-emerald-50 object-cover transition-all duration-700 group-hover:scale-110"
        />

        {product.badge && (
          <span
            className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {product.badge}
          </span>
        )}

        {/* <button
          onClick={() => setWished(!wished)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center ${
            wished
              ? "bg-red-50 text-red-500"
              : "bg-white text-gray-500 hover:text-red-500"
          }`}
        >
          <Heart
            size={15}
            fill={wished ? "currentColor" : "none"}
          />
        </button> */}

        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-all duration-500">
          <a href="#appointment" className="w-full bg-teal-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-800">
            <Phone size={14} />
            Get In Touch
          </a>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <Star
            size={12}
            fill="#F59E0B"
            className="text-yellow-400"
          />
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <h3 className="font-bold text-gray-800 mb-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="font-black text-lg text-teal-700">
            {product.price}K
          </span>

          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              {product.oldPrice}K
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductCatalog() {
  const categories = ["All", "Sofa", "Chair", "Lamp", "Table"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  const displayedProducts =
    activeCategory === "All"
      ? filteredProducts.slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        )
      : filteredProducts;

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (
    <section className="pt-12 pb-16 px-4 bg-[#F7F8F9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">
          <div>
            <p className="text-teal-600 uppercase tracking-wider text-sm font-semibold">
              Our Customized Collection
            </p>

            <h2 className="text-4xl font-black text-gray-900">
              Custom Products
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 my-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-teal-700 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="wait">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {activeCategory === "All" && (
          <div className="flex justify-end items-center gap-4 mt-5">
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(prev - 1, 1)
                  )
                }
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
                ${
                  currentPage === 1
                    ? "bg-teal-700 text-white scale-110 shadow-lg border-2 border-white"
                    : "bg-teal-500 text-white hover:bg-teal-700"
                }`}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200
                ${
                  currentPage === totalPages
                    ? "bg-teal-700 text-white scale-110 shadow-lg border-2 border-white"
                    : "bg-teal-500 text-white hover:bg-teal-700"
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}



