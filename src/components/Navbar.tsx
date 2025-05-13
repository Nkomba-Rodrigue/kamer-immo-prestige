
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/95 shadow-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gold">
                <span className="text-forest">Kameroun</span> Prestige Immo
              </h1>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gold transition-colors">
              Accueil
            </a>
            <a href="#properties" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gold transition-colors">
              Propriétés
            </a>
            <a href="#types" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gold transition-colors">
              Nos Services
            </a>
            <a href="#testimonials" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gold transition-colors">
              Témoignages
            </a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gold transition-colors">
              Contact
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+237123456789" className="flex items-center text-sm text-gray-700 hover:text-gold">
              <PhoneCall className="h-4 w-4 mr-1" />
              +237 123 456 789
            </a>
            <Button className="bg-gold hover:bg-gold/80 text-white">
              <Mail className="h-4 w-4 mr-2" />
              Nous contacter
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold">
              Accueil
            </a>
            <a href="#properties" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold">
              Propriétés
            </a>
            <a href="#types" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold">
              Nos Services
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold">
              Témoignages
            </a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold">
              Contact
            </a>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center">
              <PhoneCall className="h-4 w-4 mr-2 text-gold" />
              <span className="text-sm text-gray-700">+237 123 456 789</span>
            </div>
            <Button className="mt-3 w-full bg-gold hover:bg-gold/80 text-white">
              <Mail className="h-4 w-4 mr-2" />
              Nous contacter
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
