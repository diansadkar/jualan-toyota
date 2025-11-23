import React, { useState } from 'react';
import { Category } from '../types';
import { CAR_DATA } from '../constants';
import { CheckCircle } from 'lucide-react';

const CarShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.MPV);

  const filteredCars = CAR_DATA.filter(car => car.category === activeCategory && !car.isFeatured);

  return (
    <section id="showroom" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Koleksi Toyota Terbaru</h2>
          <div className="w-20 h-1 bg-toyota-red mx-auto rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-toyota-red text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-toyota-red shadow-sm">
                  {car.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {car.description || 'Hubungi kami untuk spesifikasi lengkap dan penawaran harga terbaik.'}
                </p>
                
                <a 
                  href="#contact" 
                  className="block w-full py-3 rounded-lg border border-toyota-red text-toyota-red font-semibold text-center hover:bg-toyota-red hover:text-white transition-colors"
                >
                  Tanya Promo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;