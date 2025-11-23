import React from 'react';
import { ShieldCheck, Clock, MapPin, Award } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-toyota-red" />,
      title: "Mobil Original",
      desc: "Semua unit baru, 100% asli, dan bergaransi resmi Toyota Indonesia."
    },
    {
      icon: <Clock className="w-10 h-10 text-toyota-red" />,
      title: "Pelayanan Cepat",
      desc: "Proses pembelian mudah, kredit dibantu sampai approve, dan pengiriman cepat."
    },
    {
      icon: <MapPin className="w-10 h-10 text-toyota-red" />,
      title: "Lokasi Strategis",
      desc: `${CONTACT_INFO.dealerName}, ${CONTACT_INFO.address}. Mudah dijangkau.`
    }
  ];

  return (
    <section id="about" className="py-20 bg-toyota-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dealer resmi Toyota dengan pengalaman lebih dari <span className="font-bold text-toyota-red">10 tahun</span> melayani pelanggan di Cimahi dan sekitarnya. 
              Kami berkomitmen menyediakan jajaran mobil Toyota terlengkap dengan harga paling kompetitif dan pelayanan purna jual terbaik.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Kepuasan Anda adalah prioritas kami. Hubungi kami untuk konsultasi gratis mengenai kebutuhan kendaraan Anda.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <Award className="w-8 h-8 text-yellow-500 mr-3" />
                    <div>
                        <h4 className="font-bold text-gray-900">Top Dealer</h4>
                        <p className="text-xs text-gray-500">Terpercaya di Cimahi</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="lg:w-1/2 grid sm:grid-cols-1 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md flex items-start hover:shadow-lg transition-shadow">
                <div className="bg-red-50 p-3 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;