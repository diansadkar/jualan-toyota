import React from 'react';
import { Car } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Car className="h-8 w-8 text-toyota-red mr-3" />
            <span className="text-xl font-bold tracking-wider">TUNAS TOYOTA CIMAHI</span>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Sales Resmi Toyota Cimahi.</p>
            <p>Authorized Dealer Representative.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;