
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 md:pt-40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-black/40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580223530484-849f48ee8ff8?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Découvrez Votre Futur <span className="text-gold">Chez-Vous</span> au Cameroun
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Des propriétés exceptionnelles pour la location et la vente dans les plus beaux quartiers du Cameroun
          </p>
        </div>
        
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-4 md:p-6 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Type de bien</label>
              <div className="relative">
                <select className="block w-full pl-10 pr-3 py-3 text-base border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-gold focus:border-gold">
                  <option>Tous les types</option>
                  <option>Appartements</option>
                  <option>Maisons</option>
                  <option>Terrains</option>
                  <option>Bureaux</option>
                </select>
                <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Localisation</label>
              <div className="relative">
                <select className="block w-full pl-10 pr-3 py-3 text-base border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-gold focus:border-gold">
                  <option>Toutes les villes</option>
                  <option>Yaoundé</option>
                  <option>Douala</option>
                  <option>Bafoussam</option>
                  <option>Limbe</option>
                  <option>Kribi</option>
                </select>
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Action</label>
              <Button className="w-full bg-gold hover:bg-gold/80 py-6 h-auto text-base">
                <Search className="h-5 w-5 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
