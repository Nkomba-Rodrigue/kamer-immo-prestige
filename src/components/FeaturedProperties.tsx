
import React from 'react';
import { Button } from '@/components/ui/button';
import PropertyCard from './PropertyCard';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Appartement de luxe à Bonapriso",
      location: "Bonapriso, Douala",
      price: "150 000 FCFA/mois",
      bedrooms: 3,
      bathrooms: 2,
      area: "120",
      imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
      type: "rent" as const,
      featured: true
    },
    {
      id: 2,
      title: "Villa moderne à Bastos",
      location: "Bastos, Yaoundé",
      price: "45 000 000 FCFA",
      bedrooms: 4,
      bathrooms: 3,
      area: "230",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      type: "sale" as const,
      featured: true
    },
    {
      id: 3,
      title: "Terrain constructible vue mer",
      location: "Kribi, Littoral",
      price: "12 000 000 FCFA",
      area: "500",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
      type: "land" as const
    },
    {
      id: 4,
      title: "Studio meublé au centre-ville",
      location: "Bonanjo, Douala",
      price: "95 000 FCFA/mois",
      bedrooms: 1,
      bathrooms: 1,
      area: "45",
      imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
      type: "rent" as const
    }
  ];

  return (
    <section id="properties" className="py-16 bg-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Propriétés <span className="text-gold">À Découvrir</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de propriétés exclusives au Cameroun, des appartements de luxe aux terrains constructibles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-gold hover:bg-gold/80 text-white px-8 py-6 h-auto text-base font-medium">
            Voir toutes nos propriétés
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
