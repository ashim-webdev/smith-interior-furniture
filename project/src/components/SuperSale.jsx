import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import softChair from "../images/softChair.png"

function getTimeLeft(targetDate) {
  const total = targetDate.getTime() - Date.now();
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

const target = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 20 * 60 * 1000 + 30 * 1000);

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-sm border border-gray-100">
        <span className="text-2xl font-black text-teal-700">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-[#6B7280] text-xs mt-2 font-medium">{label}</span>
    </div>
  );
}

export default function SuperSale() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-4xl overflow-hidden bg-white border border-gray-100 relative"
          style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.07)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-0">
            {/* Left: countdown */}
            <div className="p-8 lg:p-10 bg-[#F7F8F9] h-full flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-black px-3 py-1 rounded-full animate-pulse">
                  SUPER SALE!
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#222222] mb-1">Super Sale!</h3>
              <p className="text-[#6B7280] text-sm mb-6">Limited time exclusive offer for premium furniture pieces.</p>

              <div className="flex items-center gap-3 mb-8">
                <TimeBox value={timeLeft.days} label="Days" />
                <span className="text-2xl font-black text-teal-600 mb-6">:</span>
                <TimeBox value={timeLeft.hours} label="Hours" />
                <span className="text-2xl font-black text-teal-600 mb-6">:</span>
                <TimeBox value={timeLeft.minutes} label="Minutes" />
                <span className="text-2xl font-black text-teal-600 mb-6">:</span>
                <TimeBox value={timeLeft.seconds} label="Seconds" />
              </div>

              <button className="bg-teal-700 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-teal-800 transition-colors duration-200 flex items-center gap-2 w-fit">
                Shop Now <ArrowRight size={14} />
              </button>
            </div>

            {/* Center: product image */}
            <div className="relative flex justify-center items-center py-8 lg:py-0" style={{ minHeight: '300px' }}>
              <img
                src={softChair}
                alt="Sale Sofa"
                loading="lazy"
                className="w-50 object-cover"
                style={{ minHeight: '300px' }}
              />
              {/* Floating price sticker */}
              <div
                className="absolute -top-3 right-4 bg-teal-700 text-white rounded-2xl px-4 py-2 shadow-lg z-10"
              >
                <p className="text-xs font-medium opacity-80">Was $599</p>
                <p className="text-xl font-black">$399.00</p>
              </div>
            </div>

            {/* Right: product details */}
            <div className="p-8 lg:p-10 bg-[#F7F8F9] h-full flex flex-col justify-center">
              <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">-33% OFF</span>
              <h3 className="text-2xl font-black text-[#222222] mb-2">Premium Lounge Sofa</h3>
              <p className="text-[#6B7280] text-sm mb-6 leading-relaxed">
                Handcrafted with premium Italian leather and solid oak frame. The epitome of comfort meets timeless design.
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-black text-teal-700">$399.00</span>
                <span className="text-lg text-[#6B7280] line-through">$599.00</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Sand', 'Charcoal', 'Teal', 'Ivory'].map((color) => (
                  <button
                    key={color}
                    className="px-4 py-1.5 border-2 border-gray-200 rounded-full text-xs font-medium text-[#6B7280] hover:border-teal-500 hover:text-teal-700 transition-all"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
