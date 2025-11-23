import React from 'react';
import { Zap, Calendar, Tag, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FeaturedProduct: React.FC = () => {
  const handlePromoClick = () => {
    const text = `Halo, saya tertarik dengan Promo Launching New Veloz Hybrid seharga Rp. 299.000.000. Mohon info lebih lanjut.`;
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl text-white border border-gray-700">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Section */}
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[450px]">
              <img 
                src="https://awsimages.detik.net.id/community/media/visual/2025/11/21/toyota-veloz-hybrid-1763697805969_169.jpeg?w=600&q=90" 
                alt="New Veloz Hybrid" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-toyota-red text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse shadow-lg flex items-center">
                <Zap className="w-4 h-4 mr-2 fill-white" />
                PROMO LAUNCHING
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                 <Zap className="w-40 h-40" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2">New Veloz Hybrid</h2>
              <div className="w-20 h-1.5 bg-toyota-red rounded-full mb-6"></div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Teknologi hybrid Toyota yang unggul, efisiensi bahan bakar dengan tenaga yang powerful. 
                Nikmati pengalaman berkendara masa depan dengan kenyamanan maksimal untuk keluarga Anda.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Tag className="w-4 h-4 mr-2" />
                    <span className="text-sm uppercase tracking-wider">Harga Promo</span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">
                    Rp 299.000.000
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm uppercase tracking-wider">Periode</span>
                  </div>
                  <div className="text-xl font-semibold text-white">
                    Hingga Desember 2025
                  </div>
                </div>
              </div>

              <button 
                onClick={handlePromoClick}
                className="group bg-toyota-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-600/30 flex items-center justify-center lg:justify-start w-full sm:w-auto"
              >
                <span>Ambil Promo Sekarang</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="mt-4 text-sm text-gray-500 text-center lg:text-left">
                *Syarat & Ketentuan Berlaku. Stok terbatas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;