import { ShoppingBag, Truck, HeadphonesIcon, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: 'Easy Shopping',
    desc: 'Browse thousands of curated furniture pieces from our intuitive store.',
  },
  {
    icon: Truck,
    title: 'Fast & Free Shipping',
    desc: 'Free delivery on all orders above $199. Fast and insured shipping.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    desc: 'Our dedicated team is here around the clock to assist you anytime.',
  },
  {
    icon: ShieldCheck,
    title: 'Money Back Guarantee',
    desc: '30-day hassle-free returns. Your satisfaction is our top priority.',
  },
];

export default function Features() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
              style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-4">
                <Icon size={24} className="text-teal-600" />
              </div>
              <h3 className="text-sm font-bold text-[#222222] mb-1.5">{title}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
