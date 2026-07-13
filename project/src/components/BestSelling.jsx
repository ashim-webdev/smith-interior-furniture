import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const bestSellers = [
  {
    id: 1,
    name: 'Luxury Sofa',
    price: 818.00,
    rating: 4.8,
    reviews: 174,
    tag: 'Best Seller',
    tagColor: 'bg-teal-700',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 2,
    name: 'Premium Lamp',
    price: 579.00,
    rating: 4.9,
    reviews: 98,
    tag: 'Top Rated',
    tagColor: 'bg-orange-500',
    image: 'https://images.pexels.com/photos/1568945/pexels-photo-1568945.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 3,
    name: 'Accent Chair',
    price: 269.00,
    rating: 4.7,
    reviews: 83,
    tag: 'Trending',
    tagColor: 'bg-purple-600',
    image: 'https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 4,
    name: 'Soft Fan Sofa',
    price: 512.00,
    rating: 4.6,
    reviews: 62,
    tag: 'New',
    tagColor: 'bg-teal-700',
    image: 'https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
];

function BestSellerCard({ item }) {
  const [wished, setWished] = useState(false);

  return (
    <div className="bg-white rounded-4xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative overflow-hidden bg-[#F7F8F9]" style={{ height: '260px' }}>
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className={`absolute top-4 left-4 ${item.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {item.tag}
        </span>
        <button
          onClick={() => setWished(!wished)}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
            wished ? 'bg-red-50 text-red-500' : 'bg-white text-[#6B7280] hover:text-red-400'
          }`}
        >
          <Heart size={15} fill={wished ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-200'}
              fill={i < Math.floor(item.rating) ? 'currentColor' : 'currentColor'}
            />
          ))}
          <span className="text-xs text-[#6B7280] ml-1">{item.rating} ({item.reviews})</span>
        </div>
        <h3 className="text-base font-bold text-[#222222] mb-1">{item.name}</h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-black text-teal-700">${item.price.toFixed(2)}</span>
          <button className="bg-teal-700 text-white p-2.5 rounded-xl hover:bg-teal-800 transition-colors duration-200">
            <ShoppingCart size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BestSelling() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Top Picks</p>
            <h2 className="text-3xl lg:text-4xl font-black text-[#222222]">
              Our Best Selling Product
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className={`block rounded-full transition-all duration-300 ${
                    i === 0 ? 'w-6 h-2 bg-teal-700' : 'w-2 h-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((item) => (
            <BestSellerCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
