import React, { useState } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tipe Mobil', href: '#showroom' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Car className="h-8 w-8 text-toyota-red mr-2" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">TUNAS TOYOTA</h1>
              <p className="text-xs text-gray-500 font-medium">CIMAHI - SALES RESMI</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-toyota-red font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-toyota-red text-white px-5 py-2.5 rounded-full font-semibold flex items-center hover:bg-red-700 transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-toyota-red hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-toyota-red text-white px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Whatsapp Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;