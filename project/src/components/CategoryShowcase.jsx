import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import chair from "../images/Chair.jpg";
import hoverChair from "../images/hoverChair.webp";
import hoverChair2 from "../images/HoverChair2.png";

import twinTable from "../images/twinTable.png"
import twoTable from "../images/twoTable.png"
import dinningTable from "../images/dinningTable.webp"
import lamp from "../images/lamp.png"
import tableWhite from "../images/tableWhite.png"
import softChair from "../images/softChair.png"
import tableBrown from "../images/tableBrown.png"
import goldCouch from "../images/goldCouch.png"
import gray from "../images/gray.avif";

const products = [
  {
    image: chair,
    title: "Luna Brown Lounge Chair",
    description:
      "Crafted with premium brown upholstery and a sculpted silhouette for exceptional comfort and timeless elegance.",
    price: "₦285,000",
    tag: "Best Seller",
  },
  {
    image: hoverChair,
    title: "Nordic Oak Accent Chair",
    description:
      "Minimalist Scandinavian design featuring solid oak construction and refined craftsmanship for modern interiors.",
    price: "₦320,000",
    tag: "New Arrival",
  },
  {
    image: tableBrown,
    title: "Elegant Twin Table",
    description:
      "A luxurious twin table designed with plush cushioning and sophisticated detailing for premium living spaces.",
    price: "₦650,000",
    tag: "Premium Collection",
  },
  {
    image: twinTable,
    title: "Aurora Re-Adjustable Twin Table ",
    description:
      "Experience superior luxury twin table with ergonomic support, quality wood, and contemporary styling.",
    price: "₦410,000",
    tag: "Customer Favorite",
  },
  {
    image: lamp,
    title: "Milano Dark Coffee Lamp",
    description:
      "Featuring a stunning dark coffee top and elegant wooden frame, designed to elevate modern interiors.",
    price: "₦220,000",
    tag: "Luxury Edition",
  },
  {
    image: dinningTable,
    title: "Prestigious Dining Collection",
    description:
      "An exquisite dining set combining premium materials, refined finishes, and exceptional durability.",
    price: "₦890,000",
    tag: "Limited Stock",
  },
  {
    image: goldCouch,
    title: "Luxury Leather Couch",
    description:
      "Flexible luxury leather couch designed for spacious living rooms with unmatched comfort and sophistication.",
    price: "₦1,150,000",
    tag: "Editor's Choice",
  },
  {
    image: tableWhite,
    title: "Elite Marble Table",
    description:
      "Contemporary marble table solution blending elegant aesthetics with practical organization for luxury homes.",
    price: "₦540,000",
    tag: "Exclusive Design",
  },
];

export default function FurnitureCarousel() {
  return (
    <section id="collection" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-start">
          <p className="text-[#0B5D6E] font-semibold uppercase tracking-[0.2em] text-sm">
            Premium Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mt-3">
            Luxury Furniture
          </h2>

          <p className="mt-4 max-w-2xl text-[#6B7280]">
            Discover expertly crafted furniture designed to transform
            your living spaces with comfort, elegance, and timeless style.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1200}
          grabCursor={true}
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">

                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-100 h-[320px] object-cover transition-transform duration-700 group-hover:scale-110
                    "
                  />

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full bg-emerald-50 backdrop-blur text-xs font-semibold text-[#0B5D6E]">
                      {product.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-[#111827]">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#6B7280] min-h-[72px]">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">
                        Starting From
                      </p>

                      <p className="text-2xl font-black text-[#0B5D6E]">
                        {product.price}
                      </p>
                    </div>

                    <a href="#contact" className="w-12 h-12 rounded-full bg-[#0B5D6E] text-white flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}