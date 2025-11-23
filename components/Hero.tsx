import React from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import { CAR_DATA } from '../constants';

const Hero: React.FC = () => {
  const featuredCar = CAR_DATA.find(c => c.isFeatured) || CAR_DATA[0];

  return (
    <section id="hero" className="relative bg-toyota-dark text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={featuredCar.imageUrl} 
          alt={featuredCar.name}
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10 flex items-center min-h-[600px]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center bg-toyota-red/90 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4 mr-2 fill-current" />
            FEATURED PRODUCT
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Saatnya Beranjak ke <span className="text-toyota-red">Toyota</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Temukan pilihan-pilihan Toyota terbaru dengan harga terbaik dan pelayanan profesional.
            Rasakan kecanggihan <span className="font-bold text-white">{featuredCar.name}</span> sekarang.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-toyota-red text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-red-700 transition-transform transform hover:scale-105 shadow-xl">
              Minta Penawaran
            </a>
            <a href="#showroom" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-center hover:bg-white hover:text-toyota-dark transition-all flex items-center justify-center group">
              Lihat Semua Mobil
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative shape at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default Hero;