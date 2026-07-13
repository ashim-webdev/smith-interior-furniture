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

import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"
import Image3 from "../images/image3.jpg"
import Image4 from "../images/image4.jpg"
import Image5 from "../images/image5.jpg"
import Image7 from "../images/image7.jpg"
import Image9 from "../images/image9.jpg"
import Image10 from "../images/image10.jpg"
import Image11 from "../images/image11.avif"

const products = [
  {
    image: Image1,
    title: "Regal Walnut Bunk Suite",
    description:
      "A premium solid-wood bunk bed featuring a rich walnut finish, reinforced craftsmanship, and a space-efficient design that brings elegance and comfort to modern family bedrooms.",
    price: "₦285,000",
    tag: "Best Seller",
  },
  {
    image: Image2,
    title: "Imperial King Bedroom Collection",
    description:
      "An exquisitely crafted king-size bed with a refined contemporary silhouette, premium hardwood construction, and a luxurious finish designed for sophisticated master bedrooms.",
    price: "₦289,600",
    tag: "New Arrival",
  },
  {
    image: Image4,
    title: "Prestige Grand Wardrobe",
    description:
      "A spacious luxury wardrobe with multiple storage compartments, elegant wood grain detailing, and a timeless finish that combines beauty with everyday functionality.",
    price: "₦312,300",
    tag: "Premium Collection",
  },
  {
    image: Image5,
    title: "Signature Executive Wardrobe",
    description:
      "Designed for refined interiors, this executive wardrobe offers generous hanging space, organized shelving, and premium craftsmanship wrapped in a sleek contemporary design.",
    price: "₦234,200",
    tag: "Customer Favorite",
  },
  {
    image: Image7,
    title: "Luxe Heritage Coffee Table",
    description:
      "A statement center table crafted with a premium wooden frame and an elegant tabletop, adding warmth, sophistication, and timeless character to luxury living spaces.",
    price: "₦89,800",
    tag: "Luxury Edition",
  },
  {
    image: Image9,
    title: "Ashford Luxury Lounge Sofa",
    description:
      "A sophisticated gray sofa upholstered in premium fabric, offering exceptional comfort, generous seating, and a refined design that complements contemporary living rooms.",
    price: "₦200,000",
    tag: "Limited Stock",
  },
  {
    image: Image10,
    title: "Royal Estate Wardrobe",
    description:
      "An expansive luxury wardrobe featuring premium wood construction, refined finishes, and intelligently designed storage for an elegant and organized bedroom experience.",
    price: "₦130,000",
    tag: "Editor's Choice",
  },
  {
    image: Image11,
    title: "Emerald Royale Sofa",
    description:
      "An elegant dark green luxury sofa upholstered with premium materials, featuring plush cushioning, deep seating, and a sophisticated design that transforms any living space into a statement of luxury.",
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
                    loading="lazy"
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