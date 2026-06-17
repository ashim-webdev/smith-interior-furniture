import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import CategoryShowcase from './components/CategoryShowcase';
import ProductCatalog from './components/ProductCatalog';
import SuperSale from './components/SuperSale';
import BestSelling from './components/BestSelling';
import Inspiration from './components/Inspiration';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { CtaBanner } from "./components/Footer"

export default function App() {
  return (
    <div className="relative h-full bg-white font-sans overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
        <CategoryShowcase />
        <ProductCatalog />
        {/* <SuperSale /> */}
        {/* <BestSelling /> */}
        <Inspiration />
        <Testimonials />
      </main>
      <CtaBanner />
      <Footer />

      <div className='fixed bottom-0 right-0'>
        <div class="elfsight-app-66d4319e-10e0-422a-9e81-58842293fb25" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
}
