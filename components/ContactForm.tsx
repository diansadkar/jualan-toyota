import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp URL
    const text = `Halo, saya ${formData.name}. \nNo HP: ${formData.phone}. \nTertarik dengan: ${formData.model}. \nPesan: ${formData.message}`;
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="bg-toyota-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Contact Info Side */}
          <div className="lg:w-2/5 bg-toyota-red p-10 text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decorative Circle */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-700 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
              <p className="mb-10 text-red-100">
                Siap membantu Anda mendapatkan mobil impian. Konsultasikan kebutuhan Anda sekarang.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 opacity-80" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Alamat</h4>
                    <p className="text-red-100 text-sm">{CONTACT_INFO.dealerName}</p>
                    <p className="text-red-100 text-sm">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1 opacity-80" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Whatsapp / Telepon</h4>
                    <p className="text-red-100 font-mono text-lg">0851-6176-246</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 mt-1 opacity-80" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Jam Operasional</h4>
                    <p className="text-red-100 text-sm whitespace-pre-line">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-red-500/30">
               <p className="text-sm text-red-200 text-center">Dealer Resmi Toyota Cimahi</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Formulir Informasi</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-toyota-red focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-toyota-red focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model Diminati</label>
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-toyota-red focus:border-transparent outline-none transition-all bg-gray-50"
                >
                  <option value="">Pilih Model Mobil...</option>
                  <option value="Veloz Hybrid">Veloz Hybrid (Featured)</option>
                  <option value="Avanza">Avanza</option>
                  <option value="Rush">Rush</option>
                  <option value="Raize">Raize</option>
                  <option value="Innova Zenix">Innova Zenix</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan / Pertanyaan</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-toyota-red focus:border-transparent outline-none transition-all bg-gray-50"
                  placeholder="Apakah ada promo bulan ini?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-toyota-dark text-white font-bold py-4 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
              >
                <Send className="w-5 h-5" />
                Kirim via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                Data Anda aman bersama kami. Kami akan merespons secepatnya.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;